/** Chunk was on 45956 **/
/** chunk id: 251296, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  hX: () => u,
  no: () => m,
  q5: () => d,
  vl: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk350327 = require("./350327.js"),
  Chunk438379 = require("./438379.js"),
  Chunk823379 = require("./823379.js"),
  Chunk894883 = require("./894883.js");

function o(e) {
  return (0, n.J)({
    location: e.location,
    autoTrackExposure: e.autoTrackExposure
  })
}

function c(e, a) {
  var t;
  let {
    data: n
  } = (0, l.SK)(), c = (0, s.Z)(null != (t = null == n ? true : n.map(a).filter(r.lm)) ? t : [], e), d = o(e);
  return i.useMemo(() => !d && [...c.values()].some(e => e.enabled), [d, c])
}

function d(e) {
  return c(e, e => e.editExperiment)
}

function u(e) {
  return c(e, e => e.coachmarkExperiment)
}

function m(e) {
  var a;
  let {
    data: t
  } = (0, l.SK)(), n = (0, s.Z)(null != (a = null == t ? true : t.map(e => e.editExperiment)) ? a : [], e), r = o(e);
  return i.useMemo(() => r ? [] : null == t ? true : t.filter(e => {
    var a;
    return (null == (a = n.get(e.editExperiment)) ? true : a.enabled) === true
  }), [t, n, r])
}

function p(e) {
  var a, t;
  let {
    data: n
  } = (0, l.SK)(), c = (0, s.Z)(null != (a = null == n ? true : n.map(e => e.editExperiment)) ? a : [], e), d = (0, s.Z)(null != (t = null == n ? true : n.map(e => e.coachmarkExperiment).filter(r.lm)) ? t : [], e), u = o(e);
  return i.useMemo(() => u ? [] : null == n ? true : n.filter(e => {
    var a, t;
    return (null == (a = c.get(e.editExperiment)) ? true : a.enabled) === true && null != e.coachmarkExperiment && (null == (t = d.get(e.coachmarkExperiment)) ? true : t.enabled) === true
  }), [n, c, d, u])
}