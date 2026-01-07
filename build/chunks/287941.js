/** Chunk was on web.js **/
/** chunk id: 287941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => f,
  Z: () => m
});
var Chunk570140 = require("./570140.js"),
  Chunk607070 = require("./607070.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823961 = require("./823961.js"),
  Chunk992970 = require("./992970.js"),
  Chunk111810 = require("./111810.js"),
  Chunk235894 = require("./235894.js"),
  Chunk981631 = require("./981631.js");
let d = () => {
    let e = true;
    return n(451478).Z.isFocused()
  },
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      i = arguments.length > 3 ? arguments[3] : true;
    if (!d()) return;
    let o = null == e.id,
      {
        shouldPlay: l,
        failureReason: c
      } = _(n);
    a.default.track(u.rMx.CONFETTI_POTION_TRIGGERED, {
      emoji_type: o ? s.aK.Unicode : s.aK.UserCreated,
      will_play: l,
      failure_reason: c,
      location: i
    }), l && r.Z.dispatch({
      type: "POTIONS_TRIGGER_MESSAGE_CONFETTI",
      emoji: e,
      boundingRect: t
    })
  },
  p = (e, t) => {
    let n = l.HZ.getCurrentConfig({
      location: "TriggerConfetti"
    }, {
      autoTrackExposure: false
    }).canSeeConfetti;
    return o.Z.confettiMode || t ? n ? i.Z.useReducedMotion ? {
      shouldPlay: false,
      failureReason: s.U0.ReducedMotion
    } : null == (0, c.Eq)(e) ? {
      shouldPlay: false,
      failureReason: s.U0.NoValidPotion
    } : {
      shouldPlay: true,
      failureReason: s.U0.None
    } : {
      shouldPlay: false,
      failureReason: s.U0.NotInExperiment
    } : {
      shouldPlay: false,
      failureReason: s.U0.NotInConfettiMode
    }
  },
  _ = e => {
    let t = l.HZ.getCurrentConfig({
      location: "TriggerConfetti"
    }, {
      autoTrackExposure: false
    }).canSeeConfetti;
    return o.Z.confettiMode || e ? t ? i.Z.useReducedMotion ? {
      shouldPlay: false,
      failureReason: s.U0.ReducedMotion
    } : {
      shouldPlay: true,
      failureReason: s.U0.None
    } : {
      shouldPlay: false,
      failureReason: s.U0.NotInExperiment
    } : {
      shouldPlay: false,
      failureReason: s.U0.NotInConfettiMode
    }
  },
  m = function(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      i = arguments.length > 2 && true !== arguments[2] && arguments[2],
      o = arguments.length > 3 ? arguments[3] : true;
    if (!d()) return;
    let l = (0, c.Eq)(e),
      f = (null == l || null == (t = l.emoji) ? true : t[0].id) == null,
      {
        shouldPlay: _,
        failureReason: m
      } = p(e, i);
    a.default.track(u.rMx.CONFETTI_POTION_TRIGGERED, {
      emoji_type: f ? s.aK.Unicode : s.aK.UserCreated,
      will_play: _,
      failure_reason: m,
      location: o
    }), _ && null != l && l.emoji.forEach(e => {
      r.Z.dispatch({
        type: "POTIONS_TRIGGER_MESSAGE_CONFETTI",
        emoji: e,
        boundingRect: n
      })
    })
  }