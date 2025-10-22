/** Chunk was on 50776 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk39690 = require("./39690.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123879 = require("./123879.js");

function m(e) {
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
}

function b(e) {
  let {
    cost: t
  } = e;
  return (0, r.jsxs)("div", {
    className: g.tooltipContainer,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      children: f.intl.string(h.default.TZsu1U)
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      children: f.intl.formatToPlainString(h.default["5HQUzD"], {
        boostCount: t
      })
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    powerup: n
  } = e, i = (0, u.ZP)(t, n);
  if (i.type === p.A3.LEVEL_ACTIVATED) {
    var l, o;
    return (0, r.jsxs)("div", {
      className: g.tooltipContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        children: f.intl.string(h.default["9oYuvb"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        children: f.intl.formatToPlainString(h.default.WRRYUT, {
          perkName: null != (o = null == (l = i.sourcePowerup) ? true : l.title) ? o : f.intl.string(f.t.BfF6ED)
        })
      })]
    })
  }
  if (i.type === p.A3.POWERUP_ACTIVATED) return (0, r.jsx)(b, {
    cost: n.cost
  })
}

function O(e) {
  let {
    guildId: t,
    powerup: n,
    compact: l,
    iconSize: b,
    size: O,
    grow: y,
    className: j,
    onError: v
  } = e, {
    onActivate: x,
    isLoading: C,
    error: E,
    onShowDeactivate: S
  } = (0, d.ZP)(t, n), I = (0, u.ZP)(t, n).type !== p.A3.INACTIVE, {
    disabled: P,
    reason: N
  } = (0, c.Z)(t, n, I);
  return i.useEffect(() => {
    null == v || v(E)
  }, [E, v]), (0, r.jsx)(s.aML, {
    delay: 100,
    "aria-label": null != N ? N : I ? f.intl.string(h.default.TZsu1U) : true,
    text: null != N ? N : I ? (0, r.jsx)(_, {
      guildId: t,
      powerup: n
    }) : true,
    children: e => {
      var t, i;
      return (0, r.jsx)("div", (t = m({}, e), i = i = {
        className: o()(g.secondaryButton, {
          [g.buttonWrapper]: y,
          [g.noGrow]: !y
        }, j),
        children: (() => {
          let {
            text: e,
            icon: t
          } = function(e) {
            let {
              cost: t,
              isActive: n,
              compact: i,
              iconSize: l
            } = e, o = null != l ? l : "sm", a = n ? s.zkc : s.Ucv;
            return i ? {
              text: t.toString(),
              icon: a
            } : {
              text: f.intl.format(n ? h.default.uzQpQd : h.default.ad2Mfj, {
                boostCount: t,
                dotHook: () => (0, r.jsx)("span", {
                  className: g.dot,
                  children: "•"
                }),
                boostIconHook: () => (0, r.jsx)(a, {
                  size: o,
                  color: "currentColor",
                  className: g.boostIcon
                })
              })
            }
          }({
            cost: n.cost,
            isActive: I,
            compact: l,
            iconSize: b
          });
          return (0, r.jsx)(a.zxk, m({
            variant: I ? "secondary" : "primary",
            "aria-label": f.intl.string(I ? h.default.TZsu1U : h.default.gSxlHf),
            disabled: P,
            onClick: I ? S : x,
            loading: C,
            fullWidth: y,
            size: null != O ? O : l ? "md" : true,
            text: e,
            minWidth: 0
          }, l ? {
            icon: t
          } : {}))
        })()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}