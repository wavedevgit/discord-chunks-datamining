/** Chunk was on 59727 **/
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
  Chunk769450 = require("./769450.js");

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: l
  } = e, [o, c] = a.useState(false);
  return (0, s.ZP)(() => {
    l(p.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: o ? g.intl.string(g.t["h+WsPT"]) : g.intl.string(g.t.A8t4NT),
    buttonDisabled: o,
    onButtonPress: () => {
      i(), c(true), l(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function x(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: a,
    reportId: s,
    reportType: d,
    reportSubType: x
  } = e, f = (0, i.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, m.jc)(t, null == f ? true : f.type), j = (0, p.i_)(d, x, s);
  return 0 === v.length ? null : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-sm/semibold",
      className: b.header,
      children: g.intl.string(g.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: b.upsellsContainer,
      children: v.map((e, n) => {
        let {
          getTitle: a,
          getDescription: i,
          onApply: l
        } = e;
        return (0, r.jsx)(h, {
          title: a(),
          description: i(),
          onButtonClick: l,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })
    }), (0, r.jsx)(l.Avr, {
      text: g.intl.string(g.t.olebGx),
      onClick: () => {
        o.Z.open(_.oAB.CONTENT_AND_SOCIAL), a(), c.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: x,
          action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}