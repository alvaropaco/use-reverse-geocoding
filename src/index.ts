import { useEffect, useState } from 'react';
import OpenStreetMapResponse from './Types';

type GeoData = number | null;

type ResponseProps = {
  loading: boolean;
  error: string | null;
  address: string;
};

// Custom hook for reverse geocoding]
function useReverseGeocoding(lat: GeoData, lng: GeoData): ResponseProps {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Function to fetch address
    const fetchAddress = async () => {
      if (lat == null || lng == null) {
        setError('Latitude and longitude are required');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        if (!response.ok) throw new Error('Failed to fetch address');
        const data = await response.json() as OpenStreetMapResponse;
        setAddress(data.display_name);
      } catch (err) {
        const error = err as Error;
        setError(error?.message as string);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, [lat, lng]); // Dependencies array, useEffect will re-run when these values change

  return { loading, error, address };
}

export default useReverseGeocoding;
