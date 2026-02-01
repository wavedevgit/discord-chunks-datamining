/** Chunk was on 90228 **/
/** chunk id: 4807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367727 = require("./367727.js"),
  Chunk594061 = require("./594061.js"),
  Chunk795695 = require("./795695.js");

function u() {
  return (0, a.jsx)(s.HOs, {
    className: d.kL,
    children: (0, a.jsx)(m, {})
  })
}

function m() {
  let e = l.useCallback(() => {
      (0, c._N)(i.M.NITRO_TENURE_BADGE_LEVEL_UP)
    }, []),
    {
      lastDismissedAtMs: t
    } = (0, o.FZ)(i.M.NITRO_TENURE_BADGE_LEVEL_UP),
    n = null != t ? new Date(t) : null;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.DZT, {
      className: d.wx,
      variant: "heading-lg/semibold",
      children: "Tenure Badges"
    }), (0, a.jsxs)("p", {
      children: ["Level Up DC:\xa0", null != n && (0, a.jsxs)("b", {
        children: ["Dismissed (", n.toLocaleDateString(), ")"]
      }), null == n && (0, a.jsx)("b", {
        children: "Not Dismissed"
      })]
    }), (0, a.jsx)("div", {
      className: d.PW,
      children: (0, a.jsx)(s.Button, {
        variant: "primary",
        text: "Reset Level Up DC",
        onClick: e
      })
    })]
  })
}