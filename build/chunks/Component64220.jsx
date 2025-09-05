/** Chunk was on web.js **/
/** chunk id: 64220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990287 = require("./990287.js");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  i.useEffect(() => {
    let e = setTimeout(() => {
      t(o.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let n = () => {
    t(o.L.USER_DISMISS)
  };
  return (0, r.jsxs)(a.P3F, {
    className: l.container,
    onClick: n,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: s.intl.string(s.t.fJNqJi)
    }), (0, r.jsx)("div", {
      className: l.pointer
    })]
  })
}

function u(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: o
  } = e, [s, l] = i.useState(false);
  return i.useEffect(() => {
    let e = setTimeout(() => {
      l(true)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [l]), (0, r.jsx)(a.yRy, {
    targetElementRef: o,
    position: "top",
    align: "left",
    shouldShow: s,
    renderPopout: () => (0, r.jsx)(c, {
      markAsDismissed: n
    }),
    children: t
  })
}