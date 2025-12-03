/** Chunk was on web.js **/
/** chunk id: 248998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk955204 = require("./955204.js"),
  Chunk674680 = require("./674680.jsx"),
  Chunk655219 = require("./655219.js");

function p(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, i = (0, u.oX)(t);
  if (null == i) return null;
  let o = null != n,
    {
      name: p,
      description: _,
      hideDescriptionUntilUnlock: m,
      onAction: h
    } = i,
    g = m && !o,
    E = o ? "header-primary" : "text-muted",
    b = o ? "text-default" : "text-muted",
    y = s()(n),
    O = null != h && o,
    v = () => {
      O && h()
    },
    S = O ? l.P3F : "div";
  return (0, r.jsxs)(S, {
    className: a()(f.container, O && f.actionable),
    onClick: v,
    children: [(0, r.jsx)("div", {
      className: f.iconContainer,
      children: (0, r.jsx)(d.Z, {
        achievementId: t,
        size: d.Z.Sizes.SIZE_40,
        unlocked: o
      })
    }), (0, r.jsxs)("div", {
      className: f.nameContainer,
      children: [null != n && (0, r.jsx)(l.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: f.unlocked,
        children: (0, c.Y4)(y)
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: E,
        children: p()
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: b,
        children: g ? "?????" : _()
      })]
    })]
  })
}