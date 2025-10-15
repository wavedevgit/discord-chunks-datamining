/** Chunk was on web.js **/
/** chunk id: 804063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk668781 = require("./668781.js"),
  Chunk699516 = require("./699516.js"),
  Chunk493892 = require("./493892.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = null;
  return i.Z.isBlockedForMessage(e) ? t = {
    title: o.t["j7eA/g"],
    body: o.t.dTNNgr
  } : i.Z.isIgnoredForMessage(e) ? t = {
    title: o.t.XyWoKV,
    body: o.t["8t8doK"]
  } : (0, a.DQ)(e) && (t = {
    title: o.t["6vJKFk"],
    body: o.t.zKNgPF
  }), null == t || (r.Z.show({
    title: o.intl.string(t.title),
    body: o.intl.formatToPlainString(t.body, {
      name: e.author.username
    }),
    confirmText: o.intl.string(o.t.BddRzS)
  }), false)
}