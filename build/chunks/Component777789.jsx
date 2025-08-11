/** Chunk was on 30419 **/
/** chunk id: 777789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk471885 = require("./471885.jsx"),
  Chunk424625 = require("./424625.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk151494 = require("./151494.js"),
  Chunk632149 = require("./632149.js");
class f extends Chunk73800.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk632149.tierPill,
      children: [(0, Chunk255367.jsx)(Chunk297700.Z, {
        className: Chunk632149.tierPillStar,
        children: (0, Chunk255367.jsx)(Chunk471885.Z, {
          tier: module,
          color: "currentColor",
          className: Chunk632149.tierPillGem
        })
      }), (0, Chunk267642.nW)(module)]
    })
  }
}
let j = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e, r = (0, p.Z)(n.id);
  if (0 === t) return null;
  let s = (0, m.Jh)(n.id),
    i = (0, m.ee)(r + t),
    a = i - s;
  return 0 === a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z, {
      className: a > 0 ? g.levelUpIcon : g.levelDownIcon
    }), (0, l.jsx)(f, {
      tier: i
    })]
  })
};

function C(e) {
  let {
    guild: t,
    className: n,
    subscriptionChange: s
  } = e, c = (0, a.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
  return r.useEffect(() => {
    c || (0, x.Fm)(t.id)
  }, [c, t.id]), (0, l.jsxs)("div", {
    className: i()(g.subscription, n),
    children: [(0, l.jsx)(o.Z, {
      guild: t,
      size: o.Z.Sizes.LARGE
    }), (0, l.jsxs)("div", {
      className: g.subscriptionInfo,
      children: [(0, l.jsx)("div", {
        className: g.guildName,
        children: t.name
      }), (0, l.jsxs)("div", {
        className: g.tierInfo,
        children: [(0, l.jsx)(f, {
          tier: t.premiumTier
        }), (0, l.jsx)(j, {
          guild: t,
          subscriptionChange: null != s ? s : 0
        })]
      })]
    })]
  })
}