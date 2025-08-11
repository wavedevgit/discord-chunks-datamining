/** Chunk was on web.js **/
/** chunk id: 843638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk828214 = require("./828214.js"),
  Chunk475179 = require("./475179.js"),
  Chunk358221 = require("./358221.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    selectedParticipant: t
  } = (0, i.cj)([s.Z], () => ({
    selectedParticipant: s.Z.getSelectedParticipant(e)
  }), [e]), n = () => {
    null != t ? a.Z.selectParticipant(e, null) : a.Z.selectParticipant(e, l.dF.AUTO)
  };
  return <o.S8 id={"call-grid-view"} label={c.intl.string(c.t["3jrUBg"])} checked={null == t} action={n} />
}