/** Chunk was on 20941 **/
/** chunk id: 476648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u,
  f: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
  } = e, m = (0, l.useRef)(0), f = (0, l.useRef)(0), [p, h] = (0, l.useState)("");
  return (0, l.useEffect)(() => {
    let e = () => {
      let t = Date.now() - m.current,
        n = Math.max(Math.min(t / c, 1), 0);
      h(a.substring(0, Math.floor(n * a.length))), t < c && (f.current = window.requestAnimationFrame(e))
    };
    return m.current = Date.now() + (null != d ? d : 0), f.current = window.requestAnimationFrame(e), () => cancelAnimationFrame(f.current)
  }, [d, a]), (0, r.jsxs)("div", {
    className: i()(t, o.kL),
    children: [(0, r.jsx)(s.A, {
      "aria-hidden": true,
      className: i()(o.CZ, n),
      variant: u,
      children: a
    }), (0, r.jsx)(s.A, {
      className: i()(o.Hi, n),
      variant: u,
      children: p
    })]
  })
}