/** Chunk was on web.js **/
/** chunk id: 450149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk401843 = require("./401843.js"),
  Chunk384200 = require("./384200.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk818348 = require("./818348.js");

function d(e, t, n) {
  let d = null == t || null == n,
    f = (0, i.bG)([s.A], () => s.A.getChannel(t)),
    p = (0, i.bG)([l.A], () => null != f && l.A.canBasicChannel(u.hV.CONNECT, f)),
    _ = (0, i.bG)([c.A], () => c.A.getVoiceChannelId() === t),
    {
      shouldFetchPreview: h,
      previewUrl: m,
      isLoading: g
    } = (0, i.cf)([o.A], () => ({
      shouldFetchPreview: !d && o.A.shouldFetchPreview(e, t, n),
      previewUrl: d ? null : o.A.getPreviewURL(e, t, n),
      isLoading: !d && o.A.getIsPreviewLoading(e, t, n)
    })),
    E = p || _;
  return (r.useEffect(() => {
    h && !d && E && (0, a.Tp)(e, t, n)
  }, [h, t, e, n, d, E]), d || !E) ? {
    previewUrl: true,
    isLoading: false
  } : {
    previewUrl: m,
    isLoading: g
  }
}