import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("http://localhost/v1") // Appwrite 서버 엔드포인트
  .setProject("YOUR_PROJECT_ID"); // 프로젝트 ID

const account = new Account(client);

const AppwriteService = {
  login: (email: string, password: string) => account.createSession(email, password),
  logout: async () => account.deleteSession("current"),
  register: (name: string, email: string, password: string) => account.create("unique()", email, password, name),
  getAuthStatus: async () => account.get(),
};

export default AppwriteService;
