/** Chunk was on 12236 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk319582 = require("./319582.js"),
  Chunk369053 = require("./369053.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk71561 = require("./71561.js");

function h(e) {
  let {
    title: t,
    description: n,
    onButtonClick: i,
    trackSettingsUpsellsAction: a
  } = e, [o, c] = r.useState(false);
  return (0, s.Ay)(() => {
    a(b.lJ.SETTINGS_UPSELLS_VIEWED)
  }), (0, l.jsx)(d.PQ, {
    title: t,
    description: n,
    buttonText: o ? g.intl.string(g.t["h+WsPb"]) : g.intl.string(g.t.A8t4Nf),
    buttonDisabled: o,
    onButtonPress: () => {
      i(), c(true), a(b.lJ.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function v(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: r,
    reportId: s,
    reportType: d,
    reportSubType: v
  } = e, f = (0, i.bG)([m.A], () => m.A.getChannel(n)), j = (0, p.MR)(t, null == f ? true : f.type), A = (0, b.Mw)(d, v, s);
  return 0 === j.length ? null : (0, l.jsxs)("div", {
    className: x.kL,
    children: [(0, l.jsx)(a.Heading, {
      variant: "text-sm/semibold",
      className: x.wx,
      children: g.intl.string(g.t["1yxTIJ"])
    }), (0, l.jsx)("div", {
      className: x.uk,
      children: j.map((e, n) => {
        let {
          getTitle: r,
          getDescription: i,
          onApply: a
        } = e;
        return (0, l.jsx)(h, {
          title: r(),
          description: i(),
          onButtonClick: a,
          trackSettingsUpsellsAction: A(t[n])
        }, n)
      })
    }), (0, l.jsx)(a.QWc, {
      text: g.intl.string(g.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, {
          section: _.nc_.CONTENT_AND_SOCIAL
        }), r(), o.Ay.trackWithMetadata(_.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: d.name,
          report_subtype: v,
          action: b.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}