/** Chunk was on 97887 **/
/** chunk id: 831741, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => y
}), require("./457529.js");
var r, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk883885 = require("./883885.js"),
  u = require.n(Chunk883885),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk455902 = require("./455902.js"),
  Chunk423993 = require("./423993.js"),
  Chunk851007 = require("./851007.js");

function m(e) {
  let t = (0, d.bG)([p.A], () => p.A.useReducedMotion),
    n = s.useRef(null);
  return s.useEffect(() => {
    let r;
    return null != n.current && (r = u().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: true,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == r || r.destroy()
    }
  }, [n, t, e]), n
}

function b(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)("div", {
    ref: m(r || (r = n.t(h, 2))),
    className: o()(g.ys, t)
  })
}

function A(e) {
  let {
    className: t
  } = e;
  return (0, i.jsx)("div", {
    ref: m(l || (l = n.t(f, 2))),
    className: o()(g.R0, t)
  })
}
let y = e => {
  let {
    children: t,
    animationContainerClassName: n,
    glowClassName: r,
    trinketsClassName: l,
    onMount: a
  } = e;
  return s.useEffect(() => {
    a()
  }, [a]), (0, i.jsxs)("div", {
    className: n,
    children: [(0, i.jsx)(b, {
      className: r
    }), (0, i.jsx)("div", {
      className: g.cw
    }), (0, i.jsx)("div", {
      className: g.h$,
      children: t
    }), (0, i.jsx)(A, {
      className: l
    })]
  })
}