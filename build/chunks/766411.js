/** Chunk was on 91236 **/
/** chunk id: 766411, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk661111 = require("./661111.js"),
  Chunk706454 = require("./706454.js"),
  Chunk802098 = require("./802098.js"),
  Chunk596401 = require("./596401.js");

function s(e, t) {
  let {
    changelog: r,
    loadState: i,
    defaultChangelog: s,
    defaultLoadState: u
  } = (0, l.cj)([c.Z], () => {
    let r = null != e ? c.Z.getChangelog(e, t) : null,
      n = null != e ? c.Z.getChangelog(e, "en-US") : null,
      l = null != e && c.Z.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: r,
      loadState: null != e && c.Z.getChangelogLoadStatus(e, t),
      defaultChangelog: n,
      defaultLoadState: l
    }
  }, [e, t]);
  return (n.useEffect(() => {
    null != e && null == r && i === a.LU.NOT_LOADED && o.Z.fetchChangelog(e, t)
  }, [e, r, i, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: false
  } : null == r && i === a.LU.LOADED_FAILURE ? {
    id: e,
    changelog: s,
    loaded: u !== a.LU.NOT_LOADED
  } : {
    id: e,
    changelog: r,
    loaded: i !== a.LU.NOT_LOADED
  }
}

function u() {
  let e = (0, l.e7)([i.default], () => i.default.locale),
    t = (0, l.e7)([c.Z], () => c.Z.latestChangelogId()),
    r = (0, l.e7)([c.Z], () => c.Z.getConfig()),
    n = null != r && 0 === Object.keys(r).length,
    o = null != r && Object.keys(r).length > 0 && null == t,
    a = (0, l.e7)([c.Z], () => c.Z.overrideId()),
    {
      changelog: u,
      loaded: h
    } = s(t, e),
    {
      changelog: d,
      loaded: g
    } = s(a, e);
  return null == a || null == d && g ? {
    id: t,
    changelog: u,
    loaded: !!n || h,
    clientTooOld: o
  } : {
    id: a,
    changelog: d,
    loaded: g,
    clientTooOld: false
  }
}