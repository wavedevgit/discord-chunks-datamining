/** Chunk was on 3378 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  o = n(192379),
  i = n(442837),
  l = n(481060),
  a = n(693546),
  c = n(937111),
  s = n(388032),
  u = n(37598);
let d = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: d,
    confirmText: f,
    onWithdrawApplication: p,
    rejectionReason: m = null,
    guild: g = null
  } = e, b = (0, i.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == g ? void 0 : g.id) ? e : "0")
  });
  o.useEffect(() => {
    null == b && null != g && a.Z.fetchJoinRequestCooldown(g.id)
  }, [b, g]);
  let _ = (null != b ? b : 0) > 0,
    j = _ && null != b ? Math.ceil((1e3 * b - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: u.confirmation,
    children: [(0, r.jsx)("div", {
      className: u.iconWrapper,
      children: (0, r.jsx)(l.P$X, {
        size: "md",
        color: l.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: u.statusTextContainer,
      children: [(0, r.jsx)(l.X6q, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == g ? void 0 : g.name) != null ? s.NW.formatToPlainString(s.t["P+/gzM"], {
          guildName: g.name
        }) : s.NW.string(s.t.gBPcuL)
      }), null != m && "" !== m ? (0, r.jsxs)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, r.jsx)("span", {
          className: u.rejectionReasonLabel,
          children: s.NW.string(s.t.cf1psb)
        }), (0, r.jsx)("span", {
          children: m
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: u.confirmationButtonRow,
      children: [(0, r.jsx)(l.DY3, {
        className: u.confirmationButton,
        text: _ ? s.NW.formatToPlainString(s.t.A0f0Pz, {
          days: j
        }) : null,
        "aria-label": _ ? s.NW.formatToPlainString(s.t.A0f0Pz, {
          days: j
        }) : void 0,
        children: (0, r.jsx)(l.zxk, {
          className: u.confirmationTooltipContents,
          onClick: d,
          color: l.zxk.Colors.PRIMARY,
          size: l.zxk.Sizes.LARGE,
          submitting: null == b,
          disabled: _,
          children: n
        })
      }), (0, r.jsx)(l.zxk, {
        onClick: p,
        size: l.zxk.Sizes.LARGE,
        color: l.zxk.Colors.RED,
        className: u.confirmationButton,
        children: f
      })]
    })]
  })
}