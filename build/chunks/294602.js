/** Chunk was on web.js **/
/** chunk id: 294602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s,
  K: () => l
});
var Chunk399606 = require("./399606.js"),
  Chunk581883 = require("./581883.js"),
  Chunk656577 = require("./656577.js"),
  Chunk925513 = require("./925513.js");
let s = () => {
    let e = (0, r.cj)([i.Z], () => {
      var e, t;
      return null != (t = null == (e = i.Z.settings.textAndImages) ? true : e.explicitContentSettings) ? t : (0, a.l4)()
    });
    return {
      explicitContentGuilds: (0, a.ec)({
        setting: null == e ? true : e.explicitContentGuilds
      }),
      explicitContentNonFriendDm: (0, a.ec)({
        setting: null == e ? true : e.explicitContentNonFriendDm,
        isDm: true
      }),
      explicitContentFriendDm: (0, a.ec)({
        setting: null == e ? true : e.explicitContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  l = () => {
    let e = (0, r.cj)([i.Z], () => {
      var e, t;
      return null != (t = null == (e = i.Z.settings.textAndImages) ? true : e.goreContentSettings) ? t : (0, o.O6)()
    });
    return {
      goreContentGuilds: (0, o._i)({
        setting: null == e ? true : e.goreContentGuilds
      }),
      goreContentNonFriendDm: (0, o._i)({
        setting: null == e ? true : e.goreContentNonFriendDm,
        isDm: true
      }),
      goreContentFriendDm: (0, o._i)({
        setting: null == e ? true : e.goreContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  }