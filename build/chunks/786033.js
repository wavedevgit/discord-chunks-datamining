/** Chunk was on 78888 **/
/** chunk id: 786033, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  t: () => a
});
var Chunk157559 = require("./157559.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  l.A.show({
    title: s.intl.string(s.t.vElC9b),
    body: s.intl.format(s.t.yslqFM, {
      name: e
    }),
    cancelText: s.intl.string(s.t.psXQHP),
    onCancel() {
      window.open(i.A.getArticleURL(r.MVz.PERMISSIONS_LOCKOUT))
    }
  })
}