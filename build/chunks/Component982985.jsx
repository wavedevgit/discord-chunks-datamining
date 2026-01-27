/** Chunk was on 63974 **/
/** chunk id: 982985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => f,
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
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function u(e, t) {
  if (null == e) return {};
  var n, l, i, r = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r
  }
  if (r = function(e, t) {
      if (null == e) return {};
      var n, l, i = {},
        r = Object.getOwnPropertyNames(e);
      for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
  return r
}

function p(e) {
  let {
    userId: t,
    onClose: n
  } = e, l = i.useCallback(() => {
    s.A.openPrivateChannel({
      recipientIds: t
    }), null == n || n(), (0, r.s7G)()
  }, [t, n]);
  return {
    action: a.pt.SEND_MESSAGE,
    icon: r.oyn,
    onClick: l,
    text: d.intl.string(d.t.zROXEV)
  }
}

function f(e) {
  let {
    userId: t,
    onClose: n,
    variant: i = "primary"
  } = e, r = u(e, ["userId", "onClose", "variant"]), s = p({
    userId: t,
    onClose: n
  });
  return (0, l.jsx)(o.FD, c({
    variant: i
  }, s, r))
}

function m(e) {
  let {
    userId: t,
    onClose: n,
    variant: i = "primary"
  } = e, r = u(e, ["userId", "onClose", "variant"]), s = p({
    userId: t,
    onClose: n
  }), {
    text: a
  } = s, d = u(s, ["text"]);
  return (0, l.jsx)(o.q3, c({
    tooltipText: a,
    "aria-label": a,
    variant: i
  }, d, r))
}