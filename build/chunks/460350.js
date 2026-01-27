/** Chunk was on web.js **/
/** chunk id: 460350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => h
}), require("./896048.js"), require("./64700.js");
var Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk884384 = require("./884384.js"),
  Chunk101392 = require("./101392.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk565579 = require("./565579.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  i.A.show({
    title: f.intl.string(f.t.l8rYLt),
    body: f.intl.formatToPlainString(f.t.FfjF15, {
      currentLength: e,
      maxLength: t
    }),
    confirmText: f.intl.string(f.t.BddRzS)
  }), l.default.track(d.HAw.OPEN_MODAL, {
    type: "Message Too Long Alert",
    message_content_length: e
  })
}

function _(e) {
  var t;
  let {
    openWarningPopout: n,
    type: s,
    content: l,
    stickers: u,
    uploads: _,
    channel: h,
    restrictMentions: m,
    respectCooldown: g,
    userCanUsePremiumMessageLength: E,
    resolve: y
  } = e;
  if (0 === l.length && !(null == (t = s.submit) ? true : t.allowEmptyMessage) && (null == u || 0 === u.length) && (null == _ || 0 === _.length)) return void y({
    valid: false,
    failureReason: d.X8x.EMPTY_MESSAGE
  });
  let b = E ? d.CS1 : d.uvi,
    O = !E;
  if (l.length > b) {
    O && null != h ? r.h.dispatch({
      type: "MESSAGE_LENGTH_UPSELL",
      channel: h,
      content: l
    }) : p(l.length, b), y({
      valid: false,
      failureReason: d.X8x.MESSAGE_TOO_LONG
    });
    return
  }
  if (null != h) {
    if (null != h.getGuildId() && g && o.A.getSlowmodeCooldownGuess(h.id) > 0) return void y({
      valid: false,
      failureReason: d.X8x.SLOWMODE_COOLDOWN
    });
    if (null != n)
      for (let {
          check: e,
          analyticsType: t,
          animation: r
        }
        of c.m) {
        let i = e(l, h, m);
        if (false !== i) return void n({
          analyticsType: t,
          channel: h,
          onCancel: () => y({
            valid: false,
            failureReason: d.X8x.SHOUTING_CANCELLED
          }),
          onConfirm: () => y({
            valid: true
          }),
          popoutText: i,
          animation: r
        })
      }
  }
  if (a.Ay.isFull()) {
    i.A.show({
      title: f.intl.string(f.t["7Q4eo2"]),
      body: f.intl.string(f.t.gi6XHp),
      confirmText: f.intl.string(f.t["Z4U1g/"])
    }), y({
      valid: false,
      failureReason: d.X8x.RATE_LIMITED
    });
    return
  }
  y({
    valid: true
  })
}

function h(e) {
  let {
    openWarningPopout: t,
    type: n,
    content: r,
    stickers: i,
    uploads: a,
    channel: o,
    restrictMentions: l = true,
    respectCooldown: c = true
  } = e, d = u.Ay.canUseIncreasedMessageLength(s.default.getCurrentUser());
  return new Promise(e => _({
    openWarningPopout: t,
    type: n,
    content: r,
    stickers: i,
    uploads: a,
    channel: o,
    restrictMentions: l,
    respectCooldown: c,
    userCanUsePremiumMessageLength: d,
    resolve: e
  }))
}