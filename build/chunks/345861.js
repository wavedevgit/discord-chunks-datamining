/** Chunk was on 58023 **/
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var l = n(120356),
  i = n.n(l),
  a = n(481060),
  s = n(813197);

function o(e) {
  var t, n, {
      buttonCTA: l,
      onChange: o,
      onFileSizeError: c,
      "aria-label": u,
      multiple: d = !1,
      disabled: m = !1,
      submitting: h = !1,
      maxFileSizeBytes: x,
      filters: g,
      className: p
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["buttonCTA", "onChange", "onFileSizeError", "aria-label", "multiple", "disabled", "submitting", "maxFileSizeBytes", "filters", "className"]);
  return (0, r.jsx)(a.tEY, {
    within: !0,
    children: (0, r.jsxs)("div", {
      className: i()((0, a.nYM)((t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({}, f), n = n = {
        submitting: h,
        disabled: m
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)), p),
      style: {
        width: "max-content"
      },
      "aria-disabled": m,
      children: [(0, r.jsx)("span", {
        "aria-hidden": !0,
        children: l
      }), (0, r.jsx)(s.ZP, {
        tabIndex: 0,
        onChange: o,
        onFileSizeError: c,
        multiple: d,
        maxFileSizeBytes: x,
        filters: g,
        "aria-label": null != u ? u : l,
        disabled: m
      })]
    })
  })
}