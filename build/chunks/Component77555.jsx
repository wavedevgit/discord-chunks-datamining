/** Chunk was on 15646 **/
/** chunk id: 77555, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk61916 = require("./61916.jsx");

function c(e, t) {
  if (null == e) return {};
  var r, n, l, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }
  if (a = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        a = Object.getOwnPropertyNames(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  return a
}

function u(e) {
  let {
    rowData: t,
    message: r,
    originChannel: u,
    selectedDestinations: d,
    handleToggleDestination: f,
    disableSelection: b,
    rowClassName: p
  } = e, g = c(e, ["rowData", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection", "rowClassName"]), {
    sections: _,
    sectionHeight: y,
    renderRow: h,
    rowHeight: m
  } = (0, i.s)({
    rowData: t,
    message: r,
    originChannel: u,
    selectedDestinations: d,
    handleToggleDestination: f,
    disableSelection: b,
    rowClassName: p
  }), O = l.useRef(null), w = (0, s.A)("forward-modal", O);
  return (0, n.jsx)(a.hD, {
    navigator: w,
    children: (0, n.jsx)(a.PR, {
      children: e => {
        var t, r;
        let {
          ref: l
        } = e, a = c(e, ["ref"]);
        return (0, n.jsx)(o.OZj, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          ref: e => {
            var t;
            O.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, a, g), r = r = {
          sections: _,
          sectionHeight: y,
          renderRow: h,
          rowHeight: m
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    })
  })
}