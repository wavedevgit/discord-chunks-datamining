/** Chunk was on 54844 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk427572 = require("./427572.js");

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: a
  } = e, [o, d] = l.useState(false);
  return (0, s.ZP)(() => {
    a(p.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(c.JZ, {
    title: t,
    description: n,
    buttonText: o ? f.intl.string(f.t["h+WsPb"]) : f.intl.string(f.t.A8t4Nf),
    buttonDisabled: o,
    onButtonPress: () => {
      i(), d(true), a(p.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function v(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: l,
    reportId: s,
    reportType: c,
    reportSubType: v
  } = e, j = (0, i.e7)([m.Z], () => m.Z.getChannel(n)), _ = (0, b.jc)(t, null == j ? true : j.type), y = (0, p.i_)(c, v, s);
  return 0 === _.length ? null : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(a.Heading, {
      variant: "text-sm/semibold",
      className: x.header,
      children: f.intl.string(f.t["1yxTIJ"])
    }), (0, r.jsx)("div", {
      className: x.upsellsContainer,
      children: _.map((e, n) => {
        let {
          getTitle: l,
          getDescription: i,
          onApply: a
        } = e;
        return (0, r.jsx)(h, {
          title: l(),
          description: i(),
          onButtonClick: a,
          trackSettingsUpsellsAction: y(t[n])
        }, n)
      })
    }), (0, r.jsx)(a.Avr, {
      text: f.intl.string(f.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
          section: g.oAB.CONTENT_AND_SOCIAL
        }), l(), o.ZP.trackWithMetadata(g.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: c.name,
          report_subtype: v,
          action: p.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}