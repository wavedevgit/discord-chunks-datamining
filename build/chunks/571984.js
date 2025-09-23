/** Chunk was on web.js **/
/** chunk id: 571984, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk951429 = require("./951429.js"),
  Chunk998502 = require("./998502.js"),
  Chunk45652 = require("./45652.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class p extends Chunk147913.Z {
  async handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    if (c.d.getState().isEnabled && null == t) {
      let e = await l.ZP.getSetting("conferenceModeSettings", {});
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
    return i().pickBy(_(d({}, e), {
      inputVolume: null != e.inputVolume ? (0, s.A)(e.inputVolume) : true,
      outputVolume: null != e.outputVolume ? (0, s.A)(e.outputVolume) : true
    }), e => null != e)
  }
  constructor(...e) {
    super(...e), u(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e)
    })
  }
}
let h = new p