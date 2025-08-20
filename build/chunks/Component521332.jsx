/** Chunk was on 65330 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function x(e) {
  let {
    title: t,
    description: n,
    onButtonClick: l,
    trackSettingsUpsellsAction: a
  } = e, [o, c] = i.useState(false);
  return (0, s.ZP)(() => {
    a(_.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: o ? f.intl.string(f.t["h+WsPT"]) : f.intl.string(f.t.A8t4NT),
    buttonDisabled: o,
    onButtonPress: () => {
      l(), c(true), a(_.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function b(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: i,
    reportId: s,
    reportType: d,
    reportSubType: b
  } = e, h = (0, l.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, m.jc)(t, null == h ? true : h.type), j = (0, _.i_)(d, b, s);
  return 0 === v.length ? null : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "text-sm/semibold",
      className: g.header,
      children: f.intl.string(f.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: g.upsellsContainer,
      children: v.map((e, n) => {
        let {
          getTitle: i,
          getDescription: l,
          onApply: a
        } = e;
        return (0, r.jsx)(x, {
          title: i(),
          description: l(),
          onButtonClick: a,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })
    }), (0, r.jsx)(a.Avr, {
      text: f.intl.string(f.t.olebGx),
      onClick: () => {
        o.Z.open(p.oAB.CONTENT_AND_SOCIAL), i(), c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: b,
          action: _.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}