/** Chunk was on 75708 **/
/** chunk id: 90042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk832051 = require("./832051.js");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, i.jsxs)(r.P3F, {
    className: l.container,
    onClick: () => {
      t(s.L.USER_DISMISS)
    },
    children: [(0, i.jsx)(r.X6q, {
      color: "always-white",
      variant: "heading-sm/semibold",
      children: a.intl.string(a.t.ALB9np)
    }), (0, i.jsx)(r.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      children: a.intl.string(a.t.rYAs7O)
    }), (0, i.jsx)("div", {
      className: l.pointer
    })]
  })
}

function c(e) {
  let {
    children: t,
    markAsDismissed: n,
    targetElementRef: a
  } = e;
  return (0, i.jsx)(r.yRy, {
    targetElementRef: a,
    onRequestClose: () => n(s.L.INDIRECT_ACTION),
    position: "top",
    align: "left",
    shouldShow: true,
    animation: r.yRy.Animation.TRANSLATE,
    renderPopout: () => (0, i.jsx)(o, {
      markAsDismissed: n
    }),
    children: t
  })
}