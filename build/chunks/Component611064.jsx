/** Chunk was on 21087 **/
/** chunk id: 611064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => b,
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk485267 = require("./485267.js"),
  Chunk71585 = require("./71585.js"),
  Chunk703180 = require("./703180.jsx"),
  Chunk809017 = require("./809017.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk411486 = require("./411486.js"),
  Chunk302279 = require("./302279.js");

function b(e) {
  return (null == e ? true : e.id) === h.G
}
let y = Chunk73800.memo(function(e) {
  let t, {
      title: h,
      onToggleExpand: b,
      expanded: y,
      expandedCount: x
    } = e,
    _ = (0, l.e7)([u.Z], () => u.Z.hidden),
    j = i.useCallback(e => {
      (0, s.jW)(e, async () => {
        let {
          MemberListContentSettingsMenu: e
        } = await Promise.resolve().then(n.bind(n, 703180));
        return () => (0, r.jsx)(e, {
          closePopout: s.Zy
        })
      })
    }, []);
  return (0, r.jsxs)(o.Z, {
    className: m.membersGroup,
    children: [(0, r.jsx)(a.nn4, {
      children: f.intl.format(f.t.UaqbkZ, {
        title: h,
        count: x
      })
    }), (0, r.jsxs)(a.P3F, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return _ ? (0, c.lY)() : x > 3 ? b() : (0, p.dG4)()
      },
      onContextMenu: j,
      tag: "span",
      "aria-hidden": true,
      className: g.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: g.header,
        children: [(0, r.jsxs)("span", {
          children: [h, " — ", x]
        }), (0, r.jsx)(d.Z, {})]
      }), x <= 3 && !_ ? null : (t = _ ? (0, r.jsx)(a.u04, {
        className: g.toggleExpandIcon
      }) : y ? (0, r.jsx)(a.CJ0, {
        className: g.toggleExpandIcon
      }) : (0, r.jsx)(a.Fbu, {
        className: g.toggleExpandIcon
      }), (0, r.jsx)(a.tEY, {
        children: (0, r.jsx)("div", {
          tabIndex: 0,
          className: g.toggleExpandIcon,
          children: t
        })
      }))]
    })]
  })
})