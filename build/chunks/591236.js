/** Chunk was on web.js **/
/** chunk id: 591236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk588468 = require("./588468.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  return "".concat(l.a4).concat(e.name).concat(l.jp)
}
let p = {
  sentinel: Chunk761652.a4,
  matches(e, t, n, r, a) {
    var o, s;
    return r && null != (s = null == (o = a.chatInputType.autocomplete) ? true : o.addReactionShortcut) && s && (i.Z.can(c.Plq.ADD_REACTIONS, e) || e.isPrivate())
  },
  queryResults(e, t, n, r, i) {
    let {
      emojis: o
    } = a.ZP.queryEmojiResults({
      query: n,
      channel: e,
      intention: u.Hz.REACTION
    });
    return {
      results: {
        emojis: o.unlocked
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t
      },
      selectedIndex: n,
      query: i,
      onHover: a,
      onClick: s
    } = e;
    return (0, o.HI)({
      query: i,
      selectedIndex: n,
      autocompletes: t,
      onHover: a,
      onClick: s,
      titleWithQuery: d.t.o1Nmpc,
      titleWithoutQuery: d.intl.string(d.t.sMOuuS),
      Component: r.ZP.Emoji,
      getProps: e => ({
        emoji: e,
        key: e.id || e.uniqueName || e.name,
        sentinel: l.Iv
      }),
      getQuery: e => "".concat(l.a4).concat(e),
      key: "reactions"
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t
      },
      index: n,
      options: r
    } = e, i = t[n];
    return r.sendMessage(f(i)), {
      type: s.z2.REACTION
    }
  }
}