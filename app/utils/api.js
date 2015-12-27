var api = {
  cleanupUsername(username) {
    return username.toLowerCase().trim();
  },
  getBio(username) {
    username = this.cleanupUsername(username);
    let url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = this.cleanupUsername(username);
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNotes(username) {
    username = this.cleanupUsername(username);
    var url = `https://brandoncc-github-saver.firebaseio.com/${username}.json`
    return fetch(url).then((res) => res.json());
  },
  addNote(username, note) {
    username = this.cleanupUsername(username);
    var url = `https://brandoncc-github-saver.firebaseio.com/${username}.json`
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
}

module.exports = api;
