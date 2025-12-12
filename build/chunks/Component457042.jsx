/** Chunk was on 6595 **/
/** chunk id: 457042, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  ParagraphFormFieldModal: () => g,
  TextInputFormFieldModal: () => p
}), require("./953529.js"), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk246364 = require("./246364.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = r[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}

function d(t) {
  var e, r, l;
  let {
    type: d,
    title: p,
    description: g,
    field: y,
    onSave: f,
    onClose: m
  } = t, [O, j] = a.useState(null != (e = null == y ? true : y.label) ? e : ""), [h, x] = a.useState(null), v = async () => {
    null != h && x(null);
    let t = O.trim();
    if ("" === t) return void x(b.intl.string(b.t["G+TI44"]));
    try {
      await f({
        field_type: d,
        label: t,
        required: true
      }), m()
    } catch (t) {
      x(new o.Hx(t).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(c.Z, (r = u({}, t), l = l = {
    errorText: h,
    title: p,
    description: g,
    onConfirm: v,
    onCancel: m,
    children: (0, n.jsx)(i.oil, {
      onChange: t => {
        null != h && x(null);
        let e = t.replace(/(\r\n|\n|\r)/g, " ");
        e.length > s.XN && (e = e.slice(0, s.XN)), j(e)
      },
      placeholder: b.intl.string(b.t.fqVmbL),
      value: O,
      onKeyDown: t => "Enter" === t.key && v()
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t))
  }), r))
}

function p(t) {
  return (0, n.jsx)(d, u({
    title: b.intl.string(b.t.w6Q9wz),
    description: b.intl.string(b.t["A6M+qv"]),
    type: l.QJ.TEXT_INPUT
  }, t))
}

function g(t) {
  return (0, n.jsx)(d, u({
    title: b.intl.string(b.t.gG0JBN),
    description: b.intl.string(b.t.SMX0ia),
    type: l.QJ.PARAGRAPH
  }, t))
}