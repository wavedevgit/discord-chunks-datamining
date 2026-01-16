/** Chunk was on web.js **/
/** chunk id: 583027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mo: () => s,
  SC: () => c,
  _U: () => l
}), require("./388685.js");
var Chunk121168 = require("./121168.js"),
  Chunk110859 = require("./110859.js"),
  Chunk731965 = require("./731965.js");
let o = (0, Chunk121168.U)((0, Chunk110859.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function s(e) {
  let {
    command: t,
    location: n,
    sectionName: r
  } = e, {
    commandAnalyticsContext: i
  } = o.getState(), s = i.get(t);
  if (null == s || s.location !== n || s.sectionName !== r) {
    let e = new Map(i);
    e.set(t, {
      location: n,
      sectionName: r
    }), (0, a.j)(() => o.setState({
      commandAnalyticsContext: e
    }))
  }
}

function l(e) {
  let {
    commandAnalyticsContext: t
  } = o.getState();
  return t.get(e)
}

function c(e) {
  let {
    commandAnalyticsContext: t
  } = o.getState();
  if (t.has(e)) {
    let n = new Map(t);
    n.delete(e), (0, a.j)(() => o.setState({
      commandAnalyticsContext: n
    }))
  }
}