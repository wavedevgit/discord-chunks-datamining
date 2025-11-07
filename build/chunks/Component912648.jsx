/** Chunk was on web.js **/
/** chunk id: 912648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk556019 = require("./556019.js"),
  Chunk256754 = require("./256754.jsx"),
  Chunk719403 = require("./719403.js"),
  Chunk806774 = require("./806774.js"),
  Chunk372129 = require("./372129.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    channel: t
  } = e, n = i.useRef(null), [E, b] = i.useState(false), y = (0, l.ZP)(s.Z.EMOJI_PICKER), [O, v] = i.useState(false), I = (0, a.e7)([h.Z], () => h.Z.getGuild(null == t ? true : t.guild_id)), S = (0, c.qt)({
    autoTrackExposure: false,
    location: s.Z.EMOJI_PICKER
  }), {
    availableEmojiSlots: T
  } = (0, d.t)({
    guild: null != I ? I : null
  }), {
    canCreateExpressions: A
  } = (0, p.XJ)(I), C = 0 === T || !A, N = !S.isSelectFileBeforeEmojiStudioExperimentEnabled && C, R = O || E || N, P = i.useCallback(async () => {
    if (R || S.isSelectFileBeforeEmojiStudioExperimentEnabled) return;
    if (v(true), S.enabled) {
      var e;
      await (0, u.i)({
        guildId: null != (e = null == t ? true : t.guild_id) ? e : null,
        analyticsLocation: {
          section: m.jXE.EXPRESSION_PICKER,
          page: (null == t ? true : t.guild_id) != null ? m.ZY5.GUILD_CHANNEL : m.ZY5.DM_CHANNEL
        }
      }), v(false);
      return
    }
    if (null == t) return void v(false);
    let n = S.isEntrypointOnlyExperimentEnabled || S.isEmojiEditingExperimentEnabled;
    f.Ku({
      guildId: t.guild_id,
      autoOpenFileInput: n,
      analyticsLocation: y
    }), v(false)
  }, [t, y, S, R]), w = i.useCallback(async (e, n, r) => {
    var i;
    v(true), await (0, u.i)({
      userImage: {
        data: e,
        file: n,
        image: r
      },
      guildId: null != (i = null == t ? true : t.guild_id) ? i : null,
      analyticsLocation: {
        section: m.jXE.EXPRESSION_PICKER,
        page: (null == t ? true : t.guild_id) != null ? m.ZY5.GUILD_CHANNEL : m.ZY5.DM_CHANNEL
      }
    }), v(false)
  }, [t]);
  return (0, r.jsxs)(o.zx, {
    "data-migration-pending": true,
    tabIndex: false,
    color: o.zx.Colors.PRIMARY,
    size: o.zx.Sizes.MEDIUM,
    onClick: P,
    disabled: R,
    submitting: E,
    focusProps: {
      within: true
    },
    children: [g.intl.string(g.t.iMJO37), S.isSelectFileBeforeEmojiStudioExperimentEnabled ? (0, r.jsx)(_.ZP, {
      ref: n,
      tabIndex: 0,
      disabled: R,
      onChange: w,
      setLoading: b
    }) : null]
  })
}