/** Chunk was on 39442 **/
/** chunk id: 262804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804116 = require("./804116.js");

function c(e) {
  let {
    widgetType: t,
    gameCount: n
  } = e, c = (0, a.Gv)(t);
  return n <= c ? null : (0, r.jsx)("div", {
    role: "alert",
    className: o.notice,
    children: (0, r.jsx)(i.M14, {
      type: "warning",
      children: l.intl.formatToPlainString(l.t.Rv3wYq, {
        maxGames: c
      })
    })
  })
}