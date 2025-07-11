/** Chunk was on 3378 **/
e.d(t, {
  Z: () => u
});
var i = e(255367),
  l = e(73800),
  a = e(442837),
  o = e(481060),
  r = e(693546),
  s = e(937111),
  d = e(388032),
  c = e(568410);
let u = n => {
  let {
    headerId: t,
    reapplyText: e,
    onReapply: u,
    confirmText: m,
    onWithdrawApplication: f,
    rejectionReason: x = null,
    guild: h = null
  } = n, p = (0, a.e7)([s.Z], () => {
    var n;
    return s.Z.getCooldown(null != (n = null == h ? void 0 : h.id) ? n : "0")
  });
  l.useEffect(() => {
    null == p && null != h && r.Z.fetchJoinRequestCooldown(h.id)
  }, [p, h]);
  let g = (null != p ? p : 0) > 0,
    j = g && null != p ? Math.ceil((1e3 * p - Date.now()) / 864e5) : 0;
  return (0, i.jsxs)("div", {
    className: c.confirmation,
    children: [(0, i.jsx)("div", {
      className: c.iconWrapper,
      children: (0, i.jsx)(o.P$X, {
        size: "md",
        color: o.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, i.jsxs)("div", {
      className: c.statusTextContainer,
      children: [(0, i.jsx)(o.X6q, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == h ? void 0 : h.name) != null ? d.intl.formatToPlainString(d.t["P+/gzM"], {
          guildName: h.name
        }) : d.intl.string(d.t.gBPcuL)
      }), null != x && "" !== x ? (0, i.jsxs)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, i.jsx)("span", {
          className: c.rejectionReasonLabel,
          children: d.intl.string(d.t.cf1psb)
        }), (0, i.jsx)("span", {
          children: x
        })]
      }) : null]
    }), (0, i.jsxs)("div", {
      className: c.confirmationButtonRow,
      children: [(0, i.jsx)(o.DY3, {
        className: c.confirmationButton,
        text: g ? d.intl.formatToPlainString(d.t.A0f0Pz, {
          days: j
        }) : null,
        "aria-label": g ? d.intl.formatToPlainString(d.t.A0f0Pz, {
          days: j
        }) : void 0,
        children: (0, i.jsx)(o.zxk, {
          onClick: u,
          variant: "secondary",
          size: "md",
          loading: null == p,
          disabled: g,
          text: e,
          fullWidth: !0
        })
      }), (0, i.jsx)(o.zxk, {
        onClick: f,
        variant: "critical-primary",
        size: "md",
        text: m,
        fullWidth: !0
      })]
    })]
  })
}