/** Chunk was on web.js **/
/** chunk id: 751586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UN: () => g,
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
  Chunk414071 = require("./414071.js");

function m() {
  return [{
    value: "quest_bar",
    label: Chunk388032.intl.string(Chunk388032.t.dCHFNT)
  }, {
    value: "share_embed",
    label: Chunk388032.intl.string(Chunk388032.t.LUZFws)
  }, {
    value: "home_card",
    label: Chunk388032.intl.string(Chunk388032.t.Mko3j4)
  }, {
    value: "channel_call_header",
    label: Chunk388032.intl.string(Chunk388032.t["Vfl/AQ"])
  }, {
    value: "members_list",
    label: Chunk388032.intl.string(Chunk388032.t.QbGtHB)
  }, {
    value: "activity_panel",
    label: Chunk388032.intl.string(Chunk388032.t.HWICen)
  }]
}
let g = e => {
  let {
    questId: t,
    selectedSections: n
  } = e, p = (0, i.e7)([o.Z], () => o.Z.getQuest(t));
  if (null != (0, i.e7)([o.Z], () => o.Z.getFetchQuestPreviewError(t)) || null == p) return null;
  let m = e => null == n || 0 === n.length || n.includes(e);
  return (0, r.jsxs)(r.Fragment, {
    children: [m("home_card") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.w, {
        quest: p
      }), (0, r.jsx)(s.i, {})]
    }), m("quest_bar") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Z, {
        quest: p
      }), (0, r.jsx)(s.i, {})]
    }), m("share_embed") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Z, {
        questId: p.id
      }), (0, r.jsx)(s.i, {})]
    }), m("channel_call_header") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.i, {
        quest: p
      }), (0, r.jsx)(s.i, {})]
    }), m("members_list") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        quest: p
      }), (0, r.jsx)(s.i, {})]
    }), m("activity_panel") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Z, {
        quest: p
      }), (0, r.jsx)(s.i, {})]
    }), (0, r.jsx)("div", {
      className: h.themes,
      children: (0, r.jsx)(a.ZP, {
        type: a.yH.SETTINGS,
        children: (0, r.jsx)(a.ZP.Basic, {
          className: h.themeSelectionGroup
        })
      })
    })]
  })
}