/** Chunk was on web.js **/
/** chunk id: 537643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139675 = require("./139675.js"),
  Chunk835517 = require("./835517.js"),
  Chunk729394 = require("./729394.js"),
  Chunk216184 = require("./216184.js");
let c = e => {
    var t, n, r, i;
    let {
      messageId: o,
      presenceActivity: c,
      application: u
    } = e, d = l.A.getCoverImageURL({
      messageId: o
    });
    if (null === d) return {
      cachedImageURL: null,
      imageURL: null
    };
    let f = 600 * (0, s.A)(),
      p = null != (t = null != (n = null != (r = (null == c || null == (i = c.assets) ? true : i.invite_cover_image) != null ? (0, a.uD)(c.application_id, c.assets.invite_cover_image, f) : null) ? r : d) ? n : u.getCoverImageURL(f)) ? t : null;
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
      cachedImageURL: s,
      imageURL: u
    } = (0, i.cf)([l.A], () => c({
      messageId: t,
      presenceActivity: n,
      application: a
    }), [t, n, a]);
    return r.useEffect(() => {
      s !== u && o.K({
        messageId: t,
        coverImageURL: u
      })
    }, [s, u, t]), u
  }