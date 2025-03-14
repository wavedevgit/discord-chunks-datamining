/** Chunk was on 15814 **/
r.d(t, {
  Z: () => i
});
var n = r(200651);
r(192379);
var l = r(325767);

function i(e) {
  var t, r, {
      width: i = 24,
      height: a = 24,
      color: o = "currentColor",
      foreground: s
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["width", "height", "color", "foreground"]);
  return (0, n.jsxs)("svg", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n
      })
    }
    return e
  }({}, (0, l.Z)(h)), r = r = {
    width: i,
    height: a,
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      d: "M20.414 2.58599C21.195 3.36699 21.195 4.63299 20.414 5.41399L14.051 11.779L11.222 8.94999L17.586 2.58599C18.367 1.80499 19.633 1.80499 20.414 2.58599Z",
      className: s,
      fill: o
    }), (0, n.jsx)("path", {
      d: "M13.622 15.035L6.552 16.449L7.966 9.378L13.344 4H4C2.897 4 2 4.898 2 6V20C2 21.103 2.897 22 4 22H18C19.103 22 20 21.103 20 20V8.656L13.622 15.035Z",
      className: s,
      fill: o
    }), (0, n.jsx)("path", {
      d: "M9.80801 10.365L12.636 13.192L9.10101 13.899L9.80801 10.365Z",
      className: s,
      fill: o
    })]
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