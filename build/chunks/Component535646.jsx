/** Chunk was on web.js **/
/** chunk id: 535646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk461797 = require("./461797.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk428208 = require("./428208.js");

function f(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, f = (0, a.bG)([o.A], () => o.A.useReducedMotion), p = (0, l.Xf)({
    useReducedMotion: f
  }), {
    name: _,
    header: h
  } = i.useMemo(() => {
    let e = (0, c.Wt)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: d.kL,
    children: [(0, r.jsx)(s.DUT, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      className: d.x6,
      "aria-label": u.intl.string(u.t["44yJxh"]),
      children: p.render()
    }), (0, r.jsxs)(s.DUT, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      "aria-label": "".concat(_, ": ").concat(u.intl.string(u.t["44yJxh"])),
      className: d.Lt,
      children: [(0, r.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        src: h,
        className: d.L_
      }), (0, r.jsx)(s.Text, {
        className: d._e,
        variant: "text-sm/bold",
        color: "always-white",
        children: _
      })]
    })]
  })
}