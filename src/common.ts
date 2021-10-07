import { HttpAgent } from "@dfinity/agent";
import fetch from "node-fetch";
import * as Cronics from "./Cronics";
(global as any).fetch = fetch;

export const defaultAgent = new HttpAgent({
  host: "https://ic0.app",
});

export const cronics = Cronics.createActor(defaultAgent);
