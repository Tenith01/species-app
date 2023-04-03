# Species Information App

This React app allows users to enter a species name and fetch information about the species from the GBIF API. The app is built with React and TypeScript, and uses the Vite build tool and development server.

## Features

- Text input for entering species name
- Submit button to fetch species information from the GBIF API
- Display the fetched information in a suitable element

## Reusable API Function

The `api.ts` file contains a reusable function `fetchSpeciesData` that can be easily integrated into any project. To use the function in your project, simply copy and paste the contents of `api.ts` into your project and follow the instructions below:

1. Install the necessary libraries:
npm install axios @types/axios

2. Import the `fetchSpeciesData` function from the `api.ts` file:

```typescript
import { fetchSpeciesData } from './api';

3. Call the fetchSpeciesData function with a species name as an argument:
const data = await fetchSpeciesData('Canis lupus');

4.Handle the response data as needed in your project.
npm run dev
