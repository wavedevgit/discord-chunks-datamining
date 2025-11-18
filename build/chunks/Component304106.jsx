/** Chunk was on 1272 **/
/** chunk id: 304106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk327484 = require("./327484.js");
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
class h extends Chunk473749.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (module.type === Chunk981631.AzA.RECENT_RELEASE_DATE) return (0, Chunk54381.jsx)(f, {
      className: exports,
      circle: (0, Chunk54381.jsx)(p, {
        IconComponent: Chunk481060.Que
      }),
      smallHeader: Chunk388032.intl.string(Chunk388032.t.u81aYY),
      text: (0, Chunk55935.vc)(module.releaseDate, "LL")
    });
    if (module.type === Chunk981631.AzA.RELEASE_DATE) return (0, Chunk54381.jsx)(f, {
      className: exports,
      circle: (0, Chunk54381.jsx)(p, {
        IconComponent: Chunk481060.Que
      }),
      smallHeader: Chunk388032.intl.string(Chunk388032.t.qpwaNY),
      text: (0, Chunk55935.vc)(module.releaseDate, "LL")
    });
    if (module.type === Chunk981631.AzA.EARLY_ACCESS)
      if (null != module.releaseDate) return (0, Chunk54381.jsx)(f, {
        className: exports,
        circle: (0, Chunk54381.jsx)(p, {
          IconComponent: Chunk481060.d$P,
          className: Chunk327484.earlyAccess
        }),
        smallHeader: Chunk388032.intl.string(Chunk388032.t.HYys0s),
        text: (0, Chunk55935.vc)(module.releaseDate, "LL")
      });
      else return (0, Chunk54381.jsx)(f, {
        className: exports,
        circle: (0, Chunk54381.jsx)(p, {
          IconComponent: Chunk481060.d$P,
          className: Chunk327484.earlyAccess
        }),
        text: Chunk388032.intl.string(Chunk388032.t.HYys0s)
      });
    return module.type === Chunk981631.AzA.FLAVOR_TEXT ? (0, Chunk54381.jsx)(f, {
      circle: (0, Chunk54381.jsx)(p, {
        IconComponent: Chunk481060.dz2
      }),
      text: module.flavorText,
      className: exports
    }) : module.type === Chunk981631.AzA.HAS_FREE_PREMIUM_CONTENT ? (0, Chunk54381.jsx)(f, {
      className: exports,
      circle: (0, Chunk54381.jsx)(p, {
        IconComponent: Chunk481060.SrA,
        className: Chunk327484.premiumCircle
      }),
      text: Chunk388032.intl.string(Chunk388032.t.R9SwVl)
    }) : null
  }
}