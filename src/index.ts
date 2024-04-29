import { useCallback, useEffect, useState } from 'react';
import OpenStreetMapResponse from './Types';

type GeoData = number | null;

type ResponseProps = {
  loading: boolean;
  error: string | null;
  address: string;
};

/**
 * Fetches the reverse geocoding address based on the provided latitude and longitude.
 *
 * @param lat - The latitude value.
 * @param lng - The longitude value.
 * @returns An object containing the loading state, error message, and address.
 */
function useReverseGeocoding(lat: GeoData, lng: GeoData): ResponseProps {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [address, setAddress] = useState('');

  const fetchAddress = useCallback(async () => {
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
  }, [lat, lng]);

  useEffect(() => {
    fetchAddress();
  }, [lat, lng]);

  return { loading, error, address };
}

export default useReverseGeocoding;
