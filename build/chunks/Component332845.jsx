/** Chunk was on 98335 **/
/** chunk id: 332845, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk417363 = require("./417363.js"),
  Chunk877481 = require("./877481.js"),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx");

function s(t, e) {
  let n = t.getBranchedName(e),
    s = (0, i.e7)([a.Z], () => {
      let e = a.Z.getState(t.id, t.branchId);
      return null == e ? true : e.installPath
    }, [t.branchId, t.id]);
  return null != s && (0, o.isDesktop)() ? (0, r.jsx)(l.sNh, {
    id: "create-shortcut",
    label: u.intl.string(u.t.T4tecH),
    action: () => c.Z.createShortcuts(true, false, n, t.id, s)
  }) : null
}