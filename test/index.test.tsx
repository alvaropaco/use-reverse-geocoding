import { renderHook } from '@testing-library/react-hooks';
import useReverseGeocoding from '../src';

describe('useReverseGeocoding', () => {
  it('should return valid address information', async () => {
    // Coordinates for a known location
    const lat = 40.7745869;
    const lng = -73.9841769;

    // Use your hook to get the address information
    const { result, waitForNextUpdate } = renderHook(() => useReverseGeocoding(lat, lng));

    await waitForNextUpdate();

    // Check if the response has the expected structure
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.address).toBeTruthy();

    // Validate some key properties to ensure we have the expected response
    const address = JSON.parse(result.current.address);
    expect(address).toHaveProperty('place_id');
    expect(address).toHaveProperty('licence');
    expect(address).toHaveProperty('osm_type');
    expect(address).toHaveProperty('display_name');
    expect(address).toHaveProperty('address');
  });
});
