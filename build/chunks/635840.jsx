/** Chunk was on 6284 **/
/** chunk id: 635840, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk266354 = require("./266354.js");
let C = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t["+RZgNT"])
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.kgPXgo)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.vujsUF)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.AYAOLC)
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => Chunk388032.intl.string(Chunk388032.t.wZLu3d)
}];

function u(e) {
  let {
    application: t,
    subscriptionId: i,
    onClose: u
  } = e, [N, m] = a.useState(false), [x, I] = a.useState(null), [S, h] = a.useState(""), T = a.useCallback(() => {
    null != x && (o.default.track(d.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: x,
      application_id: t.id,
      reason: S,
      subscription_id: i
    }), u())
  }, [t.id, i, x, u, S]);
  return a.useEffect(() => {
    r.ZP.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: N
    })
  }, [N]), <n.Fragment>{<l.xBx className={_.headerContainer} separator={false}>{<div className={_.titleContainer}>{<l.Text className={_.headerTitle} variant={"text-lg/semibold"}>{c.intl.string(c.t.zPxMdX)}</l.Text>}{<l.olH className={_.modalCloseButton} onClick={u} />}</div>}{<l.LZC size={8} />}{<l.Text className={_.headerSubtitle} variant={"text-md/medium"}>{c.intl.string(c.t.QJGdBw)}</l.Text>}</l.xBx>}{<l.hzk>{<div className={_.answerChoicesContainer}><l.FXm value={x} options={C.map(e => {
            let {
              nameGetter: t,
              value: i
            } = e;
            return {
              name: t(),
              value: i
            }
          })} onChange={e => I(e.value)} withTransparentBackground={true} /></div>}{"APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x && <s.Is autoFocus={true} className={_.otherField} placeholder={c.intl.string(c.t.s6tM8f)} value={S} onChange={h} />}</l.hzk>}{<l.mzw className={_.footer}>{<l.zxk variant={"primary"} text={c.intl.string(c.t.geKm7u)} onClick={T} disabled={null == x} />}{<l.XZJ type={l.XZJ.Types.INVERTED} value={N} onChange={(e, t) => m(t)} size={20} className={_.__invalid_checkbox}><l.Text variant={"text-sm/medium"}>{c.intl.string(c.t["3vPFQk"])}</l.Text></l.XZJ>}</l.mzw>}</n.Fragment>
}