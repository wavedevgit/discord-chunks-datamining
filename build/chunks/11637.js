/** Chunk was on web.js **/
/** chunk id: 11637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => p,
  hf: () => d
});
var Chunk763296 = require("./763296.js"),
  Chunk375954 = require("./375954.js"),
  Chunk768581 = require("./768581.js"),
  Chunk722932 = require("./722932.js"),
  Chunk801606 = require("./801606.js"),
  Chunk12327 = require("./12327.js"),
  Chunk277078 = require("./277078.js"),
  Chunk981631 = require("./981631.js");
let d = /^<sound:(\d+):(\d+)>/;

function f(e, t, n, o, l) {
  if (!a.zv.getCurrentConfig({
      location: "getSoundmojiASTFromString"
    }, {
      autoTrackExposure: false
    }).enabled) return;
  let d = r.Z.getSoundById(o),
    f = (0, c.Z)(d, e, t);
  if (null != n && null != t) {
    let e = (0, s.Z)(t, n, o, l);
    if (f && null == e) {
      let e = i.Z.getMessage(t, n);
      if ((null == e ? true : e.state) !== u.yb.SENT) return d
    }
    return e
  }
  if (f && null != d) return d
}

function p(e, t) {
  var n;
  let r = e[1],
    i = e[2],
    {
      guildId: a,
      channelId: s,
      messageId: c
    } = t,
    u = f(a, s, c, i, t.soundboardSounds);
  if (null == u) return {
    type: "text",
    content: (0, l.Z)(r, i)
  };
  let d = null != (n = null == u ? true : u.name) ? n : i;
  return {
    type: "soundboard",
    soundId: i,
    guildId: r,
    messageId: t.messageId,
    channelId: t.channelId,
    content: d,
    emojiId: null == u ? true : u.emojiId,
    emojiName: null == u ? true : u.emojiName,
    emojiSrc: (null == u ? true : u.emojiId) != null ? (0, o.gT)({
      id: null == u ? true : u.emojiId,
      animated: false,
      size: 16
    }) : true
  }
}