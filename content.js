chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "summarize") {
    // Simple summarization logic (you might want to use a more sophisticated algorithm)
    const paragraphs = document.getElementsByTagName('p');
    let text = '';
    for (let i = 0; i < Math.min(5, paragraphs.length); i++) {
      text += paragraphs[i].textContent + ' ';
    }
    const summary = text.substring(0, 1000) + '...'; // Limit to 1000 characters
    sendResponse({summary: summary});
  }
  return true;
});
