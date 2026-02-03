/** Chunk was on 21738 **/
/** chunk id: 67173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
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
  Chunk398025 = require("./398025.js"),
  Chunk419818 = require("./419818.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk106417 = require("./106417.js");
let v = Math.ceil(Math.sqrt(115200)),
  S = (v - 240) / 2,
  C = function(e) {
    var t, n;
    let {
      selected: l
    } = e, C = (0, o.rm)("quests"), N = i.useRef(null), {
      shouldShowPopover: T,
      shouldShowGradientAndBadge: j,
      dismissContent: x
    } = function() {
      let e = (0, u.useHasAnyModalOpen)(),
        [t, n] = (0, m.kn)(e ? [] : [c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING], O.m.PRIVATE_CHANNELS_LIST, true),
        r = i.useCallback(() => {
          n(O.i.TAKE_ACTION)
        }, [n]);
      return {
        shouldShowPopover: t === c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING,
        shouldShowGradientAndBadge: !(0, g.JZ)(c.M.QUEST_HOME_ENTRYPOINT_ONBOARDING),
        dismissContent: r
      }
    }(), P = i.useCallback(() => {
      b.A.getState().setUtmCurrentContext({
        utmContentCurrent: "PRIMARY_QUEST_HOME"
      })
    }, []), [{
      glowSpring: w
    }, L] = (0, d.zhh)(() => ({
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
      shineSpring: R
    }, D] = (0, d.zhh)(() => ({
      from: {
        shineSpring: 0
      },
      config: {
        clamp: true,
        mass: 1,
        tension: 170,
        friction: 38
      }
    })), M = i.useCallback(() => {
      D({
        shineSpring: 1
      }), L({
        glowSpring: 1,
        delay: 200
      })
    }, [D, L]), k = i.useCallback(() => {
      D({
        shineSpring: 0,
        immediate: true
      }), L({
        glowSpring: 0,
        delay: 0
      })
    }, [D, L]), U = i.useCallback(() => {
      D({
        shineSpring: 1,
        delay: 500
      }), L({
        glowSpring: 1,
        delay: 700
      }), f.default.track(E.HAw.QUEST_HOME_ONBOARDING_POPOVER_RENDERED)
    }, [D, L]), [G, V] = i.useState(false), B = i.useCallback(e => {
      V(e.contentRect.width)
    }, []), H = (0, h.w)(B, [], {
      fireOnMount: true
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: I.iE,
        onMouseEnter: M,
        onMouseLeave: k,
        onFocus: M,
        onBlur: k,
        ref: H,
        style: {
          "--custom-shine-dimensions": "".concat(240, "px"),
          "--custom-shine-rotated-dimensions-delta": "".concat(S, "px")
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
            [I.h6]: j
          }),
          icon: d.r2v,
          listItemRef: N,
          onClick: P,
          route: E.BVt.QUEST_HOME_V2,
          selected: l,
          text: y.intl.string(y.t.JALI2K)
        }, C), n = n = {
          children: j && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.animated.div, {
              className: I.q2,
              style: {
                transform: R.to(e => "translateX(calc(".concat(e * G, "px + ").concat(e * v, "px)) translateY(-50%) rotate(45deg)"))
              }
            }), (0, r.jsx)(s.animated.div, {
              className: I.ys,
              style: {
                opacity: (0, _.a)(w.to({
                  range: [0, 1],
                  output: [0, .5]
                }))
              }
            }), (0, r.jsx)(d.LpS, {
              className: I.qS,
              text: y.intl.string(y.t.y2b7CA),
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
      }), T && (0, r.jsx)(A.A, {
        targetElementRef: N,
        onNavigateToQuestHome: P,
        onRender: U,
        onRequestClose: x
      })]
    })
  }