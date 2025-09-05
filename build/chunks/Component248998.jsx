/** Chunk was on web.js **/
/** chunk id: 248998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk955204 = require("./955204.js"),
  Chunk674680 = require("./674680.jsx"),
  Chunk934937 = require("./934937.js");

function _(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, i = (0, u.oX)(t);
  if (null == i) return null;
  let o = null != n,
    {
      name: _,
      description: p,
      hideDescriptionUntilUnlock: h,
      onAction: m
    } = i,
    g = h && !o,
    E = o ? "header-primary" : "text-muted",
    b = o ? "header-secondary" : "text-muted",
    y = s()(n),
    O = null != m && o,
    v = () => {
      O && m()
    },
    I = O ? l.P3F : "div";
  return (0, r.jsxs)(I, {
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
        children: _()
      }), (0, r.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: b,
        children: g ? "?????" : p()
      })]
    })]
  })
}