/** Chunk was on web.js **/
/** chunk id: 488131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NK: () => N,
  R6: () => C,
  ok: () => T,
  vN: () => A
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk430742 = require("./430742.js"),
  Chunk367907 = require("./367907.js"),
  Chunk727429 = require("./727429.js"),
  Chunk927723 = require("./927723.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk982168 = require("./982168.js"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk695346 = require("./695346.js"),
  Chunk433355 = require("./433355.js"),
  Chunk703558 = require("./703558.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function T(e, t, n) {
  if (!(0, p.WF)(e.id)) return void(0, d.V)();
  f.UI.dispatch(S.CkL.POPOUT_CLOSE);
  let r = !o().isEmpty(y.Z.getVoiceStatesForChannel(e.id));
  if (t || !h.vF.getSetting() || __OVERLAY__ || r) {
    s.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, m.ad)(e, {
      source: n
    }) : (0, m.Kh)(e.id);
    return
  }
  i()(null != e.parent_id, "all threads must have parents");
  let a = e.getGuildId();
  if (null != a && null != g.ZP.getGuildSidebarState(a)) {
    s.Z.dispatch({
      type: "SIDEBAR_CLOSE",
      baseChannelId: e.parent_id
    }), null != n ? (0, m.ad)(e, {
      source: n
    }) : (0, m.Kh)(e.id);
    return
  }
  let l = b.Z.getChannelId();
  e.parent_id === l || (0, I.ME)(l) || (0, m.Kh)(e.parent_id), (0, _.uL)(S.Z5c.CHANNEL_THREAD_VIEW((0, u.e)(e), (0, I.ME)(l) ? I.oC.GUILD_HOME : e.parent_id, e.id), e.isForumPost() ? {
    source: v.on.FORUM
  } : true), setTimeout(() => {
    O.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
      channelId: e.id
    })
  }, 0)
}

function C(e, t, n) {
  if (i()(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), i()(!__OVERLAY__, "Cannot create threads in the overlay."), (0, c.yw)(S.rMx.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), f.UI.dispatch(S.CkL.POPOUT_CLOSE), b.Z.getChannelId() !== e.id && (0, m.Kh)(e.id), "" === E.Z.getDraft(e.id, E.d.FirstThreadMessage)) {
    let t = E.Z.getDraft(e.id, E.d.ChannelMessage);
    l.Z.saveDraft(e.id, "", E.d.ChannelMessage), l.Z.saveDraft(e.id, t, E.d.FirstThreadMessage)
  }
  setTimeout(() => {
    s.Z.dispatch({
      type: "SIDEBAR_CREATE_THREAD",
      parentChannelId: e.id,
      parentMessageId: null == t ? true : t.id,
      location: n
    })
  }, 0)
}

function A(e, t) {
  (0, _.uL)(S.Z5c.CHANNEL(e, (0, I.ME)(t) ? I.oC.GUILD_HOME : t)), s.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: t
  })
}

function N(e) {
  s.Z.dispatch({
    type: "SIDEBAR_CLOSE",
    baseChannelId: e
  }), s.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: E.d.FirstThreadMessage
  }), s.Z.dispatch({
    type: "DRAFT_CLEAR",
    channelId: e,
    draftType: E.d.ThreadSettings
  })
}