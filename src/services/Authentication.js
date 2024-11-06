const users = [
    { id: 1, email: "user@example.com", password: "password123" },
    // 더 많은 유저를 추가할 수 있습니다.
  ];
  
  export function tryLogin(email, password, success, fail) {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem("TMDb-Key", user.password); // API 키 저장
      success(user);
    } else {
      fail();
    }
  }
  