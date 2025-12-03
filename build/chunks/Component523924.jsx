/** Chunk was on 1272 **/
/** chunk id: 523924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk693546 = require("./693546.js"),
  Chunk937111 = require("./937111.js"),
  Chunk850493 = require("./850493.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394121 = require("./394121.js");
let f = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: f,
    confirmText: h,
    onWithdrawApplication: g,
    rejectionReason: m = null,
    guild: _ = null
  } = e, b = (0, l.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == _ ? true : _.id) ? e : "0")
  }), {
    canReapply: E,
    isLoading: O
  } = (0, u.o)(null == _ ? true : _.id);
  i.useEffect(() => {
    null == b && null != _ && o.Z.fetchJoinRequestCooldown(_.id)
  }, [b, _]);
  let v = (null != b ? b : 0) > 0,
    y = v && null != b ? Math.ceil((1e3 * b - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: p.confirmation,
    children: [(0, r.jsx)("div", {
      className: p.iconWrapper,
      children: (0, r.jsx)(s.P$X, {
        size: "md",
        color: s.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: p.statusTextContainer,
      children: [(0, r.jsx)(s.Heading, {
        id: t,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: (null == _ ? true : _.name) != null ? d.intl.formatToPlainString(d.t["P+/gzA"], {
          guildName: _.name
        }) : d.intl.string(d.t.gBPcuP)
      }), null != m && "" !== m ? (0, r.jsxs)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: [(0, r.jsx)("span", {
          className: p.rejectionReasonLabel,
          children: d.intl.string(d.t.cf1psW)
        }), (0, r.jsx)("span", {
          children: m
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: p.confirmationButtonRow,
      children: [E || O ? (0, r.jsx)(a.u, {
        asContainer: true,
        text: v ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : null,
        "aria-label": v ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : true,
        children: (0, r.jsx)(s.Button, {
          onClick: f,
          variant: "secondary",
          size: "md",
          loading: null == b || O,
          disabled: v || O,
          text: n,
          fullWidth: true
        })
      }) : null, (0, r.jsx)(s.Button, {
        onClick: () => g(E || O),
        variant: "critical-primary",
        size: "md",
        text: h,
        fullWidth: true
      })]
    })]
  })
}