/** Chunk was on web.js **/
/** chunk id: 713422, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk995638 = require("./995638.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk159691 = require("./159691.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk468208 = require("./468208.js"),
  Chunk165299 = require("./165299.js"),
  Chunk70956 = require("./70956.js"),
  Chunk521472 = require("./521472.js");
let h = {
    churning: {
      start: Chunk692547.Z.unsafe_rawColors.OPACITY_RED_80.css,
      end: Chunk692547.Z.unsafe_rawColors.RED_NEW_30.css
    },
    active: {
      start: Chunk692547.Z.unsafe_rawColors.OPACITY_GREEN_80.css,
      end: Chunk692547.Z.unsafe_rawColors.GREEN_NEW_30.css
    }
  },
  m = e => {
    let {
      className: t
    } = e, {
      passesProgressBarInvariant: n,
      programReward: i
    } = (0, s.cj)([d.Z], () => ({
      passesProgressBarInvariant: d.Z.passesProgressBarInvariant(f.f.NITRO),
      programReward: d.Z.getRewardForProgram(f.f.NITRO)
    }));
    if (!n || null == i) return null;
    let l = i.total_countdown_duration_ms / p.Z.Millis.DAY,
      m = (0, o.default)(new Date(i.next_reward_date), new Date),
      g = i.program_current_state === f.g.PREMIUM_CHURNING,
      E = g ? h.churning.start : h.active.start,
      b = g ? h.churning.end : h.active.end;
    return (0, r.jsxs)("div", {
      className: a()(_.container, t),
      children: [(0, r.jsx)(u.ZP, {
        variant: u.yB.UNSET,
        progress: l - m,
        maximum: l,
        override: {
          default: {
            gradientStart: E,
            gradientEnd: b
          }
        }
      }), g ? (0, r.jsx)(c.SrA, {
        size: "sm",
        color: "currentColor",
        className: _.icon
      }) : (0, r.jsx)(c.aQr, {
        size: "sm",
        color: "currentColor",
        className: _.icon
      })]
    })
  }