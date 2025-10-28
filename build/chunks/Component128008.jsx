/** Chunk was on 36925 **/
/** chunk id: 128008, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h6: () => _,
  mv: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk455199 = require("./455199.js"),
  Chunk821020 = require("./821020.js"),
  Chunk725739 = require("./725739.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk982183 = require("./982183.js"),
  Chunk871301 = require("./871301.js"),
  Chunk888158 = require("./888158.js");

function b() {
  let {
    setSelectedFilter: e
  } = (0, Chunk725739.Z)(), t = (0, Chunk334426.d)(e => e.setInboxReadState);
  return () => {
    module(Chunk982183.V5.ALL), exports(false)
  }
}

function _(e) {
  let {
    isSelected: t
  } = e, {
    unreadRecentMentionsCount: n,
    unreadChannelIds: l
  } = (0, p.O4)(), d = function() {
    let e = function() {
        let {
          unreadRecentMentionsCount: e
        } = (0, p.O4)(), {
          hasMoreMentions: t,
          mentionsLoading: n
        } = (0, a.cj)([c.ZP], () => ({
          hasMoreMentions: c.ZP.hasMore,
          mentionsLoading: c.ZP.loading
        })), r = Math.min(e, g.om), i = e > r || t || n, l = (0, s.OVM)(r) + 6 * !!i;
        return {
          clampedCount: r,
          isEstimated: i,
          width: l
        }
      }(),
      t = i.useCallback(t => e.isEstimated ? "".concat(t, "+") : t, [e.isEstimated]),
      n = i.useMemo(() => (function(e, t) {
        let {
          clampedCount: n,
          width: i
        } = e;
        return (0, r.jsx)(s.mAB, {
          count: n,
          renderBadgeCount: t,
          style: {
            width: i
          },
          className: m.badgeTransition
        })
      })(e, t), [e, t]);
    return i.useMemo(() => ({
      badge: n,
      badgeType: "mentions",
      dimensions: {
        height: g.hh,
        width: e.width
      }
    }), [n, e.width])
  }(), {
    entrypoint: f
  } = (0, u.pN)({
    location: "useInboxBadgeInfo"
  });
  return i.useMemo(() => {
    if (n > 0) return d;
    let e = l.length;
    if (0 === e) return {
      badge: null,
      badgeType: null
    };
    if (f === u.u3.SERVER_RAIL_TOP) {
      let n = (0, s.OVM)(e) - 3;
      return {
        badge: function(e, t) {
          let n = (0, s.OVM)(e) - 3;
          return (0, r.jsx)(s.mAB, {
            count: e,
            style: {
              width: n,
              lineHeight: g.zw,
              height: g.zw,
              minHeight: g.zw,
              minWidth: g.zw
            },
            className: o()(m.badgeTransition, m.grayBadge, {
              [m.selected]: t
            })
          })
        }(e, t),
        badgeType: "unread",
        dimensions: {
          height: g.zw,
          width: n
        }
      }
    }
    return f === u.u3.TITLE_BAR_LEFT ? {
      badge: (0, r.jsx)(s.Text, {
        variant: "eyebrow",
        children: (0, s.NGo)(e)
      }),
      badgeType: "unread"
    } : {
      badge: null,
      badgeType: null
    }
  }, [n, d, l.length, f, t])
}