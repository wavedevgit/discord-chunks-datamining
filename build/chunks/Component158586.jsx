/** Chunk was on 80404 **/
/** chunk id: 158586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk907040 = require("./907040.jsx"),
  Chunk946458 = require("./946458.jsx"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk47945 = require("./47945.js");
let f = e => {
  var t, n, f, j, b, p, x;
  let {
    channel: h,
    onClose: v,
    transitionState: y
  } = e, [g, O] = o.useState(null != (f = h.defaultReactionEmoji) ? f : null), [N, w] = o.useState(false), [E, P] = o.useState(false), k = o.useRef(null), C = (null != (j = null == (t = h.defaultReactionEmoji) ? true : t.emojiId) ? j : null) !== (null != (b = null == g ? true : g.emojiId) ? b : null), R = (null != (p = null == (n = h.defaultReactionEmoji) ? true : n.emojiName) ? p : null) !== (null != (x = null == g ? true : g.emojiName) ? x : null), B = C || R, I = e => {
    O(null == e ? null : (null == e ? true : e.id) != null ? {
      emojiId: e.id
    } : {
      emojiName: e.optionallyDiverseSequence
    })
  }, S = async () => {
    if (B) {
      w(true), P(false);
      try {
        await (0, r.wk)(h.id, {
          defaultReactionEmoji: g
        }), v()
      } catch (e) {
        P(true)
      } finally {
        w(false)
      }
    }
  };
  return (0, i.jsxs)(l.Modal, {
    title: u.intl.string(u.t.XlDE3k),
    subtitle: u.intl.string(u.t.lVqhdd),
    transitionState: y,
    onClose: v,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: v
    }, {
      variant: "primary",
      text: u.intl.string(u.t["R3BPH+"]),
      loading: N,
      disabled: !B,
      onClick: S,
      autoFocus: true
    }],
    children: [(0, i.jsx)(s.Z, {
      reactionEmoji: g
    }), (0, i.jsxs)(a.ButtonGroup, {
      size: "sm",
      className: m.buttonRow,
      children: [(0, i.jsx)(a.yRy, {
        targetElementRef: k,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(c.Z, {
            guildId: null == h ? true : h.guild_id,
            closePopout: t,
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: i
              } = e;
              I(n), i && t()
            },
            pickerIntention: d.Hz.COMMUNITY_CONTENT,
            channel: h
          })
        },
        position: "right",
        animation: a.yRy.Animation.NONE,
        align: "center",
        children: e => {
          var t, n;
          return (0, i.jsx)(a.Button, (t = function(e) {
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
            text: u.intl.string(u.t["59QgaD"]),
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
      }), null != g && (0, i.jsx)(a.Button, {
        text: u.intl.string(u.t.N86XcP),
        variant: "critical-secondary",
        onClick: () => I(null)
      })]
    }), E ? (0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: u.intl.string(u.t.F75nNl)
    }) : null]
  })
}