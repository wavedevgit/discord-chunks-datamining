/** Chunk was on web.js **/
/** chunk id: 940622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => A,
  Iv: () => N,
  JE: () => b,
  NE: () => O,
  br: () => R,
  mb: () => v,
  od: () => C
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./638769.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk353640 = require("./353640.js"),
  Chunk575593 = require("./575593.js"),
  Chunk121894 = require("./121894.js"),
  Chunk43708 = require("./43708.js"),
  Chunk14752 = require("./14752.js"),
  Chunk559474 = require("./559474.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e, t) {
  if ("object" !== y(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== y(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function E(e) {
  var t = g(e, "string");
  return "symbol" === y(t) ? t : String(t)
}

function y(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let b = (0, Chunk353640.v)(e => ({
    previewEnabled: false,
    collectionAssets: {},
    avatarDecorationAssets: {},
    previewProfileEffectSkuId: null,
    previewAvatarDecorationSkuId: null,
    setPreviewEnabled: t => e({
      previewEnabled: t
    }),
    upsertCollectionAsset: (t, n) => (0, o.r)(() => {
      e(e => {
        let r = e.collectionAssets[t];
        null != r && URL.revokeObjectURL(r.src);
        let i = URL.createObjectURL(n),
          a = f({}, e.collectionAssets);
        return a[t] = {
          type: t,
          name: n.name,
          src: i
        }, _(f({}, e), {
          collectionAssets: a,
          previewEnabled: true
        })
      })
    }),
    deleteCollectionAsset: t => (0, o.r)(() => {
      e(e => {
        let n = e.collectionAssets[t];
        if (null == n) return e;
        URL.revokeObjectURL(n.src);
        let r = e.collectionAssets,
          {
            [t]: i
          } = r,
          a = h(r, [E(t)]),
          s = Object.keys(a).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
        return _(f({}, e), {
          collectionAssets: a,
          previewEnabled: s
        })
      })
    }),
    upsertAvatarDecorationAsset: t => (0, o.r)(() => {
      e(e => {
        let n = e.avatarDecorationAssets[t.name];
        null != n && URL.revokeObjectURL(n.src);
        let r = URL.createObjectURL(t),
          i = f({}, e.avatarDecorationAssets);
        return i[t.name] = {
          type: u.Jn.AVATAR_DECORATION,
          name: t.name,
          src: r
        }, _(f({}, e), {
          avatarDecorationAssets: i,
          previewEnabled: true
        })
      })
    }),
    deleteAvatarDecorationAsset: t => (0, o.r)(() => {
      e(e => {
        let n = e.avatarDecorationAssets[t];
        if (null == n) return e;
        URL.revokeObjectURL(n.src);
        let r = e.avatarDecorationAssets,
          {
            [t]: i
          } = r,
          a = h(r, [E(t)]),
          s = Object.keys(a).length > 0 || Object.keys(e.collectionAssets).length > 0;
        return _(f({}, e), {
          avatarDecorationAssets: a,
          previewEnabled: s
        })
      })
    }),
    clearAssets: () => (0, o.r)(() => {
      e(e => (Object.values(e.collectionAssets).forEach(e => URL.revokeObjectURL(e.src)), Object.values(e.avatarDecorationAssets).forEach(e => URL.revokeObjectURL(e.src)), {
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewEnabled: false,
        previewProfileEffectSkuId: null,
        previewAvatarDecorationSkuId: null
      }))
    }),
    setPreviewProfileEffectSkuId: t => (0, o.r)(() => e({
      previewProfileEffectSkuId: t,
      previewEnabled: null != t
    })),
    setPreviewAvatarDecorationSkuId: t => (0, o.r)(() => e({
      previewAvatarDecorationSkuId: t,
      previewEnabled: null != t
    }))
  })),
  O = () => {
    let e = b(e => e.collectionAssets),
      t = b(e => e.avatarDecorationAssets);
    return r.useMemo(() => ({
      collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
      avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name))
    }), [e, t])
  },
  v = e => b(t => {
    var n;
    return t.previewEnabled ? null == (n = t.collectionAssets[e]) ? true : n.src : null
  }),
  A = e => {
    let {
      previewEnabled: t,
      previewProfileEffectSkuId: n
    } = b(), a = t ? n : null, s = (0, l.ZK)(a);
    return r.useMemo(() => {
      if (null == s || null == e) return null;
      let {
        effects: t,
        stillFrames: n
      } = s.config, r = null != n && Object.keys(n).length > 0;
      if (0 === t.length && !r) return null;
      let a = (0, i.cloneDeep)(e);
      if (a.title = s.name, a.effects = t.map(e => {
          let {
            base64: t
          } = e;
          return h(e, ["base64"])
        }), r) {
        var o, l, u, d, f, p;
        a.reducedMotionSrc = null != (o = null == (d = n[c.qH.REDUCED_MOTION]) ? true : d.src) ? o : "", a.staticFrameSrc = null != (l = null == (f = n[c.qH.STATIC]) ? true : f.src) ? l : "", a.thumbnailPreviewSrc = null != (u = null == (p = n[c.qH.THUMBNAIL]) ? true : p.src) ? u : ""
      }
      return a
    }, [s, e])
  },
  I = (e, t) => _(f({}, e), {
    asset: t.src
  }),
  S = (e, t) => {
    if (e.type !== s.R.AVATAR_DECORATION) return e;
    let n = (0, i.cloneDeep)(e);
    if (n.items.length > 0) {
      let r = n.items[0];
      e.name = t.name.replace(".png", ""), n.items[0] = I(r, t)
    }
    return n
  },
  T = (e, t, n) => {
    let r = Object.values(t);
    return e && 0 !== r.length ? null != n ? t[n] : r[0] : null
  },
  C = e => {
    let {
      previewEnabled: t,
      previewAvatarDecorationSkuId: n
    } = b(), i = b(e => e.avatarDecorationAssets);
    return r.useMemo(() => {
      let r = Object.values(i);
      if (!t || 0 === r.length || 0 === e.length) return e;
      if (null != n) {
        let t = i[n];
        return null == t ? e : e.map(e => S(e, t))
      }
      return e.map((e, t) => {
        let n = t % r.length;
        return S(e, r[n])
      })
    }, [e, t, n, i])
  },
  N = e => {
    let {
      previewEnabled: t,
      previewAvatarDecorationSkuId: n
    } = b(), i = b(e => e.avatarDecorationAssets);
    return r.useMemo(() => {
      if (null == e || e.type !== s.R.AVATAR_DECORATION || 0 === e.items.length) return e;
      let r = T(t, i, n);
      return null == r ? e : S(e, r)
    }, [e, t, n, i])
  },
  R = e => {
    let {
      previewEnabled: t,
      previewAvatarDecorationSkuId: n
    } = b(), i = b(e => e.avatarDecorationAssets);
    return r.useMemo(() => {
      if (null == e) return null;
      let r = T(t, i, n);
      return null == r ? e : I(e, r)
    }, [e, t, n, i])
  }