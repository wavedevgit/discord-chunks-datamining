/** Chunk was on 1272 **/
/** chunk id: 362870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk426322 = require("./426322.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515753 = require("./515753.jsx"),
  Chunk393903 = require("./393903.js"),
  Chunk266454 = require("./266454.js"),
  Chunk426032 = require("./426032.js"),
  Chunk626135 = require("./626135.js"),
  Chunk150560 = require("./150560.js"),
  Chunk551913 = require("./551913.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk228624 = require("./228624.js");
let v = Math.ceil(Math.sqrt(115200)),
  I = (v - 240) / 2,
  C = function(e) {
    var t, n;
    let {
      selected: l
    } = e, C = (0, o.JA)("quests"), S = i.useRef(null), {
      shouldShowPopover: T,
      shouldShowGradientAndBadge: N,
      dismissContent: j
    } = function() {
      let [e, t] = (0, h.US)([c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING], E.R.PRIVATE_CHANNELS_LIST, true), n = i.useCallback(() => {
        t(E.L.TAKE_ACTION)
      }, [t]);
      return {
        shouldShowPopover: e === c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING,
        shouldShowGradientAndBadge: !(0, f.Nj)(c.z.QUEST_HOME_ENTRYPOINT_ONBOARDING),
        dismissContent: n
      }
    }(), P = i.useCallback(() => {
      m.Z.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []), [{
      glowSpring: x
    }, A] = (0, u.q_F)(() => ({
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
      shineSpring: Z
    }, w] = (0, u.q_F)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), L = i.useCallback(() => {
      w({
        shineSpring: 1
      }), A({
        glowSpring: 1,
        delay: 200
      })
    }, [w, A]), R = i.useCallback(() => {
      w({
        shineSpring: 0,
        immediate: true
      }), A({
        glowSpring: 0,
        delay: 0
      })
    }, [w, A]), D = i.useCallback(() => {
      w({
        shineSpring: 1,
        delay: 500
      }), A({
        glowSpring: 1,
        delay: 700
      }), g.default.track(b.rMx.QUEST_HOME_ONBOARDING_POPOVER_RENDERED)
    }, [w, A]), [M, k] = i.useState(false), U = i.useCallback(e => {
      k(e.contentRect.width)
    }, []), G = (0, p.y)(U, [], {
      fireOnMount: true
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: y.wrapper,
        onMouseEnter: L,
        onMouseLeave: R,
        onFocus: L,
        onBlur: R,
        ref: G,
        style: {
          "--custom-shine-dimensions": "".concat(240, "px"),
          "--custom-shine-rotated-dimensions-delta": "".concat(I, "px")
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
            [y.withGradientAndBadge]: N
          }),
          icon: u.qDn,
          listItemRef: S,
          onClick: P,
          route: b.Z5c.QUEST_HOME_V2,
          selected: l,
          text: O.intl.string(O.t.JALI2K)
        }, C), n = n = {
          children: N && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.animated.div, {
              className: y.shine,
              style: {
                transform: Z.to(e => "translateX(calc(".concat(e * M, "px + ").concat(e * v, "px)) translateY(-50%) rotate(45deg)"))
              }
            }), (0, r.jsx)(s.animated.div, {
              className: y.glow,
              style: {
                opacity: x.to({
                  range: [0, 1],
                  output: [0, .5]
                })
              }
            }), (0, r.jsx)(u.IGR, {
              className: y.badge,
              text: O.intl.string(O.t.y2b7CA),
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
      }), T && (0, r.jsx)(_.Z, {
        targetElementRef: S,
        onNavigateToQuestHome: P,
        onRender: D,
        onRequestClose: j
      })]
    })
  }