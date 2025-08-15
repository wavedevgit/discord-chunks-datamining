/** Chunk was on 66866 **/
/** chunk id: 782658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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
  Chunk563917 = require("./563917.jsx"),
  Chunk135845 = require("./135845.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js");

function R(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: R
  } = e, {
    invite: L,
    inviteError: D
  } = (0, l.cj)([C.Z], () => ({
    invite: C.Z.getInvite(t),
    inviteError: C.Z.getInviteError(t)
  }), [t]), M = null == L;
  i.useEffect(() => {
    M && a.ZP.resolveInvite(t)
  }, [t, M]);
  let k = null != L ? L : {
      state: w.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: U
    } = (0, u.ZP)(),
    F = (0, d.v)(),
    B = (0, l.e7)([E.Z], () => (null == L ? true : L.guild) != null ? E.Z.getGuild(L.guild.id) : null, [L]),
    G = (0, l.e7)([b.default], () => b.default.getId()),
    H = (0, l.e7)([m.ZP], () => {
      var e;
      return m.ZP.getGuildScheduledEvent(null == (e = k.guild_scheduled_event) ? true : e.id)
    }, [k]),
    V = () => {
      null != k.channel && a.ZP.transitionToInviteSync(k)
    },
    z = () => {
      if (null == B && (null == L ? true : L.guild) != null) {
        let e = v.Qs(L.guild);
        if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, s.mN)(Z.L0.NSFW_SERVER_INVITE_EMBED)
      }(0, g.yU)() ? (0, h.Z)({
        analyticsSource: {
          page: w.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: w.ZY5.INVITE_EMBED,
          section: w.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: U
      }) : a.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: R("Invite Button Embed")
      })
    },
    W = (0, r.jsx)(I.Z, {
      onTransitionToInviteChannel: V,
      onAcceptInstantInvite: z,
      currentUserId: G,
      guild: B,
      invite: k,
      message: n
    });
  switch (k.state) {
    case w.r2o.RESOLVING:
      W = (0, r.jsx)(P.Z, {});
      break;
    case w.r2o.EXPIRED:
    case w.r2o.BANNED:
      W = (0, r.jsx)(T.Z, {
        banned: k.state === w.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case w.r2o.ERROR:
      W = (0, r.jsx)(y.Z, {
        author: n.author,
        inviteError: D
      });
      break;
    default:
      switch ((0, _.VR)(k)) {
        case _.wx.GROUP_DM:
          W = (0, r.jsx)(j.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: z,
            currentUserId: G,
            invite: k,
            message: n
          });
          break;
        case _.wx.FRIEND:
          W = (0, r.jsx)(x.Z, {
            invite: k,
            message: n,
            getAcceptInviteContext: R
          });
          break;
        default:
          if ((0, _.TY)(k)) {
            W = (0, r.jsx)(A.Z, {
              onTransitionToInviteChannel: V,
              onAcceptInstantInvite: z,
              currentUserId: G,
              message: n,
              guild: B,
              invite: k
            });
            break
          }
          if ((0, _.Tx)(k)) {
            W = (0, r.jsx)(f.ZP, {
              guildScheduledEvent: H,
              guild: k.guild,
              channel: k.channel,
              isMember: null != B,
              onAcceptInstantInvite: z,
              onTransitionToInviteChannel: V
            });
            break
          }
          if ((0, _.$P)(k)) {
            W = (0, r.jsx)(N.Z, {
              invite: k,
              stageInstance: k.stage_instance,
              guild: k.guild,
              isMember: null != B,
              message: n,
              onTransitionToInviteChannel: V,
              onAcceptInstantInvite: z
            });
            break
          }
          if ((0, _.P1)(k)) {
            W = (0, r.jsx)(O.Z, {
              invite: k,
              getAcceptInviteContext: R,
              message: n
            });
            break
          }!F && (0, p.l)(k) && (W = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: z,
            isMemberOfGuild: null != B,
            invite: k,
            message: n
          }))
      }
  }
  return (0, r.jsx)(o.Z, {
    section: w.jXE.INVITE_LINK,
    children: W
  })
}