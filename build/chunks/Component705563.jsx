/** Chunk was on 40184 **/
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
  Chunk679817 = require("./679817.js");

function y(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: y = false
  } = e, v = p.default.cast(t), {
    joinRequest: O,
    isModmin: x,
    guildId: E,
    maxMembers: j
  } = (0, r.cj)([f.Z, u.Z, d.Z], () => {
    let e = f.Z.getRequest(v),
      t = u.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), S = (0, r.e7)([c.Z], () => null != E ? c.Z.getMemberCount(E) : 0), _ = null != j && (null != S ? S : 0) >= j, {
    approveRequest: P,
    rejectRequest: I,
    submitting: Z
  } = (0, m.s)(null == O ? true : O.guildId, null == O ? true : O.userId, null == O ? true : O.joinRequestId);
  return null != O && O.applicationStatus === h.wB.SUBMITTED && x ? (0, i.jsxs)("div", {
    className: C.buttons,
    children: [(0, i.jsx)(l.u, {
      text: b.intl.string(b.t.cdPGbE),
      shouldShow: _,
      children: (0, i.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: b.intl.string(b.t.BzjDQJ),
        loading: Z,
        onClick: P,
        disabled: _
      })
    }), (0, i.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: b.intl.string(b.t.hDtbsz),
      onClick: I,
      disabled: Z || O.applicationStatus !== h.wB.SUBMITTED
    }), n && (0, i.jsx)(a.Button, {
      onClick: () => {
        (0, s.openUserProfileModal)({
          userId: O.userId,
          guildId: O.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.iXAna6)
    }), y && (0, i.jsx)(o.ZP.Divider, {})]
  }) : null
}