/** Chunk was on web.js **/
/** chunk id: 528567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => o,
  s: () => s
});
var Chunk939639 = require("./939639.js"),
  Chunk99815 = require("./99815.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  var t;
  return null != (t = ({
    [i.E.LOL_TOTAL_KILLS]: a.intl.string(a.t.aIbY2N),
    [i.E.LOL_TOTAL_DEATHS]: a.intl.string(a.t.Jec90d),
    [i.E.LOL_TOTAL_ASSISTS]: a.intl.string(a.t["8+lHWV"]),
    [i.E.LOL_TOTAL_DAMAGE_DEALT]: a.intl.string(a.t["XEmO+P"]),
    [i.E.LOL_TOTAL_DAMAGE_TAKEN]: a.intl.string(a.t["TcQ7//"]),
    [i.E.LOL_TOTAL_WINS]: a.intl.string(a.t["/QfLjI"]),
    [i.E.LOL_MAX_CREEP_SCORE]: a.intl.string(a.t.M5pp7e)
  })[e]) ? t : a.intl.string(a.t["IraB/v"])
}

function s(e) {
  let {
    statisticId: t,
    sortDesc: n,
    aggregationType: i
  } = e, s = o(t);
  if (i === r.k.MAX)
    if (n) return a.intl.formatToPlainString(a.t.nJYOFx, {
      statisticName: s
    });
    else return a.intl.formatToPlainString(a.t.SYKIbW, {
      statisticName: s
    });
  return n ? a.intl.formatToPlainString(a.t.M9sOp6, {
    statisticName: s
  }) : a.intl.formatToPlainString(a.t.USfwd3, {
    statisticName: s
  })
}