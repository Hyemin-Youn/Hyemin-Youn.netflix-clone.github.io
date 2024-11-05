import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://[YOUR_APPWRITE_ENDPOINT]") // Appwrite API Endpoint
  .setProject("Hyemin-Youn"); // Appwrite Project ID

const account = new Account(client);

const AppwriteService = {
  login: (email, password) => account.createSession(email, password),

  // 로그아웃 메서드
  logout: async () => {
    try {
      await account.deleteSession("current");
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      return false;
    }
  },

  // 회원가입 메서드
  register: (name, email, password) => account.create("unique()", email, password, name),

  // 인증 상태 확인 메서드
  getAuthStatus: async () => {
    try {
      await account.get();
      return true;
    } catch (error) {
      console.warn("User is not authenticated:", error);
      return false;
    }
  }
};

export default AppwriteService;
