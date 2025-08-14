/** Chunk was on 63141 **/
/** chunk id: 430036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk744061 = require("./744061.jsx"),
  Chunk36311 = require("./36311.jsx"),
  Chunk622822 = require("./622822.js"),
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
  Chunk400023 = require("./400023.jsx"),
  Chunk623292 = require("./623292.js"),
  Chunk807092 = require("./807092.js"),
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
  Chunk442010 = require("./442010.js");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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

function el(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      o = Object.keys(e);
    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let es = Chunk987650.wF.TOP;
class ea extends Chunk73800.Component {
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.draftDidChange(this.props), (this.props.channel !== e.channel || this.props.isTemporarilyActive && !e.isTemporarilyActive) && this.setState({
      focused: true
    })
  }
  componentWillUnmount() {
    Chunk703558.Z.removeChangeListener(this.draftDidChange), Chunk585483.S.unsubscribe(Chunk981631.CkL.TEXTAREA_FOCUS, this.focusInput), Chunk585483.S.unsubscribe(Chunk981631.CkL.TEXTAREA_BLUR, this.blurInput)
  }
  render() {
    let e = this.props,
      {
        channel: t,
        placeholder: n
      } = module,
      r = el(module, ["channel", "placeholder"]),
      {
        focused: o,
        textValue: l,
        contentWarningProps: s,
        richValue: c
      } = this.state,
      u = (0, Chunk255367.jsx)(Chunk481060.yRy, {
        targetElementRef: this.textAreaRef,
        position: "top",
        onRequestClose: () => {
          var e;
          null == Chunk512722 || null == (e = Chunk512722.onCancel) || module.call(Chunk512722), this.setState({
            contentWarningProps: null
          })
        },
        shouldShow: null != Chunk512722,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return a()(null != s, "ConnectedChannelTextArea.render - renderPopout: contentWarningProps cannot be null"), (0, i.jsx)(y.Z, er({
            onClose: t
          }, s))
        },
        children: () => (0, Chunk255367.jsx)(Chunk893718.ZP, eo(er({}, Chunk73800), {
          ref: this.textAreaRef,
          renderAttachButton: this.renderAttachButton,
          channel: exports,
          type: Chunk541716.Ie.OVERLAY,
          onFocus: () => this.setState({
            focused: true
          }),
          onBlur: () => this.setState({
            focused: false
          }),
          placeholder: require,
          textValue: l,
          richValue: Chunk442837,
          onSubmit: this.handleSendMessage,
          onChange: this.handleTextareaChange,
          onKeyDown: this.handleTextareaKeyDown,
          focused: Chunk120356
        }))
      });
    return exports.isPrivate() ? (0, Chunk255367.jsx)(Chunk199649.Z, {
      channel: exports,
      children: Chunk239091
    }, exports.id) : (0, Chunk255367.jsx)(Chunk1397.Z, {
      channel: exports,
      children: Chunk239091
    }, exports.id)
  }
  constructor(e) {
    var t;
    super(e), t = this, ei(this, "textAreaRef", r.createRef()), ei(this, "draftDidChange", function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        i = A.Z.getDraft(e.channel.id, A.d.ChannelMessage);
      n !== i && "" === i && t.setState((0, Z.eK)(i))
    }), ei(this, "handleTextareaKeyDown", e => {
      if (e.which === $.yXg.ARROW_UP && !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && 0 === this.state.textValue.length) {
        e.preventDefault();
        let {
          channel: t
        } = this.props, n = z.Z.getLastEditableMessage(t.id);
        null != n && p.Z.startEditMessageRecord(t.id, n)
      }
    }), ei(this, "handleTextareaChange", (e, t, n) => {
      let {
        channel: {
          id: i
        }
      } = this.props;
      h.Z.changeDraft(i, this.state.textValue, A.d.ChannelMessage), "" !== t ? g.Z.startTyping(i) : g.Z.stopTyping(i), this.setState({
        textValue: t,
        richValue: n
      })
    }), ei(this, "handleSendMessage", e => {
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
        type: j.Ie.OVERLAY,
        content: t,
        channel: n
      }).then(e => {
        let {
          valid: o,
          failureReason: l
        } = e;
        if (!o) return l === $.zYc.SLOWMODE_COOLDOWN ? (F.S.dispatch($.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: false,
          shouldRefocus: true
        }) : {
          shouldClear: false,
          shouldRefocus: false
        };
        let s = p.Z.getSendMessageOptionsForReply(i);
        return (p.Z.sendMessage(n.id, N.ZP.parse(n, t), true, eo(er({}, s), {
          location: ee.dy.OVERLAY
        })), this.setState((0, Z.H2)()), (0, D.A6)(n.id), r) ? (f.Z.deactivateAllRegions(), {
          shouldClear: false,
          shouldRefocus: false
        }) : {
          shouldClear: true,
          shouldRefocus: true
        }
      })
    }), ei(this, "focusInput", () => {
      this.setState({
        focused: true
      })
    }), ei(this, "blurInput", () => {
      this.setState({
        focused: false
      })
    }), ei(this, "renderAttachButton", (e, t) => (0, i.jsx)(C.Z, {
      className: t,
      channel: this.props.channel,
      draftType: A.d.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: e => this.handleTextareaChange(null, e, (0, Z.JM)(e)),
      canOnlyUseTextCommands: e
    })), A.Z.addChangeListener(this.draftDidChange);
    let n = A.Z.getDraft(e.channel.id, A.d.ChannelMessage);
    this.state = eo(er({}, (0, Z.eK)(n)), {
      focused: false,
      contentWarningProps: null
    }), F.S.subscribe($.CkL.TEXTAREA_FOCUS, this.focusInput), F.S.subscribe($.CkL.TEXTAREA_BLUR, this.blurInput)
  }
}
class ec extends Chunk73800.PureComponent {
  componentDidUpdate(e) {
    let {
      channel: t,
      activated: n
    } = this.props;
    (0, X.CR)(e, this.props, this.shouldDisplay), null != t && n && !e.activated && f.Z.track($.rMx.OVERLAY_UNLOCKED, {
      channel_id: t.id,
      channel_type: t.type,
      guild_id: t.guild_id
    })
  }
  componentDidMount() {
    (0, Chunk906037.m3)(this.props, this.shouldDisplay())
  }
  getOpacity() {
    let {
      locked: e,
      activated: t,
      opacity: n,
      isPreviewingInGame: i
    } = this.props;
    return module && !exports || Chunk255367 ? require / 100 : exports || !module ? Math.min(1, (require + 25) / 100) : Chunk518084.wB
  }
  renderContent() {
    let e, {
      channel: t,
      placeholder: n,
      nsfwAgree: o,
      guild: s,
      locked: a,
      activated: c,
      chatKeybind: d,
      pinned: u,
      isPreviewingInGame: h,
      dragging: p,
      pendingReply: f
    } = this.props;
    if (null == exports) return null;
    let g = a || Chunk430742,
      y = !Chunk120356 && null != exports && (0, Chunk622822.aC)(exports),
      _ = !Chunk144144 || Chunk442837;
    return e = Chunk744061 && null != Chunk512722 ? (0, Chunk255367.jsx)(Chunk36311.Z, {
      guild: Chunk512722,
      channelId: exports.id
    }) : (0, Chunk255367.jsx)(Chunk400023.Z, {
      channel: exports,
      className: Chunk442010.messages,
      forceCompact: Chunk239091,
      showNewMessagesBar: !Chunk144144,
      scrollerClassName: Chunk239091 ? Chunk442010.scroller : true,
      showingQuarantineBanner: false
    }, exports.id), (0, Chunk255367.jsx)(Chunk249458.G.Provider, {
      value: {
        disableInteractions: Chunk239091 && a && !Chunk442837,
        disableAnimations: Chunk239091 && Chunk144144 && !Chunk442837
      },
      children: (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
        children: [!a && !Chunk430742 && (0, Chunk255367.jsx)(Chunk25007.Z, {
          channel: exports,
          guild: Chunk512722
        }), (0, Chunk255367.jsx)(Chunk518084.ZP.Background, {
          opacityOverride: a || Chunk430742 ? null : es,
          children: (0, Chunk255367.jsx)("div", {
            className: l()(Chunk442010.messagesContainer, {
              [Chunk442010.isDragging]: Chunk904245,
              [Chunk442010.disableHoverStates]: Chunk239091 && a && !Chunk442837
            }),
            children: module
          })
        }), Chunk744061 ? null : (0, Chunk255367.jsx)("div", {
          children: Chunk655687 ? (0, Chunk255367.jsx)(Chunk518084.ZP.Background, {
            opacityOverride: a || Chunk430742 ? null : es,
            children: (0, Chunk255367.jsxs)("div", {
              className: Chunk442010.footerContent,
              children: [(0, Chunk255367.jsx)(ea, {
                channel: exports,
                placeholder: require,
                isTemporarilyActive: Chunk442837,
                pendingReply: Chunk13245
              }), (0, Chunk255367.jsx)("div", {
                className: Chunk442010.typingWrapper,
                children: (0, Chunk255367.jsx)(Chunk738619.ZP, {
                  channel: exports,
                  className: Chunk442010.typing,
                  isInTextChannel: true
                })
              })]
            })
          }) : (0, Chunk255367.jsx)("div", {
            className: Chunk442010.activateContainer,
            children: (0, Chunk255367.jsx)(Chunk518084.ZP.Background, {
              opacityOverride: Chunk987650.wF.LOWER,
              children: (0, Chunk255367.jsx)("div", {
                className: l()(Chunk442010.activateKeybind, Chunk442010.__invalid_mediumBackgroundOpacity),
                children: null != exports.name && exports.name.length > 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["9TkYMD"], {
                  keybind: Chunk481060,
                  channelName: exports.isMultiUserDM() ? exports.name : "#".concat(exports.name)
                }) : Chunk388032.intl.formatToPlainString(Chunk388032.t["hxz/4O"], {
                  keybind: Chunk481060
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
      isPreviewingInGame: o,
      opacity: s,
      className: a
    } = this.props, c = $.t_t.UNPINNED;
    r ? c = $.t_t.IN_GAME_ACTIVE : n && t || o ? c = $.t_t.IN_GAME_TEXT : n && (c = $.t_t.PINNED);
    let d = t && !r || o,
      u = n && (d || r),
      h = n && r,
      p = n && d && !r,
      f = (0, K.Z)(s);
    return (0, i.jsx)(Q.ZP, {
      className: l()(f, {
        [en.widgetWrapper]: !n,
        [en.widgetWrapperPinned]: n,
        [en.locked]: p,
        [en.inGame]: u,
        [en.inGameActive]: h,
        [en.pinned]: n,
        "overlay-unlocked": !t
      }, a),
      type: c,
      opacity: s,
      children: e
    })
  }
  renderContainedWrapper(e) {
    return (0, i.jsx)("div", {
      className: en.contained,
      children: e
    })
  }
  shouldDisplay() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return null != module.channel
  }
  render() {
    let {
      locked: e,
      channel: t,
      pinned: n,
      isPreviewingInGame: o,
      contained: l
    } = this.props;
    if (null == exports || !this.shouldDisplay()) return null;
    let s = (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk786906.Z, {
        draggableClassName: Chunk442010.draggableStartArea,
        className: Chunk442010.headerDefault,
        channel: exports,
        locked: module,
        pinned: require,
        disableDragIndicator: l,
        isPreviewingInGame: Chunk120356,
        handlePin: this.handlePin,
        onContextMenu: this.handleContextMenu,
        onMouseDown: this.moveDragStart
      }), this.renderContent(), module || Chunk120356 ? null : (0, Chunk255367.jsx)("div", {
        className: Chunk442010.resizeIcon,
        onMouseDown: this.resizeDragStart
      })]
    });
    return l ? this.renderContainedWrapper(Chunk512722) : this.renderWidgetWrapper(Chunk512722)
  }
  constructor(...e) {
    super(...e), ei(this, "handlePin", () => {
      var e, t, n;
      let i = !this.props.pinned;
      f.Z.track($.rMx.OVERLAY_PIN_TOGGLED, {
        pinned: i,
        guild_id: null == (e = this.props.channel) ? true : e.guild_id,
        channel_id: null == (t = this.props.channel) ? true : t.id,
        channel_type: null == (n = this.props.channel) ? true : n.type,
        widget_type: $.Odu.TEXT
      }), f.Z.setPinChat(i)
    }), ei(this, "handleContextMenu", e => {
      let {
        channel: t,
        user: r
      } = this.props;
      null != t && null != r && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("57789"), n.e("56826"), n.e("69497")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, eo(er({}, n), {
          user: r,
          channelSelected: true,
          channel: t
        }))
      })
    }), ei(this, "moveDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(w.B.MOVE, e.clientX, e.clientY)
    }), ei(this, "resizeDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(w.B.RESIZE_SOUTH_EAST, e.clientX, e.clientY)
    })
  }
}

function ed(e) {
  var {
    contained: t = false
  } = e, n = el(e, ["contained"]);
  let r = (0, c.e7)([W.Z], () => W.Z.getGuildId()),
    o = (0, c.e7)([V.Z], () => V.Z.getChannelId(r)),
    l = (0, c.e7)([R.Z], () => R.Z.getChannel(o)),
    s = (0, c.e7)([B.ZP], () => B.ZP.getOverlayChatKeybind()),
    a = null != s ? (0, Y.BB)(s.shortcut, true) : "]",
    [d, u, h] = (0, c.Wu)([G.default], () => [G.default.getTextWidgetOpacity(), G.default.getActiveRegions(), !t && G.default.isPreviewingInGame()]),
    p = (0, c.e7)([L.Z], () => L.Z.getGuild(r)),
    f = (0, c.e7)([M.Z], () => null != r && M.Z.didAgree(r)),
    g = null != l && l.isPrivate() ? l.getRecipientId() : null,
    m = (0, c.e7)([k.Z], () => null != o ? k.Z.getPendingReply(o) : true),
    y = (0, c.e7)([U.default], () => null != g ? U.default.getUser(g) : null),
    {
      placeholder: O
    } = (0, _.Z)({
      channel: l
    });
  return null != l && null != p && $.TPd.GUILD_THREADS_ONLY.has(l.type) ? (0, i.jsx)(b.Z, {}) : (0, i.jsx)(ec, er({
    guild: p,
    channel: l,
    user: y,
    opacity: d,
    nsfwAgree: f,
    chatKeybind: a,
    activated: u.has($.O0n.TEXT_WIDGET),
    isPreviewingInGame: h,
    pendingReply: m,
    contained: t,
    placeholder: O,
    widget: $.Odu.TEXT
  }, n))
}