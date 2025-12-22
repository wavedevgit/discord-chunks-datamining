/** Chunk was on web.js **/
/** chunk id: 718108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk795448 = require("./795448.js"),
  Chunk441623 = require("./441623.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186120 = require("./186120.js");

function p(e) {
  let {
    profileUserId: t
  } = e, n = (0, i.e7)([s.default], () => s.default.getUser(t), [t]), p = (0, i.e7)([s.default], () => s.default.getCurrentUser()), _ = (0, i.e7)([c.ZP], () => c.ZP.getFriendAnniversaryYears(t), [t]);
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)("div", {
      className: f.closeButton,
      children: (0, r.jsx)(a.hU, {
        icon: a.Dio,
        size: "sm",
        variant: "icon-only",
        "aria-label": d.intl.string(d.t.cpT0Cq),
        onClick: () => (0, l.X9)(t)
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.icDVNb)
    }), (0, r.jsxs)("div", {
      className: f.subtitleContainer,
      children: [null != n && (0, r.jsx)(o.Z, {
        size: u.EF.SIZE_16,
        user: n
      }), null != p && (0, r.jsx)(o.Z, {
        className: f.currentUserAvatar,
        size: u.EF.SIZE_16,
        user: p
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-strong",
        children: d.intl.formatToPlainString(d.t.PpG27s, {
          numberOfYears: _
        })
      })]
    })]
  })
}