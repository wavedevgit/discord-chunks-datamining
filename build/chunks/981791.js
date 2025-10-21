/** Chunk was on web.js **/
/** chunk id: 981791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = r.dG4
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