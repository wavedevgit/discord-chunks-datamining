/** Chunk was on web.js **/
/** chunk id: 776231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => R,
  LE: () => S,
  kr: () => T,
  mZ: () => f.A,
  yt: () => I
}), require("./896048.js"), require("./747238.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk635377 = require("./635377.js"),
  s = require.n(Chunk635377),
  Chunk488428 = require("./488428.js"),
  Chunk158390 = require("./158390.js"),
  Chunk515718 = require("./515718.js"),
  Chunk209489 = require("./209489.js"),
  Chunk998218 = require("./998218.js"),
  Chunk835517 = require("./835517.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}
let m = 5,
  g = /\.webp($|\?|#)/i,
  E = /\.avif($|\?|#)/i,
  b = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
  y = new(s())({
    max: 1e3
  });

function O(e, t) {
  null == e.backoff && (e.backoff = new l.A);
  let {
    backoff: n
  } = e;
  return async () => {
    await u.A.isOnline(), n.fails < m ? n.fail(() => {
      A(e)
    }) : v(true, e, t)
  }
}

function A(e) {
  let t = new Image;
  t.onerror = O(e, t), t.onload = () => {
    let {
      backoff: n
    } = e;
    null != n && n.succeed(), v(false, e, t)
  }, t.src = e.url
}

function v(e, t, n) {
  let {
    callbacks: r,
    url: i
  } = t;
  if (e) y.del(i);
  else {
    let {
      width: e,
      height: r
    } = n;
    t = {
      url: i,
      loaded: true,
      width: e,
      height: r
    }, y.set(i, t)
  }
  null != r && r.forEach(n => n(e, t))
}

function S(e) {
  let t = y.get(e);
  return null != t && t.loaded
}

function I(e, t) {
  let n = y.get(e);
  if (null != n && n.loaded) return null != t && u.A.awaitOnline().then(() => {
    null != n && null != n.callbacks && n.callbacks.forEach(t => {
      null != n ? t(false, n) : t(true, {
        url: e,
        loaded: true
      })
    })
  }), p.tEg;
  {
    let r;
    return null == n && (n = {
      url: e,
      loaded: false
    }, y.set(e, n), A(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(r)), () => {
      null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel())
    }
  }
}

function T(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (n) {
    let t = b.filter(t => t <= e).pop();
    if (null != t && e / t <= 1.25) return t
  }
  return null != (t = b.find(t => e <= t)) ? t : b[b.length - 1]
}

function C(e) {
  let [t, n] = e.split("?");
  return [t, o.parse(n)]
}

function N(e) {
  let {
    src: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: a,
    targetHeight: s,
    format: l = null,
    quality: u = null,
    animated: f = false,
    srcIsAnimated: _ = false
  } = e;
  if (t.startsWith("data:image") || d.A.isDiscordCdnUrl(t)) return t;
  let [h, m] = C(t);
  null != l && (m.format = l), null != u && (m.quality = u), f && _ && (g.test(t) || E.test(t)) && (m.animated = true), E.test(t) && (m.format = "webp");
  let b = (0, c.Uj)({
    width: a,
    height: s,
    maxWidth: p.uJv,
    maxHeight: p.uJv
  });
  return a = b.width, s = b.height, (a !== n || s !== r) && (m.width = 0 | a, m.height = 0 | s), i().isEmpty(m) || (h += "?" + o.stringify(m)), h
}

function R(e) {
  let {
    src: t,
    width: n,
    height: r,
    maxWidth: i,
    maxHeight: a,
    ratio: s = 1,
    format: o = null,
    quality: l = null,
    animated: c = false,
    srcIsAnimated: u = false
  } = e, d = n, p = r;
  s < 1 && (d = Math.round(n * s), p = Math.round(r * s)), null != i && (d = Math.min(d, i)), null != a && (p = Math.min(p, a));
  let _ = (0, f.A)();
  return N({
    src: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: d *= _,
    targetHeight: p *= _,
    format: o,
    quality: l,
    animated: c,
    srcIsAnimated: u
  })
}