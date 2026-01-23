/** Chunk was on web.js **/
/** chunk id: 990560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk846293 = require("./846293.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk107123 = require("./107123.js"),
  Chunk698441 = require("./698441.js"),
  Chunk427080 = require("./427080.jsx"),
  Chunk346542 = require("./346542.js"),
  Chunk665066 = require("./665066.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk299091 = require("./299091.js"),
  Chunk860689 = require("./860689.js"),
  Chunk62350 = require("./62350.jsx"),
  Chunk882072 = require("./882072.jsx"),
  Chunk58262 = require("./58262.jsx"),
  Chunk309818 = require("./309818.jsx"),
  Chunk112007 = require("./112007.jsx"),
  Chunk877695 = require("./877695.jsx"),
  Chunk242907 = require("./242907.jsx"),
  Chunk168428 = require("./168428.jsx"),
  Chunk448894 = require("./448894.jsx"),
  Chunk652215 = require("./652215.js");

function N(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: N
  } = e, {
    invite: R,
    inviteError: w
  } = (0, a.cf)([m.A], () => ({
    invite: m.A.getInvite(t),
    inviteError: m.A.getInviteError(t)
  }), [t]), P = null == R;
  i.useEffect(() => {
    P && s.Ay.resolveInvite(t)
  }, [t, P]);
  let D = null != R ? R : {
      state: C.elq.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: x
    } = (0, l.Ay)(),
    L = (0, a.bG)([h.A], () => (null == R ? true : R.guild) != null ? h.A.getGuild(R.guild.id) : null, [R]),
    j = (0, a.bG)([_.default], () => _.default.getId()),
    M = (0, a.bG)([u.Ay], () => {
      var e;
      return u.Ay.getGuildScheduledEvent(null == (e = D.guild_scheduled_event) ? true : e.id)
    }, [D]),
    k = () => {
      null != D.channel && s.Ay.transitionToInviteSync(D)
    },
    U = () => {
      let e = null == L && (null == R ? true : R.guild) != null ? g.DY(R.guild) : L;
      (0, p.g)({
        guild: e,
        isMember: null != L,
        analyticsLocations: x
      }) === p.W.PROCEED && s.Ay.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: N("Invite Button Embed")
      })
    },
    G = (0, r.jsx)(v.A, {
      onTransitionToInviteChannel: k,
      onAcceptInstantInvite: U,
      currentUserId: j,
      guild: L,
      invite: D,
      message: n
    });
  switch (D.state) {
    case C.elq.RESOLVING:
      G = (0, r.jsx)(S.A, {});
      break;
    case C.elq.EXPIRED:
    case C.elq.BANNED:
      G = (0, r.jsx)(I.A, {
        banned: D.state === C.elq.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case C.elq.ERROR:
      G = (0, r.jsx)(y.A, {
        author: n.author,
        inviteError: w
      });
      break;
    default:
      switch ((0, f.On)(D)) {
        case f.Xd.GROUP_DM:
          G = (0, r.jsx)(O.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: j,
            invite: D,
            message: n
          });
          break;
        case f.Xd.FRIEND:
          G = (0, r.jsx)(b.A, {
            invite: D,
            message: n,
            getAcceptInviteContext: N
          });
          break;
        default:
          if ((0, f.G4)(D)) {
            G = (0, r.jsx)(T.A, {
              onTransitionToInviteChannel: k,
              onAcceptInstantInvite: U,
              currentUserId: j,
              message: n,
              guild: L,
              invite: D
            });
            break
          }
          if ((0, f.ly)(D)) {
            G = (0, r.jsx)(d.Ay, {
              guildScheduledEvent: M,
              guild: D.guild,
              channel: D.channel,
              isMember: null != L,
              onAcceptInstantInvite: U,
              onTransitionToInviteChannel: k
            });
            break
          }
          if ((0, f.oK)(D)) {
            G = (0, r.jsx)(E.A, {
              invite: D,
              getAcceptInviteContext: N,
              message: n
            });
            break
          }(0, c.v)(D) && (G = (0, r.jsx)(A.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            isMemberOfGuild: null != L,
            invite: D,
            message: n
          }))
      }
  }
  return (0, r.jsx)(o.A, {
    section: C.JJy.INVITE_LINK,
    children: G
  })
}