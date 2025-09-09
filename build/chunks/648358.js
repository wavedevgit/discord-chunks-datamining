/** Chunk was on web.js **/
/** chunk id: 648358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l,
  M: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js"),
  Chunk765504 = require("./765504.js"),
  Chunk865066 = require("./865066.js");
let s = "systemServiceAutoInstall";

function l() {
  Chunk433517.K.set(s, true)
}

function c() {
  let {
    installStartup: e
  } = Chunk765504.Z.useConfig({
    location: "useSystemServiceAutoInstall"
  });
  Chunk647438.useEffect(() => {
    module && null == Chunk433517.K.get(s) && (l(), (0, Chunk865066.sU)("first-start", false))
  }, [module])
}