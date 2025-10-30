/** Chunk was on 15647 **/
/** chunk id: 780367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk944486 = require("./944486.js"),
  Chunk55589 = require("./55589.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk688825 = require("./688825.js");

function b() {
  var e, t;
  let {
    pathname: n
  } = (0, Chunk843611.TH)(), b = require.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && require !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && require !== Chunk981631.Z5c.ME_ACTIVITY, _ = (0, Chunk442837.e7)([Chunk55589.Z], () => Chunk55589.Z.getPrivateChannelIds()[0]), O = (0, Chunk442837.e7)([Chunk944486.Z], () => {
    var e;
    return null != (e = Chunk944486.Z.getChannelId(Chunk981631.ME)) ? module : _
  }), [y, v] = Chunk647438.useState(false), j = (0, Chunk91192.Ie)("dms");
  return (0, Chunk951288.jsxs)(Chunk682662.H, {
    children: [(0, Chunk951288.jsx)(Chunk276952.Z, {
      selected: b,
      hovered: y,
      className: Chunk688825.pill
    }), (0, Chunk951288.jsx)(Chunk662146.Z, {
      color: Chunk481060.aML.Colors.PRIMARY,
      hideOnClick: true,
      text: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
      selected: b,
      children: (0, Chunk951288.jsx)(Chunk481060.aRk, {
        selected: true,
        lowerBadge: null,
        upperBadge: null,
        children: (0, Chunk951288.jsx)(Chunk481060.LYs, (e = function(e) {
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
        }({
          onMouseEnter: () => v(true),
          onMouseLeave: () => v(false),
          onClick: Chunk981631.dG4,
          selected: b || y,
          ariaLabel: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
          "aria-owns": "guild-list-dms",
          "aria-selected": b || y
        }, j), t = t = {
          to: {
            pathname: null != O ? Chunk981631.Z5c.CHANNEL(Chunk981631.ME, O) : Chunk981631.Z5c.ME_DMS,
            state: {
              analyticsSource: {
                page: Chunk981631.ZY5.GUILD_CHANNEL,
                section: Chunk981631.jXE.NAVIGATION,
                object: "DMS_BUTTON"
              }
            }
          },
          children: (0, Chunk951288.jsx)(Chunk481060.kBi, {
            color: "currentColor",
            size: "refresh_sm"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(exports)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), module))
      })
    })]
  })
}