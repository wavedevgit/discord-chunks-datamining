/** Chunk was on web.js **/
/** chunk id: 755278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk928801 = require("./928801.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk341569 = require("./341569.js"),
  Chunk594190 = require("./594190.js"),
  Chunk441167 = require("./441167.js"),
  Chunk695346 = require("./695346.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk936349 = require("./936349.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk928801.Z {
  get guildId() {
    return this.getState().guildId
  }
  get channelId() {
    return this.getState().channelId
  }
  computeVoiceFlags() {
    var e, t, n;
    let i = 0,
      f = u.tU.getSetting();
    i = (0, r.mB)(i, m.BVn.ALLOW_VOICE_RECORDING, f);
    let _ = (0, o.Z)(p.Z),
      h = (0, s.LI)() && ((null == (e = d.Z.getCurrentUserActiveStream()) ? true : e.state) === m.jm8.ACTIVE || (null == (t = d.Z.getCurrentUserActiveStream()) ? true : t.state) === m.jm8.PAUSED),
      g = (0, s.CY)() && (null == (n = l.ZP.getVisibleGame()) ? true : n.windowHandle) != null;
    i = (0, r.mB)(i, m.BVn.CLIPS_ENABLED, h || g);
    let {
      enableViewerClipping: E
    } = c.Z.getCurrentConfig({
      location: "computeVoiceFlags"
    }, {
      autoTrackExposure: false
    }), b = E && _ && a.Z.getSettings().viewerClipsEnabled;
    return (0, r.mB)(i, m.BVn.ALLOW_ANY_VIEWER_CLIPS, b)
  }
  getInitialState() {
    return {
      guildId: null,
      channelId: null,
      selfMute: p.Z.isSelfMute(),
      selfDeaf: p.Z.isSelfDeaf(),
      selfVideo: p.Z.isVideoEnabled(),
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
      selfMute: p.Z.isSelfMute(),
      selfDeaf: p.Z.isSelfDeaf(),
      selfVideo: p.Z.isVideoEnabled(),
      preferredRegion: _.Z.getPreferredRegion(),
      preferredRegions: _.Z.getPreferredRegions(),
      videoStreamParameters: p.Z.getVideoStreamParameters(),
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
    o && (null == (t = f.Z.getChannel(r)) ? true : t.type) === m.d4z.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
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
    super(), h(this, "socket", true), this.socket = e
  }
}