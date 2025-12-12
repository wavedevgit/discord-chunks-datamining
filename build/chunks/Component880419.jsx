/** Chunk was on 64722 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk448222 = require("./448222.js"),
  Chunk973772 = require("./973772.js"),
  Chunk535396 = require("./535396.js"),
  Chunk5238 = require("./5238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js");

function b(e) {
  var t, n;
  let {
    guildId: l,
    powerup: b,
    compact: _,
    iconSize: y,
    size: O,
    grow: v,
    className: j,
    onError: C
  } = e, {
    onActivate: x,
    isLoading: E,
    error: S,
    onShowDeactivate: I
  } = (0, d.Z)(l, b), P = (0, f.ZP)(l, b), N = P.type !== h.A3.INACTIVE, {
    disabled: Z,
    reason: w
  } = (0, u.Z)(l, b, N), T = null != w ? {
    title: null,
    body: w
  } : function(e, t) {
    if (e.type === h.A3.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: g.intl.string(p.default["9oYuvb"]),
        body: g.intl.formatToPlainString(p.default.WRRYUT, {
          perkName: null != (r = null == (n = e.sourcePowerup) ? true : n.title) ? r : g.intl.string(g.t.BfF6ED)
        })
      }
    }
    return e.type === h.A3.POWERUP_ACTIVATED ? {
      title: g.intl.string(p.default.TZsu1U),
      body: g.intl.formatToPlainString(p.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(P, b);
  return i.useEffect(() => {
    null == C || C(S)
  }, [S, C]), (0, r.jsx)(a.i_, {
    body: null != (t = null == T ? true : T.body) ? t : "",
    title: null != (n = null == T ? true : T.title) ? n : true,
    shouldShow: null != T,
    delay: 100,
    "aria-label": null != w ? w : N ? g.intl.string(p.default.TZsu1U) : true,
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
            text: g.intl.format(n ? p.default.uzQpQd : p.default.ad2Mfj, {
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
          iconSize: y
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
          "aria-label": g.intl.string(N ? p.default.TZsu1U : p.default.gSxlHf),
          disabled: Z,
          onClick: e => {
            e.stopPropagation(), N ? I() : x()
          },
          loading: E,
          fullWidth: v,
          size: null != O ? O : _ ? "md" : true,
          text: e,
          minWidth: 0
        }, _ ? {
          icon: t
        } : {}))
      })()
    })
  })
}