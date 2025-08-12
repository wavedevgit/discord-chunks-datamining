/** Chunk was on 5533 **/
/** chunk id: 300453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk520034 = require("./520034.js");

function a(e) {
  let {
    step: t,
    header: n,
    children: a
  } = e;
  return (0, r.jsxs)("div", {
    className: l.triggerContainer,
    children: [(0, r.jsx)("div", {
      className: l.triggerCounterContainer,
      children: (0, r.jsx)("div", {
        className: l.stepCountIcon,
        children: (0, r.jsx)(i.Text, {
          className: l.stepCount,
          variant: "text-sm/bold",
          children: t
        })
      })
    }), (0, r.jsxs)("div", {
      className: l.triggerMainContainer,
      children: [(0, r.jsx)("div", {
        className: l.__invalid_triggerHeaderContainer,
        children: (0, r.jsx)(i.Text, {
          className: l.triggerHeader,
          variant: "text-sm/normal",
          children: n
        })
      }), null != a && (0, r.jsx)("div", {
        className: l.triggerSettingsContainer,
        children: a
      })]
    })]
  })
}