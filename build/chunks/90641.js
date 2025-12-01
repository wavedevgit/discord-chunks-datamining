/** Chunk was on web.js **/
/** chunk id: 90641, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
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

function m() {
  let e = Chunk979651.Z.getVoiceStateForUser(Chunk314897.default.getId()),
    t = Chunk592125.Z.getChannel(null == module ? true : module.channelId);
  return Chunk314897.default.getSessionId() === (null == module ? true : module.sessionId) && null != exports && exports.type !== Chunk981631.d4z.GUILD_STAGE_VOICE ? exports.id : null
}
async function h(e, t) {
  if (e) {
    r.Z.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: e
    });
    try {
      await (0, d.om)(f.GB), null == t || t()
    } catch (t) {
      var n;
      let e = new o.Hx(t);
      r.Z.dispatch({
        type: "SECURE_FRAMES_SETTINGS_UPDATE",
        persistentCodesEnabled: false
      }), i.Z.show({
        title: _.intl.string(_.t.R0RpRX),
        body: null != (n = e.getAnyErrorMessage()) ? n : _.intl.string(_.t.eAn6z2)
      })
    }
  } else r.Z.dispatch({
    type: "SECURE_FRAMES_SETTINGS_UPDATE",
    persistentCodesEnabled: e
  }), null == t || t()
}
let g = {
  clearUploadedKeyVersions: function() {
    Chunk570140.Z.dispatch({
      type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR"
    })
  },
  updatePersistentCodesEnabled: async function(e) {
    let t = m();
    null != t ? u.Z.openSecureFramesUpdateConfirmation({
      title: e ? _.intl.string(_.t.DRFN1B) : _.intl.string(_.t.q29xJz),
      subtitle: e ? _.intl.string(_.t.y015ZY) : _.intl.string(_.t.E66FQn),
      confirmText: _.intl.string(_.t.aTuFYT),
      onConfirm: async () => {
        await h(e, () => {
          a.default.disconnect(), a.default.selectVoiceChannel(t)
        })
      }
    }) : await h(e)
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