/** Chunk was on 26510 **/
/** chunk id: 542717, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ParagraphFormFieldModal: () => p,
  TextInputFormFieldModal: () => d
}), require("./228524.js"), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk513461 = require("./513461.js"),
  Chunk242273 = require("./242273.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function u(e) {
  var t, r, l;
  let {
    type: u,
    title: d,
    description: p,
    field: y,
    onSave: g,
    onClose: O
  } = e, [j, h] = i.useState(null != (t = null == y ? true : y.label) ? t : ""), [w, v] = i.useState(null), P = async () => {
    null != w && v(null);
    let e = j.trim();
    if ("" === e) return void v(b.intl.string(b.t["G+TI44"]));
    try {
      await g({
        field_type: u,
        label: e,
        required: true
      }), O()
    } catch (e) {
      v(new c.LG(e).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(o.A, (r = f({}, e), l = l = {
    errorText: w,
    title: d,
    description: p,
    onConfirm: P,
    onCancel: O,
    children: (0, n.jsx)(a.ksK, {
      onChange: e => {
        null != w && v(null);
        let t = e.replace(/(\r\n|\n|\r)/g, " ");
        t.length > s.Ty && (t = t.slice(0, s.Ty)), h(t)
      },
      placeholder: b.intl.string(b.t.fqVmbL),
      value: j,
      onKeyDown: e => "Enter" === e.key && P()
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
  }), r))
}

function d(e) {
  return (0, n.jsx)(u, f({
    title: b.intl.string(b.t.w6Q9wz),
    description: b.intl.string(b.t["A6M+qv"]),
    type: l.rX.TEXT_INPUT
  }, e))
}

function p(e) {
  return (0, n.jsx)(u, f({
    title: b.intl.string(b.t.gG0JBN),
    description: b.intl.string(b.t.SMX0ia),
    type: l.rX.PARAGRAPH
  }, e))
}