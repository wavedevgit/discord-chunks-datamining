/** Chunk was on web.js **/
/** chunk id: 780042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk459192 = require("./459192.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk500320 = require("./500320.js");
let y = {
    tension: 750,
    mass: 2.5,
    friction: 70
  },
  b = 20;

function O(e) {
  let {
    checked: t,
    onClick: n,
    id: a = "burst-reaction-toggle-button"
  } = e, O = (0, l.bG)([f.A], () => f.A.useReducedMotion), v = _.default.getCurrentUser(), A = null == v || (0, h.TW)(v) ? [c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [I, S] = (0, p.kn)(A), [T, C] = i.useState(false), [N, w] = (0, d.zhh)(() => ({})), R = (0, s.animated)(d.it9);

  function P() {
    w({
      from: {
        rotate: t ? "360deg" : "0deg"
      },
      to: {
        rotate: t ? "0deg" : "360deg"
      },
      config: y
    }), null == n || n(), C(false)
  }
  i.useEffect(() => {
    let e = I === c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (S(m.i.DISMISS), setTimeout(() => C(e), 200))
  }, [I, S]);
  let D = T ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
    L = T ? g.intl.string(g.t.ORK94p) : true;
  return (0, r.jsx)(u.u, {
    position: "top",
    title: L,
    body: D,
    asset: (0, r.jsx)(d.tvc, {
      size: "md",
      color: "currentColor"
    }),
    assetSize: 20,
    forceOpen: T,
    children: (0, r.jsxs)("div", {
      "aria-label": D,
      children: [(0, r.jsx)("input", {
        className: E.Qg,
        checked: t,
        onChange: P,
        id: a,
        type: "checkbox"
      }), (0, r.jsxs)("label", {
        htmlFor: a,
        className: o()(E.Pf, {
          [E.wM]: t
        }),
        children: [(0, r.jsx)(R, {
          style: O ? true : N,
          size: "custom",
          width: b,
          height: b,
          color: t ? "white" : "currentColor",
          className: E.Kk
        }), (0, r.jsx)("span", {
          children: (0, r.jsx)(d.Text, {
            className: E.Qg,
            variant: "text-sm/semibold",
            children: g.intl.string(g.t.buV4av)
          })
        })]
      })]
    })
  })
}