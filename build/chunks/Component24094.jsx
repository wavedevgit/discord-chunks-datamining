/** Chunk was on 32435 **/
/** chunk id: 24094, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk296489 = require("./296489.js"),
  c = require.n(Chunk296489),
  Chunk820284 = require("./820284.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk513461 = require("./513461.js"),
  Chunk241499 = require("./241499.jsx"),
  Chunk242273 = require("./242273.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = function(e) {
  var t, r;
  let {
    field: l,
    onSave: p,
    onClose: y,
    guild: O
  } = e, [g, v] = a.useState((null == l ? true : l.values) != null ? null == l ? true : l.values.map(e => ({
    id: c()(),
    value: e
  })) : [{
    id: c()(),
    value: ""
  }]), [j, h] = a.useState(null), w = async () => {
    null != j && h(null);
    let e = g.map(e => e.value.trim()).filter(e => "" !== e);
    if (0 === e.length) return void h(d.intl.string(d.t.TCHkcd));
    let t = {
      field_type: s.rX.TERMS,
      label: d.intl.string(d.t["9suSIA"]),
      values: e,
      required: true
    };
    try {
      await p(t), y()
    } catch (e) {
      h(new o.LG(e).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(i.A, {
    page: f.liQ.GUILD_RULES_CREATE_MODAL,
    children: (0, n.jsx)(b.A, (t = function(e) {
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
    }({}, e), r = r = {
      errorText: j,
      title: d.intl.string(d.t["3pz9t3"]),
      onCancel: y,
      onConfirm: w,
      children: (0, n.jsx)(u._, {
        guild: O,
        rules: g,
        setRules: v
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  })
}