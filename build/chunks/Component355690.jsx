/** Chunk was on 74327 **/
/** chunk id: 355690, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985481 = require("./985481.js"),
  Chunk890811 = require("./890811.jsx"),
  Chunk766298 = require("./766298.jsx"),
  Chunk26095 = require("./26095.jsx"),
  Chunk700741 = require("./700741.jsx"),
  Chunk885737 = require("./885737.jsx"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk277000 = require("./277000.js");

function u(e) {
  let {
    classificationId: i,
    transitionState: n,
    initialSlide: u = g.yN.SPEED_BUMP,
    onClose: A
  } = e, [h, j] = a.useState(u), {
    classification: _,
    isDsaEligible: C
  } = (0, r.LJ)(null != i ? i : p.dJq), E = (null == _ ? true : _.is_spam) || false, I = (null == _ ? true : _.is_coppa) || false, v = null == _ ? true : _.appeal_ingestion_type;
  a.useEffect(() => {
    j(u)
  }, [j, u]);
  let S = a.useCallback(() => {
      o.A.close(), A()
    }, [A]),
    T = a.useCallback(() => {
      var e;
      let i = null == (e = g.A8[h]) ? true : e.next;
      i ? j(i) : S()
    }, [h, S]),
    k = a.useCallback(() => {
      var e;
      let i = null == (e = g.A8[h]) ? true : e.prev;
      i ? j(i) : S()
    }, [h, S]);
  return (0, t.jsx)(l.EOs, {
    "data-migration-pending": true,
    transitionState: n,
    disableTrack: true,
    size: l.rIJ.DYNAMIC,
    parentComponent: "AppealIngestionModal",
    children: (0, t.jsx)("div", {
      className: N.k,
      children: (0, t.jsxs)(l.tN_, {
        activeSlide: h,
        width: 500,
        children: [(0, t.jsx)(l.q7S, {
          id: g.yN.SPEED_BUMP,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
          impressionProperties: g.nY,
          children: (0, t.jsx)(m.A, {
            classification: _,
            onClose: S,
            onNext: T,
            isSpam: E,
            isCoppa: I,
            appealIngestionType: v,
            isDsaEligible: C
          })
        }), (0, t.jsx)(l.q7S, {
          id: g.yN.COLLECT_SIGNAL,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
          impressionProperties: g.nY,
          children: (0, t.jsx)(d.A, {
            isDsaEligible: C,
            onClose: S,
            onNext: T,
            onBack: k
          })
        }), (0, t.jsx)(l.q7S, {
          id: g.yN.CONFIRM_SUBMISSION,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
          impressionProperties: g.nY,
          children: (0, t.jsx)(c.A, {
            isDsaEligible: C,
            onClose: S,
            onNext: T,
            onBack: k
          })
        }), (0, t.jsx)(l.q7S, {
          id: g.yN.REQUEST_SENT,
          impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
          impressionProperties: g.nY,
          children: (0, t.jsx)(x.A, {
            onNext: T
          })
        })]
      })
    })
  })
}