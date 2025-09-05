/** Chunk was on 22447 **/
/** chunk id: 686768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396723 = require("./396723.js"),
  Chunk736056 = require("./736056.js");
let h = function(e) {
  let {
    transitionState: t,
    entryPoint: n,
    onClose: h
  } = e, {
    loading: g,
    initiateAgeVerification: v
  } = (0, b.WD)(h, true), y = o.useMemo(() => (0, i.Z)(), []);
  o.useEffect(() => {
    (0, u.lA)(y, u.d_.RETRY, n)
  }, [y, n]);
  let _ = o.useMemo(() => [{
    title: f.intl.string(f.t.FYkioq),
    description: f.intl.string(f.t.xMfbR0),
    buttonText: f.intl.string(f.t.RtOE1t),
    buttonLoading: g,
    onButtonPress: () => {
      v(u.cU.RETRY_MODAL), (0, u.x3)(y, u.d_.RETRY, u.sU.GET_STARTED)
    }
  }, {
    title: f.intl.string(f.t["LZO+HR"]),
    description: f.intl.string(f.t.N2mHaG),
    buttonText: f.intl.string(f.t["LZO+HR"]),
    buttonLoading: g,
    onButtonPress: () => {
      d.Z.openUrl(m.sQ.APPEALS_LINK), (0, u.x3)(y, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST)
    }
  }], [v, y, g]);
  return (0, r.jsx)(l.I, {
    transitionState: t,
    onClose: h,
    gradientColor: "blue",
    graphic: {
      src: j.Z,
      type: "image"
    },
    title: f.intl.string(f.t["5l3R/v"]),
    subtitle: f.intl.string(f.t.O7SO0N),
    children: (0, r.jsxs)(c.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, r.jsx)(c.Wn, {
        messageType: c.QYI.INFO,
        className: p.infoBox,
        textColor: "text-feedback-info",
        textVariant: "text-sm/medium",
        children: f.intl.string(f.t.El4aXl)
      }), _.map((e, t) => (0, r.jsx)(a.JZ, function(e) {
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
      }({
        variant: "clickable"
      }, e), t)), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: f.intl.format(f.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            d.Z.openUrl(s.Z.getArticleURL(x.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, u.x3)(y, u.d_.RETRY, u.sU.LEARN_MORE)
          }
        })
      })]
    })
  })
}