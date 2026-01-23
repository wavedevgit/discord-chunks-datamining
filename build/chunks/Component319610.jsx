/** Chunk was on 97492 **/
/** chunk id: 319610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk318937 = require("./318937.js"),
  Chunk533117 = require("./533117.js"),
  Chunk134753 = require("./134753.js"),
  Chunk246356 = require("./246356.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk912276 = require("./912276.jsx"),
  Chunk60504 = require("./60504.jsx"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let {
    channel: t
  } = e, n = (0, i.bG)([o.A], () => o.A.getDrawMode()), g = (null == n ? true : n.type) === c.Z.EMOJI_HOSE, m = l.useRef(null), b = (e, t) => {
    null != e ? (0, a.Ol)({
      type: c.Z.EMOJI_HOSE,
      emojiName: e.name,
      emojiId: e.id
    }) : g && (0, a.Ol)(null), null == t || t()
  };
  return (0, r.jsx)(h.A, {
    renderPopout: e => {
      let {
        closePopout: n,
        onFocus: l
      } = e;
      return (0, r.jsx)(u.A, {
        children: (0, r.jsx)(p.A, {
          title: f.intl.string(f.t.XYLOyF),
          channel: t,
          closePopout: n,
          onFocus: l,
          onSelectEmoji: e => b(e, n)
        })
      })
    },
    popoutTargetRef: m,
    children: e => {
      var t, n;
      return (0, r.jsx)(d.A, (t = function(e) {
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
        iconComponent: s.VRj,
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