/** Chunk was on 97492 **/
/** chunk id: 561446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk844944 = require("./844944.js"),
  Chunk513461 = require("./513461.js"),
  Chunk123393 = require("./123393.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk116228 = require("./116228.js");

function y(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: y = false
  } = e, O = f.default.cast(t), {
    joinRequest: j,
    isModmin: v,
    guildId: x,
    maxMembers: E
  } = (0, l.cf)([p.A, u.A, d.A], () => {
    let e = p.A.getRequest(O),
      t = u.A.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.A.can(g.xBc.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), _ = (0, l.bG)([c.A], () => null != x ? c.A.getMemberCount(x) : 0), C = null != E && (null != _ ? _ : 0) >= E, {
    approveRequest: S,
    rejectRequest: I,
    submitting: N
  } = (0, b.W)(null == j ? true : j.guildId, null == j ? true : j.userId, null == j ? true : j.joinRequestId);
  return null != j && j.applicationStatus === h.B5.SUBMITTED && v ? (0, r.jsxs)("div", {
    className: A.U,
    children: [(0, r.jsx)(i.m, {
      text: m.intl.string(m.t.cdPGbE),
      shouldShow: C,
      children: (0, r.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: m.intl.string(m.t.BzjDQJ),
        loading: N,
        onClick: S,
        disabled: C
      })
    }), (0, r.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: m.intl.string(m.t.hDtbsz),
      onClick: I,
      disabled: N || j.applicationStatus !== h.B5.SUBMITTED
    }), n && (0, r.jsx)(a.Button, {
      onClick: () => {
        (0, o.openUserProfileModal)({
          userId: j.userId,
          guildId: j.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: m.intl.string(m.t.iXAna6)
    }), y && (0, r.jsx)(s.Ay.Divider, {})]
  }) : null
}