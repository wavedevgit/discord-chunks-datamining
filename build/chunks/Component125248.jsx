/** Chunk was on 41727 **/
/** chunk id: 125248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk213966 = require("./213966.js");
let f = [Chunk213966.u8, Chunk213966.n$, Chunk213966.uN, Chunk213966.no],
  g = Chunk64700.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: i
    } = e, o = (0, a.sample)(f), c = l.useCallback(() => {
      i(n.key)
    }, [n.key, i]);
    return (0, r.jsx)("div", {
      className: s()(h.Zg, o),
      onAnimationEnd: c,
      children: (0, r.jsx)(d.A, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null != (t = n.animated) && t
      })
    })
  });

function m(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, i = (0, c.bG)([p.A], () => p.A.useReducedMotion), [s, a] = l.useState([]);
  l.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: r
      } = e;
      n !== t || i || null == r || a(e => [...e, function(e) {
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
        key: (0, o.A)()
      }, r)])
    }
    return u.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      u.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, i]);
  let d = l.useCallback(e => {
    a(t => t.filter(t => t.key !== e))
  }, []);
  return i ? null : (0, r.jsx)("div", {
    className: h.kL,
    style: {
      top: n - 50,
      left: "52%"
    },
    "aria-hidden": true,
    children: s.map(e => (0, r.jsx)(g, {
      emoji: e,
      onAnimationEnd: d
    }, e.key))
  })
}