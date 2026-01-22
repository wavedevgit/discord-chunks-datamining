/** Chunk was on web.js **/
/** chunk id: 345981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => a
});
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = r.tEg
  } = e;
  return null != t ? i.intl.format(i.t.dXdgno, {
    username: n,
    applicationName: t.name,
    usernameHook: a
  }) : i.intl.format(i.t.O829Uu, {
    username: n,
    usernameHook: a
  })
}