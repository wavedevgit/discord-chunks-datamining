/** Chunk was on web.js **/
/** chunk id: 189812, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  d: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk745262 = require("./745262.js"),
  Chunk158954 = require("./158954.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = 1,
  h = 15,
  m = "\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n",
  g = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-transform", "width", "padding-left", "padding-right", "border-width", "box-sizing"],
  E = Chunk64700.forwardRef(function(e, t) {
    let [n, ...r] = [e, t], {
      style: o,
      autoFocus: l = false,
      disabled: u = false,
      autoCorrect: p = "off"
    } = n, _ = f(n, ["style", "autoFocus", "disabled", "autoCorrect"]), [h] = r, m = a.useRef(null), g = e => {
      m.current = e, "function" == typeof h ? h(m.current) : null != h && (h.current = e)
    }, [E, b] = a.useState(() => y(m.current, _.rows, _.value));
    return a.useLayoutEffect(() => {
      b(y(m.current, _.rows, _.value))
    }, [_.rows, _.value]), (0, i.jsx)(s.vN3, {
      children: (0, i.jsx)("textarea", d(c({}, _), {
        ref: g,
        style: d(c({}, o), {
          height: E
        }),
        autoFocus: l,
        disabled: u,
        autoCorrect: p
      }))
    })
  });

function y(e, t, n) {
  if (null == e) return;
  n = null != n ? n : e.value, null == r && null != document.body && (r = document.createElement("textarea"), document.body.appendChild(r));
  let {
    paddingSize: i,
    borderSize: a,
    boxSizing: o,
    sizingStyle: s
  } = O(e), {
    minHeight: l,
    maxHeight: c
  } = b(s, i, a, o);
  r.setAttribute("style", s + ";" + m), r.value = n, null != t ? r.setAttribute("rows", "".concat(t)) : r.removeAttribute("rows");
  let u = r.scrollHeight;
  return "border-box" === o ? u += a : "content-box" === o && (u -= i), u = Math.max(l, Math.min(u, c))
}

function b(e, t, n, i) {
  null == r && null != document.body && (r = document.createElement("textarea"), document.body.appendChild(r)), r.setAttribute("style", e + ";" + m), r.setAttribute("rows", "".concat(_)), r.value = "";
  let a = r.scrollHeight;
  r.setAttribute("rows", "".concat(h)), r.value = "";
  let o = r.scrollHeight;
  return "border-box" === i ? (a += n, o += n) : "content-box" === i && (a -= t, o -= t), {
    minHeight: a,
    maxHeight: o
  }
}

function O(e) {
  let t = window.getComputedStyle(e),
    n = (0, o.G)(t.getPropertyValue("box-sizing"), t.getPropertyValue("-moz-box-sizing"), t.getPropertyValue("-webkit-box-sizing")),
    r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
    i = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
  return {
    sizingStyle: g.map(e => "".concat(e, ":").concat(t.getPropertyValue(e))).join(";"),
    paddingSize: r,
    borderSize: i,
    boxSizing: n
  }
}