/** Chunk was on web.js **/
/** chunk id: 115610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => y
}), require("./388685.js"), require("./472816.js"), require("./794429.js"), require("./642613.js");
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
let g = 5,
  E = 10;

function b(e) {
  let t = u.Z.getGuild(e);
  return null != t && (t.nsfwLevel === _.V_K.DEFAULT || t.nsfwLevel === _.V_K.SAFE)
}
async function y(e, t) {
  var n, _, y;
  let O = t.getGuildId();
  if (null == O || null == u.Z.getGuild(O)) return;
  let v = d.default.getCurrentUser();
  if (null == v) return;
  await (0, s.$p)();
  let S = Array.from(l.Z.getAllGuildStickers().values()).flat().filter(e => b(e.guild_id) && (0, o.kl)(e, v, t)).sort((e, t) => -p.default.compare(e.id, t.id));
  if (S.length > g) {
    let i = [S[Math.floor(Math.pow(Math.random(), 2) * S.length)].id];
    r.Z.sendStickers(t.id, i, "", {
      messageReference: {
        guild_id: null != (n = t.getGuildId()) ? n : true,
        channel_id: t.id,
        message_id: e
      },
      location: h.dy.CHANNEL_PROMPT
    });
    return
  }
  let I = u.Z.getGuildIds().filter(b).map(e => i.ZP.getUsableGuildEmoji(e)).flat().filter(e => null == f.ZP.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: O,
    intention: m.Hz.CHAT
  })).sort((e, t) => -p.default.compare(e.id, t.id));
  if (I.length > E) {
    let n = I[Math.floor(Math.pow(Math.random(), 2) * I.length)];
    r.Z.sendMessage(t.id, a.ZP.parse(t, (0, f.nY)(n)), false, {
      location: h.dy.CHANNEL_PROMPT,
      messageReference: {
        guild_id: null != (_ = t.getGuildId()) ? _ : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let T = Array.from(l.Z.getAllPackStickers().values()).flat().filter(e => e.type === c.n0.STANDARD),
    A = [T[Math.floor(Math.random() * T.length)].id];
  r.Z.sendStickers(t.id, A, "", {
    messageReference: {
      guild_id: null != (y = t.getGuildId()) ? y : true,
      channel_id: t.id,
      message_id: e
    },
    location: h.dy.CHANNEL_PROMPT
  })
}