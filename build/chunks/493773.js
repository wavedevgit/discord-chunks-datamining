/** Chunk was on web.js **/
/** chunk id: 493773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ng: () => a,
  ZP: () => i,
  zq: () => o
});
var Chunk473749 = require("./473749.js");

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