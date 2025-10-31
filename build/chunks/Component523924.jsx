/** Chunk was on 1272 **/
/** chunk id: 523924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk693546 = require("./693546.js"),
  Chunk937111 = require("./937111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394121 = require("./394121.js");
let p = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: p,
    confirmText: f,
    onWithdrawApplication: m,
    rejectionReason: h = null,
    guild: g = null
  } = e, _ = (0, l.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == g ? true : g.id) ? e : "0")
  });
  i.useEffect(() => {
    null == _ && null != g && o.Z.fetchJoinRequestCooldown(g.id)
  }, [_, g]);
  let b = (null != _ ? _ : 0) > 0,
    E = b && null != _ ? Math.ceil((1e3 * _ - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: d.confirmation,
    children: [(0, r.jsx)("div", {
      className: d.iconWrapper,
      children: (0, r.jsx)(s.P$X, {
        size: "md",
        color: s.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: d.statusTextContainer,
      children: [(0, r.jsx)(s.Heading, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == g ? true : g.name) != null ? u.intl.formatToPlainString(u.t["P+/gzA"], {
          guildName: g.name
        }) : u.intl.string(u.t.gBPcuP)
      }), null != h && "" !== h ? (0, r.jsxs)(s.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, r.jsx)("span", {
          className: d.rejectionReasonLabel,
          children: u.intl.string(u.t.cf1psW)
        }), (0, r.jsx)("span", {
          children: h
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: d.confirmationButtonRow,
      children: [(0, r.jsx)(a.u, {
        asContainer: true,
        text: b ? u.intl.formatToPlainString(u.t.A0f0P7, {
          days: E
        }) : null,
        "aria-label": b ? u.intl.formatToPlainString(u.t.A0f0P7, {
          days: E
        }) : true,
        children: (0, r.jsx)(s.Button, {
          onClick: p,
          variant: "secondary",
          size: "md",
          loading: null == _,
          disabled: b,
          text: n,
          fullWidth: true
        })
      }), (0, r.jsx)(s.Button, {
        onClick: m,
        variant: "critical-primary",
        size: "md",
        text: f,
        fullWidth: true
      })]
    })]
  })
}