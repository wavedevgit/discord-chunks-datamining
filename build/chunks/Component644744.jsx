/** Chunk was on web.js **/
/** chunk id: 644744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk490529 = require("./490529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk271363 = require("./271363.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = {
    [Chunk981631.gkr.HOUSE_1]: Chunk271363.membershipDialogHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk271363.membershipDialogHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk271363.membershipDialogHouse3
  },
  m = {
    [Chunk981631.gkr.HOUSE_1]: Chunk271363.houseLogoHouse1,
    [Chunk981631.gkr.HOUSE_2]: Chunk271363.__invalid_houseLogoHouse2,
    [Chunk981631.gkr.HOUSE_3]: Chunk271363.__invalid_houseLogoHouse3
  },
  g = {
    [Chunk981631.gkr.HOUSE_1]: require("./246300.js"),
    [Chunk981631.gkr.HOUSE_2]: require("./797148.js"),
    [Chunk981631.gkr.HOUSE_3]: require("./374347.js")
  },
  E = e => ({
    [u.gkr.HOUSE_1]: d.intl.string(d.t.CpG10d),
    [u.gkr.HOUSE_2]: d.intl.string(d.t.VNPE6u),
    [u.gkr.HOUSE_3]: d.intl.string(d.t.KNfiTU)
  })[e];
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
        className: o()(Chunk271363.membershipDialog, h[module]),
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk271363.membershipDialogContent,
          children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
            children: [(0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
              grow: 1,
              shrink: 1,
              children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
                className: Chunk271363.membershipDialogHeading,
                variant: "text-xs/bold",
                children: Chunk388032.intl.string(Chunk388032.t.KZoEIy)
              }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
                className: Chunk271363.membershipDialogHouseName,
                variant: "heading-sm/semibold",
                children: exports
              }), (0, Chunk951288.jsx)(Chunk481060.Text, {
                className: Chunk271363.membershipDialogHouseDescription,
                variant: "text-md/normal",
                children: E(module)
              })]
            }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
              className: Chunk271363.houseLogoWrapper,
              grow: 0,
              shrink: 0,
              wrap: true,
              children: (0, Chunk951288.jsx)("img", {
                className: o()(Chunk271363.houseLogo, m[module]),
                src: g[module],
                alt: exports
              })
            })]
          }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
            className: Chunk271363.membershipDialogSwitchHouses,
            variant: "text-md/normal",
            children: [Chunk388032.intl.string(Chunk388032.t.zD3mqK), (0, Chunk951288.jsx)(Chunk481060.P3F, {
              className: Chunk271363.membershipDialogSwitchHousesAction,
              onClick: this.handleJoinHypeSquadClick,
              tag: "span",
              children: Chunk388032.intl.string(Chunk388032.t.LzBgrq)
            })]
          })]
        })
      })
    }
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk271363.joinCTAWrapper,
      children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk271363.joinCTA,
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
        className: Chunk271363.newsletterWarning,
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["3kUvgo"])
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleJoinHypeSquadClick", () => {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("83264").then(n.bind(n, 711184));
        return t => (0, r.jsx)(e, p({}, t))
      })
    })
  }
}