/** Chunk was on 54844 **/
/** chunk id: 521332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk769450 = require("./769450.js");

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: a
  } = e, [o, d] = l.useState(false);
  return (0, s.ZP)(() => {
    a(g.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(c.JZ, {
    title: t,
    description: n,
    buttonText: o ? b.intl.string(b.t["h+WsPb"]) : b.intl.string(b.t.A8t4Nf),
    buttonDisabled: o,
    onButtonPress: () => {
      i(), d(true), a(g.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function f(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: l,
    reportId: s,
    reportType: c,
    reportSubType: f
  } = e, v = (0, i.e7)([m.Z], () => m.Z.getChannel(n)), j = (0, p.jc)(t, null == v ? true : v.type), y = (0, g.i_)(c, f, s);
  return 0 === j.length ? null : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(a.Heading, {
      variant: "text-sm/semibold",
      className: x.header,
      children: b.intl.string(b.t["1yxTIJ"])
    }), (0, r.jsx)("div", {
      className: x.upsellsContainer,
      children: j.map((e, n) => {
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
      text: b.intl.string(b.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(d.n.CONTENT_AND_SOCIAL_PANEL, {
          section: _.oAB.CONTENT_AND_SOCIAL
        }), l(), o.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: c.name,
          report_subtype: f,
          action: g.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}