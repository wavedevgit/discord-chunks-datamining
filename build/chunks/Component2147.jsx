/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eA,
  Z: () => eD
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
  Chunk886025 = require("./886025.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
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

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ep(e, t, n[t])
    })
  }
  return e
}

function eb(e, t) {
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
let ex = (0, Chunk313201.hQ)(),
  ej = (0, Chunk313201.hQ)(),
  ev = (0, Chunk313201.hQ)(),
  ey = (0, Chunk313201.hQ)(),
  eC = (0, Chunk313201.hQ)(),
  eN = (0, Chunk313201.hQ)(),
  eS = (0, Chunk313201.hQ)(),
  eE = (0, Chunk313201.hQ)(),
  eO = (0, Chunk313201.hQ)(),
  eZ = (0, Chunk313201.hQ)(),
  ew = (0, Chunk313201.hQ)(),
  eT = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  eR = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  e_ = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eI = "AUTOMATIC_RTC_REGION",
  eP = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eA = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
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
          videoQualityMode: m,
          defaultReactionEmoji: p,
          availableTags: f,
          defaultSortOrder: b,
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
          videoQualityMode: Chunk886025,
          defaultReactionEmoji: Chunk780384,
          availableTags: Chunk755721,
          defaultSortOrder: Chunk481060,
          defaultForumLayout: Chunk771340,
          defaultTagSetting: Chunk410575
        })
      }
    }
  })(Chunk852860.Z);

