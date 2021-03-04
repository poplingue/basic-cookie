module.exports = {
  getCookie: function (name: string) {
    let cookie = null;
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
      const cookiePair = cookies[i].split('=');

      if (name === cookiePair[0].trim()) {
        cookie = JSON.parse(decodeURIComponent(cookiePair[1]));
      }
    }
    return cookie;
  },

  eraseCookie: function (name: string) {
    document.cookie = `${name}=;max-age=0`;
  },

  setCookie: function (name: string, value: string, maxAge: number) {
    if (this.getCookie(name)) {
      this.eraseCookie(name);
    }
    document.cookie = `${name}=${JSON.stringify(value)};max-age=${maxAge};path=/`;
  },
};
