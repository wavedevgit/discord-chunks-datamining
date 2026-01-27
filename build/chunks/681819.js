/** Chunk was on web.js **/
/** chunk id: 681819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ML: () => y,
  dq: () => g,
  gn: () => E
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk573648 = require("./573648.js"),
  Chunk165120 = require("./165120.js"),
  Chunk962173 = require("./962173.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js");
let _ = {
    [Chunk652215.fg2.INSTAGRAM]: ["1036753656588017764"]
  },
  h = new Map([
    [Chunk652215.fg2.INSTAGRAM, new Date(2023, 1, 18).getTime()]
  ]),
  m = 30 * Chunk927813.A.Millis.DAY;

function g(e) {
  let {
    forUserProfile: t
  } = e, n = (0, o.bG)([u.default], () => u.default.getCurrentUser()), r = l.S.useExperiment({
    location: "f2f7ef_1"
  }, {
    autoTrackExposure: false
  }).allowPlayStationStaging;
  return e => {
    var i;
    return e.type === f.fg2.PLAYSTATION_STAGING ? r : !!(true !== n && (null == (i = _[e.type]) ? true : i.includes(n.id))) || !!t || e.enabled
  }
}

function E() {
  let e = (0, o.bG)([c.A], () => c.A.getAccounts()),
    t = g({
      forUserProfile: false
    }),
    n = r.useMemo(() => {
      let t = new Set;
      return e.forEach(e => t.add(e.type)), t
    }, [e]);
  return r.useMemo(() => a().sortBy(s.A.filter(t), [e => {
    var t;
    return !(h.has(e.type) && Date.now() < (null != (t = h.get(e.type)) ? t : 0) + m)
  }, e => n.has(e.type), e => e.hasMetadata, e => !f.ewM.has(e.type), e => e.name]), [n, t])
}

function y(e) {
  let [t, n] = r.useState(false);

  function i(e) {
    let {
      key: t
    } = e;
    t === p.dh.SHIFT && n(true)
  }

  function a(e) {
    let {
      key: t
    } = e;
    t === p.dh.SHIFT && n(false)
  }
  return (r.useEffect(() => (window.addEventListener("keydown", i), window.addEventListener("keyup", a), () => {
    window.removeEventListener("keydown", i), window.removeEventListener("keyup", a)
  }), []), t && e === f.fg2.TWITTER) ? f.fg2.TWITTER_LEGACY : e
}
Chunk652215.fg2.PLAYSTATION, Chunk652215.fg2.XBOX, Chunk652215.fg2.SPOTIFY, Chunk652215.fg2.STEAM, Chunk652215.fg2.TWITCH