/** Chunk was on 1272 **/
/** chunk id: 304106, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk776761 = require("./776761.js");
let p = e => {
    let {
      IconComponent: t,
      className: n
    } = e;
    return <div className={a()(d.iconCircle, n)}><t className={d.icon} color={"currentColor"} /></div>
  },
  f = e => {
    let {
      circle: t,
      smallHeader: n,
      text: i,
      className: l
    } = e;
    return <div className={a()(d.recommendationReason, l)}>{t}{<div className={d.description}>{null != n ? <div className={d.smallHeader}>{n}</div> : null}{<div className={d.text}>{i}</div>}</div>}</div>
  };
class h extends Chunk73800.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (module.type === Chunk981631.AzA.RECENT_RELEASE_DATE) return <f className={exports} circle={(0, Chunk255367.jsx)(p, {
        IconComponent: Chunk481060.Que
      })} smallHeader={Chunk388032.intl.string(Chunk388032.t.u81aYW)} text={(0, Chunk55935.vc)(module.releaseDate, "LL")} />;
    if (module.type === Chunk981631.AzA.RELEASE_DATE) return <f className={exports} circle={(0, Chunk255367.jsx)(p, {
        IconComponent: Chunk481060.Que
      })} smallHeader={Chunk388032.intl.string(Chunk388032.t.qpwaNT)} text={(0, Chunk55935.vc)(module.releaseDate, "LL")} />;
    if (module.type === Chunk981631.AzA.EARLY_ACCESS)
      if (null != module.releaseDate) return <f className={exports} circle={(0, Chunk255367.jsx)(p, {
          IconComponent: Chunk481060.d$P,
          className: Chunk776761.earlyAccess
        })} smallHeader={Chunk388032.intl.string(Chunk388032.t.HYys0t)} text={(0, Chunk55935.vc)(module.releaseDate, "LL")} />;
      else return <f className={exports} circle={(0, Chunk255367.jsx)(p, {
          IconComponent: Chunk481060.d$P,
          className: Chunk776761.earlyAccess
        })} text={Chunk388032.intl.string(Chunk388032.t.HYys0t)} />;
    return module.type === Chunk981631.AzA.FLAVOR_TEXT ? <f circle={(0, Chunk255367.jsx)(p, {
        IconComponent: Chunk481060.dz2
      })} text={module.flavorText} className={exports} /> : module.type === Chunk981631.AzA.HAS_FREE_PREMIUM_CONTENT ? <f className={exports} circle={(0, Chunk255367.jsx)(p, {
        IconComponent: Chunk481060.SrA,
        className: Chunk776761.premiumCircle
      })} text={Chunk388032.intl.string(Chunk388032.t.R9SwVl)} /> : null
  }
}