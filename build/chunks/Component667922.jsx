/** Chunk was on 37220 **/
/** chunk id: 667922, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk543241 = require("./543241.js"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk665906 = require("./665906.js"),
  Chunk695346 = require("./695346.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk176354 = require("./176354.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk576311 = require("./576311.js");

function E(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.Sfi), l = (0, f.$R)(t), a = (0, o.e7)([b.Z], () => (t.isPrivate() || b.Z.can(y.Plq.ADD_REACTIONS, t)) && l, [t, l]), p = (0, c.MZ)(t.getGuildId());
  if (!g.nc.getSetting() || !a) return null;
  let j = p.filter(e => !O.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: h.Hz.REACTION
  })).slice(0, 12).map((i, l) => {
    var a, o;
    return (0, r.jsx)(s.sNh, {
      color: "default",
      id: null != (o = null != (a = i.id) ? a : i.optionallyDiverseSequence) ? o : i.name,
      label: ":".concat(i.name, ":"),
      icon: e => {
        var t, l;
        return (0, r.jsx)(S, (t = function(e) {
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
      action: () => {
        (0, u.rU)(t.id, e.id, (0, d.g1)(i), u.TW.MESSAGE_CONTEXT_MENU)
      },
      dontCloseOnActionIfHoldingShiftKey: true
    }, l)
  });
  return (0, r.jsx)(s.sNh, {
    id: "add-reaction",
    label: v.intl.string(v.t.lfIHs4),
    action: () => {
      m.S.dispatchKeyed(y.LPv.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: true
      })
    },
    color: "default",
    children: (0, r.jsxs)(r.Fragment, {
      children: [j, (0, r.jsx)(s.Clw, {}), (0, r.jsx)(s.sNh, {
        color: "default",
        id: "other-reactions",
        label: v.intl.string(v.t["OBCR+p"]),
        icon: s.EO4,
        action: () => {
          m.S.dispatchKeyed(y.LPv.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: true
          })
        }
      })]
    })
  })
}

function S(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: l = "",
    isFocused: o = false
  } = e;
  return (0, r.jsx)("img", {
    className: a()(l, j.emoji),
    src: null != n.id ? p.ZP.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || o),
      size: 18
    }) : O.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ""),
    alt: ""
  })
}