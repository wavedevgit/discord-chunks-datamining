/** Chunk was on web.js **/
/** chunk id: 737583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o,
  l: () => a
}), require("./388685.js");
var Chunk693824 = require("./693824.js"),
  Chunk169040 = require("./169040.js");

function o(e) {
  let t, {
    canvas: n,
    badges: o,
    startPosition: a,
    maxWidth: s
  } = e;
  for (let {
      iconPath: e,
      text: l
    }
    of(n.setFont({
      size: 12,
      family: i.I8,
      weight: i.Ue,
      truncate: r.GX.None
    }), o)) {
    let r = null != t ? t.w + t.x + i.PW : a,
      o = null != t ? t.w + t.x + i.PW + i.NC : a + i.NC;
    n.drawPath(e, {
      x: r,
      y: i.f0
    }, true, .6), t = n.drawText(l, {
      x: o,
      y: i.m2,
      w: s
    }, true)
  }
}

function a(e) {
  let {
    canvas: t,
    avatarSrcs: n,
    position: {
      x: i,
      y: o
    },
    avatarImageSize: a
  } = e;
  for (let e = 0; e < n.length; e++) e < n.length - 1 && t.clipRoundedRect({
    x: i + (e + 1) * (a - 8) - 2,
    y: o - 1,
    w: a + 2,
    h: a + 2
  }, a / 2, true), t.drawRoundedImage(n[e], {
    x: i + e * (a - 8),
    y: o
  }, {
    w: a,
    h: a
  }, 50, {
    fillMode: r.JU.Cover
  }), t.restoreContext()
}