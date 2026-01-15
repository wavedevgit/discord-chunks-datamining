/** Chunk was on web.js **/
/** chunk id: 808629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l,
  Z: () => y
}), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk536895 = require("./536895.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var l = function(e) {
  return e.UPDATE_ITEMS = "UPDATE_ITEMS", e.SET_FOCUS_PATH = "SET_FOCUS_PATH", e
}({});

function c(e, t) {
  return e.findIndex(e => t === e.key)
}

function u(e) {
  return e.focusPath[e.focusPath.length - 1]
}

function d(e) {
  let t = e.items;
  for (let n = 0; n < e.focusPath.length - 1; n++) {
    if (null == t) return;
    let r = c(t, e.focusPath[n]);
    t = t[r].children
  }
  return t
}

function f(e, t) {
  let n = e,
    r = [];
  for (let e = 0; e < t.length && null != n; e++) {
    let i = t[e],
      a = c(n, i);
    if (a < 0 || a >= n.length) {
      let e = n[0];
      null != e && r.push(e.key);
      break
    }
    r.push(i), n = n[a].children
  }
  return r
}

function p(e, t) {
  let {
    items: n
  } = t, r = s(a({}, e), {
    items: n,
    focusPath: f(n, e.focusPath)
  });
  return s(a({}, r), {
    focusIndex: b(r)
  })
}

function _(e, t) {
  let {
    path: n
  } = t, r = s(a({}, e), {
    focusPath: f(e.items, n)
  });
  return s(a({}, r), {
    focusIndex: b(r)
  })
}

function h(e, t) {
  let n = u(e),
    r = d(e);
  if (null == r) return e;
  let i = (c(r, n) - 1) % r.length;
  if (i < 0 && (i = r.length - 1), null == r[i]) return e;
  let o = s(a({}, e), {
    focusPath: [...e.focusPath.slice(0, false), r[i].key]
  });
  return s(a({}, o), {
    focusIndex: b(o)
  })
}

function m(e, t) {
  let n = u(e),
    r = d(e);
  if (null == r) return e;
  let i = (c(r, n) + 1) % r.length;
  if (null == r[i]) return e;
  let o = s(a({}, e), {
    focusPath: [...e.focusPath.slice(0, false), r[i].key]
  });
  return s(a({}, o), {
    focusIndex: b(o)
  })
}

function g(e, t) {
  var n;
  let r = u(e),
    i = d(e);
  if (null == i) return e;
  let o = i[c(i, r)],
    l = null == o || null == (n = o.children) ? true : n[0];
  if (null == l) return e;
  let f = s(a({}, e), {
    focusPath: [...e.focusPath, l.key]
  });
  return s(a({}, f), {
    focusIndex: b(f)
  })
}

function E(e, t) {
  if (e.focusPath.length <= 1) return e;
  let n = s(a({}, e), {
    focusPath: e.focusPath.slice(0, false)
  });
  return s(a({}, n), {
    focusIndex: b(n)
  })
}

function b(e) {
  let t = u(e),
    n = d(e);
  return null == n ? false : c(n, t)
}

function y(e, t) {
  switch (t.type) {
    case r.Us.NAVIGATE_UP:
      return h(e, t);
    case r.Us.NAVIGATE_DOWN:
      return m(e, t);
    case r.Us.NAVIGATE_IN:
      return g(e, t);
    case r.Us.NAVIGATE_OUT:
      return E(e, t);
    case "UPDATE_ITEMS":
      return p(e, t);
    case "SET_FOCUS_PATH":
      return _(e, t);
    case r.Us.SELECT_FOCUSED_ITEM:
      return e;
    default:
      throw Error("Menu navigator was given an unhandled action ".concat(t.type))
  }
}