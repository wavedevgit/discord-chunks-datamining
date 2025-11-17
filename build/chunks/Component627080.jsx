/** Chunk was on 53145 **/
/** chunk id: 627080, original params: e,r,t (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => u
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk383170 = require("./383170.js");
let l = [],
  u = function(e) {
    let {
      transitionState: r,
      onClose: t,
      questId: u,
      questName: p
    } = e, f = o.useMemo(() => {
      let e = new URL("".concat(window.location.origin, "/quests/").concat(u));
      return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString()
    }, [u]);
    return (0, n.jsx)(s.Modal, {
      actions: l,
      onClose: t,
      size: "md",
      subtitle: a.intl.format(a.t.y2Dgd4, {
        questName: p
      }),
      title: a.intl.string(a.t.tQWM2E),
      transitionState: r,
      children: (0, n.jsx)("div", {
        className: c.qrCodeWrapper,
        children: (0, n.jsx)(i.c2, {
          size: 200,
          text: f,
          overlaySize: i.cK.SIZE_40
        })
      })
    })
  }