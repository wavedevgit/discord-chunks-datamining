/** Chunk was on 72458 **/
/** chunk id: 694278, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(t) {
  var e, r;
  let {
    guild: p,
    onClose: b,
    hideColors: g
  } = t, [f, y] = a.useState(p.verificationLevel), [_, O] = a.useState(null), m = p.features.has(u.GuildFeatures.COMMUNITY), v = (0, l.IF)(m, g).filter(t => !t.disabled), j = a.useCallback(async () => {
    null != _ && O(null);
    try {
      await c.Z.saveGuild(p.id, {
        verificationLevel: f
      }), c.Z.updateGuild({
        verificationLevel: f
      }), b()
    } catch (t) {
      O(new o.Hx(t).getAnyErrorMessage())
    }
  }, [_, p.id, f, b]);
  return (0, n.jsx)(s.Z, (e = function(t) {
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
    title: d.intl.string(d.t.DpRdYK),
    description: d.intl.format(d.t.iuRk2j, {}),
    errorText: _,
    onConfirm: j,
    onCancel: b,
    children: (0, n.jsx)(i.FXm, {
      value: f,
      options: v,
      onChange: t => y(t)
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