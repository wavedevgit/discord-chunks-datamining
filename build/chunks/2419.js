/** Chunk was on 1272 **/
/** chunk id: 2419, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  openPlayground: () => c,
  openPlaygroundFromParsedUrl: () => u
}), require("./388685.js"), require("./35282.js");
var Chunk37234 = require("./37234.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk653592 = require("./653592.jsx"),
  Chunk156142 = require("./156142.jsx"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  let n = l.default.getCurrentUser();
  if (!(null == n ? true : n.isStaff()) && !(null == n ? true : n.isStaffPersonal())) returnfalse;
  let c = null != e ? function(e) {
      for (let t of a.componentPlaygroundConfigs) {
        let n = t.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
        if (null != n) return n.id
      }
      return null
    }(e) : null,
    u = null != c && null != t ? function(e, t) {
      for (let n of a.componentPlaygroundConfigs) {
        let r = n.collections.find(t => t.id.toLowerCase() === e.toLowerCase());
        if (null != r)
          for (let e of r.groups) {
            let n = e.stories.find(e => e.id.toLowerCase() === t.toLowerCase());
            if (null != n) return n.id
          }
      }
      return null
    }(c, t) : null;
  return o.PlaygroundStore.setState({
    selectedCollection: c,
    selectedStory: u
  }), i.Z.getLayers().includes(s.S9g.COMPONENT_PLAYGROUND) || (0, r.jN)(s.S9g.COMPONENT_PLAYGROUND), true
}

function u(e) {
  let {
    match: t
  } = e;
  return c(t.collection, t.story)
}