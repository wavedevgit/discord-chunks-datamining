/** Chunk was on web.js **/
/** chunk id: 336615, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk742947 = require("./742947.js");
let l = e => {
  let {
    src: t,
    alt: n,
    size: a,
    "aria-label": l,
    className: c
  } = e, u = i.useRef(null), d = i.useRef(false), f = d.current ? o.S : o.Y;
  return (0, r.jsx)("img", {
    className: s()(f, c),
    alt: n,
    src: t,
    ref: u,
    "aria-label": l,
    style: {
      backgroundSize: a,
      height: a,
      width: a
    },
    onLoad: d.current ? true : e => {
      var t, n, r;
      (null != (t = null == (r = e.currentTarget) || null == (n = r.ownerDocument) ? true : n.defaultView) ? t : window).requestAnimationFrame(() => {
        null != u.current && (d.current = true, u.current.classList.remove(o.Y), u.current.classList.add(o.S))
      })
    }
  })
}