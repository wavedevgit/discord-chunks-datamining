/** Chunk was on web.js **/
/** chunk id: 782658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk906732 = require("./906732.jsx"),
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

function D(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: D
  } = e, {
    invite: x,
    inviteError: L
  } = (0, a.cj)([b.Z], () => ({
    invite: b.Z.getInvite(t),
    inviteError: b.Z.getInviteError(t)
  }), [t]), M = null == x;
  i.useEffect(() => {
    M && o.ZP.resolveInvite(t)
  }, [t, M]);
  let k = null != x ? x : {
      state: P.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: j
    } = (0, u.ZP)(),
    U = (0, a.e7)([E.Z], () => (null == x ? true : x.guild) != null ? E.Z.getGuild(x.guild.id) : null, [x]),
    G = (0, a.e7)([g.default], () => g.default.getId()),
    B = (0, a.e7)([f.ZP], () => {
      var e;
      return f.ZP.getGuildScheduledEvent(null == (e = k.guild_scheduled_event) ? true : e.id)
    }, [k]),
    Z = () => {
      null != k.channel && o.ZP.transitionToInviteSync(k)
    },
    F = () => {
      if (null == U && (null == x ? true : x.guild) != null) {
        let e = y.Qs(x.guild);
        if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, l.mN)(w.L0.NSFW_SERVER_INVITE_EMBED)
      }(0, h.yU)() ? (0, m.Z)({
        analyticsSource: {
          page: P.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: P.ZY5.INVITE_EMBED,
          section: P.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: j
      }) : o.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: D("Invite Button Embed")
      })
    },
    V = (0, r.jsx)(S.Z, {
      onTransitionToInviteChannel: Z,
      onAcceptInstantInvite: F,
      currentUserId: G,
      guild: U,
      invite: k,
      message: n
    });
  switch (k.state) {
    case P.r2o.RESOLVING:
      V = (0, r.jsx)(N.Z, {});
      break;
    case P.r2o.EXPIRED:
    case P.r2o.BANNED:
      V = (0, r.jsx)(C.Z, {
        banned: k.state === P.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case P.r2o.ERROR:
      V = (0, r.jsx)(v.Z, {
        author: n.author,
        inviteError: L
      });
      break;
    default:
      switch ((0, p.VR)(k)) {
        case p.wx.GROUP_DM:
          V = (0, r.jsx)(T.Z, {
            onTransitionToInviteChannel: Z,
            onAcceptInstantInvite: F,
            currentUserId: G,
            invite: k,
            message: n
          });
          break;
        case p.wx.FRIEND:
          V = (0, r.jsx)(I.Z, {
            invite: k,
            message: n,
            getAcceptInviteContext: D
          });
          break;
        default:
          if ((0, p.TY)(k)) {
            V = (0, r.jsx)(R.Z, {
              onTransitionToInviteChannel: Z,
              onAcceptInstantInvite: F,
              currentUserId: G,
              message: n,
              guild: U,
              invite: k
            });
            break
          }
          if ((0, p.Tx)(k)) {
            V = (0, r.jsx)(_.ZP, {
              guildScheduledEvent: B,
              guild: k.guild,
              channel: k.channel,
              isMember: null != U,
              onAcceptInstantInvite: F,
              onTransitionToInviteChannel: Z
            });
            break
          }
          if ((0, p.P1)(k)) {
            V = (0, r.jsx)(O.Z, {
              invite: k,
              getAcceptInviteContext: D,
              message: n
            });
            break
          }(0, d.l)(k) && (V = (0, r.jsx)(A.Z, {
            onTransitionToInviteChannel: Z,
            onAcceptInstantInvite: F,
            isMemberOfGuild: null != U,
            invite: k,
            message: n
          }))
      }
  }
  return (0, r.jsx)(s.Z, {
    section: P.jXE.INVITE_LINK,
    children: V
  })
}