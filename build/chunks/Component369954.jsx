/** Chunk was on web.js **/
/** chunk id: 369954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk37234 = require("./37234.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk277537 = require("./277537.js"),
  Chunk841409 = require("./841409.js"),
  Chunk631885 = require("./631885.js"),
  Chunk292352 = require("./292352.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk271650 = require("./271650.js");
let g = e => {
    let {
      title: t,
      buttonText: n,
      onButtonPress: a
    } = e;
    return (0, r.jsxs)(i.Kq, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      gap: 32,
      children: [(0, r.jsx)(i.xv, {
        variant: "text-sm/semibold",
        color: "interactive-active",
        children: t
      }), (0, r.jsx)(o.zxk, {
        text: n,
        onClick: a,
        variant: "secondary",
        size: "sm"
      })]
    })
  },
  E = () => {
    let e = (0, Chunk981312.U)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = (0, Chunk277537.PO)("settings-controls"),
      {
        handleTabChange: o
      } = (0, Chunk841409.Z)();
    if (!require || 0 === exports.length) return null;
    let E = e => {
        o(e)
      },
      b = () => {
        (0, Chunk37234.xf)(), Chunk493683.Z.openPrivateChannel({
          recipientIds: exports.map(e => e.id)
        })
      };
    return (0, Chunk951288.jsxs)(Chunk793030.Kq, {
      padding: {
        top: 24
      },
      gap: 4,
      className: Chunk271650.container,
      children: [(0, Chunk951288.jsx)(Chunk793030.xv, {
        variant: "eyebrow",
        color: "text-secondary",
        children: Chunk388032.intl.string(Chunk345909.default.ahKIJC)
      }), (0, Chunk951288.jsx)(Chunk793030.Kq, {
        gap: 8,
        children: module ? (0, Chunk951288.jsx)(g, {
          title: Chunk388032.intl.string(Chunk345909.default.X9rW0t),
          buttonText: Chunk388032.intl.formatToPlainString(Chunk345909.default.w0JA3N, {
            count: exports.length
          }),
          onButtonPress: b
        }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(g, {
            title: Chunk388032.intl.string(Chunk388032.t["+o1pDQ"]),
            buttonText: Chunk388032.intl.string(Chunk388032.t.bt75u7),
            onButtonPress: () => E(Chunk292352.dG.CONTENT_AND_SOCIAL)
          }), (0, Chunk951288.jsx)(Chunk511010.Z, {
            className: Chunk271650.divider
          }), (0, Chunk951288.jsx)(g, {
            title: Chunk388032.intl.string(Chunk388032.t.OAuOHB),
            buttonText: Chunk388032.intl.string(Chunk388032.t.bt75u7),
            onButtonPress: () => E(Chunk292352.dG.DATA_AND_PRIVACY)
          })]
        })
      })]
    })
  }