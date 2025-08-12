/** Chunk was on web.js **/
/** chunk id: 302945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk422034 = require("./422034.jsx"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472326 = require("./472326.js");

function f(e) {
  let {
    affinities: t,
    className: n
  } = e, o = e => null != e.globalName ? e.globalName : e.username, f = i.useMemo(() => t.length > 1 ? u.intl.formatToPlainString(u.t.HaVk0d, {
    username: o(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let _ = t.map((e, n) => (0, r.jsx)(l.O, {
    affinity: e,
    applyMask: n !== t.length - 1,
    size: c.EF.SIZE_20
  }, e.id));
  return (0, r.jsxs)("div", {
    className: a()(d.container, n),
    children: [(0, r.jsx)("div", {
      className: d.iconContainer,
      children: _
    }), (0, r.jsx)("div", {
      className: d.textContainer,
      children: (0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        children: f
      })
    })]
  })
}