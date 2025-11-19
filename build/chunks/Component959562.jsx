/** Chunk was on web.js **/
/** chunk id: 959562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk782280 = require("./782280.js"),
  Chunk660097 = require("./660097.js");

function s(e) {
  let {
    user: t,
    size: n
  } = e, s = (0, i.UCu)(n), l = null != t ? t.getAvatarURL(null, s.size) : o;
  return (0, r.jsx)("div", {
    className: a.avatarBackground,
    children: (0, r.jsx)("div", {
      className: a.avatar,
      style: {
        width: s.size,
        height: s.size
      },
      children: (0, r.jsx)(i.qEK, {
        src: l,
        "aria-hidden": true,
        size: n
      })
    })
  })
}