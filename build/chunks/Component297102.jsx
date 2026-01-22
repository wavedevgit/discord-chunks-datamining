/** Chunk was on 18467 **/
/** chunk id: 297102, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk870383 = require("./870383.js"),
  Chunk81091 = require("./81091.js"),
  Chunk36149 = require("./36149.js"),
  Chunk737567 = require("./737567.js"),
  Chunk652215 = require("./652215.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935568 = require("./935568.js"),
  Chunk700129 = require("./700129.js");
let O = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: O
  } = t, {
    loading: T,
    initiateAgeVerification: h
  } = (0, b.nn)({
    onComplete: O,
    entryPoint: d.q1.RETRY_MODAL,
    isRetry: true
  }), A = r.useMemo(() => (0, l.A)(), []), v = (0, m.I)("age_verification_retry_modal"), y = (0, p.t)("age_verification_retry_modal"), k = (0, g.W)(R.intl.string(R.t["5l3R/m"]), R.intl.string(R.t.JSdbBe)), L = (0, g.W)(R.intl.string(R.t.O7SO0D), R.intl.string(R.t.JNK1ue)), j = (0, g.W)(R.intl.string(R.t.RtOE1v), R.intl.string(R.t.mFvt9M));
  r.useEffect(() => {
    (0, d.Bs)(A, d.WU.RETRY, n)
  }, [A, n]);
  let P = r.useMemo(() => {
    let t = [{
      title: R.intl.string(R.t.FYkioq),
      description: y ? null : R.intl.string(R.t.xMfbRz),
      buttonText: j,
      buttonLoading: T,
      onButtonPress: () => {
        h(), (0, d.St)(A, d.WU.RETRY, d._7.GET_STARTED)
      }
    }];
    return v || t.push({
      title: R.intl.string(R.t["LZO+Hd"]),
      description: R.intl.string(R.t.N2mHaK),
      buttonText: R.intl.string(R.t["LZO+Hd"]),
      buttonLoading: T,
      onButtonPress: () => {
        u.A.openUrl(E.d$.APPEALS_LINK), (0, d.St)(A, d.WU.RETRY, d._7.MANUAL_REVIEW_REQUEST)
      }
    }), t
  }, [h, A, T, v, y, j]);
  return (0, i.jsx)(o.ExpressiveModal, {
    transitionState: e,
    onClose: O,
    gradientColor: "blue",
    graphic: {
      src: x.A,
      type: "image"
    },
    title: k,
    subtitle: L,
    children: (0, i.jsxs)(s.BJc, {
      direction: "vertical",
      gap: 16,
      children: [(0, i.jsx)(s.po8, {
        messageType: s.YCn.INFO,
        className: _.e,
        textColor: "text-feedback-info",
        textVariant: "text-sm/medium",
        children: R.intl.string(R.t.El4aXl)
      }), P.map((t, e) => (0, i.jsx)(a.PQ, function(t) {
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
        className: _.Z,
        children: R.intl.format(R.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            u.A.openUrl(c.A.getArticleURL(f.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, d.St)(A, d.WU.RETRY, d._7.LEARN_MORE)
          }
        })
      })]
    })
  })
}