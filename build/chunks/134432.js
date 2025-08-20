/** Chunk was on web.js **/
/** chunk id: 134432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q4: () => R,
  Vv: () => T,
  oO: () => A,
  po: () => S,
  x_: () => Chunk921948.Z
}), require("./388685.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk664751 = require("./664751.js"),
  Chunk261470 = require("./261470.js"),
  Chunk956664 = require("./956664.js"),
  Chunk931619 = require("./931619.js"),
  Chunk591759 = require("./591759.js"),
  Chunk921948 = require("./921948.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
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
  y = new(o())({
    max: 1e3
  });

function O(e, t) {
  null == e.backoff && (e.backoff = new l.Z);
  let {
    backoff: n
  } = e;
  return async () => {
    await u.Z.isOnline(), n.fails < m ? n.fail(() => {
      v(e)
    }) : I(true, e, t)
  }
}

function v(e) {
  let t = new Image;
  t.onerror = O(e, t), t.onload = () => {
    let {
      backoff: n
    } = e;
    null != n && n.succeed(), I(false, e, t)
  }, t.src = e.url
}

function I(e, t, n) {
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

function T(e) {
  let t = y.get(e);
  return null != t && t.loaded
}

function S(e, t) {
  let n = y.get(e);
  if (null != n && n.loaded) return null != t && u.Z.awaitOnline().then(() => {
    null != n && null != n.callbacks && n.callbacks.forEach(t => {
      null != n ? t(false, n) : t(true, {
        url: e,
        loaded: true
      })
    })
  }), _.dG4;
  {
    let r;
    return null == n && (n = {
      url: e,
      loaded: false
    }, y.set(e, n), v(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set), n.callbacks.add(r)), () => {
      null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel())
    }
  }
}

function A(e) {
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
  return [t, s.parse(n)]
}

function N(e) {
  let {
    src: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: a,
    targetHeight: o,
    format: l = null,
    quality: u = null,
    animated: f = false,
    srcIsAnimated: p = false
  } = e;
  if (t.startsWith("data:image") || d.Z.isDiscordCdnUrl(t)) return t;
  let [h, m] = C(t);
  null != l && (m.format = l), null != u && (m.quality = u), f && p && (g.test(t) || E.test(t)) && (m.animated = true), E.test(t) && (m.format = "webp");
  let b = (0, c.Tj)({
    width: a,
    height: o,
    maxWidth: _.hiG,
    maxHeight: _.hiG
  });
  return a = b.width, o = b.height, (a !== n || o !== r) && (m.width = 0 | a, m.height = 0 | o), i().isEmpty(m) || (h += "?" + s.stringify(m)), h
}

function R(e) {
  let {
    src: t,
    width: n,
    height: r,
    maxWidth: i,
    maxHeight: a,
    ratio: o = 1,
    format: s = null,
    quality: l = null,
    animated: c = false,
    srcIsAnimated: u = false
  } = e, d = n, _ = r;
  o < 1 && (d = Math.round(n * o), _ = Math.round(r * o)), null != i && (d = Math.min(d, i)), null != a && (_ = Math.min(_, a));
  let p = (0, f.Z)();
  return N({
    src: t,
    sourceWidth: n,
    sourceHeight: r,
    targetWidth: d *= p,
    targetHeight: _ *= p,
    format: s,
    quality: l,
    animated: c,
    srcIsAnimated: u
  })
}