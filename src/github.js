const fetchUser = async () => {
  try {
    const result = await fetch('https://api.github.com/users/rolckeirnad');
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchRepos = async () => {
  try {
    const result = await fetch('https://api.github.com/users/rolckeirnad/repos');
    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { fetchUser, fetchRepos };
