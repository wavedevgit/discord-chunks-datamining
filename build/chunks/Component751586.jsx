/** Chunk was on web.js **/
/** chunk id: 751586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tl: () => h,
  UN: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk569984 = require("./569984.js"),
  Chunk564034 = require("./564034.jsx"),
  Chunk176168 = require("./176168.jsx"),
  Chunk234086 = require("./234086.jsx"),
  Chunk17057 = require("./17057.jsx"),
  Chunk70621 = require("./70621.jsx"),
  Chunk429080 = require("./429080.jsx"),
  Chunk675720 = require("./675720.jsx"),
  Chunk726927 = require("./726927.js");
let h = [{
    value: "quest_bar",
    label: "Quest Bar"
  }, {
    value: "share_embed",
    label: "Share Embed"
  }, {
    value: "home_card",
    label: "Home Card"
  }, {
    value: "channel_call_header",
    label: "Channel Call Header"
  }, {
    value: "members_list",
    label: "Members List"
  }, {
    value: "trophy_case",
    label: "Trophy Case"
  }],
  m = e => {
    let {
      questId: t,
      selectedSections: n
    } = e, h = (0, i.e7)([o.Z], () => o.Z.getQuest(t));
    if (null != (0, i.e7)([o.Z], () => o.Z.getFetchQuestPreviewError(t)) || null == h) return null;
    let m = e => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
      children: [m("home_card") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.w, {
          quest: h
        }), (0, r.jsx)(s.i, {})]
      }), m("quest_bar") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Z, {
          quest: h
        }), (0, r.jsx)(s.i, {})]
      }), m("share_embed") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Z, {
          questId: h.id
        }), (0, r.jsx)(s.i, {})]
      }), m("channel_call_header") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.i, {
          quest: h
        }), (0, r.jsx)(s.i, {})]
      }), m("members_list") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(f.Z, {
          quest: h
        }), (0, r.jsx)(s.i, {})]
      }), m("trophy_case") && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.Z, {
          quest: h
        }), (0, r.jsx)(s.i, {})]
      }), (0, r.jsx)("div", {
        className: p.themes,
        children: (0, r.jsx)(a.ZP, {
          type: a.yH.SETTINGS,
          children: (0, r.jsx)(a.ZP.Basic, {
            className: p.themeSelectionGroup
          })
        })
      })]
    })
  }