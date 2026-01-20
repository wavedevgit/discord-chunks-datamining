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
    onWithdrawApplication: h,
    rejectionReason: m = null,
    guild: b = null
  } = e, E = (0, l.e7)([c.Z], () => {
    var e;
    return c.Z.getCooldown(null != (e = null == b ? true : b.id) ? e : "0")
  }), {
    canReapply: _,
    isLoading: O
  } = (0, u.o)(null == b ? true : b.id);
  i.useEffect(() => {
    null == E && null != b && s.Z.fetchJoinRequestCooldown(b.id)
  }, [E, b]);
  let v = (null != E ? E : 0) > 0,
    I = v && null != E ? Math.ceil((1e3 * E - Date.now()) / 864e5) : 0;
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
      }), null != m && "" !== m ? (0, r.jsxs)(o.Text, {
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
      children: [_ || O ? (0, r.jsx)(a.u, {
        asContainer: true,
        text: v ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: I
        }) : null,
        "aria-label": v ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: I
        }) : true,
        children: (0, r.jsx)(o.Button, {
          onClick: f,
          variant: "secondary",
          size: "md",
          loading: null == E || O,
          disabled: v || O,
          text: n,
          fullWidth: true
        })
      }) : null, (0, r.jsx)(o.Button, {
        onClick: () => h(_ || O),
        variant: "critical-primary",
        size: "md",
        text: g,
        fullWidth: true
      })]
    })]
  })
}