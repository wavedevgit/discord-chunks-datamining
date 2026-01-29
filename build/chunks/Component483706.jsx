/** Chunk was on 2827 **/
/** chunk id: 483706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk922529 = require("./922529.jsx"),
  Chunk840387 = require("./840387.js"),
  Chunk780964 = require("./780964.js"),
  Chunk12901 = require("./12901.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk899847 = require("./899847.js"),
  Chunk809697 = require("./809697.js"),
  Chunk153739 = require("./153739.js"),
  Chunk834981 = require("./834981.js"),
  Chunk191627 = require("./191627.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk191248 = require("./191248.js");
let C = e => {
    let {
      title: t,
      buttonText: n,
      onButtonPress: i
    } = e;
    return (0, r.jsxs)(l.BJc, {
      padding: {
        top: 12,
        bottom: 12
      },
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsx)(l.EYj, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(s.Button, {
        text: n,
        onClick: i,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  x = () => {
    let e = (0, A.vx)(),
      t = () => {
        (0, _.openUserSettings)(d.X.CONTENT_AND_SOCIAL_PANEL, {
          section: b.nc_.CONTENT_AND_SOCIAL
        })
      };
    return (0, r.jsxs)(l.BJc, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsxs)(l.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(l.EYj, {
          variant: "text-sm/semibold",
          children: E.intl.string(h.default.ahKIJO)
        }), (0, r.jsx)(l.EYj, {
          variant: "text-md/medium",
          color: "text-muted",
          children: E.intl.format(h.default.X9rW0j, {
            openSettingsHook: (e, n) => (0, r.jsx)(s.MzZ, {
              onClick: t,
              children: e
            }, n)
          })
        })]
      }), (0, r.jsx)(s.Button, {
        text: E.intl.formatToPlainString(h.default.ggcjPR, {
          count: e.length
        }),
        onClick: () => {
          (0, u.default)(), a.A.openPrivateChannel({
            recipientIds: e
          })
        },
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  S = () => {
    let e = (0, g.y3)(),
      t = (0, g.tl)(),
      {
        handleTabChange: n
      } = (0, m.A)();
    i.useEffect(() => {
      (null == e ? true : e.id) != null && t && p.Ay.fetchTeenSettingsAndConsents(null == e ? true : e.id)
    }, [null == e ? true : e.id, t]);
    let s = e => {
      n(e)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(l.EYj, {
          variant: "text-sm/semibold",
          children: E.intl.string(h.default.ahKIJO)
        }), (0, r.jsx)(l.EYj, {
          variant: "text-md/medium",
          color: "text-muted",
          children: E.intl.string(h.default.Sv236e)
        })]
      }), (0, r.jsx)(C, {
        title: E.intl.string(E.t["+o1pDZ"]),
        buttonText: E.intl.string(E.t.bt75uw),
        onButtonPress: () => s(f.u9.CONTENT_AND_SOCIAL)
      }), (0, r.jsx)(o.A, {
        className: O.yF
      }), (0, r.jsx)(C, {
        title: E.intl.string(E.t.OAuOHD),
        buttonText: E.intl.string(E.t.bt75uw),
        onButtonPress: () => s(f.u9.DATA_AND_PRIVACY)
      })]
    })
  },
  T = () => {
    let e = (0, c.Z)();
    return 0 === (0, A.vx)().length ? null : (0, r.jsx)("div", {
      className: O.kL,
      children: e ? (0, r.jsx)(x, {}) : (0, r.jsx)(S, {})
    })
  }