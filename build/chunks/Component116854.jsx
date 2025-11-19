/** Chunk was on web.js **/
/** chunk id: 116854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk298011 = require("./298011.js");

function o(e) {
  let {
    user: t,
    nickname: n
  } = e, o = null != n;
  return (0, r.jsx)(i.qEK, {
    src: t.getAvatarURL(true, o ? 16 : 24),
    size: o ? i.EFr.SIZE_16 : i.EFr.SIZE_24,
    className: o ? a.miniAvatar : a.largeAvatar,
    "aria-hidden": true
  })
}