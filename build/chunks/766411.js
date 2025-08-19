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

function s(e, t) {
  let {
    changelog: n,
    loadState: i,
    defaultChangelog: s,
    defaultLoadState: d
  } = (0, o.cj)([l.Z], () => {
    let n = null != e ? l.Z.getChangelog(e, t) : null,
      r = null != e ? l.Z.getChangelog(e, "en-US") : null,
      o = null != e && l.Z.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: n,
      loadState: null != e && l.Z.getChangelogLoadStatus(e, t),
      defaultChangelog: r,
      defaultLoadState: o
    }
  }, [e, t]);
  return (r.useEffect(() => {
    null != e && null == n && i === c.LU.NOT_LOADED && a.Z.fetchChangelog(e, t)
  }, [e, n, i, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: false
  } : null == n && i === c.LU.LOADED_FAILURE ? {
    id: e,
    changelog: s,
    loaded: d !== c.LU.NOT_LOADED
  } : {
    id: e,
    changelog: n,
    loaded: i !== c.LU.NOT_LOADED
  }
}

function d() {
  let e = (0, Chunk399606.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    t = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.latestChangelogId()),
    n = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.getConfig()),
    r = null != require && 0 === Object.keys(require).length,
    a = null != require && Object.keys(require).length > 0 && null == exports,
    c = (0, Chunk399606.e7)([Chunk802098.Z], () => Chunk802098.Z.overrideId()),
    {
      changelog: d,
      loaded: u
    } = s(exports, module),
    {
      changelog: m,
      loaded: p
    } = s(Chunk596401, module);
  return null == Chunk596401 || null == m && p ? {
    id: exports,
    changelog: d,
    loaded: !!Chunk647438 || u,
    clientTooOld: Chunk661111
  } : {
    id: Chunk596401,
    changelog: m,
    loaded: p,
    clientTooOld: false
  }
}