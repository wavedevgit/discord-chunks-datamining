/** Chunk was on 30202 **/
/** chunk id: 239827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk729020 = require("./729020.js");
let d = Chunk73800.forwardRef(function(e, t) {
  var n, r, {
      currentPageIndex: s,
      numPages: d,
      onChangePage: u,
      children: m,
      className: p,
      showPageCount: g = true
    } = e,
    h = function(e, t) {
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
    }(e, ["currentPageIndex", "numPages", "onChangePage", "children", "className", "showPageCount"]);
  let f = s <= 0,
    b = s >= d - 1;
  return (0, i.jsxs)("div", (n = function(e) {
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
  }({
    className: a()(c.__invalid_paginator, p),
    ref: t
  }, h), r = r = {
    children: [m, (0, i.jsxs)("div", {
      className: c.pageActions,
      children: [(0, i.jsx)(l.P3F, {
        className: a()(c.pageButtonPrev, {
          [c.disabled]: f
        }),
        tabIndex: f ? false : 0,
        onClick: f ? true : () => u(s - 1),
        children: (0, i.jsx)(l.V7D, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": o.intl.string(o.t.vgfxaG)
        })
      }), g ? (0, i.jsx)("div", {
        className: c.pageIndicator,
        children: o.intl.format(o.t.MtpIws, {
          currentPage: s + 1,
          numPages: d
        })
      }) : (0, i.jsx)("div", {
        className: c.pageIndicator,
        children: o.intl.format(o.t.bKI77e, {
          currentPage: s + 1
        })
      }), (0, i.jsx)(l.P3F, {
        className: a()(c.pageButtonNext, {
          [c.disabled]: b
        }),
        tabIndex: b ? false : 0,
        onClick: b ? true : () => u(s + 1),
        children: (0, i.jsx)(l.Fbu, {
          size: "md",
          color: "currentColor",
          className: c.pageButtonIcon,
          "aria-label": o.intl.string(o.t.XiOHRU)
        })
      })]
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
  }), n))
})