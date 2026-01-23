/** Chunk was on web.js **/
/** chunk id: 483706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => S
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
let v = e => {
    let {
      title: t,
      buttonText: n,
      onButtonPress: i
    } = e;
    return (0, r.jsxs)(a.BJc, {
      padding: {
        top: 12,
        bottom: 12
      },
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsx)(a.EYj, {
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
  A = () => {
    let e = (0, m.vx)(),
      t = () => {
        (0, d.default)(), o.A.openPrivateChannel({
          recipientIds: e
        })
      },
      n = () => {
        (0, f.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, {
          section: E.nc_.CONTENT_AND_SOCIAL
        })
      };
    return (0, r.jsxs)(a.BJc, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsxs)(a.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(a.EYj, {
          variant: "text-sm/semibold",
          children: b.intl.string(y.default.ahKIJO)
        }), (0, r.jsx)(a.EYj, {
          variant: "text-md/medium",
          color: "text-muted",
          children: b.intl.format(y.default.X9rW0j, {
            openSettingsHook: (e, t) => (0, r.jsx)(s.MzZ, {
              onClick: n,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)(s.Button, {
        text: b.intl.formatToPlainString(y.default.ggcjPR, {
          count: e.length
        }),
        onClick: t,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  I = () => {
    let e = (0, h.y3)(),
      t = (0, h.tl)(),
      {
        handleTabChange: n
      } = (0, _.A)();
    i.useEffect(() => {
      (null == e ? true : e.id) != null && t && p.Ay.fetchTeenSettingsAndConsents(null == e ? true : e.id)
    }, [null == e ? true : e.id, t]);
    let s = e => {
      n(e)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(a.EYj, {
          variant: "text-sm/semibold",
          children: b.intl.string(y.default.ahKIJO)
        }), (0, r.jsx)(a.EYj, {
          variant: "text-md/medium",
          color: "text-muted",
          children: b.intl.string(y.default.Sv236e)
        })]
      }), (0, r.jsx)(v, {
        title: b.intl.string(b.t["+o1pDZ"]),
        buttonText: b.intl.string(b.t.bt75uw),
        onButtonPress: () => s(g.u9.CONTENT_AND_SOCIAL)
      }), (0, r.jsx)(l.A, {
        className: O.yF
      }), (0, r.jsx)(v, {
        title: b.intl.string(b.t.OAuOHD),
        buttonText: b.intl.string(b.t.bt75uw),
        onButtonPress: () => s(g.u9.DATA_AND_PRIVACY)
      })]
    })
  },
  S = () => {
    let e = (0, c.Z)();
    return 0 === (0, m.vx)().length ? null : (0, r.jsx)("div", {
      className: O.kL,
      children: e ? (0, r.jsx)(A, {}) : (0, r.jsx)(I, {})
    })
  }