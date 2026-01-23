/** Chunk was on web.js **/
/** chunk id: 38720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk411268 = require("./411268.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js"),
  Chunk562628 = require("./562628.js");
let _ = e => {
    let {
      text: t,
      badge: n,
      variant: a
    } = e;
    return (0, r.jsxs)(i.Text, {
      color: "text-default",
      variant: null != a ? a : "text-sm/normal",
      children: [t, " ", n]
    })
  },
  h = e => {
    let {
      text: t,
      variant: n
    } = e;
    return (0, r.jsx)(i.Text, {
      color: "text-strong",
      variant: null != n ? n : "text-md/semibold",
      children: t
    })
  },
  m = e => {
    let {
      includes: t
    } = e;
    return t ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.A9s, {
        size: "md",
        color: "currentColor",
        className: p.$8,
        "aria-hidden": true
      }), (0, r.jsx)(i.AC4, {
        children: d.intl.string(d.t["tq+6t/"])
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.PGe, {
        size: "md",
        color: "currentColor",
        className: p.ut,
        "aria-hidden": true
      }), (0, r.jsx)(i.AC4, {
        children: d.intl.string(d.t.l4qZrp)
      })]
    })
  },
  g = (e, t, n, g, E) => {
    let y = {
        0: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["09yRK3"])
          }),
          column1: (0, r.jsx)(h, {
            text: s.Ay.formatPriceString(e, c.WT.MONTH)
          }),
          column2: (0, r.jsx)(h, {
            text: n ? g : s.Ay.formatPriceString(t, c.WT.MONTH)
          }),
          withBottomBorder: true
        },
        1: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.vaDeDV)
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        2: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.DmfiwT)
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        3: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.OuItFi)
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        4: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["9kRJS8"])
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        5: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["ufhQC+"])
          }),
          column1: (0, r.jsx)(h, {
            text: (0, s.EJ)(c.PremiumTypes.TIER_0)
          }),
          column2: (0, r.jsx)(h, {
            text: (0, s.EJ)(c.PremiumTypes.TIER_2)
          })
        },
        6: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.VwxlMw)
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(h, {
            text: d.intl.string(d.t.XdN6KU)
          })
        },
        7: {
          label: (0, r.jsx)(_, {
            text: d.intl.formatToPlainString(d.t.nyhDpw, {
              numBoosts: c.M4,
              percentageOff: (0, o.l9)(a.default.locale, c.oX / 100)
            })
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        8: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.tFbcuM)
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        9: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(f.default["86GtGH"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        10: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["aR/zTk"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        11: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.IzrZHz)
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        12: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["HwNg/Z"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        13: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["y+HHL9"])
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        14: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.qQxxVc)
          }),
          column1: (0, r.jsx)(m, {
            includes: true
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        15: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.xi0NBE)
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          }),
          withBottomBorder: true
        },
        16: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t.MfsUHm)
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        22: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["A+0H1f"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        17: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["il8+nC"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          })
        },
        18: {
          label: (0, r.jsx)(_, {
            text: d.intl.formatToPlainString(d.t["8crdzJ"], {
              maxChars: u.CS1
            })
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          }),
          withBottomBorder: true
        },
        19: {
          label: (0, r.jsx)(i.Heading, {
            className: p.__invalid_textColor,
            variant: "display-sm",
            children: "Make Discord Yours"
          }),
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        20: {
          label: (0, r.jsx)(i.Heading, {
            className: p.__invalid_textColor,
            variant: "display-sm",
            children: "Enjoy an Upgraded Discord"
          }),
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        21: {
          label: (0, r.jsx)(i.Heading, {
            className: p.__invalid_textColor,
            variant: "display-sm",
            children: "Show Up the Way You Want"
          }),
          column1: null,
          column2: null,
          withBottomBorder: false
        },
        23: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["93xPy3"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          }),
          withBottomBorder: true
        },
        24: {
          label: (0, r.jsx)(_, {
            text: d.intl.string(d.t["5BJqNF"])
          }),
          column1: (0, r.jsx)(m, {
            includes: false
          }),
          column2: (0, r.jsx)(m, {
            includes: true
          }),
          withBottomBorder: false
        }
      },
      {
        enabled: b
      } = l.K.useExperiment({
        location: "useGetPlanComparisonTableRows"
      }),
      O = E === c.xc.FP_ONLY;
    return [...b ? [] : [y[0]], y[1], y[2], y[3], y[4], y[5], y[6], ...O ? [] : [y[7]], y[8], y[9], y[10], y[11], y[12], ...O ? [] : [y[13]], y[14], y[15], y[16], y[17], y[18], y[23], y[24]]
  }