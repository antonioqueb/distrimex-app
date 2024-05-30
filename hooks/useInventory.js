// hooks/useInventory.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useInventory = () => {
  const { data, error } = useSWR('/api/inventory', fetcher);

  return {
    inventoryData: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
