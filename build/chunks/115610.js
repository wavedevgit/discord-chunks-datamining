/** Chunk was on web.js **/
/** chunk id: 115610, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  Chunk185923 = require("./185923.js");
let m = 5,
  g = 10;

function E(e) {
  let t = u.Z.getGuild(e);
  return null != t && (t.nsfwLevel === p.V_K.DEFAULT || t.nsfwLevel === p.V_K.SAFE)
}
async function b(e, t) {
  var n, p, b;
  let y = t.getGuildId();
  if (null == y || null == u.Z.getGuild(y)) return;
  let O = d.default.getCurrentUser();
  if (null == O) return;
  await (0, s.$p)();
  let v = Array.from(l.Z.getAllStickersIterator()),
    I = v.filter(e => e.type === c.n0.GUILD).filter(e => E(e.guild_id) && (0, a.kl)(e, O, t)).sort((e, t) => -_.default.compare(e.id, t.id));
  if (I.length > m) {
    let i = [I[Math.floor(Math.pow(Math.random(), 2) * I.length)].id];
    r.Z.sendStickers(t.id, i, "", {
      messageReference: {
        guild_id: null != (n = t.getGuildId()) ? n : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let T = u.Z.getGuildIds().filter(E).map(e => i.ZP.getUsableGuildEmoji(e)).flat().filter(e => null == f.ZP.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: y,
    intention: h.Hz.CHAT
  })).sort((e, t) => -_.default.compare(e.id, t.id));
  if (T.length > g) {
    let n = T[Math.floor(Math.pow(Math.random(), 2) * T.length)];
    r.Z.sendMessage(t.id, o.ZP.parse(t, n.allNamesString), false, {
      messageReference: {
        guild_id: null != (p = t.getGuildId()) ? p : true,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let S = v.filter(e => e.type === c.n0.STANDARD),
    A = [S[Math.floor(Math.random() * S.length)].id];
  r.Z.sendStickers(t.id, A, "", {
    messageReference: {
      guild_id: null != (b = t.getGuildId()) ? b : true,
      channel_id: t.id,
      message_id: e
    }
  })
}