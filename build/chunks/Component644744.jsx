/** Chunk was on 30202 **/
/** chunk id: 644744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk490529 = require("./490529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134840 = require("./134840.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = {
    [Chunk981631.gkr.HOUSE_1]: Chunk134840.membershipDialogHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk134840.membershipDialogHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk134840.membershipDialogHouse3
  },
  h = {
    [Chunk981631.gkr.HOUSE_1]: Chunk134840.houseLogoHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk134840.__invalid_houseLogoHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk134840.__invalid_houseLogoHouse3
  },
  f = {
    [Chunk981631.gkr.HOUSE_1]: require("./246300.js"),
    [Chunk981631.gkr.HOUSE_2]: require("./797148.js"),
    [Chunk981631.gkr.HOUSE_3]: require("./374347.js")
  };
class b extends Chunk647438.Component {
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
      return (0, Chunk951288.jsx)("div", {
        className: a()(Chunk134840.membershipDialog, g[module]),
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk134840.membershipDialogContent,
          children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
              grow: 1,
              shrink: 1,
              children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
                className: Chunk134840.membershipDialogHeading,
                variant: "text-xs/bold",
                children: Chunk388032.intl.string(Chunk388032.t.KZoEIy)
              }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
                className: Chunk134840.membershipDialogHouseName,
                variant: "heading-sm/semibold",
                children: exports
              }), (0, Chunk951288.jsx)(Chunk481060.Text, {
                className: Chunk134840.membershipDialogHouseDescription,
                variant: "text-md/normal",
                children: {
                  [Chunk981631.gkr.HOUSE_1]: Chunk388032.intl.string(Chunk388032.t.CpG10d),
                  [Chunk981631.gkr.HOUSE_2]: Chunk388032.intl.string(Chunk388032.t.VNPE6u),
                  [Chunk981631.gkr.HOUSE_3]: Chunk388032.intl.string(Chunk388032.t.KNfiTU)
                } [module]
              })]
            }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
              className: Chunk134840.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: true,
              children: (0, Chunk951288.jsx)("img", {
                className: a()(Chunk134840.houseLogo, h[module]),
                src: f[module],
                alt: exports
              })
            })]
          }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
            className: Chunk134840.membershipDialogSwitchHouses,
            variant: "text-md/normal",
            children: [Chunk388032.intl.string(Chunk388032.t.zD3mqK), (0, Chunk951288.jsx)(Chunk481060.P3F, {
              className: Chunk134840.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: "span",
              children: Chunk388032.intl.string(Chunk388032.t.LzBgrq)
            })]
          })]
        })
      })
    }
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk134840.joinCTAWrapper,
      children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk134840.joinCTA,
        align: Chunk600164.Z.Align.CENTER,
        justify: Chunk600164.Z.Justify.CENTER,
        direction: Chunk600164.Z.Direction.HORIZONTAL,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.Uq6KRk)
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t["1GWQKi"]),
            onClick: this.handleJoinHypeSquadClick
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk134840.newsletterWarning,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["3kUvgo"])
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleJoinHypeSquadClick", () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("83264").then(n.bind(n, 711184));
        return t => (0, i.jsx)(e, function(e) {
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
        }({}, t))
      })
    })
  }
}