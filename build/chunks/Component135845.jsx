/** Chunk was on 66866 **/
/** chunk id: 135845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function O(e) {
  let t, n, l, {
      invite: O,
      currentUserId: y,
      guild: x,
      message: j,
      onTransitionToInviteChannel: I,
      onAcceptInstantInvite: S
    } = e,
    T = null == x ? true : x.id,
    P = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
    N = (0, o.e7)([m.Z], () => null != O && null != O.target_user ? m.Z.getActiveStreamForUser(O.target_user.id, T) : null, [O, T]),
    A = (0, o.e7)([m.Z], () => null != O && null != O.target_user ? m.Z.getStreamForUser(O.target_user.id, T) : null, [O, T]),
    {
      analyticsLocations: w
    } = (0, u.ZP)(c.Z.INVITE_EMBED),
    Z = null != O && O.target_type === E.Iq.STREAM && null != O.target_user && null != N,
    R = null != O && null != A && null != O.channel && null != O.guild && A.channelId === O.channel.id && A.guildId === O.guild.id;
  a()(null != O, "Invite cannot be null");
  let {
    target_type: L,
    target_user: D
  } = O;
  a()(L === E.Iq.STREAM && null != D, "invalid streaming invite");
  let M = y === D.id,
    k = O.state === b.r2o.ACCEPTING,
    U = i.useCallback(() => {
      let e = "noop";
      Z ? (I(), e = "transition") : (S(), e = "accept"), (0, s.r$)({
        invite: O,
        action: e,
        inviter_id: j.author.id,
        invite_message_id: j.id
      }, w)
    }, [O, j, w, Z, I, S]),
    F = null != x;
  if (null == x) {
    if (null == O.guild) return (0, r.jsx)(h.Z, {});
    x = (0, _.Qs)(O.guild)
  }
  let B = null != O.channel ? (0, p.jD)(O.channel) : null,
    G = g.ZP.getName(D);
  F && !R ? l = M ? C.intl.string(C.t.oBLoZG) : C.intl.formatToPlainString(C.t["0QJmAw"], {
    name: G
  }) : (t = C.intl.string(C.t["I6JG4+"]), n = d.Z.Button.Colors.GREEN, Z && (t = C.intl.string(C.t["Q1W99/"]), n = d.Z.Button.Colors.PRIMARY), l = M ? C.intl.string(C.t["4hyaHh"]) : C.intl.formatToPlainString(C.t.QmlLEh, {
    name: G
  }));
  let H = P === x.id && null != B ? (0, r.jsx)(d.Z.Channel, {
    channel: B
  }) : C.intl.formatToPlainString(C.t.u0vaDA, {
    guildName: x.name
  });
  return (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(d.Z.Header, {
      text: C.intl.string(C.t["wS+5WV"])
    }), (0, r.jsxs)(d.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: v.headerLine,
        children: [(0, r.jsx)(d.Z.Icon, {
          guild: x,
          onClick: F && R ? U : true
        }), (0, r.jsx)(d.Z.Info, {
          title: l,
          onClick: F && R ? U : true,
          children: H
        })]
      }), R ? (0, r.jsx)(d.Z.Button, {
        disabled: F && !R,
        onClick: U,
        submitting: k,
        isDisabled: Z && R,
        color: n,
        children: t
      }) : null]
    })]
  })
}