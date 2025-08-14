/** Chunk was on web.js **/
/** chunk id: 533159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk794295 = require("./794295.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94209 = require("./94209.js");

function s(e) {
  let {
    termsOfServiceUrl: t,
    privacyPolicyUrl: n
  } = e;
  return null == t && null == n ? null : (0, r.jsxs)("span", {
    className: a.text,
    children: [null != t && (0, r.jsx)(i.Z, {
      href: t,
      children: o.intl.string(o.t["8S0kcH"])
    }), null != t && null != n && (0, r.jsx)("span", {
      "aria-disabled": "true",
      children: "•"
    }), null != n && (0, r.jsx)(i.Z, {
      href: n,
      children: o.intl.string(o.t.ZpyeCg)
    })]
  })
}