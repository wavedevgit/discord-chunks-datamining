/** Chunk was on 66181 **/
/** chunk id: 442334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => c,
  Q: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk441849 = require("./441849.js");

function c(e) {
  let {
    title: t,
    note: n,
    children: r,
    className: s,
    id: c
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(o.inputItem, s),
    children: [(0, i.jsxs)("div", {
      className: o.inputItemText,
      children: [(0, i.jsx)(l.Text, {
        tag: "label",
        variant: "text-md/medium",
        className: o.inputItemTitle,
        id: c,
        children: t
      }), null != n && (0, i.jsx)(l.R94, {
        className: o.__invalid_note,
        type: l.R94.Types.DESCRIPTION,
        children: n
      })]
    }), r]
  })
}

function d(e) {
  var t, n, {
      options: s,
      value: d,
      select: u,
      selectClassName: m
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["options", "value", "select", "selectClassName"]);
  let g = r.useId();
  return (0, i.jsx)(c, (t = function(e) {
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
  }({}, p), n = n = {
    id: g,
    children: (0, i.jsx)(l.PhF, {
      "aria-labelledby": g,
      className: a()(o.selectControl, m),
      options: s,
      isSelected: e => e === d,
      select: u,
      serialize: e => String(e)
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}