/** Chunk was on 1272 **/
/** chunk id: 138176, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk626135 = require("./626135.js"),
  Chunk93237 = require("./93237.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk295234 = require("./295234.js");
let p = e => {
  let {
    targetElementRef: t
  } = e, p = (0, o.eW)(), f = () => {
    (0, o.ZL)()
  };
  return (0, r.jsx)(i.J2, {
    targetElementRef: t,
    title: u.intl.string(u.t.K2DyeS),
    body: u.intl.string(u.t["JICo+3"]),
    graphic: {
      type: "image",
      src: d.Z
    },
    size: "md",
    shouldShow: p,
    align: "top",
    position: "right",
    gradientColor: "nitro-pink",
    caretConfig: {
      align: "start"
    },
    actions: [{
      text: u.intl.string(u.t.t2N81y),
      onClick: () => {
        s.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
          location_stack: [a.Z.HOME_PAGE_PREMIUM_TAB]
        }), f(), (0, l.ZDy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 656139));
          return t => (0, r.jsx)(e, function(e) {
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
          }({}, t))
        })
      }
    }],
    onRequestClose: f
  })
}