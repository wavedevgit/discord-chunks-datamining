/** Chunk was on 13873 **/
/** chunk id: 705563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk982539 = require("./982539.js");

function y(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: y = false
  } = e, C = p.default.cast(t), {
    joinRequest: v,
    isModmin: O,
    guildId: x,
    maxMembers: E
  } = (0, i.cj)([f.Z, u.Z, d.Z], () => {
    let e = f.Z.getRequest(C),
      t = u.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), j = (0, i.e7)([c.Z], () => null != x ? c.Z.getMemberCount(x) : 0), S = null != E && (null != j ? j : 0) >= E, {
    approveRequest: P,
    rejectRequest: I,
    submitting: Z
  } = (0, m.s)(null == v ? true : v.guildId, null == v ? true : v.userId, null == v ? true : v.joinRequestId);
  return null != v && v.applicationStatus === h.wB.SUBMITTED && O ? (0, r.jsxs)("div", {
    className: _.buttons,
    children: [(0, r.jsx)(l.u, {
      text: b.intl.string(b.t.cdPGbE),
      shouldShow: S,
      children: (0, r.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: b.intl.string(b.t.BzjDQJ),
        loading: Z,
        onClick: P,
        disabled: S
      })
    }), (0, r.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: b.intl.string(b.t.hDtbsz),
      onClick: I,
      disabled: Z || v.applicationStatus !== h.wB.SUBMITTED
    }), n && (0, r.jsx)(a.Button, {
      onClick: () => {
        (0, s.openUserProfileModal)({
          userId: v.userId,
          guildId: v.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.iXAna6)
    }), y && (0, r.jsx)(o.ZP.Divider, {})]
  }) : null
}