/** Chunk was on web.js **/
/** chunk id: 335432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => p,
  ds: () => d
});
var Chunk209932 = require("./209932.js"),
  Chunk320501 = require("./320501.js"),
  Chunk486020 = require("./486020.js"),
  Chunk864145 = require("./864145.js"),
  Chunk470020 = require("./470020.js"),
  Chunk937862 = require("./937862.js"),
  Chunk69945 = require("./69945.js"),
  Chunk652215 = require("./652215.js");
let d = /^<sound:(\d+):(\d+)>/;

function f(e, t, n, a, l) {
  if (!s.UL.getCurrentConfig({
      location: "getSoundmojiASTFromString"
    }, {
      autoTrackExposure: false
    }).enabled) return;
  let d = r.A.getSoundById(a),
    f = (0, c.A)(d, e, t);
  if (null != n && null != t) {
    let e = (0, o.A)(t, n, a, l);
    if (f && null == e) {
      let e = i.A.getMessage(t, n);
      if ((null == e ? true : e.state) !== u.cmJ.SENT) return d
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
      guildId: s,
      channelId: o,
      messageId: c
    } = t,
    u = f(s, o, c, i, t.soundboardSounds);
  if (null == u) return {
    type: "text",
    content: (0, l.A)(r, i)
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
    emojiSrc: (null == u ? true : u.emojiId) != null ? (0, a._O)({
      id: null == u ? true : u.emojiId,
      animated: false,
      size: 16
    }) : true
  }
}