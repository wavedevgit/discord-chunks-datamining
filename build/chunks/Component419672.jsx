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
  Chunk227134 = require("./227134.js");
let x = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [x, p] = s.useState(false), b = s.useCallback(() => {
    l.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, {
      scrollPosition: T.FY.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), E = s.useCallback(() => {
    x || (p(true), (0, o.Uj)(n).then(() => {
      e(), (0, c.t)({
        text: _.intl.string(_.t.FhgVWl),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      p(false), (0, r.showToast)((0, r.createToast)(_.intl.string(_.t.R0RpRU), r.ToastType.FAILURE))
    }))
  }, [n, e, x]);
  return (0, i.jsxs)(d.Z, {
    style: S.wrapperStyle,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: _.intl.format(_.t["njJ/Cg"], {
        learnMoreLink: a.Z.getArticleURL(u.BhN.SAFETY_ALERTS)
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(r.zxk, {
        onClick: b,
        fullWidth: true,
        text: _.intl.string(_.t.qpWnyM)
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.reportFalsePositiveText,
        children: _.intl.format(_.t["2uYViI"], {
          reportFalsePositiveHook: (t, e) => (0, i.jsx)(r.P3F, {
            className: S.reportFalsePositiveButton,
            tag: "span",
            onClick: E,
            children: t
          }, e)
        })
      })]
    })]
  })
}