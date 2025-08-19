/** Chunk was on 66181 **/
/** chunk id: 629654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk211712 = require("./211712.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19895 = require("./19895.js");

function m(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), p = (0, o.g2)({
    useReducedMotion: m
  }), {
    name: g,
    header: h
  } = r.useMemo(() => {
    let e = (0, c.Ib)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)(a.P3F, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      className: u.button,
      "aria-label": d.intl.string(d.t["44yJxs"]),
      children: p.render()
    }), (0, i.jsxs)(a.P3F, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      "aria-label": "".concat(g, ": ").concat(d.intl.string(d.t["44yJxs"])),
      className: u.select,
      children: [(0, i.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        src: h,
        className: u.presetImage
      }), (0, i.jsx)(a.Text, {
        className: u.presetLabel,
        variant: "text-sm/bold",
        color: "always-white",
        children: g
      })]
    })]
  })
}