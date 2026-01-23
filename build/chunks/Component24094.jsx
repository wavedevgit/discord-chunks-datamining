/** Chunk was on 32435 **/
/** chunk id: 24094, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk296489 = require("./296489.js"),
  l = require.n(Chunk296489),
  Chunk820284 = require("./820284.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk513461 = require("./513461.js"),
  Chunk241499 = require("./241499.jsx"),
  Chunk242273 = require("./242273.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = function(t) {
  var e, r;
  let {
    field: i,
    onSave: _,
    onClose: y,
    guild: g
  } = t, [f, O] = a.useState((null == i ? true : i.values) != null ? null == i ? true : i.values.map(t => ({
    id: l()(),
    value: t
  })) : [{
    id: l()(),
    value: ""
  }]), [v, j] = a.useState(null), m = async () => {
    null != v && j(null);
    let t = f.map(t => t.value.trim()).filter(t => "" !== t);
    if (0 === t.length) return void j(p.intl.string(p.t.TCHkcd));
    let e = {
      field_type: s.rX.TERMS,
      label: p.intl.string(p.t["9suSIA"]),
      values: t,
      required: true
    };
    try {
      await _(e), y()
    } catch (t) {
      j(new c.LG(t).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(o.A, {
    page: d.liQ.GUILD_RULES_CREATE_MODAL,
    children: (0, n.jsx)(b.A, (e = function(t) {
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
    }({}, t), r = r = {
      errorText: v,
      title: p.intl.string(p.t["3pz9t3"]),
      onCancel: y,
      onConfirm: m,
      children: (0, n.jsx)(u._, {
        guild: g,
        rules: f,
        setRules: O
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    }), e))
  })
}