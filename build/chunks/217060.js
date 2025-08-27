/** Chunk was on web.js **/
/** chunk id: 217060, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s
});
var Chunk993633 = require("./993633.js"),
  Chunk256402 = require("./256402.js"),
  Chunk955817 = require("./955817.js"),
  Chunk647438 = require("./647438.js");

function s(e, t) {
  let {
    collection: n,
    onLoadMore: s,
    scrollOffset: l = 1
  } = e, c = (0, o.useRef)(null), u = (0, i.i)(e => {
    for (let t of e) t.isIntersecting && s && s()
  });
  (0, a.b)(() => (t.current && (c.current = new IntersectionObserver(u, {
    root: (0, r.r)(null == t ? true : t.current),
    rootMargin: `0px ${100*l}% ${100*l}% ${100*l}%`
  }), c.current.observe(t.current)), () => {
    c.current && c.current.disconnect()
  }), [n, u, t, l])
}