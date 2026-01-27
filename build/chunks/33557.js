/** Chunk was on web.js **/
/** chunk id: 33557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk580424 = require("./580424.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx");
let f = 50;

function p(e) {
  return "".concat("+:").concat(e.name).concat(":")
}
let _ = {
  sentinel: "+:",
  matches(e, t, n, r, i) {
    var o, s;
    return r && null != (o = null == (s = i.chatInputType.autocomplete) ? true : s.addReactionShortcut) && o && (a.A.can(c.xBc.ADD_REACTIONS, e) || e.isPrivate())
  },
  queryResults(e, t, n, r, i) {
    let {
      emojis: a
    } = o.Ay.queryEmojiResults({
      query: n,
      channel: e,
      intention: u.b_.REACTION,
      maxCount: f
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
    return (0, s.GM)({
      query: a,
      selectedIndex: n,
      autocompletes: t,
      onHover: o,
      onClick: l,
      titleWithQuery: d.t.o1Nmpc,
      titleWithoutQuery: d.intl.string(d.t.sMOuuS),
      Component: r.Ay.Emoji,
      getProps: e => ({
        emoji: e,
        key: e.id || e.uniqueName || e.name,
        sentinel: ":",
        guild: null != e.guildId ? i.A.getGuild(e.guildId) : null
      }),
      getQuery: e => "".concat("+:").concat(e),
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
    return r.sendMessage(p(i)), {
      type: l.kc.REACTION
    }
  }
}