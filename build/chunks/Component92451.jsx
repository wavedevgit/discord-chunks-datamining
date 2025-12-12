/** Chunk was on 5945 **/
/** chunk id: 92451, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk410575 = require("./410575.jsx"),
  Chunk881052 = require("./881052.js"),
  Chunk246364 = require("./246364.js"),
  Chunk296991 = require("./296991.jsx"),
  Chunk915509 = require("./915509.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = function(e) {
  var t, r;
  let {
    field: i,
    onSave: g,
    onClose: y,
    guild: f
  } = e, [m, v] = a.useState((null == i ? true : i.values) != null ? null == i ? true : i.values.map(e => ({
    id: o()(),
    value: e
  })) : [{
    id: o()(),
    value: ""
  }]), [O, j] = a.useState(null), _ = async () => {
    null != O && j(null);
    let e = m.map(e => e.value.trim()).filter(e => "" !== e);
    if (0 === e.length) return void j(p.intl.string(p.t.TCHkcd));
    let t = {
      field_type: u.QJ.TERMS,
      label: p.intl.string(p.t["9suSIA"]),
      values: e,
      required: true
    };
    try {
      await g(t), y()
    } catch (e) {
      j(new c.Hx(e).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(l.Z, {
    page: d.ZY5.GUILD_RULES_CREATE_MODAL,
    children: (0, n.jsx)(b.Z, (t = function(e) {
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
      errorText: O,
      title: p.intl.string(p.t["3pz9t3"]),
      onCancel: y,
      onConfirm: _,
      children: (0, n.jsx)(s.k, {
        guild: f,
        rules: m,
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