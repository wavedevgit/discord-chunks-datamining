/** Chunk was on 64935 **/
/** chunk id: 990560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
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

function S(e) {
  let {
    code: t,
    message: n,
    getAcceptInviteContext: S
  } = e, {
    invite: T,
    inviteError: N
  } = (0, l.cf)([_.A], () => ({
    invite: _.A.getInvite(t),
    inviteError: _.A.getInviteError(t)
  }), [t]), P = null == T;
  i.useEffect(() => {
    P && a.Ay.resolveInvite(t)
  }, [t, P]);
  let w = null != T ? T : {
      state: I.elq.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: R
    } = (0, o.Ay)(),
    D = (0, l.bG)([g.A], () => (null == T ? true : T.guild) != null ? g.A.getGuild(T.guild.id) : null, [T]),
    L = (0, l.bG)([f.default], () => f.default.getId()),
    M = (0, l.bG)([u.Ay], () => {
      var e;
      return u.Ay.getGuildScheduledEvent(null == (e = w.guild_scheduled_event) ? true : e.id)
    }, [w]),
    k = () => {
      null != w.channel && a.Ay.transitionToInviteSync(w)
    },
    U = () => {
      let e = null == D && (null == T ? true : T.guild) != null ? h.DY(T.guild) : D;
      (0, m.g)({
        guild: e,
        isMember: null != D,
        analyticsLocations: R
      }) === m.W.PROCEED && a.Ay.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: S("Invite Button Embed")
      })
    },
    G = (0, r.jsx)(x.A, {
      onTransitionToInviteChannel: k,
      onAcceptInstantInvite: U,
      currentUserId: L,
      guild: D,
      invite: w,
      message: n
    });
  switch (w.state) {
    case I.elq.RESOLVING:
      G = (0, r.jsx)(j.A, {});
      break;
    case I.elq.EXPIRED:
    case I.elq.BANNED:
      G = (0, r.jsx)(E.A, {
        banned: w.state === I.elq.BANNED,
        author: n.author,
        channelId: n.channel_id
      });
      break;
    case I.elq.ERROR:
      G = (0, r.jsx)(A.A, {
        author: n.author,
        inviteError: N
      });
      break;
    default:
      switch ((0, p.On)(w)) {
        case p.Xd.GROUP_DM:
          G = (0, r.jsx)(v.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: L,
            invite: w,
            message: n
          });
          break;
        case p.Xd.FRIEND:
          G = (0, r.jsx)(y.A, {
            invite: w,
            message: n,
            getAcceptInviteContext: S
          });
          break;
        default:
          if ((0, p.G4)(w)) {
            G = (0, r.jsx)(C.A, {
              onTransitionToInviteChannel: k,
              onAcceptInstantInvite: U,
              currentUserId: L,
              message: n,
              guild: D,
              invite: w
            });
            break
          }
          if ((0, p.ly)(w)) {
            G = (0, r.jsx)(d.Ay, {
              guildScheduledEvent: M,
              guild: w.guild,
              channel: w.channel,
              isMember: null != D,
              onAcceptInstantInvite: U,
              onTransitionToInviteChannel: k
            });
            break
          }
          if ((0, p.oK)(w)) {
            G = (0, r.jsx)(b.A, {
              invite: w,
              getAcceptInviteContext: S,
              message: n
            });
            break
          }(0, c.v)(w) && (G = (0, r.jsx)(O.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            isMemberOfGuild: null != D,
            invite: w,
            message: n
          }))
      }
  }
  return (0, r.jsx)(s.A, {
    section: I.JJy.INVITE_LINK,
    children: G
  })
}