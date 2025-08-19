/** Chunk was on 1056 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function b(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: o
  } = e, [l, c] = a.useState(false);
  return (0, s.ZP)(() => {
    o(m.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: l ? g.intl.string(g.t["h+WsPT"]) : g.intl.string(g.t.A8t4NT),
    buttonDisabled: l,
    onButtonPress: () => {
      i(), c(true), o(m.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function h(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: a,
    reportId: s,
    reportType: d,
    reportSubType: h
  } = e, x = (0, i.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, _.jc)(t, null == x ? true : x.type), j = (0, m.i_)(d, h, s);
  return 0 === v.length ? null : (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(o.X6q, {
      variant: "text-sm/semibold",
      className: f.header,
      children: g.intl.string(g.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: f.upsellsContainer,
      children: v.map((e, n) => {
        let {
          getTitle: a,
          getDescription: i,
          onApply: o
        } = e;
        return (0, r.jsx)(b, {
          title: a(),
          description: i(),
          onButtonClick: o,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })
    }), (0, r.jsx)(o.Avr, {
      text: g.intl.string(g.t.olebGx),
      onClick: () => {
        l.Z.open(p.oAB.CONTENT_AND_SOCIAL), a(), c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: h,
          action: m.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}