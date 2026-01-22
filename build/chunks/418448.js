/** Chunk was on 47841 **/
/** chunk id: 418448, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  bN: () => p,
  jr: () => x,
  nx: () => m
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

function m() {
  r.h.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET"
  })
}

function p(e) {
  r.h.dispatch({
    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
    channelId: e
  })
}
async function x(e) {
  let t = Array.from(d.A.editedDefaultChannelIds).filter(e => null != c.A.getChannel(e)),
    n = f.A.advancedMode,
    [m] = (0, a.ui)(e.id, [...t]),
    p = (0, a.G4)(e.id, t, f.A.editedOnboardingPrompts, a.VU);
  if (s.A.getEnabled(e.id) && (!n && m.length < g.Kd || n && p.length < g.Kd)) {
    if (i.A.show({
        title: b.intl.string(b.t.iLdiqY),
        body: b.intl.string(b.t.JOT74c)
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
        l = null != i ? i.map(g.SA) : true;
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
      var x;
      let {
        fieldName: e,
        error: t
      } = null != (x = new l.LG(n).getAnyErrorMessageAndField()) ? x : {};
      i.A.show({
        title: b.intl.string(b.t.iLdiqY),
        body: [e, t].filter(o.Vq).join(": ")
      }), r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED"
      })
    }
  }
}