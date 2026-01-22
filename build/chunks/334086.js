/** Chunk was on 77223 **/
/** chunk id: 334086, original params: e,n,t (module,exports,require) **/
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
    entity_type: t
  } = e;
  switch (t) {
    case u.Ps.STAGE_INSTANCE: {
      let n = o.A.getChannelId(),
        t = c.A.getChannel(e.channel_id);
      i()(null != t, "could not find channel"), n !== t.id && (await a.cy(t, true), await a.jA(t, null)), await (0, r.e7)(t, false, true);
      break
    }
    case u.Ps.VOICE: {
      let n = o.A.getChannelId(),
        t = c.A.getChannel(e.channel_id);
      i()(null != t, "could not find channel"), n !== t.id && s.default.selectVoiceChannel(t.id)
    }
  }
}

function h(e, n) {
  let {
    entity_type: t
  } = e;
  switch (t) {
    case u.Ps.STAGE_INSTANCE:
    case u.Ps.VOICE:
    case u.Ps.EXTERNAL:
      null == n || n()
  }
  return Promise.resolve()
}