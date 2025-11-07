/** Chunk was on 57336 **/
/** chunk id: 705563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk482722 = require("./482722.js");

function C(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: C = false
  } = e, v = p.default.cast(t), {
    joinRequest: _,
    isModmin: x,
    guildId: O,
    maxMembers: j
  } = (0, r.cj)([h.Z, u.Z, d.Z], () => {
    let e = h.Z.getRequest(v),
      t = u.Z.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.Z.can(g.Plq.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), E = (0, r.e7)([c.Z], () => null != O ? c.Z.getMemberCount(O) : 0), S = null != j && (null != E ? E : 0) >= j, {
    approveRequest: P,
    rejectRequest: I,
    submitting: Z
  } = (0, m.s)(null == _ ? true : _.guildId, null == _ ? true : _.userId, null == _ ? true : _.joinRequestId);
  return null != _ && _.applicationStatus === f.wB.SUBMITTED && x ? (0, i.jsxs)("div", {
    className: y.buttons,
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
    }), C && (0, i.jsx)(o.ZP.Divider, {})]
  }) : null
}