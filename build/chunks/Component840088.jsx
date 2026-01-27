/** Chunk was on 1636 **/
/** chunk id: 840088, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk822123 = require("./822123.js"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk406704 = require("./406704.js"),
  Chunk253932 = require("./253932.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk203982 = require("./203982.js"),
  Chunk690521 = require("./690521.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk451590 = require("./451590.js");

function j(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(c.CZY), l = (0, g.Id)(t), a = (0, o.bG)([f.A], () => (t.isPrivate() || f.A.can(m.xBc.ADD_REACTIONS, t)) && l, [t, l]), y = (0, s.D6)(t.getGuildId());
  if (!p.jW.getSetting() || !a) return null;
  let h = y.filter(e => !A.Ay.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: O.b_.REACTION
  })).slice(0, 12).map((i, l) => {
    var a, o, s;
    return (0, r.jsx)(c.Drp, {
      color: "default",
      id: null != (a = null != (o = i.id) ? o : i.optionallyDiverseSequence) ? a : i.name,
      label: ":".concat(i.name, ":"),
      icon: e => {
        var t, l;
        return (0, r.jsx)(E, (t = function(e) {
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
      leadingAccessory: {
        type: "emoji",
        emojiId: i.id,
        src: null == i.id ? A.Ay.getURL(null != (s = i.optionallyDiverseSequence) ? s : "") : true,
        animated: i.animated
      },
      action: () => {
        (0, d.BB)(t.id, e.id, (0, u.jq)(i), d.qN.MESSAGE_CONTEXT_MENU)
      },
      dontCloseOnActionIfHoldingShiftKey: true
    }, l)
  });
  return (0, r.jsx)(c.Drp, {
    id: "add-reaction",
    label: v.intl.string(v.t.lfIHs4),
    leadingAccessory: {
      type: "icon",
      icon: c.nm2
    },
    action: () => {
      b._.dispatchKeyed(m.zOV.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: true
      })
    },
    color: "default",
    children: (0, r.jsxs)(r.Fragment, {
      children: [h, (0, r.jsx)(c.bXX, {}), (0, r.jsx)(c.Drp, {
        color: "default",
        id: "other-reactions",
        label: v.intl.string(v.t["OBCR+p"]),
        icon: c.nm2,
        leadingAccessory: {
          type: "icon",
          icon: c.ShF
        },
        action: () => {
          b._.dispatchKeyed(m.zOV.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: true
          })
        }
      })]
    })
  })
}

function E(e) {
  var t;
  let {
    emoji: n,
    reducedMotionEnabled: i,
    className: l = "",
    isFocused: o = false
  } = e;
  return (0, r.jsx)("img", {
    className: a()(l, h.Z),
    src: null != n.id ? y.Ay.getEmojiURL({
      id: n.id,
      animated: n.animated && (!i || o),
      size: 18
    }) : A.Ay.getURL(null != (t = n.optionallyDiverseSequence) ? t : ""),
    alt: ""
  })
}