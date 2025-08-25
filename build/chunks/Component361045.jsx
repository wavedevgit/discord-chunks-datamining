/** Chunk was on web.js **/
/** chunk id: 361045, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  return (0, r.jsxs)("div", {
    className: l.popup,
    children: [(0, r.jsxs)("div", {
      className: l.background,
      children: [(0, r.jsx)("div", {
        className: l.blur0
      }), (0, r.jsx)("div", {
        className: l.blur1
      }), (0, r.jsx)("div", {
        className: l.blur2
      })]
    }), (0, r.jsxs)("div", {
      className: l.content,
      children: [(0, r.jsx)(i.P3F, {
        className: l.closeIcon,
        onClick: () => t(a.L.USER_DISMISS),
        children: (0, r.jsx)(i.Dio, {})
      }), (0, r.jsx)("img", {
        src: n(414190),
        className: l.art,
        alt: ""
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(i.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: l.heading,
          children: [s.intl.string(s.t.MLt8Hx), (0, r.jsx)(o.Z, {
            className: l.betaTag
          })]
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: s.intl.string(s.t["l+lSLi"])
        })]
      }), (0, r.jsx)(i.zxk, {
        variant: "primary",
        text: s.intl.string(s.t["9WdoBw"]),
        fullWidth: true,
        onClick: () => {
          t(a.L.TAKE_ACTION), c()
        }
      })]
    })]
  })
}