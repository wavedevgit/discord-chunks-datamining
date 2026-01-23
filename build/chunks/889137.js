/** Chunk was on web.js **/
/** chunk id: 889137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => Q,
  YW: () => $
});
let r = Symbol.for("@ts-pattern/matcher"),
  i = Symbol.for("@ts-pattern/isVariadic"),
  a = "@ts-pattern/anonymous-select-key",
  s = e => !!(e && "object" == typeof e),
  o = e => e && !!e[r],
  l = (e, t, n) => {
    if (o(e)) {
      let {
        matched: i,
        selections: a
      } = e[r]().match(t);
      return i && a && Object.keys(a).forEach(e => n(e, a[e])), i
    }
    if (s(e)) {
      if (!s(t)) returnfalse;
      if (Array.isArray(e)) {
        if (!Array.isArray(t)) returnfalse;
        let r = [],
          a = [],
          s = [];
        for (let t of e.keys()) {
          let n = e[t];
          o(n) && n[i] ? s.push(n) : s.length ? a.push(n) : r.push(n)
        }
        if (s.length) {
          if (s.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t.length < r.length + a.length) returnfalse;
          let e = t.slice(0, r.length),
            i = 0 === a.length ? [] : t.slice(-a.length),
            o = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
          return r.every((t, r) => l(t, e[r], n)) && a.every((e, t) => l(e, i[t], n)) && (0 === s.length || l(s[0], o, n))
        }
        return e.length === t.length && e.every((e, r) => l(e, t[r], n))
      }
      return Object.keys(e).every(i => {
        var a;
        let s = e[i];
        return (i in t || o(a = s) && "optional" === a[r]().matcherType) && l(s, t[i], n)
      })
    }
    return Object.is(t, e)
  },
  c = e => {
    var t, n, i;
    return s(e) ? o(e) ? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? true : n.call(i)) ? t : [] : Array.isArray(e) ? u(e, c) : u(Object.values(e), c) : []
  },
  u = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);

function d(...e) {
  if (1 === e.length) {
    let [t] = e;
    return e => l(t, e, () => {})
  }
  if (2 === e.length) {
    let [t, n] = e;
    return l(t, n, () => {})
  }
  throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`)
}

function f(e) {
  return Object.assign(e, {
    optional: () => _(e),
    and: t => g(e, t),
    or: t => E(e, t),
    select: t => true === t ? b(e) : b(t, e)
  })
}

function p(e) {
  let t;
  return Object.assign(Object.assign(t = e, {
    *[Symbol.iterator]() {
      yield Object.assign(t, {
        [i]: true
      })
    }
  }), {
    optional: () => p(_(e)),
    select: t => p(true === t ? b(e) : b(t, e))
  })
}

function _(e) {
  return f({
    [r]: () => ({
      match: t => {
        let n = {},
          r = (e, t) => {
            n[e] = t
          };
        return true === t ? (c(e).forEach(e => r(e, true)), {
          matched: true,
          selections: n
        }) : {
          matched: l(e, t, r),
          selections: n
        }
      },
      getSelectionKeys: () => c(e),
      matcherType: "optional"
    })
  })
}
let h = (e, t) => {
    for (let n of e)
      if (!t(n)) returnfalse;
    returntrue
  },
  m = (e, t) => {
    for (let [n, r] of e.entries())
      if (!t(r, n)) returnfalse;
    returntrue
  };

function g(...e) {
  return f({
    [r]: () => ({
      match: t => {
        let n = {},
          r = (e, t) => {
            n[e] = t
          };
        return {
          matched: e.every(e => l(e, t, r)),
          selections: n
        }
      },
      getSelectionKeys: () => u(e, c),
      matcherType: "and"
    })
  })
}

function E(...e) {
  return f({
    [r]: () => ({
      match: t => {
        let n = {},
          r = (e, t) => {
            n[e] = t
          };
        return u(e, c).forEach(e => r(e, true)), {
          matched: e.some(e => l(e, t, r)),
          selections: n
        }
      },
      getSelectionKeys: () => u(e, c),
      matcherType: "or"
    })
  })
}

function y(e) {
  return {
    [r]: () => ({
      match: t => ({
        matched: !!e(t)
      })
    })
  }
}

function b(...e) {
  let t = "string" == typeof e[0] ? e[0] : true,
    n = 2 === e.length ? e[1] : "string" == typeof e[0] ? true : e[0];
  return f({
    [r]: () => ({
      match: e => {
        let r = {
          [null != t ? t : a]: e
        };
        return {
          matched: true === n || l(n, e, (e, t) => {
            r[e] = t
          }),
          selections: r
        }
      },
      getSelectionKeys: () => [null != t ? t : a].concat(true === n ? [] : c(n))
    })
  })
}

function O(e) {
  return "number" == typeof e
}

function v(e) {
  return "string" == typeof e
}

function A(e) {
  return "bigint" == typeof e
}
let I = f(y(function(e) {
    returntrue
  })),
  S = I,
  T = e => Object.assign(f(e), {
    startsWith: t => {
      var n;
      return T(g(e, (n = t, y(e => v(e) && e.startsWith(n)))))
    },
    endsWith: t => {
      var n;
      return T(g(e, (n = t, y(e => v(e) && e.endsWith(n)))))
    },
    minLength: t => T(g(e, (e => y(t => v(t) && t.length >= e))(t))),
    maxLength: t => T(g(e, (e => y(t => v(t) && t.length <= e))(t))),
    includes: t => {
      var n;
      return T(g(e, (n = t, y(e => v(e) && e.includes(n)))))
    },
    regex: t => {
      var n;
      return T(g(e, (n = t, y(e => v(e) && !!e.match(n)))))
    }
  }),
  C = T(y(v)),
  N = (e, t) => y(n => O(n) && e <= n && t >= n),
  w = e => y(t => O(t) && t < e),
  R = e => y(t => O(t) && t > e),
  P = e => y(t => O(t) && t <= e),
  D = e => y(t => O(t) && t >= e),
  x = () => y(e => O(e) && Number.isInteger(e)),
  L = () => y(e => O(e) && Number.isFinite(e)),
  j = () => y(e => O(e) && e > 0),
  M = () => y(e => O(e) && e < 0),
  k = e => Object.assign(f(e), {
    between: (t, n) => k(g(e, N(t, n))),
    lt: t => k(g(e, w(t))),
    gt: t => k(g(e, R(t))),
    lte: t => k(g(e, P(t))),
    gte: t => k(g(e, D(t))),
    int: () => k(g(e, x())),
    finite: () => k(g(e, L())),
    positive: () => k(g(e, j())),
    negative: () => k(g(e, M()))
  }),
  U = k(y(O)),
  G = (e, t) => y(n => A(n) && e <= n && t >= n),
  V = e => y(t => A(t) && t < e),
  F = e => y(t => A(t) && t > e),
  B = e => y(t => A(t) && t <= e),
  H = e => y(t => A(t) && t >= e),
  Y = () => y(e => A(e) && e > 0),
  W = () => y(e => A(e) && e < 0),
  K = e => Object.assign(f(e), {
    between: (t, n) => K(g(e, G(t, n))),
    lt: t => K(g(e, V(t))),
    gt: t => K(g(e, F(t))),
    lte: t => K(g(e, B(t))),
    gte: t => K(g(e, H(t))),
    positive: () => K(g(e, Y())),
    negative: () => K(g(e, W()))
  }),
  z = K(y(A)),
  q = f(y(function(e) {
    return "boolean" == typeof e
  })),
  Z = f(y(function(e) {
    return "symbol" == typeof e
  })),
  X = f(y(function(e) {
    return null == e
  }));
var Q = {
  __proto__: null,
  matcher: r,
  optional: _,
  array: function(...e) {
    return p({
      [r]: () => ({
        match: t => {
          if (!Array.isArray(t)) return {
            matched: false
          };
          if (0 === e.length) return {
            matched: true
          };
          let n = e[0],
            r = {};
          if (0 === t.length) return c(n).forEach(e => {
            r[e] = []
          }), {
            matched: true,
            selections: r
          };
          let i = (e, t) => {
            r[e] = (r[e] || []).concat([t])
          };
          return {
            matched: t.every(e => l(n, e, i)),
            selections: r
          }
        },
        getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
      })
    })
  },
  set: function(...e) {
    return f({
      [r]: () => ({
        match: t => {
          if (!(t instanceof Set)) return {
            matched: false
          };
          let n = {};
          if (0 === t.size) return {
            matched: true,
            selections: n
          };
          if (0 === e.length) return {
            matched: true
          };
          let r = (e, t) => {
              n[e] = (n[e] || []).concat([t])
            },
            i = e[0];
          return {
            matched: h(t, e => l(i, e, r)),
            selections: n
          }
        },
        getSelectionKeys: () => 0 === e.length ? [] : c(e[0])
      })
    })
  },
  map: function(...e) {
    return f({
      [r]: () => ({
        match: t => {
          var n;
          if (!(t instanceof Map)) return {
            matched: false
          };
          let r = {};
          if (0 === t.size) return {
            matched: true,
            selections: r
          };
          let i = (e, t) => {
            r[e] = (r[e] || []).concat([t])
          };
          if (0 === e.length) return {
            matched: true
          };
          if (1 === e.length) throw Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null==(n=e[0])?true:n.toString()}`);
          let [a, s] = e;
          return {
            matched: m(t, (e, t) => {
              let n = l(a, t, i),
                r = l(s, e, i);
              return n && r
            }),
            selections: r
          }
        },
        getSelectionKeys: () => 0 === e.length ? [] : [...c(e[0]), ...c(e[1])]
      })
    })
  },
  intersection: g,
  union: E,
  not: function(e) {
    return f({
      [r]: () => ({
        match: t => ({
          matched: !l(e, t, () => {})
        }),
        getSelectionKeys: () => [],
        matcherType: "not"
      })
    })
  },
  when: y,
  select: b,
  any: I,
  _: S,
  string: C,
  between: N,
  lt: w,
  gt: R,
  lte: P,
  gte: D,
  int: x,
  finite: L,
  positive: j,
  negative: M,
  number: U,
  betweenBigInt: G,
  ltBigInt: V,
  gtBigInt: F,
  lteBigInt: B,
  gteBigInt: H,
  positiveBigInt: Y,
  negativeBigInt: W,
  bigint: z,
  boolean: q,
  symbol: Z,
  nullish: X,
  instanceOf: function(e) {
    return f(y(function(e) {
      return t => t instanceof e
    }(e)))
  },
  shape: function(e) {
    return f(y(d(e)))
  }
};
let J = {
  matched: false,
  value: true
};

function $(e) {
  return new ee(e, J)
}
class ee {
  constructor(e, t) {
    this.input = true, this.state = true, this.input = e, this.state = t
  }
  with(...e) {
    let t;
    if (this.state.matched) return this;
    let n = e[e.length - 1],
      r = [e[0]];
    3 === e.length && "function" == typeof e[1] ? (r.push(e[0]), t = e[1]) : e.length > 2 && r.push(...e.slice(1, e.length - 1));
    let i = false,
      s = {},
      o = (e, t) => {
        i = true, s[e] = t
      },
      c = r.some(e => l(e, this.input, o)) && (!t || t(this.input)) ? {
        matched: true,
        value: n(i ? a in s ? s[a] : s : this.input, this.input)
      } : J;
    return new ee(this.input, c)
  }
  when(e, t) {
    if (this.state.matched) return this;
    let n = !!e(this.input);
    return new ee(this.input, n ? {
      matched: true,
      value: t(this.input, this.input)
    } : J)
  }
  otherwise(e) {
    return this.state.matched ? this.state.value : e(this.input)
  }
  exhaustive() {
    return this.run()
  }
  run() {
    let e;
    if (this.state.matched) return this.state.value;
    try {
      e = JSON.stringify(this.input)
    } catch (t) {
      e = this.input
    }
    throw Error(`Pattern matching error: no pattern matches value ${e}`)
  }
  returnType() {
    return this
  }
}