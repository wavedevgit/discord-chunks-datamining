/** Chunk was on web.js **/
/** chunk id: 60174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => D
}), require("./997841.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk954955 = require("./954955.js"),
  l = require.n(Chunk954955),
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

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class D extends Chunk647438.Component {
  render() {
    let {
      type: e,
      message: t,
      className: n,
      children: i,
      useChatFontScaling: a,
      tabIndex: s = 0
    } = this.props, {
      isReactionPickerActive: l
    } = this.state, c = exports.state === Chunk981631.yb.SENDING, p = module === Chunk566006.O.BURST;
    if (Chunk507274 || (0, Chunk630388.yE)(exports.flags, Chunk981631.iLy.EPHEMERAL)) return null;
    let h = Chunk594174.default.getCurrentUser(),
      m = (0, Chunk74538.I5)(Chunk222677),
      g = Chunk659215 ? Chunk388032.intl.string(Chunk388032.t.Kfcszs) : Chunk388032.intl.string(Chunk388032.t.lfIHs7);
    !Chunk995774 && Chunk659215 && (g = (0, Chunk951288.jsx)(Chunk466794.X, {
      tooltipText: Chunk388032.intl.string(Chunk388032.t.Kfcszs)
    }));
    let T = Chunk120356 ? Chunk893973 : Chunk127947,
      N = {
        size: "sm",
        color: "currentColor",
        className: Chunk474936.icon
      };
    return exports.type === Chunk981631.uaV.EMOJI_ADDED && 0 === exports.reactions.length ? (0, Chunk951288.jsx)(Chunk387188.e, {
      message: exports,
      className: o()(Chunk474936.reactionBtn, require)
    }) : (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: this.ref,
      shouldShow: l,
      onRequestClose: this.handleReactionPickerToggle,
      renderPopout: this.renderReactionPopout,
      position: "right",
      children: (e, t) => {
        let {
          isShown: a
        } = t;
        return (0, r.jsx)(u.DY3, {
          text: g,
          color: u.FGA.PRIMARY,
          "aria-label": p ? S.intl.string(S.t.Kfcszs) : S.intl.string(S.t.lfIHs7),
          tooltipClassName: T.__invalid_addReactionTooltip,
          children: (0, r.jsxs)(u.P3F, w(R({}, e), {
            innerRef: this.ref,
            tabIndex: s,
            onClick: e => {
              this.handleAddReactionClick(e)
            },
            onMouseEnter: () => (0, d.x)(I.qR.AddReactionPopoutMouseEntered),
            onFocus: () => (0, d.x)(I.qR.AddReactionPopoutFocused),
            className: o()(T.reactionBtn, {
              [T.active]: a
            }, n),
            children: [p ? (0, r.jsx)(u.Pt5, R({}, N)) : (0, r.jsx)(u.EO4, R({}, N)), i]
          }))
        })
      }
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      isReactionPickerActive: false
    }), N(this, "ref", i.createRef()), N(this, "onAddReaction", (e, t) => {
      if (null == e) return;
      let {
        channel: n,
        message: r,
        isForumToolbar: i
      } = this.props;
      (0, h.rU)(n.id, r.id, (0, m.g1)(e), i ? h.TW.FORUM_TOOLBAR : h.TW.MESSAGE_INLINE_BUTTON, {
        burst: t
      })
    }), N(this, "handleReactionPickerToggle", () => {
      this.setState(e => ({
        isReactionPickerActive: !e.isReactionPickerActive
      }))
    }), N(this, "handleAddReactionClick", e => {
      let {
        type: t,
        channel: n
      } = this.props;
      e.stopPropagation();
      let r = E.default.getCurrentUser();
      t !== O.O.BURST || (0, y.I5)(r) || (0, p.m)({
        analytics: {
          type: T.cd.BURST_REACTION_UPSELL,
          page: null != n.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
          section: (0, m.s4)(n),
          object: v.qAy.INLINE_REACTION_PICKER_UPSELL
        }
      }), this.handleReactionPickerToggle()
    }), N(this, "renderReactionPopout", e => {
      let {
        closePopout: t
      } = e, {
        type: n,
        channel: i,
        message: a
      } = this.props, o = R({
        openPopoutType: "message_reaction_emoji_picker"
      }, n === O.O.BURST && {
        openPopoutType: "message_super_reaction_emoji_picker",
        page: null != i.getGuildId() ? v.ZY5.GUILD_CHANNEL : v.ZY5.DM_CHANNEL,
        section: (0, m.s4)(i),
        object: v.qAy.REACTION_RAIL
      }), s = (0, r.jsx)(g.$, {
        closePopout: t,
        channel: i,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: r,
            isBurst: i
          } = e;
          this.onAddReaction(n, i), r && (i ? l()(t, 150)() : t())
        },
        analyticsOverride: o,
        messageId: a.id
      });
      return (0, r.jsx)(c.M.Consumer, {
        children: e => {
          let {
            inDialog: t
          } = e;
          return t ? (0, r.jsx)(u.VqE, {
            "aria-label": S.intl.string(S.t["7Xqzdn"]),
            children: s
          }) : s
        }
      })
    })
  }
}