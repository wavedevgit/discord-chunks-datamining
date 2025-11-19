/** Chunk was on 384 **/
/** chunk id: 743475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BG: () => f,
  DO: () => b,
  pt: () => h
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk592125 = require("./592125.js"),
  Chunk823379 = require("./823379.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  Chunk570140.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function h(e) {
  r.Z.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function b(e) {
  let t = Array.from(d.Z.editedDefaultChannelIds).filter(e => null != o.Z.getChannel(e)),
    n = g.Z.advancedMode,
    [f, h] = (0, s.d9)(e.id, [...t]),
    b = (0, s.kl)(e.id, t, g.Z.editedOnboardingPrompts),
    x = (0, s.kl)(e.id, t, g.Z.editedOnboardingPrompts, s.V7);
  if (a.Z.getEnabled(e.id) && (!n && (h.length < m.md || f.length < m.X) || n && (b.length < m.md || x.length < m.X))) return void i.Z.show({
    title: p.intl.string(p.t.iLdiqY),
    body: p.intl.string(p.t.JOT74c)
  });
  if (d.Z.hasChanges()) {
    r.Z.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      await (0, u.n_)(e.id, {
        default_channel_ids: t
      }), r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: t
      })
    } catch (n) {
      var j;
      let {
        fieldName: e,
        error: t
      } = null != (j = new l.Hx(n).getAnyErrorMessageAndField()) ? j : {};
      i.Z.show({
        title: p.intl.string(p.t.iLdiqY),
        body: [e, t].filter(c.lm).join(": ")
      }), r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}