/** Chunk was on web.js **/
/** chunk id: 813744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk517100 = require("./517100.js"),
  Chunk594174 = require("./594174.js"),
  Chunk231338 = require("./231338.js"),
  Chunk113024 = require("./113024.js");

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isIdleStatusIndicatorEnabled),
    n = (0, Chunk442837.e7)([Chunk594174.default], () => {
      var e, t;
      return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports
    }),
    [f, _] = (0, Chunk442837.Wu)([Chunk517100.Z], () => [Chunk517100.Z.isIdle(), Chunk517100.Z.isAFK()]),
    p = [];
  return f || _ || p.push("ACTIVE"), f && p.push("IDLE"), _ && p.push("AFK"), require && exports ? <Chunk314910.ZP><div className={Chunk113024.container}>{<div className={Chunk113024.status}>{<Chunk481060.qbd status={p.includes("ACTIVE") ? Chunk231338.Sk.ONLINE : Chunk231338.Sk.IDLE} className={Chunk113024.statusIndicator} />}{<Chunk481060.Text variant={"text-md/normal"}>{"IDLE STATUS:"}</Chunk481060.Text>}{<div className={Chunk113024.statusText}><Chunk481060.Text variant={"text-md/bold"}>{p.join(" + ")}</Chunk481060.Text></div>}</div>}{f && <Chunk481060.Text variant={"text-md/normal"}>{"Idle since:"}{" "}{new Date(null != (e = Chunk517100.Z.getIdleSince()) ? module : 0).toLocaleDateString(true, {
          year: "numeric",
          day: "numeric",
          month: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })}</Chunk481060.Text>}</div></Chunk314910.ZP> : null
}