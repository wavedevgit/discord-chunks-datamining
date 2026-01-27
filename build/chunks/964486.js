/** Chunk was on web.js **/
/** chunk id: 964486, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => i,
  l0: () => o,
  u5: () => a
});
var Chunk64700 = require("./64700.js");

function i(e) {
  let t = r.useRef(e);
  r.useEffect(() => t.current(), [])
}

function a(e) {
  let t = r.useRef(e);
  r.useLayoutEffect(() => t.current(), [])
}

function o(e) {
  let t = r.useRef(e);
  r.useEffect(() => {
    t.current = e
  }), r.useEffect(() => () => {
    t.current()
  }, [])
}