/** Chunk was on web.js **/
/** chunk id: 302945, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk422034 = require("./422034.jsx"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612574 = require("./612574.js");

function f(e) {
  let {
    affinities: t,
    className: n
  } = e, a = e => null != e.globalName ? e.globalName : e.username, f = i.useMemo(() => t.length > 1 ? u.intl.formatToPlainString(u.t.HaVk0X, {
    username: a(t[0]),
    numFriends: t.length - 1
  }) : "", [t]);
  if (t.length <= 1) return null;
  let _ = t.map((e, n) => (0, r.jsx)(l.O, {
    affinity: e,
    applyMask: n !== t.length - 1,
    size: c.EF.SIZE_20
  }, e.id));
  return (0, r.jsxs)("div", {
    className: o()(d.container, n),
    children: [(0, r.jsx)("div", {
      className: d.iconContainer,
      children: _
    }), (0, r.jsx)("div", {
      className: d.textContainer,
      children: (0, r.jsx)(s.xvT, {
        variant: "text-sm/medium",
        children: f
      })
    })]
  })
}