/** Chunk was on 22988 **/
/** chunk id: 320893, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.js"),
  Chunk752651 = require("./752651.js"),
  Chunk934961 = require("./934961.js"),
  Chunk568294 = require("./568294.js"),
  Chunk867861 = require("./867861.js"),
  Chunk860790 = require("./860790.js"),
  Chunk268953 = require("./268953.js"),
  Chunk487703 = require("./487703.js"),
  Chunk458050 = require("./458050.js"),
  Chunk334364 = require("./334364.js"),
  Chunk431712 = require("./431712.js");

function j(e) {
  return (0, i.wj)(e) ? c.revenueSharePercentageDark : c.revenueSharePercentageLight
}

function v() {
  let e = (0, Chunk410030.ZP)(),
    t = {
      backgroundColor: (0, Chunk780384.wj)(module) ? "#2e3638" : "var(--background-base-low)"
    };
  return <div className={Chunk752651.earningsPreviewContainer} style={exports}>{<div>{<Chunk481060.Text variant={"text-sm/normal"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.TXPK7O)}</Chunk481060.Text>}{<Chunk481060.LZC size={8} />}{<Chunk481060.X6q variant={"heading-md/bold"} className={j(module)}>{Chunk388032.intl.string(Chunk388032.t.LdjJGx)}</Chunk481060.X6q>}</div>}{<img className={Chunk752651.roundAvatar} src={Chunk487703} alt={Chunk388032.intl.string(Chunk388032.t.NgjpTE)} />}</div>
}

function _() {
  let e = (0, Chunk410030.ZP)();

  function t(e) {
    var t, n;
    let {
      length: i,
      horizontal: l
    } = e;
    return <div className={l ? c.horizontalConnector : c.verticalConnector} style={t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, l ? {
        width: i
      } : {
        height: i
      }), n = n = {
        border: "1px solid #49494933"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t} />
  }
  return <div className={Chunk752651.avatarGridContainer} aria-label={Chunk388032.intl.string(Chunk388032.t["P2B/0d"])}>{<div className={Chunk752651.avatarCard}>{<exports length={24} />}{<img className={Chunk752651.roundAvatar} src={(0, Chunk780384.wj)(module) ? Chunk934961 : Chunk568294} alt={""} />}{<exports horizontal={true} length={12} />}</div>}{<div className={Chunk752651.avatarCard}>{<exports length={24} />}{<img className={Chunk752651.roundAvatar} src={Chunk867861} alt={""} />}</div>}{<div className={Chunk752651.avatarCard}>{<exports length={12} />}{<img className={Chunk752651.roundAvatar} src={Chunk860790} alt={""} />}{<exports horizontal={true} length={12} />}</div>}{<div className={Chunk752651.avatarCard}>{<exports length={12} />}{<img className={Chunk752651.roundAvatar} src={Chunk268953} alt={""} />}</div>}</div>
}

function O() {
  return <div className={Chunk752651.earningBenefitCard}>{<Chunk481060.Text variant={"text-md/normal"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t["9CdmS0"])}</Chunk481060.Text>}{<Chunk481060.LZC size={32} />}{<v />}{<Chunk481060.LZC size={24} />}{<_ />}</div>
}

function y() {
  return <div className={Chunk752651.followerBenefitCard}>{<Chunk481060.Text className={Chunk752651.followerBenefitText} variant={"text-md/normal"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.qsKRUV)}</Chunk481060.Text>}{<img className={Chunk752651.roleSubscriptionSocial} src={Chunk431712} alt={Chunk388032.intl.string(Chunk388032.t.yTPpra)} />}{<img className={Chunk752651.roleSubscriptionLanyardIllo} src={Chunk334364} alt={Chunk388032.intl.string(Chunk388032.t["+gd9QU"])} />}</div>
}

function C() {
  let e = (0, Chunk410030.ZP)();
  return <div className={Chunk752651.revenueShareBenefitCard}>{<div>{<Chunk481060.X6q className={j(module)} style={{
          fontSize: "50px",
          lineHeight: "52px"
        }} variant={"heading-xxl/extrabold"}>{Chunk293810.NT}{"%"}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-md/normal"} color={"header-secondary"}>{Chunk388032.intl.string(Chunk388032.t.AewsXF)}</Chunk481060.Text>}</div>}{<img className={Chunk752651.roleSubscriptionEarningIllo} src={Chunk458050} alt={Chunk388032.intl.string(Chunk388032.t.fD9Wv7)} />}</div>
}

function N() {
  return <div>{<Chunk481060.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t["1QHJaW"])}</Chunk481060.X6q>}{<Chunk481060.LZC size={24} />}{<div className={Chunk752651.creatorBenefitsContainer}>{<O />}{<y />}{<C />}</div>}</div>
}