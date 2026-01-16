/** Chunk was on 93375 **/
/** chunk id: 727072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I2: () => d,
  RD: () => p,
  mY: () => j,
  pH: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk782425 = require("./782425.js"),
  Chunk524550 = require("./524550.js"),
  Chunk731965 = require("./731965.js"),
  Chunk881052 = require("./881052.js"),
  Chunk36459 = require("./36459.js"),
  Chunk866894 = require("./866894.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = {},
  O = (0, Chunk524550.F)((e, t) => ({
    rules: {},
    fetching: false,
    error: null,
    updateRule: n => {
      var r, l;
      let {
        guildId: i,
        id: u,
        triggerType: o
      } = n, {
        rules: c
      } = t(), f = null != (r = c[i]) ? r : {}, S = null != (l = f[o]) ? l : [], O = S.some(e => e.id === u), j = S.filter(e => !(0, s.U)(e.id) || e.triggerType !== o), d = O ? j.map(e => e.id === u ? n : e) : [...j, n];
      (0, a.j)(() => {
        e({
          rules: g(E({}, c), {
            [i]: g(E({}, f), {
              [o]: d
            })
          }),
          error: null
        })
      })
    },
    removeRule: (n, r) => {
      let {
        rules: l
      } = t(), i = l[r], u = Object.keys(i).reduce((e, t) => {
        var r;
        let l = Number(t),
          a = null != (r = i[l]) ? r : [];
        return e[l] = a.filter(e => e.id !== n), e
      }, {});
      (0, a.j)(() => {
        e({
          rules: g(E({}, l), {
            [r]: u
          }),
          error: null
        })
      })
    },
    syncRules: async n => {
      if (function(e) {
          var t;
          let n = Date.now();
          return n - (null != (t = S[e]) ? t : 0) > 2e4
        }(n)) {
        S[n] = Date.now();
        try {
          let r = await (0, o.$Y)(n),
            l = (e => {
              let t = {
                [c.fX.KEYWORD]: [],
                [c.fX.ML_SPAM]: [],
                [c.fX.DEFAULT_KEYWORD_LIST]: [],
                [c.fX.MENTION_SPAM]: [],
                [c.fX.USER_PROFILE]: [],
                [c.fX.SERVER_POLICY]: []
              };
              return e.forEach(e => {
                var n;
                let {
                  triggerType: r
                } = e;
                null == (n = t[r]) || n.push(e)
              }), t
            })(r),
            i = t().rules;
          (0, a.j)(() => {
            e({
              rules: g(E({}, i), {
                [n]: l
              }),
              error: null
            })
          })
        } catch (n) {
          let t = new u.Hx(n);
          (0, a.j)(() => {
            e({
              error: t
            })
          })
        }
      }
    }
  })),
  j = (e, t) => {
    var n, r;
    return (null != (r = null == (n = O.getState().rules[e]) ? true : n[t]) ? r : []).length
  };

function d(e) {
  let [t, n] = r.useState(false), [i, a] = O(e => [e.syncRules, e.fetching], l.X);
  return [t, r.useCallback(async () => {
    if (!a && null != e) try {
      n(true), await i(e)
    } finally {
      n(false)
    }
  }, [e, a, i])]
}

function p(e) {
  let [t, n] = d(e);
  return r.useEffect(() => {
    (async () => {
      await n()
    })()
  }, [e, n]), [t, n]
}

function A(e) {
  return O(t => {
    var n;
    return {
      rulesByTriggerType: null != (n = t.rules[null != e ? e : f.lds]) ? n : {},
      updateRule: t.updateRule,
      removeRule: t.removeRule
    }
  }, l.X)
}