/** Chunk was on 1272 **/
/** chunk id: 362870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk393903 = require("./393903.js"),
  Chunk266454 = require("./266454.js"),
  Chunk426032 = require("./426032.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937797 = require("./937797.js"),
  Chunk150560 = require("./150560.js"),
  Chunk551913 = require("./551913.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk228624 = require("./228624.js");
let C = Math.ceil(Math.sqrt(115200)),
  S = (C - 240) / 2,
  T = function(e) {
    var t, n;
    let {
      selected: l
    } = e, T = (0, o.JA)("quests"), N = i.useRef(null), {
      shouldShowPopover: j,
      shouldShowGradientAndBadge: P,
      dismissContent: x
    } = function() {
      let {
        enabled: e
      } = g.GE.useConfig({
        location: E.dr.PRIVATE_CHANNELS_LIST
      }), [t, n] = (0, m.US)(e ? [c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING] : [], I.R.PRIVATE_CHANNELS_LIST, true), r = i.useCallback(() => {
        e && n(I.L.TAKE_ACTION)
      }, [n, e]);
      return {
        shouldShowPopover: t === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
        shouldShowGradientAndBadge: !(0, f.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING) && e,
        dismissContent: r
      }
    }(), A = i.useCallback(() => {
      _.Z.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []), [{
      glowSpring: Z
    }, w] = (0, u.q_F)(() => ({
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
      shineSpring: L
    }, R] = (0, u.q_F)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), D = i.useCallback(() => {
      R({
        shineSpring: 1
      }), w({
        glowSpring: 1,
        delay: 200
      })
    }, [R, w]), M = i.useCallback(() => {
      R({
        shineSpring: 0,
        immediate: true
      }), w({
        glowSpring: 0,
        delay: 0
      })
    }, [R, w]), k = i.useCallback(() => {
      R({
        shineSpring: 1,
        delay: 500
      }), w({
        glowSpring: 1,
        delay: 700
      }), h.default.track(O.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED)
    }, [R, w]), [U, G] = i.useState(false), B = i.useCallback(e => {
      G(e.contentRect.width)
    }, []), H = (0, p.y)(B, [], {
      fireOnMount: true
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: v.wrapper,
        onMouseEnter: D,
        onMouseLeave: M,
        onFocus: D,
        onBlur: M,
        ref: H,
        style: {
          "--custom-shine-dimensions": "".concat(240, "px"),
          "--custom-shine-rotated-dimensions-delta": "".concat(S, "px")
        },
        children: (0, r.jsx)(d.Qj, (t = function(e) {
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
            [v.withGradientAndBadge]: P
          }),
          icon: u.qDn,
          listItemRef: N,
          onClick: A,
          route: O.Z5c.QUEST_HOME_V2,
          selected: l,
          text: y.intl.string(y.t.JALI2K)
        }, T), n = n = {
          children: P && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.animated.div, {
              className: v.shine,
              style: {
                transform: L.to(e => "translateX(calc(".concat(e * U, "px + ").concat(e * C, "px)) translateY(-50%) rotate(45deg)"))
              }
            }), (0, r.jsx)(s.animated.div, {
              className: v.glow,
              style: {
                opacity: Z.to({
                  range: [0, 1],
                  output: [0, .5]
                })
              }
            }), (0, r.jsx)(u.IGR, {
              className: v.badge,
              text: y.intl.string(y.t.y2b7CA),
              color: u.TVs.colors.BG_BRAND.css
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
      }), j && (0, r.jsx)(b.Z, {
        targetElementRef: N,
        onNavigateToQuestHome: A,
        onRender: k,
        onRequestClose: x
      })]
    })
  }