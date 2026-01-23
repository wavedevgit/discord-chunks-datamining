/** Chunk was on 70232 **/
/** chunk id: 313003, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk997509 = require("./997509.js"),
  Chunk809505 = require("./809505.js"),
  Chunk242273 = require("./242273.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  var e, r;
  let {
    guild: d,
    onClose: p,
    hideColors: y
  } = t, [f, _] = a.useState(d.verificationLevel), [g, O] = a.useState(null), v = d.features.has(u.GuildFeatures.COMMUNITY), j = (0, l.vd)(v, y).filter(t => !t.disabled), h = a.useCallback(async () => {
    null != g && O(null);
    try {
      await c.A.saveGuild(d.id, {
        verificationLevel: f
      }), c.A.updateGuild({
        verificationLevel: f
      }), p()
    } catch (t) {
      O(new o.LG(t).getAnyErrorMessage())
    }
  }, [g, d.id, f, p]);
  return (0, n.jsx)(s.A, (e = function(t) {
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
    title: b.intl.string(b.t.DpRdYK),
    description: b.intl.format(b.t.iuRk2j, {}),
    errorText: g,
    onConfirm: h,
    onCancel: p,
    children: (0, n.jsx)(i.z6M, {
      value: f,
      options: j,
      onChange: t => _(t)
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
}