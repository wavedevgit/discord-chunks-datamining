/** Chunk was on 98363 **/
/** chunk id: 531461, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk154672 = require("./154672.js"),
  Chunk198982 = require("./198982.js"),
  Chunk330936 = require("./330936.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let y = e => {
  var t, r;
  let {
    email: y,
    setStep: f,
    onBack: O,
    school: b,
    setSchool: d
  } = e, g = function(e, t) {
    if (null == e) return {};
    var r, n, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["email", "setStep", "onBack", "school", "setSchool"]), [j, m] = l.useState(null), [h, E] = l.useState(false), v = async () => {
    m(null), E(true);
    try {
      await a.A.signup(y, b), f(s.Di.EMAIL_WAITLIST)
    } catch (e) {
      m(new c.LG(e))
    } finally {
      E(false)
    }
  }, I = async e => {
    null != b && "" !== b && e.charCode === u.Ks6.ENTER && await v()
  };
  return (0, n.jsx)(i.Modal, (t = function(e) {
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
  }({}, g), r = r = {
    title: p.intl.string(p.t["2FNWBG"]),
    subtitle: p.intl.string(p.t["/4y6ox"]),
    actions: [{
      variant: "secondary",
      onClick: O,
      text: p.intl.string(p.t["13/7kX"])
    }, {
      variant: "primary",
      text: p.intl.string(p.t.PDsYAo),
      onClick: v,
      loading: h
    }],
    children: (0, n.jsx)(o.ksK, {
      label: p.intl.string(p.t["L+AfJr"]),
      onKeyPress: I,
      placeholder: p.intl.string(p.t.Y1btJd),
      onChange: e => {
        d(e)
      },
      error: null == j ? true : j.getAnyErrorMessage()
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
}