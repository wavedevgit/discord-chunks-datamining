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
  Chunk412297 = require("./412297.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk262448 = require("./262448.js");
let h = () => {
    let e = (0, Chunk631885.ZM)(),
      t = (0, Chunk780985.cz)(),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      s = e => {
        n(e)
      },
      d = module.map(e => ({
        label: e,
        value: e
      })),
      f = Chunk647438.useCallback(e => (0, r.jsx)(u.I, {
        userId: e.value,
        avatarSize: a.EFr.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === module.length ? null : 1 === module.length ? (0, Chunk951288.jsx)(Chunk87792.I, {
      userId: module[0],
      avatarSize: Chunk481060.EFr.SIZE_24,
      hideUserTag: true
    }) : (0, Chunk951288.jsx)(Chunk481060.PhF, {
      renderOptionLabel: Chunk412297,
      renderOptionValue: e => {
        let [t] = e;
        return f(t)
      },
      serialize: e => e,
      select: Chunk841409,
      isSelected: e => e === (null == t ? true : t.id),
      options: Chunk292352
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
        className: Chunk262448.backButton,
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
            children: Chunk388032.intl.string(Chunk412297.default.RZqaJi)
          }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: Chunk388032.intl.string(module === Chunk292352.dG.CONTENT_AND_SOCIAL ? Chunk388032.t["+o1pDQ"] : Chunk388032.t.OAuOHB)
          })]
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk262448.teenSelector,
          children: (0, Chunk951288.jsx)(h, {})
        })]
      })]
    })
  }