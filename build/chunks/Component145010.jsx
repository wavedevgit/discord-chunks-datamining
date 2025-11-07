/** Chunk was on 86642 **/
/** chunk id: 145010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function m(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getDrawMode()), m = (null == n ? true : n.type) === c.W.EMOJI_HOSE, g = r.useRef(null), b = (e, t) => {
    null != e ? (0, o.Bo)({
      type: c.W.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : m && (0, o.Bo)(null), null == t || t()
  };
  return (0, i.jsx)(f.Z, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: r
      } = e;
      return (0, i.jsx)(u.Z, {
        children: (0, i.jsx)(p.Z, {
          title: h.intl.string(h.t.XYLOyF),
          channel: t,
          closePopout: n,
          onFocus: r,
          onSelectEmoji: e => b(e, n)
        })
      })
    },
    popoutTargetRef: g,
    children: e => {
      var t, n;
      return (0, i.jsx)(d.Z, (t = function(e) {
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
      }({}, e), n = n = {
        buttonRef: g,
        iconComponent: a.j9u,
        isActive: m || e.isActive,
        onClick: t => {
          b(null), e.onClick(t)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}