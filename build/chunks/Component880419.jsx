/** Chunk was on 81985 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk180869 = require("./180869.js"),
  Chunk973772 = require("./973772.js"),
  Chunk994234 = require("./994234.js"),
  Chunk874584 = require("./874584.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk395678 = require("./395678.js");

function v(e) {
  var t, n;
  let {
    guildId: l,
    powerup: v,
    compact: O,
    iconSize: j,
    size: x,
    grow: C,
    className: E,
    onError: S
  } = e, {
    onActivate: _,
    isLoading: I,
    error: P
  } = (0, f.Z)(l, v), {
    isLoading: Z,
    error: N
  } = (0, d.Z)(l, v), T = (0, h.Z)(l, v), A = (0, p.ZP)(l, v), w = A.type !== g.A3.INACTIVE, {
    disabled: R,
    reason: D
  } = (0, u.Z)(l, v, w), M = null != D ? {
    title: null,
    body: D
  } : function(e, t) {
    if (e.type === g.A3.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: b.intl.string(m.default["9oYuvb"]),
        body: b.intl.formatToPlainString(m.default.WRRYUT, {
          perkName: null != (r = null == (n = e.sourcePowerup) ? true : n.title) ? r : b.intl.string(b.t.BfF6ED)
        })
      }
    }
    return e.type === g.A3.POWERUP_ACTIVATED ? {
      title: b.intl.string(m.default.TZsu1U),
      body: b.intl.formatToPlainString(m.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(A, v);
  return i.useEffect(() => {
    null == S || S(null != P ? P : N)
  }, [P, N, S]), (0, r.jsx)(o.i_, {
    body: null != (t = null == M ? true : M.body) ? t : "",
    title: null != (n = null == M ? true : M.title) ? n : true,
    shouldShow: null != M,
    delay: 100,
    "aria-label": null != D ? D : w ? b.intl.string(m.default.TZsu1U) : true,
    children: (0, r.jsx)("div", {
      className: a()(y.secondaryButton, {
        [y.buttonWrapper]: C,
        [y.noGrow]: !C
      }, E),
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
          } = e, a = null != l ? l : "sm", o = n ? c.zkc : c.Ucv;
          return i ? {
            text: t.toString(),
            icon: o
          } : {
            text: b.intl.format(n ? m.default.uzQpQd : m.default.ad2Mfj, {
              boostCount: t,
              dotHook: () => (0, r.jsx)("span", {
                className: y.dot,
                children: "•"
              }),
              boostIconHook: () => (0, r.jsx)(o, {
                size: a,
                color: "currentColor",
                className: y.boostIcon
              })
            })
          }
        }({
          cost: v.cost,
          isActive: w,
          compact: O,
          iconSize: j
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
          variant: w ? "secondary" : "primary",
          "aria-label": b.intl.string(w ? m.default.TZsu1U : m.default.gSxlHf),
          disabled: R,
          onClick: e => {
            e.stopPropagation(), w ? T() : _()
          },
          loading: I || Z,
          fullWidth: C,
          size: null != x ? x : O ? "md" : true,
          text: e,
          minWidth: 0
        }, O ? {
          icon: t
        } : {}))
      })()
    })
  })
}