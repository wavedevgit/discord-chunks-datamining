/** Chunk was on 21738 **/
/** chunk id: 385310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk624458 = require("./624458.js"),
  Chunk212455 = require("./212455.js"),
  Chunk332118 = require("./332118.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk400783 = require("./400783.js");
let h = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: h,
    confirmText: g,
    onWithdrawApplication: f,
    rejectionReason: m = null,
    guild: A = null
  } = e, _ = (0, l.bG)([c.A], () => {
    var e;
    return c.A.getCooldown(null != (e = null == A ? true : A.id) ? e : "0")
  }), {
    canReapply: b,
    isLoading: E
  } = (0, u.f)(null == A ? true : A.id);
  i.useEffect(() => {
    null == _ && null != A && o.A.fetchJoinRequestCooldown(A.id)
  }, [_, A]);
  let O = (null != _ ? _ : 0) > 0,
    y = O && null != _ ? Math.ceil((1e3 * _ - Date.now()) / 864e5) : 0;
  return (0, r.jsxs)("div", {
    className: p.EL,
    children: [(0, r.jsx)("div", {
      className: p.P0,
      children: (0, r.jsx)(s.aoi, {
        size: "md",
        color: s.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsxs)("div", {
      className: p.bc,
      children: [(0, r.jsx)(s.Heading, {
        id: t,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: (null == A ? true : A.name) != null ? d.intl.formatToPlainString(d.t["P+/gzA"], {
          guildName: A.name
        }) : d.intl.string(d.t.gBPcuP)
      }), null != m && "" !== m ? (0, r.jsxs)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: [(0, r.jsx)("span", {
          className: p.Wj,
          children: d.intl.string(d.t.cf1psW)
        }), (0, r.jsx)("span", {
          children: m
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: p.Ow,
      children: [b || E ? (0, r.jsx)(a.m, {
        asContainer: true,
        text: O ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : null,
        "aria-label": O ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : true,
        children: (0, r.jsx)(s.Button, {
          onClick: h,
          variant: "secondary",
          size: "md",
          loading: null == _ || E,
          disabled: O || E,
          text: n,
          fullWidth: true
        })
      }) : null, (0, r.jsx)(s.Button, {
        onClick: () => f(b || E),
        variant: "critical-primary",
        size: "md",
        text: g,
        fullWidth: true
      })]
    })]
  })
}