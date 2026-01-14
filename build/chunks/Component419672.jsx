/** Chunk was on 89650 **/
/** chunk id: 419672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk378298 = require("./378298.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk993750 = require("./993750.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199330 = require("./199330.js");
let A = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [A, g] = s.useState(false), O = s.useCallback(() => {
    let t = (0, a.Gl)("SafetyToolsAboutSafetyAlerts");
    (0, o.openUserSettings)(t ? l.n.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING : l.n.CONTENT_AND_SOCIAL_PANEL, {
      section: S.oAB.CONTENT_AND_SOCIAL,
      scrollPosition: t ? true : _.FY.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), N = s.useCallback(() => {
    A || (g(true), (0, T.Uj)(n).then(() => {
      e(), (0, d.t)({
        text: x.intl.string(x.t.FhgVWi),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      g(false), (0, r.showToast)((0, r.createToast)(x.intl.string(x.t.R0RpRX), r.ToastType.FAILURE))
    }))
  }, [n, e, A]);
  return (0, i.jsxs)(u.Z, {
    style: E.wrapperStyle,
    children: [(0, i.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: x.intl.format(x.t["njJ/Cg"], {
        learnMoreLink: c.Z.getArticleURL(S.BhN.SAFETY_ALERTS)
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(r.Button, {
        onClick: O,
        fullWidth: true,
        text: x.intl.string(x.t.qpWnyC)
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: E.reportFalsePositiveText,
        children: x.intl.format(x.t["2uYViD"], {
          reportFalsePositiveHook: (t, e) => (0, i.jsx)(r.P3F, {
            className: E.reportFalsePositiveButton,
            tag: "span",
            onClick: N,
            children: t
          }, e)
        })
      })]
    })]
  })
}