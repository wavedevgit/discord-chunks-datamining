/** Chunk was on 21738 **/
/** chunk id: 886217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ok: () => A,
  _B: () => h
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

function h() {
  return [{
    value: "quest_bar",
    label: f.intl.string(f.t.rjVPdM)
  }, {
    value: "share_embed",
    label: f.intl.string(f.t["D/gSWS"])
  }, {
    value: "home_card",
    label: f.intl.string(f.t["5wnpF3"])
  }, {
    value: "channel_call_header",
    label: f.intl.string(f.t.gWinpQ)
  }, {
    value: "members_list",
    label: f.intl.string(f.t.wpYima)
  }, {
    value: "activity_panel",
    label: f.intl.string(f.t.L2mlUb)
  }]
}
let A = e => {
  let {
    questId: t,
    selectedSections: n
  } = e, f = (0, i.bG)([l.A], () => l.A.getQuest(t));
  if (null != (0, i.bG)([l.A], () => l.A.getFetchQuestPreviewError(t)) || null == f) return null;
  let h = e => null == n || 0 === n.length || n.includes(e);
  return (0, r.jsxs)(r.Fragment, {
    children: [h("quest_bar") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.A, {
        quest: f
      }), (0, r.jsx)(a.c, {})]
    }), h("home_card") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d._, {
        quest: f
      }), (0, r.jsx)(a.c, {})]
    }), h("share_embed") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.A, {
        questId: f.id
      }), (0, r.jsx)(a.c, {})]
    }), h("channel_call_header") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.n, {
        quest: f
      }), (0, r.jsx)(a.c, {})]
    }), h("members_list") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.A, {
        quest: f
      }), (0, r.jsx)(a.c, {})]
    }), h("activity_panel") && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.A, {
        quest: f
      }), (0, r.jsx)(a.c, {})]
    })]
  })
}