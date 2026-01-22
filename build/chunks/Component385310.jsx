/** Chunk was on 21738 **/
/** chunk id: 385310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let f = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: f,
    confirmText: h,
    onWithdrawApplication: A,
    rejectionReason: g = null,
    guild: m = null
  } = e, b = (0, l.bG)([c.A], () => {
    var e;
    return c.A.getCooldown(null != (e = null == m ? true : m.id) ? e : "0")
  }), {
    canReapply: _,
    isLoading: E
  } = (0, u.f)(null == m ? true : m.id);
  i.useEffect(() => {
    null == b && null != m && o.A.fetchJoinRequestCooldown(m.id)
  }, [b, m]);
  let O = (null != b ? b : 0) > 0,
    y = O && null != b ? Math.ceil((1e3 * b - Date.now()) / 864e5) : 0;
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
        children: (null == m ? true : m.name) != null ? d.intl.formatToPlainString(d.t["P+/gzA"], {
          guildName: m.name
        }) : d.intl.string(d.t.gBPcuP)
      }), null != g && "" !== g ? (0, r.jsxs)(s.Text, {
        variant: "text-md/medium",
        color: "text-default",
        children: [(0, r.jsx)("span", {
          className: p.Wj,
          children: d.intl.string(d.t.cf1psW)
        }), (0, r.jsx)("span", {
          children: g
        })]
      }) : null]
    }), (0, r.jsxs)("div", {
      className: p.Ow,
      children: [_ || E ? (0, r.jsx)(a.m, {
        asContainer: true,
        text: O ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : null,
        "aria-label": O ? d.intl.formatToPlainString(d.t.A0f0P7, {
          days: y
        }) : true,
        children: (0, r.jsx)(s.Button, {
          onClick: f,
          variant: "secondary",
          size: "md",
          loading: null == b || E,
          disabled: O || E,
          text: n,
          fullWidth: true
        })
      }) : null, (0, r.jsx)(s.Button, {
        onClick: () => A(_ || E),
        variant: "critical-primary",
        size: "md",
        text: h,
        fullWidth: true
      })]
    })]
  })
}