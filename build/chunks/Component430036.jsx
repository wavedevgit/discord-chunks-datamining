/** Chunk was on 63141 **/
/** chunk id: 430036, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk430742 = require("./430742.js"),
  Chunk904245 = require("./904245.js"),
  Chunk13245 = require("./13245.js"),
  Chunk144144 = require("./144144.js"),
  Chunk738619 = require("./738619.jsx"),
  Chunk655687 = require("./655687.js"),
  Chunk823748 = require("./823748.jsx"),
  Chunk25007 = require("./25007.jsx"),
  Chunk199649 = require("./199649.jsx"),
  Chunk1397 = require("./1397.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk974251 = require("./974251.jsx"),
  Chunk893718 = require("./893718.jsx"),
  Chunk249458 = require("./249458.js"),
  Chunk552062 = require("./552062.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk105457 = require("./105457.jsx"),
  Chunk400023 = require("./400023.jsx"),
  Chunk623292 = require("./623292.js"),
  Chunk807092 = require("./807092.js"),
  Chunk271172 = require("./271172.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk585483 = require("./585483.js"),
  Chunk838440 = require("./838440.js"),
  Chunk13140 = require("./13140.js"),
  Chunk519591 = require("./519591.js"),
  Chunk906037 = require("./906037.js"),
  Chunk786906 = require("./786906.jsx"),
  Chunk518084 = require("./518084.jsx"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749570 = require("./749570.js");

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
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      s = Object.keys(e);
    for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let eo = Chunk987650.wF.TOP;
class el extends Chunk473749.Component {
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
      focused: true
    })
  }
  componentWillUnmount() {
    R.Z.removeChangeListener(this.draftDidChange), B.S.unsubscribe(Q.CkL.TEXTAREA_FOCUS, this.focusInput), B.S.unsubscribe(Q.CkL.TEXTAREA_BLUR, this.blurInput)
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
        textValue: o,
        contentWarningProps: l,
        richValue: c
      } = this.state,
      u = (0, i.jsx)(d.yRy, {
        targetElementRef: this.textAreaRef,
        position: "top",
        onRequestClose: () => {
          var e;
          null == l || null == (e = l.onCancel) || e.call(l), this.setState({
            contentWarningProps: null
          })
        },
        shouldShow: null != l,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return a()(null != l, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(P.Z, ei({
            onClose: t
          }, l))
        },
        children: () => (0, i.jsx)(j.ZP, er(ei({}, r), {
          ref: this.textAreaRef,
          renderAttachButton: this.renderAttachButton,
          channel: t,
          type: x.Ie.OVERLAY,
          onFocus: () => this.setState({
            focused: true
          }),
          onBlur: () => this.setState({
            focused: false
          }),
          placeholder: n,
          textValue: o,
          richValue: c,
          onSubmit: this.handleSendMessage,
          onChange: this.handleTextareaChange,
          onKeyDown: this.handleTextareaKeyDown,
          focused: s
        }))
      });
    return t.isPrivate() ? (0, i.jsx)(O.Z, {
      channel: t,
      children: u
    }, t.id) : (0, i.jsx)(E.Z, {
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
        i = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
      n !== i && "" === i && t.setState((0, S.eK)(i))
    }), en(this, "handleTextareaKeyDown", e => {
      if (e.which === Q.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
        e.preventDefault();
        let {
          channel: t
        } = this.props, n = M.Z.getLastEditableMessage(t.id);
        null != n && f.Z.startEditMessageRecord(t.id, n)
      }
    }), en(this, "handleTextareaChange", (e, t, n) => {
      let {
        channel: {
          id: i
        }
      } = this.props;
      h.Z.changeDraft(i, this.state.textValue, R.d.ChannelMessage), "" !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i), this.setState({
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
      }) : (0, H.v)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: x.Ie.OVERLAY,
        content: t,
        channel: n
      }).then(e => {
        let {
          valid: s,
          failureReason: o
        } = e;
        if (!s) return o === Q.zYc.SLOWMODE_COOLDOWN ? (B.S.dispatch(Q.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: false,
          shouldRefocus: true
        }) : {
          shouldClear: false,
          shouldRefocus: false
        };
        let l = f.Z.getSendMessageOptionsForReply(i);
        return (f.Z.sendMessage(n.id, I.ZP.parse(n, t), true, er(ei({}, l), {
          location: $.dy.OVERLAY
        })), this.setState((0, S.H2)()), (0, N.A6)(n.id), r) ? (p.Z.deactivateAllRegions(), {
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
    }), en(this, "renderAttachButton", (e, t) => (0, i.jsx)(Z.Z, {
      className: t,
      channel: this.props.channel,
      draftType: R.d.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: e => this.handleTextareaChange(null, e, (0, S.JM)(e)),
      canOnlyUseTextCommands: e,
      chatInputType: x.Ie.OVERLAY
    })), R.Z.addChangeListener(this.draftDidChange);
    let n = R.Z.getDraft(e.channel.id, R.d.ChannelMessage);
    this.state = er(ei({}, (0, S.eK)(n)), {
      focused: false,
      contentWarningProps: null
    }), B.S.subscribe(Q.CkL.TEXTAREA_FOCUS, this.focusInput), B.S.subscribe(Q.CkL.TEXTAREA_BLUR, this.blurInput)
  }
}
class ea extends Chunk473749.PureComponent {
  componentDidUpdate(e) {
    let {
      channel: t,
      activated: n
    } = this.props;
    (0, K.CR)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && p.Z.track(Q.rMx.OVERLAY_UNLOCKED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }
  componentDidMount() {
    (0, K.m3)(this.props, this.shouldDisplay())
  }
  getOpacity() {
    let {
      locked: e,
      activated: t,
      opacity: n,
      isPreviewingInGame: i
    } = this.props;
    return e && !t || i ? n / 100 : t || !e ? Math.min(1, (n + 25) / 100) : J.wB
  }
  renderContent() {
    let e, {
      channel: t,
      placeholder: n,
      nsfwAgree: s,
      guild: l,
      locked: a,
      activated: c,
      chatKeybind: d,
      pinned: u,
      isPreviewingInGame: h,
      dragging: f,
      pendingReply: p
    } = this.props;
    if (null == t) return null;
    let g = a || h,
      b = !s && null != t && t.isNSFW(),
      y = !g || c;
    return e = b && null != l ? (0, i.jsx)(D.Z, {
      guild: l,
      channelId: t.id
    }) : (0, i.jsx)(w.Z, {
      channel: t,
      className: et.messages,
      forceCompact: u,
      showNewMessagesBar: !g,
      scrollerClassName: u ? et.scroller : true,
      showingQuarantineBanner: false
    }, t.id), (0, i.jsx)(_.G.Provider, {
      value: {
        disableInteractions: u && a && !c,
        disableAnimations: u && g && !c
      },
      children: (0, i.jsxs)(r.Fragment, {
        children: [!a && !h && (0, i.jsx)(v.Z, {
          channel: t,
          guild: l
        }), (0, i.jsx)(J.ZP.Background, {
          opacityOverride: a || h ? null : eo,
          children: (0, i.jsx)("div", {
            className: o()(et.messagesContainer, {
              [et.isDragging]: f,
              [et.disableHoverStates]: u && a && !c
            }),
            children: e
          })
        }), b ? null : (0, i.jsx)("div", {
          children: y ? (0, i.jsx)(J.ZP.Background, {
            opacityOverride: a || h ? null : eo,
            children: (0, i.jsxs)("div", {
              className: et.footerContent,
              children: [(0, i.jsx)(el, {
                channel: t,
                placeholder: n,
                isTemporarilyActive: c,
                pendingReply: p
              }), (0, i.jsx)("div", {
                className: et.typingWrapper,
                children: (0, i.jsx)(m.ZP, {
                  channel: t,
                  className: et.typing,
                  isInTextChannel: true
                })
              })]
            })
          }) : (0, i.jsx)("div", {
            className: et.activateContainer,
            children: (0, i.jsx)(J.ZP.Background, {
              opacityOverride: q.wF.LOWER,
              children: (0, i.jsx)("div", {
                className: o()(et.activateKeybind, et.__invalid_mediumBackgroundOpacity),
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
      opacity: l,
      className: a
    } = this.props, c = Q.t_t.UNPINNED;
    r ? c = Q.t_t.IN_GAME_ACTIVE : n && t || s ? c = Q.t_t.IN_GAME_TEXT : n && (c = Q.t_t.PINNED);
    let d = t && !r || s,
      u = n && (d || r),
      h = n && r,
      f = n && d && !r,
      p = (0, Y.Z)(l);
    return (0, i.jsx)(J.ZP, {
      className: o()(p, {
        [et.widgetWrapper]: !n,
        [et.widgetWrapperPinned]: n,
        [et.locked]: f,
        [et.inGame]: u,
        [et.inGameActive]: h,
        [et.pinned]: n,
        "overlay-unlocked": !t
      }, a),
      type: c,
      opacity: l,
      children: e
    })
  }
  renderContainedWrapper(e) {
    return (0, i.jsx)("div", {
      className: et.contained,
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
      contained: o
    } = this.props;
    if (null == t || !this.shouldDisplay()) return null;
    let l = (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(X.Z, {
        draggableClassName: et.draggableStartArea,
        className: et.headerDefault,
        channel: t,
        locked: e,
        pinned: n,
        disableDragIndicator: o,
        isPreviewingInGame: s,
        handlePin: this.handlePin,
        onContextMenu: this.handleContextMenu,
        onMouseDown: this.moveDragStart
      }), this.renderContent(), e || s ? null : (0, i.jsx)("div", {
        className: et.resizeIcon,
        onMouseDown: this.resizeDragStart
      })]
    });
    return o ? this.renderContainedWrapper(l) : this.renderWidgetWrapper(l)
  }
  constructor(...e) {
    super(...e), en(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      p.Z.track(Q.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: Q.Odu.TEXT
      }), p.Z.setPinChat(i)
    }), en(this, "handleContextMenu", e => {
      let {
        channel: t,
        user: r
      } = this.props;
      null != t && null != r && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("4040"), n.e("56826"), n.e("93896")]).then(n.bind(n, 131404));
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
      t(C.B.MOVE, e.clientX, e.clientY)
    }), en(this, "resizeDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(C.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
    })
  }
}

function ec(e) {
  var {
    contained: t = false
  } = e, n = es(e, ["contained"]);
  let r = (0, c.e7)([V.Z], () => V.Z.getGuildId()),
    s = (0, c.e7)([z.Z], () => z.Z.getChannelId(r)),
    o = (0, c.e7)([k.Z], () => k.Z.getChannel(s)),
    l = (0, c.e7)([W.ZP], () => W.ZP.getOverlayChatKeybind()),
    a = null != l ? (0, F.BB)(l.shortcut, true) : "]",
    [d, u, h] = (0, c.Wu)([G.default], () => [G.default.getTextWidgetOpacity(), G.default.getActiveRegions(), !t && G.default.isPreviewingInGame()]),
    f = (0, c.e7)([L.Z], () => L.Z.getGuild(r)),
    p = (0, c.e7)([A.Z], () => null != r && A.Z.didAgree(r)),
    g = null != o && o.isPrivate() ? o.getRecipientId() : null,
    m = (0, c.e7)([T.Z], () => null != s ? T.Z.getPendingReply(s) : true),
    v = (0, c.e7)([U.default], () => null != g ? U.default.getUser(g) : null),
    {
      placeholder: O
    } = (0, b.Z)({
      channel: o
    });
  return null != o && null != f && Q.TPd.GUILD_THREADS_ONLY.has(o.type) ? (0, i.jsx)(y.Z, {}) : (0, i.jsx)(ea, ei({
    guild: f,
    channel: o,
    user: v,
    opacity: d,
    nsfwAgree: p,
    chatKeybind: a,
    activated: u.has(Q.O0n.TEXT_WIDGET),
    isPreviewingInGame: h,
    pendingReply: m,
    contained: t,
    placeholder: O,
    widget: Q.Odu.TEXT
  }, n))
}