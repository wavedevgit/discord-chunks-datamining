/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  Z: () => a
});
var n = r(200651);
r(192379);
var s = r(120356),
  i = r.n(s),
  o = r(481060),
  l = r(813197);

function a(e) {
  var t, r, {
      buttonCTA: s,
      onChange: a,
      "aria-label": c,
      multiple: u = !1,
      disabled: d = !1,
      submitting: p = !1
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var r, n, s = function(e, t) {
        if (null == e) return {};
        var r, n, s = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
      }
      return s
    }(e, ["buttonCTA", "onChange", "aria-label", "multiple", "disabled", "submitting"]);
  return (0, n.jsx)(o.tEY, {
    within: !0,
    children: (0, n.jsxs)("div", {
      className: i()((0, o.nYM)((t = function(e) {
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
      }({}, f), r = r = {
        submitting: p,
        disabled: d
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))),
      style: {
        width: "max-content"
      },
      "aria-disabled": d,
      children: [(0, n.jsx)("span", {
        "aria-hidden": !0,
        children: s
      }), (0, n.jsx)(l.ZP, {
        tabIndex: 0,
        onChange: a,
        multiple: u,
        "aria-label": null != c ? c : s,
        disabled: d
      })]
    })
  })
}