/** Chunk was on web.js **/
/** chunk id: 192308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  closeAllModals: () => R,
  closeAllModalsInContext: () => P,
  closeModal: () => A,
  closeModalInAllContexts: () => I,
  doesTopModalAllowNavigation: () => j,
  getInteractingModalContext: () => E,
  hasAnyModalOpen: () => C,
  hasAnyModalOpenSelector: () => T,
  hasModalOpen: () => x,
  hasModalOpenSelector: () => D,
  modalContextFromAppContext: () => y,
  openModal: () => v,
  openModalLazy: () => O,
  updateModal: () => S,
  useHasAnyModalOpen: () => N,
  useHasModalOpen: () => L,
  useIsModalAtTop: () => w,
  useModalsStore: () => b
}), require("./65821.js"), require("./134528.js"), require("./947204.js"), require("./896048.js");
var Chunk296489 = require("./296489.js"),
  i = require.n(Chunk296489),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk231723 = require("./231723.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = require("./450507.jsx").A,
  g = [Chunk231723.SY, Chunk231723.KX];

function E() {
  let e = (0, o.zd)();
  return null != e ? y(e) : l.SY
}

function y(e) {
  switch (e) {
    case c.BRT.POPOUT:
      return l.KX;
    case c.BRT.OVERLAY:
      if (__OVERLAY__) return l.SY;
      return l.KX;
    default:
      return l.SY
  }
}
let b = (0, Chunk353640.v)(e => ({
  [l.SY]: [],
  [l.KX]: []
}));
async function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      contextKey: n = E()
    } = t,
    r = _(t, ["contextKey"]),
    a = null != t.modalKey ? t.modalKey : i()(),
    s = false,
    o = setTimeout(() => {
      s = true, v(m, p(d({}, r), {
        modalKey: a
      }), n)
    }, 300),
    l = await e();
  return clearTimeout(o), s ? x(a, n) && S(a, l, r.onCloseRequest, r.onCloseCallback, n) : v(l, p(d({}, r), {
    modalKey: a
  }), n), a
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.freeze({}),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E(),
    {
      modalKey: r,
      dismissable: a,
      instant: o,
      Layer: l,
      onCloseRequest: c,
      onCloseCallback: u,
      backdropStyle: f,
      stackingBehavior: _,
      stackNextByDefault: h,
      allowsNavigation: m
    } = t,
    g = null != r ? r : i()();
  return (0, s.r)(() => {
    b.setState(t => {
      let r = t[n];
      if (true !== r && r.some(e => {
          let {
            key: t
          } = e;
          return t === g
        })) return t;
      let i = _;
      if (null == i) {
        var s;
        i = (null == (s = r.at(false)) ? true : s.stackNextByDefault) === true ? "stack" : "replace"
      }
      return p(d({}, t), {
        [n]: [...r, {
          key: g,
          dismissable: a,
          Layer: l,
          render: e,
          onCloseRequest: null != c ? c : () => A(g, n),
          onCloseCallback: u,
          instant: o,
          backdropStyle: f,
          stackingBehavior: i,
          stackNextByDefault: h,
          allowsNavigation: m
        }]
      })
    })
  }), g
}

function A(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E(),
    n = b.getState()[t],
    r = null != n ? n.find(t => {
      let {
        key: n
      } = t;
      return n === e
    }) : null;
  return (0, s.r)(() => {
    b.setState(n => true === n[t] ? n : p(d({}, n), {
      [t]: n[t].filter(t => {
        let {
          key: n
        } = t;
        return n !== e
      })
    }))
  }), null != r && null != r.onCloseCallback && r.onCloseCallback(), null != r
}

function I(e) {
  let t = b.getState(),
    n = g.map(e => {
      var n;
      return null != (n = t[e]) ? n : []
    }).map(t => {
      var n;
      return null != (n = t.find(t => {
        let {
          key: n
        } = t;
        return n === e
      })) ? n : null
    });
  n.some(e => null != e) && ((0, s.r)(() => {
    b.setState(t => {
      let n = d({}, t);
      return g.forEach(t => {
        var r;
        n[t] = null == (r = n[t]) ? true : r.filter(t => {
          let {
            key: n
          } = t;
          return n !== e
        })
      }), n
    })
  }), n.forEach(e => {
    var t;
    null == e || null == (t = e.onCloseCallback) || t.call(e)
  }))
}

function S(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : E();
  (0, s.r)(() => {
    b.setState(a => true === a[i] ? a : p(d({}, a), {
      [i]: a[i].map(a => a.key === e ? p(d({}, a), {
        render: t,
        onCloseRequest: null == n ? () => A(e, i) : n,
        onCloseCallback: r
      }) : a)
    }))
  })
}

function T(e) {
  for (let t of g) {
    let n = e[t];
    if (null != n && n.length > 0) returntrue
  }
  returnfalse
}

function C() {
  return T(b.getState())
}

function N() {
  return T(b())
}

function w(e) {
  var t, n;
  let {
    default: r,
    popout: i
  } = b();
  return i.length > 0 ? (null == (t = i.at(false)) ? true : t.key) === e : (null == (n = r.at(false)) ? true : n.key) === e
}

function R() {
  let e = b.getState();
  for (let t in e)
    for (let n of e[t]) A(n.key, t)
}

function P() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E(),
    t = b.getState()[e];
  if (null != t)
    for (let n of t) A(n.key, e)
}

function D(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.SY,
    r = e[n];
  return null != r && r.some(e => e.key === t)
}

function x(e, t) {
  return D(b.getState(), e, t)
}

function L(e, t) {
  return D(b(), e, t)
}

function j() {
  let e = b.getState(),
    t = E();
  if (t !== l.SY && null != e[t] && e[t].length > 0) returnfalse;
  let n = e[l.SY];
  if (null != n && n.length > 0) {
    var r, i;
    return null != (r = null == (i = n.at(false)) ? true : i.allowsNavigation) && r
  }
  returntrue
}