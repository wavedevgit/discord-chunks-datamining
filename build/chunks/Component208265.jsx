/** Chunk was on 65652 **/
/** chunk id: 208265, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk613734 = require("./613734.js"),
  Chunk409617 = require("./409617.jsx"),
  Chunk451426 = require("./451426.jsx"),
  Chunk384725 = require("./384725.jsx"),
  Chunk534044 = require("./534044.jsx"),
  Chunk670199 = require("./670199.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk218314 = require("./218314.js");

function _(e) {
  let {
    classificationId: n,
    transitionState: t,
    initialSlide: _ = p.Cs.SPEED_BUMP,
    onClose: h
  } = e, [C, N] = a.useState(_), {
    classification: j,
    isDsaEligible: I
  } = (0, r.YG)(null != n ? n : u.lds), E = (null == j ? true : j.is_spam) || false, T = (null == j ? true : j.is_coppa) || false, v = null == j ? true : j.appeal_ingestion_type;
  a.useEffect(() => {
    N(_)
  }, [N, _]);
  let f = a.useCallback(() => {
      d.Z.close(), h()
    }, [h]),
    k = a.useCallback(() => {
      var e;
      let n = null == (e = p.JQ[C]) ? true : e.next;
      n ? N(n) : f()
    }, [C, f]),
    S = a.useCallback(() => {
      var e;
      let n = null == (e = p.JQ[C]) ? true : e.prev;
      n ? N(n) : f()
    }, [C, f]);
  return (0, i.jsx)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: t,
    disableTrack: true,
    size: l.CgR.DYNAMIC,
    parentComponent: "AppealIngestionModal",
    children: (0, i.jsx)("div", {
      className: g.container,
      children: (0, i.jsxs)(l.MyZ, {
        activeSlide: C,
        width: 500,
        children: [(0, i.jsx)(l.Mi4, {
          id: p.Cs.SPEED_BUMP,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
          impressionProperties: p.ZW,
          children: (0, i.jsx)(m.Z, {
            classification: j,
            onClose: f,
            onNext: k,
            isSpam: E,
            isCoppa: T,
            appealIngestionType: v,
            isDsaEligible: I
          })
        }), (0, i.jsx)(l.Mi4, {
          id: p.Cs.COLLECT_SIGNAL,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
          impressionProperties: p.ZW,
          children: (0, i.jsx)(o.Z, {
            isDsaEligible: I,
            onClose: f,
            onNext: k,
            onBack: S
          })
        }), (0, i.jsx)(l.Mi4, {
          id: p.Cs.CONFIRM_SUBMISSION,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          impressionProperties: p.ZW,
          children: (0, i.jsx)(c.Z, {
            isDsaEligible: I,
            onClose: f,
            onNext: k,
            onBack: S
          })
        }), (0, i.jsx)(l.Mi4, {
          id: p.Cs.REQUEST_SENT,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
          impressionProperties: p.ZW,
          children: (0, i.jsx)(x.Z, {
            onNext: k
          })
        })]
      })
    })
  })
}