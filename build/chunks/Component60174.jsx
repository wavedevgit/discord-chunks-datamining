/** Chunk was on 91173 **/
/** chunk id: 60174, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => N
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk507274 = require("./507274.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk255963 = require("./255963.js"),
  Chunk387188 = require("./387188.jsx"),
  Chunk466794 = require("./466794.jsx"),
  Chunk659215 = require("./659215.jsx"),
  Chunk222677 = require("./222677.js"),
  Chunk995774 = require("./995774.js"),
  Chunk931651 = require("./931651.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk630388 = require("./630388.js"),
  Chunk74538 = require("./74538.js"),
  Chunk566006 = require("./566006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
class N extends Chunk647438.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: i,
      useChatFontScaling: l,
      tabIndex: a = 0
    } = this.props, {
      isReactionPickerActive: s
    } = this.state, c = exports.state === Chunk981631.yb.SENDING, f = module === Chunk566006.O.BURST;
    if (Chunk507274 || (0, Chunk630388.yE)(exports.flags, Chunk981631.iLy.EPHEMERAL)) return null;
    let g = Chunk594174.default.getCurrentUser(),
      _ = (0, Chunk74538.I5)(Chunk222677),
      h = Chunk659215 ? Chunk388032.intl.string(Chunk388032.t.Kfcszs) : Chunk388032.intl.string(Chunk388032.t.lfIHs7);
    !Chunk995774 && Chunk659215 && (h = (0, Chunk951288.jsx)(Chunk466794.X, {
      tooltipText: Chunk388032.intl.string(Chunk388032.t.Kfcszs)
    }));
    let x = Chunk120356 ? Chunk893973 : Chunk127947,
      T = {
        size: "sm",
        color: "currentColor",
        className: Chunk474936.icon
      };
    return exports.type === Chunk981631.uaV.EMOJI_ADDED && 0 === exports.reactions.length ? (0, Chunk951288.jsx)(Chunk387188.e, {
      message: exports,
      className: o()(Chunk474936.reactionBtn, require)
    }) : (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: this.ref,
      shouldShow: s,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, t) => {
        var l, s;
        let {
          isShown: c
        } = t;
        return (0, r.jsx)(u.DY3, {
          text: h,
          color: u.FGA.PRIMARY,
          "aria-label": f ? j.intl.string(j.t.Kfcszs) : j.intl.string(j.t.lfIHs7),
          tooltipClassName: x.__invalid_addReactionTooltip,
          children: (0, r.jsxs)(u.P3F, (l = P({}, e), s = s = {
            innerRef: this.ref,
            tabIndex: a,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, d.x)(y.qR.AddReactionPopoutMouseEntered),
            onFocus: () => (0, d.x)(y.qR.AddReactionPopoutFocused),
            className: o()(x.reactionBtn, {
              [x.active]: c
            }, n),
            children: [f ? (0, r.jsx)(u.Pt5, P({}, T)) : (0, r.jsx)(u.EO4, P({}, T)), i]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
          }), l))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      isReactionPickerActive: false
    }), T(this, "ref", i.createRef()), T(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: r,
        isForumToolbar: i
      } = this.props;
      (0, g.rU)(n.id, r.id, (0, _.g1)(e), i ? g.TW.FORUM_TOOLBAR : g.TW.MESSAGE_INLINE_BUTTON, {
        burst: t
      })
    }), T(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), T(this, "handleAddReactionClick", e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let r = b.default.getCurrentUser();
      t !== O.O.BURST || (0, C.I5)(r) || (0, f.m)({
        analytics: {
          type: x.cd.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
          section: (0, _.s4)(n),
          object: v.qAy.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }), T(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: i,
        message: l
      } = this.props, o = P({
        openPopoutType: "message_reaction_emoji_picker"
      }, n === O.O.BURST && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != i.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
        section: (0, _.s4)(i),
        object: v.qAy.REACTION_RAIL
      }), a = (0, r.jsx)(h.$, {
        closePopout: t,
        channel: i,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: r,
            isBurst: i
          } = e;
          this.onAddReaction(n, i), r && (i ? s()(t, 150)() : t())
        },
        analyticsOverride: o,
        messageId: l.id
      });
      return (0, r.jsx)(c.M.Consumer, {
        children: e => {
          let {
            inDialog: t
          } = e;
          return t ? (0, r.jsx)(u.VqE, {
            "aria-label": j.intl.string(j.t["7Xqzdn"]),
            children: a
          }) : a
        }
      })
    })
  }
}