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
        [a.n.GUILD]: null == n ? true : n.explicitContentGuilds,
        [a.n.FRIEND_DM]: null == n ? true : n.explicitContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == n ? true : n.explicitContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [a.n.GUILD]: null == (t = o.Sh.getSetting()) ? true : t.explicitContentGuilds,
        [a.n.FRIEND_DM]: null == (n = o.Sh.getSetting()) ? true : n.explicitContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == (r = o.Sh.getSetting()) ? true : r.explicitContentNonFriendDm
      };
      return {
        [a.n.GUILD]: (0, l.ec)({
          setting: null == i ? true : i[a.n.GUILD]
        }),
        [a.n.FRIEND_DM]: (0, l.ec)({
          setting: null == i ? true : i[a.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [a.n.NON_FRIEND_DM]: (0, l.ec)({
          setting: null == i ? true : i[a.n.NON_FRIEND_DM],
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
        [a.n.GUILD]: null == n ? true : n.goreContentGuilds,
        [a.n.FRIEND_DM]: null == n ? true : n.goreContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == n ? true : n.goreContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [a.n.GUILD]: null == (t = o.j7.getSetting()) ? true : t.goreContentGuilds,
        [a.n.FRIEND_DM]: null == (n = o.j7.getSetting()) ? true : n.goreContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == (r = o.j7.getSetting()) ? true : r.goreContentNonFriendDm
      };
      return {
        [a.n.GUILD]: (0, c._i)({
          setting: null == i ? true : i[a.n.GUILD]
        }),
        [a.n.FRIEND_DM]: (0, c._i)({
          setting: null == i ? true : i[a.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [a.n.NON_FRIEND_DM]: (0, c._i)({
          setting: null == i ? true : i[a.n.NON_FRIEND_DM],
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
        [a.n.GUILD]: null == n ? true : n.selfHarmContentGuilds,
        [a.n.FRIEND_DM]: null == n ? true : n.selfHarmContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == n ? true : n.selfHarmContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: () => ({
      [Chunk991621.n.GUILD]: Chunk524437.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      [Chunk991621.n.FRIEND_DM]: Chunk524437.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
      [Chunk991621.n.NON_FRIEND_DM]: Chunk524437.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
    })
  }
}