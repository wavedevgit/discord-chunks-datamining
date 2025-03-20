/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(47120), n(566702);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(981631),
  A = n(388032),
  c = n(962877);
let d = e => {
  var t, n, {
      className: s,
      tags: d,
      value: u,
      onRemoveTag: g,
      onAddTag: f,
      onAddTagError: m,
      maxTaxLength: p,
      maxTags: h,
      disabled: C,
      placeholder: b
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["className", "tags", "value", "onRemoveTag", "onAddTag", "onAddTagError", "maxTaxLength", "maxTags", "disabled", "placeholder"]);
  let [x, N] = i.useState(null != u ? u : ""), j = d.map((e, t) => (0, r.jsxs)("span", {
    className: c.tag,
    children: [e, !C && (0, r.jsx)(l.P3F, {
      className: c.closeWrapper,
      onClick: () => g(t),
      children: (0, r.jsx)(l.Dio, {
        size: "xs",
        color: "currentColor",
        className: c.close
      })
    })]
  }, t)), E = i.useCallback(() => {
    let e = x.trim();
    if (0 !== e.length) {
      if (null != h && d.length >= h) {
        null == m || m(A.NW.string(A.t.Xx7XeH));
        return
      }
      f(e), N("")
    }
  }, [x, h, f, m, d.length]), I = i.useCallback(e => {
    switch (e.keyCode) {
      case o.yXg.BACKSPACE:
        0 === x.length && d.length > 0 && (e.preventDefault(), e.stopPropagation(), g(d.length - 1));
        break;
      case o.yXg.ENTER:
      case o.yXg.TAB:
      case o.yXg.COMMA:
        e.preventDefault(), e.stopPropagation(), E()
    }
  }, [E, x.length, g, d.length]);
  return (0, r.jsxs)("div", {
    className: a()(s, c.inputWrapper, {
      [c.disabled]: C
    }),
    children: [j, (0, r.jsx)(l.oil, (t = function(e) {
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
    }({
      className: c.inputOuter,
      inputClassName: c.inputInner
    }, v), n = n = {
      value: x,
      onKeyDown: I,
      onChange: N,
      maxLength: p,
      disabled: C,
      onBlur: E,
      placeholder: b
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}