/** Chunk was on 40184 **/
/** chunk id: 78332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var i, r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk19780 = require("./19780.js");
let s = {},
  c = false,
  u = null;

function d(e) {
  e in s && delete s[e]
}

function p() {
  if (!c && Chunk19780.Z.isConnected()) {
    let e = Chunk19780.Z.getChannelId();
    if (null != module) return d(module), u = module, c = true, true
  } else if (c && !Chunk19780.Z.isConnected() && null != u) return d(u), u = null, c = false, true;
  returnfalse
}
class f extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk19780.Z), this.syncWith([Chunk19780.Z], p)
  }
  getIsPopoverDismissed(e) {
    var t;
    return null != e && null != (t = s[e]) && t
  }
  getShouldShowPopover(e) {
    return null != e && o.Z.isConnected() && o.Z.getChannelId() === e && !this.getIsPopoverDismissed(e)
  }
}(i = "displayName") in f ? Object.defineProperty(f, i, {
  value: "VoiceInvitesuggestionsStore ",
  enumerable: true,
  configurable: true,
  writable: true
}) : f[i] = "VoiceInvitesuggestionsStore ";
let h = new f(Chunk570140.Z, {
  VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function(e) {
    let {
      channelId: t
    } = e;
    return !s[t] && (s[t] = true, true)
  }
})