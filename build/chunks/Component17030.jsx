/** Chunk was on 70127 **/
/** chunk id: 17030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk185923 = require("./185923.js");

function h(e) {
  let {
    customStatusEmoji: t,
    setCustomStatusEmoji: n
  } = e, h = i.useRef(null), f = (0, l.e7)([d.Z, u.Z], () => u.Z.getChannel(d.Z.getVoiceChannelId()));
  return (0, r.jsx)(a.yRy, {
    targetElementRef: h,
    renderPopout: e => {
      var t;
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(c.Z, {
        channel: f,
        guildId: null != (t = null == f ? true : f.guild_id) ? t : true,
        closePopout: i,
        onSelectEmoji: e => {
          let {
            emoji: t,
            willClose: r
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
          })(t), r && i()
        },
        pickerIntention: p.Hz.STATUS
      })
    },
    position: "left",
    animation: a.yRy.Animation.NONE,
    align: "top",
    children: (e, n) => {
      var i, l;
      let {
        isShown: a
      } = n;
      return (0, r.jsx)(s.Z, (i = function(e) {
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
        ref: h,
        active: a,
        tabIndex: 0,
        renderButtonContents: null == t ? null : () => (0, r.jsx)(o.Z, {
          emojiId: t.id,
          emojiName: t.name,
          animated: !!t.animated
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
}