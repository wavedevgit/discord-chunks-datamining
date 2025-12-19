/** Chunk was on web.js **/
/** chunk id: 249881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk536780 = require("./536780.js");
let u = e => {
    let {
      markAsDismissed: t
    } = e;
    return i.useEffect(() => t(s.L.UNKNOWN), [t]), (0, r.jsx)(a.IGR, {
      className: c.newBadge,
      text: l.intl.string(l.t.y2b7CA)
    })
  },
  d = e => {
    let {
      title: t,
      body: n,
      img: i,
      newIndicatorDismissibleContent: s,
      onClick: d
    } = e;
    return (0, r.jsxs)("div", {
      className: c.container,
      children: [i, (0, r.jsxs)("div", {
        className: c.textContainer,
        children: [(0, r.jsxs)("div", {
          className: c.headerText,
          children: [(0, r.jsx)(o.ZP, {
            contentTypes: [s],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === s ? (0, r.jsx)(u, {
                markAsDismissed: n
              }) : null
            }
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(a.Button, {
        text: l.intl.string(l.t.vD60Pv),
        onClick: d
      })]
    })
  }