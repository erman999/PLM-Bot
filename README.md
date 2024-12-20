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

To use PLM-Bot, simply include the JavaScript file in your project:

```html
<script src="plm-bot.js"></script>
```

Or if you are using Node.js:

```bash
npm install plm-bot
```

## Usage

### Single Run
You can run PLM-Bot for a single set of values:

```javascript
const plmBot = new PLM_BOT();
plmBot.set(['Activity Name', 'Request Owner', 'Activity Type', 'Responsible Department', 'Constraint Type', '2024-12-18', '5', 'kisi']).run();
```

### Batch Processing
Load multiple sets of values and run them sequentially:

```javascript
const plmBot = new PLM_BOT();
plmBot.load(['Test1', 'Department1', 'Type1', 'DepartmentA', 'ConstraintA', '2024-12-18', '5', 'kisi']);
plmBot.load(['Test2', 'Department2', 'Type2', 'DepartmentB', 'ConstraintB', '2024-12-19', '3', 'kisi']);
plmBot.runLoaded();
```

## API Reference

### Methods

#### `set(arr)`
Sets the values for the bot to use.
- **Parameters**:
  - `arr` (Array): An array of values corresponding to the selectors defined in `items`.

#### `load(arr)`
Adds a new set of values to the queue for batch processing.
- **Parameters**:
  - `arr` (Array): A dataset to be processed.

#### `run()`
Executes the bot for the current set of values.

#### `runLoaded()`
Executes the bot for all loaded datasets sequentially.

#### `checkLoader()`
Waits until the loading element (e.g., `.x-mask-loading`) disappears.

## Development

### Prerequisites

- A modern web browser with JavaScript enabled.
- Optional: Node.js for local development.

### Structure

The `PLM-BOT` class uses the following structure:
- **`items`**: Configurable list of DOM selectors, event types, and delays.
- **`loaded`**: Queue of datasets for batch processing.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance PLM-Bot.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

