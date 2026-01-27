/** Chunk was on web.js **/
/** chunk id: 390756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mv: () => s,
  My: () => c,
  bV: () => l
}), require("./896048.js");
var Chunk353640 = require("./353640.js"),
  Chunk499867 = require("./499867.js"),
  Chunk121894 = require("./121894.js");
let o = (0, Chunk353640.v)((0, Chunk499867.eh)(() => ({
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
    }), (0, a.r)(() => o.setState({
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
    n.delete(e), (0, a.r)(() => o.setState({
      commandAnalyticsContext: n
    }))
  }
}