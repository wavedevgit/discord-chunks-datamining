/** Chunk was on 97283 **/
/** chunk id: 936388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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
async function _(e, t) {
  if (e) {
    r.h.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: e
    });
    try {
      await (0, E.to)(1), null == t || t()
    } catch (t) {
      var n;
      let e = new o.LG(t);
      r.h.dispatch({
        type: "SECURE_FRAMES_SETTINGS_UPDATE",
        persistentCodesEnabled: false
      }), i.A.show({
        title: f.intl.string(f.t.R0RpRX),
        body: null != (n = e.getAnyErrorMessage()) ? n : f.intl.string(f.t.eAn6z2)
      })
    }
  } else r.h.dispatch({
    type: "SECURE_FRAMES_SETTINGS_UPDATE",
    persistentCodesEnabled: e
  }), null == t || t()
}
let A = {
  clearUploadedKeyVersions: function() {
    r.h.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR"
    })
  },
  updatePersistentCodesEnabled: async function e(e) {
    let t, n, r = (t = u.A.getVoiceStateForUser(l.default.getId()), n = c.A.getChannel(null == t ? true : t.channelId), l.default.getSessionId() === (null == t ? true : t.sessionId) && null != n && n.type !== d.rbe.GUILD_STAGE_VOICE ? n.id : null);
    null != r ? s.A.openSecureFramesUpdateConfirmation({
      title: e ? f.intl.string(f.t.DRFN1B) : f.intl.string(f.t.q29xJz),
      subtitle: e ? f.intl.string(f.t.y015ZY) : f.intl.string(f.t.E66FQn),
      confirmText: f.intl.string(f.t.aTuFYT),
      onConfirm: async () => {
        await _(e, () => {
          a.default.disconnect(), a.default.selectVoiceChannel(r)
        })
      }
    }) : await _(e)
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