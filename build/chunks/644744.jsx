/** Chunk was on 75708 **/
/** chunk id: 644744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk490529 = require("./490529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk962311 = require("./962311.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = {
    [Chunk981631.gkr.HOUSE_1]: Chunk962311.membershipDialogHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk962311.membershipDialogHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk962311.membershipDialogHouse3
  },
  h = {
    [Chunk981631.gkr.HOUSE_1]: Chunk962311.houseLogoHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk962311.__invalid_houseLogoHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk962311.__invalid_houseLogoHouse3
  },
  f = {
    [Chunk981631.gkr.HOUSE_1]: require("./246300.js"),
    [Chunk981631.gkr.HOUSE_2]: require("./797148.js"),
    [Chunk981631.gkr.HOUSE_3]: require("./374347.js")
  },
  b = e => ({
    [d.gkr.HOUSE_1]: u.intl.string(u.t.CpG10d),
    [d.gkr.HOUSE_2]: u.intl.string(u.t.VNPE6u),
    [d.gkr.HOUSE_3]: u.intl.string(u.t.KNfiTU)
  })[e];
class x extends Chunk73800.Component {
  render() {
    let {
      houseMembership: e,
      isClaimed: t,
      isVerified: n
    } = this.props;
    if (!exports || !require) return null;
    if (null != module) {
      let t = Chunk388032.intl.formatToPlainString(Chunk388032.t.yG0XAA, {
        houseName: (0, Chunk490529.X8)(module)
      });
      return <div className={a()(Chunk962311.membershipDialog, g[module])}><div className={Chunk962311.membershipDialogContent}>{<Chunk600164.Z>{<Chunk600164.Z.Child grow={1} shrink={1}>{<Chunk481060.Text className={Chunk962311.membershipDialogHeading} variant={"text-xs/bold"}>{Chunk388032.intl.string(Chunk388032.t.KZoEIy)}</Chunk481060.Text>}{<Chunk481060.X6q className={Chunk962311.membershipDialogHouseName} variant={"heading-sm/semibold"}>{exports}</Chunk481060.X6q>}{<Chunk481060.Text className={Chunk962311.membershipDialogHouseDescription} variant={"text-md/normal"}>{b(module)}</Chunk481060.Text>}</Chunk600164.Z.Child>}{<Chunk600164.Z.Child className={Chunk962311.houseLogoWrapper} grow={0} shrink={0} wrap={true}><img className={a()(Chunk962311.houseLogo, h[module])} src={f[module]} alt={exports} /></Chunk600164.Z.Child>}</Chunk600164.Z>}{<Chunk481060.Text className={Chunk962311.membershipDialogSwitchHouses} variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.zD3mqK)}{<Chunk481060.P3F className={Chunk962311.membershipDialogSwitchHousesAction} onClick={this.handleJoinHypeSquadClick} tag={"span"}>{Chunk388032.intl.string(Chunk388032.t.LzBgrq)}</Chunk481060.P3F>}</Chunk481060.Text>}</div></div>
    }
    return <div className={Chunk962311.joinCTAWrapper}>{<Chunk600164.Z className={Chunk962311.joinCTA} align={Chunk600164.Z.Align.CENTER} justify={Chunk600164.Z.Justify.CENTER} direction={Chunk600164.Z.Direction.HORIZONTAL}>{<Chunk600164.Z.Child grow={0} shrink={0}><Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.Uq6KRk)}</Chunk481060.Text></Chunk600164.Z.Child>}{<Chunk600164.Z.Child grow={0} shrink={0}><Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t["1GWQKi"])} onClick={this.handleJoinHypeSquadClick} /></Chunk600164.Z.Child>}</Chunk600164.Z>}{<Chunk481060.Text className={Chunk962311.newsletterWarning} variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["3kUvgo"])}</Chunk481060.Text>}</div>
  }
  constructor(...e) {
    super(...e), p(this, "handleJoinHypeSquadClick", () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("83264").then(n.bind(n, 711184));
        return t => <e{...function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              p(e, t, n[t])
            })
          }
          return e
        }({}, t)} />
      })
    })
  }
}