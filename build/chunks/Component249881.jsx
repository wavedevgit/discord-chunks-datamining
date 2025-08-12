/** Chunk was on 20501 **/
/** chunk id: 249881, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk719087 = require("./719087.js");
let u = e => {
    let {
      markAsDismissed: t
    } = e;
    return r.useEffect(() => t(o.L.UNKNOWN), [t]), (0, i.jsx)(a.IGR, {
      className: d.newBadge,
      text: c.intl.string(c.t.y2b7CA)
    })
  },
  m = e => {
    let {
      title: t,
      body: n,
      img: r,
      newIndicatorDismissibleContent: o,
      onClick: m
    } = e;
    return (0, i.jsxs)("div", {
      className: d.container,
      children: [r, (0, i.jsxs)("div", {
        className: d.textContainer,
        children: [(0, i.jsxs)("div", {
          className: d.headerText,
          children: [(0, i.jsx)(l.ZP, {
            contentTypes: [o],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === o ? (0, i.jsx)(u, {
                markAsDismissed: n
              }) : null
            }
          }), (0, i.jsx)(a.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, i.jsx)(s.zx, {
        size: s.Ph.MEDIUM,
        onClick: m,
        className: d.reconnectButton,
        children: c.intl.string(c.t.vD60Pj)
      })]
    })
  }