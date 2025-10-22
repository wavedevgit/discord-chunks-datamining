/** Chunk was on web.js **/
/** chunk id: 629654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk667105 = require("./667105.jsx"),
  Chunk211712 = require("./211712.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk781353 = require("./781353.js");

function f(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), _ = (0, l.g2)({
    useReducedMotion: f
  }), {
    name: p,
    header: h
  } = i.useMemo(() => {
    let e = (0, c.Ib)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(o.P3F, {
      onClick: () => {
        n(), _.startAnimation(false)
      },
      className: d.button,
      "aria-label": u.intl.string(u.t["44yJxh"]),
      children: _.render()
    }), (0, r.jsxs)(o.P3F, {
      onClick: () => {
        n(), _.startAnimation(false)
      },
      "aria-label": "".concat(p, ": ").concat(u.intl.string(u.t["44yJxh"])),
      className: d.select,
      children: [(0, r.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        src: h,
        className: d.presetImage
      }), (0, r.jsx)(o.Text, {
        className: d.presetLabel,
        variant: "text-sm/bold",
        color: "always-white",
        children: p
      })]
    })]
  })
}