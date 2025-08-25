/** Chunk was on web.js **/
/** chunk id: 619899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N9: () => y,
  O1: () => N,
  St: () => C,
  ex: () => I,
  xq: () => O,
  zL: () => v
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./642613.js"), require("./704826.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk879690 = require("./879690.js"),
  Chunk979554 = require("./979554.js"),
  Chunk731965 = require("./731965.js"),
  Chunk373071 = require("./373071.js"),
  Chunk489495 = require("./489495.js"),
  Chunk281598 = require("./281598.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e, t) {
  if ("object" !== b(e) || null === e) return e;
  var n = e[Symbol.toPrimitive];
  if (true !== n) {
    var r = n.call(e, t || "default");
    if ("object" !== b(r)) return r;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}

function E(e) {
  var t = g(e, "string");
  return "symbol" === b(t) ? t : String(t)
}

function b(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let y = (0, Chunk879690.U)(e => ({
    previewEnabled: false,
    collectionAssets: {},
    avatarDecorationAssets: {},
    previewProfileEffectId: null,
    previewAvatarDecorationId: null,
    setPreviewEnabled: t => e({
      previewEnabled: t
    }),
    upsertCollectionAsset: (t, n) => (0, s.j)(() => {
      e(e => {
        let r = e.collectionAssets[t];
        null != r && URL.revokeObjectURL(r.src);
        let i = URL.createObjectURL(n),
          o = f({}, e.collectionAssets);
        return o[t] = {
          type: t,
          name: n.name,
          src: i
        }, p(f({}, e), {
          collectionAssets: o,
          previewEnabled: true
        })
      })
    }),
    deleteCollectionAsset: t => (0, s.j)(() => {
      e(e => {
        let n = e.collectionAssets[t];
        if (null == n) return e;
        URL.revokeObjectURL(n.src);
        let r = e.collectionAssets,
          {
            [t]: i
          } = r,
          o = h(r, [t].map(E)),
          a = Object.keys(o).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
        return p(f({}, e), {
          collectionAssets: o,
          previewEnabled: a
        })
      })
    }),
    upsertAvatarDecorationAsset: t => (0, s.j)(() => {
      e(e => {
        let n = e.avatarDecorationAssets[t.name];
        null != n && URL.revokeObjectURL(n.src);
        let r = URL.createObjectURL(t),
          i = f({}, e.avatarDecorationAssets);
        return i[t.name] = {
          type: u.aB.AVATAR_DECORATION,
          name: t.name,
          src: r
        }, p(f({}, e), {
          avatarDecorationAssets: i,
          previewEnabled: true
        })
      })
    }),
    deleteAvatarDecorationAsset: t => (0, s.j)(() => {
      e(e => {
        let n = e.avatarDecorationAssets[t];
        if (null == n) return e;
        URL.revokeObjectURL(n.src);
        let r = e.avatarDecorationAssets,
          {
            [t]: i
          } = r,
          o = h(r, [t].map(E)),
          a = Object.keys(o).length > 0 || Object.keys(e.collectionAssets).length > 0;
        return p(f({}, e), {
          avatarDecorationAssets: o,
          previewEnabled: a
        })
      })
    }),
    clearAssets: () => (0, s.j)(() => {
      e(e => (Object.values(e.collectionAssets).forEach(e => URL.revokeObjectURL(e.src)), Object.values(e.avatarDecorationAssets).forEach(e => URL.revokeObjectURL(e.src)), {
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewEnabled: false,
        previewProfileEffectId: null,
        previewAvatarDecorationId: null
      }))
    }),
    setPreviewProfileEffectId: t => (0, s.j)(() => e({
      previewProfileEffectId: t,
      previewEnabled: null != t
    })),
    setPreviewAvatarDecorationId: t => (0, s.j)(() => e({
      previewAvatarDecorationId: t,
      previewEnabled: true
    }))
  })),
  O = () => {
    let e = y(e => e.collectionAssets),
      t = y(e => e.avatarDecorationAssets);
    return Chunk647438.useMemo(() => ({
      collectionAssets: Object.values(module).sort((e, t) => e.name.localeCompare(t.name)),
      avatarDecorationAssets: Object.values(exports).sort((e, t) => e.name.localeCompare(t.name))
    }), [module, exports])
  },
  v = e => y(t => {
    var n;
    return t.previewEnabled ? null == (n = t.collectionAssets[e]) ? true : n.src : null
  }),
  I = e => {
    let {
      previewEnabled: t,
      previewProfileEffectId: n
    } = y(), o = t ? n : null, a = (0, l.mr)(o);
    return r.useMemo(() => {
      if (null == a || null == e) return null;
      let {
        effects: t,
        stillFrames: n
      } = a.config, r = null != n && Object.keys(n).length > 0;
      if (0 === t.length && !r) return null;
      let o = (0, i.cloneDeep)(e);
      if (o.title = a.name, o.effects = t.map(e => {
          let {
            base64: t
          } = e;
          return h(e, ["base64"])
        }), r) {
        var s, l, u, d, f, _;
        o.reducedMotionSrc = null != (d = null == (s = n[c.cq.REDUCED_MOTION]) ? true : s.src) ? d : "", o.staticFrameSrc = null != (f = null == (l = n[c.cq.STATIC]) ? true : l.src) ? f : "", o.thumbnailPreviewSrc = null != (_ = null == (u = n[c.cq.THUMBNAIL]) ? true : u.src) ? _ : ""
      }
      return o
    }, [a, e])
  },
  T = (e, t) => p(f({}, e), {
    asset: t.src
  }),
  S = (e, t) => {
    if (e.type !== a.Z.AVATAR_DECORATION) return e;
    let n = (0, i.cloneDeep)(e);
    if (n.items.length > 0) {
      let r = n.items[0];
      e.name = t.name.replace(".png", ""), n.items[0] = T(r, t)
    }
    return n
  },
  A = (e, t, n) => {
    let r = Object.values(t);
    return e && 0 !== r.length ? null != n ? t[n] : r[0] : null
  },
  C = e => {
    let {
      previewEnabled: t,
      previewAvatarDecorationId: n
    } = y(), i = y(e => e.avatarDecorationAssets);
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
      previewAvatarDecorationId: n
    } = y(), i = y(e => e.avatarDecorationAssets);
    return r.useMemo(() => {
      if (null == e) return null;
      let r = A(t, i, n);
      return null == r ? e : T(e, r)
    }, [e, t, n, i])
  }