/** Chunk was on web.js **/
/** chunk id: 747926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JA: () => S,
  Tv: () => T,
  bA: () => N,
  xu: () => C
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk73153 = require("./73153.js"),
  Chunk465532 = require("./465532.js"),
  Chunk58149 = require("./58149.js"),
  Chunk584682 = require("./584682.js"),
  Chunk9588 = require("./9588.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk376708 = require("./376708.js"),
  Chunk976860 = require("./976860.js"),
  Chunk378570 = require("./378570.js"),
  Chunk253932 = require("./253932.js"),
  Chunk761640 = require("./761640.js"),
  Chunk31717 = require("./31717.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function S(e, t, n) {
  if (!(0, p.C$)(e.id)) return void(0, d.E)();
  f.Uw.dispatch(A.jej.POPOUT_CLOSE);
  let r = !o().isEmpty(b.A.getVoiceStatesForChannel(e.id));
  if (t || !m.SY.getSetting() || __OVERLAY__ || r) {
    s.h.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, h.N9)(e, {
      source: n
    }) : (0, h.iN)(e.id);
    return
  }
  i()(null != e.parent_id, "all threads must have parents");
  let a = e.getGuildId();
  if (null != a && null != g.Ay.getGuildSidebarState(a)) {
    s.h.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, h.N9)(e, {
      source: n
    }) : (0, h.iN)(e.id);
    return
  }
  let l = y.A.getChannelId();
  e.parent_id === l || (0, I.mP)(l) || (0, h.iN)(e.parent_id), (0, _.pX)(A.BVt.CHANNEL_THREAD_VIEW((0, u.j)(e), (0, I.mP)(l) ? I.VV.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? {
    source: v.H9.FORUM
  } : true), setTimeout(() => {
    O._.dispatch(A.jej.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function T(e, t, n) {
  if (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.zV)(A.HAw.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), f.Uw.dispatch(A.jej.POPOUT_CLOSE), y.A.getChannelId() !== e.id && (0, h.iN)(e.id), "" === E.A.getDraft(e.id, E.C.FirstThreadMessage)) {
    let t = E.A.getDraft(e.id, E.C.ChannelMessage);
    l.A.saveDraft(e.id, "", E.C.ChannelMessage), l.A.saveDraft(e.id, t, E.C.FirstThreadMessage)
  }
  setTimeout(() => {
    s.h.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? true : t.id,
      location: n
    })
  }, 0)
}

function C(e, t) {
  (0, _.pX)(A.BVt.CHANNEL(e, (0, I.mP)(t) ? I.VV.GUILD_HOME : t)), s.h.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function N(e) {
  s.h.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), s.h.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: E.C.FirstThreadMessage
  }), s.h.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: E.C.ThreadSettings
  })
}