/** Chunk was on web.js **/
/** chunk id: 752843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => d,
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk628028 = require("./628028.jsx"),
  Chunk220427 = require("./220427.jsx"),
  Chunk777207 = require("./777207.js"),
  Chunk692547 = require("./692547.js"),
  Chunk330711 = require("./330711.js"),
  Chunk914439 = require("./914439.js");

function u(e) {
  let {
    type: t
  } = e;
  return <d icon={"user" === t ? (0, r.jsx)(o.t, {
      size: "xxs",
      color: s.Z.colors.INTERACTIVE_NORMAL
    }) : (0, r.jsx)(i.Q, {
      size: "xxs",
      color: s.Z.colors.INTERACTIVE_NORMAL
    })} text={"user" === t ? l.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : l.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION} />
}

function d(e) {
  let {
    icon: t,
    text: n
  } = e;
  return <div className={c.container}>{t}{<a.x color={"header-primary"} variant={"text-sm/medium"}>{n}</a.x>}</div>
}