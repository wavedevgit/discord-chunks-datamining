/** Chunk was on web.js **/
/** chunk id: 833062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js"),
  Chunk925329 = require("./925329.js"),
  Chunk238454 = require("./238454.js");

function a(e) {
  let {
    application: t,
    useComma: n = false
  } = e;
  return <div className={o.applicationNameWrapper}>{<i.Z className={o.applicationIcon} game={t} size={i.Z.Sizes.XSMALL} />}{<strong>{"".concat(t.name).concat(n ? ", " : "")}</strong>}</div>
}