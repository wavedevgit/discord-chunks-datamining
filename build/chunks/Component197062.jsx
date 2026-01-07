/** Chunk was on web.js **/
/** chunk id: 197062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let o = (e, t) => {
    let n = {
      display: "flex",
      gap: "4px",
      margin: "8px 0 4px 0",
      alignItems: "center"
    };
    return (0, r.jsxs)(i.Text, {
      color: "text-feedback-critical",
      style: n,
      variant: "text-sm/normal",
      children: [(0, r.jsx)(i.Mgn, {
        size: "custom",
        color: "currentColor",
        width: 14,
        height: 14
      }), e]
    }, t)
  },
  s = {
    getForumChannelPermissionText: function() {
      return a.intl.format(a.t.zlXUVY, {
        warningHook: o
      })
    }
  }