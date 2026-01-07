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
let o = "systemServiceAutoInstall";

function s() {
  i.K.set(o, true)
}

function l() {
  r.useEffect(() => {
    null == i.K.get(o) && (s(), (0, a.sU)("first-start", false))
  }, [])
}