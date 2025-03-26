/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(298213),
  l = n(388032),
  s = n(998200);

function c(e) {
  let {
    userId: t,
    applicationId: n
  } = e, [c, u] = i.useState(!1), [d, p] = i.useState(!1), m = i.useCallback(async e => {
    e.stopPropagation(), p(!0);
    try {
      await a.Z.cancelFriendRequest({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      p(!1)
    }
  }, [n, t]), f = i.useCallback(async e => {
    e.stopPropagation(), u(!0);
    try {
      await a.Z.maybeConfirmFriendRequestAccept({
        userId: t,
        applicationId: n,
        location: "ActionButtonFriendRequest"
      })
    } finally {
      u(!1)
    }
  }, [n, t]);
  return (0, r.jsxs)("div", {
    className: s.friendRequestContainer,
    children: [(0, r.jsx)(o.zxk, {
      className: s.acceptButton,
      look: o.zxk.Looks.FILLED,
      color: o.zxk.Colors.GREEN,
      size: o.zxk.Sizes.NONE,
      submitting: c,
      disabled: d,
      onClick: f,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: l.NW.string(l.t.ZcibdX)
      })
    }), (0, r.jsx)(o.zxk, {
      className: s.ignoreButton,
      look: o.zxk.Looks.FILLED,
      color: o.zxk.Colors.PRIMARY,
      size: o.zxk.Sizes.NONE,
      submitting: d,
      disabled: c,
      onClick: m,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "always-white",
        children: l.NW.string(l.t.xuio0N)
      })
    })]
  })
}