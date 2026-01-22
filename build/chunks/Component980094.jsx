/** Chunk was on web.js **/
/** chunk id: 980094, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk665711 = require("./665711.jsx"),
  Chunk108788 = require("./108788.js");
let o = 20,
  l = e => {
    let {
      application: t,
      iconSize: n = o
    } = e;
    return null == t ? null : (0, r.jsxs)("div", {
      className: s.k,
      children: [(0, r.jsx)(a.W, {
        application: t,
        iconSize: n
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: t.name
      })]
    })
  }