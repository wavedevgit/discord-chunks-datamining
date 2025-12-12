/** Chunk was on web.js **/
/** chunk id: 629654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk659302 = require("./659302.jsx"),
  Chunk211712 = require("./211712.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk19895 = require("./19895.js");

function f(e) {
  let {
    preset: t,
    onShuffle: n
  } = e, f = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), p = (0, l.g2)({
    useReducedMotion: f
  }), {
    name: _,
    header: m
  } = i.useMemo(() => {
    let e = (0, c.Ib)(t);
    return {
      name: e.getName(),
      header: e.getHeaderSrc()
    }
  }, [t]);
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(a.P3F, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      className: d.button,
      "aria-label": u.intl.string(u.t["44yJxh"]),
      children: p.render()
    }), (0, r.jsxs)(a.P3F, {
      onClick: () => {
        n(), p.startAnimation(false)
      },
      "aria-label": "".concat(_, ": ").concat(u.intl.string(u.t["44yJxh"])),
      className: d.select,
      children: [(0, r.jsx)("img", {
        alt: "",
        "aria-hidden": true,
        src: m,
        className: d.presetImage
      }), (0, r.jsx)(a.Text, {
        className: d.presetLabel,
        variant: "text-sm/bold",
        color: "always-white",
        children: _
      })]
    })]
  })
}