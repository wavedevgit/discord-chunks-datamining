/** Chunk was on 74891 **/
/** chunk id: 533159, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk794295 = require("./794295.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94209 = require("./94209.js");

function a(t) {
  let {
    termsOfServiceUrl: e,
    privacyPolicyUrl: n
  } = t;
  return null == e && null == n ? null : (0, i.jsxs)("span", {
    className: o.text,
    children: [null != e && (0, i.jsx)(r.Z, {
      href: e,
      children: l.intl.string(l.t["8S0kcH"])
    }), null != e && null != n && (0, i.jsx)("span", {
      "aria-disabled": "true",
      children: "•"
    }), null != n && (0, i.jsx)(r.Z, {
      href: n,
      children: l.intl.string(l.t.ZpyeCg)
    })]
  })
}