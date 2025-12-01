/** Chunk was on web.js **/
/** chunk id: 77603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk81063 = require("./81063.js"),
  Chunk921948 = require("./921948.js"),
  Chunk257683 = require("./257683.js"),
  Chunk139212 = require("./139212.js");
let c = e => {
    var t, n, r, i;
    let {
      messageId: s,
      presenceActivity: c,
      application: u
    } = e, d = l.Z.getCoverImageURL({
      messageId: s
    });
    if (null === d) return {
      cachedImageURL: null,
      imageURL: null
    };
    let f = 600 * (0, o.Z)(),
      p = null != (i = null != (r = null != (n = (null == c || null == (t = c.assets) ? true : t.invite_cover_image) != null ? (0, a.xF)(c.application_id, c.assets.invite_cover_image, f) : null) ? n : d) ? r : u.getCoverImageURL(f)) ? i : null;
    return {
      cachedImageURL: d,
      imageURL: p
    }
  },
  u = e => {
    let {
      messageId: t,
      presenceActivity: n,
      application: a
    } = e, {
      cachedImageURL: o,
      imageURL: u
    } = (0, i.cj)([l.Z], () => c({
      messageId: t,
      presenceActivity: n,
      application: a
    }), [t, n, a]);
    return r.useEffect(() => {
      o !== u && s.s({
        messageId: t,
        coverImageURL: u
      })
    }, [o, u, t]), u
  }