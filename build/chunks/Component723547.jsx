/** Chunk was on web.js **/
/** chunk id: 723547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => l
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820762 = require("./820762.js");

function l(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e;
  return (0, r.jsx)("div", {
    className: s.popup,
    children: (0, r.jsxs)("div", {
      className: s.content,
      children: [(0, r.jsx)(i.P3F, {
        className: s.closeIcon,
        onClick: () => t(a.L.USER_DISMISS),
        children: (0, r.jsx)(i.Dio, {
          size: "xs"
        })
      }), (0, r.jsx)(i.Text, {
        className: s.description,
        variant: "text-md/normal",
        children: o.intl.string(o.t["Ny/0ur"])
      }), (0, r.jsx)(i.zxk, {
        variant: "primary",
        size: "sm",
        text: o.intl.string(o.t.TYo739),
        fullWidth: true,
        onClick: () => {
          t(a.L.TAKE_ACTION), n()
        }
      })]
    })
  })
}