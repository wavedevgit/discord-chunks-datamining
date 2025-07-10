/** Chunk was on 3378 **/
n.d(t, {
  Z: () => d
});
var r = n(255367),
  i = n(73800),
  o = n(442837),
  l = n(481060),
  a = n(693546),
  c = n(937111),
  s = n(388032),
  u = n(568410);
let d = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: d,
    confirmText: f,
    onWithdrawApplication: p,
    rejectionReason: m = null,
    guild: b = null
  } = e, g = (0, o.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == b ? void 0 : b.id) ? e : "0")
  });
  i.useEffect(() => {
    null == g && null != b && a.Z.fetchJoinRequestCooldown(b.id)
  }, [g, b]);
  let j = (null != g ? g : 0) > 0,
    y = j && null != g ? Math.ceil((1e3 * g - Date.now()) / 864e5) : 0;
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
        children: (null == b ? void 0 : b.name) != null ? s.intl.formatToPlainString(s.t["P+/gzM"], {
          guildName: b.name
        }) : s.intl.string(s.t.gBPcuL)
      }), null != m && "" !== m ? (0, r.jsxs)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, r.jsx)("span", {
          className: u.rejectionReasonLabel,
          children: s.intl.string(s.t.cf1psb)
        }), (0, r.jsx)("span", {
          children: m
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: u.confirmationButtonRow,
      children: [(0, r.jsx)(l.DY3, {
        className: u.confirmationButton,
        text: j ? s.intl.formatToPlainString(s.t.A0f0Pz, {
          days: y
        }) : null,
        "aria-label": j ? s.intl.formatToPlainString(s.t.A0f0Pz, {
          days: y
        }) : void 0,
        children: (0, r.jsx)(l.zxk, {
          onClick: d,
          variant: "secondary",
          size: "md",
          loading: null == g,
          disabled: j,
          text: n,
          fullWidth: !0
        })
      }), (0, r.jsx)(l.zxk, {
        onClick: p,
        variant: "critical-primary",
        size: "md",
        text: f,
        fullWidth: !0
      })]
    })]
  })
}