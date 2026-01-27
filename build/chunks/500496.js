/** Chunk was on web.js **/
/** chunk id: 500496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk173618 = require("./173618.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk572164 = require("./572164.js"),
  Chunk15285 = require("./15285.js"),
  Chunk670470 = require("./670470.js"),
  Chunk253932 = require("./253932.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk873985 = require("./873985.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk173618.A {
  get guildId() {
    return this.getState().guildId
  }
  get channelId() {
    return this.getState().channelId
  }
  computeVoiceFlags() {
    var e, t, n;
    let i = 0,
      f = u.Q$.getSetting();
    i = (0, r.lA)(i, h.Ajs.ALLOW_VOICE_RECORDING, f);
    let _ = (0, o.A)(p.A),
      m = (0, s.TD)() && ((null == (e = d.A.getCurrentUserActiveStream()) ? true : e.state) === h.XYD.ACTIVE || (null == (t = d.A.getCurrentUserActiveStream()) ? true : t.state) === h.XYD.PAUSED),
      g = (0, s.Ao)() && (null == (n = l.Ay.getVisibleGame()) ? true : n.windowHandle) != null;
    i = (0, r.lA)(i, h.Ajs.CLIPS_ENABLED, m || g);
    let {
      enableViewerClipping: E
    } = c.A.getCurrentConfig({
      location: "computeVoiceFlags"
    }, {
      autoTrackExposure: false
    }), y = E && _ && a.A.getSettings().viewerClipsEnabled;
    return (0, r.lA)(i, h.Ajs.ALLOW_ANY_VIEWER_CLIPS, y)
  }
  getInitialState() {
    return {
      guildId: null,
      channelId: null,
      selfMute: p.A.isSelfMute(),
      selfDeaf: p.A.isSelfDeaf(),
      selfVideo: p.A.isVideoEnabled(),
      preferredRegion: null,
      preferredRegions: null,
      videoStreamParameters: null,
      flags: 0
    }
  }
  getNextState(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    return {
      guildId: t,
      channelId: n,
      selfMute: p.A.isSelfMute(),
      selfDeaf: p.A.isSelfDeaf(),
      selfVideo: p.A.isVideoEnabled(),
      preferredRegion: _.A.getPreferredRegion(),
      preferredRegions: _.A.getPreferredRegions(),
      videoStreamParameters: p.A.getVideoStreamParameters(),
      flags: this.computeVoiceFlags()
    }
  }
  shouldCommit() {
    return this.socket.isSessionEstablished()
  }
  didCommit(e) {
    var t;
    let {
      guildId: n,
      channelId: r,
      selfMute: i,
      selfDeaf: a,
      selfVideo: o,
      preferredRegion: s,
      preferredRegions: l,
      videoStreamParameters: c,
      flags: u = 0
    } = e;
    o && (null == (t = f.A.getChannel(r)) ? true : t.type) === h.rbe.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
      guildId: n,
      channelId: r,
      selfMute: i,
      selfDeaf: a,
      selfVideo: o,
      preferredRegion: s,
      preferredRegions: l,
      videoStreamParameters: c,
      flags: u
    }) : this.socket.voiceStateUpdate({
      guildId: n,
      channelId: r,
      selfMute: i,
      selfDeaf: a,
      selfVideo: o,
      preferredRegion: s,
      preferredRegions: l,
      flags: u
    })
  }
  constructor(e) {
    super(), m(this, "socket", true), this.socket = e
  }
}