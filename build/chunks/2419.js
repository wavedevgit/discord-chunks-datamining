/** Chunk was on web.js **/
/** chunk id: 2419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  openPlayground: () => d,
  openPlaygroundFromParsedUrl: () => f
}), require("./388685.js"), require("./35282.js");
var Chunk37234 = require("./37234.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk653592 = require("./653592.jsx"),
  Chunk156142 = require("./156142.jsx"),
  Chunk981631 = require("./981631.js");

function c(e) {
  for (let t of o.componentPlaygroundConfigs) {
    let n = t.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
    if (null != n) return n.id
  }
  return null
}

function u(e, t) {
  for (let n of o.componentPlaygroundConfigs) {
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
  let o = null != e ? c(e) : null,
    d = null != o && null != t ? u(o, t) : null;
  return s.PlaygroundStore.setState({
    selectedCollection: o,
    selectedStory: d
  }), i.Z.getLayers().includes(l.S9g.COMPONENT_PLAYGROUND) || (0, r.jN)(l.S9g.COMPONENT_PLAYGROUND), true
}

function f(e) {
  let {
    match: t
  } = e;
  return d(t.collection, t.story)
}