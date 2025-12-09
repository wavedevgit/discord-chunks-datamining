/** Chunk was on 34740 **/
/** chunk id: 17030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk787267 = require("./787267.js");

function b(e) {
  let {
    customStatusEmoji: t,
    setCustomStatusEmoji: n,
    selectedDefaultStatus: b,
    setIsEmojiPickerOpen: y,
    defaultStatusVariant: C
  } = e, v = r.useRef(null), _ = (0, l.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())), O = r.useCallback(() => null != t ? (0, i.jsx)(o.Z, {
    emojiId: t.id,
    emojiName: t.name,
    animated: !!t.animated
  }) : null != b ? (0, i.jsx)(h.Z, {
    className: g.icon,
    userId: u.default.getId(),
    size: 20,
    hangStatusActivity: {
      type: f.IIU.HANG_STATUS,
      state: b
    },
    fallbackVariant: C
  }) : null, [t, C, b]);
  return (0, i.jsx)(a.yRy, {
    targetElementRef: v,
    onRequestOpen: () => y(true),
    onRequestClose: () => y(false),
    renderPopout: e => {
      var t;
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(c.Z, {
        channel: _,
        guildId: null != (t = null == _ ? true : _.guild_id) ? t : true,
        closePopout: r,
        onSelectEmoji: e => {
          let {
            emoji: t,
            willClose: i
          } = e;
          (e => {
            var t;
            if (null == e) return n(null);
            n(null != e.id ? {
              id: e.id,
              name: e.name,
              animated: e.animated
            } : {
              id: null,
              name: null != (t = e.optionallyDiverseSequence) ? t : "",
              animated: false
            })
          })(t), i && r()
        },
        pickerIntention: m.Hz.STATUS
      })
    },
    position: "left",
    animation: a.yRy.Animation.NONE,
    align: "top",
    children: (e, n) => {
      var r, l;
      let {
        isShown: a
      } = n;
      return (0, i.jsx)(s.Z, (r = function(e) {
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
      }({}, e), l = l = {
        ref: v,
        active: a,
        tabIndex: 0,
        renderButtonContents: null == t && null == b ? null : O
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r))
    }
  })
}