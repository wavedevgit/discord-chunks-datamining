/** Chunk was on web.js **/
/** chunk id: 369954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk230711 = require("./230711.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk342386 = require("./342386.js"),
  Chunk260722 = require("./260722.js"),
  Chunk277537 = require("./277537.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602698 = require("./602698.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk271650 = require("./271650.js");
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
  I = () => {
    let e = (0, Chunk631885.ZM)(),
      t = () => {
        (0, Chunk342386.default)(), Chunk493683.Z.openPrivateChannel({
          recipientIds: module
        })
      },
      n = () => {
        Chunk230711.Z.setSection(Chunk981631.oAB.CONTENT_AND_SOCIAL)
      };
    return (0, Chunk951288.jsxs)(Chunk793030.Kqy, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, Chunk951288.jsxs)(Chunk793030.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-sm/semibold",
          children: Chunk388032.intl.string(Chunk602698.default.ahKIJO)
        }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-md/medium",
          color: "text-tertiary",
          children: Chunk388032.intl.format(Chunk602698.default.X9rW0j, {
            openSettingsHook: (e, t) => (0, r.jsx)(o.Anchor, {
              onClick: n,
              children: e
            }, t)
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        text: Chunk388032.intl.formatToPlainString(Chunk602698.default.ggcjPR, {
          count: module.length
        }),
        onClick: exports,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  T = () => {
    let e = (0, Chunk780985.cz)(),
      t = (0, Chunk780985.$r)(),
      {
        handleTabChange: n
      } = (0, Chunk841409.Z)();
    Chunk647438.useEffect(() => {
      (null == module ? true : module.id) != null && exports && Chunk260722.ZP.fetchTeenSettingsAndConsents(null == module ? true : module.id)
    }, [null == module ? true : module.id, exports]);
    let o = e => {
      n(e)
    };
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)(Chunk793030.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-sm/semibold",
          children: Chunk388032.intl.string(Chunk602698.default.ahKIJO)
        }), (0, Chunk951288.jsx)(Chunk793030.xvT, {
          variant: "text-md/medium",
          color: "text-tertiary",
          children: Chunk388032.intl.string(Chunk602698.default.Sv236e)
        })]
      }), (0, Chunk951288.jsx)(v, {
        title: Chunk388032.intl.string(Chunk388032.t["+o1pDZ"]),
        buttonText: Chunk388032.intl.string(Chunk388032.t.bt75uw),
        onButtonPress: () => Chunk481060(Chunk292352.dG.CONTENT_AND_SOCIAL)
      }), (0, Chunk951288.jsx)(Chunk511010.Z, {
        className: Chunk271650.divider
      }), (0, Chunk951288.jsx)(v, {
        title: Chunk388032.intl.string(Chunk388032.t.OAuOHD),
        buttonText: Chunk388032.intl.string(Chunk388032.t.bt75uw),
        onButtonPress: () => Chunk481060(Chunk292352.dG.DATA_AND_PRIVACY)
      })]
    })
  },
  S = () => {
    let e = (0, Chunk981312.U)(),
      t = (0, Chunk631885.ZM)();
    return (0, Chunk277537.PO)("settings-controls") && 0 !== exports.length ? (0, Chunk951288.jsx)("div", {
      className: Chunk271650.container,
      children: module ? (0, Chunk951288.jsx)(I, {}) : (0, Chunk951288.jsx)(T, {})
    }) : null
  }