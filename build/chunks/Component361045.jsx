/** Chunk was on 66181 **/
/** chunk id: 361045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941246 = require("./941246.js");

function c(e) {
  let {
    markAsDismissed: t,
    onCTA: c
  } = e;
  return (0, i.jsxs)("div", {
    className: o.popup,
    children: [(0, i.jsxs)("div", {
      className: o.background,
      children: [(0, i.jsx)("div", {
        className: o.blur0
      }), (0, i.jsx)("div", {
        className: o.blur1
      }), (0, i.jsx)("div", {
        className: o.blur2
      })]
    }), (0, i.jsxs)("div", {
      className: o.content,
      children: [(0, i.jsx)(r.P3F, {
        className: o.closeIcon,
        onClick: () => t(a.L.USER_DISMISS),
        children: (0, i.jsx)(r.Dio, {})
      }), (0, i.jsx)("img", {
        src: n(414190),
        className: o.art,
        alt: ""
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(r.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: o.heading,
          children: [l.intl.string(l.t.MLt8Hx), (0, i.jsx)(s.Z, {
            className: o.betaTag
          })]
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: l.intl.string(l.t["l+lSLi"])
        })]
      }), (0, i.jsx)(r.zxk, {
        variant: "primary",
        text: l.intl.string(l.t["9WdoBw"]),
        fullWidth: true,
        onClick: () => {
          t(a.L.TAKE_ACTION), c()
        }
      })]
    })]
  })
}