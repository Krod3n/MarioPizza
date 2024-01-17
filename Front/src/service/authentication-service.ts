import Login from '../model/login';

export default class AuthenticationService {

  static isAuthenticated: boolean;

  static jwt = "";
  static isLogged = false;

  static async getJwt(login: Login): Promise<any> {
    try {
      const response = await fetch('http://192.168.1.132:8080/auth/signin', {
        method: "POST",
        body: JSON.stringify(login),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        return await response.json();
      } else if (response.status === 401) {
        this.isLogged = false;
      }
    } catch (error) {
      this.isLogged = false;
    }
  }

  static async login(username: string, password: string): Promise<boolean> {
    await this.getJwt(new Login(username, password)).then((response) => {
      console.log(response);
      if (response !== undefined) {
        this.jwt = response.tokenHeader + " " + response.token;
      } else {
        this.jwt = "";
      }
    });

    console.log(this.jwt);

    const isAuthenticated = this.jwt != undefined && this.jwt.length > 0;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isLogged = isAuthenticated;
        resolve(isAuthenticated);
      }, 1000);
    });
  }

  static handleError(error: Error): void {
    this.isLogged = false;
  }
}