/** Chunk was on web.js **/
/** chunk id: 122021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Xj: () => g,
  fq: () => E,
  rR: () => b
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk487576 = require("./487576.js"),
  Chunk553795 = require("./553795.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js");
let _ = {
    [Chunk981631.ABu.INSTAGRAM]: ["1036753656588017764"]
  },
  m = new Map([
    [Chunk981631.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]
  ]),
  h = 30 * Chunk70956.Z.Millis.DAY;

function g(e) {
  let {
    forUserProfile: t
  } = e, n = (0, o.e7)([u.default], () => u.default.getCurrentUser()), r = l.c.useExperiment({
    location: "f2f7ef_1"
  }, {
    autoTrackExposure: false
  }).allowPlayStationStaging;
  return e => {
    var i;
    return e.type === f.ABu.PLAYSTATION_STAGING ? r : !!(true !== n && (null == (i = _[e.type]) ? true : i.includes(n.id))) || !!t || e.enabled
  }
}

function E() {
  let e = (0, o.e7)([c.Z], () => c.Z.getAccounts()),
    t = g({
      forUserProfile: false
    }),
    n = r.useMemo(() => {
      let t = new Set;
      return e.forEach(e => t.add(e.type)), t
    }, [e]);
  return r.useMemo(() => a().sortBy(s.Z.filter(t), [e => {
    var t;
    return !(m.has(e.type) && Date.now() < (null != (t = m.get(e.type)) ? t : 0) + h)
  }, e => n.has(e.type), e => e.hasMetadata, e => !f.vbS.has(e.type), e => e.name]), [n, t])
}

function b(e) {
  let [t, n] = r.useState(false);

  function i(e) {
    let {
      key: t
    } = e;
    t === p.vn.SHIFT && n(true)
  }

  function a(e) {
    let {
      key: t
    } = e;
    t === p.vn.SHIFT && n(false)
  }
  return (r.useEffect(() => (window.addEventListener("keydown", i), window.addEventListener("keyup", a), () => {
    window.removeEventListener("keydown", i), window.removeEventListener("keyup", a)
  }), []), t && e === f.ABu.TWITTER) ? f.ABu.TWITTER_LEGACY : e
}
Chunk981631.ABu.PLAYSTATION, Chunk981631.ABu.XBOX, Chunk981631.ABu.SPOTIFY, Chunk981631.ABu.STEAM, Chunk981631.ABu.TWITCH