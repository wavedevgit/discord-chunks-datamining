/** Chunk was on web.js **/
/** chunk id: 913612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => s,
  K: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk506774 = require("./506774.js"),
  Chunk942405 = require("./942405.js");
let o = "systemServiceAutoInstall";

function s() {
  i.w.set(o, true)
}

function l() {
  r.useEffect(() => {
    null == i.w.get(o) && (s(), (0, a.sL)("first-start", false))
  }, [])
}