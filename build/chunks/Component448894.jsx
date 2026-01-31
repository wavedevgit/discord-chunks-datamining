/** Chunk was on 64935 **/
/** chunk id: 448894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk846293 = require("./846293.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk529200 = require("./529200.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk616356 = require("./616356.js"),
  Chunk967198 = require("./967198.js"),
  Chunk860689 = require("./860689.js"),
  Chunk427262 = require("./427262.js"),
  Chunk168428 = require("./168428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk172799 = require("./172799.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk563111 = require("./563111.js");

function x(e) {
  let t, n, {
      invite: l,
      currentUserId: x,
      guild: E,
      message: j,
      onTransitionToInviteChannel: C,
      onAcceptInstantInvite: I
    } = e,
    S = null == E ? true : E.id,
    T = (0, o.bG)([g.A], () => g.A.getGuildId()),
    N = (0, o.bG)([f.A], () => null != l && null != l.target_user ? f.A.getActiveStreamForUser(l.target_user.id, S) : null, [l, S]),
    P = (0, o.bG)([f.A], () => null != l && null != l.target_user ? f.A.getStreamForUser(l.target_user.id, S) : null, [l, S]),
    {
      analyticsLocations: w
    } = (0, d.Ay)(u.A.INVITE_EMBED),
    R = null != l && l.target_type === A.yV.STREAM && null != l.target_user && null != N,
    D = null != l && null != P && null != l.channel && null != l.guild && P.channelId === l.channel.id && P.guildId === l.guild.id;
  a()(null != l, "Invite cannot be null");
  let {
    target_type: L,
    target_user: M
  } = l;
  a()(L === A.yV.STREAM && null != M, "invalid streaming invite");
  let k = x === M.id,
    U = l.state === y.elq.ACCEPTING,
    G = i.useCallback(() => {
      let e = "noop";
      R ? (C(), e = "transition") : (I(), e = "accept"), (0, c.he)({
        invite: l,
        action: e,
        inviter_id: j.author.id,
        invite_message_id: j.id
      }, w)
    }, [l, j, w, R, C, I]),
    B = null != E;
  if (null == E) {
    if (null == l.guild) return (0, r.jsx)(b.A, {});
    E = (0, _.DY)(l.guild)
  }
  let F = null != l.channel ? (0, m.OY)(l.channel) : null,
    H = h.Ay.getName(M),
    V = "active";
  B && !D ? n = k ? v.intl.string(v.t.oBLoZJ) : v.intl.formatToPlainString(v.t["0QJmA+"], {
    name: H
  }) : (t = v.intl.string(v.t.I6JG46), V = "active", R && (t = v.intl.string(v.t.Q1W99y), V = "secondary"), n = k ? v.intl.string(v.t["4hyaHu"]) : v.intl.formatToPlainString(v.t.QmlLEq, {
    name: H
  }));
  let z = T === E.id && null != F ? (0, r.jsx)(p.A.Channel, {
    channel: F
  }) : v.intl.formatToPlainString(v.t.u0vaDE, {
    guildName: E.name
  });
  return (0, r.jsxs)(p.A, {
    children: [(0, r.jsx)(p.A.Header, {
      text: v.intl.string(v.t["wS+5Wb"])
    }), (0, r.jsxs)(p.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: O.iH,
        children: [(0, r.jsx)(p.A.Icon, {
          guild: E,
          onClick: B && D ? G : true
        }), (0, r.jsx)(p.A.Info, {
          title: n,
          onClick: B && D ? G : true,
          children: z
        })]
      }), D ? (0, r.jsx)(s.$nd, {
        onClick: G,
        loading: U,
        disabled: R,
        variant: V,
        text: t
      }) : null]
    })]
  })
}