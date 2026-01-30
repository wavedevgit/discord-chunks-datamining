/** Chunk was on 64935 **/
/** chunk id: 420208, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => b
}), require("./896048.js"), require("./864466.js"), require("./443073.js"), require("./638769.js");
var Chunk843472 = require("./843472.js"),
  Chunk508675 = require("./508675.js"),
  Chunk451909 = require("./451909.js"),
  Chunk361670 = require("./361670.js"),
  Chunk631576 = require("./631576.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk690521 = require("./690521.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk381941 = require("./381941.js");

function h(e) {
  let t = u.A.getGuild(e);
  return null != t && (t.nsfwLevel === f.ftr.DEFAULT || t.nsfwLevel === f.ftr.SAFE)
}
async function b(e, t) {
  var n, f, b;
  let A = t.getGuildId();
  if (null == A || null == u.A.getGuild(A)) return;
  let y = d.default.getCurrentUser();
  if (null == y) return;
  await (0, s.YB)();
  let v = Array.from(o.A.getAllGuildStickers().values()).flat().filter(e => h(e.guild_id) && (0, a.G7)(e, y, t)).sort((e, t) => -m.default.compare(e.id, t.id));
  if (v.length > 5) {
    let n = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
    r.A.sendStickers(t.id, n, "", {
      messageReference: {
        guild_id: null != (f = t.getGuildId()) ? f : true,
        channel_id: t.id,
        message_id: e
      },
      location: _.Hx.CHANNEL_PROMPT
    });
    return
  }
  let x = u.A.getGuildIds().filter(h).map(e => i.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == p.Ay.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: A,
    intention: g.b_.CHAT
  })).sort((e, t) => -m.default.compare(e.id, t.id));
  if (x.length > 10) {
    let n = x[Math.floor(Math.pow(Math.random(), 2) * x.length)];
    r.A.sendMessage(t.id, l.Ay.parse(t, (0, p.N)(n)), false, {
      location: _.Hx.CHANNEL_PROMPT,
      messageReference: {
        guild_id: null != (b = t.getGuildId()) ? b : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let O = Array.from(o.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
    E = [O[Math.floor(Math.random() * O.length)].id];
  r.A.sendStickers(t.id, E, "", {
    messageReference: {
      guild_id: null != (n = t.getGuildId()) ? n : true,
      channel_id: t.id,
      message_id: e
    },
    location: _.Hx.CHANNEL_PROMPT
  })
}