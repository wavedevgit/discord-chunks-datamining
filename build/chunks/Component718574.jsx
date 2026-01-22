/** Chunk was on web.js **/
/** chunk id: 718574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");
let s = (e, t) => {
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
      children: [(0, r.jsx)(i.EpV, {
        size: "custom",
        color: "currentColor",
        width: 14,
        height: 14
      }), e]
    }, t)
  },
  o = {
    getForumChannelPermissionText: function() {
      return a.intl.format(a.t.zlXUVY, {
        warningHook: s
      })
    }
  }