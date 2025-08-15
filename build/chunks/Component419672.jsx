/** Chunk was on 89650 **/
/** chunk id: 419672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk378298 = require("./378298.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk993750 = require("./993750.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk328355 = require("./328355.js");
let x = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [x, b] = r.useState(false), p = r.useCallback(() => {
    l.Z.open(d.oAB.CONTENT_AND_SOCIAL, null, {
      scrollPosition: T.FY.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), O = r.useCallback(() => {
    x || (b(true), (0, o.Uj)(n).then(() => {
      e(), (0, c.t)({
        text: S.intl.string(S.t.FhgVWl),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      b(false), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE))
    }))
  }, [n, e, x]);
  return (0, i.jsxs)(u.Z, {
    style: _.wrapperStyle,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: S.intl.format(S.t["njJ/Cg"], {
        learnMoreLink: a.Z.getArticleURL(d.BhN.SAFETY_ALERTS)
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(s.zxk, {
        onClick: p,
        fullWidth: true,
        text: S.intl.string(S.t.qpWnyM)
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: _.reportFalsePositiveText,
        children: S.intl.format(S.t["2uYViI"], {
          reportFalsePositiveHook: (t, e) => (0, i.jsx)(s.P3F, {
            className: _.reportFalsePositiveButton,
            tag: "span",
            onClick: O,
            children: t
          }, e)
        })
      })]
    })]
  })
}