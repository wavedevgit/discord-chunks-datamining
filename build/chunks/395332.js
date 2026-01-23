/** Chunk was on 42944 **/
/** chunk id: 395332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DB: () => p,
  JY: () => u,
  on: () => d,
  ul: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk207803 = require("./207803.js"),
  Chunk368629 = require("./368629.js"),
  Chunk403362 = require("./403362.js"),
  Chunk415539 = require("./415539.js");

function o(e) {
  return (0, i.r)({
    location: e.location,
    autoTrackExposure: e.autoTrackExposure
  })
}

function c(e, t) {
  var n;
  let {
    data: i
  } = (0, l.FY)(), c = (0, s.A)(null != (n = null == i ? true : i.map(t).filter(r.Vq)) ? n : [], e), u = o(e);
  return a.useMemo(() => !u && [...c.values()].some(e => e.enabled), [u, c])
}

function u(e) {
  return c(e, e => e.editExperiment)
}

function d(e) {
  return c(e, e => e.coachmarkExperiment)
}

function p(e) {
  var t;
  let {
    data: n
  } = (0, l.FY)(), i = (0, s.A)(null != (t = null == n ? true : n.map(e => e.editExperiment)) ? t : [], e), r = o(e);
  return a.useMemo(() => r ? [] : null == n ? true : n.filter(e => {
    var t;
    return (null == (t = i.get(e.editExperiment)) ? true : t.enabled) === true
  }), [n, i, r])
}

function m(e) {
  var t, n;
  let {
    data: i
  } = (0, l.FY)(), c = (0, s.A)(null != (t = null == i ? true : i.map(e => e.editExperiment)) ? t : [], e), u = (0, s.A)(null != (n = null == i ? true : i.map(e => e.coachmarkExperiment).filter(r.Vq)) ? n : [], e), d = o(e);
  return a.useMemo(() => d ? [] : null == i ? true : i.filter(e => {
    var t, n;
    return (null == (t = c.get(e.editExperiment)) ? true : t.enabled) === true && null != e.coachmarkExperiment && (null == (n = u.get(e.coachmarkExperiment)) ? true : n.enabled) === true
  }), [i, c, u, d])
}