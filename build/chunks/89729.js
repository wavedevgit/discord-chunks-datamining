/** Chunk was on 38626 **/
/** chunk id: 89729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => p
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk995774 = require("./995774.js"),
  Chunk592125 = require("./592125.js"),
  Chunk542578 = require("./542578.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk566006 = require("./566006.js"),
  Chunk388032 = require("./388032.jsx");
let h = {
  standard: {
    reactionTooltip1NInteractive: Chunk388032.t.dgtYDA,
    reactionTooltip1N: Chunk388032.t.mXild3,
    reactionTooltip1: Chunk388032.t.Oro30N,
    reactionTooltip2NInteractive: Chunk388032.t["0GBwVV"],
    reactionTooltip2N: Chunk388032.t.UWGs2t,
    reactionTooltip2: Chunk388032.t["p+0jvr"],
    reactionTooltip3NInteractive: Chunk388032.t["dK6/7e"],
    reactionTooltip3N: Chunk388032.t.UnXdX1,
    reactionTooltip3: Chunk388032.t.bbPMcX,
    reactionTooltipNInteractive: Chunk388032.t.Thj7LS,
    reactionTooltipN: Chunk388032.t.CRrc7e
  },
  burst: {
    reactionTooltip1NInteractive: Chunk388032.t.G98B0d,
    reactionTooltip1N: Chunk388032.t["u/03eH"],
    reactionTooltip1: Chunk388032.t["z4q3+/"],
    reactionTooltip2NInteractive: Chunk388032.t.wkcffn,
    reactionTooltip2N: Chunk388032.t.T4EYUl,
    reactionTooltip2: Chunk388032.t.R2HykZ,
    reactionTooltip3NInteractive: Chunk388032.t.OhtGx8,
    reactionTooltip3N: Chunk388032.t.M8bwl5,
    reactionTooltip3: Chunk388032.t.sNl6XV,
    reactionTooltipNInteractive: Chunk388032.t.nsITOj,
    reactionTooltipN: Chunk388032.t.dkieHx
  }
};

function p(e, t) {
  var n, i;
  let p = arguments.length > 2 && true !== arguments[2] ? arguments[2] : u.O.NORMAL,
    m = arguments.length > 3 ? arguments[3] : true,
    f = a.Z.getReactions(e.getChannelId(), e.id, t, 3, p),
    g = o.Z.getChannel(e.getChannelId()),
    b = null == g || g.isPrivate() ? null : g.getGuildId(),
    j = e.getReaction(t),
    v = p === u.O.BURST,
    O = l()(Array.from(null != (n = null == f ? true : f.values()) ? n : [])).reject(e => s.Z.isBlockedOrIgnored(e.id)).take(3).map(e => c.ZP.getName(b, null == g ? true : g.id, e)).value();
  if (0 === O.length) return "";
  let y = v ? h.burst : h.standard,
    T = Math.max(0, (null != (i = v ? null == j ? true : j.burst_count : null == j ? true : j.count) ? i : 0) - O.length),
    x = (0, r.Lh)(t);
  if (1 === O.length)
    if (!(T > 0)) return d.intl.formatToPlainString(y.reactionTooltip1, {
      a: O[0],
      emojiName: x
    });
    else if (null != m) return d.intl.format(y.reactionTooltip1NInteractive, {
    a: O[0],
    n: T,
    emojiName: x,
    onClick: m
  });
  else return d.intl.formatToPlainString(y.reactionTooltip1N, {
    a: O[0],
    n: T,
    emojiName: x
  });
  if (2 === O.length)
    if (!(T > 0)) return d.intl.formatToPlainString(y.reactionTooltip2, {
      a: O[0],
      b: O[1],
      emojiName: x
    });
    else if (null != m) return d.intl.format(y.reactionTooltip2NInteractive, {
    a: O[0],
    b: O[1],
    n: T,
    emojiName: x,
    onClick: m
  });
  else return d.intl.formatToPlainString(y.reactionTooltip2N, {
    a: O[0],
    b: O[1],
    n: T,
    emojiName: x
  });
  return 3 !== O.length ? null != m ? d.intl.format(y.reactionTooltipNInteractive, {
    n: T,
    emojiName: x,
    onClick: m
  }) : d.intl.formatToPlainString(y.reactionTooltipN, {
    n: T,
    emojiName: x
  }) : T > 0 ? null != m ? d.intl.format(y.reactionTooltip3NInteractive, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: T,
    emojiName: x,
    onClick: m
  }) : d.intl.formatToPlainString(y.reactionTooltip3N, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: T,
    emojiName: x
  }) : d.intl.formatToPlainString(y.reactionTooltip3, {
    a: O[0],
    b: O[1],
    c: O[2],
    emojiName: x
  })
}