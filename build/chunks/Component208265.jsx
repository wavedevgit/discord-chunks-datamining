/** Chunk was on 65652 **/
/** chunk id: 208265, original params: n,e,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(n) {
  let {
    classificationId: e,
    transitionState: i,
    initialSlide: h = g.Cs.SPEED_BUMP,
    onClose: N
  } = n, [C, j] = a.useState(h), {
    classification: _,
    isDsaEligible: E
  } = (0, r.YG)(null != e ? e : p.lds), I = (null == _ ? true : _.is_spam) || false, v = (null == _ ? true : _.is_coppa) || false, T = null == _ ? true : _.appeal_ingestion_type;
  a.useEffect(() => {
    j(h)
  }, [j, h]);
  let S = a.useCallback(() => {
      d.Z.close(), N()
    }, [N]),
    A = a.useCallback(() => {
      var n;
      let e = null == (n = g.JQ[C]) ? true : n.next;
      e ? j(e) : S()
    }, [C, S]),
    k = a.useCallback(() => {
      var n;
      let e = null == (n = g.JQ[C]) ? true : n.prev;
      e ? j(e) : S()
    }, [C, S]);
  return (0, t.jsx)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    disableTrack: true,
    size: l.CgR.DYNAMIC,
    parentComponent: "AppealIngestionModal",
    children: (0, t.jsx)("div", {
      className: u.container,
      children: (0, t.jsxs)(l.MyZ, {
        activeSlide: C,
        width: 500,
        children: [(0, t.jsx)(l.Mi4, {
          id: g.Cs.SPEED_BUMP,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
          impressionProperties: g.ZW,
          children: (0, t.jsx)(m.Z, {
            classification: _,
            onClose: S,
            onNext: A,
            isSpam: I,
            isCoppa: v,
            appealIngestionType: T,
            isDsaEligible: E
          })
        }), (0, t.jsx)(l.Mi4, {
          id: g.Cs.COLLECT_SIGNAL,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
          impressionProperties: g.ZW,
          children: (0, t.jsx)(o.Z, {
            isDsaEligible: E,
            onClose: S,
            onNext: A,
            onBack: k
          })
        }), (0, t.jsx)(l.Mi4, {
          id: g.Cs.CONFIRM_SUBMISSION,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          impressionProperties: g.ZW,
          children: (0, t.jsx)(c.Z, {
            isDsaEligible: E,
            onClose: S,
            onNext: A,
            onBack: k
          })
        }), (0, t.jsx)(l.Mi4, {
          id: g.Cs.REQUEST_SENT,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
          impressionProperties: g.ZW,
          children: (0, t.jsx)(x.Z, {
            onNext: A
          })
        })]
      })
    })
  })
}