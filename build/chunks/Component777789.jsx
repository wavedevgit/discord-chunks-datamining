/** Chunk was on 30419 **/
/** chunk id: 777789, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
class C extends Chunk647438.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk234865.tierPill,
      children: [(0, Chunk951288.jsx)(Chunk297700.Z, {
        className: Chunk234865.tierPillStar,
        children: (0, Chunk951288.jsx)(Chunk471885.Z, {
          tier: module,
          color: "currentColor",
          className: Chunk234865.tierPillGem
        })
      }), (0, Chunk267642.nW)(module)]
    })
  }
}
let j = e => {
  let {
    subscriptionChange: t,
    guild: l
  } = e, r = (0, h.Z)(l.id);
  if (0 === t) return null;
  let i = (0, m.Jh)(l.id),
    s = (0, m.ee)(r + t),
    a = s - i;
  return 0 === a ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.Z, {
      className: a > 0 ? f.levelUpIcon : f.levelDownIcon
    }), (0, n.jsx)(C, {
      tier: s
    })]
  })
};

function p(e) {
  let {
    guild: t,
    className: l,
    subscriptionChange: i
  } = e, c = (0, a.e7)([g.Z], () => null != g.Z.getStateForGuild(t.id));
  return r.useEffect(() => {
    c || (0, x.Fm)(t.id)
  }, [c, t.id]), (0, n.jsxs)("div", {
    className: s()(f.subscription, l),
    children: [(0, n.jsx)(o.Z, {
      guild: t,
      size: o.Z.Sizes.LARGE
    }), (0, n.jsxs)("div", {
      className: f.subscriptionInfo,
      children: [(0, n.jsx)("div", {
        className: f.guildName,
        children: t.name
      }), (0, n.jsxs)("div", {
        className: f.tierInfo,
        children: [(0, n.jsx)(C, {
          tier: t.premiumTier
        }), (0, n.jsx)(j, {
          guild: t,
          subscriptionChange: null != i ? i : 0
        })]
      })]
    })]
  })
}