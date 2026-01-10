/** Chunk was on 81985 **/
/** chunk id: 145010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk125268 = require("./125268.js"),
  Chunk673125 = require("./673125.js"),
  Chunk984063 = require("./984063.js"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk12168 = require("./12168.jsx"),
  Chunk304388 = require("./304388.jsx"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getDrawMode()), g = (null == n ? true : n.type) === c.W.EMOJI_HOSE, m = i.useRef(null), b = (e, t) => {
    null != e ? (0, o.Bo)({
      type: c.W.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : g && (0, o.Bo)(null), null == t || t()
  };
  return (0, r.jsx)(f.Z, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: i
      } = e;
      return (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(p.Z, {
          title: h.intl.string(h.t.XYLOyF),
          channel: t,
          closePopout: n,
          onFocus: i,
          onSelectEmoji: e => b(e, n)
        })
      })
    },
    popoutTargetRef: m,
    children: e => {
      var t, n;
      return (0, r.jsx)(d.Z, (t = function(e) {
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
      }({}, e), n = n = {
        buttonRef: m,
        iconComponent: a.j9u,
        isActive: g || e.isActive,
        onClick: t => {
          b(null), e.onClick(t)
        }
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
    }
  })
}