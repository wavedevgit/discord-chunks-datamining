/** Chunk was on web.js **/
/** chunk id: 395108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk979554 = require("./979554.js"),
  Chunk583434 = require("./583434.js"),
  Chunk579407 = require("./579407.js"),
  Chunk359135 = require("./359135.js"),
  Chunk516817 = require("./516817.jsx"),
  Chunk768581 = require("./768581.js");
let u = e => {
  let {
    skuId: t,
    size: n = 128,
    animated: u = false
  } = e, {
    product: d
  } = (0, a.T)(t, true), f = null == d ? true : d.items[0];
  if (null == f) return null;
  if (f.type === i.Z.AVATAR_DECORATION) {
    let e = c.ZP.getAvatarDecorationURL({
      avatarDecoration: f,
      size: n,
      canAnimate: u
    });
    return (0, r.jsx)("img", {
      src: e,
      alt: ""
    })
  }
  if (f.type === i.Z.PROFILE_EFFECT) {
    let e = f.thumbnailPreviewSrc;
    return (0, r.jsx)("img", {
      src: e,
      alt: ""
    })
  }
  if (f.type === i.Z.NAMEPLATE) {
    let e = (0, o.E)(f);
    return (0, r.jsx)(l.Z, {
      nameplate: e,
      placement: s.i.PREVIEW
    })
  }
  return null
}