/** Chunk was on 1272 **/
/** chunk id: 304106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764451 = require("./764451.js");
let p = e => {
    let {
      IconComponent: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(d.iconCircle, n),
      children: (0, r.jsx)(t, {
        className: d.icon,
        color: "currentColor"
      })
    })
  },
  f = e => {
    let {
      circle: t,
      smallHeader: n,
      text: i,
      className: l
    } = e;
    return (0, r.jsxs)("div", {
      className: a()(d.recommendationReason, l),
      children: [t, (0, r.jsxs)("div", {
        className: d.description,
        children: [null != n ? (0, r.jsx)("div", {
          className: d.smallHeader,
          children: n
        }) : null, (0, r.jsx)("div", {
          className: d.text,
          children: i
        })]
      })]
    })
  };
class g extends Chunk473749.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === c.AzA.RECENT_RELEASE_DATE) return (0, r.jsx)(f, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: o.Que
      }),
      smallHeader: u.intl.string(u.t.u81aYY),
      text: (0, s.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.RELEASE_DATE) return (0, r.jsx)(f, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: o.Que
      }),
      smallHeader: u.intl.string(u.t.qpwaNY),
      text: (0, s.vc)(e.releaseDate, "LL")
    });
    if (e.type === c.AzA.EARLY_ACCESS)
      if (null != e.releaseDate) return (0, r.jsx)(f, {
        className: t,
        circle: (0, r.jsx)(p, {
          IconComponent: o.d$P,
          className: d.earlyAccess
        }),
        smallHeader: u.intl.string(u.t.HYys0s),
        text: (0, s.vc)(e.releaseDate, "LL")
      });
      else return (0, r.jsx)(f, {
        className: t,
        circle: (0, r.jsx)(p, {
          IconComponent: o.d$P,
          className: d.earlyAccess
        }),
        text: u.intl.string(u.t.HYys0s)
      });
    return e.type === c.AzA.FLAVOR_TEXT ? (0, r.jsx)(f, {
      circle: (0, r.jsx)(p, {
        IconComponent: o.dz2
      }),
      text: e.flavorText,
      className: t
    }) : e.type === c.AzA.HAS_FREE_PREMIUM_CONTENT ? (0, r.jsx)(f, {
      className: t,
      circle: (0, r.jsx)(p, {
        IconComponent: o.SrA,
        className: d.premiumCircle
      }),
      text: u.intl.string(u.t.R9SwVl)
    }) : null
  }
}