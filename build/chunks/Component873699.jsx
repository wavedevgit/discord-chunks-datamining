/** Chunk was on 37220 **/
/** chunk id: 873699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk79390 = require("./79390.js"),
  Chunk222677 = require("./222677.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(o.Sfi), f = (0, u.$R)(t), g = (0, l.e7)([d.Z], () => d.Z.can(b.Plq.MANAGE_MESSAGES, t) && f, [t, f]), O = e.reactions.reduce((e, t) => {
    var n;
    return (null == (n = t.count_details) ? true : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
  }, []);
  return !g || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, c.eQ)(e) ? null : (0, r.jsx)(o.sNh, {
    id: "remove-emoji-reactions",
    label: p.intl.string(p.t["zx/e4P"]),
    color: "danger",
    children: O.map(i => {
      var l, c;
      return (0, r.jsx)(o.sNh, {
        id: "remove-emoji-reactions-".concat(null != (l = i.name) ? l : i.id),
        label: null == i.id ? i.name : ":".concat(i.name, ":"),
        action: n => {
          n.shiftKey ? (0, s.$E)(t.id, e.id, i) : a.Z.show({
            title: p.intl.string(p.t["73GqTz"]),
            body: p.intl.string(p.t.dmy5bn),
            confirmText: p.intl.string(p.t.p89ACt),
            confirmVariant: "critical-primary",
            cancelText: p.intl.string(p.t.gm1Vej),
            onConfirm: () => {
              (0, s.$E)(t.id, e.id, i)
            }
          })
        },
        icon: e => {
          var t, l;
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
      }, null != (c = i.name) ? c : i.id)
    })
  })
}

function y(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: l = "",
    isFocused: o = false
  } = e;
  return (0, r.jsx)("img", {
    className: l,
    src: null != n.id ? f.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || o),
      size: 18
    }) : g.ZP.getURL(null != (t = n.name) ? t : ""),
    alt: ""
  })
}