const url = 'https://api.github.com/users/nydevel/followers?per_page=120';

const fetchFollowers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default fetchFollowers
