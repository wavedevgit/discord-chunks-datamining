/** Chunk was on web.js **/
/** chunk id: 89729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => _
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk995774 = require("./995774.js"),
  Chunk592125 = require("./592125.js"),
  Chunk542578 = require("./542578.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk566006 = require("./566006.js"),
  Chunk388032 = require("./388032.jsx");
let f = 3,
  p = {
    standard: {
      reactionTooltip1NInteractive: Chunk388032.t.dgtYDJ,
      reactionTooltip1N: Chunk388032.t.mXild1,
      reactionTooltip1: Chunk388032.t.Oro30L,
      reactionTooltip2NInteractive: Chunk388032.t["0GBwVR"],
      reactionTooltip2N: Chunk388032.t.UWGs2n,
      reactionTooltip2: Chunk388032.t["p+0jvt"],
      reactionTooltip3NInteractive: Chunk388032.t["dK6/7W"],
      reactionTooltip3N: Chunk388032.t["UnXdX/"],
      reactionTooltip3: Chunk388032.t.bbPMcR,
      reactionTooltipNInteractive: Chunk388032.t.Thj7LX,
      reactionTooltipN: Chunk388032.t.CRrc7c
    },
    burst: {
      reactionTooltip1NInteractive: Chunk388032.t.G98B0W,
      reactionTooltip1N: Chunk388032.t["u/03eN"],
      reactionTooltip1: Chunk388032.t["z4q3+w"],
      reactionTooltip2NInteractive: Chunk388032.t.wkcffp,
      reactionTooltip2N: Chunk388032.t.T4EYUu,
      reactionTooltip2: Chunk388032.t.R2HykW,
      reactionTooltip3NInteractive: Chunk388032.t.OhtGxz,
      reactionTooltip3N: Chunk388032.t["M8bwl+"],
      reactionTooltip3: Chunk388032.t.sNl6XR,
      reactionTooltipNInteractive: Chunk388032.t.nsITOq,
      reactionTooltipN: Chunk388032.t.dkieH5
    }
  };

function _(e, t) {
  var n, r;
  let _ = arguments.length > 2 && true !== arguments[2] ? arguments[2] : u.O.NORMAL,
    m = arguments.length > 3 ? arguments[3] : true,
    h = s.Z.getReactions(e.getChannelId(), e.id, t, f, _),
    g = o.Z.getChannel(e.getChannelId()),
    E = null == g || g.isPrivate() ? null : g.getGuildId(),
    b = e.getReaction(t),
    y = _ === u.O.BURST,
    O = i()(Array.from(null != (n = null == h ? true : h.values()) ? n : [])).reject(e => l.Z.isBlockedOrIgnored(e.id)).take(f).map(e => c.ZP.getName(E, null == g ? true : g.id, e)).value();
  if (0 === O.length) return "";
  let v = y ? p.burst : p.standard,
    S = Math.max(0, (null != (r = y ? null == b ? true : b.burst_count : null == b ? true : b.count) ? r : 0) - O.length),
    I = (0, a.Lh)(t);
  if (1 === O.length)
    if (!(S > 0)) return d.intl.formatToPlainString(v.reactionTooltip1, {
      a: O[0],
      emojiName: I
    });
    else if (null != m) return d.intl.format(v.reactionTooltip1NInteractive, {
    a: O[0],
    n: S,
    emojiName: I,
    onClick: m
  });
  else return d.intl.formatToPlainString(v.reactionTooltip1N, {
    a: O[0],
    n: S,
    emojiName: I
  });
  if (2 === O.length)
    if (!(S > 0)) return d.intl.formatToPlainString(v.reactionTooltip2, {
      a: O[0],
      b: O[1],
      emojiName: I
    });
    else if (null != m) return d.intl.format(v.reactionTooltip2NInteractive, {
    a: O[0],
    b: O[1],
    n: S,
    emojiName: I,
    onClick: m
  });
  else return d.intl.formatToPlainString(v.reactionTooltip2N, {
    a: O[0],
    b: O[1],
    n: S,
    emojiName: I
  });
  return 3 !== O.length ? null != m ? d.intl.format(v.reactionTooltipNInteractive, {
    n: S,
    emojiName: I,
    onClick: m
  }) : d.intl.formatToPlainString(v.reactionTooltipN, {
    n: S,
    emojiName: I
  }) : S > 0 ? null != m ? d.intl.format(v.reactionTooltip3NInteractive, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: S,
    emojiName: I,
    onClick: m
  }) : d.intl.formatToPlainString(v.reactionTooltip3N, {
    a: O[0],
    b: O[1],
    c: O[2],
    n: S,
    emojiName: I
  }) : d.intl.formatToPlainString(v.reactionTooltip3, {
    a: O[0],
    b: O[1],
    c: O[2],
    emojiName: I
  })
}