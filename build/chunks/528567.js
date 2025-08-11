/** Chunk was on web.js **/
/** chunk id: 528567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a,
  s: () => s
});
var Chunk939639 = require("./939639.js"),
  Chunk99815 = require("./99815.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  var t;
  return null != (t = ({
    [i.E.LOL_TOTAL_KILLS]: o.intl.string(o.t.aIbY2N),
    [i.E.LOL_TOTAL_DEATHS]: o.intl.string(o.t.Jec90d),
    [i.E.LOL_TOTAL_ASSISTS]: o.intl.string(o.t["8+lHWV"]),
    [i.E.LOL_TOTAL_DAMAGE_DEALT]: o.intl.string(o.t["XEmO+P"]),
    [i.E.LOL_TOTAL_DAMAGE_TAKEN]: o.intl.string(o.t["TcQ7//"]),
    [i.E.LOL_TOTAL_WINS]: o.intl.string(o.t["/QfLjI"]),
    [i.E.LOL_MAX_CREEP_SCORE]: o.intl.string(o.t.M5pp7e)
  })[e]) ? t : o.intl.string(o.t["IraB/v"])
}

function s(e) {
  let {
    statisticId: t,
    sortDesc: n,
    aggregationType: i
  } = e, s = a(t);
  if (i === r.k.MAX)
    if (n) return o.intl.formatToPlainString(o.t.nJYOFx, {
      statisticName: s
    });
    else return o.intl.formatToPlainString(o.t.SYKIbW, {
      statisticName: s
    });
  return n ? o.intl.formatToPlainString(o.t.M9sOp6, {
    statisticName: s
  }) : o.intl.formatToPlainString(o.t.USfwd3, {
    statisticName: s
  })
}