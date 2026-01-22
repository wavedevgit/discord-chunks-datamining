/** Chunk was on web.js **/
/** chunk id: 722855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk687123 = require("./687123.js"),
  Chunk508602 = require("./508602.js"),
  Chunk843472 = require("./843472.js"),
  Chunk155718 = require("./155718.js"),
  Chunk439372 = require("./439372.js"),
  Chunk128265 = require("./128265.js"),
  Chunk626584 = require("./626584.js"),
  Chunk473503 = require("./473503.js"),
  Chunk207560 = require("./207560.js"),
  Chunk662502 = require("./662502.js"),
  Chunk64313 = require("./64313.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = new Chunk626584.A("AgeVerificationManager");

function S(e) {
  var t, n, r;
  let {
    channelId: a,
    message: s
  } = e, o = h.A.getMessage(a, s.id);
  if ((null == o || null == (n = o.embeds) || null == (t = n[0]) ? true : t.type) === i.A.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
    let e = null == (r = o.embeds[0].fields) ? true : r.find(e => e.rawName === b.uN.CONTENT_TYPE);
    (null == e ? true : e.rawValue) === b.Wv.ERROR ? (f.A.showFailedToast(O.OB.TIGGER_PAWTECT_ERROR), (0, E.Vh)(E.oQ.ERROR)) : (null == e ? true : e.rawValue) === b.Wv.VERIFIED_ADULT ? (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_ADULT)) : (null == e ? true : e.rawValue) === b.Wv.VERIFIED_TEEN && (f.A.showSuccessToast(O.OB.TIGGER_PAWTECT_VERIFIED), (0, E.Vh)(E.oQ.VERIFIED_TEEN))
  }
}

function I(e) {
  a.A.fetchMessages({
    channelId: e,
    limit: y.EMb
  })
}

function T(e) {
  let t = _.A.getChannel(e);
  ((null == t ? true : t.type) === y.rbe.GUILD_FORUM || (null == t ? true : t.type) === y.rbe.GUILD_MEDIA) && (0, u.kB)(t)
}
class C extends Chunk439372.A {
  constructor(...e) {
    super(...e), A(this, "_previousAgeVerificationStatus", null), A(this, "handlePostConnectionOpen", () => {
      var e, t;
      this._previousAgeVerificationStatus = null != (e = null == (t = g.default.getCurrentUser()) ? true : t.ageVerificationStatus) ? e : null
    }), A(this, "handleCurrentUserUpdate", e => {
      var t;
      let {
        user: n
      } = e, i = null != (t = (0, g.transformUser)(n).ageVerificationStatus) ? t : null, a = this._previousAgeVerificationStatus !== i && i === s.Tk.VERIFIED_ADULT, o = (0, p.o)("age-verification-manager"), c = a && ((0, d.d6)(r.t.AGE_GATED_SPACES) || o);
      try {
        if (c) {
          let e = m.A.getChannelId(),
            t = false;
          l.A.forEach(n => {
            let {
              channelId: r
            } = n, i = _.A.getChannel(r);
            (null == i ? true : i.nsfw) && (l.A.clear(r), r === e && (t = true))
          }), t && null != e && (I(e), T(e))
        }
      } catch (e) {
        v.warn("Error clearing cache and refetching messages", e)
      } finally {
        this._previousAgeVerificationStatus = i
      }
    }), A(this, "actions", {
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
      MESSAGE_CREATE: S
    })
  }
}
let N = new C