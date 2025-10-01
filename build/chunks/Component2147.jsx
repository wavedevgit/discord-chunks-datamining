/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eI,
  Z: () => eL
}), require("./997841.js"), require("./953529.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk771340 = require("./771340.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk852860 = require("./852860.jsx"),
  Chunk129865 = require("./129865.js"),
  Chunk902840 = require("./902840.js"),
  Chunk622822 = require("./622822.js"),
  Chunk933557 = require("./933557.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk87432 = require("./87432.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk906411 = require("./906411.js"),
  Chunk633302 = require("./633302.js"),
  Chunk109434 = require("./109434.js"),
  Chunk162389 = require("./162389.jsx"),
  Chunk946458 = require("./946458.jsx"),
  Chunk968437 = require("./968437.js"),
  Chunk665906 = require("./665906.js"),
  Chunk456077 = require("./456077.js"),
  Chunk747212 = require("./747212.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk388610 = require("./388610.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk903223 = require("./903223.js"),
  Chunk594174 = require("./594174.js"),
  Chunk934415 = require("./934415.js"),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk630388 = require("./630388.js"),
  Chunk63063 = require("./63063.js"),
  Chunk129724 = require("./129724.js"),
  Chunk732335 = require("./732335.jsx"),
  Chunk296146 = require("./296146.jsx"),
  Chunk564735 = require("./564735.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk185923 = require("./185923.js"),
  Chunk710352 = require("./710352.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741905 = require("./741905.js"),
  Chunk10198 = require("./10198.js");

function eg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      eg(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
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
let ef = (0, Chunk313201.hQ)(),
  eb = (0, Chunk313201.hQ)(),
  ex = (0, Chunk313201.hQ)(),
  ej = (0, Chunk313201.hQ)(),
  ev = (0, Chunk313201.hQ)(),
  ey = (0, Chunk313201.hQ)(),
  eC = (0, Chunk313201.hQ)(),
  eN = (0, Chunk313201.hQ)(),
  eS = (0, Chunk313201.hQ)(),
  eE = (0, Chunk313201.hQ)(),
  eO = (0, Chunk313201.hQ)(),
  eZ = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  ew = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eT = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eR = "AUTOMATIC_RTC_REGION",
  e_ = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eI = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
    let {
      channel: e,
      submitting: t
    } = Chunk388610.Z.getProps();
    return {
      channel: module,
      submitting: exports,
      onReset() {
        null != module && (0, Chunk787014.S1)(module.id)
      },
      onSave() {
        if (null == module) return;
        let {
          name: t,
          type: n,
          topic: i,
          bitrate: l,
          userLimit: r,
          nsfw: s,
          flags: a,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: c,
          threadMetadata: d,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: p,
          defaultReactionEmoji: m,
          availableTags: b,
          defaultSortOrder: x,
          defaultForumLayout: j,
          defaultTagSetting: v
        } = module;
        module.isThread() && (t = (0, Chunk456077.Z)(exports, true)), (0, Chunk787014.wk)(module.id, {
          name: exports,
          type: require,
          topic: Chunk951288,
          bitrate: Chunk647438,
          userLimit: Chunk120356,
          nsfw: s,
          flags: Chunk913527,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: Chunk313361,
          autoArchiveDuration: null == Chunk697988 ? true : Chunk697988.autoArchiveDuration,
          locked: null == Chunk697988 ? true : Chunk697988.locked,
          invitable: null == Chunk697988 ? true : Chunk697988.invitable,
          defaultAutoArchiveDuration: Chunk683860,
          template: Chunk442837,
          rtcRegion: Chunk692547,
          videoQualityMode: Chunk780384,
          defaultReactionEmoji: Chunk481060,
          availableTags: Chunk771340,
          defaultSortOrder: Chunk410575,
          defaultForumLayout: Chunk852860,
          defaultTagSetting: Chunk129865
        })
      }
    }
  })(Chunk852860.Z);

function eP(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = l.useRef(null), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(_.Z, {
      channel: n,
      guildId: r,
      pickerIntention: ea.Hz.CHANNEL_NAME,
      closePopout: l,
      onNavigateAway: l,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === I.B.UNICODE && t(n.surrogates), i && l()
      },
      showOnlyUnicode: true,
      analyticsOverride: eT
    })
  }, [n, r, t]);
  return (0, i.jsx)(m.yRy, {
    targetElementRef: s,
    renderPopout: a,
    animation: m.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(R.Z, em(ep({}, e), {
        ref: s,
        active: n,
        className: eu.emojiButton,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 10,
            bottom: 10,
            left: false,
            right: 10
          }
        }
      }))
    }
  })
}
class eA extends Chunk647438.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && Chunk771340.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, i, l;
    let r = null != (i = null == (t = this.props.channel) ? true : t.topic) ? i : "";
    (null != (l = null == (n = e.channel) ? true : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, E.JM)(r)
    })
  }
  getError(e) {
    let {
      errors: t
    } = this.props;
    return null == t ? true : t[e]
  }
  getSlowmodeHelpText(e) {
    let {
      channel: t
    } = this.props;
    return (null == t ? true : t.isForumLikeChannel()) ? e ? ed.intl.format(ed.t.EIQq9v, e_) : ed.intl.string(ed.t["a+1pdH"]) : (null == t ? true : t.isThread()) ? e ? ed.intl.format(ed.t["8sTC8v"], e_) : ed.intl.string(ed.t.OMmNCg) : e ? ed.intl.format(ed.t.wW2MWl, e_) : ed.intl.string(ed.t["HEA/DQ"])
  }
  getCooldownSliderMarker(e) {
    return (0, et.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, et.A)(e * K.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, a, o, h, p;
    let f, b, {
        canManageChannels: j,
        canSendMessages: v,
        isThreadModerator: y,
        canManageThread: N,
        guild: E,
        isForumPost: w,
        isOwner: T,
        showAdvancedSlowModeSetting: R
      } = this.props,
      _ = U.Ec.has(e.type),
      I = e.isForumLikeChannel(),
      A = I && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      k = (null == (l = q.default.getCurrentUser()) ? true : l.isStaff()) === true,
      B = U.TK.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.NIc, {
          label: I ? ed.intl.string(ed.t.yR6Hwc) : ed.intl.string(ed.t.X8jMDg),
          children: (0, i.jsx)(O.ZP, {
            className: s()(eu.topicContainer, {
              [eu.disabled]: !j
            }),
            innerClassName: s()(eu.topic, {
              [eu.disabled]: !j
            }),
            characterCountClassName: eu.topicCharacterCount,
            maxCharacterCount: I ? es.Z7 : es.$x,
            onChange: this.handleChangeRichTopic,
            placeholder: ed.intl.string(ed.t["71fbmp"]),
            channel: eZ,
            textValue: this.state.textTopicValue,
            richValue: this.state.richTopicValue,
            type: I ? S.Ie.FORUM_CHANNEL_GUIDELINES : S.Ie.CHANNEL_TOPIC,
            onFocus: () => {
              this.setState({
                topicFocused: true
              })
            },
            onBlur: () => {
              this.setState({
                topicFocused: false
              })
            },
            focused: this.state.topicFocused,
            onSubmit: this.handleSubmit,
            disableThemedBackground: true,
            error: this.getError("topic"),
            disabled: !j,
            showValueWhenDisabled: true
          })
        }), (0, i.jsx)(m.izJ, {
          className: s()(eh.marginTop40, eh.marginBottom40)
        })]
      }) : null,
      H = I && k ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.Kx8, {
          label: ed.intl.string(ed.t.qk2jdX),
          placeholder: ed.intl.string(ed.t.DDjD1N),
          value: P.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: eo.Vb,
          disabled: !j,
          autosize: true,
          showCharacterCount: true
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      W = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.NIc, {
          label: ed.intl.string(ed.t["P/y+sr"]),
          description: ed.intl.string(ed.t["/oQQ39"]),
          errorMessage: this.getError("available_tags"),
          id: ef,
          children: (0, i.jsx)(L.Z, {
            channel: e
          })
        }), (0, i.jsx)(m.XZJ, {
          disabled: !j || A,
          checked: e.hasFlag(es.zZ.REQUIRE_TAG),
          onChange: e => this.handleRequireTagChanged(e),
          label: ed.intl.string(ed.t["9g2Zys"])
        }), (0, i.jsx)(m.izJ, {
          className: s()(eh.marginTop40, eh.marginBottom40)
        })]
      }) : null,
      z = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eu.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eu.settingsLeft, eu.settingsDefaultReaction),
            children: [(0, i.jsx)(m.vwX, {
              id: ex,
              className: eu.formTitle,
              children: ed.intl.string(ed.t["8ao1+P"])
            }), (0, i.jsx)(m.R94, {
              id: eb,
              type: m.R94.Types.DESCRIPTION,
              className: eu.description,
              children: ed.intl.string(ed.t.SdbF0t)
            }), (0, i.jsxs)(m.hE2, {
              align: "center",
              children: [(0, i.jsx)(m.yRy, {
                targetElementRef: this.defaultReactionButtonRef,
                renderPopout: this.renderEmojiPicker,
                position: "right",
                animation: m.yRy.Animation.NONE,
                align: "center",
                children: e => (0, i.jsx)(m.zxk, em(ep({}, e), {
                  buttonRef: this.defaultReactionButtonRef,
                  text: ed.intl.string(ed.t["59QgaG"]),
                  disabled: !j,
                  onClick: t => {
                    var n;
                    null == (n = e.onClick) || n.call(e, t)
                  }
                }))
              }), null != e.defaultReactionEmoji ? (0, i.jsx)(m.Avr, {
                text: ed.intl.string(ed.t.N86XcH),
                onClick: () => this.handleChangeDefaultReactionEmoji(null),
                variant: "critical"
              }) : null]
            })]
          }), (0, i.jsx)(M.Z, {
            reactionEmoji: e.defaultReactionEmoji
          })]
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      F = e.isForumChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eu.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eu.settingsLeft, eu.settingsDefaultView),
            children: [(0, i.jsx)(m.hjN, {
              title: ed.intl.string(ed.t.kQvoCw),
              children: (0, i.jsx)(m.q4e, {
                options: [{
                  label: ed.intl.string(ed.t["4HXEZG"]),
                  value: c.X.LIST
                }, {
                  label: ed.intl.string(ed.t["8RswJC"]),
                  value: c.X.GRID
                }],
                value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                onChange: this.handleChangeDefaultForumLayout
              })
            }), (0, i.jsx)(m.R94, {
              className: eh.marginTop8,
              type: m.R94.Types.DESCRIPTION,
              children: ed.intl.string(ed.t.mOSViY)
            })]
          }), e.defaultForumLayout === c.X.GRID ? (0, i.jsx)(ei.Z, {
            className: eu.defaultImageView
          }) : (0, i.jsx)(el.Z, {
            className: eu.defaultImageView
          })]
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      X = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.hjN, {
          title: ed.intl.string(ed.t.gePre3),
          children: (0, i.jsx)(m.q4e, {
            options: [{
              label: ed.intl.string(ed.t.ElZtzs),
              value: u.z.LATEST_ACTIVITY
            }, {
              label: ed.intl.string(ed.t.w28f3N),
              value: u.z.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        }), (0, i.jsx)(m.R94, {
          className: eh.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: ed.intl.string(ed.t["165cVV"])
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      J = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.hjN, {
          title: ed.intl.string(ed.t.Paxaur),
          children: (0, i.jsx)(m.q4e, {
            options: [{
              label: ed.intl.string(ed.t.rQ0ctb),
              value: d.z.MATCH_SOME
            }, {
              label: ed.intl.string(ed.t.FCXUu7),
              value: d.z.MATCH_ALL
            }],
            value: e.getDefaultTagSetting(),
            onChange: this.handleChangeDefaultTagSetting
          })
        }), (0, i.jsx)(m.R94, {
          className: eh.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: ed.intl.string(ed.t.DqOl8P)
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      Q = _ ? y : j,
      Y = null == (r = Z.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      K = U.X_.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.hjN, {
          title: I ? ed.intl.string(ed.t.O1c02t) : true,
          children: (0, i.jsxs)(m.Kqy, {
            gap: 20,
            children: [true === R ? (0, i.jsx)(en.Z, {
              label: ed.intl.string(ed.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(Y),
              channel: e,
              onChange: this.handleChangeSlowmode
            }) : (0, i.jsx)(m.iRW, {
              label: ed.intl.string(ed.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(Y),
              className: eh.marginTop20,
              initialValue: e.rateLimitPerUser,
              markers: er.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !Q,
              equidistant: true,
              "aria-labelledby": ej,
              "aria-describedby": ev
            }), I ? (0, i.jsx)(m.iRW, {
              label: ed.intl.string(ed.t["fkY5+v"]),
              helperText: Y ? ed.intl.format(ed.t.nZSuEh, e_) : ed.intl.string(ed.t.kdZU6O),
              initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
              markers: er.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeThreadMessageSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !Q,
              equidistant: true,
              "aria-labelledby": ej,
              "aria-describedby": ev
            }) : null]
          })
        }), (0, i.jsx)(m.izJ, {
          gap: 40
        })]
      }) : null,
      $ = _ && null != e.threadMetadata ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(x.Z, {
          page: er.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(V.Z, {
            isDisabled: !N,
            autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : ec.AX,
            onChange: this.handleAutoArchiveDurationChanged
          })
        }), (0, i.jsx)(m.R94, {
          className: eh.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: w ? ed.intl.string(ed.t["3aJN9P"]) : ed.intl.string(ed.t.YUXr4e)
        })]
      }) : null,
      et = e.type === er.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: ed.intl.string(ed.t.cSyXJi),
          onChange: this.handleInvitableChanged,
          value: e.threadMetadata.invitable,
          hideBorder: true,
          disabled: !N,
          children: ed.intl.string(ed.t.s2rpNT)
        })
      }) : null,
      ea = null != E && (0, G.Y2)(E),
      eg = U.ov.has(e.type) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: ed.intl.string(ed.t["9eUgwc"]),
          onChange: this.handleNSFWChange,
          value: (0, C.qF)(e),
          hideBorder: true,
          disabled: !j || null != e.linkedLobby || ea,
          disabledText: null != e.linkedLobby ? ed.intl.string(ed.t.l6uSVV) : null,
          children: ed.intl.string(ed.t.Es25YW)
        })
      }) : null,
      ey = U.Y0.has(e.type) && null != E && E.features.has(er.oNc.NEWS) && e.id !== (null == E ? true : E.rulesChannelId) && e.id !== (null == E ? true : E.publicUpdatesChannelId) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              children: ed.intl.format(ed.t.tI7KNT, {
                documentationLink: ee.Z.getArticleURL(er.BhN.ANNOUNCEMENT_CHANNELS)
              })
            }), (0, i.jsx)("div", {
              className: eh.marginTop8,
              children: ed.intl.string(ed.t["2Ab4IS"])
            })]
          }),
          onChange: this.handleNewsChange,
          value: e.type === er.d4z.GUILD_ANNOUNCEMENT,
          hideBorder: true,
          disabled: !j,
          children: ed.intl.string(ed.t.Au2b7u)
        })
      }) : null,
      eC = U.uC.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.izJ, {
          gap: 40
        }), (0, i.jsx)(x.Z, {
          page: er.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(V.Z, {
            isDisabled: !j,
            autoArchiveDuration: (0, D.WD)(e, null),
            onChange: this.handleChangeDefaultAutoArchiveDuration
          })
        }), (0, i.jsx)(m.R94, {
          className: eh.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: e.isForumLikeChannel() ? ed.intl.string(ed.t.fyXclZ) : ed.intl.string(ed.t.W3Noi4)
        })]
      }) : null,
      eN = this.props.showChannelSummariesSettings ? (0, i.jsx)(m.j7V, {
        note: ed.intl.format(ed.t.feJW19, {
          helpdeskArticle: ee.Z.getArticleURL(er.BhN.CONVERSATION_SUMMARIES)
        }),
        onChange: this.handleChannelSummariesToggled,
        value: !e.hasFlag(es.zZ.SUMMARIES_DISABLED) && (null == E ? true : E.features.has(er.oNc.SUMMARIES_ENABLED_BY_USER)),
        hideBorder: true,
        disabled: !j || !(null == E ? true : E.features.has(er.oNc.SUMMARIES_ENABLED_BY_USER)),
        children: (0, i.jsxs)("div", {
          className: eu.badgedItem,
          children: [ed.intl.string(ed.t.id3ozs), (0, i.jsx)(m.IGR, {
            text: ed.intl.string(ed.t.oW0eUV),
            color: g.Z.colors.BG_BRAND.css
          })]
        })
      }) : null,
      eS = e.isMediaChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.izJ, {
          gap: 40
        }), (0, i.jsx)(m.j7V, {
          onChange: this.handleShowMediaOptionsToggled,
          value: !e.hasFlag(es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
          note: ed.intl.string(ed.t.J4wCc3),
          hideBorder: true,
          disabled: !j,
          children: ed.intl.string(ed.t.u8LZOj)
        })]
      }) : null;
    e.type === er.d4z.GUILD_CATEGORY ? (b = ed.intl.string(ed.t.OCAkGB), f = "category-name") : e.isForumPost() ? (b = ed.intl.string(ed.t.uyVrTE), f = "post-title") : _ ? (b = ed.intl.string(ed.t.j3XWjI), f = "thread-name") : (b = ed.intl.string(ed.t.PVbHDg), f = "channel-name");
    let eE = T ? v : j;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(m.oil, {
        label: b,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: f,
        autoFocus: true,
        disabled: !eE,
        maxLength: er.HN8,
        trailing: eE ? {
          type: "emoji",
          button: (0, i.jsx)(eP, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), (0, i.jsx)(m.izJ, {
        gap: 40
      }), B, H, W, z, K, $, F, X, J, et, eg, ey, eN, eC, eS]
    })
  }
  renderBitrate(e) {
    return "".concat(Math.round(e / 1e3), "kbps")
  }
  renderVoiceBitrate(e, t) {
    let {
      canManageChannels: n
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let l = (0, Q.g7)(t, e),
      r = this.getError("bitrate");
    return (0, i.jsxs)(w.Z, {
      direction: w.Z.Direction.VERTICAL,
      className: eh.marginBottom40,
      children: [(0, i.jsx)(m.vwX, {
        id: ey,
        children: ed.intl.string(ed.t.w2d0vb)
      }), "" !== r && (0, i.jsx)(m.R94, {
        id: eC,
        type: m.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: eh.marginBottom8,
        children: r
      }), (0, i.jsx)(m.iRW, {
        initialValue: Math.min(e.bitrate, l),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [er.Fc, er.epw, l],
        minValue: er.Fc,
        maxValue: l,
        keyboardStep: er.V7H,
        disabled: !n,
        "aria-labelledby": ey,
        "aria-describedby": null != r && "" !== r ? eC : eN
      }), l > er.epw ? (0, i.jsx)(m.R94, {
        id: eN,
        type: m.geA.DESCRIPTION,
        children: ed.intl.format(ed.t.SbQJk5, {
          bitrate: er.epw / 1e3
        })
      }) : null]
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != module && null != module.guild_id && Chunk131704.vg.has(module.type) && (module.isGuildVocal() || Chunk665906.tM.getCurrentConfig({
      guildId: module.guild_id,
      location: "9b50bd_1"
    }).enabled)
  }
  renderVideoQualityMode(e) {
    var t;
    let {
      canManageChannels: n
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let l = [{
      value: er.Ucd.AUTO,
      name: ed.intl.string(ed.t.jjKYpq)
    }, {
      value: er.Ucd.FULL,
      name: ed.intl.string(ed.t["7jOoJC"])
    }];
    return (0, i.jsxs)(w.Z, {
      direction: w.Z.Direction.VERTICAL,
      className: eh.marginBottom40,
      children: [(0, i.jsx)(m.FXm, {
        label: ed.intl.string(ed.t.jhJEJi),
        onChange: e => this.handleVideoQualityModeChange(e),
        options: l,
        value: null != (t = e.videoQualityMode) ? t : er.Ucd.AUTO,
        disabled: !n
      }), (0, i.jsx)(m.R94, {
        type: m.geA.DESCRIPTION,
        children: ed.intl.format(ed.t.c5W7Sk, {})
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ed.intl.string(ed.t.XX5ciY) : ed.intl.formatToPlainString(ed.t["3uHFUV"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      l = e.isGuildStageVoice() ? er.xGv : er.$pe;
    return (0, i.jsxs)(w.Z, {
      direction: w.Z.Direction.VERTICAL,
      className: eh.marginBottom40,
      children: [(0, i.jsx)(m.vwX, {
        id: eS,
        children: ed.intl.string(ed.t["/AoSGB"])
      }), "" !== n && (0, i.jsx)(m.R94, {
        id: eE,
        type: m.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: eh.marginBottom8,
        children: n
      }), (0, i.jsx)(m.iRW, {
        initialValue: Math.min(e.userLimit, l),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, l],
        minValue: 0,
        maxValue: l,
        disabled: !t,
        "aria-labelledby": eS,
        "aria-describedby": null != n && "" !== n ? eE : eO
      }), (0, i.jsx)(m.R94, {
        id: eO,
        type: m.geA.DESCRIPTION,
        children: ed.intl.format(e.isGuildStageVoice() ? ed.t.OqZI8P : ed.t["8yb3JS"], {})
      })]
    })
  }
  renderRegionOverride(e) {
    var t;
    let {
      regions: n,
      canManageChannels: l,
      guild: r
    } = this.props;
    if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
    let s = [];
    null != n && (s = n.filter(e => !e.deprecated && !e.hidden).map(e => ({
      label: e.name,
      value: e.id
    }))).unshift({
      label: ed.intl.string(ed.t.JEmsam),
      value: eR
    });
    let a = null != (t = e.rtcRegion) ? t : eR;
    return (0, i.jsxs)(w.Z, {
      direction: w.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(m.vwX, {
        children: ed.intl.string(ed.t.Ms8bX1)
      }), (0, i.jsx)(m.q4e, {
        options: s,
        value: a,
        onChange: this.handleRegionChange,
        isDisabled: !l
      }), (0, i.jsx)(m.R94, {
        type: m.geA.DESCRIPTION,
        children: ed.intl.string(ed.t["dbTs+/"])
      })]
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === er.d4z.GUILD_CATEGORY ? (0, p.wj)(l) ? n(309095) : n(925442) : (0, p.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(w.Z, {
      justify: w.Z.Justify.CENTER,
      className: eh.marginTop60,
      children: (0, i.jsx)("img", {
        alt: "",
        width: 280,
        height: 165,
        src: t
      })
    })
  }
  render() {
    let {
      channel: e,
      channelName: t,
      guild: n
    } = this.props;
    return null == module || null == exports || null == require ? null : (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      className: "channel-settings-overview",
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["/dp6yc"]),
      children: [this.renderChannelInfo(module, exports), this.showVoiceSettings() ? (0, Chunk951288.jsx)(Chunk481060.izJ, {
        gap: 40
      }) : null, this.renderVoiceBitrate(module, require), this.renderVideoQualityMode(module), this.renderUserLimit(module), this.renderRegionOverride(module), this.renderJuiceImage(module)]
    })
  }
  handleSubmit() {
    return new Promise(e => {
      e({
        shouldClear: false,
        shouldRefocus: true
      })
    })
  }
  constructor(e) {
    var t, n;
    super(e), eg(this, "defaultReactionButtonRef", l.createRef()), eg(this, "nameInputRef", l.createRef()), eg(this, "cursorPosition", 0), eg(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, i.jsx)(_.Z, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: i
          } = e;
          this.handleChangeDefaultReactionEmoji(n), i && t()
        },
        pickerIntention: ea.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: ew
      })
    }), eg(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, $.mB)(t.flags, es.zZ.REQUIRE_TAG, e);
      (0, f.pW)({
        flags: n
      })
    }), eg(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, B.Z)(e, false) : er.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Q.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, f.pW)({
        name: e
      }), setTimeout(() => {
        var e;
        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l)
      }, 0)
    }), eg(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? true : e.isThread()) && null != t) {
        let e = (0, B.Z)(t, true);
        e !== t && (0, f.pW)({
          name: e
        })
      }
    }), eg(this, "insertEmojiAtPosition", e => {
      var t, n;
      let i = this.nameInputRef.current,
        l = null != (t = null == i ? true : i.selectionStart) ? t : 0,
        r = null != (n = null == i ? true : i.selectionEnd) ? n : 0,
        s = this.props.channelName,
        a = (null == s ? true : s.substring(0, l)) + e + (null == s ? true : s.substring(r));
      (0, f.pW)({
        name: a
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), eg(this, "handleChangeTopic", e => {
      (0, f.pW)({
        topic: P.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eg(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), eg(this, "handleChangeTemplate", e => {
      (0, f.pW)({
        template: P.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eg(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? true : e.id) != null ? {
        emojiId: e.id,
        emojiName: true
      } : {
        emojiId: true,
        emojiName: e.optionallyDiverseSequence
      };
      (0, f.pW)({
        defaultReactionEmoji: t
      })
    }), eg(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, f.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), eg(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, f.pW)({
        defaultSortOrder: e
      })
    }), eg(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, f.pW)({
        defaultTagSetting: e
      })
    }), eg(this, "handleChangeBitrate", e => {
      (0, f.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), eg(this, "handleUserLimitChange", e => {
      (0, f.pW)({
        userLimit: Math.round(e)
      })
    }), eg(this, "handleNSFWChange", e => {
      (0, f.pW)({
        nsfw: e
      })
    }), eg(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, $.mB)(t.flags, es.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, f.pW)({
        flags: n
      })
    }), eg(this, "handleNewsChange", e => {
      (0, f.pW)({
        type: e ? er.d4z.GUILD_ANNOUNCEMENT : er.d4z.GUILD_TEXT
      })
    }), eg(this, "handleChangeSlowmode", e => {
      (0, f.pW)({
        rateLimitPerUser: e
      })
    }), eg(this, "handleChangeThreadMessageSlowmode", e => {
      (0, f.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), eg(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, f.pW)({
        defaultAutoArchiveDuration: e
      })
    }), eg(this, "handleRegionChange", e => {
      (0, f.pW)({
        rtcRegion: e === eR ? null : e
      })
    }), eg(this, "handleVideoQualityModeChange", e => {
      (0, f.pW)({
        videoQualityMode: e
      })
    }), eg(this, "handleAutoArchiveDurationChanged", e => {
      (0, f.pW)({
        autoArchiveDuration: e
      })
    }), eg(this, "handleInvitableChanged", e => {
      (0, f.pW)({
        invitable: e
      })
    }), eg(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, $.mB)(t.flags, es.zZ.SUMMARIES_DISABLED, !e);
      (0, f.pW)({
        flags: n
      })
    }), eg(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, $.mB)(t.flags, es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, f.pW)({
        flags: n
      })
    });
    let r = null != (n = null == (t = this.props.channel) ? true : t.topic) ? n : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, E.JM)(r),
      topicFocused: false,
      updateNameInputCursorPosition: false
    }
  }
}

