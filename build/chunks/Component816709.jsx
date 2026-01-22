/** Chunk was on web.js **/
/** chunk id: 816709, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk9578 = require("./9578.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk202509 = require("./202509.js");

function o(e) {
  let {
    termsOfServiceUrl: t,
    privacyPolicyUrl: n
  } = e;
  return null == t && null == n ? null : (0, r.jsxs)("span", {
    className: s.Q,
    children: [null != t && (0, r.jsx)(i.A, {
      href: t,
      children: a.intl.string(a.t["8S0kcM"])
    }), null != t && null != n && (0, r.jsx)("span", {
      "aria-disabled": "true",
      children: "•"
    }), null != n && (0, r.jsx)(i.A, {
      href: n,
      children: a.intl.string(a.t.ZpyeCm)
    })]
  })
}