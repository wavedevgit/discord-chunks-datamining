/** Chunk was on web.js **/
/** chunk id: 583027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mo: () => s,
  SC: () => c,
  _U: () => l
}), require("./388685.js");
var Chunk663042 = require("./663042.js"),
  Chunk690775 = require("./690775.js"),
  Chunk731965 = require("./731965.js");
let a = (0, Chunk663042.U)((0, Chunk690775.XR)(() => ({
  commandAnalyticsContext: new Map
})));

function s(e) {
  let {
    command: t,
    location: n,
    sectionName: r
  } = e, {
    commandAnalyticsContext: i
  } = a.getState(), s = i.get(t);
  if (null == s || s.location !== n || s.sectionName !== r) {
    let e = new Map(i);
    e.set(t, {
      location: n,
      sectionName: r
    }), (0, o.j)(() => a.setState({
      commandAnalyticsContext: e
    }))
  }
}

function l(e) {
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
    n.delete(e), (0, o.j)(() => a.setState({
      commandAnalyticsContext: n
    }))
  }
}