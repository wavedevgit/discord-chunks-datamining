/** Chunk was on 20296 **/
/** chunk id: 766411, original params: e,t,n (module,exports,require) **/
"use strict";
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
    loadState: i,
    defaultChangelog: c,
    defaultLoadState: d
  } = (0, o.cj)([s.Z], () => {
    let n = null != e ? s.Z.getChangelog(e, t) : null,
      r = null != e ? s.Z.getChangelog(e, "en-US") : null,
      o = null != e && s.Z.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: n,
      loadState: null != e && s.Z.getChangelogLoadStatus(e, t),
      defaultChangelog: r,
      defaultLoadState: o
    }
  }, [e, t]);
  return (r.useEffect(() => {
    null != e && null == n && i === l.LU.NOT_LOADED && a.Z.fetchChangelog(e, t)
  }, [e, n, i, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: false
  } : null == n && i === l.LU.LOADED_FAILURE ? {
    id: e,
    changelog: c,
    loaded: d !== l.LU.NOT_LOADED
  } : {
    id: e,
    changelog: n,
    loaded: i !== l.LU.NOT_LOADED
  }
}

function d() {
  let e = (0, Chunk399606.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    t = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.latestChangelogId()),
    n = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.getConfig()),
    r = null != require && 0 === Object.keys(require).length,
    a = null != require && Object.keys(require).length > 0 && null == exports,
    l = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.overrideId()),
    {
      changelog: d,
      loaded: u
    } = c(exports, module),
    {
      changelog: p,
      loaded: m
    } = c(Chunk596401, module);
  return null == Chunk596401 || null == p && m ? {
    id: exports,
    changelog: d,
    loaded: !!Chunk647438 || u,
    clientTooOld: Chunk661111
  } : {
    id: Chunk596401,
    changelog: p,
    loaded: m,
    clientTooOld: false
  }
}