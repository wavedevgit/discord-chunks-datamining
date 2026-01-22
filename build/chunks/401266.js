/** Chunk was on web.js **/
/** chunk id: 401266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AI: () => a,
  IL: () => i
}), require("./896048.js");
let r = (0, require("./353640.js").v)(() => ({
  hasFiredFromMessage: new Set
}));

function i(e) {
  let {
    hasFiredFromMessage: t
  } = r.getState();
  t.add(e), r.setState({
    hasFiredFromMessage: t
  })
}

function a(e) {
  let {
    hasFiredFromMessage: t
  } = r.getState();
  return t.has(e)
}