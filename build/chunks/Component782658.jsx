/** Chunk was on 26434 **/
/** chunk id: 782658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk749958 = require("./749958.js"),
  Chunk997431 = require("./997431.js"),
  Chunk924301 = require("./924301.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk413605 = require("./413605.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function Z(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: Z
  } = e, {
    invite: R,
    inviteError: D
  } = (0, l.cj)([C.Z], () => ({
    invite: C.Z.getInvite(t),
    inviteError: C.Z.getInviteError(t)
  }), [t]), L = null == R;
  i.useEffect(() => {
    L && o.ZP.resolveInvite(t)
  }, [t, L]);
  let M = null != R ? R : {
      state: A.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: k
    } = (0, u.ZP)(),
    U = (0, d.v)(),
    F = (0, l.e7)([E.Z], () => (null == R ? true : R.guild) != null ? E.Z.getGuild(R.guild.id) : null, [R]),
    B = (0, l.e7)([b.default], () => b.default.getId()),
    G = (0, l.e7)([m.ZP], () => {
      var e;
      return m.ZP.getGuildScheduledEvent(null == (e = M.guild_scheduled_event) ? true : e.id)
    }, [M]),
    H = () => {
      null != M.channel && o.ZP.transitionToInviteSync(M)
    },
    V = () => {
      if (null == F && (null == R ? true : R.guild) != null) {
        let e = v.Qs(R.guild);
        if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, s.mN)(w.L0.NSFW_SERVER_INVITE_EMBED)
      }(0, _.yU)() ? (0, h.Z)({
        analyticsSource: {
          page: A.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: A.ZY5.INVITE_EMBED,
          section: A.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: k
      }) : o.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: Z("Invite Button Embed")
      })
    },
    z = (0, r.jsx)(I.Z, {
      onTransitionToInviteChannel: H,
      onAcceptInstantInvite: V,
      currentUserId: B,
      guild: F,
      invite: M,
      message: n
    });
  switch (M.state) {
    case A.r2o.RESOLVING:
      z = (0, r.jsx)(P.Z, {});
      break;
    case A.r2o.EXPIRED:
    case A.r2o.BANNED:
      z = (0, r.jsx)(T.Z, {
        banned: M.state === A.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case A.r2o.ERROR:
      z = (0, r.jsx)(y.Z, {
        author: n.author,
        inviteError: D
      });
      break;
    default:
      switch ((0, g.VR)(M)) {
        case g.wx.GROUP_DM:
          z = (0, r.jsx)(j.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            currentUserId: B,
            invite: M,
            message: n
          });
          break;
        case g.wx.FRIEND:
          z = (0, r.jsx)(x.Z, {
            invite: M,
            message: n,
            getAcceptInviteContext: Z
          });
          break;
        default:
          if ((0, g.TY)(M)) {
            z = (0, r.jsx)(N.Z, {
              onTransitionToInviteChannel: H,
              onAcceptInstantInvite: V,
              currentUserId: B,
              message: n,
              guild: F,
              invite: M
            });
            break
          }
          if ((0, g.Tx)(M)) {
            z = (0, r.jsx)(f.ZP, {
              guildScheduledEvent: G,
              guild: M.guild,
              channel: M.channel,
              isMember: null != F,
              onAcceptInstantInvite: V,
              onTransitionToInviteChannel: H
            });
            break
          }
          if ((0, g.P1)(M)) {
            z = (0, r.jsx)(O.Z, {
              invite: M,
              getAcceptInviteContext: Z,
              message: n
            });
            break
          }!U && (0, p.l)(M) && (z = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: V,
            isMemberOfGuild: null != F,
            invite: M,
            message: n
          }))
      }
  }
  return (0, r.jsx)(a.Z, {
    section: A.jXE.INVITE_LINK,
    children: z
  })
}