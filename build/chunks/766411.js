/** Chunk was on 91236 **/
/** chunk id: 766411, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk661111 = require("./661111.js"),
  Chunk706454 = require("./706454.js"),
  Chunk802098 = require("./802098.js"),
  Chunk596401 = require("./596401.js");

function c(e, t) {
  let {
    changelog: n,
    loadState: a,
    defaultChangelog: c,
    defaultLoadState: d
  } = (0, l.cj)([i.Z], () => {
    let n = null != e ? i.Z.getChangelog(e, t) : null,
      r = null != e ? i.Z.getChangelog(e, "en-US") : null,
      l = null != e && i.Z.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: n,
      loadState: null != e && i.Z.getChangelogLoadStatus(e, t),
      defaultChangelog: r,
      defaultLoadState: l
    }
  }, [e, t]);
  return (r.useEffect(() => {
    null != e && null == n && a === s.LU.NOT_LOADED && o.Z.fetchChangelog(e, t)
  }, [e, n, a, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: false
  } : null == n && a === s.LU.LOADED_FAILURE ? {
    id: e,
    changelog: c,
    loaded: d !== s.LU.NOT_LOADED
  } : {
    id: e,
    changelog: n,
    loaded: a !== s.LU.NOT_LOADED
  }
}

function d() {
  let e = (0, Chunk399606.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    t = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.latestChangelogId()),
    n = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.getConfig()),
    r = null != require && 0 === Object.keys(require).length,
    o = null != require && Object.keys(require).length > 0 && null == exports,
    s = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.overrideId()),
    {
      changelog: d,
      loaded: h
    } = c(exports, module),
    {
      changelog: u,
      loaded: g
    } = c(Chunk596401, module);
  return null == Chunk596401 || null == u && g ? {
    id: exports,
    changelog: d,
    loaded: !!Chunk647438 || h,
    clientTooOld: Chunk661111
  } : {
    id: Chunk596401,
    changelog: u,
    loaded: g,
    clientTooOld: false
  }
}