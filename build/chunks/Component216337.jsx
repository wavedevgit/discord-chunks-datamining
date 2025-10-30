/** Chunk was on 13873 **/
/** chunk id: 216337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk665906 = require("./665906.js"),
  Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk727623 = require("./727623.js");
let h = () => require.e("43841").then(require.t.bind(require, 737848, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  m = Chunk647438.memo(function(e) {
    let {
      channel: t,
      isLastItem: n
    } = e, i = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), m = (0, l.e7)([u.Z], () => u.Z.can(d.Plq.SEND_MESSAGES_IN_THREADS, t)), g = (0, s.Gu)(t), b = (0, l.e7)([c.default], () => c.default.getId());
    return n ? m && !g && t.ownerId !== b ? (0, r.jsxs)("div", {
      className: f.box,
      children: [(0, r.jsx)(a.Fmz, {
        importData: h,
        shouldAnimate: !i,
        className: f.animation
      }), (0, r.jsxs)("div", {
        className: f.textContainer,
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: p.intl.string(p.t.OmBThA)
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: p.intl.string(p.t.zcs5ko)
        })]
      })]
    }) : null : (0, r.jsx)("div", {
      className: f.divider
    })
  })