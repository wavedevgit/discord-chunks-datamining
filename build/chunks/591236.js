/** Chunk was on web.js **/
/** chunk id: 591236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk588468 = require("./588468.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx");
let p = 50;

function _(e) {
  return "".concat(c.a4).concat(e.name).concat(c.jp)
}
let m = {
  sentinel: Chunk761652.a4,
  matches(e, t, n, r, i) {
    var o, s;
    return r && null != (s = null == (o = i.chatInputType.autocomplete) ? true : o.addReactionShortcut) && s && (a.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate())
  },
  queryResults(e, t, n, r, i) {
    let {
      emojis: a
    } = o.ZP.queryEmojiResults({
      query: n,
      channel: e,
      intention: d.Hz.REACTION,
      maxCount: p
    });
    return {
      results: {
        emojis: a.unlocked
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t
      },
      selectedIndex: n,
      query: a,
      onHover: o,
      onClick: l
    } = e;
    return (0, s.HI)({
      query: a,
      selectedIndex: n,
      autocompletes: t,
      onHover: o,
      onClick: l,
      titleWithQuery: f.t.o1Nmpc,
      titleWithoutQuery: f.intl.string(f.t.sMOuuS),
      Component: r.ZP.Emoji,
      getProps: e => ({
        emoji: e,
        key: e.id || e.uniqueName || e.name,
        sentinel: c.Iv,
        guild: null != e.guildId ? i.Z.getGuild(e.guildId) : null
      }),
      getQuery: e => "".concat(c.a4).concat(e),
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
    return r.sendMessage(_(i)), {
      type: l.z2.REACTION
    }
  }
}