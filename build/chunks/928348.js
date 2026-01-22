/** Chunk was on 24202 **/
/** chunk id: 928348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H6: () => d,
  p3: () => O,
  qv: () => p,
  wP: () => h
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk198982 = require("./198982.js"),
  Chunk137207 = require("./137207.js"),
  Chunk904813 = require("./904813.js"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js");

function A(e) {
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
  f = (0, Chunk265690.h)((e, t) => ({
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
      } = t(), E = null != (r = c[i]) ? r : {}, S = null != (l = E[o]) ? l : [], f = S.some(e => e.id === u), O = S.filter(e => !(0, s.R)(e.id) || e.triggerType !== o), d = f ? O.map(e => e.id === u ? n : e) : [...O, n];
      (0, a.r)(() => {
        e({
          rules: g(A({}, c), {
            [i]: g(A({}, E), {
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
      (0, a.r)(() => {
        e({
          rules: g(A({}, l), {
            [r]: u
          }),
          error: null
        })
      })
    },
    syncRules: async n => {
      var r, l;
      let i;
      if (i = Date.now(), i - (null != (r = S[n]) ? r : 0) > 2e4) {
        S[n] = Date.now();
        try {
          let r, i = (l = await (0, o.H0)(n), r = {
              [c.uh.KEYWORD]: [],
              [c.uh.ML_SPAM]: [],
              [c.uh.DEFAULT_KEYWORD_LIST]: [],
              [c.uh.MENTION_SPAM]: [],
              [c.uh.USER_PROFILE]: [],
              [c.uh.SERVER_POLICY]: []
            }, l.forEach(e => {
              var t;
              let {
                triggerType: n
              } = e;
              null == (t = r[n]) || t.push(e)
            }), r),
            u = t().rules;
          (0, a.r)(() => {
            e({
              rules: g(A({}, u), {
                [n]: i
              }),
              error: null
            })
          })
        } catch (n) {
          let t = new u.LG(n);
          (0, a.r)(() => {
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
    return (null != (n = null == (r = f.getState().rules[e]) ? true : r[t]) ? n : []).length
  };

function d(e) {
  let [t, n] = r.useState(false), [i, a] = f(e => [e.syncRules, e.fetching], l.x);
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

function h(e) {
  return f(t => {
    var n;
    return {
      rulesByTriggerType: null != (n = t.rules[null != e ? e : E.dJq]) ? n : {},
      updateRule: t.updateRule,
      removeRule: t.removeRule
    }
  }, l.x)
}