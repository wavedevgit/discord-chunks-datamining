/** Chunk was on 72458 **/
/** chunk id: 694278, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk434404 = require("./434404.js"),
  Chunk78451 = require("./78451.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var t, r;
  let {
    guild: d,
    onClose: p,
    hideColors: g
  } = e, [f, y] = a.useState(d.verificationLevel), [O, m] = a.useState(null), v = d.features.has(s.GuildFeatures.COMMUNITY), j = (0, l.IF)(v, g).filter(e => !e.disabled), C = a.useCallback(async () => {
    null != O && m(null);
    try {
      await c.Z.saveGuild(d.id, {
        verificationLevel: f
      }), c.Z.updateGuild({
        verificationLevel: f
      }), p()
    } catch (e) {
      m(new o.Hx(e).getAnyErrorMessage())
    }
  }, [O, d.id, f, p]);
  return (0, n.jsx)(b.Z, (t = function(e) {
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
    title: u.intl.string(u.t.DpRdYK),
    description: u.intl.format(u.t.iuRk2j, {}),
    errorText: O,
    onConfirm: C,
    onCancel: p,
    children: (0, n.jsx)(i.FXm, {
      value: f,
      options: j,
      onChange: e => y(e)
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