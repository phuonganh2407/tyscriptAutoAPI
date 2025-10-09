type Env = "dev" | "stag" | "prod";

interface Account {
  username: string;
  password: string;
  tenant: string;
}

export const accounts: Record<Env, Account> = {
  dev: {
    username: "0987162112",
    password: "123456789",
    tenant: "448216300912640",
  },
  stag: {
    username: "0383513969",
    password: "123456789",
    tenant: "589719020044288",
  },
  prod: {
    username: "0383513969",
    password: "123456789",
    tenant: "3557c26a-fc44-560a-ce18-3a0dc930945b",
  },
};
