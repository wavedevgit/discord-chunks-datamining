/** Chunk was on web.js **/
/** chunk id: 490597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => A
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
  Chunk95015 = require("./95015.js"),
  Chunk507274 = require("./507274.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk255963 = require("./255963.js"),
  Chunk387188 = require("./387188.jsx"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk931651 = require("./931651.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk860302 = require("./860302.js"),
  Chunk378369 = require("./378369.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class A extends Chunk473749.Component {
  render() {
    let {
      message: e,
      className: t,
      children: n,
      useChatFontScaling: i,
      tabIndex: a = 0
    } = this.props, {
      isReactionPickerActive: s
    } = this.state;
    if (e.state === E.yb.SENDING || (0, c.yE)(e.flags, E.iLy.EPHEMERAL)) return null;
    let l = i ? v : O,
      u = {
        size: "sm",
        color: "currentColor",
        className: l.icon
      };
    return e.type === E.uaV.EMOJI_ADDED && 0 === e.reactions.length ? (0, r.jsx)(_.e, {
      message: e,
      className: o()(l.reactionBtn, t)
    }) : (0, r.jsx)(f.yRy, {
      targetElementRef: this.ref,
      shouldShow: s,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, i) => {
        let {
          isShown: s
        } = i;
        return (0, r.jsx)(d.u, {
          asContainer: true,
          text: y.intl.string(y.t.lfIHs4),
          children: (0, r.jsxs)(f.P3F, C(I({}, e), {
            innerRef: this.ref,
            tabIndex: a,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, p.x)(b.qR.AddReactionPopoutMouseEntered),
            onFocus: () => (0, p.x)(b.qR.AddReactionPopoutFocused),
            className: o()(l.reactionBtn, {
              [l.active]: s
            }, t),
            children: [(0, r.jsx)(f.EO4, I({}, u)), n]
          }))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), S(this, "state", {
      isReactionPickerActive: false
    }), S(this, "ref", i.createRef()), S(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: r,
        isForumToolbar: i
      } = this.props;
      (0, h.rU)(n.id, r.id, (0, m.g1)(e), i ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, {
        burst: t
      })
    }), S(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), S(this, "handleAddReactionClick", e => {
      e.stopPropagation(), this.handleReactionPickerToggle()
    }), S(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        channel: n,
        message: i
      } = this.props, a = {
        openPopoutType: "message_reaction_emoji_picker"
      }, o = (0, r.jsx)(g.$, {
        closePopout: t,
        channel: n,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: r,
            isBurst: i
          } = e;
          this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t())
        },
        analyticsOverride: a,
        messageId: i.id
      });
      return (0, r.jsx)(u.M.Consumer, {
        children: e => {
          let {
            inDialog: t
          } = e;
          return t ? (0, r.jsx)(f.VqE, {
            "aria-label": y.intl.string(y.t["7Xqzdj"]),
            children: o
          }) : o
        }
      })
    })
  }
}