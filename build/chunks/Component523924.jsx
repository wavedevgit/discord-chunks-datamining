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
  Chunk871612 = require("./871612.js");
let f = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: f,
    confirmText: g,
    onWithdrawApplication: m,
    rejectionReason: h = null,
    guild: b = null
  } = e, _ = (0, l.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == b ? true : b.id) ? e : "0")
  }), {
    canReapply: E,
    isLoading: O
  } = (0, u.o)(null == b ? true : b.id);
  i.useEffect(() => {
    null == _ && null != b && s.Z.fetchJoinRequestCooldown(b.id)
  }, [_, b]);
  let v = (null != _ ? _ : 0) > 0,
    y = v && null != _ ? Math.ceil((1e3 * _ - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: p.confirmation,
    children: [(0, r.jsx)("div", {
      className: p.iconWrapper,
      children: (0, r.jsx)(o.P$X, {
        size: "md",
        color: o.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: p.statusTextContainer,
      children: [(0, r.jsx)(o.Heading, {
        id: t,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: (null == b ? true : b.name) != null ? d.intl.formatToPlainString(d.t["P+/gzA"], {
          guildName: b.name
        }) : d.intl.string(d.t.gBPcuP)
      }), null != h && "" !== h ? (0, r.jsxs)(o.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: [(0, r.jsx)("span", {
          className: p.rejectionReasonLabel,
          children: d.intl.string(d.t.cf1psW)
        }), (0, r.jsx)("span", {
          children: h
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
        children: (0, r.jsx)(o.Button, {
          onClick: f,
          variant: "secondary",
          size: "md",
          loading: null == _ || O,
          disabled: v || O,
          text: n,
          fullWidth: true
        })
      }) : null, (0, r.jsx)(o.Button, {
        onClick: () => m(E || O),
        variant: "critical-primary",
        size: "md",
        text: g,
        fullWidth: true
      })]
    })]
  })
}