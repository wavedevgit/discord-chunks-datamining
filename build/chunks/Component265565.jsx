/** Chunk was on web.js **/
/** chunk id: 265565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk643850 = require("./643850.js");

function s(e) {
  let {
    name: t,
    onRetry: n
  } = e, s = null != t ? t : a.intl.string(a.t["11pdXZ"]);
  return (0, r.jsx)("div", {
    className: o.kL,
    children: (0, r.jsxs)("div", {
      className: o.wR,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/medium",
        color: "text-strong",
        children: s
      }), (0, r.jsxs)(i.DUT, {
        className: o.z3,
        onClick: n,
        children: [(0, r.jsx)(i.EpV, {
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