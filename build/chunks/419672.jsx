/** Chunk was on 9738 **/
/** chunk id: 419672, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk378298 = require("./378298.js"),
  Chunk584656 = require("./584656.js"),
  Chunk993750 = require("./993750.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk621164 = require("./621164.js");
let _ = function(t) {
  let {
    onClose: e,
    channelId: n
  } = t, [_, b] = r.useState(false), O = r.useCallback(() => {
    l.Z.open(d.oAB.CONTENT_AND_SOCIAL, null, {
      scrollPosition: T.FY.DM_SAFETY_ALERTS_V2
    }), e()
  }, [e]), g = r.useCallback(() => {
    _ || (b(true), (0, o.Uj)(n).then(() => {
      e(), (0, c.t)({
        text: S.intl.string(S.t.FhgVWl),
        id: "safety-tools-report-false-positive"
      })
    }).catch(() => {
      b(false), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE))
    }))
  }, [n, e, _]);
  return <u.Z style={x.wrapperStyle}>{<s.Text variant={"text-md/normal"} color={"header-secondary"}>{S.intl.format(S.t["njJ/Cg"], {
        learnMoreLink: a.Z.getArticleURL(d.BhN.SAFETY_ALERTS)
      })}</s.Text>}{<div>{<s.zxk onClick={O} fullWidth={true} text={S.intl.string(S.t.qpWnyM)} />}{<s.Text variant={"text-sm/normal"} color={"text-muted"} className={x.reportFalsePositiveText}>{S.intl.format(S.t["2uYViI"], {
          reportFalsePositiveHook: (t, e) => (0, i.jsx)(s.P3F, {
            className: x.reportFalsePositiveButton,
            tag: "span",
            onClick: g,
            children: t
          }, e)
        })}</s.Text>}</div>}</u.Z>
}