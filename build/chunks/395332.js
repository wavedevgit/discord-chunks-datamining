/** Chunk was on 42944 **/
/** chunk id: 395332, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  DB: () => m,
  JY: () => d,
  on: () => u,
  ul: () => p
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

function c(e, a) {
  var n;
  let {
    data: i
  } = (0, l.FY)(), c = (0, s.A)(null != (n = null == i ? true : i.map(a).filter(r.Vq)) ? n : [], e), d = o(e);
  return t.useMemo(() => !d && [...c.values()].some(e => e.enabled), [d, c])
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
    data: n
  } = (0, l.FY)(), i = (0, s.A)(null != (a = null == n ? true : n.map(e => e.editExperiment)) ? a : [], e), r = o(e);
  return t.useMemo(() => r ? [] : null == n ? true : n.filter(e => {
    var a;
    return (null == (a = i.get(e.editExperiment)) ? true : a.enabled) === true
  }), [n, i, r])
}

function p(e) {
  var a, n;
  let {
    data: i
  } = (0, l.FY)(), c = (0, s.A)(null != (a = null == i ? true : i.map(e => e.editExperiment)) ? a : [], e), d = (0, s.A)(null != (n = null == i ? true : i.map(e => e.coachmarkExperiment).filter(r.Vq)) ? n : [], e), u = o(e);
  return t.useMemo(() => u ? [] : null == i ? true : i.filter(e => {
    var a, n;
    return (null == (a = c.get(e.editExperiment)) ? true : a.enabled) === true && null != e.coachmarkExperiment && (null == (n = d.get(e.coachmarkExperiment)) ? true : n.enabled) === true
  }), [i, c, d, u])
}