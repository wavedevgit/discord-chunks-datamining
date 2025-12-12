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
  o = require.n(Chunk120356),
  Chunk391876 = require("./391876.jsx"),
  Chunk383542 = require("./383542.js");
let c = 400;

function u(e) {
  let {
    className: t,
    textClassName: n,
    text: a,
    variant: u,
    delay: d
  } = e, f = (0, i.useRef)(0), p = (0, i.useRef)(0), [_, m] = (0, i.useState)("");
  return (0, i.useEffect)(() => {
    let e = () => {
      let t = Date.now() - f.current,
        n = Math.max(Math.min(t / c, 1), 0);
      m(a.substring(0, Math.floor(n * a.length))), t < c && (p.current = window.requestAnimationFrame(e))
    };
    return f.current = Date.now() + (null != d ? d : 0), p.current = window.requestAnimationFrame(e), () => cancelAnimationFrame(p.current)
  }, [d, a]), (0, r.jsxs)("div", {
    className: o()(t, l.container),
    children: [(0, r.jsx)(s.Z, {
      "aria-hidden": true,
      className: o()(l.hiddenText, n),
      variant: u,
      children: a
    }), (0, r.jsx)(s.Z, {
      className: o()(l.animatedText, n),
      variant: u,
      children: _
    })]
  })
}