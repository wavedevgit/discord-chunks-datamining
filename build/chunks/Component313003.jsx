/** Chunk was on 70232 **/
/** chunk id: 313003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
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

function u(e) {
  var t, r;
  let {
    guild: u,
    onClose: d,
    hideColors: p
  } = e, [y, O] = n.useState(u.verificationLevel), [j, v] = n.useState(null), g = u.features.has(b.GuildFeatures.COMMUNITY), h = (0, l.vd)(g, p).filter(e => !e.disabled), w = n.useCallback(async () => {
    null != j && v(null);
    try {
      await o.A.saveGuild(u.id, {
        verificationLevel: y
      }), o.A.updateGuild({
        verificationLevel: y
      }), d()
    } catch (e) {
      v(new i.LG(e).getAnyErrorMessage())
    }
  }, [j, u.id, y, d]);
  return (0, a.jsx)(s.A, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = r[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({}, e), r = r = {
    title: f.intl.string(f.t.DpRdYK),
    description: f.intl.format(f.t.iuRk2j, {}),
    errorText: j,
    onConfirm: w,
    onCancel: d,
    children: (0, a.jsx)(c.z6M, {
      value: y,
      options: h,
      onChange: e => O(e)
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}