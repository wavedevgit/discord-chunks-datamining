/** Chunk was on 36878 **/
/** chunk id: 509613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CB: () => d,
  Em: () => x,
  ax: () => f,
  k4: () => u,
  qs: () => m,
  so: () => a,
  wf: () => s,
  x1: () => c
}), require("./388685.js"), require("./415506.js");
var Chunk28682 = require("./28682.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function r(e) {
  for (let t of e.layout) t.parent = e
}

function a(e) {
  let t = l(o({}, e), {
    key: "$Root",
    type: i.J.ROOT
  });
  r(t);
  let n = new Map,
    a = e => {
      let t = n.get(e.key);
      if (null != t && !Object.is(t, e)) throw Error("Duplicate key '".concat(e.key, "' is defined twice in this settings graph"));
      if (n.set(e.key, e), "layout" in e)
        for (let t of e.layout) a(t)
    };
  return a(t), t
}

function s(e, t) {
  let n = l(o({}, t), {
    key: e,
    type: i.J.PANEL
  });
  return r(n), n
}

function c(e, t) {
  let n = l(o({}, t), {
    key: e,
    type: i.J.PANE
  });
  return r(n), n
}

function u(e, t) {
  let n = l(o({}, t), {
    key: e,
    type: i.J.CATEGORY
  });
  return r(n), n
}

function d(e, t) {
  let n = l(o({}, t), {
    key: e,
    type: i.J.ACCORDION
  });
  return r(n), n
}

function f(e, t) {
  return l(o({}, t), {
    key: e,
    type: i.J.BUTTON
  })
}

function m(e, t) {
  return l(o({}, t), {
    key: e,
    type: i.J.TOGGLE
  })
}

function x(e, t) {
  return l(o({}, t), {
    key: e,
    type: i.J.SELECT
  })
}