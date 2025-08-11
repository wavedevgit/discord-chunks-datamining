/** Chunk was on 45620 **/
/** chunk id: 168020, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => s
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk388032 = require("./388032.js"),
  Chunk940326 = require("./940326.js");
let s = e => {
  let {
    endDate: t,
    size: n = "md"
  } = e, {
    days: s,
    hours: c,
    minutes: u
  } = (0, a.Z)(t), d = function(e, t, n) {
    let r = e => "".concat(e.toString().padStart(2, "0"));
    return [r(e), r(t), r(n)].join(":")
  }(s, c, u);
  return <div className={o.container} role={"timer"}>{d.split("").map((e, t) => ":" === e ? <l.Text color={"none"} variant={"md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold"} className={o.delineator} aria-hidden={true} tag={"div"}>{e}</l.Text> : <l.Text color={"always-white"} variant={"md" === n ? "heading-md/bold" : "heading-xl/bold"} className={o.number} aria-hidden={true} tag={"div"}>{e}</l.Text>)}{<l.nn4>{i.intl.format(i.t.j6IyVV, {
        days: s,
        hours: c,
        minutes: u
      })}</l.nn4>}</div>
}