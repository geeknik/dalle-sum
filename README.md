# Dalle-Sum: Website Summarizer and Visualizer

This browser extension summarizes the content of a website and generates a representative image using OpenAI's DALL-E API. It's a powerful tool for quickly visualizing the main ideas of any web page you visit.

## Features

- Summarizes the content of the current web page
- Generates a representative image using DALL-E based on the summary
- Customizable DALL-E prompt
- Works with Brave browser
- Firefox version coming soon!

## Installation

### For Brave Browser:

1. Download or clone this repository to your local machine.
2. Open Brave browser and navigate to `brave://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" button that appears after enabling developer mode.
5. Select the directory containing the extension files (manifest.json and other files).
6. The extension should now appear in your list of installed extensions.

## Usage

1. Click on the extension icon in your browser toolbar.
2. Enter your OpenAI API key in the provided field.
3. (Optional) Customize the DALL-E prompt if desired.
4. Click "Save Settings" to store your API key and prompt.
5. Navigate to a website you want to summarize and visualize.
6. Click the "Summarize and Visualize" button in the extension popup.
7. Wait for the summary and image to be generated (this may take a few seconds).
8. The generated image will be displayed in the popup.

## Requirements

- Brave Browser
- OpenAI API key (for DALL-E image generation)

## Coming Soon

- Firefox compatibility

## Notes

- This extension has been primarily tested on Brave browser. While it should work on other Chromium-based browsers, your mileage may vary.
- Make sure to keep your API key secure and do not share it with others.
- The extension uses DALL-E 3 for image generation, which may incur costs on your OpenAI account.

## Troubleshooting

If you encounter any issues:
1. Make sure your API key is correctly entered and saved.
2. Check that you have sufficient credits on your OpenAI account.
3. Try refreshing the page or reloading the extension.

For any persistent problems, please open an issue in this repository.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## License

[GPLv3](LICENSE)
