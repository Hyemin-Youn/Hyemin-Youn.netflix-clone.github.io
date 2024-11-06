// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  
  export function tryRegister(email, password, success, fail) {
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      fail("이미 존재하는 이메일입니다.");
    } else {
      const newUser = { id: users.length + 1, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users)); // 로컬 스토리지에 사용자 데이터 저장
      success(newUser);
    }
  }
  