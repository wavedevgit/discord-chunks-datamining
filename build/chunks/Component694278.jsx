/** Chunk was on 72458 **/
/** chunk id: 694278, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk434404 = require("./434404.js"),
  Chunk78451 = require("./78451.js"),
  Chunk915509 = require("./915509.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function g(t) {
  var e, r;
  let {
    guild: g,
    onClose: y,
    hideColors: f
  } = t, [_, m] = a.useState(g.verificationLevel), [O, j] = a.useState(null), v = g.features.has(d.oNc.COMMUNITY), h = (0, s.IF)(v, f).filter(t => !t.disabled), x = a.useCallback(async () => {
    null != O && j(null);
    try {
      await l.Z.saveGuild(g.id, {
        verificationLevel: _
      }), l.Z.updateGuild({
        verificationLevel: _
      }), y()
    } catch (t) {
      j(new c.Hx(t).getAnyErrorMessage())
    }
  }, [O, g.id, _, y]);
  return (0, n.jsx)(u.Z, (e = function(t) {
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
    title: p.intl.string(p.t.DpRdYG),
    errorText: O,
    onConfirm: x,
    onCancel: y,
    children: (0, n.jsxs)(o.hjN, {
      children: [(0, n.jsx)(o.R94, {
        type: o.R94.Types.DESCRIPTION,
        className: b.marginBottom20,
        children: p.intl.format(p.t.iuRk2t, {})
      }), (0, n.jsx)(i.Gu, {
        value: _,
        options: h,
        onChange: t => m(t.value)
      })]
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