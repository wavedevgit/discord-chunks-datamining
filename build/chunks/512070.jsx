/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7284 = require("./7284.js"),
  Chunk660662 = require("./660662.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397419 = require("./397419.js"),
  Chunk441047 = require("./441047.js");

function m(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    className: o
  } = e;
  return <div className={o}>{<a.X6 variant={"heading-md/semibold"} className={p.selectorHeading}>{u.intl.string(d.default.nP0ngY)}{<i.SrA size={"xs"} color={i.TVs.colors.TEXT_DEFAULT} />}</a.X6>}{<a.Kq direction={"horizontal"} align={"center"} wrap={true}>{c.P$.map(e => {
        let o = s.y[e],
          c = e === t;
        return (0, r.jsx)(i.ua7, {
          text: u.intl.string(o.name),
          children: t => {
            let {
              onMouseEnter: d,
              onMouseLeave: p
            } = t;
            return (0, r.jsx)(i.P3F, {
              className: l()(f.fontButton, {
                [f.selected]: c
              }),
              onClick: () => n(e),
              "aria-label": u.intl.string(o.name),
              onMouseEnter: d,
              onMouseLeave: p,
              children: (0, r.jsx)(a.xv, {
                variant: "text-lg/semibold",
                color: c ? "text-primary" : "text-default",
                className: l()(f.fontText, s.y[e].className),
                children: "Gg"
              })
            })
          }
        }, e)
      })}</a.Kq>}</div>
}