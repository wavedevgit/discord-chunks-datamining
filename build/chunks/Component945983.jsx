/** Chunk was on 52590 **/
/** chunk id: 945983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./467055.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk818083 = require("./818083.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let j = (0, Chunk818083.B)({
  kind: "user",
  id: "2022-02_guild_folder_mute",
  label: "Guild Folder Mute",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function g(e, t) {
  let {
    enabled: n
  } = j.useExperiment({
    location: "74d87e_1"
  }, {
    autoTrackExposure: false
  }), i = (0, a.cj)([b.ZP], () => Object.fromEntries(e.map(e => [e, b.ZP.isMuted(e)])), [e]), u = l.useCallback(n => {
    let r = Object.fromEntries(e.filter(e => !i[e]).map(e => [e, {
      muted: true,
      mute_config: null != n ? {
        selected_time_window: n,
        end_time: n > 0 ? o()().add(n, "second").toISOString() : null
      } : true
    }]));
    s.Z.updateGuildNotificationSettingsBulk(r, f.ZB.Muted, t)
  }, [e, t, i]), g = l.useCallback(() => {
    s.Z.updateGuildNotificationSettingsBulk(Object.fromEntries(e.filter(e => i[e]).map(e => [e, {
      muted: false
    }])), f.ZB.Unmuted, t)
  }, [e, t, i]);
  return n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.sNh, {
      id: "mute-folder",
      label: p.intl.string(p.t.vBTk2A),
      action: () => u(),
      children: (0, c.k)().map(e => {
        let {
          value: t,
          label: n
        } = e;
        return (0, r.jsx)(d.sNh, {
          id: "".concat(t),
          label: n,
          action: () => u(t)
        }, t)
      })
    }), (0, r.jsx)(d.sNh, {
      id: "unmute-folder",
      label: p.intl.string(p.t.VFDdkU),
      action: g
    })]
  }) : null
}