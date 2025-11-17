/** Chunk was on 73196 **/
/** chunk id: 514698, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  var e, r, {
      onConfirm: u,
      channelId: p
    } = t,
    b = function(t, e) {
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
    }(t, ["onConfirm", "channelId"]);
  let O = (0, i.e7)([a.Z], () => null != p ? a.Z.getChannel(p) : null),
    f = (0, l.ZP)(O, true);
  return (0, n.jsx)(o.Modal, (e = function(t) {
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
  }({}, b), r = r = {
    title: s.intl.string(s.t.S2eoq8),
    actions: [{
      variant: "secondary",
      text: s.intl.string(s.t["ETE/oC"]),
      onClick: b.onClose
    }, {
      variant: "critical-primary",
      text: s.intl.string(s.t.N86XcP),
      onClick: u
    }],
    children: (0, n.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: null != O ? s.intl.format(s.t["1KT3Fp"], {
        channelName: f
      }) : s.intl.string(s.t.VOPUVy)
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