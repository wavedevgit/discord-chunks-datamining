/** Chunk was on web.js **/
/** chunk id: 841252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk224850 = require("./224850.jsx"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk353074 = require("./353074.js");

function f(e) {
  let {
    affinities: t,
    className: n
  } = e, a = e => null != e.globalName ? e.globalName : e.username, f = i.useMemo(() => t.length > 1 ? u.intl.formatToPlainString(u.t.HaVk0X, {
    username: a(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let p = t.map((e, n) => (0, r.jsx)(l.n, {
    affinity: e,
    applyMask: n !== t.length - 1,
    size: c._3.SIZE_20
  }, e.id));
  return (0, r.jsxs)("div", {
    className: s()(d.kL, n),
    children: [(0, r.jsx)("div", {
      className: d.zc,
      children: p
    }), (0, r.jsx)("div", {
      className: d.FS,
      children: (0, r.jsx)(o.EYj, {
        variant: "text-sm/medium",
        children: f
      })
    })]
  })
}