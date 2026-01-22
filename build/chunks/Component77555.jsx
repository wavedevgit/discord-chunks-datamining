/** Chunk was on 83006 **/
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

function i(e, t) {
  if (null == e) return {};
  var r, n, a, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        l = Object.getOwnPropertyNames(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }(e, t), Object.getOwnPropertySymbols)
    for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
  return l
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
  } = e, g = i(e, ["rowData", "message", "originChannel", "selectedDestinations", "handleToggleDestination", "disableSelection", "rowClassName"]), {
    sections: y,
    sectionHeight: h,
    renderRow: O,
    rowHeight: m
  } = (0, c.s)({
    rowData: t,
    message: r,
    originChannel: u,
    selectedDestinations: d,
    handleToggleDestination: f,
    disableSelection: b,
    rowClassName: p
  }), j = a.useRef(null), w = (0, s.A)("forward-modal", j);
  return (0, n.jsx)(l.hD, {
    navigator: w,
    children: (0, n.jsx)(l.PR, {
      children: e => {
        var t, r;
        let {
          ref: a
        } = e, l = i(e, ["ref"]);
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
            j.current = e, a.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
          }
        }, l, g), r = r = {
          sections: y,
          sectionHeight: h,
          renderRow: O,
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