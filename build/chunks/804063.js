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
    title: a.t["j7eA/v"],
    body: a.t.dTNNgo
  } : i.Z.isIgnoredForMessage(e) ? t = {
    title: a.t.XyWoKS,
    body: a.t["8t8doK"]
  } : (0, o.DQ)(e) && (t = {
    title: a.t["6vJKFh"],
    body: a.t.zKNgPD
  }), null == t || (r.Z.show({
    title: a.intl.string(t.title),
    body: a.intl.formatToPlainString(t.body, {
      name: e.author.username
    }),
    confirmText: a.intl.string(a.t.BddRzc)
  }), false)
}