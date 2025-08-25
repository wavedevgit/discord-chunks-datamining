/** Chunk was on 5665 **/
/** chunk id: 165540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk566620 = require("./566620.js"),
  Chunk989573 = require("./989573.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk533379 = require("./533379.js"),
  Chunk562129 = require("./562129.js"),
  Chunk266454 = require("./266454.js"),
  Chunk291407 = require("./291407.jsx"),
  Chunk685006 = require("./685006.jsx"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124886 = require("./124886.js");
let S = Chunk647438.forwardRef(function(e, t) {
    var n, l;
    let {
      type: d,
      animateRef: m
    } = e, g = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup() && h.Z.activeViewType() === d), {
      Component: _,
      events: C,
      play: v
    } = (0, b.Z)("ChannelAppLauncherButton");
    i.useImperativeHandle(m, () => ({
      animate: () => {
        C.onMouseEnter()
      }
    }), [C]);
    let S = i.useCallback(() => {
        g ? p.yT(f.ti.DISMISSED) : ((0, y.Q3)(s.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
          dismissAction: O.L.TAKE_ACTION
        }), p.__(f._b.TEXT, d), u.ux()), v()
      }, [g, d, v]),
      I = (0, r.jsx)(_, {
        size: "refresh_sm",
        color: "currentColor"
      });
    return (0, r.jsx)("div", {
      className: a()(E.buttonContainer, x.t4),
      ref: t,
      children: (0, r.jsx)(c.zx, (n = function(e) {
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
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.NONE,
        tabIndex: 0,
        className: a()(E.button, {
          [E.buttonActive]: g
        }),
        onClick: S,
        "aria-label": j.intl.string(j.t.erHFxM),
        "aria-expanded": g,
        "aria-haspopup": "dialog",
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: false,
            right: false
          }
        },
        innerClassName: E.buttonContents
      }, C), l = l = {
        children: I
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    })
  }),
  I = Chunk647438.memo(function(e) {
    let {
      channel: t,
      type: n,
      animateRef: l,
      entryPointCommandButtonRef: a
    } = e, s = i.useRef(null), c = (0, g.R)({
      channel: t,
      chatInputType: n
    }), u = (0, v.Z)({
      type: n
    }), p = (0, d.Z)(t), f = (0, o.e7)([h.Z], () => h.Z.appDMChannelsWithFailedLoads().has(t.id)), {
      visible: b
    } = (0, C.xL)();
    return c ? (0, r.jsxs)("div", {
      className: E.channelAppLauncher,
      children: [(0, r.jsx)(_.Z, {
        channel: t,
        animationContainerClassName: E.entrypointAnimation,
        glowClassName: E.animationGlow,
        trinketsClassName: E.animationTrinkets,
        children: (0, r.jsx)(S, {
          type: n,
          ref: s,
          animateRef: l
        })
      }), u ? (0, r.jsx)(m.Z, {
        positionTargetRef: p && !f && b ? a : s,
        channel: t
      }) : null]
    }) : null
  })