/** Chunk was on web.js **/
/** chunk id: 89285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35379 = require("./35379.js");

function s(e) {
  let {
    name: t,
    onRetry: n
  } = e, s = null != t ? t : a.intl.string(a.t["11pdXZ"]);
  return (0, r.jsx)("div", {
    className: o.container,
    children: (0, r.jsxs)("div", {
      className: o.headingContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/medium",
        color: "header-primary",
        children: s
      }), (0, r.jsxs)(i.P3F, {
        className: o.error,
        onClick: n,
        children: [(0, r.jsx)(i.Mgn, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "text-feedback-warning",
          children: a.intl.string(a.t.tmGHjc)
        })]
      })]
    })
  })
}