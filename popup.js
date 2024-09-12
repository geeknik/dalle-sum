document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKey');
  const promptInput = document.getElementById('prompt');
  const saveButton = document.getElementById('saveSettings');
  const summarizeButton = document.getElementById('summarize');
  const resultDiv = document.getElementById('result');

  // Load saved settings
  chrome.storage.sync.get(['apiKey', 'prompt'], function(data) {
    if (data.apiKey) apiKeyInput.value = data.apiKey;
    if (data.prompt) promptInput.value = data.prompt;
  });

  // Save settings
  saveButton.addEventListener('click', function() {
    chrome.storage.sync.set({
      apiKey: apiKeyInput.value,
      prompt: promptInput.value
    }, function() {
      alert('Settings saved!');
    });
  });

  // Summarize and visualize
  summarizeButton.addEventListener('click', function() {
    resultDiv.innerHTML = '<p>Processing... Please wait.</p>';
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "summarize"}, function(response) {
        if (chrome.runtime.lastError) {
          resultDiv.innerHTML = '<p>Error: ' + chrome.runtime.lastError.message + '</p>';
          return;
        }
        if (response && response.summary) {
          resultDiv.innerHTML += '<p>Summary generated. Creating image...</p>';
          chrome.runtime.sendMessage({
            action: "generateImage",
            summary: response.summary,
            prompt: promptInput.value
          }, function(response) {
            if (chrome.runtime.lastError) {
              resultDiv.innerHTML = '<p>Error: ' + chrome.runtime.lastError.message + '</p>';
              return;
            }
            if (response && response.imageUrl) {
              resultDiv.innerHTML = `<img src="${response.imageUrl}" alt="Generated Image" style="max-width:100%;">`;
            } else if (response && response.error) {
              resultDiv.innerHTML = `<p>Error: ${response.error}</p>`;
            } else {
              resultDiv.innerHTML = '<p>Failed to generate image. Unknown error occurred.</p>';
            }
          });
        } else {
          resultDiv.innerHTML = '<p>Failed to summarize the website.</p>';
        }
      });
    });
  });
});
