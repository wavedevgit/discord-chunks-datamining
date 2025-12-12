/** Chunk was on 384 **/
/** chunk id: 220980, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk28997 = require("./28997.jsx"),
  Chunk882871 = require("./882871.js");

function u(e) {
  var {
    action: t,
    children: n,
    className: l,
    onExpandChange: u,
    loading: d
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["action", "children", "className", "onExpandChange", "loading"]);
  let [m, p] = i.useState(false);
  return (0, r.jsx)(a.zF9, {
    className: s()(c.groupContainer, l),
    isExpanded: m,
    collapsibleContent: (0, r.jsxs)("div", {
      className: c.groupCollapsedContainer,
      children: [m && (0, r.jsx)("div", {
        className: c.pointer
      }), n]
    }),
    children: e => {
      var n, i;
      let {
        onClick: l
      } = e;
      return (0, r.jsx)(o.Z, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, g), i = i = {
        className: c.groupHeaderRow,
        action: d ? (0, r.jsx)(a.$jN, {
          type: a.$jN.Type.PULSING_ELLIPSIS
        }) : t,
        onClick: e => {
          var t;
          p(t = !m), null == u || u(t), l(e)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}