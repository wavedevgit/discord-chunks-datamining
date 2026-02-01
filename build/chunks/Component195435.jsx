/** Chunk was on 71447 **/
/** chunk id: 195435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk481947 = require("./481947.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk996439 = require("./996439.js"),
  Chunk876891 = require("./876891.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk905777 = require("./905777.js");
let O = Chunk64700.memo(function(e) {
  let {
    channelId: t,
    guildId: n,
    userId: O,
    onDoubleClick: x
  } = e, _ = r.useRef(null), [S, I] = r.useState(false), j = (0, l.bG)([f.default], () => f.default.getUser(O), [O]), T = function(e, t) {
    let [n] = (0, l.bG)([g.A], () => {
      var n;
      return [null != (n = g.A.getVoiceStateForChannel(e, t)) ? n : null, g.A.getVoiceStateVersion()]
    }, [e, t], A.D);
    return n
  }(t, O), C = (0, s.A)({
    userId: O,
    guildId: n
  }), N = (0, l.bG)([p.A], () => null != n && null != p.A.getStreamForUser(O, n), [n, O]), w = (0, y.tx)(null != n ? n : true, t, j), P = (0, v.Pe)({
    user: null != j ? j : null,
    guildId: n,
    channelId: t
  }), D = r.useCallback(e => {
    (0, m.Vq)(j) && null != T && P(e)
  }, [P, j, T]);
  return (0, m.Vq)(j) && null != T ? (0, i.jsx)(d.A, {
    targetElementRef: _,
    user: j,
    guildId: null != n ? n : true,
    channelId: t,
    appContext: b.BRT.OVERLAY,
    shouldShow: S,
    onRequestClose: () => I(false),
    spacing: 24,
    children: e => {
      var t, r;
      return (0, i.jsx)(a.DUT, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        innerRef: _,
        className: E.gD,
        onDoubleClick: x,
        onContextMenu: D,
        onClick: e => {
          e.preventDefault(), e.stopPropagation(), I(true)
        },
        children: (0, i.jsxs)("div", {
          className: E.h6,
          children: [(0, i.jsx)(a.euF, {
            src: j.getAvatarURL(null != n ? n : true, 24),
            size: a._3J.SIZE_24,
            "aria-label": w
          }), (0, i.jsxs)("div", {
            className: E.rg,
            children: [(0, i.jsx)(u.A, {
              userName: w,
              displayNameStyles: C,
              effectDisplayType: o.G.STATIC,
              textClassName: E.m2
            }), (0, i.jsx)(c.Ay, {
              userId: O,
              disableGuildProfile: true
            })]
          }), (0, i.jsx)("div", {
            className: E.ZA,
            onDoubleClick: x,
            children: (0, i.jsx)(h.Kc, {
              guildId: null != n ? n : true,
              user: j,
              video: T.selfVideo,
              isStreaming: N,
              className: E.ZA,
              iconClassName: E.Ow,
              isWatching: false,
              localMute: false,
              localVideoDisabled: false,
              mute: T.isVoiceMuted(),
              deaf: T.isVoiceDeafened(),
              serverMute: T.mute || T.suppress,
              serverDeaf: T.deaf,
              disabled: false
            })
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  }) : null
})