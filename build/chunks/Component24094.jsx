/** Chunk was on 32435 **/
/** chunk id: 24094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk296489 = require("./296489.js"),
  a = require.n(Chunk296489),
  Chunk820284 = require("./820284.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk513461 = require("./513461.js"),
  Chunk241499 = require("./241499.jsx"),
  Chunk242273 = require("./242273.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = function(e) {
  var t, n;
  let {
    field: i,
    onSave: f,
    onClose: g,
    guild: x
  } = e, [h, v] = r.useState((null == i ? true : i.values) != null ? null == i ? true : i.values.map(e => ({
    id: a()(),
    value: e
  })) : [{
    id: a()(),
    value: ""
  }]), [y, m] = r.useState(null), j = async () => {
    null != y && m(null);
    let e = h.map(e => e.value.trim()).filter(e => "" !== e);
    if (0 === e.length) return void m(b.intl.string(b.t.TCHkcd));
    let t = {
      field_type: c.rX.TERMS,
      label: b.intl.string(b.t["9suSIA"]),
      values: e,
      required: true
    };
    try {
      await f(t), g()
    } catch (e) {
      m(new s.LG(e).getAnyErrorMessage())
    }
  };
  return (0, l.jsx)(o.A, {
    page: p.liQ.GUILD_RULES_CREATE_MODAL,
    children: (0, l.jsx)(d.A, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({}, e), n = n = {
      errorText: y,
      title: b.intl.string(b.t["3pz9t3"]),
      onCancel: g,
      onConfirm: j,
      children: (0, l.jsx)(u._, {
        guild: x,
        rules: h,
        setRules: v
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}