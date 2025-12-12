/** Chunk was on web.js **/
/** chunk id: 978636, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JL: () => a,
  i9: () => i
}), require("./388685.js");
let r = (0, require("./663042.js").U)(() => ({
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