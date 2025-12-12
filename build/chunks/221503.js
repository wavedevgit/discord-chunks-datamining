/** Chunk was on web.js **/
/** chunk id: 221503, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => o
});
var Chunk668781 = require("./668781.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    onConfirm: t
  } = e;
  return r.Z.show({
    title: i.intl.string(i.t.rWQr9U),
    body: i.intl.string(i.t["7Aa3S7"]),
    confirmText: i.intl.string(i.t["/k52hw"]),
    confirmVariant: "critical-primary",
    cancelText: i.intl.string(i.t["4nkxA+"]),
    onConfirm: t,
    onCancel: () => {
      r.Z.close()
    }
  })
}