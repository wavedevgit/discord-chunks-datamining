/** Chunk was on web.js **/
/** chunk id: 251296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hX: () => d,
  no: () => f,
  q5: () => u,
  vl: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk350327 = require("./350327.js"),
  Chunk438379 = require("./438379.js"),
  Chunk823379 = require("./823379.js"),
  Chunk894883 = require("./894883.js");

function l(e) {
  return (0, a.J)({
    location: e.location,
    autoTrackExposure: e.autoTrackExposure
  })
}

function c(e, t) {
  var n;
  let {
    data: a
  } = (0, i.SK)(), c = (0, s.Z)(null != (n = null == a ? true : a.map(t).filter(o.lm)) ? n : [], e), u = l(e);
  return r.useMemo(() => !u && [...c.values()].some(e => e.enabled), [u, c])
}

function u(e) {
  return c(e, e => e.editExperiment)
}

function d(e) {
  return c(e, e => e.coachmarkExperiment)
}

function f(e) {
  var t;
  let {
    data: n
  } = (0, i.SK)(), a = (0, s.Z)(null != (t = null == n ? true : n.map(e => e.editExperiment)) ? t : [], e), o = l(e);
  return r.useMemo(() => o ? [] : null == n ? true : n.filter(e => {
    var t;
    return (null == (t = a.get(e.editExperiment)) ? true : t.enabled) === true
  }), [n, a, o])
}

function p(e) {
  var t, n;
  let {
    data: a
  } = (0, i.SK)(), c = (0, s.Z)(null != (t = null == a ? true : a.map(e => e.editExperiment)) ? t : [], e), u = (0, s.Z)(null != (n = null == a ? true : a.map(e => e.coachmarkExperiment).filter(o.lm)) ? n : [], e), d = l(e);
  return r.useMemo(() => d ? [] : null == a ? true : a.filter(e => {
    var t, n;
    return (null == (t = c.get(e.editExperiment)) ? true : t.enabled) === true && null != e.coachmarkExperiment && (null == (n = u.get(e.coachmarkExperiment)) ? true : n.enabled) === true
  }), [a, c, u, d])
}