/** Chunk was on 67000 **/
/** chunk id: 880419, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  var t, n;
  let {
    guildId: l,
    powerup: O,
    compact: v,
    iconSize: j,
    size: C,
    grow: x,
    className: E,
    onError: S
  } = e, {
    onActivate: _,
    isLoading: I,
    error: P
  } = (0, h.Z)(l, O), {
    isLoading: N,
    error: Z
  } = (0, d.Z)(l, O), w = (0, p.Z)(l, O), T = (0, f.ZP)(l, O), A = T.type !== g.A3.INACTIVE, {
    disabled: R,
    reason: D
  } = (0, u.Z)(l, O, A), M = null != D ? {
    title: null,
    body: D
  } : function(e, t) {
    if (e.type === g.A3.LEVEL_ACTIVATED) {
      var n, r;
      return {
        title: m.intl.string(b.default["9oYuvb"]),
        body: m.intl.formatToPlainString(b.default.WRRYUT, {
          perkName: null != (r = null == (n = e.sourcePowerup) ? true : n.title) ? r : m.intl.string(m.t.BfF6ED)
        })
      }
    }
    return e.type === g.A3.POWERUP_ACTIVATED ? {
      title: m.intl.string(b.default.TZsu1U),
      body: m.intl.formatToPlainString(b.default["5HQUzD"], {
        boostCount: t.cost
      })
    } : null
  }(T, O);
  return i.useEffect(() => {
    null == S || S(null != P ? P : Z)
  }, [P, Z, S]), (0, r.jsx)(o.i_, {
    body: null != (t = null == M ? true : M.body) ? t : "",
    title: null != (n = null == M ? true : M.title) ? n : true,
    shouldShow: null != M,
    delay: 100,
    "aria-label": null != D ? D : A ? m.intl.string(b.default.TZsu1U) : true,
    children: (0, r.jsx)("div", {
      className: a()(y.secondaryButton, {
        [y.buttonWrapper]: x,
        [y.noGrow]: !x
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
            text: m.intl.format(n ? b.default.uzQpQd : b.default.ad2Mfj, {
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
          cost: O.cost,
          isActive: A,
          compact: v,
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
          variant: A ? "secondary" : "primary",
          "aria-label": m.intl.string(A ? b.default.TZsu1U : b.default.gSxlHf),
          disabled: R,
          onClick: e => {
            e.stopPropagation(), A ? w() : _()
          },
          loading: I || N,
          fullWidth: x,
          size: null != C ? C : v ? "md" : true,
          text: e,
          minWidth: 0
        }, v ? {
          icon: t
        } : {}))
      })()
    })
  })
}