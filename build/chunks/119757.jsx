/** Chunk was on web.js **/
/** chunk id: 119757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk178625 = require("./178625.js");
let a = e => {
  let {
    title: t,
    subtitle: n,
    icon: a
  } = e;
  return <div className={o.wrapper}>{null != a && <a size={"xs"} color={"currentColor"} className={o.icon} />}{<i.Text variant={"text-md/normal"} className={o.title}>{t}</i.Text>}{null != n && "" !== n ? <i.Text variant={"text-xs/semibold"} className={o.subtitle}>{n}</i.Text> : null}</div>
}