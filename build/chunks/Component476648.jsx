/** Chunk was on web.js **/
/** chunk id: 476648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  f: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk877272 = require("./877272.jsx"),
  Chunk834450 = require("./834450.js");
let c = 400;

function u(e) {
  let {
    className: t,
    textClassName: n,
    text: a,
    variant: u,
    delay: d
  } = e, f = (0, i.useRef)(0), p = (0, i.useRef)(0), [_, h] = (0, i.useState)("");
  return (0, i.useEffect)(() => {
    let e = () => {
      let t = Date.now() - f.current,
        n = Math.max(Math.min(t / c, 1), 0);
      h(a.substring(0, Math.floor(n * a.length))), t < c && (p.current = window.requestAnimationFrame(e))
    };
    return f.current = Date.now() + (null != d ? d : 0), p.current = window.requestAnimationFrame(e), () => cancelAnimationFrame(p.current)
  }, [d, a]), (0, r.jsxs)("div", {
    className: s()(t, l.kL),
    children: [(0, r.jsx)(o.A, {
      "aria-hidden": true,
      className: s()(l.CZ, n),
      variant: u,
      children: a
    }), (0, r.jsx)(o.A, {
      className: s()(l.Hi, n),
      variant: u,
      children: _
    })]
  })
}