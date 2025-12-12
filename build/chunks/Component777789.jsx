/** Chunk was on web.js **/
/** chunk id: 777789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
class g extends Chunk473749.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk234865.tierPill,
      children: [(0, Chunk54381.jsx)(Chunk297700.Z, {
        className: Chunk234865.tierPillStar,
        children: (0, Chunk54381.jsx)(Chunk471885.Z, {
          tier: module,
          color: "currentColor",
          className: Chunk234865.tierPillGem
        })
      }), (0, Chunk267642.nW)(module)]
    })
  }
}
let E = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e, i = (0, m.Z)(n.id);
  if (0 === t) return null;
  let o = (0, f.Jh)(n.id),
    a = (0, f.ee)(i + t),
    s = a - o;
  return 0 === s ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      className: s > 0 ? h.levelUpIcon : h.levelDownIcon
    }), (0, r.jsx)(g, {
      tier: a
    })]
  })
};

function b(e) {
  let {
    guild: t,
    className: n,
    subscriptionChange: o
  } = e, c = (0, s.e7)([_.Z], () => null != _.Z.getStateForGuild(t.id));
  return i.useEffect(() => {
    c || (0, p.BN)(t.id)
  }, [c, t.id]), (0, r.jsxs)("div", {
    className: a()(h.subscription, n),
    children: [(0, r.jsx)(l.Z, {
      guild: t,
      size: l.Z.Sizes.LARGE
    }), (0, r.jsxs)("div", {
      className: h.subscriptionInfo,
      children: [(0, r.jsx)("div", {
        className: h.guildName,
        children: t.name
      }), (0, r.jsxs)("div", {
        className: h.tierInfo,
        children: [(0, r.jsx)(g, {
          tier: t.premiumTier
        }), (0, r.jsx)(E, {
          guild: t,
          subscriptionChange: null != o ? o : 0
        })]
      })]
    })]
  })
}