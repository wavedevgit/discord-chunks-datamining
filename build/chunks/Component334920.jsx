/** Chunk was on web.js **/
/** chunk id: 334920, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13084 = require("./13084.js");
let l = e => {
  let {
    src: t,
    alt: n,
    size: o,
    "aria-label": l,
    className: c
  } = e, u = i.useRef(null), d = i.useRef(false), f = d.current ? s.image : s.imageLoading;
  return (0, r.jsx)("img", {
    className: a()(f, c),
    alt: n,
    src: t,
    ref: u,
    "aria-label": l,
    style: {
      backgroundSize: o,
      height: o,
      width: o
    },
    onLoad: d.current ? true : e => {
      var t, n, r;
      (null != (r = null == (n = e.currentTarget) || null == (t = n.ownerDocument) ? true : t.defaultView) ? r : window).requestAnimationFrame(() => {
        null != u.current && (d.current = true, u.current.classList.remove(s.imageLoading), u.current.classList.add(s.image))
      })
    }
  })
}