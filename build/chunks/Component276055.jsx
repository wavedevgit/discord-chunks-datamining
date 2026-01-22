/** Chunk was on web.js **/
/** chunk id: 276055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  l: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk708197 = require("./708197.js"),
  Chunk435738 = require("./435738.js"),
  Chunk38055 = require("./38055.jsx"),
  Chunk495744 = require("./495744.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk792039 = require("./792039.js"),
  Chunk701939 = require("./701939.js");

function g(e) {
  return (null == e ? true : e.id) === f.C
}

function E(e) {
  let {
    title: t,
    onToggleExpand: f,
    expanded: g,
    expandedCount: E
  } = e, b = (0, a.bG)([u.A], () => u.A.hidden), y = i.useCallback(e => {
    (0, o.L3)(e, async () => {
      let {
        MemberListContentSettingsMenu: e
      } = await Promise.resolve().then(n.bind(n, 38055));
      return () => (0, r.jsx)(e, {
        closePopout: o.Z_
      })
    })
  }, []), O = () => {
    let e;
    return E <= 3 && !b ? null : (e = b ? (0, r.jsx)(s.tN5, {
      className: h.wT
    }) : g ? (0, r.jsx)(s.abt, {
      className: h.wT
    }) : (0, r.jsx)(s._BQ, {
      className: h.wT
    }), (0, r.jsx)(s.vN3, {
      children: (0, r.jsx)("div", {
        tabIndex: 0,
        className: h.wT,
        children: e
      })
    }))
  };
  return (0, r.jsxs)(l.A, {
    className: m.lL,
    children: [(0, r.jsx)(s.AC4, {
      children: _.intl.format(_.t.Uaqbke, {
        title: t,
        count: E
      })
    }), (0, r.jsxs)(s.DUT, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return b ? (0, c.Il)() : E > 3 ? f() : (0, p.tEg)()
      },
      onContextMenu: y,
      tag: "span",
      "aria-hidden": true,
      className: h.N1,
      children: [(0, r.jsxs)("div", {
        className: h.wx,
        children: [(0, r.jsxs)("span", {
          children: [t, " — ", E]
        }), (0, r.jsx)(d.A, {})]
      }), O()]
    })]
  })
}
let b = Chunk64700.memo(E)