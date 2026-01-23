/** Chunk was on 77828 **/
/** chunk id: 491390, original params: e,r,t (module,exports,require) **/
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
let c = [],
  p = function(e) {
    let {
      transitionState: r,
      onClose: t,
      questId: p
    } = e, u = o.useMemo(() => {
      let e = new URL("".concat(window.location.origin, "/quests/").concat(p));
      return e.searchParams.append("referrer_id", "quest_home_qr_code"), e.toString()
    }, [p]);
    return (0, n.jsx)(s.Modal, {
      actions: c,
      onClose: t,
      size: "md",
      subtitle: a.intl.string(a.t.bBTjR9),
      title: a.intl.string(a.t.g3jrBu),
      transitionState: r,
      children: (0, n.jsx)("div", {
        className: l.m,
        children: (0, n.jsx)(i.Lx, {
          size: 200,
          text: u,
          overlaySize: i.Zs.SIZE_40
        })
      })
    })
  }