/** Chunk was on web.js **/
/** chunk id: 249268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk371583 = require("./371583.js"),
  Chunk864138 = require("./864138.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk69589 = require("./69589.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk910834 = require("./910834.js");

function p(e) {
  let {
    userId: t,
    leaderboard: n
  } = e, p = (0, i.e7)([a.default], () => a.default.getUser(t));
  if (null == p) return null;
  let h = (0, l.r)(n),
    m = s.ZP.getName(n.guild_id, true, p);
  return (0, r.jsx)(c.z, {
    imageUrl: h,
    children: (0, r.jsxs)("div", {
      className: _.userContainer,
      children: [(0, r.jsx)(d.Z, {
        user: p,
        rank: 1,
        rankBadgeVisibility: "hidden"
      }), (0, r.jsx)(o.LZC, {
        size: 8,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: _.userNameContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/semibold",
            className: _.userName,
            children: m
          }), (0, r.jsx)(o.LZC, {
            size: 4,
            horizontal: true
          }), (0, r.jsx)(u.Z, {
            className: _.winnerImage,
            leaderboard: n
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: _.userSubtitle,
          children: f.intl.string(f.t["0ScUkZ"])
        })]
      })]
    })
  })
}