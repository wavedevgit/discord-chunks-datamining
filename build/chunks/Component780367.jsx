/** Chunk was on 83037 **/
/** chunk id: 780367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
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
  Chunk815141 = require("./815141.js");

function b() {
  var e, t;
  let {
    pathname: n
  } = (0, Chunk828700.TH)(), b = require.startsWith(Chunk981631.Z5c.CHANNEL(Chunk981631.ME)) && require !== Chunk981631.Z5c.CHANNEL(Chunk981631.ME) && require !== Chunk981631.Z5c.ME_ACTIVITY, _ = (0, Chunk442837.e7)([Chunk55589.Z], () => Chunk55589.Z.getPrivateChannelIds()[0]), y = (0, Chunk442837.e7)([Chunk944486.Z], () => {
    var e;
    return null != (e = Chunk944486.Z.getChannelId(Chunk981631.ME)) ? module : _
  }), [O, v] = Chunk473749.useState(false), j = (0, Chunk91192.Ie)("dms");
  return (0, Chunk54381.jsxs)(Chunk682662.H, {
    children: [(0, Chunk54381.jsx)(Chunk276952.Z, {
      selected: b,
      hovered: O,
      className: Chunk815141.pill
    }), (0, Chunk54381.jsx)(Chunk662146.Z, {
      hideOnClick: true,
      text: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
      selected: b,
      children: (0, Chunk54381.jsx)(Chunk481060.aRk, {
        selected: true,
        lowerBadge: null,
        upperBadge: null,
        children: (0, Chunk54381.jsx)(Chunk481060.LYs, (e = function(e) {
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
          selected: b || O,
          ariaLabel: Chunk388032.intl.string(Chunk388032.t.YUU0RF),
          "aria-owns": "guild-list-dms",
          "aria-selected": b || O
        }, j), t = t = {
          to: {
            pathname: null != y ? Chunk981631.Z5c.CHANNEL(Chunk981631.ME, y) : Chunk981631.Z5c.ME_DMS,
            state: {
              analyticsSource: {
                page: Chunk981631.ZY5.GUILD_CHANNEL,
                section: Chunk981631.jXE.NAVIGATION,
                object: "DMS_BUTTON"
              }
            }
          },
          children: (0, Chunk54381.jsx)(Chunk481060.kBi, {
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