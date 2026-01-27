/** Chunk was on 21738 **/
/** chunk id: 395332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  DB: () => p,
  JY: () => u,
  on: () => d,
  ul: () => h
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk207803 = require("./207803.js"),
  Chunk368629 = require("./368629.js"),
  Chunk403362 = require("./403362.js"),
  Chunk415539 = require("./415539.js");

function o(e) {
  return (0, l.r)({
    location: e.location,
    autoTrackExposure: e.autoTrackExposure
  })
}

function c(e, t) {
  var n;
  let {
    data: l
  } = (0, i.FY)(), c = (0, s.A)(null != (n = null == l ? true : l.map(t).filter(a.Vq)) ? n : [], e), u = o(e);
  return r.useMemo(() => !u && [...c.values()].some(e => e.enabled), [u, c])
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
  } = (0, i.FY)(), l = (0, s.A)(null != (t = null == n ? true : n.map(e => e.editExperiment)) ? t : [], e), a = o(e);
  return r.useMemo(() => a ? [] : null == n ? true : n.filter(e => {
    var t;
    return (null == (t = l.get(e.editExperiment)) ? true : t.enabled) === true
  }), [n, l, a])
}

function h(e) {
  var t, n;
  let {
    data: l
  } = (0, i.FY)(), c = (0, s.A)(null != (t = null == l ? true : l.map(e => e.editExperiment)) ? t : [], e), u = (0, s.A)(null != (n = null == l ? true : l.map(e => e.coachmarkExperiment).filter(a.Vq)) ? n : [], e), d = o(e);
  return r.useMemo(() => d ? [] : null == l ? true : l.filter(e => {
    var t, n;
    return (null == (t = c.get(e.editExperiment)) ? true : t.enabled) === true && null != e.coachmarkExperiment && (null == (n = u.get(e.coachmarkExperiment)) ? true : n.enabled) === true
  }), [l, c, u, d])
}