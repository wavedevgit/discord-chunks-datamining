/** Chunk was on web.js **/
/** chunk id: 703400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk73930 = require("./73930.js");
let l = 20,
  c = e => {
    let {
      application: t,
      iconSize: n = l
    } = e, c = i.useMemo(() => o.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      size: n
    }), [t, n]);
    return null == t ? null : (0, r.jsxs)("div", {
      className: s.container,
      children: [(0, r.jsx)("img", {
        className: s.applicationIcon,
        src: c,
        alt: "",
        height: n,
        width: n
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: t.name
      })]
    })
  }