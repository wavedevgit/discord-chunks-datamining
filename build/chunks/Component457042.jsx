/** Chunk was on 6595 **/
/** chunk id: 457042, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  ParagraphFormFieldModal: () => g,
  TextInputFormFieldModal: () => b
}), require("./953529.js"), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk246364 = require("./246364.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
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

function p(t) {
  var e, r, l;
  let {
    type: p,
    title: b,
    description: g,
    field: y,
    onSave: _,
    onClose: f
  } = t, [m, O] = i.useState(null != (e = null == y ? true : y.label) ? e : ""), [j, h] = i.useState(null), x = async () => {
    null != j && h(null);
    let t = m.trim();
    if ("" === t) return void h(u.intl.string(u.t["G+TI44"]));
    try {
      await _({
        field_type: p,
        label: t,
        required: true
      }), f()
    } catch (t) {
      h(new o.Hx(t).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(c.Z, (r = d({}, t), l = l = {
    errorText: j,
    title: b,
    description: g,
    onConfirm: x,
    onCancel: f,
    children: (0, n.jsx)(a.oil, {
      onChange: t => {
        null != j && h(null);
        let e = t.replace(/(\r\n|\n|\r)/g, " ");
        e.length > s.XN && (e = e.slice(0, s.XN)), O(e)
      },
      placeholder: u.intl.string(u.t.fqVmbL),
      value: m,
      onKeyDown: t => "Enter" === t.key && x()
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

function b(t) {
  return (0, n.jsx)(p, d({
    title: u.intl.string(u.t.w6Q9wz),
    description: u.intl.string(u.t["A6M+qv"]),
    type: l.QJ.TEXT_INPUT
  }, t))
}

function g(t) {
  return (0, n.jsx)(p, d({
    title: u.intl.string(u.t.gG0JBN),
    description: u.intl.string(u.t.SMX0ia),
    type: l.QJ.PARAGRAPH
  }, t))
}