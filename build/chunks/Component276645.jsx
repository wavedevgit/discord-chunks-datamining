/** Chunk was on 1272 **/
/** chunk id: 276645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632008 = require("./632008.js");

function c(e) {
  let {
    guildId: t,
    markAsDismissed: c
  } = e;
  return (0, r.jsx)(a.ZP, {
    className: s.container,
    asset: (0, r.jsx)("img", {
      className: s.image,
      src: n(297806),
      alt: ""
    }),
    header: o.intl.string(o.t["2l9beX"]),
    headerClassName: s.header,
    content: o.intl.string(o.t.gdqdND),
    buttonCTA: o.intl.string(o.t.RzWDqa),
    buttonProps: {
      color: i.Tt.WHITE,
      innerClassName: s.primaryButton
    },
    onClick: () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("5863"), n.e("31543")]).then(n.bind(n, 751212));
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
    },
    secondaryButtonCTA: o.intl.string(o.t.TulDPj),
    secondaryButtonProps: {
      look: i.iL.LINK,
      color: i.Tt.WHITE
    },
    markAsDismissed: c
  })
}