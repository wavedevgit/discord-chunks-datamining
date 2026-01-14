/** Chunk was on web.js **/
/** chunk id: 373071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lb: () => b,
  mr: () => y,
  n6: () => E
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk748521 = require("./748521.js"),
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
let m = "__DEBUG_PROFILE_EFFECTS_STORE",
  h = {
    profileEffects: null != (r = Chunk433517.K.get(m)) ? r : {}
  },
  g = e => {
    try {
      l.K.set(m, e.profileEffects)
    } catch (e) {
      console.error(e), (0, c.showToast)((0, c.createToast)("This file is too large to save into localstorage. You will be able to view but not persist these changes.", c.ToastType.FAILURE))
    }
  },
  E = (0, Chunk748521.F)(e => _(f({}, h), {
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
      e(() => (l.K.remove(m), {
        profileEffects: {}
      }))
    })
  })),
  b = () => E(e => {
    let {
      profileEffects: t
    } = e;
    return Object.values(t)
  }, a.X),
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
        r = t.config.stillFrames,
        i = null != r ? f({}, r) : {};
      for (let t in i) {
        let n = i[t];
        null != n && (i[t] = _(f({}, n), {
          src: e(n.base64)
        }))
      }
      return _(f({}, t), {
        config: _(f({}, t.config), {
          stillFrames: i
        })
      })
    }, [t])
  }