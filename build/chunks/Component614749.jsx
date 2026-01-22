/** Chunk was on web.js **/
/** chunk id: 614749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk758879 = require("./758879.js"),
  Chunk946015 = require("./946015.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk100406 = require("./100406.js"),
  Chunk878460 = require("./878460.js"),
  Chunk253932 = require("./253932.js"),
  Chunk12901 = require("./12901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk431144 = require("./431144.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk753765 = require("./753765.js");
let E = () => {
  let e = d.dm.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, o.cf)([u.A], () => u.A.getEmailSettings());

  function E(e) {
    (0, c.CA)(_.HO.FAMILY_CENTER_DIGEST, e)
  }
  return i.useEffect(() => {
    null == n && (0, c.cR)()
  }, [n]), (0, r.jsx)("div", {
    className: g.kL,
    children: (0, r.jsxs)(l.nVY, {
      label: m.intl.string(h.default.USIXU7),
      children: [(0, r.jsx)(l.dOG, {
        checked: e,
        description: m.intl.string(h.default["5MdB3j"]),
        onChange: d.dm.updateSetting,
        label: m.intl.string(h.default.zkEceS)
      }), e ? (0, r.jsx)(l.ZpM, {
        className: g.MT,
        type: l.ZpM.Types.CUSTOM,
        outline: true,
        children: (0, r.jsxs)(s.s, {
          justify: s.s.Justify.END,
          children: [(0, r.jsx)(s.s.Child, {
            children: (0, r.jsx)(l.Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: m.intl.string(h.default.xAVm7K)
            })
          }), (0, r.jsx)(l.DUT, {
            children: (0, r.jsx)(a.N_, {
              onClick: f.default,
              to: {
                pathname: p.BVt.FAMILY_CENTER,
                state: {
                  scrollRestoration: false
                }
              },
              children: m.intl.string(h.default.cUIXFY)
            })
          }), (0, r.jsx)(l.fkz, {
            icon: l.EdP,
            className: g.UE,
            disableColor: true
          })]
        })
      }) : null, (0, r.jsx)(l.dOG, {
        checked: !!t[_.HO.FAMILY_CENTER_DIGEST],
        description: m.intl.string(h.default.y34S46),
        onChange: E,
        label: m.intl.string(h.default.irvJKR)
      })]
    })
  })
}