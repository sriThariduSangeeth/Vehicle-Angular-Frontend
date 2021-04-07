export class Tokens {
  jwtToken: string;
  refreshToken: string;
  userName: string;
  userNIC: string;

  constructor(jwtToken: string , refreshToken: string , userName: string , userNIC: string){
      this.jwtToken = jwtToken;
      this.refreshToken = refreshToken;
      this.userName = userName;
      this.userNIC = userNIC;
  }

  getJwtToken():string{
    return this.jwtToken;
  }

  getRefreshToke():string{
    return this.refreshToken;
  }

  getUserName():string{
    return this.userName;
  }
  
  getUserNIC():string{
    return this.userNIC;
  }
  
  
}
