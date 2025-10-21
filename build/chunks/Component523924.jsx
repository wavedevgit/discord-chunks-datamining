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
  Chunk191333 = require("./191333.js");
let p = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: p,
    confirmText: f,
    onWithdrawApplication: h,
    rejectionReason: g = null,
    guild: m = null
  } = e, b = (0, l.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == m ? true : m.id) ? e : "0")
  });
  i.useEffect(() => {
    null == b && null != m && s.Z.fetchJoinRequestCooldown(m.id)
  }, [b, m]);
  let _ = (null != b ? b : 0) > 0,
    E = _ && null != b ? Math.ceil((1e3 * b - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: d.confirmation,
    children: [(0, r.jsx)("div", {
      className: d.iconWrapper,
      children: (0, r.jsx)(o.P$X, {
        size: "md",
        color: o.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: d.statusTextContainer,
      children: [(0, r.jsx)(o.Heading, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == m ? true : m.name) != null ? u.intl.formatToPlainString(u.t["P+/gzM"], {
          guildName: m.name
        }) : u.intl.string(u.t.gBPcuL)
      }), null != g && "" !== g ? (0, r.jsxs)(o.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: [(0, r.jsx)("span", {
          className: d.rejectionReasonLabel,
          children: u.intl.string(u.t.cf1psb)
        }), (0, r.jsx)("span", {
          children: g
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: d.confirmationButtonRow,
      children: [(0, r.jsx)(a.u, {
        asContainer: true,
        text: _ ? u.intl.formatToPlainString(u.t.A0f0Pz, {
          days: E
        }) : null,
        "aria-label": _ ? u.intl.formatToPlainString(u.t.A0f0Pz, {
          days: E
        }) : true,
        children: (0, r.jsx)(o.Button, {
          onClick: p,
          variant: "secondary",
          size: "md",
          loading: null == b,
          disabled: _,
          text: n,
          fullWidth: true
        })
      }), (0, r.jsx)(o.Button, {
        onClick: h,
        variant: "critical-primary",
        size: "md",
        text: f,
        fullWidth: true
      })]
    })]
  })
}