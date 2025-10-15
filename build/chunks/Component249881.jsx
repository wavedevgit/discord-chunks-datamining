/** Chunk was on web.js **/
/** chunk id: 249881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk375369 = require("./375369.js");
let d = e => {
    let {
      markAsDismissed: t
    } = e;
    return i.useEffect(() => t(l.L.UNKNOWN), [t]), (0, r.jsx)(o.IGR, {
      className: u.newBadge,
      text: c.intl.string(c.t.y2b7CA)
    })
  },
  f = e => {
    let {
      title: t,
      body: n,
      img: i,
      newIndicatorDismissibleContent: l,
      onClick: f
    } = e;
    return (0, r.jsxs)("div", {
      className: u.container,
      children: [i, (0, r.jsxs)("div", {
        className: u.textContainer,
        children: [(0, r.jsxs)("div", {
          className: u.headerText,
          children: [(0, r.jsx)(s.ZP, {
            contentTypes: [l],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === l ? (0, r.jsx)(d, {
                markAsDismissed: n
              }) : null
            }
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(a.zx, {
        size: a.Ph.MEDIUM,
        onClick: f,
        className: u.reconnectButton,
        children: c.intl.string(c.t.vD60Pv)
      })]
    })
  }