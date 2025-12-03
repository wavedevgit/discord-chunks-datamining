/** Chunk was on 384 **/
/** chunk id: 413682, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  w: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk317351 = require("./317351.js"),
  Chunk935653 = require("./935653.js"),
  Chunk449874 = require("./449874.js");

function m(e) {
  let {
    canManageGuild: t,
    premiumProgressBarEnabled: n
  } = e, m = (0, s.ZP)(), p = i.useCallback(e => {
    o.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)(a.rsf, {
        label: c.intl.string(c.t.Dl4mJS),
        description: c.intl.string(c.t.xzHcod),
        checked: n,
        onChange: p,
        disabled: !t
      })
    }), (0, r.jsx)("div", {
      className: u.column,
      children: (0, r.jsx)("img", {
        alt: c.intl.string(c.t.UOJp5a),
        src: (0, l.ap)(m) ? g : d,
        className: u.progressBarImage
      })
    })]
  })
}