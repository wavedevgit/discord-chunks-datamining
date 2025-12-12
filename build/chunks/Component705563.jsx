/** Chunk was on 7891 **/
/** chunk id: 705563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk826581 = require("./826581.js"),
  Chunk246364 = require("./246364.js"),
  Chunk360328 = require("./360328.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk482722 = require("./482722.js");

function y(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: y = false
  } = e, v = p.default.cast(t), {
    joinRequest: _,
    isModmin: O,
    guildId: x,
    maxMembers: E
  } = (0, r.cj)([h.Z, u.Z, d.Z], () => {
    let e = h.Z.getRequest(v),
      t = u.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), j = (0, r.e7)([c.Z], () => null != x ? c.Z.getMemberCount(x) : 0), S = null != E && (null != j ? j : 0) >= E, {
    approveRequest: P,
    rejectRequest: I,
    submitting: Z
  } = (0, m.s)(null == _ ? true : _.guildId, null == _ ? true : _.userId, null == _ ? true : _.joinRequestId);
  return null != _ && _.applicationStatus === f.wB.SUBMITTED && O ? (0, i.jsxs)("div", {
    className: C.buttons,
    children: [(0, i.jsx)(l.u, {
      text: b.intl.string(b.t.cdPGbE),
      shouldShow: S,
      children: (0, i.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: b.intl.string(b.t.BzjDQJ),
        loading: Z,
        onClick: P,
        disabled: S
      })
    }), (0, i.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: b.intl.string(b.t.hDtbsz),
      onClick: I,
      disabled: Z || _.applicationStatus !== f.wB.SUBMITTED
    }), n && (0, i.jsx)(a.Button, {
      onClick: () => {
        (0, s.openUserProfileModal)({
          userId: _.userId,
          guildId: _.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.iXAna6)
    }), y && (0, i.jsx)(o.ZP.Divider, {})]
  }) : null
}