/** Chunk was on 1272 **/
/** chunk id: 222850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk393903 = require("./393903.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk61319 = require("./61319.jsx"),
  Chunk150560 = require("./150560.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk718462 = require("./718462.js");
let I = Math.ceil(Math.sqrt(115200)),
  C = (I - 240) / 2,
  S = function(e) {
    var t, n;
    let {
      selected: l
    } = e, S = (0, o.JA)("quests"), T = i.useRef(null), {
      shouldShowPopover: N,
      shouldShowGradientAndBadge: j,
      dismissContent: P
    } = function() {
      let e = (0, u.useHasAnyModalOpen)(),
        [t, n] = (0, h.US)(e ? [] : [c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING], O.R.PRIVATE_CHANNELS_LIST, true),
        r = i.useCallback(() => {
          n(O.L.TAKE_ACTION)
        }, [n]);
      return {
        shouldShowPopover: t === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
        shouldShowGradientAndBadge: !(0, g.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING),
        dismissContent: r
      }
    }(), x = i.useCallback(() => {
      b.Z.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []), [{
      glowSpring: A
    }, Z] = (0, d.q_F)(() => ({
      from: {
        glowSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 240,
        friction: 12
      }
    })), [{
      shineSpring: w
    }, L] = (0, d.q_F)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), R = i.useCallback(() => {
      L({
        shineSpring: 1
      }), Z({
        glowSpring: 1,
        delay: 200
      })
    }, [L, Z]), D = i.useCallback(() => {
      L({
        shineSpring: 0,
        immediate: true
      }), Z({
        glowSpring: 0,
        delay: 0
      })
    }, [L, Z]), M = i.useCallback(() => {
      L({
        shineSpring: 1,
        delay: 500
      }), Z({
        glowSpring: 1,
        delay: 700
      }), m.default.track(E.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED)
    }, [L, Z]), [k, U] = i.useState(false), G = i.useCallback(e => {
      U(e.contentRect.width)
    }, []), B = (0, f.y)(G, [], {
      fireOnMount: true
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: y.wrapper,
        onMouseEnter: R,
        onMouseLeave: D,
        onFocus: R,
        onBlur: D,
        ref: B,
        style: {
          "--custom-shine-dimensions": "".concat(240, "px"),
          "--custom-shine-rotated-dimensions-delta": "".concat(C, "px")
        },
        children: (0, r.jsx)(p.Qj, (t = function(e) {
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
          className: a()({
            [y.withGradientAndBadge]: j
          }),
          icon: d.qDn,
          listItemRef: T,
          onClick: x,
          route: E.Z5c.QUEST_HOME_V2,
          selected: l,
          text: v.intl.string(v.t.JALI2K)
        }, S), n = n = {
          children: j && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.animated.div, {
              className: y.shine,
              style: {
                transform: w.to(e => "translateX(calc(".concat(e * k, "px + ").concat(e * I, "px)) translateY(-50%) rotate(45deg)"))
              }
            }), (0, r.jsx)(s.animated.div, {
              className: y.glow,
              style: {
                opacity: A.to({
                  range: [0, 1],
                  output: [0, .5]
                })
              }
            }), (0, r.jsx)(d.IGR, {
              className: y.badge,
              text: v.intl.string(v.t.y2b7CA),
              color: d.TVs.colors.BG_BRAND.css
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }), N && (0, r.jsx)(_.Z, {
        targetElementRef: T,
        onNavigateToQuestHome: x,
        onRender: M,
        onRequestClose: P
      })]
    })
  }