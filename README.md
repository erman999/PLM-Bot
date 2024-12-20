# PLM-Bot

PLM-Bot is a JavaScript-based automation tool designed for streamlining repetitive tasks within a PLM (Product Lifecycle Management) system. It works by interacting with DOM elements, dispatching events, and managing delays to mimic user actions.

## Description
PLM-Bot simplifies interaction with web-based PLM systems by automating tedious manual operations, ensuring efficiency and reducing human error. With its event-driven approach and loader handling capabilities, it is ideal for environments where quick and accurate task execution is critical.

## Features

- **Dynamic Event Dispatching**: Simulates user inputs like `click`, `input`, `change`, and more.
- **Loader Detection**: Automatically waits for loaders to resolve before continuing operations.
- **Batch Processing**: Handles multiple data sets in sequence using a queuing mechanism.
- **Customizable Delays**: Allows precise control of delays between interactions.
- **Simple API**: Easy-to-use methods for setting and loading data.

## Installation

To use PLM-Bot, simply run the following command in your browser's Developer Tools Console (F12):

```javascript
document.head.insertAdjacentElement('beforeend', Object.assign(document.createElement('script'), { src: 'https://cdn.jsdelivr.net/gh/erman999/PLM-Bot/PLM_Bot.js', type: 'text/javascript' }));
```

This will dynamically load the script into the current webpage.

## Usage

PLM Bot automatically activates itself on load but can be triggered manually

```javascript
const plmBot = new PLM_Bot();
```

### Single Run
You can run PLM-Bot for a single set of values:

```javascript
plmBot.set(['Activity Name', 'Request Owner', 'Activity Type', 'Responsible Department', 'Constraint Type', '2024-12-18', '5', 'kisi']).run();
```

### Batch Processing
Load multiple sets of values and run them sequentially:

```javascript
plmBot.load(['Test1', 'Department1', 'Type1', 'DepartmentA', 'ConstraintA', '2024-12-18', '5', 'kisi']);
plmBot.load(['Test2', 'Department2', 'Type2', 'DepartmentB', 'ConstraintB', '2024-12-19', '3', 'kisi']);
plmBot.runLoaded();
```

### Accessing the Bot
1. Open the website where you want to use PLM-Bot.
2. Press `F12` to open Developer Tools.
3. Paste the installation script into the console and press `Enter`.
4. Use the provided examples to configure and run the bot.

## Development

### Prerequisites

- Google Chrome or any modern browser with Developer Tools.

### Structure

The `PLM-BOT` class uses the following structure:
- **`items`**: Configurable list of DOM selectors, event types, and delays.
- **`loaded`**: Queue of datasets for batch processing.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance PLM-Bot.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

