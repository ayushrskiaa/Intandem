# Vehicle Stoppage Identification and Visualization

This project visualizes vehicle movement and identifies stoppages based on GPS data. It uses React and OpenLayers to display the vehicle path and stoppage points on an interactive map.

## Features

- **Interactive Map:** Visualizes the vehicle's route using OpenLayers.
- **Stoppage Detection:** Identifies stoppages based on a user-defined threshold (in minutes).
- **Stoppage Details:** Click on a stoppage marker to view detailed information (reach time, end time, duration).
- **Responsive UI:** Clean and user-friendly interface.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### Build for Production

```sh
npm run build
# or
yarn build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
src/
  App.jsx
  App.css
  index.jsx
  index.css
  components/
    MapComponent.jsx
public/
  data/
    data.json
```

- **App.jsx:** Main application component.
- **MapComponent.jsx:** Handles map rendering and stoppage logic.
- **data.json:** Sample vehicle data (in `public/data/`).

## Customization

- **Change Stoppage Threshold:** Use the input box above the map to set the minimum stoppage duration (in minutes).
- **Add Your Data:** Replace or update `public/data/data.json` with your own vehicle data.

## Deployment

To deploy, upload the contents of the `dist` folder to your static hosting provider (e.g., GitHub Pages, Netlify, Vercel).

## License

This project is licensed under the MIT License.

---

**Developed by [Ayush Kumar]