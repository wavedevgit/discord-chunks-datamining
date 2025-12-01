/** Chunk was on web.js **/
/** chunk id: 449605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk872810 = require("./872810.js"),
  Chunk543882 = require("./543882.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk231338 = require("./231338.js");

function d(e, t, n) {
  let d = null == t || null == n,
    f = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
    p = (0, i.e7)([l.Z], () => null != f && l.Z.canBasicChannel(u.S7.CONNECT, f)),
    _ = (0, i.e7)([c.Z], () => c.Z.getVoiceChannelId() === t),
    {
      shouldFetchPreview: m,
      previewUrl: h,
      isLoading: g
    } = (0, i.cj)([o.Z], () => ({
      shouldFetchPreview: !d && o.Z.shouldFetchPreview(e, t, n),
      previewUrl: d ? null : o.Z.getPreviewURL(e, t, n),
      isLoading: !d && o.Z.getIsPreviewLoading(e, t, n)
    })),
    E = p || _;
  return (r.useEffect(() => {
    m && !d && E && (0, a.n9)(e, t, n)
  }, [m, t, e, n, d, E]), d || !E) ? {
    previewUrl: true,
    isLoading: false
  } : {
    previewUrl: h,
    isLoading: g
  }
}