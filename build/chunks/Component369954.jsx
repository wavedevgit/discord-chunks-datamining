/** Chunk was on web.js **/
/** chunk id: 369954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk313789 = require("./313789.js"),
  Chunk342386 = require("./342386.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk260722 = require("./260722.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837842 = require("./837842.js");
let v = e => {
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
  S = () => {
    let e = (0, m.ZM)(),
      t = () => {
        (0, d.default)(), s.Z.openPrivateChannel({
          recipientIds: e
        })
      },
      n = () => {
        (0, f.openUserSettings)(u.n.CONTENT_AND_SOCIAL_PANEL, {
          section: E.oAB.CONTENT_AND_SOCIAL
        })
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
          children: y.intl.string(b.default.ahKIJO)
        }), (0, r.jsx)(a.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: y.intl.format(b.default.X9rW0j, {
            openSettingsHook: (e, t) => (0, r.jsx)(o.eee, {
              onClick: n,
              children: e
            }, t)
          })
        })]
      }), (0, r.jsx)(o.Button, {
        text: y.intl.formatToPlainString(b.default.ggcjPR, {
          count: e.length
        }),
        onClick: t,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  I = () => {
    let e = (0, h.cz)(),
      t = (0, h.$r)(),
      {
        handleTabChange: n
      } = (0, _.Z)();
    i.useEffect(() => {
      (null == e ? true : e.id) != null && t && p.ZP.fetchTeenSettingsAndConsents(null == e ? true : e.id)
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
          children: y.intl.string(b.default.ahKIJO)
        }), (0, r.jsx)(a.xvT, {
          variant: "text-md/medium",
          color: "text-muted",
          children: y.intl.string(b.default.Sv236e)
        })]
      }), (0, r.jsx)(v, {
        title: y.intl.string(y.t["+o1pDZ"]),
        buttonText: y.intl.string(y.t.bt75uw),
        onButtonPress: () => o(g.dG.CONTENT_AND_SOCIAL)
      }), (0, r.jsx)(l.Z, {
        className: O.divider
      }), (0, r.jsx)(v, {
        title: y.intl.string(y.t.OAuOHD),
        buttonText: y.intl.string(y.t.bt75uw),
        onButtonPress: () => o(g.dG.DATA_AND_PRIVACY)
      })]
    })
  },
  T = () => {
    let e = (0, c.U)();
    return 0 === (0, m.ZM)().length ? null : (0, r.jsx)("div", {
      className: O.container,
      children: e ? (0, r.jsx)(S, {}) : (0, r.jsx)(I, {})
    })
  }