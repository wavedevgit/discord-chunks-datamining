/** Chunk was on 33628 **/
/** chunk id: 570387, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk198993 = require("./198993.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93691 = require("./93691.js");
let c = [],
  d = function(e) {
    let {
      transitionState: r,
      onClose: t,
      questId: d,
      questName: f
    } = e, u = o.useMemo(() => {
      let e = new URL("".concat(window.location.origin, "/quests/").concat(d));
      return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString()
    }, [d]);
    return (0, n.jsx)(s.Modal, {
      actions: c,
      onClose: t,
      size: "md",
      subtitle: l.intl.format(l.t.y2Dgd4, {
        questName: f
      }),
      title: l.intl.string(l.t.tQWM2E),
      transitionState: r,
      children: (0, n.jsx)("div", {
        className: a.qrCodeWrapper,
        children: (0, n.jsx)(i.c2, {
          size: 200,
          text: u,
          overlaySize: i.cK.SIZE_40
        })
      })
    })
  }