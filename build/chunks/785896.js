/** Chunk was on web.js **/
/** chunk id: 785896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk430824 = require("./430824.js"),
  Chunk339085 = require("./339085.js"),
  Chunk906411 = require("./906411.js"),
  Chunk231053 = require("./231053.js"),
  Chunk981631 = require("./981631.js");
let u = (e, t, n) => {
    let r = null != n ? e.getCustomEmojiById(n) : null;
    return (null == r ? true : r.type) === s.B.GUILD ? {
      emoji: r,
      joinedEmojiSourceGuildRecord: t.getGuild(null == r ? true : r.guildId)
    } : {
      emoji: null,
      joinedEmojiSourceGuildRecord: null
    }
  },
  d = e => {
    let {
      emojiId: t,
      refreshPositionKey: n
    } = e, {
      joinedEmojiSourceGuildRecord: s,
      emoji: d
    } = (0, i.cj)([o.ZP, a.Z], () => u(o.ZP, a.Z, t)), f = null != s, _ = null != s && s.features.has(c.GuildFeatures.DISCOVERABLE), p = (!f || _) && null != t, [h, m] = r.useState(p), [g, E] = r.useState(null), b = null != s ? l.JO.createFromGuildRecord(s) : null, [y, O] = r.useState(b), [v, I] = r.useState(null), T = r.useRef(n);
    return r.useEffect(() => {
      T.current = n
    }), r.useEffect(() => {
      var e, n;
      null == (e = T.current) || e.call(T);
      let r = async () => {
        var e;
        let n = null != t ? await (0, l.Fi)(t) : null;
        if (null != n) switch (E(n.type), n.type) {
          case l.w6.APPLICATION:
            I(n.application);
            break;
          case l.w6.GUILD:
            O(n.guild)
        }
        m(false), null == (e = T.current) || e.call(T)
      };
      if (p) return void r();
      null == (n = T.current) || n.call(T)
    }, [t, p]), {
      expressionSourceGuild: y,
      expressionSourceApplication: v,
      sourceType: g,
      joinedEmojiSourceGuildRecord: s,
      hasJoinedEmojiSourceGuild: f,
      emoji: d,
      isFetching: h
    }
  }