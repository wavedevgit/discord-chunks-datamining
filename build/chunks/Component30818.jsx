/** Chunk was on 27087 **/
/** chunk id: 30818, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk640175 = require("./640175.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88007 = require("./88007.js");

function c(e) {
  let {
    guildId: t,
    defaultSettings: n,
    canManageGuild: c
  } = e;
  return (0, r.jsxs)(l.hjN, {
    className: o.settings,
    children: [(0, r.jsxs)("div", {
      className: o.halfWidth,
      children: [(0, r.jsx)(l.vwX, {
        children: a.intl.string(a.t["23TVho"])
      }), (0, r.jsxs)(i.xvT, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: [a.intl.string(a.t.U4LwWF), " ", a.intl.string(a.t.xdY0pK)]
      })]
    }), (0, r.jsx)("div", {
      className: o.halfWidth,
      children: (0, r.jsx)(s.z, {
        guildId: t,
        defaultSettings: n,
        canManageGuild: c
      })
    })]
  })
}