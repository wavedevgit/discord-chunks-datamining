/** Chunk was on web.js **/
/** chunk id: 825591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk157559 = require("./157559.js"),
  Chunk240248 = require("./240248.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n, o) {
  var s;
  r.A.show({
    title: a.intl.string(a.t.XkIWkk),
    cancelText: a.intl.string(a.t["ETE/oC"]),
    confirmText: a.intl.string(a.t["cY+Oob"]),
    onConfirm: n,
    onCancel: o,
    body: a.intl.format(a.t["5/Xort"], {
      currentApplicationName: null != (s = null == e ? true : e.name) ? s : a.intl.string(a.t.G99XFs),
      currentApplicationChannelName: (0, i.uJ)(null == t ? true : t.name) ? a.intl.string(a.t.OGUjmt) : null == t ? true : t.name
    })
  })
}