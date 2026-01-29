/** Chunk was on 2827 **/
/** chunk id: 535646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, _ = (0, l.bG)([a.A], () => a.A.useReducedMotion), p = (0, o.Xf)({
    useReducedMotion: _
  }), {
    name: m,
    header: g
  } = i.useMemo(() => {
    let e = (0, c.Wt)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsx)(s.DUT, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      className: u.x6,
      "aria-label": d.intl.string(d.t["44yJxh"]),
      children: p.render()
    }), (0, r.jsxs)(s.DUT, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      "aria-label": "".concat(m, ": ").concat(d.intl.string(d.t["44yJxh"])),
      className: u.Lt,
      children: [(0, r.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        src: g,
        className: u.L_
      }), (0, r.jsx)(s.Text, {
        className: u._e,
        variant: "text-sm/bold",
        color: "always-white",
        children: m
      })]
    })]
  })
}