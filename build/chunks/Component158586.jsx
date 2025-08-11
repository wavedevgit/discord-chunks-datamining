/** Chunk was on 80404 **/
/** chunk id: 158586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk946458 = require("./946458.jsx"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815461 = require("./815461.js");
let j = e => {
  var t, n, j, p, b, x, h;
  let {
    channel: v,
    onClose: f,
    transitionState: y
  } = e, [g, O] = o.useState(null != (j = v.defaultReactionEmoji) ? j : null), [N, w] = o.useState(false), [E, P] = o.useState(false), k = o.useRef(null), _ = (null != (p = null == (t = v.defaultReactionEmoji) ? true : t.emojiId) ? p : null) !== (null != (b = null == g ? true : g.emojiId) ? b : null), R = (null != (x = null == (n = v.defaultReactionEmoji) ? true : n.emojiName) ? x : null) !== (null != (h = null == g ? true : g.emojiName) ? h : null), C = _ || R, I = e => {
    O(null == e ? null : (null == e ? true : e.id) != null ? {
      emojiId: e.id
    } : {
      emojiName: e.optionallyDiverseSequence
    })
  }, S = async () => {
    if (C) {
      w(true), P(false);
      try {
        await (0, a.wk)(v.id, {
          defaultReactionEmoji: g
        }), f()
      } catch (e) {
        P(true)
      } finally {
        w(false)
      }
    }
  };
  return (0, i.jsxs)(l.Modal, {
    title: u.intl.string(u.t.XlDE3t),
    subtitle: u.intl.string(u.t.lVqhdX),
    transitionState: y,
    onClose: f,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oK"]),
      onClick: f
    }, {
      variant: "primary",
      text: u.intl.string(u.t.R3BPHx),
      loading: N,
      disabled: !C,
      onClick: S,
      autoFocus: true
    }],
    children: [(0, i.jsx)(s.Z, {
      reactionEmoji: g
    }), (0, i.jsxs)(r.hE2, {
      size: "sm",
      className: m.buttonRow,
      children: [(0, i.jsx)(r.yRy, {
        targetElementRef: k,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(c.Z, {
            guildId: null == v ? true : v.guild_id,
            closePopout: t,
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: i
              } = e;
              I(n), i && t()
            },
            pickerIntention: d.Hz.COMMUNITY_CONTENT,
            channel: v
          })
        },
        position: "right",
        animation: r.yRy.Animation.NONE,
        align: "center",
        children: e => {
          var t, n;
          return (0, i.jsx)(r.zxk, (t = function(e) {
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
            buttonRef: k,
            text: u.intl.string(u.t["59QgaG"]),
            variant: "primary",
            onClick: t => {
              var n;
              null == (n = e.onClick) || n.call(e, t)
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
      }), null != g && (0, i.jsx)(r.zxk, {
        text: u.intl.string(u.t.N86XcH),
        variant: "critical-secondary",
        onClick: () => I(null)
      })]
    }), E ? (0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: u.intl.string(u.t.F75nNj)
    }) : null]
  })
}