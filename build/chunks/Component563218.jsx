/** Chunk was on 58652 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function v(e) {
  let {
    title: t,
    description: n,
    onButtonClick: a,
    trackSettingsUpsellsAction: i
  } = e, [o, d] = r.useState(false);
  return (0, s.Ay)(() => {
    i(p.lJ.SETTINGS_UPSELLS_VIEWED)
  }), (0, l.jsx)(c.PQ, {
    title: t,
    description: n,
    buttonText: o ? g.intl.string(g.t["h+WsPb"]) : g.intl.string(g.t.A8t4Nf),
    buttonDisabled: o,
    onButtonPress: () => {
      a(), d(true), i(p.lJ.SETTINGS_UPSELLS_APPLY_CLICKED)
    }
  })
}

function h(e) {
  let {
    settingsUpsells: t,
    channelId: n,
    onModalClose: r,
    reportId: s,
    reportType: c,
    reportSubType: h
  } = e, j = (0, a.bG)([m.A], () => m.A.getChannel(n)), _ = (0, b.MR)(t, null == j ? true : j.type), A = (0, p.Mw)(c, h, s);
  return 0 === _.length ? null : (0, l.jsxs)("div", {
    className: f.kL,
    children: [(0, l.jsx)(i.Heading, {
      variant: "text-sm/semibold",
      className: f.wx,
      children: g.intl.string(g.t["1yxTIJ"])
    }), (0, l.jsx)("div", {
      className: f.uk,
      children: _.map((e, n) => {
        let {
          getTitle: r,
          getDescription: a,
          onApply: i
        } = e;
        return (0, l.jsx)(v, {
          title: r(),
          description: a(),
          onButtonClick: i,
          trackSettingsUpsellsAction: A(t[n])
        }, n)
      })
    }), (0, l.jsx)(i.QWc, {
      text: g.intl.string(g.t.olebGx),
      onClick: () => {
        (0, u.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL, {
          section: x.nc_.CONTENT_AND_SOCIAL
        }), r(), o.Ay.trackWithMetadata(x.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
          report_id: s,
          report_type: c.name,
          report_subtype: h,
          action: p.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
        })
      }
    })]
  })
}