/** Chunk was on 77828 **/
/** chunk id: 491390, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk194536 = require("./194536.js");
let l = [],
  p = function(e) {
    let {
      transitionState: t,
      onClose: r,
      questId: p
    } = e, f = o.useMemo(() => {
      let e = new URL("".concat(window.location.origin, "/quests/").concat(p));
      return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString()
    }, [p]);
    return (0, n.jsx)(s.Modal, {
      actions: l,
      onClose: r,
      size: "md",
      subtitle: i.intl.string(i.t.bBTjR9),
      title: i.intl.string(i.t.g3jrBu),
      transitionState: t,
      children: (0, n.jsx)("div", {
        className: c.m,
        children: (0, n.jsx)(a.Lx, {
          size: 200,
          text: f,
          overlaySize: a.Zs.SIZE_40
        })
      })
    })
  }