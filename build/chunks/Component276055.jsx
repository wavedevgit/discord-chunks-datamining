/** Chunk was on web.js **/
/** chunk id: 276055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
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
  } = e, y = (0, a.bG)([u.A], () => u.A.hidden), b = i.useCallback(e => {
    (0, s.L3)(e, async () => {
      let {
        MemberListContentSettingsMenu: e
      } = await Promise.resolve().then(n.bind(n, 38055));
      return () => (0, r.jsx)(e, {
        closePopout: s.Z_
      })
    })
  }, []), O = () => {
    let e;
    return E <= 3 && !y ? null : (e = y ? (0, r.jsx)(o.tN5, {
      className: h.wT
    }) : g ? (0, r.jsx)(o.abt, {
      className: h.wT
    }) : (0, r.jsx)(o._BQ, {
      className: h.wT
    }), (0, r.jsx)(o.vN3, {
      children: (0, r.jsx)("div", {
        tabIndex: 0,
        className: h.wT,
        children: e
      })
    }))
  };
  return (0, r.jsxs)(l.A, {
    className: m.lL,
    children: [(0, r.jsx)(o.AC4, {
      children: _.intl.format(_.t.Uaqbke, {
        title: t,
        count: E
      })
    }), (0, r.jsxs)(o.DUT, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return y ? (0, c.Il)() : E > 3 ? f() : (0, p.tEg)()
      },
      onContextMenu: b,
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
let y = Chunk64700.memo(E)