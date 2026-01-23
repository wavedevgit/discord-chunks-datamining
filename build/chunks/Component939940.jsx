/** Chunk was on 85157 **/
/** chunk id: 939940, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk937773 = require("./937773.jsx"),
  Chunk235640 = require("./235640.jsx"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk507753 = require("./507753.js");
let j = t => {
  var e, n, j, b, p, x, v;
  let {
    channel: f,
    onClose: h,
    transitionState: g
  } = t, [y, O] = l.useState(null != (e = f.defaultReactionEmoji) ? e : null), [N, w] = l.useState(false), [E, k] = l.useState(false), P = l.useRef(null), _ = (null != (n = null == (x = f.defaultReactionEmoji) ? true : x.emojiId) ? n : null) !== (null != (j = null == y ? true : y.emojiId) ? j : null), C = (null != (b = null == (v = f.defaultReactionEmoji) ? true : v.emojiName) ? b : null) !== (null != (p = null == y ? true : y.emojiName) ? p : null), B = _ || C, I = t => {
    O(null == t ? null : (null == t ? true : t.id) != null ? {
      emojiId: t.id
    } : {
      emojiName: t.optionallyDiverseSequence
    })
  }, R = async () => {
    if (B) {
      w(true), k(false);
      try {
        await (0, a.RT)(f.id, {
          defaultReactionEmoji: y
        }), h()
      } catch (t) {
        k(true)
      } finally {
        w(false)
      }
    }
  };
  return (0, i.jsxs)(o.Modal, {
    title: u.intl.string(u.t.XlDE3k),
    subtitle: u.intl.string(u.t.lVqhdd),
    transitionState: g,
    onClose: h,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: h
    }, {
      variant: "primary",
      text: u.intl.string(u.t["R3BPH+"]),
      loading: N,
      disabled: !B,
      onClick: R,
      autoFocus: true
    }],
    children: [(0, i.jsx)(c.A, {
      reactionEmoji: y
    }), (0, i.jsxs)(r.ButtonGroup, {
      size: "sm",
      className: m.v,
      children: [(0, i.jsx)(r.YNO, {
        targetElementRef: P,
        renderPopout: t => {
          let {
            closePopout: e
          } = t;
          return (0, i.jsx)(s.A, {
            guildId: null == f ? true : f.guild_id,
            closePopout: e,
            onSelectEmoji: t => {
              let {
                emoji: n,
                willClose: i
              } = t;
              I(n), i && e()
            },
            pickerIntention: d.b_.COMMUNITY_CONTENT,
            channel: f
          })
        },
        position: "right",
        animation: r.YNO.Animation.NONE,
        align: "center",
        children: t => {
          var e, n;
          return (0, i.jsx)(r.Button, (e = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), i.forEach(function(e) {
                var i;
                i = n[e], e in t ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = i
              })
            }
            return t
          }({}, t), n = n = {
            buttonRef: P,
            text: u.intl.string(u.t["59QgaD"]),
            variant: "primary",
            onClick: e => {
              var n;
              null == (n = t.onClick) || n.call(t, e)
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              n.push.apply(n, i)
            }
            return n
          })(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }), e))
        }
      }), null != y && (0, i.jsx)(r.Button, {
        text: u.intl.string(u.t.N86XcP),
        variant: "critical-secondary",
        onClick: () => I(null)
      })]
    }), E ? (0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: u.intl.string(u.t.F75nNl)
    }) : null]
  })
}