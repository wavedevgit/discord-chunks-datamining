/** Chunk was on 21738 **/
/** chunk id: 886217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ok: () => g,
  _B: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk859703 = require("./859703.js"),
  Chunk929271 = require("./929271.jsx"),
  Chunk392344 = require("./392344.jsx"),
  Chunk522043 = require("./522043.jsx"),
  Chunk214832 = require("./214832.jsx"),
  Chunk76531 = require("./76531.jsx"),
  Chunk563905 = require("./563905.jsx"),
  Chunk478677 = require("./478677.jsx"),
  Chunk985018 = require("./985018.jsx");

function f() {
  return [{
    value: "quest_bar",
    label: h.intl.string(h.t.rjVPdM)
  }, {
    value: "share_embed",
    label: h.intl.string(h.t["D/gSWS"])
  }, {
    value: "home_card",
    label: h.intl.string(h.t["5wnpF3"])
  }, {
    value: "channel_call_header",
    label: h.intl.string(h.t.gWinpQ)
  }, {
    value: "members_list",
    label: h.intl.string(h.t.wpYima)
  }, {
    value: "activity_panel",
    label: h.intl.string(h.t.L2mlUb)
  }]
}
let g = e => {
  let {
    questId: t,
    selectedSections: n
  } = e, h = (0, i.bG)([l.A], () => l.A.getQuest(t));
  if (null != (0, i.bG)([l.A], () => l.A.getFetchQuestPreviewError(t)) || null == h) return null;
  let f = e => null == n || 0 === n.length || n.includes(e);
  return (0, r.jsxs)(r.Fragment, {
    children: [f("quest_bar") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.A, {
        quest: h
      }), (0, r.jsx)(a.c, {})]
    }), f("home_card") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d._, {
        quest: h
      }), (0, r.jsx)(a.c, {})]
    }), f("share_embed") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.A, {
        questId: h.id
      }), (0, r.jsx)(a.c, {})]
    }), f("channel_call_header") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.n, {
        quest: h
      }), (0, r.jsx)(a.c, {})]
    }), f("members_list") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.A, {
        quest: h
      }), (0, r.jsx)(a.c, {})]
    }), f("activity_panel") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.A, {
        quest: h
      }), (0, r.jsx)(a.c, {})]
    })]
  })
}