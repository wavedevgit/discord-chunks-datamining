/** Chunk was on web.js **/
/** chunk id: 983806, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk10005 = require("./10005.js"),
  Chunk809697 = require("./809697.js"),
  Chunk153739 = require("./153739.js"),
  Chunk834981 = require("./834981.js"),
  Chunk343906 = require("./343906.jsx"),
  Chunk191627 = require("./191627.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk377148 = require("./377148.js");
let E = () => {
    let e = (0, f.vx)(),
      t = (0, d.y3)(),
      {
        selectTeenUser: n
      } = (0, c.A)({}),
      a = e => {
        n(e)
      },
      u = e.map(e => ({
        label: e,
        value: e
      })),
      _ = i.useCallback(e => (0, r.jsx)(p.O, {
        userId: e.value,
        avatarSize: l._3J.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === e.length ? null : (0, r.jsx)("div", {
      className: s()(g.Gq, {
        [g.wS]: e.length > 1
      }),
      children: e.length > 1 ? (0, r.jsx)(o.Pw, {
        renderOptionLabel: _,
        renderOptionValue: e => {
          let [t] = e;
          return _(t)
        },
        serialize: e => e,
        select: a,
        isSelected: e => e === (null == t ? true : t.id),
        options: u,
        "data-migration-pending": true
      }) : (0, r.jsx)(p.O, {
        userId: e[0],
        avatarSize: l._3J.SIZE_24,
        hideUserTag: true
      })
    })
  },
  b = () => {
    let {
      selectedTab: e,
      handleTabChange: t
    } = (0, u.A)(), n = i.useCallback(() => {
      t(_.u9.ACTIVITY)
    }, [t]);
    return (0, r.jsxs)(l.BJc, {
      gap: 32,
      children: [(0, r.jsxs)(l.DUT, {
        className: g.Gv,
        onClick: n,
        "aria-label": m.intl.string(m.t.ybUZql),
        children: [(0, r.jsx)(l.Zge, {
          size: "sm",
          color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: m.intl.string(m.t["13/7kX"])
        })]
      }), (0, r.jsxs)(l.BJc, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        children: [(0, r.jsxs)(l.BJc, {
          gap: 4,
          className: g.gn,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: m.intl.string(h.default.RZqaJn)
          }), (0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: m.intl.string(e === _.u9.CONTENT_AND_SOCIAL ? m.t["+o1pDZ"] : m.t.OAuOHD)
          })]
        }), (0, r.jsx)(E, {})]
      })]
    })
  }