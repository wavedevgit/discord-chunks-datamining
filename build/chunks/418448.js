/** Chunk was on 39048 **/
/** chunk id: 418448, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  bN: () => h,
  jr: () => b,
  nx: () => f
}), require("./896048.js"), require("./65821.js");
var Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk734057 = require("./734057.js"),
  Chunk403362 = require("./403362.js"),
  Chunk863694 = require("./863694.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  r.h.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function h(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function b(e) {
  let t = Array.from(d.A.editedDefaultChannelIds).filter(e => null != o.A.getChannel(e)),
    n = g.A.advancedMode,
    [f] = (0, a.ui)(e.id, [...t]),
    h = (0, a.G4)(e.id, t, g.A.editedOnboardingPrompts, a.VU);
  if (s.A.getEnabled(e.id) && (!n && f.length < m.Kd || n && h.length < m.Kd)) {
    if (i.A.show({
        title: p.intl.string(p.t.iLdiqY),
        body: p.intl.string(p.t.JOT74c)
      }), n) throw Error("Chattable channels with questions requirement not met");
    return
  }
  if (d.A.hasChanges()) {
    r.h.dispatch({
      type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT"
    });
    try {
      let i = n ? (0, u.xR)(e, {
          ignoreDefaultPrompt: true
        }) : null,
        l = null != i ? i.map(m.SA) : true;
      await (0, u.YN)(e.id, {
        default_channel_ids: t,
        prompts: l
      }), r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
        guildId: e.id,
        channelIds: t
      }), null != i && r.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
        guildId: e.id,
        updates: {
          prompts: i
        }
      })
    } catch (n) {
      var b;
      let {
        fieldName: e,
        error: t
      } = null != (b = new l.LG(n).getAnyErrorMessageAndField()) ? b : {};
      i.A.show({
        title: p.intl.string(p.t.iLdiqY),
        body: [e, t].filter(c.Vq).join(": ")
      }), r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}