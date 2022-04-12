export async function GET_getAllPosts(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GET ${url} failed`, response);
  }

  const data = await response.json();
  return {
    isLoading: !data,
    data,
  };
}

export async function POST_setPost(url, post) {
  // const
}
