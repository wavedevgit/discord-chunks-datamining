/** Chunk was on web.js **/
/** chunk id: 608640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a
});
var Chunk157559 = require("./157559.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    onConfirm: t
  } = e;
  return r.A.show({
    title: i.intl.string(i.t.rWQr9U),
    body: i.intl.string(i.t["7Aa3S7"]),
    confirmText: i.intl.string(i.t["/k52hw"]),
    confirmVariant: "critical-primary",
    cancelText: i.intl.string(i.t["4nkxA+"]),
    onConfirm: t,
    onCancel: () => {
      r.A.close()
    }
  })
}