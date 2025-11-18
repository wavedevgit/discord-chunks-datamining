/** Chunk was on web.js **/
/** chunk id: 844068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk500375 = require("./500375.js");

function s(e) {
  let {
    notificationBlockRef: t
  } = e, {
    selectedPlanNotification: n
  } = (0, a.JL)();
  return null == n ? null : (0, r.jsxs)("div", {
    className: o.notification,
    ref: t,
    children: [(0, r.jsx)(i.owK, {
      className: o.icon,
      color: "currentColor"
    }), (0, r.jsx)("div", {
      className: o.text,
      children: n
    })]
  })
}