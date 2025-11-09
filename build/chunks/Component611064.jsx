/** Chunk was on 30025 **/
/** chunk id: 611064, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => b,
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk489229 = require("./489229.js"),
  Chunk854641 = require("./854641.js");

function b(e) {
  return (null == e ? true : e.id) === p.G
}
let _ = Chunk647438.memo(function(e) {
  let t, {
      title: p,
      onToggleExpand: b,
      expanded: _,
      expandedCount: y
    } = e,
    x = (0, l.e7)([d.Z], () => d.Z.hidden),
    O = i.useCallback(e => {
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
      children: f.intl.format(f.t.Uaqbke, {
        title: p,
        count: y
      })
    }), (0, r.jsxs)(a.P3F, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return x ? (0, c.lY)() : y > 3 ? b() : (0, h.dG4)()
      },
      onContextMenu: O,
      tag: "span",
      "aria-hidden": true,
      className: g.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: g.header,
        children: [(0, r.jsxs)("span", {
          children: [p, " — ", y]
        }), (0, r.jsx)(u.Z, {})]
      }), y <= 3 && !x ? null : (t = x ? (0, r.jsx)(a.u04, {
        className: g.toggleExpandIcon
      }) : _ ? (0, r.jsx)(a.CJ0, {
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