function eL(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = l.useRef(null), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(P.Z, {
      channel: n,
      guildId: r,
      pickerIntention: ec.Hz.CHANNEL_NAME,
      closePopout: l,
      onNavigateAway: l,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === A.B.UNICODE && t(n.surrogates), i && l()
      },
      showOnlyUnicode: true,
      analyticsOverride: e_
    })
  }, [n, r, t]);
  return (0, i.jsx)(b.yRy, {
    targetElementRef: s,
    renderPopout: a,
    animation: b.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(I.Z, eb(ef({}, e), {
        ref: s,
        active: n,
        className: eg.emojiButton,
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
class eM extends Chunk647438.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && Chunk771340.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, i, l;
    let r = null != (i = null == (t = this.props.channel) ? true : t.topic) ? i : "";
    (null != (l = null == (n = e.channel) ? true : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, Z.JM)(r)
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? eh.intl.format(eh.t.EIQq9v, eP) : eh.intl.string(eh.t["a+1pdH"]) : (null == t ? true : t.isThread()) ? e ? eh.intl.format(eh.t["8sTC8v"], eP) : eh.intl.string(eh.t.OMmNCg) : e ? eh.intl.format(eh.t.wW2MWl, eP) : eh.intl.string(eh.t["HEA/DQ"])
  }
  getCooldownSliderMarker(e) {
    return (0, ei.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, ei.A)(e * ee.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, a, o, h, p;
    let x, j, {
        canManageChannels: y,
        canSendMessages: C,
        isThreadModerator: N,
        canManageThread: E,
        guild: Z,
        isForumPost: R,
        isOwner: _,
        showAdvancedSlowModeSetting: I
      } = this.props,
      P = W.Ec.has(e.type),
      A = e.isForumLikeChannel(),
      M = A && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      V = (null == (l = Y.default.getCurrentUser()) ? true : l.isStaff()) === true,
      H = W.TK.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.N, {
          label: A ? eh.intl.string(eh.t.yR6Hwc) : eh.intl.string(eh.t.X8jMDg),
          children: (0, i.jsx)(w.ZP, {
            className: eg.topicContainer,
            innerClassName: s()(eg.topic, {
              [eg.disabled]: !y
            }),
            characterCountClassName: eg.topicCharacterCount,
            maxCharacterCount: A ? eo.Z7 : eo.$x,
            onChange: this.handleChangeRichTopic,
            placeholder: eh.intl.string(eh.t["71fbmp"]),
            channel: eT,
            textValue: this.state.textTopicValue,
            richValue: this.state.richTopicValue,
            type: A ? O.Ie.FORUM_CHANNEL_GUIDELINES : O.Ie.CHANNEL_TOPIC,
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
            disabled: !y,
            showValueWhenDisabled: true
          })
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      G = A && V ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.Kx8, {
          label: eh.intl.string(eh.t.qk2jdX),
          placeholder: eh.intl.string(eh.t.DDjD1N),
          value: L.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: ed.Vb,
          disabled: !y,
          autosize: true,
          showCharacterCount: true
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      z = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.N, {
          label: eh.intl.string(eh.t["P/y+sr"]),
          description: eh.intl.string(eh.t["/oQQ39"]),
          errorMessage: this.getError("available_tags"),
          id: ex,
          children: (0, i.jsx)(D.Z, {
            channel: e
          })
        }), (0, i.jsx)(f.$q, {
          disabled: !y || M,
          value: e.hasFlag(eo.zZ.REQUIRE_TAG),
          type: f.M0.INVERTED,
          onChange: (e, t) => this.handleRequireTagChanged(t),
          children: eh.intl.string(eh.t["9g2Zys"])
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      X = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eg.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eg.settingsLeft, eg.settingsDefaultReaction),
            children: [(0, i.jsx)(b.vwX, {
              id: ev,
              className: eg.formTitle,
              children: eh.intl.string(eh.t["8ao1+P"])
            }), (0, i.jsx)(b.R94, {
              id: ej,
              type: b.R94.Types.DESCRIPTION,
              className: eg.description,
              children: eh.intl.string(eh.t.SdbF0t)
            }), (0, i.jsxs)(b.hE2, {
              align: "center",
              children: [(0, i.jsx)(b.yRy, {
                targetElementRef: this.defaultReactionButtonRef,
                renderPopout: this.renderEmojiPicker,
                position: "right",
                animation: b.yRy.Animation.NONE,
                align: "center",
                children: e => (0, i.jsx)(b.zxk, eb(ef({}, e), {
                  buttonRef: this.defaultReactionButtonRef,
                  text: eh.intl.string(eh.t["59QgaG"]),
                  disabled: !y,
                  onClick: t => {
                    var n;
                    null == (n = e.onClick) || n.call(e, t)
                  }
                }))
              }), null != e.defaultReactionEmoji ? (0, i.jsx)(b.Avr, {
                text: eh.intl.string(eh.t.N86XcH),
                onClick: () => this.handleChangeDefaultReactionEmoji(null),
                variant: "critical"
              }) : null]
            })]
          }), (0, i.jsx)(k.Z, {
            reactionEmoji: e.defaultReactionEmoji
          })]
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      q = e.isForumChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eg.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eg.settingsLeft, eg.settingsDefaultView),
            children: [(0, i.jsx)(b.hjN, {
              title: eh.intl.string(eh.t.kQvoCw),
              children: (0, i.jsx)(b.q4e, {
                options: [{
                  label: eh.intl.string(eh.t["4HXEZG"]),
                  value: c.X.LIST
                }, {
                  label: eh.intl.string(eh.t["8RswJC"]),
                  value: c.X.GRID
                }],
                value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                onChange: this.handleChangeDefaultForumLayout
              })
            }), (0, i.jsx)(b.R94, {
              className: em.marginTop8,
              type: b.R94.Types.DESCRIPTION,
              children: eh.intl.string(eh.t.mOSViY)
            })]
          }), e.defaultForumLayout === c.X.GRID ? (0, i.jsx)(er.Z, {
            className: eg.defaultImageView
          }) : (0, i.jsx)(es.Z, {
            className: eg.defaultImageView
          })]
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      Q = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.hjN, {
          title: eh.intl.string(eh.t.gePre3),
          children: (0, i.jsx)(b.q4e, {
            options: [{
              label: eh.intl.string(eh.t.ElZtzs),
              value: u.z.LATEST_ACTIVITY
            }, {
              label: eh.intl.string(eh.t.w28f3N),
              value: u.z.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        }), (0, i.jsx)(b.R94, {
          className: em.marginTop8,
          type: b.R94.Types.DESCRIPTION,
          children: eh.intl.string(eh.t["165cVV"])
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      $ = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.hjN, {
          title: eh.intl.string(eh.t.Paxaur),
          children: (0, i.jsx)(b.q4e, {
            options: [{
              label: eh.intl.string(eh.t.rQ0ctb),
              value: d.z.MATCH_SOME
            }, {
              label: eh.intl.string(eh.t.FCXUu7),
              value: d.z.MATCH_ALL
            }],
            value: e.getDefaultTagSetting(),
            onChange: this.handleChangeDefaultTagSetting
          })
        }), (0, i.jsx)(b.R94, {
          className: em.marginTop8,
          type: b.R94.Types.DESCRIPTION,
          children: eh.intl.string(eh.t.DqOl8P)
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      J = P ? N : y,
      K = null == (r = T.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      ee = W.X_.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.hjN, {
          title: A ? eh.intl.string(eh.t.O1c02t) : true,
          children: (0, i.jsxs)(b.Kqy, {
            gap: 20,
            children: [true === I ? (0, i.jsx)(el.Z, {
              label: eh.intl.string(eh.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(K),
              channel: e,
              onChange: this.handleChangeSlowmode
            }) : (0, i.jsx)(b.iRW, {
              label: eh.intl.string(eh.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(K),
              className: em.marginTop20,
              initialValue: e.rateLimitPerUser,
              markers: ea.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !J,
              equidistant: true,
              "aria-labelledby": ey,
              "aria-describedby": eC
            }), A ? (0, i.jsx)(b.iRW, {
              label: eh.intl.string(eh.t["fkY5+v"]),
              helperText: K ? eh.intl.format(eh.t.nZSuEh, eP) : eh.intl.string(eh.t.kdZU6O),
              initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
              markers: ea.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeThreadMessageSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !J,
              equidistant: true,
              "aria-labelledby": ey,
              "aria-describedby": eC
            }) : null]
          })
        }), (0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        })]
      }) : null,
      et = P && null != e.threadMetadata ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(v.Z, {
          page: ea.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(U.Z, {
            isDisabled: !E,
            autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : eu.AX,
            onChange: this.handleAutoArchiveDurationChanged
          })
        }), (0, i.jsx)(b.R94, {
          className: em.marginTop8,
          type: b.R94.Types.DESCRIPTION,
          children: R ? eh.intl.string(eh.t["3aJN9P"]) : eh.intl.string(eh.t.YUXr4e)
        })]
      }) : null,
      ei = e.type === ea.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(b.j7V, {
          note: eh.intl.string(eh.t.cSyXJi),
          onChange: this.handleInvitableChanged,
          value: e.threadMetadata.invitable,
          hideBorder: true,
          disabled: !E,
          children: eh.intl.string(eh.t.s2rpNT)
        })
      }) : null,
      ec = null != Z && (0, F.Y2)(Z),
      ep = W.ov.has(e.type) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(b.j7V, {
          note: eh.intl.string(eh.t["9eUgwc"]),
          onChange: this.handleNSFWChange,
          value: (0, S.qF)(e),
          hideBorder: true,
          disabled: !y || null != e.linkedLobby || ec,
          disabledText: null != e.linkedLobby ? eh.intl.string(eh.t.l6uSVV) : null,
          children: eh.intl.string(eh.t.Es25YW)
        })
      }) : null,
      eN = W.Y0.has(e.type) && null != Z && Z.features.has(ea.oNc.NEWS) && e.id !== (null == Z ? true : Z.rulesChannelId) && e.id !== (null == Z ? true : Z.publicUpdatesChannelId) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(b.j7V, {
          note: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              children: eh.intl.format(eh.t.tI7KNT, {
                documentationLink: en.Z.getArticleURL(ea.BhN.ANNOUNCEMENT_CHANNELS)
              })
            }), (0, i.jsx)("div", {
              className: em.marginTop8,
              children: eh.intl.string(eh.t["2Ab4IS"])
            })]
          }),
          onChange: this.handleNewsChange,
          value: e.type === ea.d4z.GUILD_ANNOUNCEMENT,
          hideBorder: true,
          disabled: !y,
          children: eh.intl.string(eh.t.Au2b7u)
        })
      }) : null,
      eS = W.uC.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        }), (0, i.jsx)(v.Z, {
          page: ea.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(U.Z, {
            isDisabled: !y,
            autoArchiveDuration: (0, B.WD)(e, null),
            onChange: this.handleChangeDefaultAutoArchiveDuration
          })
        }), (0, i.jsx)(b.R94, {
          className: em.marginTop8,
          type: b.R94.Types.DESCRIPTION,
          children: e.isForumLikeChannel() ? eh.intl.string(eh.t.fyXclZ) : eh.intl.string(eh.t.W3Noi4)
        })]
      }) : null,
      eE = this.props.showChannelSummariesSettings ? (0, i.jsx)(b.j7V, {
        note: eh.intl.format(eh.t.feJW19, {
          helpdeskArticle: en.Z.getArticleURL(ea.BhN.CONVERSATION_SUMMARIES)
        }),
        onChange: this.handleChannelSummariesToggled,
        value: !e.hasFlag(eo.zZ.SUMMARIES_DISABLED) && (null == Z ? true : Z.features.has(ea.oNc.SUMMARIES_ENABLED_BY_USER)),
        hideBorder: true,
        disabled: !y || !(null == Z ? true : Z.features.has(ea.oNc.SUMMARIES_ENABLED_BY_USER)),
        children: (0, i.jsxs)("div", {
          className: eg.badgedItem,
          children: [eh.intl.string(eh.t.id3ozs), (0, i.jsx)(b.IGR, {
            text: eh.intl.string(eh.t.oW0eUV),
            color: g.Z.colors.BG_BRAND.css
          })]
        })
      }) : null,
      eO = e.isMediaChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.$i$, {
          className: s()(em.marginTop40, em.marginBottom40)
        }), (0, i.jsx)(b.j7V, {
          onChange: this.handleShowMediaOptionsToggled,
          value: !e.hasFlag(eo.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
          note: eh.intl.string(eh.t.J4wCc3),
          hideBorder: true,
          disabled: !y,
          children: eh.intl.string(eh.t.u8LZOj)
        })]
      }) : null;
    e.type === ea.d4z.GUILD_CATEGORY ? (j = eh.intl.string(eh.t.OCAkGB), x = "category-name") : e.isForumPost() ? (j = eh.intl.string(eh.t.uyVrTE), x = "post-title") : P ? (j = eh.intl.string(eh.t.j3XWjI), x = "thread-name") : (j = eh.intl.string(eh.t.PVbHDg), x = "channel-name");
    let eZ = _ ? C : y;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(b.oil, {
        label: j,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: x,
        autoFocus: true,
        disabled: !eZ,
        maxLength: ea.HN8,
        trailing: eZ ? {
          type: "emoji",
          button: (0, i.jsx)(eL, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), (0, i.jsx)(b.$i$, {
        className: s()(em.marginTop40, em.marginBottom40)
      }), H, G, z, X, ee, et, q, Q, $, ei, ep, eN, eE, eS, eO]
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
    let l = (0, J.g7)(t, e),
      r = this.getError("bitrate");
    return (0, i.jsxs)(R.Z, {
      direction: R.Z.Direction.VERTICAL,
      className: em.marginBottom40,
      children: [(0, i.jsx)(b.vwX, {
        id: eN,
        children: eh.intl.string(eh.t.w2d0vb)
      }), "" !== r && (0, i.jsx)(b.R94, {
        id: eS,
        type: b.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: em.marginBottom8,
        children: r
      }), (0, i.jsx)(b.iRW, {
        initialValue: Math.min(e.bitrate, l),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [ea.Fc, ea.epw, l],
        minValue: ea.Fc,
        maxValue: l,
        keyboardStep: ea.V7H,
        disabled: !n,
        "aria-labelledby": eN,
        "aria-describedby": null != r && "" !== r ? eS : eE
      }), l > ea.epw ? (0, i.jsx)(b.R94, {
        id: eE,
        type: b.geA.DESCRIPTION,
        children: eh.intl.format(eh.t.SbQJk5, {
          bitrate: ea.epw / 1e3
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
      value: ea.Ucd.AUTO,
      name: eh.intl.string(eh.t.jjKYpq)
    }, {
      value: ea.Ucd.FULL,
      name: eh.intl.string(eh.t["7jOoJC"])
    }];
    return (0, i.jsxs)(R.Z, {
      direction: R.Z.Direction.VERTICAL,
      className: em.marginBottom40,
      children: [(0, i.jsx)(b.FXm, {
        label: eh.intl.string(eh.t.jhJEJi),
        onChange: e => this.handleVideoQualityModeChange(e),
        options: l,
        value: null != (t = e.videoQualityMode) ? t : ea.Ucd.AUTO,
        disabled: !n
      }), (0, i.jsx)(b.R94, {
        type: b.geA.DESCRIPTION,
        children: eh.intl.format(eh.t.c5W7Sk, {})
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? eh.intl.string(eh.t.XX5ciY) : eh.intl.formatToPlainString(eh.t["3uHFUV"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      l = e.isGuildStageVoice() ? ea.xGv : ea.$pe;
    return (0, i.jsxs)(R.Z, {
      direction: R.Z.Direction.VERTICAL,
      className: em.marginBottom40,
      children: [(0, i.jsx)(b.vwX, {
        id: eO,
        children: eh.intl.string(eh.t["/AoSGB"])
      }), "" !== n && (0, i.jsx)(b.R94, {
        id: eZ,
        type: b.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: em.marginBottom8,
        children: n
      }), (0, i.jsx)(b.iRW, {
        initialValue: Math.min(e.userLimit, l),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, l],
        minValue: 0,
        maxValue: l,
        disabled: !t,
        "aria-labelledby": eO,
        "aria-describedby": null != n && "" !== n ? eZ : ew
      }), (0, i.jsx)(b.R94, {
        id: ew,
        type: b.geA.DESCRIPTION,
        children: eh.intl.format(e.isGuildStageVoice() ? eh.t.OqZI8P : eh.t["8yb3JS"], {})
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
      label: eh.intl.string(eh.t.JEmsam),
      value: eI
    });
    let a = null != (t = e.rtcRegion) ? t : eI;
    return (0, i.jsxs)(R.Z, {
      direction: R.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(b.vwX, {
        children: eh.intl.string(eh.t.Ms8bX1)
      }), (0, i.jsx)(b.q4e, {
        options: s,
        value: a,
        onChange: this.handleRegionChange,
        isDisabled: !l
      }), (0, i.jsx)(b.R94, {
        type: b.geA.DESCRIPTION,
        children: eh.intl.string(eh.t["dbTs+/"])
      })]
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === ea.d4z.GUILD_CATEGORY ? (0, p.wj)(l) ? n(309095) : n(925442) : (0, p.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(R.Z, {
      justify: R.Z.Justify.CENTER,
      className: em.marginTop60,
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
      children: [this.renderChannelInfo(module, exports), this.showVoiceSettings() ? (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: s()(Chunk10198.marginTop40, Chunk10198.marginBottom40)
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
    super(e), ep(this, "defaultReactionButtonRef", l.createRef()), ep(this, "nameInputRef", l.createRef()), ep(this, "cursorPosition", 0), ep(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, i.jsx)(P.Z, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: i
          } = e;
          this.handleChangeDefaultReactionEmoji(n), i && t()
        },
        pickerIntention: ec.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: eR
      })
    }), ep(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, et.mB)(t.flags, eo.zZ.REQUIRE_TAG, e);
      (0, x.pW)({
        flags: n
      })
    }), ep(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, H.Z)(e, false) : ea.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, J.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, x.pW)({
        name: e
      }), setTimeout(() => {
        var e;
        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l)
      }, 0)
    }), ep(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? true : e.isThread()) && null != t) {
        let e = (0, H.Z)(t, true);
        e !== t && (0, x.pW)({
          name: e
        })
      }
    }), ep(this, "insertEmojiAtPosition", e => {
      var t, n;
      let i = this.nameInputRef.current,
        l = null != (t = null == i ? true : i.selectionStart) ? t : 0,
        r = null != (n = null == i ? true : i.selectionEnd) ? n : 0,
        s = this.props.channelName,
        a = (null == s ? true : s.substring(0, l)) + e + (null == s ? true : s.substring(r));
      (0, x.pW)({
        name: a
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), ep(this, "handleChangeTopic", e => {
      (0, x.pW)({
        topic: L.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ep(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), ep(this, "handleChangeTemplate", e => {
      (0, x.pW)({
        template: L.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ep(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? true : e.id) != null ? {
        emojiId: e.id,
        emojiName: true
      } : {
        emojiId: true,
        emojiName: e.optionallyDiverseSequence
      };
      (0, x.pW)({
        defaultReactionEmoji: t
      })
    }), ep(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ep(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultSortOrder: e
      })
    }), ep(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultTagSetting: e
      })
    }), ep(this, "handleChangeBitrate", e => {
      (0, x.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ep(this, "handleUserLimitChange", e => {
      (0, x.pW)({
        userLimit: Math.round(e)
      })
    }), ep(this, "handleNSFWChange", e => {
      (0, x.pW)({
        nsfw: e
      })
    }), ep(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, et.mB)(t.flags, eo.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, x.pW)({
        flags: n
      })
    }), ep(this, "handleNewsChange", e => {
      (0, x.pW)({
        type: e ? ea.d4z.GUILD_ANNOUNCEMENT : ea.d4z.GUILD_TEXT
      })
    }), ep(this, "handleChangeSlowmode", e => {
      (0, x.pW)({
        rateLimitPerUser: e
      })
    }), ep(this, "handleChangeThreadMessageSlowmode", e => {
      (0, x.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), ep(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, x.pW)({
        defaultAutoArchiveDuration: e
      })
    }), ep(this, "handleRegionChange", e => {
      (0, x.pW)({
        rtcRegion: e === eI ? null : e
      })
    }), ep(this, "handleVideoQualityModeChange", e => {
      (0, x.pW)({
        videoQualityMode: e
      })
    }), ep(this, "handleAutoArchiveDurationChanged", e => {
      (0, x.pW)({
        autoArchiveDuration: e
      })
    }), ep(this, "handleInvitableChanged", e => {
      (0, x.pW)({
        invitable: e
      })
    }), ep(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, et.mB)(t.flags, eo.zZ.SUMMARIES_DISABLED, !e);
      (0, x.pW)({
        flags: n
      })
    }), ep(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, et.mB)(t.flags, eo.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, x.pW)({
        flags: n
      })
    });
    let r = null != (n = null == (t = this.props.channel) ? true : t.topic) ? n : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, Z.JM)(r),
      topicFocused: false,
      updateNameInputCursorPosition: false
    }
  }
}

function eD() {
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
  })), m = (0, Chunk933557.ZP)(exports), p = Chunk314897.default.getId(), f = (0, Chunk109434.v)(), b = null == exports ? true : exports.id, x = (0, Chunk902840.ts)(exports, false, true), j = Chunk129865.Z.useExperiment({
    guildId: null == exports ? true : exports.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, v = Chunk647438.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [Chunk481060, Chunk755721]);
  return (0, Chunk951288.jsx)(eM, {
    errors: module,
    channel: exports,
    channelName: Chunk886025,
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
    isOwner: null == exports ? true : exports.isOwner(Chunk780384),
    handleSetDefaultLayout: Chunk410575,
    showChannelSummariesSettings: Chunk787014,
    showAdvancedSlowModeSetting: Chunk771340
  })
}