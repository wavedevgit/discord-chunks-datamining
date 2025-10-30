/** Chunk was on 15647 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk789142 = require("./789142.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123879 = require("./123879.js");

function b(e) {
  var t, n;
  let {
    guildId: l,
    powerup: b,
    compact: _,
    iconSize: O,
    size: y,
    grow: v,
    className: j,
    onError: C
  } = e, {
    onActivate: E,
    isLoading: x,
    error: S,
    onShowDeactivate: I
  } = (0, p.ZP)(l, b), P = (0, d.ZP)(l, b), N = P.type !== f.A3.INACTIVE, {
    disabled: Z,
    reason: T
  } = (0, u.Z)(l, b, N), w = null != T ? {
    title: null,
    body: T
  } : function(e, t) {
    if (e.type === f.A3.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: g.intl.string(h.default["9oYuvb"]),
        body: g.intl.formatToPlainString(h.default.WRRYUT, {
          perkName: null != (r = null == (n = e.sourcePowerup) ? true : n.title) ? r : g.intl.string(g.t.BfF6ED)
        })
      }
    }
    return e.type === f.A3.POWERUP_ACTIVATED ? {
      title: g.intl.string(h.default.TZsu1U),
      body: g.intl.formatToPlainString(h.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(P, b);
  return i.useEffect(() => {
    null == C || C(S)
  }, [S, C]), (0, r.jsx)(a.i_, {
    body: null != (t = null == w ? true : w.body) ? t : "",
    title: null != (n = null == w ? true : w.title) ? n : true,
    shouldShow: null != w,
    delay: 100,
    "aria-label": null != T ? T : N ? g.intl.string(h.default.TZsu1U) : true,
    children: (0, r.jsx)("div", {
      className: o()(m.secondaryButton, {
        [m.buttonWrapper]: v,
        [m.noGrow]: !v
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
          } = e, o = null != l ? l : "sm", a = n ? c.zkc : c.Ucv;
          return i ? {
            text: t.toString(),
            icon: a
          } : {
            text: g.intl.format(n ? h.default.uzQpQd : h.default.ad2Mfj, {
              boostCount: t,
              dotHook: () => (0, r.jsx)("span", {
                className: m.dot,
                children: "•"
              }),
              boostIconHook: () => (0, r.jsx)(a, {
                size: o,
                color: "currentColor",
                className: m.boostIcon
              })
            })
          }
        }({
          cost: b.cost,
          isActive: N,
          compact: _,
          iconSize: O
        });
        return (0, r.jsx)(s.zxk, function(e) {
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
          variant: N ? "secondary" : "primary",
          "aria-label": g.intl.string(N ? h.default.TZsu1U : h.default.gSxlHf),
          disabled: Z,
          onClick: N ? I : E,
          loading: x,
          fullWidth: v,
          size: null != y ? y : _ ? "md" : true,
          text: e,
          minWidth: 0
        }, _ ? {
          icon: t
        } : {}))
      })()
    })
  })
}