import { readFileSync } from "node:fs";
import pkg from "jsdom";
const { JSDOM } = pkg;
const dom = new JSDOM("<!doctype html><html><body><div id=root></div></body></html>", {
  url: "https://x.example/", pretendToBeVisual: true, runScripts: "dangerously",
});
const w = dom.window;
try {
  w.eval(readFileSync("/tmp/bundle.js", "utf8"));
  console.log("EVAL OK");
} catch (e) {
  console.log("MSG :", e.message);
  console.log("--- stack ---");
  console.log(String(e.stack).split("\n").slice(0, 22).join("\n"));
}
