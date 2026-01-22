/** Chunk was on 881 **/
/** chunk id: 541202, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk194871 = require("./194871.js"),
  Chunk25171 = require("./25171.js"),
  Chunk723702 = require("./723702.js"),
  Chunk985018 = require("./985018.jsx");

function d(t, e) {
  let n = t.getBranchedName(e),
    d = (0, i.bG)([a.A], () => {
      let e = a.A.getState(t.id, t.branchId);
      return null == e ? true : e.installPath
    }, [t.branchId, t.id]);
  return null != d && (0, o.isDesktop)() ? (0, r.jsx)(l.Drp, {
    id: "create-shortcut",
    label: u.intl.string(u.t.T4tecH),
    action: () => c.A.createShortcuts(true, false, n, t.id, d)
  }) : null
}