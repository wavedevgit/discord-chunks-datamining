/** Chunk was on web.js **/
/** chunk id: 976247, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  z: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk452282 = require("./452282.jsx"),
  Chunk515718 = require("./515718.js"),
  Chunk369254 = require("./369254.jsx"),
  Chunk358731 = require("./358731.js"),
  Chunk976155 = require("./976155.js");
let f = 24,
  p = 36,
  _ = 76,
  h = 88,
  m = 272;

function g(e, t) {
  let n = window.innerWidth - (e ? _ : f) * 2,
    r = window.innerHeight - 2 * h;
  if (!(0, l.eJ)(t)) return {
    width: n,
    height: r
  };
  let {
    width: i,
    height: a
  } = t, s = window.innerWidth - 2 * m, o = window.innerHeight - (e ? h : p) * 2, c = (0, l.Uj)({
    width: i,
    height: a,
    maxWidth: n,
    maxHeight: r
  }), u = (0, l.Uj)({
    width: i,
    height: a,
    maxWidth: s,
    maxHeight: o
  });
  return c.width >= u.width ? c : u
}

function E(e) {
  let {
    items: t,
    currentIndex: n,
    children: a
  } = e, l = t[n], f = g(t.length > 1, {
    width: l.width,
    height: l.height
  }), [p, _] = i.useState(0);
  return i.useEffect(() => {
    let e = () => _(e => e + 1);
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }), i.useEffect(() => {
    if (t.length > 1) {
      let e = t[(0, o.U3)(n - 1, t.length)],
        r = t[(0, o.U3)(n + 1, t.length)];
      (0, c.Z5)(e, true), t.length > 2 && (0, c.Z5)(r, true)
    }
  }, [n, t]), (0, r.jsx)(u.Ay, {
    mode: u.nY.PINNED,
    children: e => (0, r.jsx)("div", {
      className: s()(d.k4, e),
      children: f.width > 0 && f.height > 0 && a(f.width, f.height)
    }, l.url)
  })
}
let y = Chunk64700.memo(E)