// Export a constant WeakMap instance
export const weakMap = weakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the count for the endpoint
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // If the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not in the weakMap, initialize it with count 1
    weakMap.set(endpoint, 1);
  }
}
