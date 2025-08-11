/** Chunk was on 36878 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk28682 = require("./28682.js"),
  Chunk558731 = require("./558731.js"),
  Chunk401250 = require("./401250.js"),
  Chunk867694 = require("./867694.js"),
  Chunk4794 = require("./4794.jsx"),
  Chunk142118 = require("./142118.js"),
  Chunk670304 = require("./670304.js"),
  Chunk357660 = require("./357660.js");
let m = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case l.J.ROOT:
      throw Error("Root nodes should never be rendered directly");
    case l.J.PANEL:
      return <f.T node={t} />;
    case l.J.PANE:
      return <d.Z node={t} />;
    case l.J.CATEGORY:
      return <u.Z node={t} />;
    case l.J.ACCORDION:
      return <c.Z node={t} />;
    case l.J.TOGGLE:
      return <s.I node={t} />;
    case l.J.BUTTON:
      return <r.I node={t} />;
    case l.J.CUSTOM:
    default:
      return <a.W node={t} />
  }
})