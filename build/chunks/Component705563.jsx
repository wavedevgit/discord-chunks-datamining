/** Chunk was on 82124 **/
/** chunk id: 705563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: v = false
  } = e, O = p.default.cast(t), {
    joinRequest: j,
    isModmin: x,
    guildId: C,
    maxMembers: E
  } = (0, i.cj)([f.Z, u.Z, d.Z], () => {
    let e = f.Z.getRequest(O),
      t = u.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.Z.can(m.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), S = (0, i.e7)([c.Z], () => null != C ? c.Z.getMemberCount(C) : 0), _ = null != E && (null != S ? S : 0) >= E, {
    approveRequest: I,
    rejectRequest: P,
    submitting: Z
  } = (0, g.s)(null == j ? true : j.guildId, null == j ? true : j.userId, null == j ? true : j.joinRequestId);
  return null != j && j.applicationStatus === h.wB.SUBMITTED && x ? (0, r.jsxs)("div", {
    className: y.buttons,
    children: [(0, r.jsx)(l.u, {
      text: b.intl.string(b.t.cdPGbE),
      shouldShow: _,
      children: (0, r.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: b.intl.string(b.t.BzjDQJ),
        loading: Z,
        onClick: I,
        disabled: _
      })
    }), (0, r.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: b.intl.string(b.t.hDtbsz),
      onClick: P,
      disabled: Z || j.applicationStatus !== h.wB.SUBMITTED
    }), n && (0, r.jsx)(a.Button, {
      onClick: () => {
        (0, s.openUserProfileModal)({
          userId: j.userId,
          guildId: j.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: b.intl.string(b.t.iXAna6)
    }), v && (0, r.jsx)(o.ZP.Divider, {})]
  }) : null
}