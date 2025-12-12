/** Chunk was on web.js **/
/** chunk id: 648358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s,
  M: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk433517 = require("./433517.js"),
  Chunk865066 = require("./865066.js");
let a = "systemServiceAutoInstall";

function s() {
  Chunk433517.K.set(a, true)
}

function l() {
  Chunk473749.useEffect(() => {
    null == Chunk433517.K.get(a) && (s(), (0, Chunk865066.sU)("first-start", false))
  }, [])
}