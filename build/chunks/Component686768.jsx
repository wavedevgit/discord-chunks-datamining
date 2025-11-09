/** Chunk was on 22447 **/
/** chunk id: 686768, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
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
let b = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: b
  } = t, {
    loading: m,
    initiateAgeVerification: O
  } = (0, p.WD)({
    onComplete: b,
    entryPoint: d.cU.RETRY_MODAL,
    isRetry: true
  }), _ = r.useMemo(() => (0, o.Z)(), []);
  r.useEffect(() => {
    (0, d.lA)(_, d.d_.RETRY, n)
  }, [_, n]);
  let T = r.useMemo(() => [{
    title: g.intl.string(g.t.FYkioq),
    description: g.intl.string(g.t.xMfbRz),
    buttonText: g.intl.string(g.t.RtOE1v),
    buttonLoading: m,
    onButtonPress: () => {
      O(), (0, d.x3)(_, d.d_.RETRY, d.sU.GET_STARTED)
    }
  }, {
    title: g.intl.string(g.t["LZO+Hd"]),
    description: g.intl.string(g.t.N2mHaK),
    buttonText: g.intl.string(g.t["LZO+Hd"]),
    buttonLoading: m,
    onButtonPress: () => {
      u.Z.openUrl(x.sQ.APPEALS_LINK), (0, d.x3)(_, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST)
    }
  }], [O, _, m]);
  return (0, i.jsx)(l.ExpressiveModal, {
    transitionState: e,
    onClose: b,
    gradientColor: "blue",
    graphic: {
      src: R.Z,
      type: "image"
    },
    title: g.intl.string(g.t["5l3R/m"]),
    subtitle: g.intl.string(g.t.O7SO0D),
    children: (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, i.jsx)(s.Wn, {
        messageType: s.QYI.INFO,
        className: E.infoBox,
        textColor: "text-feedback-info",
        textVariant: "text-sm/medium",
        children: g.intl.string(g.t.El4aXl)
      }), T.map((t, e) => (0, i.jsx)(a.JZ, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({
        variant: "clickable"
      }, t), e)), (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: g.intl.format(g.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            u.Z.openUrl(c.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(_, d.d_.RETRY, d.sU.LEARN_MORE)
          }
        })
      })]
    })
  })
}