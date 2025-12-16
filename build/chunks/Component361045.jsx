/** Chunk was on 29725 **/
/** chunk id: 361045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk506812 = require("./506812.js");

function c(e) {
  let {
    markAsDismissed: t,
    onCTA: c
  } = e;
  return (0, a.jsxs)("div", {
    className: o.popup,
    children: [(0, a.jsxs)("div", {
      className: o.background,
      children: [(0, a.jsx)("div", {
        className: o.blur0
      }), (0, a.jsx)("div", {
        className: o.blur1
      }), (0, a.jsx)("div", {
        className: o.blur2
      })]
    }), (0, a.jsxs)("div", {
      className: o.content,
      children: [(0, a.jsx)(r.P3F, {
        className: o.closeIcon,
        onClick: () => t(i.L.USER_DISMISS),
        children: (0, a.jsx)(r.Dio, {})
      }), (0, a.jsx)("img", {
        src: n(414190),
        className: o.art,
        alt: ""
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)(r.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: o.heading,
          children: [s.intl.string(s.t.MLt8H4), (0, a.jsx)(l.Z, {
            className: o.betaTag
          })]
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: s.intl.string(s.t["l+lSLp"])
        })]
      }), (0, a.jsx)(r.Button, {
        variant: "primary",
        text: s.intl.string(s.t["9WdoB+"]),
        fullWidth: true,
        onClick: () => {
          t(i.L.TAKE_ACTION), c()
        }
      })]
    })]
  })
}