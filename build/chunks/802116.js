/** Chunk was on 7034 **/
/** chunk id: 802116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => h
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk815807 = require("./815807.js"),
  Chunk734057 = require("./734057.js"),
  Chunk956703 = require("./956703.js"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk505527 = require("./505527.js"),
  Chunk985018 = require("./985018.jsx");
let p = {
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

function h(e, t) {
  var n, i;
  let h = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c.v.NORMAL,
    m = arguments.length > 3 ? arguments[3] : true,
    f = a.A.getReactions(e.getChannelId(), e.id, t, 3, h),
    g = o.A.getChannel(e.getChannelId()),
    b = null == g || g.isPrivate() ? null : g.getGuildId(),
    y = e.getReaction(t),
    O = h === c.v.BURST,
    v = l()(Array.from(null != (n = null == f ? true : f.values()) ? n : [])).reject(e => s.A.isBlockedOrIgnored(e.id)).take(3).map(e => u.Ay.getName(b, null == g ? true : g.id, e)).value();
  if (0 === v.length) return "";
  let j = O ? p.burst : p.standard,
    A = Math.max(0, (null != (i = O ? null == y ? true : y.burst_count : null == y ? true : y.count) ? i : 0) - v.length),
    T = (0, r.b3)(t);
  if (1 === v.length)
    if (!(A > 0)) return d.intl.formatToPlainString(j.reactionTooltip1, {
      a: v[0],
      emojiName: T
    });
    else if (null != m) return d.intl.format(j.reactionTooltip1NInteractive, {
    a: v[0],
    n: A,
    emojiName: T,
    onClick: m
  });
  else return d.intl.formatToPlainString(j.reactionTooltip1N, {
    a: v[0],
    n: A,
    emojiName: T
  });
  if (2 === v.length)
    if (!(A > 0)) return d.intl.formatToPlainString(j.reactionTooltip2, {
      a: v[0],
      b: v[1],
      emojiName: T
    });
    else if (null != m) return d.intl.format(j.reactionTooltip2NInteractive, {
    a: v[0],
    b: v[1],
    n: A,
    emojiName: T,
    onClick: m
  });
  else return d.intl.formatToPlainString(j.reactionTooltip2N, {
    a: v[0],
    b: v[1],
    n: A,
    emojiName: T
  });
  return 3 !== v.length ? null != m ? d.intl.format(j.reactionTooltipNInteractive, {
    n: A,
    emojiName: T,
    onClick: m
  }) : d.intl.formatToPlainString(j.reactionTooltipN, {
    n: A,
    emojiName: T
  }) : A > 0 ? null != m ? d.intl.format(j.reactionTooltip3NInteractive, {
    a: v[0],
    b: v[1],
    c: v[2],
    n: A,
    emojiName: T,
    onClick: m
  }) : d.intl.formatToPlainString(j.reactionTooltip3N, {
    a: v[0],
    b: v[1],
    c: v[2],
    n: A,
    emojiName: T
  }) : d.intl.formatToPlainString(j.reactionTooltip3, {
    a: v[0],
    b: v[1],
    c: v[2],
    emojiName: T
  })
}