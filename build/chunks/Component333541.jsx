/** Chunk was on 1631 **/
/** chunk id: 333541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk906605 = require("./906605.js"),
  Chunk106301 = require("./106301.js"),
  Chunk505905 = require("./505905.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492006 = require("./492006.js");

function C(e) {
  let {
    customStatusEmoji: t,
    setCustomStatusEmoji: n,
    onClose: r
  } = e, d = o.useRef(null), j = (0, i.e7)([p.Z, m.Z], () => m.Z.getChannel(p.Z.getVoiceChannelId()));
  return (0, l.jsx)(u.yRy, {
    targetElementRef: d,
    renderPopout: e => {
      var t;
      let {
        closePopout: o
      } = e;
      return (0, l.jsx)(c.Z, {
        channel: j,
        guildId: null != (t = null == j ? true : j.guild_id) ? t : true,
        closePopout: o,
        onSelectEmoji: e => {
          let {
            emoji: t,
            willClose: l
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
          })(t), l && o()
        },
        pickerIntention: y.Hz.STATUS,
        onNavigateAway: r
      })
    },
    position: "left",
    animation: u.yRy.Animation.NONE,
    align: "top",
    children: (e, n) => {
      var o, i;
      let {
        isShown: r
      } = n;
      return (0, l.jsx)(s.Z, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), i = i = {
        ref: d,
        active: r,
        className: h.emojiButton,
        tabIndex: 0,
        renderButtonContents: null == t ? null : () => (0, l.jsx)(a.Z, {
          className: h.emoji,
          emojiId: t.id,
          emojiName: t.name,
          animated: !!t.animated
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
      }), o))
    }
  })
}

function S(e) {
  var t, n;
  let {
    transitionState: i,
    onClose: a,
    startingText: s,
    startingEmoji: c
  } = e, m = g.Z.getCustomHangStatus(), p = null != s ? s : null != (t = null == m ? true : m.status) ? t : "", y = null != (n = null == m ? true : m.emoji) ? n : null;
  (null == c ? true : c.id) != null ? y = f.ZP.canUseEmojisEverywhere(j.default.getCurrentUser()) && null != d.ZP.getUsableCustomEmojiById(c.id) ? c : null : (null == c ? true : c.name) != null && (y = c);
  let [S, x] = o.useState(p), [P, w] = o.useState(y), _ = o.useCallback(() => {
    let e = S.trim();
    "" !== e && null != P && ((0, b._s)(e, P, true), a())
  }, [P, a, S]), k = o.useMemo(() => [{
    text: O.intl.string(O.t.S0ajKC),
    onClick: _
  }], [_]);
  return (0, l.jsx)(r.Modal, {
    onClose: a,
    actions: k,
    transitionState: i,
    title: O.intl.string(O.t.DD4vJC),
    subtitle: O.intl.string(O.t.YVM22t),
    children: (0, l.jsxs)("div", {
      className: h.form,
      children: [(0, l.jsx)(C, {
        customStatusEmoji: P,
        setCustomStatusEmoji: w,
        onClose: a
      }), (0, l.jsxs)("div", {
        className: h.customInputGroup,
        children: [(0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: O.intl.string(O.t["74vS//"])
        }), (0, l.jsx)(u.oil, {
          value: S,
          onChange: e => x(e.substring(0, v.s)),
          placeholder: O.intl.string(O.t.k6lfDg)
        })]
      })]
    })
  })
}