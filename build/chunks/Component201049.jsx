/** Chunk was on 21971 **/
/** chunk id: 201049, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk984933 = require("./984933.js"),
  Chunk883429 = require("./883429.js"),
  Chunk185923 = require("./185923.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833257 = require("./833257.js");

function y(e) {
  var n;
  let {
    transitionState: t,
    onClose: y,
    channelId: h,
    guildId: C,
    tag: O
  } = e, k = l.useRef(null), x = null != O, [P, N] = l.useState(null != (n = null == O ? true : O.name) ? n : ""), [w, Z] = l.useState(null != O ? {
    id: O.emojiId,
    name: O.emojiName
  } : null), [B, E] = l.useState(null == O ? true : O.moderated), I = (0, a.e7)([m.ZP], () => (null == w ? true : w.id) != null ? m.ZP.getUsableCustomEmojiById(w.id) : null), S = (null == O ? true : O.name) !== P || (null == O ? true : O.emojiId) !== (null == w ? true : w.id) || (null == O ? true : O.emojiName) !== (null == w ? true : w.name) || B !== (null == O ? true : O.moderated), D = () => {
    if (null != P && S) {
      if (x) {
        p.Z.updateForumTag({
          id: O.id,
          name: P,
          emojiId: null == w ? true : w.id,
          emojiName: null == w ? true : w.name,
          moderated: B
        }, h), y();
        return
      }
      p.Z.createForumTag({
        name: P,
        emojiId: null == w ? true : w.id,
        emojiName: null == w ? true : w.name,
        moderated: B
      }, h), y()
    }
  }, T = l.useCallback(e => N(e), []), R = l.useRef(null);
  return (0, c.ZP)(() => {
    null != R.current && R.current.focus()
  }), (0, i.jsxs)(o.Modal, {
    title: x ? g.intl.string(g.t.zeVg5d) : g.intl.string(g.t["/jubeD"]),
    subtitle: g.intl.string(g.t["3v8kZH"]),
    transitionState: t,
    onClose: y,
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: () => {
        y()
      }
    }, {
      variant: "primary",
      text: g.intl.string(g.t["R3BPH+"]),
      onClick: D,
      disabled: 0 === P.length || !S,
      autoFocus: true
    }],
    actionBarInput: x ? (0, i.jsx)(r.Button, {
      variant: "critical-secondary",
      text: g.intl.string(g.t.huYSMr),
      onClick: () => {
        x && (p.Z.deleteForumTag(h, O.id), y())
      }
    }) : true,
    children: [(0, i.jsx)("div", {
      className: f.inputContainer,
      children: (0, i.jsx)(r.oil, {
        inputRef: R,
        maxLength: 20,
        value: P,
        placeholder: g.intl.string(g.t["5vpeb4"]),
        onChange: T,
        autoFocus: true,
        leading: {
          type: "emoji",
          button: (0, i.jsx)("div", {
            className: f.emojiButtonContainer,
            children: (0, i.jsx)(r.yRy, {
              targetElementRef: k,
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
                    null != t && Z(null != t.id ? {
                      id: t.id,
                      name: t.name
                    } : {
                      id: true,
                      name: t.optionallyDiverseSequence
                    }), i && n()
                  },
                  pickerIntention: v.Hz.COMMUNITY_CONTENT,
                  onNavigateAway: y,
                  channel: t
                })
              },
              position: "left",
              animation: r.yRy.Animation.NONE,
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
                  ref: k,
                  onClick: n => {
                    var t;
                    null == (t = e.onClick) || t.call(e, n)
                  },
                  active: o,
                  className: f.emojiButton,
                  tabIndex: 0,
                  renderButtonContents: null != w && (null != w.id || null != w.name) ? () => (0, i.jsx)(u.Z, {
                    className: f.emoji,
                    emojiId: w.id,
                    emojiName: w.name,
                    animated: !!(null == I ? true : I.animated)
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
          e.key === b.vn.ENTER && P.length > 0 && (P.length > 0 && D(), e.preventDefault())
        },
        trailing: P.length > 0 || null != w ? {
          icon: r.k$p,
          onClick: () => {
            N(""), Z(null)
          },
          "aria-label": g.intl.string(g.t.o8lsHe)
        } : true
      })
    }), (0, i.jsx)(r.LZC, {
      size: 16
    }), (0, i.jsx)(r.Checkbox, {
      checked: null != B && B,
      onChange: e => E(e || (null == O ? true : O.moderated) == null && true),
      label: g.intl.string(g.t["rMH+rt"]),
      labelType: "secondary"
    })]
  })
}