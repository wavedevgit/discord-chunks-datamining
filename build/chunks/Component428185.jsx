/** Chunk was on 93154 **/
/** chunk id: 428185, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk435183 = require("./435183.js"),
  Chunk985018 = require("./985018.jsx");
let s = function(e) {
  var t, r;
  let {
    channelId: s,
    application: b,
    onClose: f
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, o, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["channelId", "application", "onClose"]), [y, O] = o.useState(false), g = async () => {
    try {
      O(true), await a.Ay.removeLinkedLobby(s), f()
    } catch (e) {
      O(false), l.A.show({
        title: p.intl.string(p.t.vFzPFj),
        body: p.intl.string(p.t["6D5WVg"])
      })
    }
  };
  return (0, n.jsx)(i.VoidConfirmModal, (t = function(e) {
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
  }({
    header: p.intl.string(p.t.JmUENg),
    confirmText: p.intl.string(p.t["cY+Oob"]),
    cancelText: p.intl.string(p.t["ETE/oC"]),
    confirmButtonColor: c.$n.Colors.BRAND,
    onConfirm: g,
    loading: y,
    onClose: f
  }, u), r = r = {
    children: (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: p.intl.format(p.t["6l2osp"], {
        applicationName: b.name
      })
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