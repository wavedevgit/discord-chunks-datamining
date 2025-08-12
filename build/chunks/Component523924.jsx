/** Chunk was on 1272 **/
/** chunk id: 523924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk693546 = require("./693546.js"),
  Chunk937111 = require("./937111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk568410 = require("./568410.js");
let d = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: d,
    confirmText: p,
    onWithdrawApplication: f,
    rejectionReason: h = null,
    guild: g = null
  } = e, m = (0, l.e7)([s.Z], () => {
    var e;
    return s.Z.getCooldown(null != (e = null == g ? true : g.id) ? e : "0")
  });
  i.useEffect(() => {
    null == m && null != g && o.Z.fetchJoinRequestCooldown(g.id)
  }, [m, g]);
  let b = (null != m ? m : 0) > 0,
    _ = b && null != m ? Math.ceil((1e3 * m - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: u.confirmation,
    children: [(0, r.jsx)("div", {
      className: u.iconWrapper,
      children: (0, r.jsx)(a.P$X, {
        size: "md",
        color: a.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: u.statusTextContainer,
      children: [(0, r.jsx)(a.X6q, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == g ? true : g.name) != null ? c.intl.formatToPlainString(c.t["P+/gzM"], {
          guildName: g.name
        }) : c.intl.string(c.t.gBPcuL)
      }), null != h && "" !== h ? (0, r.jsxs)(a.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, r.jsx)("span", {
          className: u.rejectionReasonLabel,
          children: c.intl.string(c.t.cf1psb)
        }), (0, r.jsx)("span", {
          children: h
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: u.confirmationButtonRow,
      children: [(0, r.jsx)(a.DY3, {
        className: u.confirmationButton,
        text: b ? c.intl.formatToPlainString(c.t.A0f0Pz, {
          days: _
        }) : null,
        "aria-label": b ? c.intl.formatToPlainString(c.t.A0f0Pz, {
          days: _
        }) : true,
        children: (0, r.jsx)(a.zxk, {
          onClick: d,
          variant: "secondary",
          size: "md",
          loading: null == m,
          disabled: b,
          text: n,
          fullWidth: true
        })
      }), (0, r.jsx)(a.zxk, {
        onClick: f,
        variant: "critical-primary",
        size: "md",
        text: p,
        fullWidth: true
      })]
    })]
  })
}