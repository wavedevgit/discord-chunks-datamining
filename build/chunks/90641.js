/** Chunk was on 80417 **/
/** chunk id: 90641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk287734 = require("./287734.js"),
  Chunk881052 = require("./881052.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk979651 = require("./979651.js"),
  Chunk352954 = require("./352954.jsx"),
  Chunk630759 = require("./630759.js"),
  Chunk760373 = require("./760373.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function S(e, t) {
  if (e) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: e
    });
    try {
      await (0, E.om)(d.GB), null == t || t()
    } catch (t) {
      var n;
      let e = new o.Hx(t);
      r.Z.dispatch({
        type: "SECURE_FRAMES_SETTINGS_UPDATE",
        persistentCodesEnabled: false
      }), i.Z.show({
        title: _.intl.string(_.t.R0RpRU),
        body: null != (n = e.getAnyErrorMessage()) ? n : _.intl.string(_.t.eAn6z8)
      })
    }
  } else r.Z.dispatch({
    type: "SECURE_FRAMES_SETTINGS_UPDATE",
    persistentCodesEnabled: e
  }), null == t || t()
}
let y = {
  clearUploadedKeyVersions: function() {
    Chunk570140.Z.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR"
    })
  },
  updatePersistentCodesEnabled: async function e(e) {
    let t = function() {
      let e = u.Z.getVoiceStateForUser(c.default.getId()),
        t = l.Z.getChannel(null == e ? true : e.channelId);
      return c.default.getSessionId() === (null == e ? true : e.sessionId) && null != t && t.type !== f.d4z.GUILD_STAGE_VOICE ? t.id : null
    }();
    null != t ? s.Z.openSecureFramesUpdateConfirmation({
      title: e ? _.intl.string(_.t.DRFN1N) : _.intl.string(_.t.q29xJy),
      subtitle: e ? _.intl.string(_.t.y015ZW) : _.intl.string(_.t.E66FQk),
      confirmText: _.intl.string(_.t.aTuFYW),
      onConfirm: async () => {
        await S(e, () => {
          a.default.disconnect(), a.default.selectVoiceChannel(t)
        })
      }
    }) : await S(e)
  },
  addUploadedKeyVersion: function(e) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
      keyVersion: e
    })
  },
  createSecureFramesVerifiedKey: function(e, t) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
      userId: e,
      key: t
    })
  },
  deleteSecureFramesVerifiedKey: function(e, t) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
      userId: e,
      serializedKey: t
    })
  },
  deleteSecureFramesUserVerifiedKeys: function(e) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
      userId: e
    })
  },
  createSecureFramesTransientKey: function(e, t) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
      userId: e,
      key: t
    })
  },
  deleteSecureFramesTransientKey: function(e) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
      userId: e
    })
  }
}