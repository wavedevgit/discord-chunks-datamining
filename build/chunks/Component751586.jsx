/** Chunk was on 1272 **/
/** chunk id: 751586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  UN: () => b,
  Ui: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk569984 = require("./569984.js"),
  Chunk564034 = require("./564034.jsx"),
  Chunk649424 = require("./649424.jsx"),
  Chunk176168 = require("./176168.jsx"),
  Chunk234086 = require("./234086.jsx"),
  Chunk17057 = require("./17057.jsx"),
  Chunk70621 = require("./70621.jsx"),
  Chunk429080 = require("./429080.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777338 = require("./777338.js");

function m() {
  return [{
    value: "quest_bar",
    label: Chunk388032.intl.string(Chunk388032.t.rjVPdH)
  }, {
    value: "share_embed",
    label: Chunk388032.intl.string(Chunk388032.t["D/gSWV"])
  }, {
    value: "home_card",
    label: Chunk388032.intl.string(Chunk388032.t["5wnpFx"])
  }, {
    value: "channel_call_header",
    label: Chunk388032.intl.string(Chunk388032.t.gWinpa)
  }, {
    value: "members_list",
    label: Chunk388032.intl.string(Chunk388032.t.wpYimZ)
  }, {
    value: "activity_panel",
    label: Chunk388032.intl.string(Chunk388032.t.L2mlUV)
  }]
}
let b = e => {
  let {
    questId: t,
    selectedSections: n
  } = e, h = (0, i.e7)([a.Z], () => a.Z.getQuest(t));
  if (null != (0, i.e7)([a.Z], () => a.Z.getFetchQuestPreviewError(t)) || null == h) return null;
  let m = e => null == n || 0 === n.length || n.includes(e);
  return (0, r.jsxs)(r.Fragment, {
    children: [m("home_card") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.w, {
        quest: h
      }), (0, r.jsx)(o.i, {})]
    }), m("quest_bar") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Z, {
        quest: h
      }), (0, r.jsx)(o.i, {})]
    }), m("share_embed") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Z, {
        questId: h.id
      }), (0, r.jsx)(o.i, {})]
    }), m("channel_call_header") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.i, {
        quest: h
      }), (0, r.jsx)(o.i, {})]
    }), m("members_list") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.Z, {
        quest: h
      }), (0, r.jsx)(o.i, {})]
    }), m("activity_panel") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Z, {
        quest: h
      }), (0, r.jsx)(o.i, {})]
    }), (0, r.jsx)("div", {
      className: g.themes,
      children: (0, r.jsx)(l.ZP, {
        type: l.yH.SETTINGS,
        children: (0, r.jsx)(l.ZP.Basic, {
          className: g.themeSelectionGroup
        })
      })
    })]
  })
}