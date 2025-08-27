/** Chunk was on web.js **/
/** chunk id: 737583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a,
  l: () => o
}), require("./388685.js");
var Chunk693824 = require("./693824.js"),
  Chunk169040 = require("./169040.js");

function a(e) {
  let t, {
    canvas: n,
    badges: a,
    startPosition: o,
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
    }), a)) {
    let r = null != t ? t.w + t.x + i.PW : o,
      a = null != t ? t.w + t.x + i.PW + i.NC : o + i.NC;
    n.drawPath(e, {
      x: r,
      y: i.f0
    }, true, .6), t = n.drawText(l, {
      x: a,
      y: i.m2,
      w: s
    }, true)
  }
}

function o(e) {
  let {
    canvas: t,
    avatarSrcs: n,
    position: {
      x: i,
      y: a
    },
    avatarImageSize: o
  } = e;
  for (let e = 0; e < n.length; e++) e < n.length - 1 && t.clipRoundedRect({
    x: i + (e + 1) * (o - 8) - 2,
    y: a - 1,
    w: o + 2,
    h: o + 2
  }, o / 2, true), t.drawRoundedImage(n[e], {
    x: i + e * (o - 8),
    y: a
  }, {
    w: o,
    h: o
  }, 50, {
    fillMode: r.JU.Cover
  }), t.restoreContext()
}