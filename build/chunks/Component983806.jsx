/** Chunk was on 5606 **/
/** chunk id: 983806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => A
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
let h = () => {
    let e = (0, p.vx)(),
      t = (0, u.y3)(),
      {
        selectTeenUser: n
      } = (0, c.A)({}),
      l = e.map(e => ({
        label: e,
        value: e
      })),
      d = i.useCallback(e => (0, r.jsx)(_.O, {
        userId: e.value,
        avatarSize: o._3J.SIZE_24,
        hideUserTag: true
      }), []);
    return 0 === e.length ? null : (0, r.jsx)("div", {
      className: s()(b.Gq, {
        [b.wS]: e.length > 1
      }),
      children: e.length > 1 ? (0, r.jsx)(a.Pw, {
        renderOptionLabel: d,
        renderOptionValue: e => {
          let [t] = e;
          return d(t)
        },
        serialize: e => e,
        select: e => {
          n(e)
        },
        isSelected: e => e === (null == t ? true : t.id),
        options: l,
        "data-migration-pending": true
      }) : (0, r.jsx)(_.O, {
        userId: e[0],
        avatarSize: o._3J.SIZE_24,
        hideUserTag: true
      })
    })
  },
  A = () => {
    let {
      selectedTab: e,
      handleTabChange: t
    } = (0, d.A)(), n = i.useCallback(() => {
      t(m.u9.ACTIVITY)
    }, [t]);
    return (0, r.jsxs)(o.BJc, {
      gap: 32,
      children: [(0, r.jsxs)(o.DUT, {
        className: b.Gv,
        onClick: n,
        "aria-label": f.intl.string(f.t.ybUZql),
        children: [(0, r.jsx)(o.Zge, {
          size: "sm",
          color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
        }), (0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: f.intl.string(f.t["13/7kX"])
        })]
      }), (0, r.jsxs)(o.BJc, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        children: [(0, r.jsxs)(o.BJc, {
          gap: 4,
          className: b.gn,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: f.intl.string(g.default.RZqaJn)
          }), (0, r.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: f.intl.string(e === m.u9.CONTENT_AND_SOCIAL ? f.t["+o1pDZ"] : f.t.OAuOHD)
          })]
        }), (0, r.jsx)(h, {})]
      })]
    })
  }