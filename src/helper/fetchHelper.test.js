import React from 'react';
import fetchHelper from './fetchHelper';

describe('fetchHelper', () => {
  let mockData;

  beforeEach(() => {
    mockData = {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      hair_color: "blond"
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockData)
    }));
  });

  it('should fetch the expected parameter (URL)', () => {
    const url = 'https://swapi.co/'

    fetchHelper(url)

    expect(fetch).toHaveBeenCalledWith(url)
  });

  it('should return the expected data', async () => {
    const url = 'https://swapi.co/'

    const results = await fetchHelper(url)

    expect(results).toEqual(mockData)
  });

  it('should display error if response is not ok', async () => {
    const url = 'https://swapi.co/'

    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }));

    try {
      await fetchHelper(url)
    } catch (error) {
      expect(error.message).toBe('Failed to retrieve data, please try again')

    }
  });
})