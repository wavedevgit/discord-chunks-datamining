/** Chunk was on web.js **/
/** chunk id: 960538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => C
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  l = require.n(Chunk111956),
  Chunk665260 = require("./665260.js"),
  Chunk305866 = require("./305866.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk189551 = require("./189551.js"),
  Chunk659859 = require("./659859.jsx"),
  Chunk649963 = require("./649963.js"),
  Chunk815807 = require("./815807.js"),
  Chunk429433 = require("./429433.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk233080 = require("./233080.js"),
  Chunk710504 = require("./710504.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class C extends Chunk64700.Component {
  render() {
    let {
      message: e,
      className: t,
      children: n,
      useChatFontScaling: i,
      tabIndex: a = 0
    } = this.props, {
      isReactionPickerActive: o
    } = this.state;
    if (e.state === E.cmJ.SENDING || (0, c.Lt)(e.flags, E.pr7.EPHEMERAL)) return null;
    let l = i ? v : O,
      u = {
        size: "sm",
        color: "currentColor",
        className: l.icon
      };
    return e.type === E.lAJ.EMOJI_ADDED && 0 === e.reactions.length ? (0, r.jsx)(_._x, {
      message: e,
      className: s()(l.reactionBtn, t)
    }) : (0, r.jsx)(f.YNO, {
      targetElementRef: this.ref,
      shouldShow: o,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, i) => {
        let {
          isShown: o
        } = i;
        return (0, r.jsx)(d.m_, {
          asContainer: true,
          text: b.intl.string(b.t.lfIHs4),
          children: (0, r.jsxs)(f.DUT, T(I({}, e), {
            innerRef: this.ref,
            tabIndex: a,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, p.K)(y.Vl.AddReactionPopoutMouseEntered),
            onFocus: () => (0, p.K)(y.Vl.AddReactionPopoutFocused),
            className: s()(l.reactionBtn, {
              [l.active]: o
            }, t),
            children: [(0, r.jsx)(f.nm2, I({}, u)), n]
          }))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      isReactionPickerActive: false
    }), A(this, "ref", i.createRef()), A(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: r,
        isForumToolbar: i
      } = this.props;
      (0, h.BB)(n.id, r.id, (0, m.jq)(e), i ? h.qN.FORUM_TOOLBAR : h.qN.MESSAGE_INLINE_BUTTON, {
        burst: t
      })
    }), A(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), A(this, "handleAddReactionClick", e => {
      e.stopPropagation(), this.handleReactionPickerToggle()
    }), A(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        channel: n,
        message: i
      } = this.props, a = {
        openPopoutType: "message_reaction_emoji_picker"
      }, s = (0, r.jsx)(g.C, {
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
          return t ? (0, r.jsx)(f.lGe, {
            "aria-label": b.intl.string(b.t["7Xqzdj"]),
            children: s
          }) : s
        }
      })
    })
  }
}