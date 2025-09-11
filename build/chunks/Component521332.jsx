/** Chunk was on 61805 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk298186 = require("./298186.js");

function b(e) {
  let {
    title: t,
    description: n,
    onButtonClick: a,
    trackSettingsUpsellsAction: l
  } = e, [o, c] = i.useState(false);
  return (0, s.ZP)(() => {
    l(m.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: o ? f.intl.string(f.t["h+WsPT"]) : f.intl.string(f.t.A8t4NT),
    buttonDisabled: o,
    onButtonPress: () => {
      a(), c(true), l(m.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function x(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: i,
    reportId: s,
    reportType: d,
    reportSubType: x
  } = e, h = (0, a.e7)([u.Z], () => u.Z.getChannel(n)), v = (0, _.jc)(t, null == h ? true : h.type), j = (0, m.i_)(d, x, s);
  return 0 === v.length ? null : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(l.X6q, {
      variant: "text-sm/semibold",
      className: g.header,
      children: f.intl.string(f.t["1yxTIC"])
    }), (0, r.jsx)("div", {
      className: g.upsellsContainer,
      children: v.map((e, n) => {
        let {
          getTitle: i,
          getDescription: a,
          onApply: l
        } = e;
        return (0, r.jsx)(b, {
          title: i(),
          description: a(),
          onButtonClick: l,
          trackSettingsUpsellsAction: j(t[n])
        }, n)
      })
    }), (0, r.jsx)(l.Avr, {
      text: f.intl.string(f.t.olebGx),
      onClick: () => {
        o.Z.open(p.oAB.CONTENT_AND_SOCIAL), i(), c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: x,
          action: m.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}