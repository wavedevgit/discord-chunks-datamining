/** Chunk was on web.js **/
/** chunk id: 420208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => y
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

function b(e) {
  let t = u.A.getGuild(e);
  return null != t && (t.nsfwLevel === _.ftr.DEFAULT || t.nsfwLevel === _.ftr.SAFE)
}
async function y(e, t) {
  var n, _, y;
  let O = t.getGuildId();
  if (null == O || null == u.A.getGuild(O)) return;
  let A = d.default.getCurrentUser();
  if (null == A) return;
  await (0, o.YB)();
  let v = Array.from(l.A.getAllGuildStickers().values()).flat().filter(e => b(e.guild_id) && (0, s.G7)(e, A, t)).sort((e, t) => -p.default.compare(e.id, t.id));
  if (v.length > g) {
    let n = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
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
  let S = u.A.getGuildIds().filter(b).map(e => i.Ay.getUsableGuildEmoji(e)).flat().filter(e => null == f.Ay.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: O,
    intention: h.b_.CHAT
  })).sort((e, t) => -p.default.compare(e.id, t.id));
  if (S.length > E) {
    let n = S[Math.floor(Math.pow(Math.random(), 2) * S.length)];
    r.A.sendMessage(t.id, a.Ay.parse(t, (0, f.N)(n)), false, {
      location: m.Hx.CHANNEL_PROMPT,
      messageReference: {
        guild_id: null != (y = t.getGuildId()) ? y : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let I = Array.from(l.A.getAllPackStickers().values()).flat().filter(e => e.type === c.NL.STANDARD),
    T = [I[Math.floor(Math.random() * I.length)].id];
  r.A.sendStickers(t.id, T, "", {
    messageReference: {
      guild_id: null != (n = t.getGuildId()) ? n : true,
      channel_id: t.id,
      message_id: e
    },
    location: m.Hx.CHANNEL_PROMPT
  })
}