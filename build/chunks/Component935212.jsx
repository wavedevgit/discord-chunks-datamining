/** Chunk was on web.js **/
/** chunk id: 935212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  t: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk391876 = require("./391876.jsx"),
  Chunk831880 = require("./831880.js");
let c = 400;

function u(e) {
  let {
    className: t,
    textClassName: n,
    text: o,
    variant: u,
    delay: d
  } = e, f = (0, i.useRef)(0), p = (0, i.useRef)(0), [_, m] = (0, i.useState)("");
  return (0, i.useEffect)(() => {
    let e = () => {
      let t = Date.now() - f.current,
        n = Math.max(Math.min(t / c, 1), 0);
      m(o.substring(0, Math.floor(n * o.length))), t < c && (p.current = window.requestAnimationFrame(e))
    };
    return f.current = Date.now() + (null != d ? d : 0), p.current = window.requestAnimationFrame(e), () => cancelAnimationFrame(p.current)
  }, [d, o]), (0, r.jsxs)("div", {
    className: a()(t, l.container),
    children: [(0, r.jsx)(s.Z, {
      "aria-hidden": true,
      className: a()(l.hiddenText, n),
      variant: u,
      children: o
    }), (0, r.jsx)(s.Z, {
      className: a()(l.animatedText, n),
      variant: u,
      children: _
    })]
  })
}