/** Chunk was on 78376 **/
/** chunk id: 614749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let b = () => {
  let e = u.dm.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, a.cf)([d.A], () => d.A.getEmailSettings());
  return i.useEffect(() => {
    null == n && (0, c.cR)()
  }, [n]), (0, r.jsx)("div", {
    className: f.kL,
    children: (0, r.jsxs)(o.nVY, {
      label: A.intl.string(g.default.USIXU7),
      children: [(0, r.jsx)(o.dOG, {
        checked: e,
        description: A.intl.string(g.default["5MdB3j"]),
        onChange: u.dm.updateSetting,
        label: A.intl.string(g.default.zkEceS)
      }), e ? (0, r.jsx)(o.ZpM, {
        className: f.MT,
        type: o.ZpM.Types.CUSTOM,
        outline: true,
        children: (0, r.jsxs)(s.s, {
          justify: s.s.Justify.END,
          children: [(0, r.jsx)(s.s.Child, {
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: A.intl.string(g.default.xAVm7K)
            })
          }), (0, r.jsx)(o.DUT, {
            children: (0, r.jsx)(l.N_, {
              onClick: _.default,
              to: {
                pathname: p.BVt.FAMILY_CENTER,
                state: {
                  scrollRestoration: false
                }
              },
              children: A.intl.string(g.default.cUIXFY)
            })
          }), (0, r.jsx)(o.fkz, {
            icon: o.EdP,
            className: f.UE,
            disableColor: true
          })]
        })
      }) : null, (0, r.jsx)(o.dOG, {
        checked: !!t[m.HO.FAMILY_CENTER_DIGEST],
        description: A.intl.string(g.default.y34S46),
        onChange: function(e) {
          (0, c.CA)(m.HO.FAMILY_CENTER_DIGEST, e)
        },
        label: A.intl.string(g.default.irvJKR)
      })]
    })
  })
}