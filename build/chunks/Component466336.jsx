/** Chunk was on 21738 **/
/** chunk id: 466336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk954571 = require("./954571.js"),
  Chunk727949 = require("./727949.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk954457 = require("./954457.js");
let p = e => {
  let {
    targetElementRef: t
  } = e, p = (0, o.Tp)(), f = () => {
    (0, o.ne)()
  };
  return (0, r.jsx)(i.AM, {
    targetElementRef: t,
    title: u.intl.string(u.t.K2DyeS),
    body: u.intl.string(u.t["JICo+3"]),
    graphic: {
      type: "image",
      src: d.A
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
        s.default.track(c.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
          location_stack: [a.A.HOME_PAGE_PREMIUM_TAB]
        }), f(), (0, l.mMO)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(n.bind(n, 303682));
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