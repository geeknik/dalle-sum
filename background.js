chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "generateImage") {
    chrome.storage.sync.get('apiKey', function(data) {
      const apiKey = data.apiKey;
      if (!apiKey) {
        sendResponse({error: "API key not set"});
        return;
      }

      const prompt = `${request.prompt}: ${request.summary}`;

      fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "dall-e-3",
          prompt: prompt,
          n: 1,
          size: "1024x1024"
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.data && data.data[0] && data.data[0].url) {
          sendResponse({imageUrl: data.data[0].url});
        } else {
          throw new Error("No image URL in the response");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        sendResponse({error: error.message || "Error calling DALL-E API"});
      });
    });
    return true; // Indicates we will send a response asynchronously
  }
});
