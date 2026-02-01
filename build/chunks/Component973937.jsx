/** Chunk was on 42402 **/
/** chunk id: 973937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk477782 = require("./477782.js"),
  Chunk367513 = require("./367513.js"),
  Chunk313961 = require("./313961.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    selectedParticipant: t
  } = (0, l.cf)([a.A], () => ({
    selectedParticipant: a.A.getSelectedParticipant(e)
  }), [e]);
  return (0, r.jsx)(i.sL, {
    id: "call-grid-view",
    label: c.intl.string(c.t["3jrUBj"]),
    checked: null == t,
    action: () => {
      null != t ? s.A.selectParticipant(e, null) : s.A.selectParticipant(e, o.jd.AUTO)
    }
  })
}