/** Chunk was on web.js **/
/** chunk id: 782658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk997431 = require("./997431.js"),
  Chunk924301 = require("./924301.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk413605 = require("./413605.js"),
  Chunk697037 = require("./697037.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk701190 = require("./701190.js"),
  Chunk411198 = require("./411198.js"),
  Chunk610699 = require("./610699.jsx"),
  Chunk313876 = require("./313876.jsx"),
  Chunk778333 = require("./778333.jsx"),
  Chunk949981 = require("./949981.jsx"),
  Chunk680668 = require("./680668.jsx"),
  Chunk508273 = require("./508273.jsx"),
  Chunk143708 = require("./143708.jsx"),
  Chunk358595 = require("./358595.jsx"),
  Chunk135845 = require("./135845.jsx"),
  Chunk981631 = require("./981631.js");

function N(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: N
  } = e, {
    invite: P,
    inviteError: R
  } = (0, a.cj)([h.Z], () => ({
    invite: h.Z.getInvite(t),
    inviteError: h.Z.getInviteError(t)
  }), [t]), D = null == P;
  i.useEffect(() => {
    D && o.ZP.resolveInvite(t)
  }, [t, D]);
  let w = null != P ? P : {
      state: C.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: x
    } = (0, l.ZP)(),
    L = (0, a.e7)([m.Z], () => (null == P ? true : P.guild) != null ? m.Z.getGuild(P.guild.id) : null, [P]),
    j = (0, a.e7)([_.default], () => _.default.getId()),
    M = (0, a.e7)([u.ZP], () => {
      var e;
      return u.ZP.getGuildScheduledEvent(null == (e = w.guild_scheduled_event) ? true : e.id)
    }, [w]),
    k = () => {
      null != w.channel && o.ZP.transitionToInviteSync(w)
    },
    U = () => {
      let e = null == L && (null == P ? true : P.guild) != null ? g.Qs(P.guild) : L;
      (0, p.o)({
        guild: e,
        isMember: null != L,
        analyticsLocations: x
      }) === p.e.PROCEED && o.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: N("Invite Button Embed")
      })
    },
    G = (0, r.jsx)(v.Z, {
      onTransitionToInviteChannel: k,
      onAcceptInstantInvite: U,
      currentUserId: j,
      guild: L,
      invite: w,
      message: n
    });
  switch (w.state) {
    case C.r2o.RESOLVING:
      G = (0, r.jsx)(T.Z, {});
      break;
    case C.r2o.EXPIRED:
    case C.r2o.BANNED:
      G = (0, r.jsx)(I.Z, {
        banned: w.state === C.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case C.r2o.ERROR:
      G = (0, r.jsx)(b.Z, {
        author: n.author,
        inviteError: R
      });
      break;
    default:
      switch ((0, f.VR)(w)) {
        case f.wx.GROUP_DM:
          G = (0, r.jsx)(O.Z, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: j,
            invite: w,
            message: n
          });
          break;
        case f.wx.FRIEND:
          G = (0, r.jsx)(y.Z, {
            invite: w,
            message: n,
            getAcceptInviteContext: N
          });
          break;
        default:
          if ((0, f.TY)(w)) {
            G = (0, r.jsx)(A.Z, {
              onTransitionToInviteChannel: k,
              onAcceptInstantInvite: U,
              currentUserId: j,
              message: n,
              guild: L,
              invite: w
            });
            break
          }
          if ((0, f.Tx)(w)) {
            G = (0, r.jsx)(d.ZP, {
              guildScheduledEvent: M,
              guild: w.guild,
              channel: w.channel,
              isMember: null != L,
              onAcceptInstantInvite: U,
              onTransitionToInviteChannel: k
            });
            break
          }
          if ((0, f.P1)(w)) {
            G = (0, r.jsx)(E.Z, {
              invite: w,
              getAcceptInviteContext: N,
              message: n
            });
            break
          }(0, c.l)(w) && (G = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            isMemberOfGuild: null != L,
            invite: w,
            message: n
          }))
      }
  }
  return (0, r.jsx)(s.Z, {
    section: C.jXE.INVITE_LINK,
    children: G
  })
}