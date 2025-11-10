/** Chunk was on web.js **/
/** chunk id: 135845, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk955415 = require("./955415.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk199902 = require("./199902.js"),
  Chunk914010 = require("./914010.js"),
  Chunk411198 = require("./411198.js"),
  Chunk51144 = require("./51144.js"),
  Chunk358595 = require("./358595.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk245335 = require("./245335.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105341 = require("./105341.js");

function I(e) {
  let t, n, {
      invite: a,
      currentUserId: I,
      guild: S,
      message: T,
      onTransitionToInviteChannel: A,
      onAcceptInstantInvite: C
    } = e,
    N = null == S ? true : S.id,
    R = (0, l.e7)([h.Z], () => h.Z.getGuildId()),
    P = (0, l.e7)([p.Z], () => null != a && null != a.target_user ? p.Z.getActiveStreamForUser(a.target_user.id, N) : null, [a, N]),
    w = (0, l.e7)([p.Z], () => null != a && null != a.target_user ? p.Z.getStreamForUser(a.target_user.id, N) : null, [a, N]),
    {
      analyticsLocations: D
    } = (0, d.ZP)(u.Z.INVITE_EMBED),
    x = null != a && a.target_type === y.Iq.STREAM && null != a.target_user && null != P,
    L = null != a && null != w && null != a.channel && null != a.guild && w.channelId === a.channel.id && w.guildId === a.guild.id;
  o()(null != a, "Invite cannot be null");
  let {
    target_type: M,
    target_user: j
  } = a;
  o()(M === y.Iq.STREAM && null != j, "invalid streaming invite");
  let k = I === j.id,
    U = a.state === b.r2o.ACCEPTING,
    G = i.useCallback(() => {
      let e = "noop";
      x ? (A(), e = "transition") : (C(), e = "accept"), (0, c.r$)({
        invite: a,
        action: e,
        inviter_id: T.author.id,
        invite_message_id: T.id
      }, D)
    }, [a, T, D, x, A, C]),
    B = null != S;
  if (null == S) {
    if (null == a.guild) return (0, r.jsx)(E.Z, {});
    S = (0, m.Qs)(a.guild)
  }
  let Z = null != a.channel ? (0, _.jD)(a.channel) : null,
    F = g.ZP.getName(j),
    V = "active";
  B && !L ? n = k ? O.intl.string(O.t.oBLoZJ) : O.intl.formatToPlainString(O.t["0QJmA+"], {
    name: F
  }) : (t = O.intl.string(O.t.I6JG46), V = "active", x && (t = O.intl.string(O.t.Q1W99y), V = "secondary"), n = k ? O.intl.string(O.t["4hyaHu"]) : O.intl.formatToPlainString(O.t.QmlLEq, {
    name: F
  }));
  let H = R === S.id && null != Z ? (0, r.jsx)(f.Z.Channel, {
    channel: Z
  }) : O.intl.formatToPlainString(O.t.u0vaDE, {
    guildName: S.name
  });
  return (0, r.jsxs)(f.Z, {
    children: [(0, r.jsx)(f.Z.Header, {
      text: O.intl.string(O.t["wS+5Wb"])
    }), (0, r.jsxs)(f.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: v.headerLine,
        children: [(0, r.jsx)(f.Z.Icon, {
          guild: S,
          onClick: B && L ? G : true
        }), (0, r.jsx)(f.Z.Info, {
          title: n,
          onClick: B && L ? G : true,
          children: H
        })]
      }), L ? (0, r.jsx)(s.zxk, {
        onClick: G,
        loading: U,
        disabled: x,
        variant: V,
        text: t
      }) : null]
    })]
  })
}