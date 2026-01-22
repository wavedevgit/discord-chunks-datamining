/** Chunk was on web.js **/
/** chunk id: 390756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mv: () => o,
  My: () => c,
  bV: () => l
}), require("./896048.js");
var Chunk353640 = require("./353640.js"),
  Chunk499867 = require("./499867.js"),
  Chunk121894 = require("./121894.js");
let s = (0, Chunk353640.v)((0, Chunk499867.eh)(() => ({
  commandAnalyticsContext: new Map
})));

function o(e) {
  let {
    command: t,
    location: n,
    sectionName: r
  } = e, {
    commandAnalyticsContext: i
  } = s.getState(), o = i.get(t);
  if (null == o || o.location !== n || o.sectionName !== r) {
    let e = new Map(i);
    e.set(t, {
      location: n,
      sectionName: r
    }), (0, a.r)(() => s.setState({
      commandAnalyticsContext: e
    }))
  }
}

function l(e) {
  let {
    commandAnalyticsContext: t
  } = s.getState();
  return t.get(e)
}

function c(e) {
  let {
    commandAnalyticsContext: t
  } = s.getState();
  if (t.has(e)) {
    let n = new Map(t);
    n.delete(e), (0, a.r)(() => s.setState({
      commandAnalyticsContext: n
    }))
  }
}