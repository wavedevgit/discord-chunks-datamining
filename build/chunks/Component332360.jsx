/** Chunk was on web.js **/
/** chunk id: 332360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk87792 = require("./87792.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk148806 = require("./148806.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84989 = require("./84989.js");
let E = () => {
    let e = (0, Chunk631885.ZM)(),
      t = (0, Chunk780985.cz)(),
      {
        selectTeenUser: n
      } = (0, Chunk985002.G)({}),
      o = e => {
        n(e)
      },
      u = module.map(e => ({
        label: e,
        value: e
      })),
      _ = Chunk473749.useCallback(e => (0, r.jsx)(p.I, {
        userId: e.value,
        avatarSize: l.EFr.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === module.length ? null : (0, Chunk54381.jsx)("div", {
      className: a()(Chunk84989.teenSelector, {
        [Chunk84989.grow]: module.length > 1
      }),
      children: module.length > 1 ? (0, Chunk54381.jsx)(Chunk199849.B6, {
        renderOptionLabel: Chunk292352,
        renderOptionValue: e => {
          let [t] = e;
          return _(t)
        },
        serialize: e => e,
        select: Chunk120356,
        isSelected: e => e === (null == t ? true : t.id),
        options: Chunk841409
      }) : (0, Chunk54381.jsx)(Chunk87792.I, {
        userId: module[0],
        avatarSize: Chunk481060.EFr.SIZE_24,
        hideUserTag: true
      })
    })
  },
  b = () => {
    let {
      selectedTab: e,
      handleTabChange: t
    } = (0, Chunk841409.Z)(), n = Chunk473749.useCallback(() => {
      exports(Chunk292352.dG.ACTIVITY)
    }, [exports]);
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      gap: 32,
      children: [(0, Chunk54381.jsxs)(Chunk481060.P3F, {
        className: Chunk84989.backButton,
        onClick: require,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.ybUZql),
        children: [(0, Chunk54381.jsx)(Chunk481060.j9r, {
          size: "sm",
          color: Chunk481060.TVs.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: Chunk388032.intl.string(Chunk388032.t["13/7kX"])
        })]
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          className: Chunk84989.titleContainer,
          children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: Chunk388032.intl.string(Chunk148806.default.RZqaJn)
          }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: Chunk388032.intl.string(module === Chunk292352.dG.CONTENT_AND_SOCIAL ? Chunk388032.t["+o1pDZ"] : Chunk388032.t.OAuOHD)
          })]
        }), (0, Chunk54381.jsx)(E, {})]
      })]
    })
  }