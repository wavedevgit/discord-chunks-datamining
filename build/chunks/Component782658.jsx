/** Chunk was on web.js **/
/** chunk id: 782658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function x(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: x
  } = e, {
    invite: M,
    inviteError: j
  } = (0, o.cj)([y.Z], () => ({
    invite: y.Z.getInvite(t),
    inviteError: y.Z.getInviteError(t)
  }), [t]), k = null == M;
  i.useEffect(() => {
    k && a.ZP.resolveInvite(t)
  }, [t, k]);
  let U = null != M ? M : {
      state: D.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: G
    } = (0, u.ZP)(),
    B = (0, d.v)(),
    Z = (0, o.e7)([b.Z], () => (null == M ? true : M.guild) != null ? b.Z.getGuild(M.guild.id) : null, [M]),
    F = (0, o.e7)([E.default], () => E.default.getId()),
    V = (0, o.e7)([_.ZP], () => {
      var e;
      return _.ZP.getGuildScheduledEvent(null == (e = U.guild_scheduled_event) ? true : e.id)
    }, [U]),
    H = () => {
      null != U.channel && a.ZP.transitionToInviteSync(U)
    },
    Y = () => {
      if (null == Z && (null == M ? true : M.guild) != null) {
        let e = O.Qs(M.guild);
        if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, l.mN)(L.L0.NSFW_SERVER_INVITE_EMBED)
      }(0, m.yU)() ? (0, g.Z)({
        analyticsSource: {
          page: D.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: D.ZY5.INVITE_EMBED,
          section: D.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: G
      }) : a.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: x("Invite Button Embed")
      })
    },
    W = (0, r.jsx)(A.Z, {
      onTransitionToInviteChannel: H,
      onAcceptInstantInvite: Y,
      currentUserId: F,
      guild: Z,
      invite: U,
      message: n
    });
  switch (U.state) {
    case D.r2o.RESOLVING:
      W = (0, r.jsx)(R.Z, {});
      break;
    case D.r2o.EXPIRED:
    case D.r2o.BANNED:
      W = (0, r.jsx)(C.Z, {
        banned: U.state === D.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case D.r2o.ERROR:
      W = (0, r.jsx)(I.Z, {
        author: n.author,
        inviteError: j
      });
      break;
    default:
      switch ((0, h.VR)(U)) {
        case h.wx.GROUP_DM:
          W = (0, r.jsx)(S.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: Y,
            currentUserId: F,
            invite: U,
            message: n
          });
          break;
        case h.wx.FRIEND:
          W = (0, r.jsx)(T.Z, {
            invite: U,
            message: n,
            getAcceptInviteContext: x
          });
          break;
        default:
          if ((0, h.TY)(U)) {
            W = (0, r.jsx)(w.Z, {
              onTransitionToInviteChannel: H,
              onAcceptInstantInvite: Y,
              currentUserId: F,
              message: n,
              guild: Z,
              invite: U
            });
            break
          }
          if ((0, h.Tx)(U)) {
            W = (0, r.jsx)(p.ZP, {
              guildScheduledEvent: V,
              guild: U.guild,
              channel: U.channel,
              isMember: null != Z,
              onAcceptInstantInvite: Y,
              onTransitionToInviteChannel: H
            });
            break
          }
          if ((0, h.$P)(U)) {
            W = (0, r.jsx)(P.Z, {
              invite: U,
              stageInstance: U.stage_instance,
              guild: U.guild,
              isMember: null != Z,
              message: n,
              onTransitionToInviteChannel: H,
              onAcceptInstantInvite: Y
            });
            break
          }
          if ((0, h.P1)(U)) {
            W = (0, r.jsx)(v.Z, {
              invite: U,
              getAcceptInviteContext: x,
              message: n
            });
            break
          }!B && (0, f.l)(U) && (W = (0, r.jsx)(N.Z, {
            onTransitionToInviteChannel: H,
            onAcceptInstantInvite: Y,
            isMemberOfGuild: null != Z,
            invite: U,
            message: n
          }))
      }
  }
  return (0, r.jsx)(s.Z, {
    section: D.jXE.INVITE_LINK,
    children: W
  })
}