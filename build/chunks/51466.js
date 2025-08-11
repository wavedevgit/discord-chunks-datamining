/** Chunk was on web.js **/
/** chunk id: 51466, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let {
    style: n
  } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  let r = t.style;
  return null != r && Object.keys(r).forEach(e => {
    n[e] = r[e]
  }), e
}
require.d(exports, {
  b: () => r
})