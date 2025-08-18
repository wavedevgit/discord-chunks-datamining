/** Chunk was on 1272 **/
/** chunk id: 355251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk934919 = require("./934919.js");

function u(e) {
  let {
    guildId: t,
    markAsDismissed: u,
    targetElementRef: d
  } = e, p = i.useCallback(() => {
    u(o.L.TAKE_ACTION), (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("15076"), n.e("39672")]).then(n.bind(n, 907941));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          guildId: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t, u]), f = i.useCallback(() => {
    u(o.L.USER_DISMISS)
  }, [u]);
  return (0, r.jsx)(l.J2, {
    targetElementRef: d,
    shouldShow: true,
    title: s.intl.string(s.t["2l9beX"]),
    body: s.intl.string(s.t.gdqdND),
    asset: (0, r.jsx)("img", {
      className: c.image,
      src: n(297806),
      alt: ""
    }),
    size: "lg",
    caretConfig: {
      position: "top",
      align: "center"
    },
    actions: [{
      text: s.intl.string(s.t.RzWDqa),
      variant: "primary",
      onClick: p
    }, {
      text: s.intl.string(s.t.TulDPj),
      variant: "secondary",
      onClick: f
    }],
    onRequestClose: f
  })
}