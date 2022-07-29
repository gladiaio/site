import { createRouter } from "@swan-io/chicane";
import { match } from "ts-pattern";
import { DataAnalystPage } from "./pages/DataAnalyst";
import { DataScientistPage } from "./pages/DataScientist";
import { DeveloperPage } from "./pages/Developer";
import { HomePage } from "./pages/Home";

export const Router = createRouter({
  Home: "/",
  Developer: "/developer",
  DataScientist: "/data-analyst",
  DataAnalyst: "/data-scientist",
});

export function AppRouter() {
  const route = Router.useRoute([
    "Home",
    "Developer",
    "DataScientist",
    "DataAnalyst",
  ]);

  // route object is a discriminated union
  return match(route)
    .with({ name: "Home" }, HomePage)
    .with({ name: "Developer" }, DeveloperPage)
    .with({ name: "DataScientist" }, DataScientistPage)
    .with({ name: "DataAnalyst" }, DataAnalystPage)
    .otherwise(() => <h1>404</h1>);
}
