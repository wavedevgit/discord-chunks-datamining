/** Chunk was on 77870 **/
/** chunk id: 366251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk383501 = require("./383501.js");
let o = {},
  c = false,
  u = null;

function d(e) {
  e in o && delete o[e]
}

function p() {
  if (!c && a.A.isConnected()) {
    let e = a.A.getChannelId();
    if (null != e) return d(e), u = e, c = true, true
  } else if (c && !a.A.isConnected() && null != u) return d(u), u = null, c = false, true;
  returnfalse
}
class h extends(l = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(a.A), this.syncWith([a.A], p)
  }
  getIsPopoverDismissed(e) {
    var t;
    return null != e && null != (t = o[e]) && t
  }
  getShouldShowPopover(e) {
    return null != e && a.A.isConnected() && a.A.getChannelId() === e && !this.getIsPopoverDismissed(e)
  }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
  value: "VoiceInvitesuggestionsStore ",
  enumerable: true,
  configurable: true,
  writable: true
}) : h[r] = "VoiceInvitesuggestionsStore ";
let f = new h(Chunk73153.h, {
  VOICE_INVITE_SUGGESTIONS_DISMISS_POPOVER: function(e) {
    let {
      channelId: t
    } = e;
    return !o[t] && (o[t] = true, true)
  }
})