/** Chunk was on web.js **/
/** chunk id: 966434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk668781 = require("./668781.js"),
  Chunk624138 = require("./624138.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n, o) {
  var s;
  r.Z.show({
    title: a.intl.string(a.t.XkIWkk),
    cancelText: a.intl.string(a.t["ETE/oC"]),
    confirmText: a.intl.string(a.t["cY+Oob"]),
    onConfirm: n,
    onCancel: o,
    body: a.intl.format(a.t["5/Xort"], {
      currentApplicationName: null != (s = null == e ? true : e.name) ? s : a.intl.string(a.t.G99XFs),
      currentApplicationChannelName: (0, i.Ew)(null == t ? true : t.name) ? a.intl.string(a.t.OGUjmt) : null == t ? true : t.name
    })
  })
}