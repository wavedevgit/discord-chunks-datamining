/** Chunk was on web.js **/
/** chunk id: 116854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk231819 = require("./231819.js");

function a(e) {
  let {
    user: t,
    nickname: n
  } = e, a = null != n;
  return (0, r.jsx)(i.qEK, {
    src: t.getAvatarURL(true, a ? 16 : 24),
    size: a ? i.EFr.SIZE_16 : i.EFr.SIZE_24,
    className: a ? o.miniAvatar : o.largeAvatar,
    "aria-hidden": true
  })
}