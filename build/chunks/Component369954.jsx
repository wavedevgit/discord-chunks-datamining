/** Chunk was on web.js **/
/** chunk id: 369954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk230711 = require("./230711.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk342386 = require("./342386.js"),
  Chunk260722 = require("./260722.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837842 = require("./837842.js");
let O = e => {
    let {
      title: t,
      buttonText: n,
      onButtonPress: i
    } = e;
    return (0, r.jsxs)(a.Kqy, {
      padding: {
        top: 12,
        bottom: 12
      },
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsx)(a.xvT, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(o.Button, {
        text: n,
        onClick: i,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  v = () => {
    let e = (0, m.ZM)(),
      t = () => {
        (0, d.default)(), s.Z.openPrivateChannel({
          recipientIds: e
        })
      },
      n = () => {
        l.Z.setSection(g.oAB.CONTENT_AND_SOCIAL)
      };
    return (0, r.jsxs)(a.Kqy, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsxs)(a.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(a.xvT, {
          variant: "text-sm/semibold",
          children: b.intl.string(E.default.ahKIJO)
        }), (0, r.jsx)(a.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: b.intl.format(E.default.X9rW0j, {
            openSettingsHook: (e, t) => (0, r.jsx)(o.eee, {
              onClick: n,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)(o.Button, {
        text: b.intl.formatToPlainString(E.default.ggcjPR, {
          count: e.length
        }),
        onClick: t,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  S = () => {
    let e = (0, _.cz)(),
      t = (0, _.$r)(),
      {
        handleTabChange: n
      } = (0, p.Z)();
    i.useEffect(() => {
      (null == e ? true : e.id) != null && t && f.ZP.fetchTeenSettingsAndConsents(null == e ? true : e.id)
    }, [null == e ? true : e.id, t]);
    let o = e => {
      n(e)
    };
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, r.jsx)(a.xvT, {
          variant: "text-sm/semibold",
          children: b.intl.string(E.default.ahKIJO)
        }), (0, r.jsx)(a.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: b.intl.string(E.default.Sv236e)
        })]
      }), (0, r.jsx)(O, {
        title: b.intl.string(b.t["+o1pDZ"]),
        buttonText: b.intl.string(b.t.bt75uw),
        onButtonPress: () => o(h.dG.CONTENT_AND_SOCIAL)
      }), (0, r.jsx)(c.Z, {
        className: y.divider
      }), (0, r.jsx)(O, {
        title: b.intl.string(b.t.OAuOHD),
        buttonText: b.intl.string(b.t.bt75uw),
        onButtonPress: () => o(h.dG.DATA_AND_PRIVACY)
      })]
    })
  },
  I = () => {
    let e = (0, u.U)();
    return 0 === (0, m.ZM)().length ? null : (0, r.jsx)("div", {
      className: y.container,
      children: e ? (0, r.jsx)(v, {}) : (0, r.jsx)(S, {})
    })
  }