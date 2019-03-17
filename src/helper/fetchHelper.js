const fetchHelper = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json()
  } else {
    throw Error('Failed to retrieve data, please try again')
  }
}

export default fetchHelper;