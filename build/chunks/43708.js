/** Chunk was on web.js **/
/** chunk id: 43708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZK: () => y,
  pF: () => b,
  wu: () => E
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk14752 = require("./14752.js");

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
let h = "__DEBUG_PROFILE_EFFECTS_STORE",
  m = {
    profileEffects: null != (r = Chunk506774.w.get(h)) ? r : {}
  },
  g = e => {
    try {
      l.w.set(h, e.profileEffects)
    } catch (e) {
      console.error(e), (0, c.showToast)((0, c.createToast)("This file is too large to save into localstorage. You will be able to view but not persist these changes.", c.ToastType.FAILURE))
    }
  },
  E = (0, Chunk265690.h)(e => _(f({}, m), {
    upsertConfig: t => (0, o.r)(() => {
      e(e => {
        let n = f({}, e);
        return n.profileEffects[t.skuId] = t, g(n), n
      })
    }),
    deleteConfig: t => (0, o.r)(() => {
      e(e => {
        let n = f({}, e);
        return delete n.profileEffects[t], g(n), n
      })
    }),
    clearAll: () => (0, o.r)(() => {
      e(() => (l.w.remove(h), {
        profileEffects: {}
      }))
    })
  })),
  b = () => E(e => {
    let {
      profileEffects: t
    } = e;
    return Object.values(t)
  }, a.x),
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
          let t = (0, u.fB)(e);
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