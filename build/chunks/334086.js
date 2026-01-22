/** Chunk was on 77223 **/
/** chunk id: 334086, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  $: () => d,
  c: () => h
});
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk956793 = require("./956793.js"),
  Chunk849736 = require("./849736.js"),
  Chunk323443 = require("./323443.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk988794 = require("./988794.js");
async function d(e, n) {
  let {
    entity_type: l
  } = e;
  switch (l) {
    case u.Ps.STAGE_INSTANCE: {
      let n = o.A.getChannelId(),
        l = c.A.getChannel(e.channel_id);
      i()(null != l, "could not find channel"), n !== l.id && (await r.cy(l, true), await r.jA(l, null)), await (0, a.e7)(l, false, true);
      break
    }
    case u.Ps.VOICE: {
      let n = o.A.getChannelId(),
        l = c.A.getChannel(e.channel_id);
      i()(null != l, "could not find channel"), n !== l.id && s.default.selectVoiceChannel(l.id)
    }
  }
}

function h(e, n) {
  let {
    entity_type: l
  } = e;
  switch (l) {
    case u.Ps.STAGE_INSTANCE:
    case u.Ps.VOICE:
    case u.Ps.EXTERNAL:
      null == n || n()
  }
  return Promise.resolve()
}