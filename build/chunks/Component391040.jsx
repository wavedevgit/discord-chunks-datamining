/** Chunk was on 21305 **/
/** chunk id: 391040, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk677185 = require("./677185.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let y = e => {
  var t, r;
  let {
    subscriptionId: y,
    member: d,
    onClose: m
  } = e, g = function(e, t) {
    if (null == e) return {};
    var r, n, o, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["subscriptionId", "member", "onClose"]), [j, w] = (0, o.useState)(false), [P, E] = (0, o.useState)(false);
  (0, l.Ay)(() => {
    a.default.track(b.HAw.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
      subscription_id: y,
      member_user_id: d.id
    })
  });
  let _ = async () => {
    a.default.track(b.HAw.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, {
      subscription_id: y,
      member_user_id: d.id
    }), w(true);
    let e = await (0, u.oO)(y, d.id);
    w(false), e.ok ? m() : E(true)
  };
  return (0, n.jsx)(i.Modal, (t = function(e) {
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
    size: "md",
    title: f.intl.string(O.default.MJIHXY),
    subtitle: f.intl.formatToPlainString(O.default.gMyQrH, {
      memberName: (0, s.$3)(d),
      premiumGroupProductName: (0, p.DP)(),
      cooldownMonths: p.wl
    }),
    onClose: m,
    actions: [{
      text: f.intl.string(O.default.dlr8CX),
      variant: "critical-primary",
      onClick: _,
      loading: j
    }]
  }, g), r = r = {
    children: P && (0, n.jsx)(c.wx6, {
      type: "critical",
      children: f.intl.string(f.t["rTU7/z"])
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