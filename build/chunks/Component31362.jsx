/** Chunk was on 26513 **/
/** chunk id: 31362, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  AgeVerificationRequiredSpeedbumpModal: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73377 = require("./73377.js");
let s = e => {
  var t, r, {
      onStart: s,
      onClose: p
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["onStart", "onClose"]);
  return (0, n.jsx)(o.ExpressiveModal, (t = function(e) {
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
  }({}, b), r = r = {
    graphic: {
      type: "image",
      src: a.Z
    },
    gradientColor: "blue",
    onClose: p,
    title: l.intl.string(l.t["/NNb28"]),
    subtitle: l.intl.string(l.t.ZRQFAu),
    actions: [{
      text: l.intl.string(l.t["5eO+L9"]),
      onClick: s,
      variant: "secondary"
    }, {
      text: l.intl.string(l.t["ElP6r+"]),
      onClick: () => {
        i.Z.showAgeVerificationGetStartedModal({
          entryPoint: c.cU.START_STAGE
        })
      }
    }]
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