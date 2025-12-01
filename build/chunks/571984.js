/** Chunk was on web.js **/
/** chunk id: 571984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk569545 = require("./569545.js"),
  Chunk951429 = require("./951429.js"),
  Chunk199902 = require("./199902.js"),
  Chunk944486 = require("./944486.js"),
  Chunk998502 = require("./998502.js"),
  Chunk45652 = require("./45652.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = 1e3;
class b extends Chunk147913.Z {
  async handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (p.d.getState().isEnabled)
      if (null != t) this.findAndWatchStream();
      else {
        let e = await f.ZP.getSetting("conferenceModeSettings", {});
        if ((null == e ? true : e.mediaEngineSettings) != null) {
          let t = Object.keys(e.mediaEngineSettings).reduce((t, n) => {
            var r, i;
            let a = n;
            return t[a] = this.getResetMediaEngineSettings(null != (i = null == (r = e.mediaEngineSettings) ? true : r[a]) ? i : {}), t
          }, {});
          a.Z.resetMediaEngineSettings(t)
        }
      }
  }
  getResetMediaEngineSettings(e) {
    return i().pickBy(g(m({}, e), {
      inputVolume: null != e.inputVolume ? (0, c.A)(e.inputVolume) : true,
      outputVolume: null != e.outputVolume ? (0, c.A)(e.outputVolume) : true
    }), e => null != e)
  }
  findAndWatchStream() {
    let e = Chunk944486.Z.getVoiceChannelId();
    if (null == module) return;
    let t = Chunk199902.Z.getAllApplicationStreamsForChannel(module)[0];
    null != exports && (0, Chunk872810.rn)(exports)
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e)
    }), _(this, "handleVoiceStateUpdates", i().debounce(e => {
      let {
        voiceStates: t
      } = e;
      p.d.getState().isEnabled && t.forEach(e => {
        let t = u.Z.getStreamForUser(e.userId, e.guildId),
          n = u.Z.getActiveStreamForUser(e.userId, e.guildId);
        null != t && null == n ? (0, o.rn)(t) : null == t && null != n && ((0, o.g)((0, l.V9)(n), false, true), this.findAndWatchStream())
      })
    }, E))
  }
}
let y = new b