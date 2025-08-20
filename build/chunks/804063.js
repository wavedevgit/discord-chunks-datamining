/** Chunk was on 26434 **/
/** chunk id: 804063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk668781 = require("./668781.js"),
  Chunk699516 = require("./699516.js"),
  Chunk493892 = require("./493892.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = null;
  return i.Z.isBlockedForMessage(e) ? t = {
    title: o.t["j7eA/v"],
    body: o.t.dTNNgo
  } : i.Z.isIgnoredForMessage(e) ? t = {
    title: o.t.XyWoKS,
    body: o.t["8t8doK"]
  } : (0, l.DQ)(e) && (t = {
    title: o.t["6vJKFh"],
    body: o.t.zKNgPD
  }), null == t || (r.Z.show({
    title: o.intl.string(t.title),
    body: o.intl.formatToPlainString(t.body, {
      name: e.author.username
    }),
    confirmText: o.intl.string(o.t.BddRzc)
  }), false)
}