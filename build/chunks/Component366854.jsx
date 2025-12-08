/** Chunk was on 31907 **/
/** chunk id: 366854, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk787014 = require("./787014.js"),
  Chunk388032 = require("./388032.jsx");
let p = function(t) {
  var e, r, {
      channelId: p,
      application: b,
      onClose: u
    } = t,
    f = function(t, e) {
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
    }(t, ["channelId", "application", "onClose"]);
  let [O, y] = o.useState(false), g = async () => {
    try {
      y(true), await a.ZP.removeLinkedLobby(p), u()
    } catch (t) {
      y(false), l.Z.show({
        title: s.intl.string(s.t.vFzPFj),
        body: s.intl.string(s.t["6D5WVg"])
      })
    }
  };
  return (0, n.jsx)(c.VoidConfirmModal, (e = function(t) {
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
  }({
    header: s.intl.string(s.t.JmUENg),
    confirmText: s.intl.string(s.t["cY+Oob"]),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    confirmButtonColor: i.zx.Colors.BRAND,
    onConfirm: g,
    loading: O,
    onClose: u
  }, f), r = r = {
    children: (0, n.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: s.intl.format(s.t["6l2osp"], {
        applicationName: b.name
      })
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