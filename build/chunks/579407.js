/** Chunk was on web.js **/
"use strict";
n.d(t, {
  EU: () => s,
  Xm: () => o
});
var r = n(357352),
  i = n(4242);

function o(e) {
  return null == e ? null : {
    nameplate: a(e.nameplate)
  }
}

function a(e) {
  return null == e ? null : {
    asset: e.asset,
    skuId: e.sku_id,
    expiresAt: e.expires_at,
    label: e.label,
    palette: e.palette
  }
}

function s(e) {
  return {
    src: (0, r.b)(e.asset + "_playtest/static.png"),
    animatedSrc: (0, r.b)(e.asset + "_playtest/animated.png"),
    imgAlt: e.label,
    palette: (0, i.t1)(e.palette)
  }
}