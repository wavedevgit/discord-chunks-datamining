/** Chunk was on 22447 **/
/** chunk id: 686768, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => R
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
  Chunk252153 = require("./252153.js"),
  Chunk765896 = require("./765896.js");
let R = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: R
  } = t, {
    loading: _,
    initiateAgeVerification: O
  } = (0, f.WD)({
    onComplete: R,
    entryPoint: u.cU.RETRY_MODAL,
    isRetry: true
  }), h = r.useMemo(() => (0, o.Z)(), []), T = (0, p.W)("age_verification_retry_modal");
  r.useEffect(() => {
    (0, u.lA)(h, u.d_.RETRY, n)
  }, [h, n]);
  let y = r.useMemo(() => {
    let t = [{
      title: b.intl.string(b.t.FYkioq),
      description: b.intl.string(b.t.xMfbRz),
      buttonText: b.intl.string(b.t.RtOE1v),
      buttonLoading: _,
      onButtonPress: () => {
        O(), (0, u.x3)(h, u.d_.RETRY, u.sU.GET_STARTED)
      }
    }];
    return T || t.push({
      title: b.intl.string(b.t["LZO+Hd"]),
      description: b.intl.string(b.t.N2mHaK),
      buttonText: b.intl.string(b.t["LZO+Hd"]),
      buttonLoading: _,
      onButtonPress: () => {
        d.Z.openUrl(x.sQ.APPEALS_LINK), (0, u.x3)(h, u.d_.RETRY, u.sU.MANUAL_REVIEW_REQUEST)
      }
    }), t
  }, [O, h, _, T]);
  return (0, i.jsx)(l.ExpressiveModal, {
    transitionState: e,
    onClose: R,
    gradientColor: "blue",
    graphic: {
      src: E.Z,
      type: "image"
    },
    title: b.intl.string(b.t["5l3R/m"]),
    subtitle: b.intl.string(b.t.O7SO0D),
    children: (0, i.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [(0, i.jsx)(s.Wn, {
        messageType: s.QYI.INFO,
        className: m.infoBox,
        textColor: "text-feedback-info",
        textVariant: "text-sm/medium",
        children: b.intl.string(b.t.El4aXl)
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
        children: b.intl.format(b.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            d.Z.openUrl(c.Z.getArticleURL(g.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, u.x3)(h, u.d_.RETRY, u.sU.LEARN_MORE)
          }
        })
      })]
    })
  })
}