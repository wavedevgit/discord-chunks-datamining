/** Chunk was on web.js **/
/** chunk id: 652364, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./321073.js");
var Chunk439372 = require("./439372.js"),
  Chunk508675 = require("./508675.js"),
  Chunk734057 = require("./734057.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk746080 = require("./746080.js"),
  Chunk732139 = require("./732139.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Worker(new URL("/assets/" + require.u("79908"), require.b));

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
    t.push(s.Ay.getEmojiURL({
      id: n.emojiId,
      animated: null != (r = null == (a = i.Ay.getUsableCustomEmojiById(n.emojiId)) ? true : a.animated) && r,
      size: c.Ec.reaction
    }))
  } else(null == n ? true : n.emojiName) != null && t.push(o.Ay.getURL(n.emojiName));
  return e.availableTags.forEach(e => {
    null != e.emojiId ? t.push(s.Ay.getEmojiURL({
      id: e.emojiId,
      animated: false,
      size: c.Ec.reaction
    })) : null != e.emojiName && t.push(o.Ay.getURL(e.emojiName))
  }), t
}
class _ extends Chunk439372.A {
  handleChannelPreload(e) {
    let {
      channelId: t
    } = e;
    if ((0, l.jq)(t)) return;
    let n = a.A.getChannel(t);
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
let h = new _