/** Chunk was on 21971 **/
/** chunk id: 201049, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk984933 = require("./984933.js"),
  Chunk883429 = require("./883429.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851458 = require("./851458.js");

function h(e) {
  var n;
  let {
    transitionState: t,
    onClose: h,
    channelId: x,
    guildId: C,
    tag: O
  } = e, N = l.useRef(null), k = null != O, [P, _] = l.useState(null != (n = null == O ? true : O.name) ? n : ""), [I, B] = l.useState(null != O ? {
    id: O.emojiId,
    name: O.emojiName
  } : null), [E, Z] = l.useState(null == O ? true : O.moderated), w = (0, o.e7)([j.ZP], () => (null == I ? true : I.id) != null ? j.ZP.getUsableCustomEmojiById(I.id) : null), S = (null == O ? true : O.name) !== P || (null == O ? true : O.emojiId) !== (null == I ? true : I.id) || (null == O ? true : O.emojiName) !== (null == I ? true : I.name) || E !== (null == O ? true : O.moderated), z = () => {
    if (null != P && S) {
      if (k) {
        v.Z.updateForumTag({
          id: O.id,
          name: P,
          emojiId: null == I ? true : I.id,
          emojiName: null == I ? true : I.name,
          moderated: E
        }, x), h();
        return
      }
      v.Z.createForumTag({
        name: P,
        emojiId: null == I ? true : I.id,
        emojiName: null == I ? true : I.name,
        moderated: E
      }, x), h()
    }
  }, T = l.useCallback(e => _(e), []), R = l.useRef(null);
  return (0, s.ZP)(() => {
    null != R.current && R.current.focus()
  }), (0, i.jsxs)(a.Modal, {
    title: k ? y.intl.string(y.t.zeVg5e) : y.intl.string(y.t["/jubeH"]),
    subtitle: y.intl.string(y.t["3v8kZG"]),
    transitionState: t,
    onClose: h,
    actions: [{
      variant: "secondary",
      text: y.intl.string(y.t["ETE/oK"]),
      onClick: () => {
        h()
      }
    }, {
      variant: "primary",
      text: y.intl.string(y.t.R3BPHx),
      onClick: z,
      disabled: 0 === P.length || !S,
      autoFocus: true
    }],
    actionBarInput: k ? (0, i.jsx)(u.zxk, {
      variant: "critical-secondary",
      text: y.intl.string(y.t.huYSMj),
      onClick: () => {
        k && (v.Z.deleteForumTag(x, O.id), h())
      }
    }) : true,
    children: [(0, i.jsxs)("div", {
      className: f.inputContainer,
      children: [(0, i.jsx)("div", {
        className: f.emojiButtonContainer,
        children: (0, i.jsx)(u.yRy, {
          targetElementRef: N,
          renderPopout: e => {
            let {
              closePopout: n
            } = e, t = p.ZP.getDefaultChannel(C);
            return (0, i.jsx)(m.Z, {
              guildId: C,
              closePopout: n,
              onSelectEmoji: e => {
                let {
                  emoji: t,
                  willClose: i
                } = e;
                null != t && B(null != t.id ? {
                  id: t.id,
                  name: t.name
                } : {
                  id: true,
                  name: t.optionallyDiverseSequence
                }), i && n()
              },
              pickerIntention: b.Hz.COMMUNITY_CONTENT,
              onNavigateAway: h,
              channel: t
            })
          },
          position: "left",
          animation: u.yRy.Animation.NONE,
          align: "bottom",
          children: (e, n) => {
            var t, l;
            let {
              isShown: o
            } = n;
            return (0, i.jsx)(d.Z, (t = function(e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                  i = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.forEach(function(n) {
                  var i;
                  i = t[n], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[n] = i
                })
              }
              return e
            }({}, e), l = l = {
              ref: N,
              onClick: n => {
                var t;
                null == (t = e.onClick) || t.call(e, n)
              },
              active: o,
              className: f.emojiButton,
              tabIndex: 0,
              renderButtonContents: null != I && (null != I.id || null != I.name) ? () => (0, i.jsx)(c.Z, {
                className: f.emoji,
                emojiId: I.id,
                emojiName: I.name,
                animated: !!(null == w ? true : w.animated)
              }) : null
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t.push.apply(t, i)
              }
              return t
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
            }), t))
          }
        })
      }), (0, i.jsx)(r.Is, {
        inputRef: R,
        maxLength: 20,
        value: P,
        inputClassName: f.input,
        placeholder: y.intl.string(y.t["5vpeb2"]),
        onChange: T,
        autoFocus: true,
        onKeyDown: e => {
          e.keyCode === g.yXg.ENTER && P.length > 0 && (P.length > 0 && z(), e.preventDefault())
        }
      }), P.length > 0 || null != I ? (0, i.jsx)(r.zx, {
        "data-migration-pending": true,
        "aria-label": y.intl.string(y.t.o8lsHR),
        className: f.clearButton,
        onClick: () => {
          _(""), B(null)
        },
        look: r.zx.Looks.BLANK,
        size: r.zx.Sizes.NONE,
        children: (0, i.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: f.clearIcon
        })
      }) : null]
    }), (0, i.jsx)(u.LZC, {
      size: 16
    }), (0, i.jsx)(u.XZJ, {
      type: u.XZJ.Types.INVERTED,
      size: 18,
      value: null != E && E,
      onChange: (e, n) => Z(n || (null == O ? true : O.moderated) == null && true),
      children: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: y.intl.string(y.t["rMH+rq"])
      })
    })]
  })
}