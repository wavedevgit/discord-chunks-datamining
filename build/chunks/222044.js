/** Chunk was on web.js **/
/** chunk id: 222044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./539854.js");
var Chunk147913 = require("./147913.js"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk176505 = require("./176505.js"),
  Chunk149203 = require("./149203.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Worker(new URL("/assets/" + require.u("80493"), require.b));

function f(e) {
  return new Promise(t => {
    let n = r => {
      let {
        data: {
          url: i
        }
      } = r;
      null == d || d.removeEventListener("message", n), e === i && t()
    };
    null == d || d.addEventListener("message", n), null == d || d.postMessage({
      url: e
    })
  })
}

function p(e) {
  let t = [],
    n = e.defaultReactionEmoji;
  if ((null == n ? true : n.emojiId) != null) {
    var r, a;
    t.push(o.ZP.getEmojiURL({
      id: n.emojiId,
      animated: null != (a = null == (r = i.ZP.getUsableCustomEmojiById(n.emojiId)) ? true : r.animated) && a,
      size: c.kV.reaction
    }))
  } else(null == n ? true : n.emojiName) != null && t.push(s.ZP.getURL(n.emojiName));
  return e.availableTags.forEach(e => {
    null != e.emojiId ? t.push(o.ZP.getEmojiURL({
      id: e.emojiId,
      animated: false,
      size: c.kV.reaction
    })) : null != e.emojiName && t.push(s.ZP.getURL(e.emojiName))
  }), t
}
class _ extends Chunk147913.Z {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, l.AB)(t)) return;
    let n = a.Z.getChannel(t);
    null != n && n.isForumLikeChannel() && p(n).forEach(e => {
      null != e && 0 !== e.length && f(e)
    })
  }
  constructor(...e) {
    super(...e), u(this, "actions", {
      CHANNEL_PRELOAD: this.handleChannelPreload
    })
  }
}
let m = new _