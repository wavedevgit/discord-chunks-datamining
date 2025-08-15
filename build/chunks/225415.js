/** Chunk was on web.js **/
/** chunk id: 225415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk470167 = require("./470167.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk147913 = require("./147913.js"),
  Chunk89892 = require("./89892.js"),
  Chunk710845 = require("./710845.js"),
  Chunk681678 = require("./681678.js"),
  Chunk128064 = require("./128064.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = new Chunk710845.Z("AgeVerificationManager");

function O(e) {
  var t, n, i;
  let {
    channelId: a,
    message: o
  } = e, s = f.Z.getMessage(a, o.id);
  if ((null == s || null == (n = s.embeds) || null == (t = n[0]) ? true : t.type) === r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
    let e = null == (i = s.embeds[0].fields) ? true : i.find(e => e.rawName === m.g0.CONTENT_TYPE);
    (null == e ? true : e.rawValue) === m.L0.ERROR ? (c.Z.showFailedToast(E.wQ.TIGGER_PAWTECT_ERROR), (0, h.zi)(h.o6.ERROR)) : (null == e ? true : e.rawValue) === m.L0.VERIFIED_ADULT ? (c.Z.showSuccessToast(E.wQ.TIGGER_PAWTECT_VERIFIED), (0, h.zi)(h.o6.VERIFIED_ADULT)) : (null == e ? true : e.rawValue) === m.L0.VERIFIED_TEEN && (c.Z.showSuccessToast(E.wQ.TIGGER_PAWTECT_VERIFIED), (0, h.zi)(h.o6.VERIFIED_TEEN))
  }
}
class v extends Chunk147913.Z {
  constructor(...e) {
    super(...e), b(this, "_previousAgeVerificationStatus", null), b(this, "handlePostConnectionOpen", () => {
      var e, t;
      this._previousAgeVerificationStatus = null != (t = null == (e = p.default.getCurrentUser()) ? true : e.ageVerificationStatus) ? t : null
    }), b(this, "handleCurrentUserUpdate", e => {
      var t;
      let {
        user: n
      } = e, r = null != (t = (0, p.transformUser)(n).ageVerificationStatus) ? t : null;
      try {
        if (this._previousAgeVerificationStatus !== r && r === a.F$.VERIFIED_ADULT && (0, u.c_)("age-verification-manager")) {
          let e = _.Z.getChannelId(),
            t = false;
          s.Z.forEach(n => {
            let {
              channelId: r
            } = n, i = d.Z.getChannel(r);
            (null == i ? true : i.nsfw) && (s.Z.clear(r), r === e && (t = true))
          }), t && null != e && i.Z.fetchMessages({
            channelId: e,
            limit: g.AQB
          })
        }
      } catch (e) {
        y.warn("Error clearing cache and refetching messages", e)
      } finally {
        this._previousAgeVerificationStatus = r
      }
    }), b(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
      MESSAGE_CREATE: O
    })
  }
}
let I = new v