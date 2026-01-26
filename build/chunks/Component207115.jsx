/** Chunk was on 1636 **/
/** chunk id: 207115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(a.CZY), g = (0, d.Id)(t), b = (0, l.bG)([u.A], () => u.A.can(f.xBc.MANAGE_MESSAGES, t) && g, [t, g]), m = e.reactions.reduce((e, t) => {
    var n;
    return (null == (n = t.count_details) ? true : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
  }, []);
  return !b || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, c.Gh)(e) ? null : (0, r.jsx)(a.Drp, {
    id: "remove-emoji-reactions",
    label: y.intl.string(y.t["zx/e4P"]),
    leadingAccessory: {
      type: "icon",
      icon: a.FD6
    },
    color: "danger",
    children: m.map(i => {
      var l, c, d;
      return (0, r.jsx)(a.Drp, {
        id: "remove-emoji-reactions-".concat(null != (l = i.name) ? l : i.id),
        label: null == i.id ? i.name : ":".concat(i.name, ":"),
        action: n => {
          n.shiftKey ? (0, s.Jf)(t.id, e.id, i) : o.A.show({
            title: y.intl.string(y.t["73GqTz"]),
            body: y.intl.string(y.t.dmy5bn),
            confirmText: y.intl.string(y.t.p89ACt),
            confirmVariant: "critical-primary",
            cancelText: y.intl.string(y.t.gm1Vej),
            onConfirm: () => {
              (0, s.Jf)(t.id, e.id, i)
            }
          })
        },
        leadingAccessory: {
          type: "emoji",
          emojiId: i.id,
          src: null == i.id ? p.Ay.getURL(null != (c = i.name) ? c : "") : true,
          animated: i.animated
        },
        icon: e => {
          var t, l;
          return (0, r.jsx)(A, (t = function(e) {
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
          }({}, e), l = l = {
            reducedMotionEnabled: n.enabled,
            emoji: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
          }), t))
        },
        dontCloseOnActionIfHoldingShiftKey: true
      }, null != (d = i.name) ? d : i.id)
    })
  })
}

function A(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: l = "",
    isFocused: a = false
  } = e;
  return (0, r.jsx)("img", {
    className: l,
    src: null != n.id ? g.Ay.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || a),
      size: 18
    }) : p.Ay.getURL(null != (t = n.name) ? t : ""),
    alt: ""
  })
}