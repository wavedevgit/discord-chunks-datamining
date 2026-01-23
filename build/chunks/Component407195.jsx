/** Chunk was on 84018 **/
/** chunk id: 407195, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk465532 = require("./465532.js"),
  Chunk843472 = require("./843472.js"),
  Chunk684013 = require("./684013.js"),
  Chunk414798 = require("./414798.js"),
  Chunk147192 = require("./147192.jsx"),
  Chunk480870 = require("./480870.js"),
  Chunk264140 = require("./264140.jsx"),
  Chunk387462 = require("./387462.jsx"),
  Chunk667285 = require("./667285.jsx"),
  Chunk920437 = require("./920437.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk20737 = require("./20737.jsx"),
  Chunk133343 = require("./133343.jsx"),
  Chunk692051 = require("./692051.js"),
  Chunk685603 = require("./685603.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk926262 = require("./926262.jsx"),
  Chunk371648 = require("./371648.jsx"),
  Chunk118517 = require("./118517.js"),
  Chunk853145 = require("./853145.js"),
  Chunk522556 = require("./522556.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk517019 = require("./517019.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk203982 = require("./203982.js"),
  Chunk460350 = require("./460350.js"),
  Chunk350535 = require("./350535.js"),
  Chunk401955 = require("./401955.js"),
  Chunk799808 = require("./799808.js"),
  Chunk683484 = require("./683484.jsx"),
  Chunk855790 = require("./855790.jsx"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520555 = require("./520555.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function es(e, t) {
  if (null == e) return {};
  var n, i, r, s = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s
  }
  if (s = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.getOwnPropertyNames(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
      return r
    }(e, t), Object.getOwnPropertySymbols)
    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
  return s
}
let el = Chunk672396.Li.TOP;
class eo extends Chunk64700.Component {
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
      focused: true
    })
  }
  componentWillUnmount() {
    k.A.removeChangeListener(this.draftDidChange), W._.unsubscribe(q.jej.TEXTAREA_FOCUS, this.focusInput), W._.unsubscribe(q.jej.TEXTAREA_BLUR, this.blurInput)
  }
  render() {
    let e = this.props,
      {
        channel: t,
        placeholder: n
      } = e,
      r = es(e, ["channel", "placeholder"]),
      {
        focused: s,
        textValue: l,
        contentWarningProps: o,
        richValue: c
      } = this.state,
      u = (0, i.jsx)(d.YNO, {
        targetElementRef: this.textAreaRef,
        position: "top",
        onRequestClose: () => {
          var e;
          null == o || null == (e = o.onCancel) || e.call(o), this.setState({
            contentWarningProps: null
          })
        },
        shouldShow: null != o,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return a()(null != o, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(w.A, ei({
            onClose: t
          }, o))
        },
        children: () => (0, i.jsx)(S.Ay, er(ei({}, r), {
          ref: this.textAreaRef,
          renderAttachButton: this.renderAttachButton,
          channel: t,
          type: v.oU.OVERLAY,
          onFocus: () => this.setState({
            focused: true
          }),
          onBlur: () => this.setState({
            focused: false
          }),
          placeholder: n,
          textValue: l,
          richValue: c,
          onSubmit: this.handleSendMessage,
          onChange: this.handleTextareaChange,
          onKeyDown: this.handleTextareaKeyDown,
          focused: s
        }))
      });
    return t.isPrivate() ? (0, i.jsx)(O.A, {
      channel: t,
      children: u
    }, t.id) : (0, i.jsx)(_.A, {
      channel: t,
      children: u
    }, t.id)
  }
  constructor(e) {
    var t;
    super(e), t = this, en(this, "textAreaRef", r.createRef()), en(this, "draftDidChange", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        i = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
      n !== i && "" === i && t.setState((0, E.ur)(i))
    }), en(this, "handleTextareaKeyDown", e => {
      if (e.which === q.Ks6.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
        e.preventDefault();
        let {
          channel: t
        } = this.props, n = G.A.getLastEditableMessage(t.id);
        null != n && p.A.startEditMessageRecord(t.id, n)
      }
    }), en(this, "handleTextareaChange", (e, t, n) => {
      let {
        channel: {
          id: i
        }
      } = this.props;
      h.A.changeDraft(i, this.state.textValue, k.C.ChannelMessage), "" !== t ? g.A.startTyping(i) : g.A.stopTyping(i), this.setState({
        textValue: t,
        richValue: n
      })
    }), en(this, "handleSendMessage", e => {
      let {
        value: t
      } = e, {
        channel: n,
        pendingReply: i,
        isTemporarilyActive: r
      } = this.props;
      return 0 === t.length ? Promise.resolve({
        shouldClear: false,
        shouldRefocus: true
      }) : (0, B.i)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: v.oU.OVERLAY,
        content: t,
        channel: n
      }).then(e => {
        let {
          valid: s,
          failureReason: l
        } = e;
        if (!s) return l === q.X8x.SLOWMODE_COOLDOWN ? (W._.dispatch(q.jej.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: false,
          shouldRefocus: true
        }) : {
          shouldClear: false,
          shouldRefocus: false
        };
        let o = p.A.getSendMessageOptionsForReply(i);
        return (p.A.sendMessage(n.id, C.Ay.parse(n, t), true, er(ei({}, o), {
          location: $.Hx.OVERLAY
        })), this.setState((0, E.N3)()), (0, P.Jx)(n.id), r) ? (f.A.deactivateAllRegions(), {
          shouldClear: false,
          shouldRefocus: false
        }) : {
          shouldClear: true,
          shouldRefocus: true
        }
      })
    }), en(this, "focusInput", () => {
      this.setState({
        focused: true
      })
    }), en(this, "blurInput", () => {
      this.setState({
        focused: false
      })
    }), en(this, "renderAttachButton", (e, t) => (0, i.jsx)(x.A, {
      className: t,
      channel: this.props.channel,
      draftType: k.C.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: e => this.handleTextareaChange(null, e, (0, E.x7)(e)),
      canOnlyUseTextCommands: e,
      chatInputType: v.oU.OVERLAY
    })), k.A.addChangeListener(this.draftDidChange);
    const n = k.A.getDraft(e.channel.id, k.C.ChannelMessage);
    this.state = er(ei({}, (0, E.ur)(n)), {
      focused: false,
      contentWarningProps: null
    }), W._.subscribe(q.jej.TEXTAREA_FOCUS, this.focusInput), W._.subscribe(q.jej.TEXTAREA_BLUR, this.blurInput)
  }
}
class ea extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    let {
      channel: t,
      activated: n
    } = this.props;
    (0, Z.Mw)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && f.A.track(q.HAw.OVERLAY_UNLOCKED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }
  componentDidMount() {
    (0, Z.j_)(this.props, this.shouldDisplay())
  }
  getOpacity() {
    let {
      locked: e,
      activated: t,
      opacity: n,
      isPreviewingInGame: i
    } = this.props;
    return e && !t || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : X.q0
  }
  renderContent() {
    let e, {
      channel: t,
      placeholder: n,
      nsfwAgree: s,
      guild: o,
      locked: a,
      activated: c,
      chatKeybind: d,
      pinned: u,
      isPreviewingInGame: h,
      dragging: p,
      pendingReply: f
    } = this.props;
    if (null == t) return null;
    let g = a || h,
      A = !s && null != t && t.isNSFW(),
      m = !g || c;
    return e = A && null != o ? (0, i.jsx)(D.A, {
      guild: o,
      channelId: t.id
    }) : (0, i.jsx)(N.A, {
      channel: t,
      className: et.Wk,
      forceCompact: u,
      showNewMessagesBar: !g,
      scrollerClassName: u ? et.XG : true,
      showingQuarantineBanner: false
    }, t.id), (0, i.jsx)(j.Y.Provider, {
      value: {
        disableInteractions: u && a && !c,
        disableAnimations: u && g && !c
      },
      children: (0, i.jsxs)(r.Fragment, {
        children: [!a && !h && (0, i.jsx)(b.A, {
          channel: t,
          guild: o
        }), (0, i.jsx)(X.Ay.Background, {
          opacityOverride: a || h ? null : el,
          children: (0, i.jsx)("div", {
            className: l()(et.MJ, {
              [et.Id]: p,
              [et.$p]: u && a && !c
            }),
            children: e
          })
        }), A ? null : (0, i.jsx)("div", {
          children: m ? (0, i.jsx)(X.Ay.Background, {
            opacityOverride: a || h ? null : el,
            children: (0, i.jsxs)("div", {
              className: et.z8,
              children: [(0, i.jsx)(eo, {
                channel: t,
                placeholder: n,
                isTemporarilyActive: c,
                pendingReply: f
              }), (0, i.jsx)("div", {
                className: et.V_,
                children: (0, i.jsx)(y.Ay, {
                  channel: t,
                  className: et.IW,
                  isInTextChannel: true
                })
              })]
            })
          }) : (0, i.jsx)("div", {
            className: et.Zl,
            children: (0, i.jsx)(X.Ay.Background, {
              opacityOverride: Q.Li.LOWER,
              children: (0, i.jsx)("div", {
                className: l()(et.ew, et.__invalid_mediumBackgroundOpacity),
                children: null != t.name && t.name.length > 0 ? ee.intl.formatToPlainString(ee.t["9TkYMO"], {
                  keybind: d,
                  channelName: t.isMultiUserDM() ? t.name : "#".concat(t.name)
                }) : ee.intl.formatToPlainString(ee.t["hxz/4E"], {
                  keybind: d
                })
              })
            })
          })
        })]
      })
    })
  }
  renderWidgetWrapper(e) {
    let {
      locked: t,
      pinned: n,
      activated: r,
      isPreviewingInGame: s,
      opacity: o,
      className: a
    } = this.props, c = q.UVF.UNPINNED;
    r ? c = q.UVF.IN_GAME_ACTIVE : n && t || s ? c = q.UVF.IN_GAME_TEXT : n && (c = q.UVF.PINNED);
    let d = t && !r || s,
      u = n && (d || r),
      h = n && r,
      p = n && d && !r,
      f = (0, F.A)(o);
    return (0, i.jsx)(X.Ay, {
      className: l()(f, {
        [et.yw]: !n,
        [et.CP]: n,
        [et.xt]: p,
        [et.iM]: u,
        [et.ip]: h,
        [et.dp]: n,
        "overlay-unlocked": !t
      }, a),
      type: c,
      opacity: o,
      children: e
    })
  }
  renderContainedWrapper(e) {
    return (0, i.jsx)("div", {
      className: et.k_,
      children: e
    })
  }
  shouldDisplay() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return null != e.channel
  }
  render() {
    let {
      locked: e,
      channel: t,
      pinned: n,
      isPreviewingInGame: s,
      contained: l
    } = this.props;
    if (null == t || !this.shouldDisplay()) return null;
    let o = (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(J.A, {
        draggableClassName: et.bl,
        className: et.fB,
        channel: t,
        locked: e,
        pinned: n,
        disableDragIndicator: l,
        isPreviewingInGame: s,
        handlePin: this.handlePin,
        onContextMenu: this.handleContextMenu,
        onMouseDown: this.moveDragStart
      }), this.renderContent(), e || s ? null : (0, i.jsx)("div", {
        className: et.cB,
        onMouseDown: this.resizeDragStart
      })]
    });
    return l ? this.renderContainedWrapper(o) : this.renderWidgetWrapper(o)
  }
  constructor(...e) {
    super(...e), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      f.A.track(q.HAw.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: q.uss.TEXT
      }), f.A.setPinChat(i)
    }), en(this, "handleContextMenu", e => {
      let {
        channel: t,
        user: r
      } = this.props;
      null != t && null != r && (0, u.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("39778"), n.e("54266")]).then(n.bind(n, 385913));
        return n => (0, i.jsx)(e, er(ei({}, n), {
          user: r,
          channelSelected: true,
          channel: t
        }))
      })
    }), en(this, "moveDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(I.P.MOVE, e.clientX, e.clientY)
    }), en(this, "resizeDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(I.P.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
    })
  }
}

function ec(e) {
  let {
    contained: t = false
  } = e, n = es(e, ["contained"]), r = (0, c.bG)([U.A], () => U.A.getGuildId()), s = (0, c.bG)([V.A], () => V.A.getChannelId(r)), l = (0, c.bG)([R.A], () => R.A.getChannel(s)), o = (0, c.bG)([K.Ay], () => K.Ay.getOverlayChatKeybind()), a = null != o ? (0, Y.dI)(o.shortcut, true) : "]", [d, u, h] = (0, c.yK)([H.default], () => [H.default.getTextWidgetOpacity(), H.default.getActiveRegions(), !t && H.default.isPreviewingInGame()]), p = (0, c.bG)([M.A], () => M.A.getGuild(r)), f = (0, c.bG)([L.A], () => null != r && L.A.didAgree(r)), g = null != l && l.isPrivate() ? l.getRecipientId() : null, y = (0, c.bG)([T.A], () => null != s ? T.A.getPendingReply(s) : true), b = (0, c.bG)([z.default], () => null != g ? z.default.getUser(g) : null), {
    placeholder: O
  } = (0, A.A)({
    channel: l
  });
  return null != l && null != p && q.kvI.GUILD_THREADS_ONLY.has(l.type) ? (0, i.jsx)(m.A, {}) : (0, i.jsx)(ea, ei({
    guild: p,
    channel: l,
    user: b,
    opacity: d,
    nsfwAgree: f,
    chatKeybind: a,
    activated: u.has(q.ajI.TEXT_WIDGET),
    isPreviewingInGame: h,
    pendingReply: y,
    contained: t,
    placeholder: O,
    widget: q.uss.TEXT
  }, n))
}