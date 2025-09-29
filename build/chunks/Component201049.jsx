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
  Chunk984915 = require("./984915.js");

function h(e) {
  var n;
  let {
    transitionState: t,
    onClose: h,
    channelId: C,
    guildId: O,
    tag: x
  } = e, k = l.useRef(null), P = null != x, [N, w] = l.useState(null != (n = null == x ? true : x.name) ? n : ""), [E, I] = l.useState(null != x ? {
    id: x.emojiId,
    name: x.emojiName
  } : null), [Z, S] = l.useState(null == x ? true : x.moderated), _ = (0, o.e7)([j.ZP], () => (null == E ? true : E.id) != null ? j.ZP.getUsableCustomEmojiById(E.id) : null), B = (null == x ? true : x.name) !== N || (null == x ? true : x.emojiId) !== (null == E ? true : E.id) || (null == x ? true : x.emojiName) !== (null == E ? true : E.name) || Z !== (null == x ? true : x.moderated), R = () => {
    if (null != N && B) {
      if (P) {
        v.Z.updateForumTag({
          id: x.id,
          name: N,
          emojiId: null == E ? true : E.id,
          emojiName: null == E ? true : E.name,
          moderated: Z
        }, C), h();
        return
      }
      v.Z.createForumTag({
        name: N,
        emojiId: null == E ? true : E.id,
        emojiName: null == E ? true : E.name,
        moderated: Z
      }, C), h()
    }
  }, T = l.useCallback(e => w(e), []), D = l.useRef(null);
  return (0, c.ZP)(() => {
    null != D.current && D.current.focus()
  }), (0, i.jsxs)(r.Modal, {
    title: P ? y.intl.string(y.t.zeVg5e) : y.intl.string(y.t["/jubeH"]),
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
      onClick: R,
      disabled: 0 === N.length || !B,
      autoFocus: true
    }],
    actionBarInput: P ? (0, i.jsx)(u.zxk, {
      variant: "critical-secondary",
      text: y.intl.string(y.t.huYSMj),
      onClick: () => {
        P && (v.Z.deleteForumTag(C, x.id), h())
      }
    }) : true,
    children: [(0, i.jsx)("div", {
      className: f.inputContainer,
      children: (0, i.jsx)(u.oil, {
        inputRef: D,
        maxLength: 20,
        value: N,
        placeholder: y.intl.string(y.t["5vpeb2"]),
        onChange: T,
        autoFocus: true,
        leading: {
          type: "emoji",
          button: (0, i.jsx)("div", {
            className: f.emojiButtonContainer,
            children: (0, i.jsx)(u.yRy, {
              targetElementRef: k,
              renderPopout: e => {
                let {
                  closePopout: n
                } = e, t = p.ZP.getDefaultChannel(O);
                return (0, i.jsx)(m.Z, {
                  guildId: O,
                  closePopout: n,
                  onSelectEmoji: e => {
                    let {
                      emoji: t,
                      willClose: i
                    } = e;
                    null != t && I(null != t.id ? {
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
                return (0, i.jsx)(s.Z, (t = function(e) {
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
                  renderButtonContents: null != E && (null != E.id || null != E.name) ? () => (0, i.jsx)(d.Z, {
                    className: f.emoji,
                    emojiId: E.id,
                    emojiName: E.name,
                    animated: !!(null == _ ? true : _.animated)
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
          e.keyCode === g.yXg.ENTER && N.length > 0 && (N.length > 0 && R(), e.preventDefault())
        },
        trailing: N.length > 0 || null != E ? {
          icon: u.k$p,
          onClick: () => {
            w(""), I(null)
          },
          "aria-label": y.intl.string(y.t.o8lsHR)
        } : true
      })
    }), (0, i.jsx)(u.LZC, {
      size: 16
    }), (0, i.jsx)(a.$q, {
      type: a.M0.INVERTED,
      size: 18,
      value: null != Z && Z,
      onChange: (e, n) => S(n || (null == x ? true : x.moderated) == null && true),
      children: (0, i.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: y.intl.string(y.t["rMH+rq"])
      })
    })]
  })
}