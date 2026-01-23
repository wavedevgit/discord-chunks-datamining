/** Chunk was on web.js **/
/** chunk id: 385243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk892227 = require("./892227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk732955 = require("./732955.js"),
  Chunk613566 = require("./613566.jsx"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk927813 = require("./927813.js"),
  Chunk397691 = require("./397691.js");
let h = {
    churning: {
      start: Chunk827734.A.unsafe_rawColors.OPACITY_RED_80.css,
      end: Chunk827734.A.unsafe_rawColors.RED_NEW_30.css
    },
    active: {
      start: Chunk827734.A.unsafe_rawColors.OPACITY_GREEN_80.css,
      end: Chunk827734.A.unsafe_rawColors.GREEN_NEW_30.css
    }
  },
  m = e => {
    let {
      className: t
    } = e, {
      passesProgressBarInvariant: n,
      programReward: i
    } = (0, o.cf)([d.A], () => ({
      passesProgressBarInvariant: d.A.passesProgressBarInvariant(f.W.NITRO),
      programReward: d.A.getRewardForProgram(f.W.NITRO)
    }));
    if (!n || null == i) return null;
    let l = i.total_countdown_duration_ms / p.A.Millis.DAY,
      m = (0, s.default)(new Date(i.next_reward_date), new Date),
      g = i.program_current_state === f.L.PREMIUM_CHURNING,
      E = g ? h.churning.start : h.active.start,
      y = g ? h.churning.end : h.active.end;
    return (0, r.jsxs)("div", {
      className: a()(_.k, t),
      children: [(0, r.jsx)(u.Ay, {
        variant: u.qP.UNSET,
        progress: l - m,
        maximum: l,
        override: {
          default: {
            gradientStart: E,
            gradientEnd: y
          }
        }
      }), g ? (0, r.jsx)(c.tvc, {
        size: "sm",
        color: "currentColor",
        className: _.K
      }) : (0, r.jsx)(c.Cp8, {
        size: "sm",
        color: "currentColor",
        className: _.K
      })]
    })
  }