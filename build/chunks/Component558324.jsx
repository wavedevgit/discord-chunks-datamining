/** Chunk was on 88479 **/
/** chunk id: 558324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35378 = require("./35378.js");
let m = e => {
  var t, n, {
      className: l,
      tags: m,
      value: g,
      onRemoveTag: p,
      onAddTag: h,
      onAddTagError: f,
      maxTaxLength: b,
      maxTags: x,
      disabled: j,
      placeholder: v
    } = e,
    _ = function(e, t) {
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
    }(e, ["className", "tags", "value", "onRemoveTag", "onAddTag", "onAddTagError", "maxTaxLength", "maxTags", "disabled", "placeholder"]);
  let [O, y] = i.useState(null != g ? g : ""), C = m.map((e, t) => (0, r.jsxs)("span", {
    className: u.tag,
    children: [e, !j && (0, r.jsx)(o.P3F, {
      className: u.closeWrapper,
      onClick: () => p(t),
      children: (0, r.jsx)(o.Dio, {
        size: "xs",
        color: "currentColor",
        className: u.close
      })
    })]
  }, t)), N = i.useCallback(() => {
    let e = O.trim();
    if (0 !== e.length) {
      if (null != x && m.length >= x) {
        null == f || f(d.intl.string(d.t.Xx7XeH));
        return
      }
      h(e), y("")
    }
  }, [O, x, h, f, m.length]), E = i.useCallback(e => {
    switch (e.keyCode) {
      case c.yXg.BACKSPACE:
        0 === O.length && m.length > 0 && (e.preventDefault(), e.stopPropagation(), p(m.length - 1));
        break;
      case c.yXg.ENTER:
      case c.yXg.TAB:
      case c.yXg.COMMA:
        e.preventDefault(), e.stopPropagation(), N()
    }
  }, [N, O.length, p, m.length]);
  return (0, r.jsxs)("div", {
    className: a()(l, u.inputWrapper, {
      [u.disabled]: j
    }),
    children: [C, (0, r.jsx)(s.Is, (t = function(e) {
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
    }({
      className: u.inputOuter,
      inputClassName: u.inputInner
    }, _), n = n = {
      value: O,
      onKeyDown: E,
      onChange: y,
      maxLength: b,
      disabled: j,
      onBlur: N,
      placeholder: v
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