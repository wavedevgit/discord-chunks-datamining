/** Chunk was on web.js **/
/** chunk id: 695282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => d
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk71393 = require("./71393.js"),
  Chunk508675 = require("./508675.js"),
  Chunk770335 = require("./770335.js"),
  Chunk624793 = require("./624793.js"),
  Chunk652215 = require("./652215.js");
let u = (e, t, n) => {
    let r = null != n ? e.getCustomEmojiById(n) : null;
    return (null == r ? true : r.type) === o.i.GUILD ? {
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
      joinedEmojiSourceGuildRecord: o,
      emoji: d
    } = (0, i.cf)([s.Ay, a.A], () => u(s.Ay, a.A, t)), f = null != o, p = null != o && o.features.has(c.GuildFeatures.DISCOVERABLE), _ = (!f || p) && null != t, [h, m] = r.useState(_), [g, E] = r.useState(null), y = null != o ? l.GO.createFromGuildRecord(o) : null, [b, O] = r.useState(y), [v, A] = r.useState(null), I = r.useRef(n);
    return r.useEffect(() => {
      I.current = n
    }), r.useEffect(() => {
      var e, n;
      null == (e = I.current) || e.call(I);
      let r = async () => {
        var e;
        let n = null != t ? await (0, l.g_)(t) : null;
        if (null != n) switch (E(n.type), n.type) {
          case l.rV.APPLICATION:
            A(n.application);
            break;
          case l.rV.GUILD:
            O(n.guild)
        }
        m(false), null == (e = I.current) || e.call(I)
      };
      _ ? r() : null == (n = I.current) || n.call(I)
    }, [t, _]), {
      expressionSourceGuild: b,
      expressionSourceApplication: v,
      sourceType: g,
      joinedEmojiSourceGuildRecord: o,
      hasJoinedEmojiSourceGuild: f,
      emoji: d,
      isFetching: h
    }
  }