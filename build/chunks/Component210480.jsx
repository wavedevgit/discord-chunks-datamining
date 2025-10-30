/** Chunk was on 81409 **/
/** chunk id: 210480, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk626135 = require("./626135.js"),
  Chunk39604 = require("./39604.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  var e, r, {
      onClose: p,
      onBeforeDelete: u,
      onAfterDelete: b,
      clips: f
    } = t,
    y = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          i = Object.keys(t);
        for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["onClose", "onBeforeDelete", "onAfterDelete", "clips"]);
  let [O, g] = o.useState(false), j = f.length, d = o.useCallback(async () => {
    g(true);
    try {
      null == u || u(), await Promise.all(f.map(async t => {
        await a.sS(t.filepath), l.default.track(c.rMx.CLIP_DELETED)
      })), b()
    } finally {
      g(false)
    }
  }, [f, u, b]);
  return (0, n.jsx)(i.Modal, (e = function(t) {
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
  }({}, y), r = r = {
    onClose: p,
    title: s.intl.formatToPlainString(s.t.lprb7n, {
      count: j
    }),
    subtitle: s.intl.formatToPlainString(s.t.NInqer, {
      count: j
    }),
    actions: [{
      variant: "secondary",
      text: s.intl.string(s.t["ETE/oC"]),
      onClick: p
    }, {
      variant: "critical-primary",
      text: s.intl.string(s.t.oyYWHE),
      onClick: d,
      loading: O,
      disabled: O
    }]
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