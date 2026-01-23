/** Chunk was on web.js **/
/** chunk id: 508971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927018 = require("./927018.js"),
  Chunk906688 = require("./906688.jsx"),
  Chunk869295 = require("./869295.js");

function p(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, i = (0, u.vM)(t);
  if (null == i) return null;
  let s = null != n,
    {
      name: p,
      description: _,
      hideDescriptionUntilUnlock: h,
      onAction: m
    } = i,
    g = h && !s,
    E = s ? "text-strong" : "text-muted",
    y = s ? "text-default" : "text-muted",
    b = o()(n),
    O = null != m && s,
    v = () => {
      O && m()
    },
    A = O ? l.DUT : "div";
  return (0, r.jsxs)(A, {
    className: a()(f.kL, O && f.b),
    onClick: v,
    children: [(0, r.jsx)("div", {
      className: f.zc,
      children: (0, r.jsx)(d.A, {
        achievementId: t,
        size: d.A.Sizes.SIZE_40,
        unlocked: s
      })
    }), (0, r.jsxs)("div", {
      className: f.VW,
      children: [null != n && (0, r.jsx)(l.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: f.YR,
        children: (0, c.mk)(b)
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: E,
        children: p()
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: y,
        children: g ? "?????" : _()
      })]
    })]
  })
}