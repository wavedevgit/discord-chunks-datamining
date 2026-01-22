/** Chunk was on 1636 **/
/** chunk id: 207115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk969632 = require("./969632.js"),
  Chunk649963 = require("./649963.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t) {
  let {
    reducedMotion: n
  } = l.useContext(o.CZY), f = (0, d.Id)(t), g = (0, i.bG)([u.A], () => u.A.can(p.xBc.MANAGE_MESSAGES, t) && f, [t, f]), m = e.reactions.reduce((e, t) => {
    var n;
    return (null == (n = t.count_details) ? true : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
  }, []);
  return !g || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, c.Gh)(e) ? null : (0, r.jsx)(o.Drp, {
    id: "remove-emoji-reactions",
    label: b.intl.string(b.t["zx/e4P"]),
    color: "danger",
    children: m.map(l => {
      var i, c;
      return (0, r.jsx)(o.Drp, {
        id: "remove-emoji-reactions-".concat(null != (i = l.name) ? i : l.id),
        label: null == l.id ? l.name : ":".concat(l.name, ":"),
        action: n => {
          n.shiftKey ? (0, s.Jf)(t.id, e.id, l) : a.A.show({
            title: b.intl.string(b.t["73GqTz"]),
            body: b.intl.string(b.t.dmy5bn),
            confirmText: b.intl.string(b.t.p89ACt),
            confirmVariant: "critical-primary",
            cancelText: b.intl.string(b.t.gm1Vej),
            onConfirm: () => {
              (0, s.Jf)(t.id, e.id, l)
            }
          })
        },
        icon: e => {
          var t, i;
          return (0, r.jsx)(y, (t = function(e) {
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
          }({}, e), i = i = {
            reducedMotionEnabled: n.enabled,
            emoji: l
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t))
        },
        dontCloseOnActionIfHoldingShiftKey: true
      }, null != (c = l.name) ? c : l.id)
    })
  })
}

function y(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: l,
    className: i = "",
    isFocused: o = false
  } = e;
  return (0, r.jsx)("img", {
    className: i,
    src: null != n.id ? f.Ay.getEmojiURL({
      id: n.id,
      animated: n.animated && (!l || o),
      size: 18
    }) : g.Ay.getURL(null != (t = n.name) ? t : ""),
    alt: ""
  })
}