/** Chunk was on web.js **/
/** chunk id: 663879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594190 = require("./594190.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk885110 = require("./885110.js"),
  Chunk924557 = require("./924557.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk147913.Z {
  registerCallback(e) {
    this.callback = e
  }
  unregisterCallback() {
    this.callback = null
  }
  handleMessageCreate(e) {
    var t, n, r;
    let {
      message: i,
      channelId: s
    } = e;
    if (!(0, l.NS)()) return;
    let c = null == (t = i.author) ? true : t.id;
    if (null == c || (null == (n = i.author) ? true : n.id) === a.default.getId()) return;
    let u = o.Z.getChannelId();
    if (null == u || s !== u) return;
    let d = i.content;
    if (null == d) return;
    let f = "__REMOTE_CLIP_TRIGGER__",
      _ = d.indexOf(f);
    if (false === _) return;
    let p = _ + f.length,
      h = d.substring(p);
    try {
      let e = JSON.parse(h);
      this.handleRemoteClipTrigger({
        type: "CLIPS_REMOTE_TRIGGER",
        userId: c,
        applicationId: e.applicationId,
        partyId: null != (r = e.activityPartyId) ? r : null
      }, e.triggerClipId)
    } catch (e) {
      return
    }
  }
  handleRemoteClipTrigger(e, t) {
    let {
      userId: n,
      applicationId: r,
      partyId: o
    } = e;
    if (!(0, l.NS)() || n === a.default.getId()) return;
    let u = s.Z.getActivities().find(e => e.type === c.IIU.PLAYING && null != e.application_id && e.application_id === r),
      d = i.ZP.getVisibleGame(),
      f = null != u,
      _ = (null == d ? true : d.id) === r;
    if (f || _) {
      if (null != o) {
        var p;
        if ((null == u || null == (p = u.party) ? true : p.id) !== o) return
      }
      null != this.callback && null != t && this.callback(n, t)
    }
  }
  constructor(...e) {
    super(...e), u(this, "callback", null), u(this, "actions", {
      MESSAGE_CREATE: e => this.handleMessageCreate(e),
      CLIPS_REMOTE_TRIGGER: e => this.handleRemoteClipTrigger(e)
    })
  }
}
let f = new d