/** Chunk was on web.js **/
/** chunk id: 952265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  closeAllModals: () => R,
  closeAllModalsInContext: () => D,
  closeModal: () => S,
  closeModalInAllContexts: () => I,
  doesTopModalAllowNavigation: () => j,
  getInteractingModalContext: () => E,
  hasAnyModalOpen: () => A,
  hasAnyModalOpenSelector: () => C,
  hasModalOpen: () => x,
  hasModalOpenSelector: () => w,
  modalContextFromAppContext: () => b,
  openModal: () => v,
  openModalLazy: () => O,
  updateModal: () => T,
  useHasAnyModalOpen: () => N,
  useHasModalOpen: () => L,
  useIsModalAtTop: () => P,
  useModalsStore: () => y
}), require("./415506.js"), require("./784620.js"), require("./973216.js"), require("./388685.js");
var Chunk97613 = require("./97613.js"),
  i = require.n(Chunk97613),
  Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk602091 = require("./602091.js"),
  Chunk981631 = require("./981631.js");

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
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = require("./338305.jsx").Z,
  g = [Chunk602091.z1, Chunk602091.u1];

function E() {
  let e = (0, Chunk728285.GB)();
  return null != module ? b(module) : Chunk602091.z1
}

function b(e) {
  switch (e) {
    case c.IlC.POPOUT:
      return l.u1;
    case c.IlC.OVERLAY:
      if (__OVERLAY__) return l.z1;
      return l.u1;
    default:
      return l.z1
  }
}
let y = (0, Chunk663042.U)(e => ({
  [l.z1]: [],
  [l.u1]: []
}));
async function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    {
      contextKey: n = E()
    } = t,
    r = _(t, ["contextKey"]),
    a = null != t.modalKey ? t.modalKey : i()(),
    o = false,
    s = setTimeout(() => {
      o = true, v(h, p(d({}, r), {
        modalKey: a
      }), n)
    }, 300),
    l = await e();
  return clearTimeout(s), o ? x(a, n) && T(a, l, r.onCloseRequest, r.onCloseCallback, n) : v(l, p(d({}, r), {
    modalKey: a
  }), n), a
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Object.freeze({}),
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : E(),
    {
      modalKey: r,
      dismissable: a,
      instant: s,
      Layer: l,
      onCloseRequest: c,
      onCloseCallback: u,
      backdropStyle: f,
      stackingBehavior: _,
      stackNextByDefault: m,
      allowsNavigation: h
    } = t,
    g = null != r ? r : i()();
  return (0, o.j)(() => {
    y.setState(t => {
      let r = t[n];
      if (true !== r && r.some(e => {
          let {
            key: t
          } = e;
          return t === g
        })) return t;
      let i = _;
      if (null == i) {
        var o;
        i = (null == (o = r.at(false)) ? true : o.stackNextByDefault) === true ? "stack" : "replace"
      }
      return p(d({}, t), {
        [n]: [...r, {
          key: g,
          dismissable: a,
          Layer: l,
          render: e,
          onCloseRequest: null != c ? c : () => S(g, n),
          onCloseCallback: u,
          instant: s,
          backdropStyle: f,
          stackingBehavior: i,
          stackNextByDefault: m,
          allowsNavigation: h
        }]
      })
    })
  }), g
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E(),
    n = y.getState()[t],
    r = null != n ? n.find(t => {
      let {
        key: n
      } = t;
      return n === e
    }) : null;
  return (0, o.j)(() => {
    y.setState(n => true === n[t] ? n : p(d({}, n), {
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
  let t = y.getState(),
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
  n.some(e => null != e) && ((0, o.j)(() => {
    y.setState(t => {
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

function T(e, t, n, r) {
  let i = arguments.length > 4 && true !== arguments[4] ? arguments[4] : E();
  (0, o.j)(() => {
    y.setState(a => true === a[i] ? a : p(d({}, a), {
      [i]: a[i].map(a => a.key === e ? p(d({}, a), {
        render: t,
        onCloseRequest: null == n ? () => S(e, i) : n,
        onCloseCallback: r
      }) : a)
    }))
  })
}

function C(e) {
  for (let t of g) {
    let n = e[t];
    if (null != n && n.length > 0) returntrue
  }
  returnfalse
}

function A() {
  return C(y.getState())
}

function N() {
  return C(y())
}

function P(e) {
  var t, n;
  let {
    default: r,
    popout: i
  } = y();
  return i.length > 0 ? (null == (t = i.at(false)) ? true : t.key) === e : (null == (n = r.at(false)) ? true : n.key) === e
}

function R() {
  let e = y.getState();
  for (let t in module)
    for (let n of module[exports]) S(require.key, exports)
}

function D() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E(),
    t = y.getState()[module];
  if (null != exports)
    for (let n of exports) S(require.key, module)
}

function w(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.z1,
    r = e[n];
  return null != r && r.some(e => e.key === t)
}

function x(e, t) {
  return w(y.getState(), e, t)
}

function L(e, t) {
  return w(y(), e, t)
}

function j() {
  let e = y.getState(),
    t = E();
  if (exports !== Chunk602091.z1 && null != module[exports] && module[exports].length > 0) returnfalse;
  let n = module[Chunk602091.z1];
  if (null != require && require.length > 0) {
    var r, i;
    return null != (i = null == (r = require.at(false)) ? true : Chunk97613.allowsNavigation) && i
  }
  returntrue
}