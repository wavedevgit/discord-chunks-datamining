/** Chunk was on 17869 **/
/** chunk id: 561446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    channelId: t,
    showProfile: n = false,
    showTrailingDivider: _ = false
  } = e, y = h.default.cast(t), {
    joinRequest: E,
    isModmin: v,
    guildId: O,
    maxMembers: C
  } = (0, r.cf)([p.A, u.A, d.A], () => {
    let e = p.A.getRequest(y),
      t = u.A.getGuild(null == e ? true : e.guildId);
    return {
      joinRequest: e,
      isModmin: null != t && d.A.can(g.xBc.KICK_MEMBERS, t),
      guildId: null == t ? true : t.id,
      maxMembers: null == t ? true : t.maxMembers
    }
  }), S = (0, r.bG)([c.A], () => null != O ? c.A.getMemberCount(O) : 0), x = null != C && (null != S ? S : 0) >= C, {
    approveRequest: j,
    rejectRequest: I,
    submitting: T
  } = (0, m.W)(null == E ? true : E.guildId, null == E ? true : E.userId, null == E ? true : E.joinRequestId);
  return null != E && E.applicationStatus === f.B5.SUBMITTED && v ? (0, l.jsxs)("div", {
    className: b.U,
    children: [(0, l.jsx)(i.m, {
      text: A.intl.string(A.t.cdPGbE),
      shouldShow: x,
      children: (0, l.jsx)(a.Button, {
        variant: "active",
        size: "sm",
        text: A.intl.string(A.t.BzjDQJ),
        loading: T,
        onClick: j,
        disabled: x
      })
    }), (0, l.jsx)(a.Button, {
      variant: "critical-primary",
      size: "sm",
      text: A.intl.string(A.t.hDtbsz),
      onClick: I,
      disabled: T || E.applicationStatus !== f.B5.SUBMITTED
    }), n && (0, l.jsx)(a.Button, {
      onClick: () => {
        (0, o.openUserProfileModal)({
          userId: E.userId,
          guildId: E.guildId
        })
      },
      variant: "secondary",
      size: "sm",
      text: A.intl.string(A.t.iXAna6)
    }), _ && (0, l.jsx)(s.Ay.Divider, {})]
  }) : null
}