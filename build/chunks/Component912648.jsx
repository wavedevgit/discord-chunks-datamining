/** Chunk was on web.js **/
/** chunk id: 912648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk556019 = require("./556019.js"),
  Chunk256754 = require("./256754.jsx"),
  Chunk719403 = require("./719403.js"),
  Chunk806774 = require("./806774.js"),
  Chunk357156 = require("./357156.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t
  } = e, n = (0, l.ZP)(s.Z.EMOJI_PICKER), [g, E] = i.useState(false), b = (0, o.e7)([p.Z], () => p.Z.getGuild(null == t ? true : t.guild_id)), y = (0, c.qt)({
    autoTrackExposure: false,
    location: s.Z.EMOJI_PICKER
  }), {
    availableEmojiSlots: O
  } = (0, d.t)({
    guild: null != b ? b : null
  }), {
    canCreateExpressions: v
  } = (0, _.XJ)(b), I = g || 0 === O || !v, T = i.useCallback(async () => {
    if (!I) {
      if (E(true), y.enabled) {
        await (0, u.i)({
          analyticsLocation: {
            section: h.jXE.EXPRESSION_PICKER,
            page: (null == t ? true : t.guild_id) != null ? h.ZY5.GUILD_CHANNEL : h.ZY5.DM_CHANNEL
          }
        }), E(false);
        return
      }
      if (null == t) return void E(false);
      f.K({
        guildId: t.guild_id,
        autoOpenFileInput: y.isEntrypointExperimentEnabled,
        analyticsLocation: n
      }), E(false)
    }
  }, [t, n, y, I]);
  return (0, r.jsx)(a.z, {
    variant: "secondary",
    size: "md",
    onClick: T,
    text: m.intl.string(m.t.iMJO39),
    disabled: I
  })
}