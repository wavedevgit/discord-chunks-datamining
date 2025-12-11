/** Chunk was on 65652 **/
/** chunk id: 208265, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk804230 = require("./804230.js");

function h(n) {
  let {
    classificationId: t,
    transitionState: e,
    initialSlide: h = g.Cs.SPEED_BUMP,
    onClose: N
  } = n, [C, j] = a.useState(h), {
    classification: _,
    isDsaEligible: E
  } = (0, r.YG)(null != t ? t : u.lds), I = (null == _ ? true : _.is_spam) || false, v = (null == _ ? true : _.is_coppa) || false, T = null == _ ? true : _.appeal_ingestion_type;
  a.useEffect(() => {
    j(h)
  }, [j, h]);
  let S = a.useCallback(() => {
      d.Z.close(), N()
    }, [N]),
    A = a.useCallback(() => {
      var n;
      let t = null == (n = g.JQ[C]) ? true : n.next;
      t ? j(t) : S()
    }, [C, S]),
    k = a.useCallback(() => {
      var n;
      let t = null == (n = g.JQ[C]) ? true : n.prev;
      t ? j(t) : S()
    }, [C, S]);
  return (0, i.jsx)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: e,
    disableTrack: true,
    size: l.CgR.DYNAMIC,
    parentComponent: "AppealIngestionModal",
    children: (0, i.jsx)("div", {
      className: p.container,
      children: (0, i.jsxs)(l.MyZ, {
        activeSlide: C,
        width: 500,
        children: [(0, i.jsx)(l.Mi4, {
          id: g.Cs.SPEED_BUMP,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
          impressionProperties: g.ZW,
          children: (0, i.jsx)(m.Z, {
            classification: _,
            onClose: S,
            onNext: A,
            isSpam: I,
            isCoppa: v,
            appealIngestionType: T,
            isDsaEligible: E
          })
        }), (0, i.jsx)(l.Mi4, {
          id: g.Cs.COLLECT_SIGNAL,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
          impressionProperties: g.ZW,
          children: (0, i.jsx)(o.Z, {
            isDsaEligible: E,
            onClose: S,
            onNext: A,
            onBack: k
          })
        }), (0, i.jsx)(l.Mi4, {
          id: g.Cs.CONFIRM_SUBMISSION,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          impressionProperties: g.ZW,
          children: (0, i.jsx)(c.Z, {
            isDsaEligible: E,
            onClose: S,
            onNext: A,
            onBack: k
          })
        }), (0, i.jsx)(l.Mi4, {
          id: g.Cs.REQUEST_SENT,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
          impressionProperties: g.ZW,
          children: (0, i.jsx)(x.Z, {
            onNext: A
          })
        })]
      })
    })
  })
}