/** Chunk was on web.js **/
/** chunk id: 575065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s
});
var Chunk348672 = require("./348672.js"),
  Chunk484948 = require("./484948.js"),
  Chunk159447 = require("./159447.js"),
  Chunk473749 = require("./473749.js");

function s(e, t) {
  let {
    collection: n,
    onLoadMore: s,
    scrollOffset: l = 1
  } = e, c = (0, a.useRef)(null), u = (0, i.i)(e => {
    for (let t of e) t.isIntersecting && s && s()
  });
  (0, o.b)(() => (t.current && (c.current = new IntersectionObserver(u, {
    root: (0, r.r)(null == t ? true : t.current),
    rootMargin: `0px ${100*l}% ${100*l}% ${100*l}%`
  }), c.current.observe(t.current)), () => {
    c.current && c.current.disconnect()
  }), [n, u, t, l])
}