/** Chunk was on web.js **/
/** chunk id: 420208, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
let g = 5,
  E = 10;

function y(e) {
  let t = u.A.getGuild(e);
  return null != t && (t.nsfwLevel === _.ftr.DEFAULT || t.nsfwLevel === _.ftr.SAFE)
}
async function b(e, t) {
  var n, _, b;
  let O = t.getGuildId();
  if (null == O || null == u.A.getGuild(O)) return;
  let v = d.default.getCurrentUser();
  if (null == v) return;
  await (0, o.YB)();
  let A = Array.from(l.A.getAllGuildStickers().values()).flat().filter(e => y(e.guild_id) && (0, s.G7)(e, v, t)).sort((e, t) => -p.default.compare(e.id, t.id));
  if (A.length > g) {
    let n = [A[Math.floor(Math.pow(Math.random(), 2) * A.length)].id];
    r.A.sendStickers(t.id, n, "", {
      messageReference: {
        guild_id: null != (_ = t.getGuildId()) ? _ : true,
        channel_id: t.id,
        message_id: e
      },
      location: m.Hx.CHANNEL_PROMPT
    });
    return
  }
  let I = u.A.getGuildIds().filter(y).map(e => i.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == f.Ay.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: O,
    intention: h.b_.CHAT
  })).sort((e, t) => -p.default.compare(e.id, t.id));
  if (I.length > E) {
    let n = I[Math.floor(Math.pow(Math.random(), 2) * I.length)];
    r.A.sendMessage(t.id, a.Ay.parse(t, (0, f.N)(n)), false, {
      location: m.Hx.CHANNEL_PROMPT,
      messageReference: {
        guild_id: null != (b = t.getGuildId()) ? b : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let S = Array.from(l.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
    T = [S[Math.floor(Math.random() * S.length)].id];
  r.A.sendStickers(t.id, T, "", {
    messageReference: {
      guild_id: null != (n = t.getGuildId()) ? n : true,
      channel_id: t.id,
      message_id: e
    },
    location: m.Hx.CHANNEL_PROMPT
  })
}