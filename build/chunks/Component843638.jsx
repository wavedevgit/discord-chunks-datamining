/** Chunk was on 57336 **/
/** chunk id: 843638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk828214 = require("./828214.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    selectedParticipant: t
  } = (0, r.cj)([o.Z], () => ({
    selectedParticipant: o.Z.getSelectedParticipant(e)
  }), [e]);
  return (0, i.jsx)(l.S8, {
    id: "call-grid-view",
    label: c.intl.string(c.t["3jrUBj"]),
    checked: null == t,
    action: () => {
      null != t ? a.Z.selectParticipant(e, null) : a.Z.selectParticipant(e, s.dF.AUTO)
    }
  })
}