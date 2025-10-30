/** Chunk was on web.js **/
/** chunk id: 782658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
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

function L(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: L
  } = e, {
    invite: x,
    inviteError: M
  } = (0, a.cj)([y.Z], () => ({
    invite: y.Z.getInvite(t),
    inviteError: y.Z.getInviteError(t)
  }), [t]), k = null == x;
  i.useEffect(() => {
    k && o.ZP.resolveInvite(t)
  }, [t, k]);
  let j = null != x ? x : {
      state: w.r2o.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: U
    } = (0, u.ZP)(),
    G = (0, d.v)(),
    B = (0, a.e7)([b.Z], () => (null == x ? true : x.guild) != null ? b.Z.getGuild(x.guild.id) : null, [x]),
    Z = (0, a.e7)([E.default], () => E.default.getId()),
    F = (0, a.e7)([_.ZP], () => {
      var e;
      return _.ZP.getGuildScheduledEvent(null == (e = j.guild_scheduled_event) ? true : e.id)
    }, [j]),
    V = () => {
      null != j.channel && o.ZP.transitionToInviteSync(j)
    },
    H = () => {
      if (null == B && (null == x ? true : x.guild) != null) {
        let e = O.Qs(x.guild);
        if ((0, c.bN)() && (0, c.Yt)(e)) return void(0, l.mN)(D.L0.NSFW_SERVER_INVITE_EMBED)
      }(0, m.yU)() ? (0, g.Z)({
        analyticsSource: {
          page: w.ZY5.INVITE_EMBED
        },
        analyticsLocation: {
          page: w.ZY5.INVITE_EMBED,
          section: w.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: U
      }) : o.ZP.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: L("Invite Button Embed")
      })
    },
    Y = (0, r.jsx)(A.Z, {
      onTransitionToInviteChannel: V,
      onAcceptInstantInvite: H,
      currentUserId: Z,
      guild: B,
      invite: j,
      message: n
    });
  switch (j.state) {
    case w.r2o.RESOLVING:
      Y = (0, r.jsx)(R.Z, {});
      break;
    case w.r2o.EXPIRED:
    case w.r2o.BANNED:
      Y = (0, r.jsx)(N.Z, {
        banned: j.state === w.r2o.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case w.r2o.ERROR:
      Y = (0, r.jsx)(I.Z, {
        author: n.author,
        inviteError: M
      });
      break;
    default:
      switch ((0, h.VR)(j)) {
        case h.wx.GROUP_DM:
          Y = (0, r.jsx)(T.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: H,
            currentUserId: Z,
            invite: j,
            message: n
          });
          break;
        case h.wx.FRIEND:
          Y = (0, r.jsx)(S.Z, {
            invite: j,
            message: n,
            getAcceptInviteContext: L
          });
          break;
        default:
          if ((0, h.TY)(j)) {
            Y = (0, r.jsx)(P.Z, {
              onTransitionToInviteChannel: V,
              onAcceptInstantInvite: H,
              currentUserId: Z,
              message: n,
              guild: B,
              invite: j
            });
            break
          }
          if ((0, h.Tx)(j)) {
            Y = (0, r.jsx)(p.ZP, {
              guildScheduledEvent: F,
              guild: j.guild,
              channel: j.channel,
              isMember: null != B,
              onAcceptInstantInvite: H,
              onTransitionToInviteChannel: V
            });
            break
          }
          if ((0, h.P1)(j)) {
            Y = (0, r.jsx)(v.Z, {
              invite: j,
              getAcceptInviteContext: L,
              message: n
            });
            break
          }!G && (0, f.l)(j) && (Y = (0, r.jsx)(C.Z, {
            onTransitionToInviteChannel: V,
            onAcceptInstantInvite: H,
            isMemberOfGuild: null != B,
            invite: j,
            message: n
          }))
      }
  }
  return (0, r.jsx)(s.Z, {
    section: w.jXE.INVITE_LINK,
    children: Y
  })
}