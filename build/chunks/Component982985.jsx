/** Chunk was on 64228 **/
/** chunk id: 982985, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  e: () => p,
  l: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(l) {
      var n;
      n = t[l], l in e ? Object.defineProperty(e, l, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = n
    })
  }
  return e
}

function u(e, l) {
  if (null == e) return {};
  var t, n, i, r = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, t = Reflect.ownKeys(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r
  }
  if (r = function(e, l) {
      if (null == e) return {};
      var t, n, i = {},
        r = Object.getOwnPropertyNames(e);
      for (n = 0; n < r.length; n++) t = r[n], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
      return i
    }(e, l), Object.getOwnPropertySymbols)
    for (i = 0, t = Object.getOwnPropertySymbols(e); i < t.length; i++) n = t[i], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  return r
}

function f(e) {
  let {
    userId: l,
    onClose: t
  } = e, n = i.useCallback(() => {
    s.A.openPrivateChannel({
      recipientIds: l
    }), null == t || t(), (0, r.s7G)()
  }, [l, t]);
  return {
    action: o.pt.SEND_MESSAGE,
    icon: r.oyn,
    onClick: n,
    text: d.intl.string(d.t.zROXEV)
  }
}

function p(e) {
  let {
    userId: l,
    onClose: t,
    variant: i = "primary"
  } = e, r = u(e, ["userId", "onClose", "variant"]), s = f({
    userId: l,
    onClose: t
  });
  return (0, n.jsx)(a.FD, c({
    variant: i
  }, s, r))
}

function m(e) {
  let {
    userId: l,
    onClose: t,
    variant: i = "primary"
  } = e, r = u(e, ["userId", "onClose", "variant"]), s = f({
    userId: l,
    onClose: t
  }), {
    text: o
  } = s, d = u(s, ["text"]);
  return (0, n.jsx)(a.q3, c({
    tooltipText: o,
    "aria-label": o,
    variant: i
  }, d, r))
}