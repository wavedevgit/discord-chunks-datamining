/** Chunk was on 30202 **/
/** chunk id: 64220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
      t(a.L.AUTO_DISMISS)
    }, 8e3);
    return () => {
      clearTimeout(e)
    }
  }, [t]), (0, i.jsxs)(s.P3F, {
    className: o.container,
    onClick: () => {
      t(a.L.USER_DISMISS)
    },
    children: [(0, i.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "always-white",
      children: l.intl.string(l.t.fJNqJi)
    }), (0, i.jsx)("div", {
      className: o.pointer
    })]
  })
}

function d(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: a
  } = e, [l, o] = r.useState(false);
  return r.useEffect(() => {
    let e = setTimeout(() => {
      o(true)
    }, 1e3);
    return () => {
      clearTimeout(e)
    }
  }, [o]), (0, i.jsx)(s.yRy, {
    targetElementRef: a,
    position: "top",
    align: "left",
    shouldShow: l,
    renderPopout: () => (0, i.jsx)(c, {
      markAsDismissed: n
    }),
    children: t
  })
}