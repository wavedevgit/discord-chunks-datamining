/** Chunk was on 21971 **/
/** chunk id: 201049, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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

function f(e) {
  var n;
  let {
    transitionState: t,
    onClose: f,
    channelId: h,
    guildId: C,
    tag: O
  } = e, x = l.useRef(null), k = null != O, [P, N] = l.useState(null != (n = null == O ? true : O.name) ? n : ""), [Z, w] = l.useState(null != O ? {
    id: O.emojiId,
    name: O.emojiName
  } : null), [E, I] = l.useState(null == O ? true : O.moderated), S = (0, o.e7)([m.ZP], () => (null == Z ? true : Z.id) != null ? m.ZP.getUsableCustomEmojiById(Z.id) : null), T = (null == O ? true : O.name) !== P || (null == O ? true : O.emojiId) !== (null == Z ? true : Z.id) || (null == O ? true : O.emojiName) !== (null == Z ? true : Z.name) || E !== (null == O ? true : O.moderated), _ = () => {
    if (null != P && T) {
      if (k) {
        p.Z.updateForumTag({
          id: O.id,
          name: P,
          emojiId: null == Z ? true : Z.id,
          emojiName: null == Z ? true : Z.name,
          moderated: E
        }, h), f();
        return
      }
      p.Z.createForumTag({
        name: P,
        emojiId: null == Z ? true : Z.id,
        emojiName: null == Z ? true : Z.name,
        moderated: E
      }, h), f()
    }
  }, B = l.useCallback(e => N(e), []), R = l.useRef(null);
  return (0, d.ZP)(() => {
    null != R.current && R.current.focus()
  }), (0, i.jsxs)(r.Modal, {
    title: k ? b.intl.string(b.t.zeVg5e) : b.intl.string(b.t["/jubeH"]),
    subtitle: b.intl.string(b.t["3v8kZG"]),
    transitionState: t,
    onClose: f,
    actions: [{
      variant: "secondary",
      text: b.intl.string(b.t["ETE/oK"]),
      onClick: () => {
        f()
      }
    }, {
      variant: "primary",
      text: b.intl.string(b.t.R3BPHx),
      onClick: _,
      disabled: 0 === P.length || !T,
      autoFocus: true
    }],
    actionBarInput: k ? (0, i.jsx)(a.zxk, {
      variant: "critical-secondary",
      text: b.intl.string(b.t.huYSMj),
      onClick: () => {
        k && (p.Z.deleteForumTag(h, O.id), f())
      }
    }) : true,
    children: [(0, i.jsx)("div", {
      className: y.inputContainer,
      children: (0, i.jsx)(a.oil, {
        inputRef: R,
        maxLength: 20,
        value: P,
        placeholder: b.intl.string(b.t["5vpeb2"]),
        onChange: B,
        autoFocus: true,
        leading: {
          type: "emoji",
          button: (0, i.jsx)("div", {
            className: y.emojiButtonContainer,
            children: (0, i.jsx)(a.yRy, {
              targetElementRef: x,
              renderPopout: e => {
                let {
                  closePopout: n
                } = e, t = j.ZP.getDefaultChannel(C);
                return (0, i.jsx)(s.Z, {
                  guildId: C,
                  closePopout: n,
                  onSelectEmoji: e => {
                    let {
                      emoji: t,
                      willClose: i
                    } = e;
                    null != t && w(null != t.id ? {
                      id: t.id,
                      name: t.name
                    } : {
                      id: true,
                      name: t.optionallyDiverseSequence
                    }), i && n()
                  },
                  pickerIntention: g.Hz.COMMUNITY_CONTENT,
                  onNavigateAway: f,
                  channel: t
                })
              },
              position: "left",
              animation: a.yRy.Animation.NONE,
              align: "bottom",
              children: (e, n) => {
                var t, l;
                let {
                  isShown: o
                } = n;
                return (0, i.jsx)(c.Z, (t = function(e) {
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
                  ref: x,
                  onClick: n => {
                    var t;
                    null == (t = e.onClick) || t.call(e, n)
                  },
                  active: o,
                  className: y.emojiButton,
                  tabIndex: 0,
                  renderButtonContents: null != Z && (null != Z.id || null != Z.name) ? () => (0, i.jsx)(u.Z, {
                    className: y.emoji,
                    emojiId: Z.id,
                    emojiName: Z.name,
                    animated: !!(null == S ? true : S.animated)
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
          })
        },
        onKeyDown: e => {
          e.keyCode === v.yXg.ENTER && P.length > 0 && (P.length > 0 && _(), e.preventDefault())
        },
        trailing: P.length > 0 || null != Z ? {
          icon: a.k$p,
          onClick: () => {
            N(""), w(null)
          },
          "aria-label": b.intl.string(b.t.o8lsHR)
        } : true
      })
    }), (0, i.jsx)(a.LZC, {
      size: 16
    }), (0, i.jsx)(a.XZJ, {
      type: a.XZJ.Types.INVERTED,
      size: 18,
      value: null != E && E,
      onChange: (e, n) => I(n || (null == O ? true : O.moderated) == null && true),
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: b.intl.string(b.t["rMH+rq"])
      })
    })]
  })
}