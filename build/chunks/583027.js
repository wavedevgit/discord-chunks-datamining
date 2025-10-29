/** Chunk was on 35755 **/
/** chunk id: 583027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mo: () => o,
  SC: () => c,
  _U: () => s
}), require("./388685.js");
var Chunk191336 = require("./191336.js"),
  Chunk180059 = require("./180059.js"),
  Chunk731965 = require("./731965.js");
let a = (0, Chunk191336.U)((0, Chunk180059.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function o(e) {
  let {
    command: t,
    location: n,
    sectionName: i
  } = e, {
    commandAnalyticsContext: l
  } = a.getState(), o = l.get(t);
  if (null == o || o.location !== n || o.sectionName !== i) {
    let e = new Map(l);
    e.set(t, {
      location: n,
      sectionName: i
    }), (0, r.j)(() => a.setState({
      commandAnalyticsContext: e
    }))
  }
}

function s(e) {
  let {
    commandAnalyticsContext: t
  } = a.getState();
  return t.get(e)
}

function c(e) {
  let {
    commandAnalyticsContext: t
  } = a.getState();
  if (t.has(e)) {
    let n = new Map(t);
    n.delete(e), (0, r.j)(() => a.setState({
      commandAnalyticsContext: n
    }))
  }
}