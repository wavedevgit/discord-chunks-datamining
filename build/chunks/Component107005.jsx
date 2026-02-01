/** Chunk was on 9207 **/
/** chunk id: 107005, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784001 = require("./784001.js");
let d = e => {
    let {
      markAsDismissed: t
    } = e;
    return i.useEffect(() => t(a.i.UNKNOWN), [t]), (0, r.jsx)(l.LpS, {
      className: c.Ad,
      text: o.intl.string(o.t.y2b7CA)
    })
  },
  u = e => {
    let {
      title: t,
      body: n,
      img: i,
      newIndicatorDismissibleContent: a,
      onClick: u
    } = e;
    return (0, r.jsxs)("div", {
      className: c.kL,
      children: [i, (0, r.jsxs)("div", {
        className: c.FS,
        children: [(0, r.jsxs)("div", {
          className: c.TK,
          children: [(0, r.jsx)(s.Ay, {
            contentTypes: [a],
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              return t === a ? (0, r.jsx)(d, {
                markAsDismissed: n
              }) : null
            }
          }), (0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            children: t
          })]
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          children: n
        })]
      }), (0, r.jsx)(l.Button, {
        text: o.intl.string(o.t.vD60Pv),
        onClick: u
      })]
    })
  }