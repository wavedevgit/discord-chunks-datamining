/** Chunk was on web.js **/
/** chunk id: 6494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => o
});
var Chunk150047 = require("./150047.js"),
  Chunk959462 = require("./959462.js"),
  Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");

function o(e, t) {
  let {
    collection: n,
    onLoadMore: o,
    scrollOffset: l = 1
  } = e, c = (0, s.useRef)(null), u = (0, i.J)(e => {
    for (let t of e) t.isIntersecting && o && o()
  });
  (0, a.N)(() => (t.current && (c.current = new IntersectionObserver(u, {
    root: (0, r.m)(null == t ? true : t.current),
    rootMargin: `0px ${100*l}% ${100*l}% ${100*l}%`
  }), c.current.observe(t.current)), () => {
    c.current && c.current.disconnect()
  }), [n, u, t, l])
}