/** Chunk was on 80417 **/
/** chunk id: 352954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let l = {
  openSecureFramesStreamVerification: function(e, t) {
    (0, i.ZDy)(async () => {
      let i = (await n.e("94904").then(n.bind(n, 660250))).default;
      return n => (0, r.jsx)(i, c({
        streamKey: e,
        channelId: t
      }, n))
    })
  },
  openSecureFramesUserVerificationModal: function(e, t, o, l) {
    o() && (0, i.ZDy)(async () => {
      let i = (await n.e("33397").then(n.bind(n, 963410))).default;
      return n => (0, r.jsx)(i, c({
        userId: e,
        channelId: t
      }, n))
    }, {
      contextKey: l === a.IlC.POPOUT ? i.u1M : i.z1l
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: t,
      subtitle: a,
      confirmText: l = o.intl.string(o.t["cY+Ooa"]),
      onConfirm: u
    } = e;
    (0, i.ZDy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(n.bind(n, 481060));
      return n => {
        var s, E;
        return (0, r.jsx)(e, (s = c({
          header: t,
          confirmText: l,
          cancelText: o.intl.string(o.t["ETE/oK"]),
          onConfirm: u
        }, n), E = E = {
          children: (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: a
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(E)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(E, e))
        }), s))
      }
    })
  },
  handleSecureFramesUserVerificationLink: function(e) {
    throw Error("handleSecureFramesUserVerificationLink not implemented")
  }
}