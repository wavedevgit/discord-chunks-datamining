/** Chunk was on 46717 **/
/** chunk id: 758601, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk544231 = require("./544231.js"),
  Chunk110168 = require("./110168.jsx"),
  Chunk403403 = require("./403403.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk24745 = require("./24745.js");
let E = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [E, O] = i.useState(false), m = i.useCallback(() => {
    let t = (0, a.WJ)("SafetyToolsAboutSafetyAlerts");
    (0, o.openUserSettings)(t ? r.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING : r.X.CONTENT_AND_SOCIAL_PANEL, {
      section: u.nc_.CONTENT_AND_SOCIAL,
      scrollPosition: t ? true : A.d1.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), g = i.useCallback(() => {
    E || (O(true), (0, T.XR)(n).then(() => {
      e(), (0, d.r)({
        text: _.intl.string(_.t.FhgVWi),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      O(false), (0, l.showToast)((0, l.createToast)(_.intl.string(_.t.R0RpRX), l.ToastType.FAILURE))
    }))
  }, [n, e, E]);
  return (0, s.jsxs)(S.A, {
    style: x.T1,
    children: [(0, s.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: _.intl.format(_.t["njJ/Cg"], {
        learnMoreLink: c.A.getArticleURL(u.MVz.SAFETY_ALERTS)
      })
    }), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(l.Button, {
        onClick: m,
        fullWidth: true,
        text: _.intl.string(_.t.qpWnyC)
      }), (0, s.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: x._B,
        children: _.intl.format(_.t["2uYViD"], {
          reportFalsePositiveHook: (t, e) => (0, s.jsx)(l.DUT, {
            className: x.l_,
            tag: "span",
            onClick: g,
            children: t
          }, e)
        })
      })]
    })]
  })
}