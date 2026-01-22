/** Chunk was on 97492 **/
/** chunk id: 129104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk680930 = require("./680930.js");

function m(e) {
  let {
    customStatusEmoji: t,
    setCustomStatusEmoji: n,
    selectedDefaultStatus: m,
    setIsEmojiPickerOpen: A,
    defaultStatusVariant: y
  } = e, O = l.useRef(null), j = (0, i.bG)([f.A, d.A], () => d.A.getChannel(f.A.getVoiceChannelId())), v = l.useCallback(() => null != t ? (0, r.jsx)(s.A, {
    emojiId: t.id,
    emojiName: t.name,
    animated: !!t.animated
  }) : null != m ? (0, r.jsx)(p.A, {
    className: g.Kk,
    userId: u.default.getId(),
    size: 20,
    hangStatusActivity: {
      type: h.$pd.HANG_STATUS,
      state: m
    },
    fallbackVariant: y
  }) : null, [t, y, m]);
  return (0, r.jsx)(a.YNO, {
    targetElementRef: O,
    onRequestOpen: () => A(true),
    onRequestClose: () => A(false),
    renderPopout: e => {
      var t;
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(c.A, {
        channel: j,
        guildId: null != (t = null == j ? true : j.guild_id) ? t : true,
        closePopout: l,
        onSelectEmoji: e => {
          var t;
          let {
            emoji: r,
            willClose: i
          } = e;
          null == r ? n(null) : n(null != r.id ? {
            id: r.id,
            name: r.name,
            animated: r.animated
          } : {
            id: null,
            name: null != (t = r.optionallyDiverseSequence) ? t : "",
            animated: false
          }), i && l()
        },
        pickerIntention: b.b_.STATUS
      })
    },
    position: "left",
    animation: a.YNO.Animation.NONE,
    align: "top",
    children: (e, n) => {
      var l, i;
      let {
        isShown: a
      } = n;
      return (0, r.jsx)(o.A, (l = function(e) {
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
        ref: O,
        active: a,
        tabIndex: 0,
        renderButtonContents: null == t && null == m ? null : v
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l))
    }
  })
}