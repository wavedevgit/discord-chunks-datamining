/** Chunk was on web.js **/
/** chunk id: 521450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk319498 = require("./319498.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk930441 = require("./930441.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk223336 = require("./223336.js");
let E = () => {
  let e = d.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, s.cj)([u.Z], () => u.Z.getEmailSettings());

  function E(e) {
    (0, c.pR)(_.$Z.FAMILY_CENTER_DIGEST, e)
  }
  return i.useEffect(() => {
    null == n && (0, c.Y7)()
  }, [n]), (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsxs)(l.C3N, {
      label: h.intl.string(m.default.USIXU7),
      children: [(0, r.jsx)(l.rsf, {
        checked: e,
        description: h.intl.string(m.default["5MdB3j"]),
        onChange: d.Ex.updateSetting,
        label: h.intl.string(m.default.zkEceS)
      }), e ? (0, r.jsx)(l.Zbd, {
        className: g.enableCard,
        type: l.Zbd.Types.CUSTOM,
        outline: true,
        children: (0, r.jsxs)(o.k, {
          justify: o.k.Justify.END,
          children: [(0, r.jsx)(o.k.Child, {
            children: (0, r.jsx)(l.Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: h.intl.string(m.default.xAVm7K)
            })
          }), (0, r.jsx)(l.P3F, {
            children: (0, r.jsx)(a.rU, {
              onClick: f.default,
              to: {
                pathname: p.Z5c.FAMILY_CENTER,
                state: {
                  scrollRestoration: false
                }
              },
              children: h.intl.string(m.default.cUIXFY)
            })
          }), (0, r.jsx)(l.G2e, {
            icon: l.ZSh,
            className: g.arrow,
            disableColor: true
          })]
        })
      }) : null, (0, r.jsx)(l.rsf, {
        checked: !!t[_.$Z.FAMILY_CENTER_DIGEST],
        description: h.intl.string(m.default.y34S46),
        onChange: E,
        label: h.intl.string(m.default.irvJKR)
      })]
    })
  })
}