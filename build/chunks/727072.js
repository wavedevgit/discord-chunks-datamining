/** Chunk was on web.js **/
/** chunk id: 727072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I2: () => v,
  RD: () => I,
  mY: () => O,
  pH: () => T
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk94171 = require("./94171.js"),
  Chunk362383 = require("./362383.js"),
  Chunk731965 = require("./731965.js"),
  Chunk881052 = require("./881052.js"),
  Chunk36459 = require("./36459.js"),
  Chunk866894 = require("./866894.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {},
  g = 2e4;

function E(e) {
  var t;
  return Date.now() - (null != (t = m[e]) ? t : 0) > g
}
let b = e => {
    let t = {
      [u.fX.KEYWORD]: [],
      [u.fX.ML_SPAM]: [],
      [u.fX.DEFAULT_KEYWORD_LIST]: [],
      [u.fX.MENTION_SPAM]: [],
      [u.fX.USER_PROFILE]: [],
      [u.fX.SERVER_POLICY]: []
    };
    return e.forEach(e => {
      var n;
      let {
        triggerType: r
      } = e;
      null == (n = t[r]) || n.push(e)
    }), t
  },
  y = (0, Chunk362383.F)((e, t) => ({
    rules: {},
    fetching: false,
    error: null,
    updateRule: n => {
      var r, i;
      let {
        guildId: o,
        id: s,
        triggerType: l
      } = n, {
        rules: u
      } = t(), d = null != (r = u[o]) ? r : {}, f = null != (i = d[l]) ? i : [], p = f.some(e => e.id === s), m = f.filter(e => !(0, c.U)(e.id) || e.triggerType !== l), g = p ? m.map(e => e.id === s ? n : e) : [...m, n];
      (0, a.j)(() => {
        e({
          rules: h(_({}, u), {
            [o]: h(_({}, d), {
              [l]: g
            })
          }),
          error: null
        })
      })
    },
    removeRule: (n, r) => {
      let {
        rules: i
      } = t(), o = i[r], s = Object.keys(o).reduce((e, t) => {
        var r;
        let i = Number(t),
          a = null != (r = o[i]) ? r : [];
        return e[i] = a.filter(e => e.id !== n), e
      }, {});
      (0, a.j)(() => {
        e({
          rules: h(_({}, i), {
            [r]: s
          }),
          error: null
        })
      })
    },
    syncRules: async n => {
      if (E(n)) {
        m[n] = Date.now();
        try {
          let r = await (0, l.$Y)(n),
            i = b(r),
            o = t().rules;
          (0, a.j)(() => {
            e({
              rules: h(_({}, o), {
                [n]: i
              }),
              error: null
            })
          })
        } catch (n) {
          let t = new s.Hx(n);
          (0, a.j)(() => {
            e({
              error: t
            })
          })
        }
      }
    }
  })),
  O = (e, t) => {
    var n, r;
    return (null != (r = null == (n = y.getState().rules[e]) ? true : n[t]) ? r : []).length
  };

function v(e) {
  let [t, n] = r.useState(false), [o, a] = y(e => [e.syncRules, e.fetching], i.X);
  return [t, r.useCallback(async () => {
    if (!a && null != e) try {
      n(true), await o(e)
    } finally {
      n(false)
    }
  }, [e, a, o])]
}

function I(e) {
  let [t, n] = v(e);
  return r.useEffect(() => {
    (async () => {
      await n()
    })()
  }, [e, n]), [t, n]
}

function T(e) {
  return y(t => {
    var n;
    return {
      rulesByTriggerType: null != (n = t.rules[null != e ? e : d.lds]) ? n : {},
      updateRule: t.updateRule,
      removeRule: t.removeRule
    }
  }, i.X)
}