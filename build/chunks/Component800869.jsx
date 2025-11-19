/** Chunk was on 44799 **/
/** chunk id: 800869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk176179 = require("./176179.js"),
  Chunk719119 = require("./719119.js");

function p(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: u.image,
      src: d
    }), (0, r.jsx)(i.xvT, {
      color: "always-white",
      variant: "text-md/semibold",
      children: c.intl.string(s.default.diMhWc)
    }), (0, r.jsx)(i.xvT, {
      color: "always-white",
      variant: "text-sm/medium",
      children: c.intl.string(s.default.pycxTr)
    }), (0, r.jsx)("div", {
      className: u.close,
      children: (0, r.jsx)(l.hU, {
        variant: "icon-only",
        size: "md",
        "aria-label": c.intl.string(c.t.cpT0Cq),
        onClick: () => {
          t(a.L.USER_DISMISS)
        },
        icon: o.Dio
      })
    })]
  })
}