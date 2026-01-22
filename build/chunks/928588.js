/** Chunk was on web.js **/
/** chunk id: 928588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js");
let r = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

function i(e) {
  let {
    allowPopups: t
  } = e, n = r;
  return t && (n = [...r, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
}