/** Chunk was on 30419 **/
/** chunk id: 777789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk471885 = require("./471885.jsx"),
  Chunk424625 = require("./424625.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk151494 = require("./151494.js"),
  Chunk234865 = require("./234865.js");
class j extends Chunk73800.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk234865.tierPill,
      children: [(0, Chunk255367.jsx)(Chunk297700.Z, {
        className: Chunk234865.tierPillStar,
        children: (0, Chunk255367.jsx)(Chunk471885.Z, {
          tier: module,
          color: "currentColor",
          className: Chunk234865.tierPillGem
        })
      }), (0, Chunk267642.nW)(module)]
    })
  }
}
let f = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e, r = (0, p.Z)(n.id);
  if (0 === t) return null;
  let i = (0, m.Jh)(n.id),
    s = (0, m.ee)(r + t),
    a = s - i;
  return 0 === a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Z, {
      className: a > 0 ? g.levelUpIcon : g.levelDownIcon
    }), (0, l.jsx)(j, {
      tier: s
    })]
  })
};

function C(e) {
  let {
    guild: t,
    className: n,
    subscriptionChange: i
  } = e, d = (0, a.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
  return r.useEffect(() => {
    d || (0, x.Fm)(t.id)
  }, [d, t.id]), (0, l.jsxs)("div", {
    className: s()(g.subscription, n),
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
        children: [(0, l.jsx)(j, {
          tier: t.premiumTier
        }), (0, l.jsx)(f, {
          guild: t,
          subscriptionChange: null != i ? i : 0
        })]
      })]
    })]
  })
}