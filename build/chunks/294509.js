/** Chunk was on web.js **/
/** chunk id: 294509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fj: () => f,
  _: () => u,
  qn: () => d
});
var Chunk768494 = require("./768494.js"),
  Chunk695346 = require("./695346.js"),
  Chunk991621 = require("./991621.js"),
  Chunk936141 = require("./936141.js"),
  Chunk656577 = require("./656577.js"),
  Chunk925513 = require("./925513.js"),
  Chunk981631 = require("./981631.js"),
  u = function(e) {
    return e.EXPLICIT = "explicit", e.GORE = "gore", e
  }({}),
  d = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.EXPLICIT = 1] = "EXPLICIT", e[e.GORE = 2] = "GORE", e[e.ALL = 3] = "ALL", e
  }({});
let f = {
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
      let o = null != e ? e : {
        [a.n.GUILD]: null == (t = i.Sh.getSetting()) ? true : t.explicitContentGuilds,
        [a.n.FRIEND_DM]: null == (n = i.Sh.getSetting()) ? true : n.explicitContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == (r = i.Sh.getSetting()) ? true : r.explicitContentNonFriendDm
      };
      return {
        [a.n.GUILD]: (0, s.ec)({
          setting: null == o ? true : o[a.n.GUILD]
        }),
        [a.n.FRIEND_DM]: (0, s.ec)({
          setting: null == o ? true : o[a.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [a.n.NON_FRIEND_DM]: (0, s.ec)({
          setting: null == o ? true : o[a.n.NON_FRIEND_DM],
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
      let o = null != e ? e : {
        [a.n.GUILD]: null == (t = i.j7.getSetting()) ? true : t.goreContentGuilds,
        [a.n.FRIEND_DM]: null == (n = i.j7.getSetting()) ? true : n.goreContentFriendDm,
        [a.n.NON_FRIEND_DM]: null == (r = i.j7.getSetting()) ? true : r.goreContentNonFriendDm
      };
      return {
        [a.n.GUILD]: (0, l._i)({
          setting: null == o ? true : o[a.n.GUILD]
        }),
        [a.n.FRIEND_DM]: (0, l._i)({
          setting: null == o ? true : o[a.n.FRIEND_DM],
          isDm: true,
          isFriend: true
        }),
        [a.n.NON_FRIEND_DM]: (0, l._i)({
          setting: null == o ? true : o[a.n.NON_FRIEND_DM],
          isDm: true
        })
      }
    }
  }
}