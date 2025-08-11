/** Chunk was on 65652 **/
/** chunk id: 208265, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk613734 = require("./613734.js"),
  Chunk409617 = require("./409617.js"),
  Chunk451426 = require("./451426.js"),
  Chunk384725 = require("./384725.js"),
  Chunk534044 = require("./534044.js"),
  Chunk670199 = require("./670199.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk704906 = require("./704906.js");

function h(e) {
  let {
    classificationId: n,
    transitionState: t,
    initialSlide: h = p.Cs.SPEED_BUMP,
    onClose: g
  } = e, [C, N] = a.useState(h), {
    classification: j,
    isDsaEligible: I
  } = (0, r.YG)(null != n ? n : u.lds), E = (null == j ? true : j.is_spam) || false, T = (null == j ? true : j.is_coppa) || false, v = null == j ? true : j.appeal_ingestion_type;
  a.useEffect(() => {
    N(h)
  }, [N, h]);
  let f = a.useCallback(() => {
      d.Z.close(), g()
    }, [g]),
    S = a.useCallback(() => {
      var e;
      let n = null == (e = p.JQ[C]) ? true : e.next;
      n ? N(n) : f()
    }, [C, f]),
    k = a.useCallback(() => {
      var e;
      let n = null == (e = p.JQ[C]) ? true : e.prev;
      n ? N(n) : f()
    }, [C, f]);
  return <l.Y0X data-migration-pending={true} transitionState={t} disableTrack={true} size={l.CgR.DYNAMIC} parentComponent={"AppealIngestionModal"}><div className={_.container}><l.MyZ activeSlide={C} width={500}>{<l.Mi4 id={p.Cs.SPEED_BUMP} impressionName={s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP} impressionProperties={p.ZW}><m.Z classification={j} onClose={f} onNext={S} isSpam={E} isCoppa={T} appealIngestionType={v} isDsaEligible={I} /></l.Mi4>}{<l.Mi4 id={p.Cs.COLLECT_SIGNAL} impressionName={s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL} impressionProperties={p.ZW}><o.Z isDsaEligible={I} onClose={f} onNext={S} onBack={k} /></l.Mi4>}{<l.Mi4 id={p.Cs.CONFIRM_SUBMISSION} impressionName={s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION} impressionProperties={p.ZW}><c.Z isDsaEligible={I} onClose={f} onNext={S} onBack={k} /></l.Mi4>}{<l.Mi4 id={p.Cs.REQUEST_SENT} impressionName={s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT} impressionProperties={p.ZW}><x.Z onNext={S} /></l.Mi4>}</l.MyZ></div></l.Y0X>
}