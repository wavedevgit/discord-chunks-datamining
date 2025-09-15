/** Chunk was on 89650 **/
/** chunk id: 419672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk378298 = require("./378298.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk993750 = require("./993750.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk328355 = require("./328355.js");
let p = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [p, b] = s.useState(false), E = s.useCallback(() => {
    (0, a.openUserSettings)(l.n.CONTENT_AND_SOCIAL_PANEL, {
      section: u.oAB.CONTENT_AND_SOCIAL,
      scrollPosition: _.FY.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), A = s.useCallback(() => {
    p || (b(true), (0, c.Uj)(n).then(() => {
      e(), (0, d.t)({
        text: S.intl.string(S.t.FhgVWl),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      b(false), (0, r.showToast)((0, r.createToast)(S.intl.string(S.t.R0RpRU), r.ToastType.FAILURE))
    }))
  }, [n, e, p]);
  return (0, i.jsxs)(T.Z, {
    style: x.wrapperStyle,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: S.intl.format(S.t["njJ/Cg"], {
        learnMoreLink: o.Z.getArticleURL(u.BhN.SAFETY_ALERTS)
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(r.zxk, {
        onClick: E,
        fullWidth: true,
        text: S.intl.string(S.t.qpWnyM)
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: x.reportFalsePositiveText,
        children: S.intl.format(S.t["2uYViI"], {
          reportFalsePositiveHook: (t, e) => (0, i.jsx)(r.P3F, {
            className: x.reportFalsePositiveButton,
            tag: "span",
            onClick: A,
            children: t
          }, e)
        })
      })]
    })]
  })
}