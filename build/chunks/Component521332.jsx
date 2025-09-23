/** Chunk was on 75881 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk155647 = require("./155647.js"),
  Chunk185625 = require("./185625.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298186 = require("./298186.js");

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: l,
    trackSettingsUpsellsAction: a
  } = e, [s, d] = i.useState(false);
  return (0, o.ZP)(() => {
    a(p.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(c.JZ, {
    title: t,
    description: n,
    buttonText: s ? f.intl.string(f.t["h+WsPT"]) : f.intl.string(f.t.A8t4NT),
    buttonDisabled: s,
    onButtonPress: () => {
      l(), d(true), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function x(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: i,
    reportId: o,
    reportType: c,
    reportSubType: x
  } = e, v = (0, l.e7)([_.Z], () => _.Z.getChannel(n)), j = (0, m.jc)(t, null == v ? true : v.type), y = (0, p.i_)(c, x, o);
  return 0 === j.length ? null : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "text-sm/semibold",
      className: b.header,
      children: f.intl.string(f.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: b.upsellsContainer,
      children: j.map((e, n) => {
        let {
          getTitle: i,
          getDescription: l,
          onApply: a
        } = e;
        return (0, r.jsx)(h, {
          title: i(),
          description: l(),
          onButtonClick: a,
          trackSettingsUpsellsAction: y(t[n])
        }, n)
      })
    }), (0, r.jsx)(a.Avr, {
      text: f.intl.string(f.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
          section: g.oAB.CONTENT_AND_SOCIAL
        }), i(), s.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: o,
          report_type: c.name,
          report_subtype: x,
          action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}