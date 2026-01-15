/** Chunk was on web.js **/
/** chunk id: 225415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk470167 = require("./470167.js"),
  Chunk904245 = require("./904245.js"),
  Chunk911969 = require("./911969.js"),
  Chunk147913 = require("./147913.js"),
  Chunk89892 = require("./89892.js"),
  Chunk710845 = require("./710845.js"),
  Chunk109590 = require("./109590.js"),
  Chunk681678 = require("./681678.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = new Chunk710845.Z("AgeVerificationManager");

function S(e) {
  var t, n, i;
  let {
    channelId: a,
    message: o
  } = e, s = _.Z.getMessage(a, o.id);
  if ((null == s || null == (n = s.embeds) || null == (t = n[0]) ? true : t.type) === r.h.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
    let e = null == (i = s.embeds[0].fields) ? true : i.find(e => e.rawName === E.g0.CONTENT_TYPE);
    (null == e ? true : e.rawValue) === E.L0.ERROR ? (u.Z.showFailedToast(y.wQ.TIGGER_PAWTECT_ERROR), (0, g.zi)(g.o6.ERROR)) : (null == e ? true : e.rawValue) === E.L0.VERIFIED_ADULT ? (u.Z.showSuccessToast(y.wQ.TIGGER_PAWTECT_VERIFIED), (0, g.zi)(g.o6.VERIFIED_ADULT)) : (null == e ? true : e.rawValue) === E.L0.VERIFIED_TEEN && (u.Z.showSuccessToast(y.wQ.TIGGER_PAWTECT_VERIFIED), (0, g.zi)(g.o6.VERIFIED_TEEN))
  }
}

function I(e) {
  i.Z.fetchMessages({
    channelId: e,
    limit: b.AQB
  })
}

function T(e) {
  let t = p.Z.getChannel(e);
  ((null == t ? true : t.type) === b.d4z.GUILD_FORUM || (null == t ? true : t.type) === b.d4z.GUILD_MEDIA) && (0, c.EB)(t)
}
class C extends Chunk147913.Z {
  constructor(...e) {
    super(...e), O(this, "_previousAgeVerificationStatus", null), O(this, "handlePostConnectionOpen", () => {
      var e, t;
      this._previousAgeVerificationStatus = null != (t = null == (e = m.default.getCurrentUser()) ? true : e.ageVerificationStatus) ? t : null
    }), O(this, "handleCurrentUserUpdate", e => {
      var t;
      let {
        user: n
      } = e, r = null != (t = (0, m.transformUser)(n).ageVerificationStatus) ? t : null, i = this._previousAgeVerificationStatus !== r && r === a.F$.VERIFIED_ADULT, o = (0, f.U)("age-verification-manager"), l = i && ((0, d.c_)("age-verification-manager") || o);
      try {
        if (l) {
          let e = h.Z.getChannelId(),
            t = false;
          s.Z.forEach(n => {
            let {
              channelId: r
            } = n, i = p.Z.getChannel(r);
            (null == i ? true : i.nsfw) && (s.Z.clear(r), r === e && (t = true))
          }), t && null != e && (I(e), T(e))
        }
      } catch (e) {
        v.warn("Error clearing cache and refetching messages", e)
      } finally {
        this._previousAgeVerificationStatus = r
      }
    }), O(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
      MESSAGE_CREATE: S
    })
  }
}
let A = new C