/** Chunk was on 91173 **/
/** chunk id: 115610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
}), require("./642613.js"), require("./472816.js"), require("./794429.js");
var Chunk904245 = require("./904245.js"),
  Chunk339085 = require("./339085.js"),
  Chunk957730 = require("./957730.js"),
  Chunk285651 = require("./285651.js"),
  Chunk268350 = require("./268350.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk176354 = require("./176354.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk959517 = require("./959517.js");

function h(e) {
  let t = u.Z.getGuild(e);
  return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE)
}
async function b(e, t) {
  var n, f, b;
  let E = t.getGuildId();
  if (null == E || null == u.Z.getGuild(E)) return;
  let C = d.default.getCurrentUser();
  if (null == C) return;
  await (0, o.$p)();
  let v = Array.from(s.Z.getAllStickersIterator()),
    O = v.filter(e => e.type === c.n0.GUILD).filter(e => h(e.guild_id) && (0, a.kl)(e, C, t)).sort((e, t) => -m.default.compare(e.id, t.id));
  if (O.length > 5) {
    let i = [O[Math.floor(Math.pow(Math.random(), 2) * O.length)].id];
    r.Z.sendStickers(t.id, i, "", {
      messageReference: {
        guild_id: null != (n = t.getGuildId()) ? n : true,
        channel_id: t.id,
        message_id: e
      },
      location: _.dy.CHANNEL_PROMPT
    });
    return
  }
  let y = u.Z.getGuildIds().filter(h).map(e => i.ZP.getUsableGuildEmoji(e)).flat().filter(e => null == p.ZP.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: E,
    intention: g.Hz.CHAT
  })).sort((e, t) => -m.default.compare(e.id, t.id));
  if (y.length > 10) {
    let n = y[Math.floor(Math.pow(Math.random(), 2) * y.length)];
    r.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), false, {
      location: _.dy.CHANNEL_PROMPT,
      messageReference: {
        guild_id: null != (f = t.getGuildId()) ? f : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let x = v.filter(e => e.type === c.n0.STANDARD),
    j = [x[Math.floor(Math.random() * x.length)].id];
  r.Z.sendStickers(t.id, j, "", {
    messageReference: {
      guild_id: null != (b = t.getGuildId()) ? b : true,
      channel_id: t.id,
      message_id: e
    },
    location: _.dy.CHANNEL_PROMPT
  })
}