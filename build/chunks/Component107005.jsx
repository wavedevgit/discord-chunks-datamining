/** Chunk was on web.js **/
/** chunk id: 107005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784001 = require("./784001.js");
let u = e => {
    let {
      markAsDismissed: t
    } = e;
    return i.useEffect(() => t(o.i.UNKNOWN), [t]), (0, r.jsx)(a.LpS, {
      className: c.Ad,
      text: l.intl.string(l.t.y2b7CA)
    })
  },
  d = e => {
    let {
      title: t,
      body: n,
      img: i,
      newIndicatorDismissibleContent: o,
      onClick: d
    } = e;
    return (0, r.jsxs)("div", {
      className: c.kL,
      children: [i, (0, r.jsxs)("div", {
        className: c.FS,
        children: [(0, r.jsxs)("div", {
          className: c.TK,
          children: [(0, r.jsx)(s.Ay, {
            contentTypes: [o],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === o ? (0, r.jsx)(u, {
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