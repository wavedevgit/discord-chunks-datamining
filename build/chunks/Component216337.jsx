/** Chunk was on web.js **/
/** chunk id: 216337, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk665906 = require("./665906.js"),
  Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456645 = require("./456645.js");
let p = () => require.e("43841").then(require.t.bind(require, 737848, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});

function h(e) {
  let {
    channel: t,
    isLastItem: n
  } = e, i = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), h = (0, o.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)), m = (0, l.Gu)(t), g = (0, o.e7)([c.default], () => c.default.getId());
  return n ? h && !m && t.ownerId !== g ? (0, r.jsxs)("div", {
    className: _.box,
    children: [(0, r.jsx)(a.Fmz, {
      importData: p,
      shouldAnimate: !i,
      className: _.animation
    }), (0, r.jsxs)("div", {
      className: _.textContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-md/semibold",
        children: f.intl.string(f.t.OmBThI)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: f.intl.string(f.t.zcs5kp)
      })]
    })]
  }) : null : (0, r.jsx)("div", {
    className: _.divider
  })
}
let m = Chunk73800.memo(h)