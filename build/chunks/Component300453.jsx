/** Chunk was on 384 **/
/** chunk id: 300453, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk601374 = require("./601374.js");

function s(e) {
  let {
    step: t,
    header: n,
    children: s
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
      }), null != s && (0, r.jsx)("div", {
        className: l.triggerSettingsContainer,
        children: s
      })]
    })]
  })
}