/** Chunk was on 47841 **/
/** chunk id: 513521, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  var t, n;
  let {
    tags: o,
    tagsLabel: c,
    value: d,
    onRemoveTag: u,
    onAddTag: g,
    onAddTagError: m,
    maxTaxLength: p,
    maxTags: f,
    disabled: b,
    placeholder: h
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["tags", "tagsLabel", "value", "onRemoveTag", "onAddTag", "onAddTagError", "maxTaxLength", "maxTags", "disabled", "placeholder"]), [j, _] = i.useState(null != d ? d : ""), O = i.useCallback(() => {
    let e = j.trim();
    if (0 !== e.length) {
      if (null != f && o.length >= f) {
        null == m || m(a.intl.string(a.t.Xx7XeB));
        return
      }
      g(e), _("")
    }
  }, [j, f, g, m, o.length]), v = i.useCallback(e => {
    switch (e.key) {
      case s.dh.BACKSPACE:
        0 === j.length && o.length > 0 && (e.preventDefault(), e.stopPropagation(), null == u || u(new Set([o[o.length - 1].id])));
        break;
      case s.dh.ENTER:
      case s.dh.TAB:
      case s.dh.COMMA:
        e.preventDefault(), e.stopPropagation(), O()
    }
  }, [O, j.length, u, o]);
  return (0, r.jsx)(l.ksK, (t = function(e) {
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
    leading: {
      type: "tags",
      label: c,
      items: o,
      onRemove: u
    }
  }, x), n = n = {
    value: j,
    onKeyDown: v,
    onChange: _,
    maxLength: p,
    disabled: b,
    onBlur: O,
    placeholder: h
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}