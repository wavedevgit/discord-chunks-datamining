/** Chunk was on 52272 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(493683),
  l = n(447543),
  s = n(100527),
  c = n(906732),
  u = n(955415),
  d = n(598077),
  p = n(314897),
  m = n(592125),
  f = n(699516),
  h = n(51144),
  g = n(981631),
  _ = n(388032),
  b = n(651873);

function v(e) {
  var t;
  let {
    invite: n,
    getAcceptInviteContext: v
  } = e, x = (0, o.e7)([p.default], () => p.default.getId()), y = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === x, E = n.state === g.r2o.ACCEPTING, {
    analyticsLocations: O
  } = (0, c.ZP)(s.Z.INVITE_EMBED), N = (0, o.e7)([f.Z], () => {
    var e;
    return null != n.inviter && f.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
  }), j = i.useCallback(() => {
    let e = "noop";
    null != n.inviter && null != m.Z.getDMFromUserId(n.inviter.id) && (e = "transition", a.Z.openPrivateChannel([n.inviter.id])), (0, l.r$)(n, e, O)
  }, [n, O]), C = i.useCallback(() => {
    (0, l.r$)(n, "accept", O);
    let e = v("Invite Button Embed");
    l.ZP.acceptInviteAndTransitionToInviteChannel({
      inviteKey: n.code,
      context: e
    })
  }, [n, O, v]);
  if (null == n.inviter) return null;
  let I = N ? j : C,
    S = _.NW.string(_.t.ib7Ng4),
    T = u.Z.Button.Colors.GREEN;
  N ? (S = _.NW.string(_.t.xhxnPj), T = u.Z.Button.Colors.PRIMARY) : y && (S = _.NW.string(_.t.ib7Ng4), T = u.Z.Button.Colors.PRIMARY);
  let P = y ? _.NW.string(_.t.eQyu1N) : _.NW.string(_.t.PYJHW1),
    A = null != n.inviter ? "".concat(n.inviter.username) : "",
    w = null != n.inviter ? h.ZP.getUserTag(n.inviter) : "";
  return (0, r.jsxs)(u.Z, {
    children: [(0, r.jsx)(u.Z.Header, {
      text: P
    }), (0, r.jsxs)(u.Z.Body, {
      children: [(0, r.jsxs)("div", {
        className: b.headerLine,
        children: [(0, r.jsx)(u.Z.Icon, {
          user: new d.Z(n.inviter),
          onClick: N ? I : void 0
        }), (0, r.jsx)(u.Z.Info, {
          title: A,
          onClick: N ? I : void 0,
          children: w
        })]
      }), (0, r.jsx)(u.Z.Button, {
        onClick: I,
        submitting: E,
        isDisabled: y,
        color: T,
        children: S
      })]
    })]
  })
}