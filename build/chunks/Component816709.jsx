/** Chunk was on 13088 **/
/** chunk id: 816709, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk9578 = require("./9578.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk202509 = require("./202509.js");

function o(t) {
  let {
    termsOfServiceUrl: e,
    privacyPolicyUrl: n
  } = t;
  return null == e && null == n ? null : (0, l.jsxs)("span", {
    className: u.Q,
    children: [null != e && (0, l.jsx)(r.A, {
      href: e,
      children: i.intl.string(i.t["8S0kcM"])
    }), null != e && null != n && (0, l.jsx)("span", {
      "aria-disabled": "true",
      children: "•"
    }), null != n && (0, l.jsx)(r.A, {
      href: n,
      children: i.intl.string(i.t.ZpyeCm)
    })]
  })
}