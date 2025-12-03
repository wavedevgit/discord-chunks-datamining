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

function b(e) {
  let {
    title: t,
    description: n,
    onButtonClick: l,
    trackSettingsUpsellsAction: a
  } = e, [o, c] = i.useState(false);
  return (0, s.ZP)(() => {
    a(g.M4.SETTINGS_UPSELLS_VIEWED)
  }), (0, r.jsx)(d.JZ, {
    title: t,
    description: n,
    buttonText: o ? h.intl.string(h.t["h+WsPb"]) : h.intl.string(h.t.A8t4Nf),
    buttonDisabled: o,
    onButtonPress: () => {
      l(), c(true), a(g.M4.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function f(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: i,
    reportId: s,
    reportType: d,
    reportSubType: f
  } = e, v = (0, l.e7)([m.Z], () => m.Z.getChannel(n)), j = (0, p.jc)(t, null == v ? true : v.type), y = (0, g.i_)(d, f, s);
  return 0 === j.length ? null : (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(a.Heading, {
      variant: "text-sm/semibold",
      className: x.header,
      children: h.intl.string(h.t["1yxTIJ"])
    }), (0, r.jsx)("div", {
      className: x.upsellsContainer,
      children: j.map((e, n) => {
        let {
          getTitle: i,
          getDescription: l,
          onApply: a
        } = e;
        return (0, r.jsx)(b, {
          title: i(),
          description: l(),
          onButtonClick: a,
          trackSettingsUpsellsAction: y(t[n])
        }, n)
      })
    }), (0, r.jsx)(a.Avr, {
      text: h.intl.string(h.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(c.n.CONTENT_AND_SOCIAL_PANEL, {
          section: _.oAB.CONTENT_AND_SOCIAL
        }), i(), o.ZP.trackWithMetadata(_.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: f,
          action: g.M4.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}