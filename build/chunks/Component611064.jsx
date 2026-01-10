/** Chunk was on web.js **/
/** chunk id: 611064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => g,
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk533212 = require("./533212.js"),
  Chunk791486 = require("./791486.js");

function g(e) {
  return (null == e ? true : e.id) === f.G
}

function E(e) {
  let {
    title: t,
    onToggleExpand: f,
    expanded: g,
    expandedCount: E
  } = e, b = (0, a.e7)([u.Z], () => u.Z.hidden), y = i.useCallback(e => {
    (0, s.jW)(e, async () => {
      let {
        MemberListContentSettingsMenu: e
      } = await Promise.resolve().then(n.bind(n, 703180));
      return () => (0, r.jsx)(e, {
        closePopout: s.Zy
      })
    })
  }, []), O = () => {
    let e;
    return E <= 3 && !b ? null : (e = b ? (0, r.jsx)(o.u04, {
      className: m.toggleExpandIcon
    }) : g ? (0, r.jsx)(o.CJ0, {
      className: m.toggleExpandIcon
    }) : (0, r.jsx)(o.Fbu, {
      className: m.toggleExpandIcon
    }), (0, r.jsx)(o.tEY, {
      children: (0, r.jsx)("div", {
        tabIndex: 0,
        className: m.toggleExpandIcon,
        children: e
      })
    }))
  };
  return (0, r.jsxs)(l.Z, {
    className: h.membersGroup,
    children: [(0, r.jsx)(o.nn4, {
      children: _.intl.format(_.t.Uaqbke, {
        title: t,
        count: E
      })
    }), (0, r.jsxs)(o.P3F, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return b ? (0, c.lY)() : E > 3 ? f() : (0, p.dG4)()
      },
      onContextMenu: y,
      tag: "span",
      "aria-hidden": true,
      className: m.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: m.header,
        children: [(0, r.jsxs)("span", {
          children: [t, " — ", E]
        }), (0, r.jsx)(d.Z, {})]
      }), O()]
    })]
  })
}
let b = Chunk473749.memo(E)