/** Chunk was on web.js **/
/** chunk id: 965042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  openPlayground: () => d,
  openPlaygroundFromParsedUrl: () => f
}), require("./896048.js"), require("./747238.js");
var Chunk398590 = require("./398590.js"),
  Chunk186111 = require("./186111.js"),
  Chunk287809 = require("./287809.js"),
  Chunk944771 = require("./944771.jsx"),
  Chunk3258 = require("./3258.jsx"),
  Chunk652215 = require("./652215.js");

function c(e) {
  for (let t of s.componentPlaygroundConfigs) {
    let n = t.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
    if (null != n) return n.id
  }
  return null
}

function u(e, t) {
  for (let n of s.componentPlaygroundConfigs) {
    let r = n.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
    if (null != r)
      for (let e of r.groups) {
        let n = e.stories.find(e => e.id.toLowerCase() === t.toLowerCase());
        if (null != n) return n.id
      }
  }
  return null
}

function d(e, t) {
  let n = a.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) returnfalse;
  let s = null != e ? c(e) : null,
    d = null != s && null != t ? u(s, t) : null;
  return o.PlaygroundStore.setState({
    selectedCollection: s,
    selectedStory: d
  }), i.A.getLayers().includes(l.zgK.COMPONENT_PLAYGROUND) || (0, r.id)(l.zgK.COMPONENT_PLAYGROUND), true
}

function f(e) {
  let {
    match: t
  } = e;
  return d(t.collection, t.story)
}