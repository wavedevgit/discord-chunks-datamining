/** Chunk was on 84722 **/
/** chunk id: 430927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  T: () => h,
  o: () => d
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk287734 = require("./287734.js"),
  Chunk471253 = require("./471253.js"),
  Chunk922482 = require("./922482.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk765305 = require("./765305.js");
async function d(e, n) {
  let {
    entity_type: t
  } = e;
  switch (t) {
    case u.WX.STAGE_INSTANCE: {
      let n = o.Z.getChannelId(),
        t = c.Z.getChannel(e.channel_id);
      i()(null != t, "could not find channel"), n !== t.id && (await s.TM(t, true), await s.R5(t, null)), await (0, r.RK)(t, false, true);
      break
    }
    case u.WX.VOICE: {
      let n = o.Z.getChannelId(),
        t = c.Z.getChannel(e.channel_id);
      i()(null != t, "could not find channel"), n !== t.id && a.default.selectVoiceChannel(t.id)
    }
  }
}

function h(e, n) {
  let {
    entity_type: t
  } = e;
  switch (t) {
    case u.WX.STAGE_INSTANCE:
    case u.WX.VOICE:
    case u.WX.EXTERNAL:
      null == n || n()
  }
  return Promise.resolve()
}