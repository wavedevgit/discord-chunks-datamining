/** Chunk was on web.js **/
/** chunk id: 373071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lb: () => b,
  mr: () => y,
  n6: () => E
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
  Chunk51835 = require("./51835.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489495 = require("./489495.js");

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
let h = "__DEBUG_PROFILE_EFFECTS_STORE",
  m = {
    profileEffects: null != (r = Chunk433517.K.get(h)) ? r : {}
  },
  g = e => {
    try {
      l.K.set(h, e.profileEffects)
    } catch (e) {
      console.error(e), (0, c.showToast)((0, c.createToast)("This file is too large to save into localstorage. You will be able to view but not persist these changes.", c.ToastType.FAILURE))
    }
  },
  E = (0, Chunk51835.F)(e => p(f({}, m), {
    upsertConfig: t => (0, s.j)(() => {
      e(e => {
        let n = f({}, e);
        return n.profileEffects[t.skuId] = t, g(n), n
      })
    }),
    deleteConfig: t => (0, s.j)(() => {
      e(e => {
        let n = f({}, e);
        return delete n.profileEffects[t], g(n), n
      })
    }),
    clearAll: () => (0, s.j)(() => {
      e(() => (l.K.remove(h), {
        profileEffects: {}
      }))
    })
  })),
  b = () => E(e => {
    let {
      profileEffects: t
    } = e;
    return Object.values(t)
  }, Chunk574583.X),
  y = e => {
    let t = E(t => null != e ? t.profileEffects[e] : null),
      n = i.useRef([]);
    return i.useEffect(() => () => {
      n.current.forEach(e => {
        URL.revokeObjectURL(e)
      }), n.current = []
    }, []), i.useMemo(() => {
      if (null == t) return null;
      let e = e => {
          let t = (0, u.$j)(e);
          return n.current.push(t), t
        },
        r = t.config.effects.map(t => p(f({}, t), {
          src: e(t.base64)
        })),
        i = t.config.stillFrames,
        a = null != i ? f({}, i) : {};
      for (let t in a) {
        let n = a[t];
        null != n && (a[t] = p(f({}, n), {
          src: e(n.base64)
        }))
      }
      return p(f({}, t), {
        config: p(f({}, t.config), {
          effects: r,
          stillFrames: a
        })
      })
    }, [t])
  }