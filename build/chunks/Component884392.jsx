/** Chunk was on web.js **/
/** chunk id: 884392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk412703 = require("./412703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk890687 = require("./890687.js"),
  Chunk792620 = require("./792620.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t) {
  switch (e) {
    case i.n.WATCH_VIDEO:
      return _.intl.string(_.t.umdNin);
    case i.n.ACHIEVEMENT_IN_GAME:
    case i.n.ACHIEVEMENT_IN_ACTIVITY:
      return t.includes(p.Li.START_QUEST_CTA) ? _.intl.string(_.t["hRIVy+"]) : _.intl.string(_.t.l7E81v);
    case i.n.PLAY_ACTIVITY:
      if (t.includes(p.Li.CLOUD_GAMING_ACTIVITY)) return _.intl.string(_.t["+qoymD"]);
      if (t.includes(p.Li.START_QUEST_CTA)) return _.intl.string(_.t["Ie9++s"]);
      return _.intl.string(_.t.l7E81v);
    default:
      return _.intl.string(_.t.kUQLMJ)
  }
}

function m(e) {
  switch (e) {
    case i.n.ACHIEVEMENT_IN_GAME:
    case i.n.ACHIEVEMENT_IN_ACTIVITY:
    case i.n.PLAY_ACTIVITY:
    case i.n.WATCH_VIDEO:
      return l.Cy.START_QUEST;
    default:
      return l.Cy.ACCEPT_QUEST
  }
}

function g(e, t) {
  let {
    launchInGameActivity: n
  } = (0, u.zW)(t);
  if ((0, d.BS)(t)) return () => {
    (0, f.Fy)(t)
  };
  switch (e) {
    case i.n.ACHIEVEMENT_IN_GAME:
    case i.n.ACHIEVEMENT_IN_ACTIVITY:
    case i.n.PLAY_ACTIVITY:
      if (t.config.features.includes(p.Li.START_QUEST_CTA)) return () => {
        n()
      };
      return null;
    default:
      return null
  }
}

function E(e, t, n, r) {
  return e === i.n.WATCH_VIDEO ? async () => {
    await (0, f.e0)(t, {
      questContent: n.questContent,
      questContentCTA: n.questContentCTA,
      sourceQuestContent: n.sourceQuestContent,
      sourceQuestContentCTA: m(e),
      questContentPosition: n.questContentPosition,
      questContentRowIndex: n.questContentRowIndex
    })
  }: async () => {
    await (0, o.Oy)(t.id, {
      questContent: n.questContent,
      questContentCTA: n.questContentCTA,
      sourceQuestContent: n.sourceQuestContent,
      questContentPosition: n.questContentPosition,
      questContentRowIndex: n.questContentRowIndex
    }), null == r || r()
  }
}
let y = function(e) {
  let {
    quest: t,
    taskType: n,
    size: i = "sm",
    preClickCallback: o,
    analyticsCtxQuestContent: l,
    analyticsCtxSourceQuestContent: u,
    analyticsCtxQuestContentPosition: d,
    analyticsCtxQuestContentRowIndex: p
  } = e, _ = {
    questContent: l,
    questContentCTA: m(n),
    sourceQuestContent: u,
    questContentPosition: d,
    questContentRowIndex: p
  }, y = t.id, {
    isEnrolling: b
  } = (0, a.cf)([c.A], () => ({
    isEnrolling: c.A.isEnrolling(y)
  }), [y]), O = (0, f.Oz)(t), v = g(n, t), A = h(n, t.config.features), I = E(n, t, _, null != v ? v : true);
  return (0, r.jsx)(s.Button, {
    size: i,
    loading: b,
    variant: "primary",
    onClick: () => {
      null == o || o(), I()
    },
    text: A,
    icon: O,
    fullWidth: true
  })
}