/** Chunk was on web.js **/
/** chunk id: 365170, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a,
  v: () => o
}), require("./896048.js");
var Chunk583954 = require("./583954.js"),
  Chunk241678 = require("./241678.js");

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
      family: i.mw,
      weight: 500,
      truncate: r.Kq.None
    }), a)) {
    let r = null != t ? t.w + t.x + 12 : o,
      i = null != t ? t.w + t.x + 12 + 18 : o + 18;
    n.drawPath(e, {
      x: r,
      y: 88
    }, true, .6), t = n.drawText(l, {
      x: i,
      y: 99,
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
    fillMode: r.VZ.Cover
  }), t.restoreContext()
}