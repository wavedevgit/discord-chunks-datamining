/** Chunk was on 85157 **/
/** chunk id: 939940, original params: e,t,n (module,exports,require) **/
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
let j = e => {
  var t, n, j, b, f, x, p;
  let {
    channel: v,
    onClose: g,
    transitionState: y
  } = e, [h, O] = l.useState(null != (t = v.defaultReactionEmoji) ? t : null), [N, w] = l.useState(false), [E, k] = l.useState(false), P = l.useRef(null), C = (null != (n = null == (x = v.defaultReactionEmoji) ? true : x.emojiId) ? n : null) !== (null != (j = null == h ? true : h.emojiId) ? j : null), B = (null != (b = null == (p = v.defaultReactionEmoji) ? true : p.emojiName) ? b : null) !== (null != (f = null == h ? true : h.emojiName) ? f : null), I = C || B, S = e => {
    O(null == e ? null : (null == e ? true : e.id) != null ? {
      emojiId: e.id
    } : {
      emojiName: e.optionallyDiverseSequence
    })
  }, _ = async () => {
    if (I) {
      w(true), k(false);
      try {
        await (0, o.RT)(v.id, {
          defaultReactionEmoji: h
        }), g()
      } catch (e) {
        k(true)
      } finally {
        w(false)
      }
    }
  };
  return (0, i.jsxs)(a.Modal, {
    title: u.intl.string(u.t.XlDE3k),
    subtitle: u.intl.string(u.t.lVqhdd),
    transitionState: y,
    onClose: g,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: g
    }, {
      variant: "primary",
      text: u.intl.string(u.t["R3BPH+"]),
      loading: N,
      disabled: !I,
      onClick: _,
      autoFocus: true
    }],
    children: [(0, i.jsx)(c.A, {
      reactionEmoji: h
    }), (0, i.jsxs)(r.ButtonGroup, {
      size: "sm",
      className: m.v,
      children: [(0, i.jsx)(r.YNO, {
        targetElementRef: P,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(s.A, {
            guildId: null == v ? true : v.guild_id,
            closePopout: t,
            onSelectEmoji: e => {
              let {
                emoji: n,
                willClose: i
              } = e;
              S(n), i && t()
            },
            pickerIntention: d.b_.COMMUNITY_CONTENT,
            channel: v
          })
        },
        position: "right",
        animation: r.YNO.Animation.NONE,
        align: "center",
        children: e => {
          var t, n;
          return (0, i.jsx)(r.Button, (t = function(e) {
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
            buttonRef: P,
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
      }), null != h && (0, i.jsx)(r.Button, {
        text: u.intl.string(u.t.N86XcP),
        variant: "critical-secondary",
        onClick: () => S(null)
      })]
    }), E ? (0, i.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: u.intl.string(u.t.F75nNl)
    }) : null]
  })
}