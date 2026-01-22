/** Chunk was on web.js **/
/** chunk id: 278616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o,
  g: () => l
});
var Chunk417597 = require("./417597.js"),
  Chunk617617 = require("./617617.js"),
  Chunk632119 = require("./632119.js"),
  Chunk444802 = require("./444802.js");
let o = () => {
    let e = (0, r.cf)([i.A], () => {
      var e, t;
      return null != (e = null == (t = i.A.settings.textAndImages) ? true : t.explicitContentSettings) ? e : (0, a.C$)()
    });
    return {
      explicitContentGuilds: (0, a.Ys)({
        setting: null == e ? true : e.explicitContentGuilds
      }),
      explicitContentNonFriendDm: (0, a.Ys)({
        setting: null == e ? true : e.explicitContentNonFriendDm,
        isDm: true
      }),
      explicitContentFriendDm: (0, a.Ys)({
        setting: null == e ? true : e.explicitContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  l = () => {
    let e = (0, r.cf)([i.A], () => {
      var e, t;
      return null != (e = null == (t = i.A.settings.textAndImages) ? true : t.goreContentSettings) ? e : (0, s.T4)()
    });
    return {
      goreContentGuilds: (0, s.gC)({
        setting: null == e ? true : e.goreContentGuilds
      }),
      goreContentNonFriendDm: (0, s.gC)({
        setting: null == e ? true : e.goreContentNonFriendDm,
        isDm: true
      }),
      goreContentFriendDm: (0, s.gC)({
        setting: null == e ? true : e.goreContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  }