function eL() {
  let {
    errors: e,
    channel: t,
    submitting: n,
    subsection: r
  } = (0, Chunk442837.cj)([Chunk388610.Z], () => Chunk388610.Z.getProps()), s = (0, Chunk442837.e7)([Chunk903223.Z], () => {
    var e;
    return Chunk903223.Z.getRegions(null != (e = null == exports ? true : exports.getGuildId()) ? module : null)
  }), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), o = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(null == exports ? true : exports.getGuildId())), c = (0, Chunk665906.C7)(exports), d = (0, Chunk665906.Xb)(exports), {
    canManageChannels: u,
    canSendMessages: g
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    canManageChannels: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_CHANNELS, exports),
    canSendMessages: Chunk496675.Z.can(Chunk981631.Plq.SEND_MESSAGES, exports)
  })), p = (0, Chunk933557.ZP)(exports), m = Chunk314897.default.getId(), f = (0, Chunk109434.v)(), b = null == exports ? true : exports.id, x = (0, Chunk902840.ts)(exports, false, true), j = Chunk129865.Z.useExperiment({
    guildId: null == exports ? true : exports.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, C = Chunk647438.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [Chunk771340, Chunk787014]);
  return (0, Chunk951288.jsx)(eA, {
    errors: module,
    channel: exports,
    channelName: Chunk780384,
    submitting: require,
    regions: s,
    theme: Chunk913527,
    guild: o,
    canManageChannels: (null == exports ? true : exports.isThread()) ? Chunk313361 : Chunk683860,
    canSendMessages: Chunk692547,
    isThreadModerator: Chunk697988,
    canManageThread: Chunk313361,
    subsection: Chunk120356,
    isForumPost: null != exports && exports.isForumPost(),
    isOwner: null == exports ? true : exports.isOwner(Chunk481060),
    handleSetDefaultLayout: Chunk622822,
    showChannelSummariesSettings: Chunk410575,
    showAdvancedSlowModeSetting: Chunk852860
  })
}