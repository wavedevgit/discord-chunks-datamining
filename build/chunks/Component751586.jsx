/** Chunk was on 1272 **/
/** chunk id: 751586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UN: () => h,
  Ui: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk616022 = require("./616022.js"),
  Chunk564034 = require("./564034.jsx"),
  Chunk649424 = require("./649424.jsx"),
  Chunk176168 = require("./176168.jsx"),
  Chunk234086 = require("./234086.jsx"),
  Chunk17057 = require("./17057.jsx"),
  Chunk70621 = require("./70621.jsx"),
  Chunk429080 = require("./429080.jsx"),
  Chunk388032 = require("./388032.jsx");

function g() {
  return [{
    value: "quest_bar",
    label: Chunk388032.intl.string(Chunk388032.t.rjVPdM)
  }, {
    value: "share_embed",
    label: Chunk388032.intl.string(Chunk388032.t["D/gSWS"])
  }, {
    value: "home_card",
    label: Chunk388032.intl.string(Chunk388032.t["5wnpF3"])
  }, {
    value: "channel_call_header",
    label: Chunk388032.intl.string(Chunk388032.t.gWinpQ)
  }, {
    value: "members_list",
    label: Chunk388032.intl.string(Chunk388032.t.wpYima)
  }, {
    value: "activity_panel",
    label: Chunk388032.intl.string(Chunk388032.t.L2mlUb)
  }]
}
let h = e => {
  let {
    questId: t,
    selectedSections: n
  } = e, f = (0, i.e7)([l.Z], () => l.Z.getQuest(t));
  if (null != (0, i.e7)([l.Z], () => l.Z.getFetchQuestPreviewError(t)) || null == f) return null;
  let g = e => null == n || 0 === n.length || n.includes(e);
  return (0, r.jsxs)(r.Fragment, {
    children: [g("quest_bar") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Z, {
        quest: f
      }), (0, r.jsx)(a.i, {})]
    }), g("home_card") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.w, {
        quest: f
      }), (0, r.jsx)(a.i, {})]
    }), g("share_embed") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.Z, {
        questId: f.id
      }), (0, r.jsx)(a.i, {})]
    }), g("channel_call_header") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.i, {
        quest: f
      }), (0, r.jsx)(a.i, {})]
    }), g("members_list") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.Z, {
        quest: f
      }), (0, r.jsx)(a.i, {})]
    }), g("activity_panel") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        quest: f
      }), (0, r.jsx)(a.i, {})]
    })]
  })
}