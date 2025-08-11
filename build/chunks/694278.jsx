/** Chunk was on 72458 **/
/** chunk id: 694278, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk434404 = require("./434404.js"),
  Chunk78451 = require("./78451.js"),
  Chunk915509 = require("./915509.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function b(t) {
  var e, r;
  let {
    guild: b,
    onClose: g,
    hideColors: y
  } = t, [f, _] = a.useState(b.verificationLevel), [m, O] = a.useState(null), j = b.features.has(d.oNc.COMMUNITY), v = (0, l.IF)(j, y).filter(t => !t.disabled), h = a.useCallback(async () => {
    null != m && O(null);
    try {
      await c.Z.saveGuild(b.id, {
        verificationLevel: f
      }), c.Z.updateGuild({
        verificationLevel: f
      }), g()
    } catch (t) {
      O(new o.Hx(t).getAnyErrorMessage())
    }
  }, [m, b.id, f, g]);
  return <s.Z{...e = function(t) {
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
    title: u.intl.string(u.t.DpRdYG),
    errorText: m,
    onConfirm: h,
    onCancel: g,
    children: (0, n.jsxs)(i.hjN, {
      children: [(0, n.jsx)(i.R94, {
        type: i.R94.Types.DESCRIPTION,
        className: p.marginBottom20,
        children: u.intl.format(u.t.iuRk2t, {})
      }), (0, n.jsx)(i.FXm, {
        value: f,
        options: v,
        onChange: t => _(t.value)
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
  }), e} />
}