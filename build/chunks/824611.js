/** Chunk was on 50737 **/
/** chunk id: 824611, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  J: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk256311 = require("./256311.js"),
  Chunk773669 = require("./773669.js"),
  Chunk883600 = require("./883600.js"),
  Chunk559868 = require("./559868.js");

function s(e, t) {
  let {
    changelog: r,
    loadState: i,
    defaultChangelog: s,
    defaultLoadState: u
  } = (0, l.cf)([c.A], () => {
    let r = null != e ? c.A.getChangelog(e, t) : null,
      n = null != e ? c.A.getChangelog(e, "en-US") : null,
      l = null != e && c.A.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: r,
      loadState: null != e && c.A.getChangelogLoadStatus(e, t),
      defaultChangelog: n,
      defaultLoadState: l
    }
  }, [e, t]);
  return (n.useEffect(() => {
    null != e && null == r && i === a._f.NOT_LOADED && o.A.fetchChangelog(e, t)
  }, [e, r, i, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: false
  } : null == r && i === a._f.LOADED_FAILURE ? {
    id: e,
    changelog: s,
    loaded: u !== a._f.NOT_LOADED
  } : {
    id: e,
    changelog: r,
    loaded: i !== a._f.NOT_LOADED
  }
}

function u() {
  let e = (0, l.bG)([i.default], () => i.default.locale),
    t = (0, l.bG)([c.A], () => c.A.latestChangelogId()),
    r = (0, l.bG)([c.A], () => c.A.getConfig()),
    n = null != r && 0 === Object.keys(r).length,
    o = null != r && Object.keys(r).length > 0 && null == t,
    a = (0, l.bG)([c.A], () => c.A.overrideId()),
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