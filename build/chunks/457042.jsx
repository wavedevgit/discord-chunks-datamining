/** Chunk was on 6595 **/
/** chunk id: 457042, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  ParagraphFormFieldModal: () => g,
  TextInputFormFieldModal: () => b
}), require("./953529.js"), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk246364 = require("./246364.js"),
  Chunk915509 = require("./915509.js"),
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
  } = t, [m, O] = i.useState(null != (e = null == y ? true : y.label) ? e : ""), [j, x] = i.useState(null), h = async () => {
    null != j && x(null);
    let t = m.trim();
    if ("" === t) return void x(u.intl.string(u.t["G+TI4+"]));
    try {
      await _({
        field_type: p,
        label: t,
        required: true
      }), f()
    } catch (t) {
      x(new a.Hx(t).getAnyErrorMessage())
    }
  };
  return <c.Z{...r = d({}, t), l = l = {
    errorText: j,
    title: b,
    description: g,
    onConfirm: h,
    onCancel: f,
    children: (0, n.jsx)(o.oil, {
      onChange: t => {
        null != j && x(null);
        let e = t.replace(/(\r\n|\n|\r)/g, " ");
        e.length > s.XN && (e = e.slice(0, s.XN)), O(e)
      },
      placeholder: u.intl.string(u.t.fqVmbG),
      value: m,
      onKeyDown: t => "Enter" === t.key && h()
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
  }), r} />
}

function b(t) {
  return <p{...d({
    title: u.intl.string(u.t.w6Q9w8),
    description: u.intl.string(u.t["A6M+qq"]),
    type: l.QJ.TEXT_INPUT
  }, t)} />
}

function g(t) {
  return <p{...d({
    title: u.intl.string(u.t.gG0JBA),
    description: u.intl.string(u.t.SMX0iY),
    type: l.QJ.PARAGRAPH
  }, t)} />
}