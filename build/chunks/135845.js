/** Chunk was on 8473 **/
n.d(t, {
  Z: () => x
});
var r = n(200651),
  i = n(192379),
  a = n(512722),
  o = n.n(a),
  l = n(442837),
  s = n(447543),
  c = n(100527),
  u = n(906732),
  d = n(955415),
  p = n(131704),
  m = n(601964),
  f = n(199902),
  h = n(914010),
  g = n(358595),
  _ = n(981631),
  b = n(245335),
  v = n(388032),
  y = n(651873);

function x(e) {
  let t, n, a, {
      invite: x,
      currentUserId: E,
      guild: O,
      onTransitionToInviteChannel: N,
      onAcceptInstantInvite: j
    } = e,
    C = null == O ? void 0 : O.id,
    I = (0, l.e7)([h.Z], () => h.Z.getGuildId()),
    S = (0, l.e7)([f.Z], () => null != x && null != x.target_user ? f.Z.getActiveStreamForUser(x.target_user.id, C) : null, [x, C]),
    T = (0, l.e7)([f.Z], () => null != x && null != x.target_user ? f.Z.getStreamForUser(x.target_user.id, C) : null, [x, C]),
    {
      analyticsLocations: P
    } = (0, u.ZP)(c.Z.INVITE_EMBED),
    A = null != x && x.target_type === b.Iq.STREAM && null != x.target_user && null != S,
    w = null != x && null != T && null != x.channel && null != x.guild && T.channelId === x.channel.id && T.guildId === x.guild.id;
  o()(null != x, "Invite cannot be null");
  let {
    target_type: Z,
    target_user: k
  } = x;
  o()(Z === b.Iq.STREAM && null != k, "invalid streaming invite");
  let R = E === k.id,
    D = x.state === _.r2o.ACCEPTING,
    L = i.useCallback(() => {
      let e = "noop";
      A ? (N(), e = "transition") : (j(), e = "accept"), (0, s.r$)(x, e, P)
    }, [x, P, A, N, j]),
    M = null != O;
  if (null == O) {
    if (null == x.guild) return (0, r.jsx)(g.Z, {});
    O = new m.ZP(x.guild)
  }
  let W = null != x.channel ? (0, p.jD)(x.channel) : null;
  M && !w ? a = R ? v.NW.string(v.t.oBLoZG) : v.NW.formatToPlainString(v.t["0QJmAw"], {
    name: k.username
  }) : (t = v.NW.string(v.t["I6JG4+"]), n = d.Z.Button.Colors.GREEN, A && (t = v.NW.string(v.t["Q1W99/"]), n = d.Z.Button.Colors.PRIMARY), a = R ? v.NW.string(v.t["4hyaHh"]) : v.NW.formatToPlainString(v.t.QmlLEh, {
    name: k.username
  }));
  let U = I === O.id && null != W ? (0, r.jsx)(d.Z.Channel, {
    channel: W
  }) : v.NW.formatToPlainString(v.t.u0vaDA, {
    guildName: O.name
  });
  return (0, r.jsxs)(d.Z, {
    children: [(0, r.jsx)(d.Z.Header, {
      text: v.NW.string(v.t["wS+5WV"])
    }), (0, r.jsxs)(d.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: y.headerLine,
        children: [(0, r.jsx)(d.Z.Icon, {
          guild: O,
          onClick: M && w ? L : void 0
        }), (0, r.jsx)(d.Z.Info, {
          title: a,
          onClick: M && w ? L : void 0,
          children: U
        })]
      }), w ? (0, r.jsx)(d.Z.Button, {
        disabled: M && !w,
        onClick: L,
        submitting: D,
        isDisabled: A && w,
        color: n,
        children: t
      }) : null]
    })]
  })
}