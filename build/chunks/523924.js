/** Chunk was on 3378 **/
n.d(t, {
  Z: () => f
});
var o = n(255367),
  r = n(73800),
  i = n(442837),
  l = n(755721),
  a = n(481060),
  c = n(693546),
  s = n(937111),
  u = n(388032),
  d = n(568410);
let f = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: f,
    confirmText: p,
    onWithdrawApplication: m,
    rejectionReason: b = null,
    guild: g = null
  } = e, j = (0, i.e7)([s.Z], () => {
    var e;
    return s.Z.getCooldown(null != (e = null == g ? void 0 : g.id) ? e : "0")
  });
  r.useEffect(() => {
    null == j && null != g && c.Z.fetchJoinRequestCooldown(g.id)
  }, [j, g]);
  let h = (null != j ? j : 0) > 0,
    y = h && null != j ? Math.ceil((1e3 * j - Date.now()) / 864e5) : 0;
  return (0, o.jsxs)("div", {
    className: d.confirmation,
    children: [(0, o.jsx)("div", {
      className: d.iconWrapper,
      children: (0, o.jsx)(a.P$X, {
        size: "md",
        color: a.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, o.jsxs)("div", {
      className: d.statusTextContainer,
      children: [(0, o.jsx)(a.X6q, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == g ? void 0 : g.name) != null ? u.intl.formatToPlainString(u.t["P+/gzM"], {
          guildName: g.name
        }) : u.intl.string(u.t.gBPcuL)
      }), null != b && "" !== b ? (0, o.jsxs)(a.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, o.jsx)("span", {
          className: d.rejectionReasonLabel,
          children: u.intl.string(u.t.cf1psb)
        }), (0, o.jsx)("span", {
          children: b
        })]
      }) : null]
    }), (0, o.jsxs)("div", {
      className: d.confirmationButtonRow,
      children: [(0, o.jsx)(a.DY3, {
        className: d.confirmationButton,
        text: h ? u.intl.formatToPlainString(u.t.A0f0Pz, {
          days: y
        }) : null,
        "aria-label": h ? u.intl.formatToPlainString(u.t.A0f0Pz, {
          days: y
        }) : void 0,
        children: (0, o.jsx)(l.zx, {
          className: d.confirmationTooltipContents,
          onClick: f,
          color: l.zx.Colors.PRIMARY,
          size: l.zx.Sizes.LARGE,
          submitting: null == j,
          disabled: h,
          children: n
        })
      }), (0, o.jsx)(l.zx, {
        onClick: m,
        size: l.zx.Sizes.LARGE,
        color: l.zx.Colors.RED,
        className: d.confirmationButton,
        children: p
      })]
    })]
  })
}