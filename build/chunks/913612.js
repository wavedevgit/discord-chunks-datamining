/** Chunk was on web.js **/
/** chunk id: 913612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o,
  K: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk506774 = require("./506774.js"),
  Chunk942405 = require("./942405.js");
let s = "systemServiceAutoInstall";

function o() {
  i.w.set(s, true)
}

function l() {
  r.useEffect(() => {
    null == i.w.get(s) && (o(), (0, a.sL)("first-start", false))
  }, [])
}