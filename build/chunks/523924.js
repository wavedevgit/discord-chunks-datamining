/** Chunk was on 3378 **/
n.d(t, {
  Z: () => d
});
var o = n(255367),
  r = n(73800),
  i = n(442837),
  l = n(481060),
  a = n(693546),
  s = n(937111),
  c = n(388032),
  u = n(37598);
let d = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: d,
    confirmText: f,
    onWithdrawApplication: p,
    rejectionReason: m = null,
    guild: b = null
  } = e, g = (0, i.e7)([s.Z], () => {
    var e;
    return s.Z.getCooldown(null != (e = null == b ? void 0 : b.id) ? e : "0")
  });
  r.useEffect(() => {
    null == g && null != b && a.Z.fetchJoinRequestCooldown(b.id)
  }, [g, b]);
  let j = (null != g ? g : 0) > 0,
    h = j && null != g ? Math.ceil((1e3 * g - Date.now()) / 864e5) : 0;
  return (0, o.jsxs)("div", {
    className: u.confirmation,
    children: [(0, o.jsx)("div", {
      className: u.iconWrapper,
      children: (0, o.jsx)(l.P$X, {
        size: "md",
        color: l.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, o.jsxs)("div", {
      className: u.statusTextContainer,
      children: [(0, o.jsx)(l.X6q, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == b ? void 0 : b.name) != null ? c.intl.formatToPlainString(c.t["P+/gzM"], {
          guildName: b.name
        }) : c.intl.string(c.t.gBPcuL)
      }), null != m && "" !== m ? (0, o.jsxs)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, o.jsx)("span", {
          className: u.rejectionReasonLabel,
          children: c.intl.string(c.t.cf1psb)
        }), (0, o.jsx)("span", {
          children: m
        })]
      }) : null]
    }), (0, o.jsxs)("div", {
      className: u.confirmationButtonRow,
      children: [(0, o.jsx)(l.DY3, {
        className: u.confirmationButton,
        text: j ? c.intl.formatToPlainString(c.t.A0f0Pz, {
          days: h
        }) : null,
        "aria-label": j ? c.intl.formatToPlainString(c.t.A0f0Pz, {
          days: h
        }) : void 0,
        children: (0, o.jsx)(l.zxk, {
          className: u.confirmationTooltipContents,
          onClick: d,
          color: l.zxk.Colors.PRIMARY,
          size: l.zxk.Sizes.LARGE,
          submitting: null == g,
          disabled: j,
          children: n
        })
      }), (0, o.jsx)(l.zxk, {
        onClick: p,
        size: l.zxk.Sizes.LARGE,
        color: l.zxk.Colors.RED,
        className: u.confirmationButton,
        children: f
      })]
    })]
  })
}