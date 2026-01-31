/** Chunk was on 64935 **/
/** chunk id: 960538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => j
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
class j extends Chunk64700.Component {
  render() {
    let {
      message: e,
      className: t,
      children: n,
      useChatFontScaling: i,
      tabIndex: l = 0
    } = this.props, {
      isReactionPickerActive: s
    } = this.state;
    if (e.state === b.cmJ.SENDING || (0, c.Lt)(e.flags, b.pr7.EPHEMERAL)) return null;
    let o = i ? O : v,
      u = {
        size: "sm",
        color: "currentColor",
        className: o.icon
      };
    return e.type === b.lAJ.EMOJI_ADDED && 0 === e.reactions.length ? (0, r.jsx)(f._x, {
      message: e,
      className: a()(o.reactionBtn, t)
    }) : (0, r.jsx)(p.YNO, {
      targetElementRef: this.ref,
      shouldShow: s,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, i) => {
        var s, c;
        let {
          isShown: f
        } = i;
        return (0, r.jsx)(d.m_, {
          asContainer: true,
          text: A.intl.string(A.t.lfIHs4),
          children: (0, r.jsxs)(p.DUT, (s = E({}, e), c = c = {
            innerRef: this.ref,
            tabIndex: l,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, m.K)(y.Vl.AddReactionPopoutMouseEntered),
            onFocus: () => (0, m.K)(y.Vl.AddReactionPopoutFocused),
            className: a()(o.reactionBtn, {
              [o.active]: f
            }, t),
            children: [(0, r.jsx)(p.nm2, E({}, u)), n]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
          }), s))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      isReactionPickerActive: false
    }), x(this, "ref", i.createRef()), x(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: r,
        isForumToolbar: i
      } = this.props;
      (0, g.BB)(n.id, r.id, (0, _.jq)(e), i ? g.qN.FORUM_TOOLBAR : g.qN.MESSAGE_INLINE_BUTTON, {
        burst: t
      })
    }), x(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), x(this, "handleAddReactionClick", e => {
      e.stopPropagation(), this.handleReactionPickerToggle()
    }), x(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        channel: n,
        message: i
      } = this.props, l = (0, r.jsx)(h.C, {
        closePopout: t,
        channel: n,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: r,
            isBurst: i
          } = e;
          this.onAddReaction(n, i), r && (i ? o()(t, 150)() : t())
        },
        analyticsOverride: {
          openPopoutType: "message_reaction_emoji_picker"
        },
        messageId: i.id
      });
      return (0, r.jsx)(u.M.Consumer, {
        children: e => {
          let {
            inDialog: t
          } = e;
          return t ? (0, r.jsx)(p.lGe, {
            "aria-label": A.intl.string(A.t["7Xqzdj"]),
            children: l
          }) : l
        }
      })
    })
  }
}