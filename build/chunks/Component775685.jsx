/** Chunk was on 13140 **/
/** chunk id: 775685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk566620 = require("./566620.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk533379 = require("./533379.js"),
  Chunk562129 = require("./562129.js"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124886 = require("./124886.js");
let C = Chunk647438.forwardRef(function(e, t) {
    var n, l;
    let {
      type: f,
      animateRef: h
    } = e, g = (0, s.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === f), {
      Component: C,
      events: v,
      play: O
    } = (0, m.Z)("ChannelAppLauncherButton");
    i.useImperativeHandle(h, () => ({
      animate: () => {
        v.onMouseEnter()
      }
    }), [v]);
    let x = i.useCallback(() => {
        g ? u.y(p.ti.DISMISSED) : (u._(p._b.TEXT, f), c.ux()), O()
      }, [g, f, O]),
      E = (0, r.jsx)(C, {
        size: "refresh_sm",
        color: "currentColor"
      });
    return (0, r.jsx)("div", {
      className: a()(y.buttonContainer, b.t4),
      ref: t,
      children: (0, r.jsx)(o.P3F, (n = function(e) {
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
        tabIndex: 0,
        className: a()(y.button, {
          [y.buttonActive]: g
        }),
        onClick: x,
        "aria-label": _.intl.string(_.t.erHFxI),
        "aria-expanded": g,
        "aria-haspopup": "dialog",
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: false,
            right: false
          }
        }
      }, v), l = l = {
        children: E
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
  v = Chunk647438.memo(function(e) {
    let {
      channel: t,
      type: n,
      animateRef: l
    } = e, a = i.useRef(null), o = (0, h.R)({
      channel: t,
      chatInputType: n
    }), s = (0, g.Z)({
      type: n
    });
    return o ? (0, r.jsxs)("div", {
      className: y.channelAppLauncher,
      children: [(0, r.jsx)(C, {
        type: n,
        ref: a,
        animateRef: l
      }), s ? (0, r.jsx)(f.Z, {
        positionTargetRef: a,
        channel: t
      }) : null]
    }) : null
  })