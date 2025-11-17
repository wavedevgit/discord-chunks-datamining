/** Chunk was on 5945 **/
/** chunk id: 92451, original params: t,e,r (module,exports,require) **/
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
let g = function(t) {
  var e, r;
  let {
    field: i,
    onSave: g,
    onClose: _,
    guild: y
  } = t, [f, m] = a.useState((null == i ? true : i.values) != null ? null == i ? true : i.values.map(t => ({
    id: o()(),
    value: t
  })) : [{
    id: o()(),
    value: ""
  }]), [v, O] = a.useState(null), j = async () => {
    null != v && O(null);
    let t = f.map(t => t.value.trim()).filter(t => "" !== t);
    if (0 === t.length) return void O(b.intl.string(b.t.TCHkcd));
    let e = {
      field_type: u.QJ.TERMS,
      label: b.intl.string(b.t["9suSIA"]),
      values: t,
      required: true
    };
    try {
      await g(e), _()
    } catch (t) {
      O(new c.Hx(t).getAnyErrorMessage())
    }
  };
  return (0, n.jsx)(l.Z, {
    page: p.ZY5.GUILD_RULES_CREATE_MODAL,
    children: (0, n.jsx)(d.Z, (e = function(t) {
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
      title: b.intl.string(b.t["3pz9t3"]),
      onCancel: _,
      onConfirm: j,
      children: (0, n.jsx)(s.k, {
        guild: y,
        rules: f,
        setRules: m
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