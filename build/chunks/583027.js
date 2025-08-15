/** Chunk was on 62981 **/
/** chunk id: 583027, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Mo: () => c,
  SC: () => d,
  _U: () => l
}), require("./388685.js");
var Chunk97519 = require("./97519.js"),
  Chunk296574 = require("./296574.js"),
  Chunk731965 = require("./731965.js");
let a = (0, Chunk97519.U)((0, Chunk296574.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function c(e) {
  let {
    command: n,
    location: t,
    sectionName: r
  } = e, {
    commandAnalyticsContext: o
  } = a.getState(), c = o.get(n);
  if (null == c || c.location !== t || c.sectionName !== r) {
    let e = new Map(o);
    e.set(n, {
      location: t,
      sectionName: r
    }), (0, i.j)(() => a.setState({
      commandAnalyticsContext: e
    }))
  }
}

function l(e) {
  let {
    commandAnalyticsContext: n
  } = a.getState();
  return n.get(e)
}

function d(e) {
  let {
    commandAnalyticsContext: n
  } = a.getState();
  if (n.has(e)) {
    let t = new Map(n);
    t.delete(e), (0, i.j)(() => a.setState({
      commandAnalyticsContext: t
    }))
  }
}