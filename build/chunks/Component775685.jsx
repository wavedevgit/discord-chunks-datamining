/** Chunk was on 16820 **/
/** chunk id: 775685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk566620 = require("./566620.js"),
  Chunk989573 = require("./989573.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk533379 = require("./533379.js"),
  Chunk562129 = require("./562129.js"),
  Chunk685006 = require("./685006.jsx"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393620 = require("./393620.js");
let x = Chunk647438.forwardRef(function(e, t) {
    var n, l;
    let {
      type: u,
      animateRef: f
    } = e, m = (0, o.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === u), {
      Component: b,
      events: y,
      play: x
    } = (0, g.Z)("ChannelAppLauncherButton");
    i.useImperativeHandle(f, () => ({
      animate: () => {
        y.onMouseEnter()
      }
    }), [y]);
    let O = i.useCallback(() => {
        m ? d.yT(h.ti.DISMISSED) : (d.__(h._b.TEXT, u), c.ux()), x()
      }, [m, u, x]),
      j = (0, r.jsx)(b, {
        size: "refresh_sm",
        color: "currentColor"
      });
    return (0, r.jsx)("div", {
      className: a()(v.buttonContainer, C.t4),
      ref: t,
      children: (0, r.jsx)(s.zx, (n = function(e) {
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
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.NONE,
        tabIndex: 0,
        className: a()(v.button, {
          [v.buttonActive]: m
        }),
        onClick: O,
        "aria-label": _.intl.string(_.t.erHFxM),
        "aria-expanded": m,
        "aria-haspopup": "dialog",
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: false,
            right: false
          }
        },
        innerClassName: v.buttonContents
      }, y), l = l = {
        children: j
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
  O = Chunk647438.memo(function(e) {
    let {
      channel: t,
      type: n,
      animateRef: l,
      entryPointCommandButtonRef: a
    } = e, s = i.useRef(null), c = (0, m.R)({
      channel: t,
      chatInputType: n
    }), d = (0, y.Z)({
      type: n
    }), h = (0, u.Z)(t), g = (0, o.e7)([p.Z], () => p.Z.appDMChannelsWithFailedLoads().has(t.id)), {
      visible: C
    } = (0, b.xL)();
    return c ? (0, r.jsxs)("div", {
      className: v.channelAppLauncher,
      children: [(0, r.jsx)(x, {
        type: n,
        ref: s,
        animateRef: l
      }), d ? (0, r.jsx)(f.Z, {
        positionTargetRef: h && !g && C ? a : s,
        channel: t
      }) : null]
    }) : null
  })