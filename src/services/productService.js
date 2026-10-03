/**
 * MediCare+ Product Service
 * 
 * Handles product fetching and prepares the frontend for future Node.js/Express
 * backend API integration with MongoDB.
 */

import { SAMPLE_PRODUCTS } from '../data/sampleProducts';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Fetch all products from the backend API if configured,
 * otherwise return local sample products.
 * 
 * @returns {Promise<Array>} List of pharmacy products
 */
export async function getProducts() {
  // If a backend API base URL is provided, fetch live data from the server
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }
      const data = await response.json();
      return Array.isArray(data) ? data : (data.products || []);
    } catch (error) {
      console.warn('Backend API connection failed, falling back to sample products:', error.message);
      return SAMPLE_PRODUCTS;
    }
  }

  // Frontend simulation mode: simulate a short network response (200ms)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...SAMPLE_PRODUCTS]);
    }, 200);
  });
}

/**
 * Fetch a single product by ID or Slug
 * 
 * @param {string} idOrSlug Product identifier or slug string
 * @returns {Promise<Object|null>}
 */
export async function getProductById(idOrSlug) {
  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${idOrSlug}`);
      if (!response.ok) throw new Error('Product not found');
      return await response.json();
    } catch (error) {
      console.warn('API fetch by ID failed:', error.message);
    }
  }

  const found = SAMPLE_PRODUCTS.find(
    (item) => item.id === idOrSlug || item.slug === idOrSlug
  );
  return found || null;
}

/**
 * Fetch a single product specifically by slug
 * 
 * @param {string} slug Product URL slug
 * @returns {Promise<Object|null>}
 */
export async function getProductBySlug(slug) {
  return getProductById(slug);
}
