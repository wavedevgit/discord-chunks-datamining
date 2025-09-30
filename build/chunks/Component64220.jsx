/** Chunk was on 43374 **/
/** chunk id: 64220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk971631 = require("./971631.js");

function c(e) {
  let {
    markAsDismissed: t
  } = e;
  return r.useEffect(() => {
    let e = setTimeout(() => {
      t(l.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, a.jsxs)(i.P3F, {
    className: o.container,
    onClick: () => {
      t(l.L.USER_DISMISS)
    },
    children: [(0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: s.intl.string(s.t.fJNqJi)
    }), (0, a.jsx)("div", {
      className: o.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: l
  } = e, [s, o] = r.useState(false);
  return r.useEffect(() => {
    let e = setTimeout(() => {
      o(true)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [o]), (0, a.jsx)(i.yRy, {
    targetElementRef: l,
    position: "top",
    align: "left",
    shouldShow: s,
    renderPopout: () => (0, a.jsx)(c, {
      markAsDismissed: n
    }),
    children: t
  })
}