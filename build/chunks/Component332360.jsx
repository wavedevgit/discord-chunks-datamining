/** Chunk was on web.js **/
/** chunk id: 332360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk87792 = require("./87792.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84989 = require("./84989.js");
let h = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      t = (0, Chunk780985.cz)(),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      s = e => {
        n(e)
      },
      f = module.map(e => ({
        label: e.id,
        value: e.id
      })),
      _ = Chunk647438.useCallback(e => (0, r.jsx)(u.I, {
        userId: e.value,
        avatarSize: o.EFr.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === module.length ? null : 1 === module.length ? (0, Chunk951288.jsx)(Chunk87792.I, {
      userId: module[0].id,
      avatarSize: Chunk481060.EFr.SIZE_24,
      hideUserTag: true
    }) : (0, Chunk951288.jsx)(Chunk481060.PhF, {
      renderOptionLabel: Chunk388032,
      renderOptionValue: e => {
        let [t] = e;
        return _(t)
      },
      serialize: e => e,
      select: Chunk841409,
      isSelected: e => e === (null == t ? true : t.id),
      options: Chunk345909
    })
  },
  m = () => {
    let {
      selectedTab: e,
      handleTabChange: t
    } = (0, Chunk841409.Z)(), n = Chunk647438.useCallback(() => {
      exports(Chunk292352.dG.ACTIVITY)
    }, [exports]);
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 32,
      children: [(0, Chunk951288.jsxs)(Chunk481060.P3F, {
        className: Chunk84989.backButton,
        onClick: require,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.ybUZqq),
        children: [(0, Chunk951288.jsx)(Chunk481060.j9r, {
          size: "sm",
          color: Chunk481060.TVs.colors.INTERACTIVE_NORMAL
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: Chunk388032.intl.string(Chunk388032.t["13/7kZ"])
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: Chunk388032.intl.string(Chunk345909.default.RZqaJi)
          }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: Chunk388032.intl.string(module === Chunk292352.dG.CONTENT_AND_SOCIAL ? Chunk388032.t["+o1pDQ"] : Chunk388032.t.OAuOHB)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk84989.teenSelector,
          children: (0, Chunk951288.jsx)(h, {})
        })]
      })]
    })
  }