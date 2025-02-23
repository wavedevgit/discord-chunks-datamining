/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  $s: () => A,
  Ay: () => w,
  DE: () => D,
  Fv: () => I,
  Gw: () => E,
  JQ: () => N,
  Jw: () => R,
  Mr: () => S,
  Vn: () => v,
  ZD: () => y,
  f9: () => C,
  h7: () => O,
  nf: () => x,
  o: () => T,
  pT: () => P,
  s9: () => b
}), n(411104), n(47120), n(571269), n(298267);
var r = n(97613),
  i = n.n(r),
  o = n(15729),
  a = n(731965),
  s = n(40851),
  l = n(602091),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = n(338305).Z,
  g = [l.z1, l.u1];

function E() {
  let e = (0, s.GB)();
  return null != e ? v(e) : l.z1
}

function v(e) {
  switch (e) {
    case c.IlC.POPOUT:
    case c.IlC.OVERLAY:
      return l.u1;
    default:
      return l.z1
  }
}
let b = (0, o.U)(e => ({
  [l.z1]: [],
  [l.u1]: []
}));
async function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      contextKey: n = E()
    } = t,
    r = _(t, ["contextKey"]),
    o = null != t.modalKey ? t.modalKey : i()(),
    a = !1,
    s = setTimeout(() => {
      a = !0, O(m, p(d({}, r), {
        modalKey: o
      }), n)
    }, 300),
    l = await e();
  return clearTimeout(s), a ? x(o, n) && T(o, l, r.onCloseRequest, r.onCloseCallback, n) : O(l, p(d({}, r), {
    modalKey: o
  }), n), o
}

function O(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E(),
    {
      modalKey: r,
      instant: o,
      Layer: s,
      onCloseRequest: l,
      onCloseCallback: c,
      backdropStyle: u
    } = t,
    f = null != r ? r : i()();
  return (0, a.j)(() => {
    b.setState(t => {
      let r = t[n];
      return void 0 !== r && r.some(e => {
        let {
          key: t
        } = e;
        return t === f
      }) ? t : p(d({}, t), {
        [n]: [...r, {
          key: f,
          Layer: s,
          render: e,
          onCloseRequest: null != l ? l : () => S(f, n),
          onCloseCallback: c,
          instant: o,
          backdropStyle: u
        }]
      })
    })
  }), f
}

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E(),
    n = b.getState()[t],
    r = null != n ? n.find(t => {
      let {
        key: n
      } = t;
      return n === e
    }) : null;
  (0, a.j)(() => {
    b.setState(n => void 0 === n[t] ? n : p(d({}, n), {
      [t]: n[t].filter(t => {
        let {
          key: n
        } = t;
        return n !== e
      })
    }))
  }), null != r && null != r.onCloseCallback && r.onCloseCallback()
}

function I(e) {
  let t = b.getState(),
    n = g.map(e => {
      var n;
      return null !== (n = t[e]) && void 0 !== n ? n : []
    }).map(t => {
      var n;
      return null !== (n = t.find(t => {
        let {
          key: n
        } = t;
        return n === e
      })) && void 0 !== n ? n : null
    });
  n.some(e => null != e) && ((0, a.j)(() => {
    b.setState(t => {
      let n = d({}, t);
      return g.forEach(t => {
        var r;
        n[t] = null === (r = n[t]) || void 0 === r ? void 0 : r.filter(t => {
          let {
            key: n
          } = t;
          return n !== e
        })
      }), n
    })
  }), n.forEach(e => {
    var t;
    null == e || null === (t = e.onCloseCallback) || void 0 === t || t.call(e)
  }))
}

function T(e, t, n, r) {
  let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E();
  (0, a.j)(() => {
    b.setState(o => void 0 === o[i] ? o : p(d({}, o), {
      [i]: o[i].map(o => o.key === e ? p(d({}, o), {
        render: t,
        onCloseRequest: null == n ? () => S(e, i) : n,
        onCloseCallback: r
      }) : o)
    }))
  })
}

function N(e) {
  for (let t of g) {
    let n = e[t];
    if (null != n && n.length > 0) return !0
  }
  return !1
}

function A() {
  return N(b.getState())
}

function C() {
  return N(b())
}

function R(e) {
  var t, n;
  let {
    default: r,
    popout: i
  } = b();
  return i.length > 0 ? (null === (t = i.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = r.at(-1)) || void 0 === n ? void 0 : n.key) === e
}

function P() {
  let e = b.getState();
  for (let t in e)
    for (let n of e[t]) S(n.key, t)
}

function w() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E(),
    t = b.getState()[e];
  if (null != t)
    for (let n of t) S(n.key, e)
}

function D(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.z1,
    r = e[n];
  return null != r && r.some(e => e.key === t)
}

function x(e, t) {
  return D(b.getState(), e, t)
}