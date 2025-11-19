/** Chunk was on 22447 **/
/** chunk id: 686768, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk257639 = require("./257639.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740076 = require("./740076.js"),
  Chunk736056 = require("./736056.js");
let b = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: b
  } = t, {
    loading: _,
    initiateAgeVerification: O
  } = (0, f.WD)({
    onComplete: b,
    entryPoint: u.cU.RETRY_MODAL,
    isRetry: true
  }), h = r.useMemo(() => (0, o.Z)(), []), T = (0, p.W)("age_verification_retry_modal");
  r.useEffect(() => {
    (0, u.lA)(h, u.d_.RETRY, n)
  }, [h, n]);
  let y = r.useMemo(() => {
    let t = [{
      title: m.intl.string(m.t.FYkioq),
      description: m.intl.string(m.t.xMfbRz),
      buttonText: m.intl.string(m.t.RtOE1v),
      buttonLoading: _,
      onButtonPress: () => {
        O(), (0, u.x3)(h, u.d_.RETRY, u.sU.GET_STARTED)
      }
    }];
    return T || t.push({
      title: m.intl.string(m.t["LZO+Hd"]),
      description: m.intl.string(m.t.N2mHaK),
      buttonText: m.intl.string(m.t["LZO+Hd"]),
      buttonLoading: _,
      onButtonPress: () => {
        d.Z.openUrl(x.sQ.APPEALS_LINK), (0, u.x3)(h, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST)
      }
    }), t
  }, [O, h, _, T]);
  return (0, i.jsx)(l.ExpressiveModal, {
    transitionState: e,
    onClose: b,
    gradientColor: "blue",
    graphic: {
      src: R.Z,
      type: "image"
    },
    title: m.intl.string(m.t["5l3R/m"]),
    subtitle: m.intl.string(m.t.O7SO0D),
    children: (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, i.jsx)(s.Wn, {
        messageType: s.QYI.INFO,
        className: E.infoBox,
        textColor: "text-feedback-info",
        textVariant: "text-sm/medium",
        children: m.intl.string(m.t.El4aXl)
      }), y.map((t, e) => (0, i.jsx)(a.JZ, function(t) {
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
        children: m.intl.format(m.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            d.Z.openUrl(c.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, u.x3)(h, u.d_.RETRY, u.sU.LEARN_MORE)
          }
        })
      })]
    })
  })
}