/** Chunk was on 87665 **/
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
  Chunk509353 = require("./509353.js");

function c(e) {
  let {
    markAsDismissed: t,
    onCTA: c
  } = e;
  return (0, a.jsxs)("div", {
    className: s.popup,
    children: [(0, a.jsxs)("div", {
      className: s.background,
      children: [(0, a.jsx)("div", {
        className: s.blur0
      }), (0, a.jsx)("div", {
        className: s.blur1
      }), (0, a.jsx)("div", {
        className: s.blur2
      })]
    }), (0, a.jsxs)("div", {
      className: s.content,
      children: [(0, a.jsx)(r.P3F, {
        className: s.closeIcon,
        onClick: () => t(i.L.USER_DISMISS),
        children: (0, a.jsx)(r.Dio, {})
      }), (0, a.jsx)("img", {
        src: n(414190),
        className: s.art,
        alt: ""
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)(r.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: s.heading,
          children: [o.intl.string(o.t.MLt8H4), (0, a.jsx)(l.Z, {
            className: s.betaTag
          })]
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: o.intl.string(o.t["l+lSLp"])
        })]
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        text: o.intl.string(o.t["9WdoB+"]),
        fullWidth: true,
        onClick: () => {
          t(i.L.TAKE_ACTION), c()
        }
      })]
    })]
  })
}