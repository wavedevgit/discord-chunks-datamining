/** Chunk was on web.js **/
/** chunk id: 645376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk900722 = require("./900722.js"),
  Chunk476324 = require("./476324.js");

function o(e) {
  let {
    user: t,
    size: n
  } = e, o = (0, i.KjH)(n), l = null != t ? t.getAvatarURL(null, o.size) : s;
  return (0, r.jsx)("div", {
    className: a.oJ,
    children: (0, r.jsx)("div", {
      className: a.my,
      style: {
        width: o.size,
        height: o.size
      },
      children: (0, r.jsx)(i.euF, {
        src: l,
        "aria-hidden": true,
        size: n
      })
    })
  })
}