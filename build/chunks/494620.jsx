/** Chunk was on web.js **/
/** chunk id: 494620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk317812 = require("./317812.js"),
  l = function(e) {
    return e.INFO = "info", e.WARNING = "warning", e
  }({});
let c = {
    info: Chunk317812.info,
    warning: Chunk317812.warning
  },
  u = {
    info: Chunk481060.d3s,
    warning: Chunk481060.Mgn
  };

function d(e) {
  let {
    children: t,
    className: n,
    look: i = "info"
  } = e, l = u[i];
  return <div className={o()(s.root, n, c[i])}>{<l className={s.icon} color={"currentColor"} />}{<a.Text className={s.text} variant={"text-sm/medium"} color={"text-default"}>{t}</a.Text>}</div>
}