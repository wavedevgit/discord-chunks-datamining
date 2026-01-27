/** Chunk was on web.js **/
/** chunk id: 811602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jn: () => p,
  LO: () => f,
  kn: () => d
});
var Chunk873298 = require("./873298.js"),
  Chunk731068 = require("./731068.js"),
  Chunk253932 = require("./253932.js"),
  Chunk930125 = require("./930125.js"),
  Chunk338717 = require("./338717.js"),
  Chunk632119 = require("./632119.js"),
  Chunk444802 = require("./444802.js"),
  Chunk652215 = require("./652215.js"),
  d = function(e) {
    return e.EXPLICIT = "explicit", e.GORE = "gore", e.SELF_HARM = "self_harm", e
  }({}),
  f = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.GORE = 2] = "GORE", e[e.SELF_HARM = 4] = "SELF_HARM", e[e.ALL = 7] = "ALL", e
  }({});
let p = {
  explicit: {
    harmType: "explicit",
    obscureReason: Chunk338717.Oc.EXPLICIT_CONTENT,
    attachmentFlag: Chunk652215.sbO.CONTAINS_EXPLICIT_MEDIA,
    embedFlag: Chunk652215.iSj.CONTAINS_EXPLICIT_MEDIA,
    genericMediaFlag: Chunk731068.IS.EXPLICIT,
    bitmask: 1,
    devSettingKey: "obscure_blur_effect_explicit_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.explicitContentSettings;
      return {
        [o.v.GUILD]: null == n ? true : n.explicitContentGuilds,
        [o.v.FRIEND_DM]: null == n ? true : n.explicitContentFriendDm,
        [o.v.NON_FRIEND_DM]: null == n ? true : n.explicitContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [o.v.GUILD]: null == (t = a.Vd.getSetting()) ? true : t.explicitContentGuilds,
        [o.v.FRIEND_DM]: null == (n = a.Vd.getSetting()) ? true : n.explicitContentFriendDm,
        [o.v.NON_FRIEND_DM]: null == (r = a.Vd.getSetting()) ? true : r.explicitContentNonFriendDm
      };
      return {
        [o.v.GUILD]: (0, l.Ys)({
          setting: null == i ? true : i[o.v.GUILD]
        }),
        [o.v.FRIEND_DM]: (0, l.Ys)({
          setting: null == i ? true : i[o.v.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [o.v.NON_FRIEND_DM]: (0, l.Ys)({
          setting: null == i ? true : i[o.v.NON_FRIEND_DM],
          isDm: true
        })
      }
    }
  },
  gore: {
    harmType: "gore",
    obscureReason: Chunk338717.Oc.GORE_CONTENT,
    attachmentFlag: Chunk652215.sbO.CONTAINS_GORE_CONTENT,
    embedFlag: Chunk652215.iSj.CONTAINS_GORE_CONTENT,
    genericMediaFlag: Chunk731068.IS.GORE,
    bitmask: 2,
    devSettingKey: "obscure_blur_effect_gore_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.goreContentSettings;
      return {
        [o.v.GUILD]: null == n ? true : n.goreContentGuilds,
        [o.v.FRIEND_DM]: null == n ? true : n.goreContentFriendDm,
        [o.v.NON_FRIEND_DM]: null == n ? true : n.goreContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: e => {
      var t, n, r;
      let i = null != e ? e : {
        [o.v.GUILD]: null == (t = a.qN.getSetting()) ? true : t.goreContentGuilds,
        [o.v.FRIEND_DM]: null == (n = a.qN.getSetting()) ? true : n.goreContentFriendDm,
        [o.v.NON_FRIEND_DM]: null == (r = a.qN.getSetting()) ? true : r.goreContentNonFriendDm
      };
      return {
        [o.v.GUILD]: (0, c.gC)({
          setting: null == i ? true : i[o.v.GUILD]
        }),
        [o.v.FRIEND_DM]: (0, c.gC)({
          setting: null == i ? true : i[o.v.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [o.v.NON_FRIEND_DM]: (0, c.gC)({
          setting: null == i ? true : i[o.v.NON_FRIEND_DM],
          isDm: true
        })
      }
    }
  },
  self_harm: {
    harmType: "self_harm",
    obscureReason: Chunk338717.Oc.SELF_HARM_CONTENT,
    attachmentFlag: Chunk652215.sbO.CONTAINS_SELF_HARM_CONTENT,
    embedFlag: Chunk652215.iSj.CONTAINS_SELF_HARM_CONTENT,
    genericMediaFlag: Chunk731068.IS.SELF_HARM,
    bitmask: 4,
    devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
    getProtoUserSettings: e => {
      var t;
      let n = null == e || null == (t = e.textAndImages) ? true : t.selfHarmContentSettings;
      return {
        [o.v.GUILD]: null == n ? true : n.selfHarmContentGuilds,
        [o.v.FRIEND_DM]: null == n ? true : n.selfHarmContentFriendDm,
        [o.v.NON_FRIEND_DM]: null == n ? true : n.selfHarmContentNonFriendDm
      }
    },
    getUserSettingsWithDefaults: () => ({
      [o.v.GUILD]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      [o.v.FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
      [o.v.NON_FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION
    })
  }
}