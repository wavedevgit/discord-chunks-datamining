/** Chunk was on 21738 **/
/** chunk id: 67173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk701363 = require("./701363.jsx"),
  Chunk770178 = require("./770178.js"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk325087 = require("./325087.jsx"),
  Chunk419818 = require("./419818.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106417 = require("./106417.js");
let I = Math.ceil(Math.sqrt(115200)),
  v = (I - 240) / 2,
  S = function(e) {
    var t, n;
    let {
      selected: l
    } = e, S = (0, o.rm)("quests"), C = i.useRef(null), {
      shouldShowPopover: N,
      shouldShowGradientAndBadge: T,
      dismissContent: j
    } = function() {
      let e = (0, u.useHasAnyModalOpen)(),
        [t, n] = (0, A.kn)(e ? [] : [c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING], E.m.PRIVATE_CHANNELS_LIST, true),
        r = i.useCallback(() => {
          n(E.i.TAKE_ACTION)
        }, [n]);
      return {
        shouldShowPopover: t === c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
        shouldShowGradientAndBadge: !(0, h.JZ)(c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING),
        dismissContent: r
      }
    }(), x = i.useCallback(() => {
      b.A.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []), [{
      glowSpring: P
    }, w] = (0, d.zhh)(() => ({
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
    }, R] = (0, d.zhh)(() => ({
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
      }), g.default.track(_.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED)
    }, [R, w]), [U, G] = i.useState(false), V = i.useCallback(e => {
      G(e.contentRect.width)
    }, []), B = (0, f.w)(V, [], {
      fireOnMount: true
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: y.iE,
        onMouseEnter: D,
        onMouseLeave: M,
        onFocus: D,
        onBlur: M,
        ref: B,
        style: {
          "--custom-shine-dimensions": "".concat(240, "px"),
          "--custom-shine-rotated-dimensions-delta": "".concat(v, "px")
        },
        children: (0, r.jsx)(p.z9, (t = function(e) {
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
            [y.h6]: T
          }),
          icon: d.r2v,
          listItemRef: C,
          onClick: x,
          route: _.BVt.QUEST_HOME_V2,
          selected: l,
          text: O.intl.string(O.t.JALI2K)
        }, S), n = n = {
          children: T && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.animated.div, {
              className: y.q2,
              style: {
                transform: L.to(e => "translateX(calc(".concat(e * U, "px + ").concat(e * I, "px)) translateY(-50%) rotate(45deg)"))
              }
            }), (0, r.jsx)(s.animated.div, {
              className: y.ys,
              style: {
                opacity: P.to({
                  range: [0, 1],
                  output: [0, .5]
                })
              }
            }), (0, r.jsx)(d.LpS, {
              className: y.qS,
              text: O.intl.string(O.t.y2b7CA),
              color: d.LU0.colors.BACKGROUND_BRAND.css
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
      }), N && (0, r.jsx)(m.A, {
        targetElementRef: C,
        onNavigateToQuestHome: x,
        onRender: k,
        onRequestClose: j
      })]
    })
  }