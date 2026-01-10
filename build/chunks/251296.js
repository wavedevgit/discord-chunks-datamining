/** Chunk was on web.js **/
/** chunk id: 251296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  no: () => d,
  q5: () => u,
  zw: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk350327 = require("./350327.js"),
  Chunk438379 = require("./438379.js"),
  Chunk894883 = require("./894883.js");

function s(e) {
  return (0, a.J)({
    location: e.location,
    autoTrackExposure: e.autoTrackExposure
  })
}

function l(e, t) {
  var n;
  let {
    data: a
  } = (0, i.SK)(), l = (0, o.Z)(null != (n = null == a ? true : a.map(t)) ? n : [], e), c = s(e);
  return r.useMemo(() => !c && [...l.values()].some(e => e.enabled), [c, l])
}

function c(e) {
  return l(e, e => e.viewExperiment)
}

function u(e) {
  return l(e, e => e.editExperiment)
}

function d(e) {
  var t;
  let {
    data: n
  } = (0, i.SK)(), a = (0, o.Z)(null != (t = null == n ? true : n.map(e => e.editExperiment)) ? t : [], e), l = s(e);
  return r.useMemo(() => l ? [] : null == n ? true : n.filter(e => {
    var t;
    return (null == (t = a.get(e.editExperiment)) ? true : t.enabled) === true
  }), [n, a, l])
}