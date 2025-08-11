/** Chunk was on 54844 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: l,
    trackSettingsUpsellsAction: a
  } = e, [s, c] = i.useState(false);
  return (0, o.ZP)(() => {
    a(p.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: s ? _.intl.string(_.t["h+WsPT"]) : _.intl.string(_.t.A8t4NT),
    buttonDisabled: s,
    onButtonPress: () => {
      l(), c(true), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function x(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: i,
    reportId: o,
    reportType: d,
    reportSubType: x
  } = e, f = (0, l.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, m.jc)(t, null == f ? true : f.type), j = (0, p.i_)(d, x, o);
  return 0 === v.length ? null : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "text-sm/semibold",
      className: b.header,
      children: _.intl.string(_.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: b.upsellsContainer,
      children: v.map((e, n) => {
        let {
          getTitle: i,
          getDescription: l,
          onApply: a
        } = e;
        return (0, r.jsx)(h, {
          title: i(),
          description: l(),
          onButtonClick: a,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })
    }), (0, r.jsx)(a.Avr, {
      text: _.intl.string(_.t.olebGx),
      onClick: () => {
        s.Z.open(g.oAB.CONTENT_AND_SOCIAL), i(), c.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: o,
          report_type: d.name,
          report_subtype: x,
          action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}