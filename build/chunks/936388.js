/** Chunk was on web.js **/
/** chunk id: 936388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk956793 = require("./956793.js"),
  Chunk198982 = require("./198982.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk977997 = require("./977997.js"),
  Chunk144485 = require("./144485.jsx"),
  Chunk814278 = require("./814278.js");
require("./603266.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function _() {
  let e = c.A.getVoiceStateForUser(o.default.getId()),
    t = l.A.getChannel(null == e ? true : e.channelId);
  return o.default.getSessionId() === (null == e ? true : e.sessionId) && null != t && t.type !== f.rbe.GUILD_STAGE_VOICE ? t.id : null
}
async function h(e, t) {
  if (e) {
    r.h.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: e
    });
    try {
      await (0, d.to)(1), null == t || t()
    } catch (t) {
      var n;
      let e = new s.LG(t);
      r.h.dispatch({
        type: "SECURE_FRAMES_SETTINGS_UPDATE",
        persistentCodesEnabled: false
      }), i.A.show({
        title: p.intl.string(p.t.R0RpRX),
        body: null != (n = e.getAnyErrorMessage()) ? n : p.intl.string(p.t.eAn6z2)
      })
    }
  } else r.h.dispatch({
    type: "SECURE_FRAMES_SETTINGS_UPDATE",
    persistentCodesEnabled: e
  }), null == t || t()
}
let m = {
  clearUploadedKeyVersions: function() {
    r.h.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR"
    })
  },
  updatePersistentCodesEnabled: async function(e) {
    let t = _();
    null != t ? u.A.openSecureFramesUpdateConfirmation({
      title: e ? p.intl.string(p.t.DRFN1B) : p.intl.string(p.t.q29xJz),
      subtitle: e ? p.intl.string(p.t.y015ZY) : p.intl.string(p.t.E66FQn),
      confirmText: p.intl.string(p.t.aTuFYT),
      onConfirm: async () => {
        await h(e, () => {
          a.default.disconnect(), a.default.selectVoiceChannel(t)
        })
      }
    }) : await h(e)
  },
  addUploadedKeyVersion: function(e) {
    r.h.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
      keyVersion: e
    })
  },
  createSecureFramesVerifiedKey: function(e, t) {
    r.h.dispatch({
      type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
      userId: e,
      key: t
    })
  },
  deleteSecureFramesVerifiedKey: function(e, t) {
    r.h.dispatch({
      type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
      userId: e,
      serializedKey: t
    })
  },
  deleteSecureFramesUserVerifiedKeys: function(e) {
    r.h.dispatch({
      type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
      userId: e
    })
  },
  createSecureFramesTransientKey: function(e, t) {
    r.h.dispatch({
      type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
      userId: e,
      key: t
    })
  },
  deleteSecureFramesTransientKey: function(e) {
    r.h.dispatch({
      type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
      userId: e
    })
  }
}