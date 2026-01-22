/** Chunk was on web.js **/
/** chunk id: 802116, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => _
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk815807 = require("./815807.js"),
  Chunk734057 = require("./734057.js"),
  Chunk956703 = require("./956703.js"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk505527 = require("./505527.js"),
  Chunk985018 = require("./985018.jsx");
let f = 3,
  p = {
    standard: {
      reactionTooltip1NInteractive: Chunk985018.t.dgtYDJ,
      reactionTooltip1N: Chunk985018.t.mXild1,
      reactionTooltip1: Chunk985018.t.Oro30L,
      reactionTooltip2NInteractive: Chunk985018.t["0GBwVR"],
      reactionTooltip2N: Chunk985018.t.UWGs2n,
      reactionTooltip2: Chunk985018.t["p+0jvt"],
      reactionTooltip3NInteractive: Chunk985018.t["dK6/7W"],
      reactionTooltip3N: Chunk985018.t["UnXdX/"],
      reactionTooltip3: Chunk985018.t.bbPMcR,
      reactionTooltipNInteractive: Chunk985018.t.Thj7LX,
      reactionTooltipN: Chunk985018.t.CRrc7c
    },
    burst: {
      reactionTooltip1NInteractive: Chunk985018.t.G98B0W,
      reactionTooltip1N: Chunk985018.t["u/03eN"],
      reactionTooltip1: Chunk985018.t["z4q3+w"],
      reactionTooltip2NInteractive: Chunk985018.t.wkcffp,
      reactionTooltip2N: Chunk985018.t.T4EYUu,
      reactionTooltip2: Chunk985018.t.R2HykW,
      reactionTooltip3NInteractive: Chunk985018.t.OhtGxz,
      reactionTooltip3N: Chunk985018.t["M8bwl+"],
      reactionTooltip3: Chunk985018.t.sNl6XR,
      reactionTooltipNInteractive: Chunk985018.t.nsITOq,
      reactionTooltipN: Chunk985018.t.dkieH5
    }
  };

function _(e, t) {
  var n, r;
  let _ = arguments.length > 2 && true !== arguments[2] ? arguments[2] : u.v.NORMAL,
    h = arguments.length > 3 ? arguments[3] : true,
    m = o.A.getReactions(e.getChannelId(), e.id, t, f, _),
    g = s.A.getChannel(e.getChannelId()),
    E = null == g || g.isPrivate() ? null : g.getGuildId(),
    b = e.getReaction(t),
    y = _ === u.v.BURST,
    O = i()(Array.from(null != (n = null == m ? true : m.values()) ? n : [])).reject(e => l.A.isBlockedOrIgnored(e.id)).take(f).map(e => c.Ay.getName(E, null == g ? true : g.id, e)).value();
  if (0 === O.length) return "";
  let A = y ? p.burst : p.standard,
    v = Math.max(0, (null != (r = y ? null == b ? true : b.burst_count : null == b ? true : b.count) ? r : 0) - O.length),
    S = (0, a.b3)(t);
  if (1 === O.length)
    if (!(v > 0)) return d.intl.formatToPlainString(A.reactionTooltip1, {
      a: O[0],
      emojiName: S
    });
    else if (null != h) return d.intl.format(A.reactionTooltip1NInteractive, {
    a: O[0],
    n: v,
    emojiName: S,
    onClick: h
  });
  else return d.intl.formatToPlainString(A.reactionTooltip1N, {
    a: O[0],
    n: v,
    emojiName: S
  });
  if (2 === O.length)
    if (!(v > 0)) return d.intl.formatToPlainString(A.reactionTooltip2, {
      a: O[0],
      b: O[1],
      emojiName: S
    });
    else if (null != h) return d.intl.format(A.reactionTooltip2NInteractive, {
    a: O[0],
    b: O[1],
    n: v,
    emojiName: S,
    onClick: h
  });
  else return d.intl.formatToPlainString(A.reactionTooltip2N, {
    a: O[0],
    b: O[1],
    n: v,
    emojiName: S
  });
  return 3 !== O.length ? null != h ? d.intl.format(A.reactionTooltipNInteractive, {
    n: v,
    emojiName: S,
    onClick: h
  }) : d.intl.formatToPlainString(A.reactionTooltipN, {
    n: v,
    emojiName: S
  }) : v > 0 ? null != h ? d.intl.format(A.reactionTooltip3NInteractive, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: v,
    emojiName: S,
    onClick: h
  }) : d.intl.formatToPlainString(A.reactionTooltip3N, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: v,
    emojiName: S
  }) : d.intl.formatToPlainString(A.reactionTooltip3, {
    a: O[0],
    b: O[1],
    c: O[2],
    emojiName: S
  })
}