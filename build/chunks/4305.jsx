/** Chunk was on web.js **/
/** chunk id: 4305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk352736 = require("./352736.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.js");

function l(e) {
  let {
    message: t,
    usernameHook: l,
    compact: c
  } = e, u = (0, o.ZP)(t), d = l(u), f = i.Z.getSystemMessageUserJoin(t.id), _ = s.intl.format(f, {
    username: u.nick,
    usernameHook: d
  });
  return <a.Z icon={n(570111)} timestamp={t.timestamp} compact={c}>{_}</a.Z>
}