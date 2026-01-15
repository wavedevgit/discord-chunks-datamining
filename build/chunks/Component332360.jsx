/** Chunk was on web.js **/
/** chunk id: 332360, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk985002 = require("./985002.js"),
  Chunk841409 = require("./841409.js"),
  Chunk780985 = require("./780985.js"),
  Chunk631885 = require("./631885.js"),
  Chunk87792 = require("./87792.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk883381 = require("./883381.js");
let E = () => {
    let e = (0, f.ZM)(),
      t = (0, d.cz)(),
      {
        selectTeenUser: n
      } = (0, c.G)({}),
      a = e => {
        n(e)
      },
      u = e.map(e => ({
        label: e,
        value: e
      })),
      _ = i.useCallback(e => (0, r.jsx)(p.I, {
        userId: e.value,
        avatarSize: l.EFr.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === e.length ? null : (0, r.jsx)("div", {
      className: o()(g.teenSelector, {
        [g.grow]: e.length > 1
      }),
      children: e.length > 1 ? (0, r.jsx)(s.B6, {
        renderOptionLabel: _,
        renderOptionValue: e => {
          let [t] = e;
          return _(t)
        },
        serialize: e => e,
        select: a,
        isSelected: e => e === (null == t ? true : t.id),
        options: u
      }) : (0, r.jsx)(p.I, {
        userId: e[0],
        avatarSize: l.EFr.SIZE_24,
        hideUserTag: true
      })
    })
  },
  b = () => {
    let {
      selectedTab: e,
      handleTabChange: t
    } = (0, u.Z)(), n = i.useCallback(() => {
      t(_.dG.ACTIVITY)
    }, [t]);
    return (0, r.jsxs)(l.Kqy, {
      gap: 32,
      children: [(0, r.jsxs)(l.P3F, {
        className: g.backButton,
        onClick: n,
        "aria-label": m.intl.string(m.t.ybUZql),
        children: [(0, r.jsx)(l.j9r, {
          size: "sm",
          color: l.TVs.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: m.intl.string(m.t["13/7kX"])
        })]
      }), (0, r.jsxs)(l.Kqy, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        children: [(0, r.jsxs)(l.Kqy, {
          gap: 4,
          className: g.titleContainer,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: m.intl.string(h.default.RZqaJn)
          }), (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: m.intl.string(e === _.dG.CONTENT_AND_SOCIAL ? m.t["+o1pDZ"] : m.t.OAuOHD)
          })]
        }), (0, r.jsx)(E, {})]
      })]
    })
  }