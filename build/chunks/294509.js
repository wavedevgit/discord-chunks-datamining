/** Chunk was on web.js **/
/** chunk id: 294509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fj: () => p,
  _: () => d,
  qn: () => f
});
var Chunk524437 = require("./524437.js"),
  Chunk768494 = require("./768494.js"),
  Chunk695346 = require("./695346.js"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk656577 = require("./656577.js"),
  Chunk925513 = require("./925513.js"),
  Chunk981631 = require("./981631.js"),
  d = function(e) {
    return e.EXPLICIT = "explicit", e.GORE = "gore", e.SELF_HARM = "self_harm", e
  }({}),
  f = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.GORE = 2] = "GORE", e[e.SELF_HARM = 4] = "SELF_HARM", e[e.ALL = 7] = "ALL", e
  }({});
let p = {
  explicit: {
    harmType: "explicit",
    obscureReason: Chunk936141.wk.EXPLICIT_CONTENT,
    attachmentFlag: Chunk981631.J0y.CONTAINS_EXPLICIT_MEDIA,
    embedFlag: Chunk981631.xPJ.CONTAINS_EXPLICIT_MEDIA,
    genericMediaFlag: Chunk768494.Cb.EXPLICIT,
    bitmask: 1,
    devSettingKey: "obscure_blur_effect_explicit_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.explicitContentSettings;
      return {
        [o.n.GUILD]: null == n ? true : n.explicitContentGuilds,
        [o.n.FRIEND_DM]: null == n ? true : n.explicitContentFriendDm,
        [o.n.NON_FRIEND_DM]: null == n ? true : n.explicitContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [o.n.GUILD]: null == (t = a.Sh.getSetting()) ? true : t.explicitContentGuilds,
        [o.n.FRIEND_DM]: null == (n = a.Sh.getSetting()) ? true : n.explicitContentFriendDm,
        [o.n.NON_FRIEND_DM]: null == (r = a.Sh.getSetting()) ? true : r.explicitContentNonFriendDm
      };
      return {
        [o.n.GUILD]: (0, l.ec)({
          setting: null == i ? true : i[o.n.GUILD]
        }),
        [o.n.FRIEND_DM]: (0, l.ec)({
          setting: null == i ? true : i[o.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [o.n.NON_FRIEND_DM]: (0, l.ec)({
          setting: null == i ? true : i[o.n.NON_FRIEND_DM],
          isDm: true
        })
      }
    }
  },
  gore: {
    harmType: "gore",
    obscureReason: Chunk936141.wk.GORE_CONTENT,
    attachmentFlag: Chunk981631.J0y.CONTAINS_GORE_CONTENT,
    embedFlag: Chunk981631.xPJ.CONTAINS_GORE_CONTENT,
    genericMediaFlag: Chunk768494.Cb.GORE,
    bitmask: 2,
    devSettingKey: "obscure_blur_effect_gore_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.goreContentSettings;
      return {
        [o.n.GUILD]: null == n ? true : n.goreContentGuilds,
        [o.n.FRIEND_DM]: null == n ? true : n.goreContentFriendDm,
        [o.n.NON_FRIEND_DM]: null == n ? true : n.goreContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [o.n.GUILD]: null == (t = a.j7.getSetting()) ? true : t.goreContentGuilds,
        [o.n.FRIEND_DM]: null == (n = a.j7.getSetting()) ? true : n.goreContentFriendDm,
        [o.n.NON_FRIEND_DM]: null == (r = a.j7.getSetting()) ? true : r.goreContentNonFriendDm
      };
      return {
        [o.n.GUILD]: (0, c._i)({
          setting: null == i ? true : i[o.n.GUILD]
        }),
        [o.n.FRIEND_DM]: (0, c._i)({
          setting: null == i ? true : i[o.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [o.n.NON_FRIEND_DM]: (0, c._i)({
          setting: null == i ? true : i[o.n.NON_FRIEND_DM],
          isDm: true
        })
      }
    }
  },
  self_harm: {
    harmType: "self_harm",
    obscureReason: Chunk936141.wk.SELF_HARM_CONTENT,
    attachmentFlag: Chunk981631.J0y.CONTAINS_SELF_HARM_CONTENT,
    embedFlag: Chunk981631.xPJ.CONTAINS_SELF_HARM_CONTENT,
    genericMediaFlag: Chunk768494.Cb.SELF_HARM,
    bitmask: 4,
    devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.selfHarmContentSettings;
      return {
        [o.n.GUILD]: null == n ? true : n.selfHarmContentGuilds,
        [o.n.FRIEND_DM]: null == n ? true : n.selfHarmContentFriendDm,
        [o.n.NON_FRIEND_DM]: null == n ? true : n.selfHarmContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: () => ({
      [o.n.GUILD]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      [o.n.FRIEND_DM]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      [o.n.NON_FRIEND_DM]: r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
    })
  }
}