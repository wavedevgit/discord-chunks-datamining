/** Chunk was on web.js **/
/** chunk id: 448894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function A(e) {
  let t, n, {
      invite: a,
      currentUserId: A,
      guild: I,
      message: S,
      onTransitionToInviteChannel: T,
      onAcceptInstantInvite: C
    } = e,
    N = null == I ? true : I.id,
    R = (0, l.bG)([h.A], () => h.A.getGuildId()),
    w = (0, l.bG)([_.A], () => null != a && null != a.target_user ? _.A.getActiveStreamForUser(a.target_user.id, N) : null, [a, N]),
    P = (0, l.bG)([_.A], () => null != a && null != a.target_user ? _.A.getStreamForUser(a.target_user.id, N) : null, [a, N]),
    {
      analyticsLocations: D
    } = (0, d.Ay)(u.A.INVITE_EMBED),
    x = null != a && a.target_type === b.yV.STREAM && null != a.target_user && null != w,
    L = null != a && null != P && null != a.channel && null != a.guild && P.channelId === a.channel.id && P.guildId === a.guild.id;
  s()(null != a, "Invite cannot be null");
  let {
    target_type: j,
    target_user: M
  } = a;
  s()(j === b.yV.STREAM && null != M, "invalid streaming invite");
  let k = A === M.id,
    U = a.state === y.elq.ACCEPTING,
    G = i.useCallback(() => {
      let e = "noop";
      x ? (T(), e = "transition") : (C(), e = "accept"), (0, c.he)({
        invite: a,
        action: e,
        inviter_id: S.author.id,
        invite_message_id: S.id
      }, D)
    }, [a, S, D, x, T, C]),
    V = null != I;
  if (null == I) {
    if (null == a.guild) return (0, r.jsx)(E.A, {});
    I = (0, m.DY)(a.guild)
  }
  let F = null != a.channel ? (0, p.OY)(a.channel) : null,
    B = g.Ay.getName(M),
    H = "active";
  V && !L ? n = k ? O.intl.string(O.t.oBLoZJ) : O.intl.formatToPlainString(O.t["0QJmA+"], {
    name: B
  }) : (t = O.intl.string(O.t.I6JG46), H = "active", x && (t = O.intl.string(O.t.Q1W99y), H = "secondary"), n = k ? O.intl.string(O.t["4hyaHu"]) : O.intl.formatToPlainString(O.t.QmlLEq, {
    name: B
  }));
  let Y = R === I.id && null != F ? (0, r.jsx)(f.A.Channel, {
    channel: F
  }) : O.intl.formatToPlainString(O.t.u0vaDE, {
    guildName: I.name
  });
  return (0, r.jsxs)(f.A, {
    children: [(0, r.jsx)(f.A.Header, {
      text: O.intl.string(O.t["wS+5Wb"])
    }), (0, r.jsxs)(f.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: v.iH,
        children: [(0, r.jsx)(f.A.Icon, {
          guild: I,
          onClick: V && L ? G : true
        }), (0, r.jsx)(f.A.Info, {
          title: n,
          onClick: V && L ? G : true,
          children: Y
        })]
      }), L ? (0, r.jsx)(o.$nd, {
        onClick: G,
        loading: U,
        disabled: x,
        variant: H,
        text: t
      }) : null]
    })]
  })
}