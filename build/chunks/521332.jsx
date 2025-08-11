/** Chunk was on 54844 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk155647 = require("./155647.js"),
  Chunk185625 = require("./185625.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305086 = require("./305086.js");

function b(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: a
  } = e, [s, c] = l.useState(false);
  return (0, o.ZP)(() => {
    a(p.M4.SETTINGS_UPSELLS_VIEWED)
  }), <d.JZ title={t} description={n} buttonText={s ? x.intl.string(x.t["h+WsPT"]) : x.intl.string(x.t.A8t4NT)} buttonDisabled={s} onButtonPress={() => {
      i(), c(true), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }} />
}

function h(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: l,
    reportId: o,
    reportType: d,
    reportSubType: h
  } = e, f = (0, i.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, m.jc)(t, null == f ? true : f.type), j = (0, p.i_)(d, h, o);
  return 0 === v.length ? null : <div className={_.container}>{<a.X6q variant={"text-sm/semibold"} className={_.header}>{x.intl.string(x.t["1yxTIC"])}</a.X6q>}{<div className={_.upsellsContainer}>{v.map((e, n) => {
        let {
          getTitle: l,
          getDescription: i,
          onApply: a
        } = e;
        return (0, r.jsx)(b, {
          title: l(),
          description: i(),
          onButtonClick: a,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })}</div>}{<a.Avr text={x.intl.string(x.t.olebGx)} onClick={() => {
        s.Z.open(g.oAB.CONTENT_AND_SOCIAL), l(), c.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: o,
          report_type: d.name,
          report_subtype: h,
          action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }} />}</div>
}