/** Chunk was on 92917 **/
/** chunk id: 537643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139675 = require("./139675.js"),
  Chunk835517 = require("./835517.js"),
  Chunk729394 = require("./729394.js"),
  Chunk216184 = require("./216184.js");
let c = e => {
  let {
    messageId: t,
    presenceActivity: n,
    application: c
  } = e, {
    cachedImageURL: u,
    imageURL: d
  } = (0, i.cf)([o.A], () => (e => {
    var t, n, r, i;
    let {
      messageId: s,
      presenceActivity: c,
      application: u
    } = e, d = o.A.getCoverImageURL({
      messageId: s
    });
    if (null === d) return {
      cachedImageURL: null,
      imageURL: null
    };
    let p = 600 * (0, a.A)(),
      m = null != (t = null != (n = null != (r = (null == c || null == (i = c.assets) ? true : i.invite_cover_image) != null ? (0, l.uD)(c.application_id, c.assets.invite_cover_image, p) : null) ? r : d) ? n : u.getCoverImageURL(p)) ? t : null;
    return {
      cachedImageURL: d,
      imageURL: m
    }
  })({
    messageId: t,
    presenceActivity: n,
    application: c
  }), [t, n, c]);
  return r.useEffect(() => {
    u !== d && s.K({
      messageId: t,
      coverImageURL: d
    })
  }, [u, d, t]), d
}