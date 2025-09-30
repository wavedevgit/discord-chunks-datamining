/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eP,
  Z: () => eM
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
  Chunk257294 = require("./257294.js"),
  Chunk197571 = require("./197571.js");

function ep(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function em(e) {
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

function ef(e, t) {
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
let eb = (0, Chunk313201.hQ)(),
  ex = (0, Chunk313201.hQ)(),
  ej = (0, Chunk313201.hQ)(),
  ev = (0, Chunk313201.hQ)(),
  ey = (0, Chunk313201.hQ)(),
  eC = (0, Chunk313201.hQ)(),
  eN = (0, Chunk313201.hQ)(),
  eS = (0, Chunk313201.hQ)(),
  eE = (0, Chunk313201.hQ)(),
  eO = (0, Chunk313201.hQ)(),
  eZ = (0, Chunk313201.hQ)(),
  ew = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  eT = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eR = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  e_ = "AUTOMATIC_RTC_REGION",
  eI = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eP = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
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
          availableTags: f,
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
          defaultReactionEmoji: Chunk755721,
          availableTags: Chunk481060,
          defaultSortOrder: Chunk771340,
          defaultForumLayout: Chunk410575,
          defaultTagSetting: Chunk852860
        })
      }
    }
  })(Chunk852860.Z);

function eA(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = l.useRef(null), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(I.Z, {
      channel: n,
      guildId: r,
      pickerIntention: eo.Hz.CHANNEL_NAME,
      closePopout: l,
      onNavigateAway: l,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === P.B.UNICODE && t(n.surrogates), i && l()
      },
      showOnlyUnicode: true,
      analyticsOverride: eR
    })
  }, [n, r, t]);
  return (0, i.jsx)(f.yRy, {
    targetElementRef: s,
    renderPopout: a,
    animation: f.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(_.Z, ef(em({}, e), {
        ref: s,
        active: n,
        className: eh.emojiButton,
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
class eL extends Chunk647438.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && Chunk771340.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, i, l;
    let r = null != (i = null == (t = this.props.channel) ? true : t.topic) ? i : "";
    (null != (l = null == (n = e.channel) ? true : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, O.JM)(r)
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? eu.intl.format(eu.t.EIQq9v, eI) : eu.intl.string(eu.t["a+1pdH"]) : (null == t ? true : t.isThread()) ? e ? eu.intl.format(eu.t["8sTC8v"], eI) : eu.intl.string(eu.t.OMmNCg) : e ? eu.intl.format(eu.t.wW2MWl, eI) : eu.intl.string(eu.t["HEA/DQ"])
  }
  getCooldownSliderMarker(e) {
    return (0, en.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, en.A)(e * $.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, a, o, h, p;
    let b, x, {
        canManageChannels: v,
        canSendMessages: y,
        isThreadModerator: C,
        canManageThread: S,
        guild: O,
        isForumPost: T,
        isOwner: R,
        showAdvancedSlowModeSetting: _
      } = this.props,
      I = G.Ec.has(e.type),
      P = e.isForumLikeChannel(),
      L = P && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      B = (null == (l = Q.default.getCurrentUser()) ? true : l.isStaff()) === true,
      V = G.TK.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.NIc, {
          label: P ? eu.intl.string(eu.t.yR6Hwc) : eu.intl.string(eu.t.X8jMDg),
          children: (0, i.jsx)(Z.ZP, {
            className: s()(eh.topicContainer, {
              [eh.disabled]: !v
            }),
            innerClassName: s()(eh.topic, {
              [eh.disabled]: !v
            }),
            characterCountClassName: eh.topicCharacterCount,
            maxCharacterCount: P ? ea.Z7 : ea.$x,
            onChange: this.handleChangeRichTopic,
            placeholder: eu.intl.string(eu.t["71fbmp"]),
            channel: ew,
            textValue: this.state.textTopicValue,
            richValue: this.state.richTopicValue,
            type: P ? E.Ie.FORUM_CHANNEL_GUIDELINES : E.Ie.CHANNEL_TOPIC,
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
            disabled: !v,
            showValueWhenDisabled: true
          })
        }), (0, i.jsx)(f.izJ, {
          className: s()(eg.marginTop40, eg.marginBottom40)
        })]
      }) : null,
      U = P && B ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.Kx8, {
          label: eu.intl.string(eu.t.qk2jdX),
          placeholder: eu.intl.string(eu.t.DDjD1N),
          value: A.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: ec.Vb,
          disabled: !v,
          autosize: true,
          showCharacterCount: true
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      z = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.NIc, {
          label: eu.intl.string(eu.t["P/y+sr"]),
          description: eu.intl.string(eu.t["/oQQ39"]),
          errorMessage: this.getError("available_tags"),
          id: eb,
          children: (0, i.jsx)(M.Z, {
            channel: e
          })
        }), (0, i.jsx)(m.$q, {
          disabled: !v || L,
          value: e.hasFlag(ea.zZ.REQUIRE_TAG),
          type: m.M0.INVERTED,
          onChange: (e, t) => this.handleRequireTagChanged(t),
          children: eu.intl.string(eu.t["9g2Zys"])
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      F = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eh.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eh.settingsLeft, eh.settingsDefaultReaction),
            children: [(0, i.jsx)(f.vwX, {
              id: ej,
              className: eh.formTitle,
              children: eu.intl.string(eu.t["8ao1+P"])
            }), (0, i.jsx)(f.R94, {
              id: ex,
              type: f.R94.Types.DESCRIPTION,
              className: eh.description,
              children: eu.intl.string(eu.t.SdbF0t)
            }), (0, i.jsxs)(f.hE2, {
              align: "center",
              children: [(0, i.jsx)(f.yRy, {
                targetElementRef: this.defaultReactionButtonRef,
                renderPopout: this.renderEmojiPicker,
                position: "right",
                animation: f.yRy.Animation.NONE,
                align: "center",
                children: e => (0, i.jsx)(f.zxk, ef(em({}, e), {
                  buttonRef: this.defaultReactionButtonRef,
                  text: eu.intl.string(eu.t["59QgaG"]),
                  disabled: !v,
                  onClick: t => {
                    var n;
                    null == (n = e.onClick) || n.call(e, t)
                  }
                }))
              }), null != e.defaultReactionEmoji ? (0, i.jsx)(f.Avr, {
                text: eu.intl.string(eu.t.N86XcH),
                onClick: () => this.handleChangeDefaultReactionEmoji(null),
                variant: "critical"
              }) : null]
            })]
          }), (0, i.jsx)(D.Z, {
            reactionEmoji: e.defaultReactionEmoji
          })]
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      X = e.isForumChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eh.twoColumnSettings,
          children: [(0, i.jsxs)("div", {
            className: s()(eh.settingsLeft, eh.settingsDefaultView),
            children: [(0, i.jsx)(f.hjN, {
              title: eu.intl.string(eu.t.kQvoCw),
              children: (0, i.jsx)(f.q4e, {
                options: [{
                  label: eu.intl.string(eu.t["4HXEZG"]),
                  value: c.X.LIST
                }, {
                  label: eu.intl.string(eu.t["8RswJC"]),
                  value: c.X.GRID
                }],
                value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
                onChange: this.handleChangeDefaultForumLayout
              })
            }), (0, i.jsx)(f.R94, {
              className: eg.marginTop8,
              type: f.R94.Types.DESCRIPTION,
              children: eu.intl.string(eu.t.mOSViY)
            })]
          }), e.defaultForumLayout === c.X.GRID ? (0, i.jsx)(el.Z, {
            className: eh.defaultImageView
          }) : (0, i.jsx)(er.Z, {
            className: eh.defaultImageView
          })]
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      q = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.hjN, {
          title: eu.intl.string(eu.t.gePre3),
          children: (0, i.jsx)(f.q4e, {
            options: [{
              label: eu.intl.string(eu.t.ElZtzs),
              value: u.z.LATEST_ACTIVITY
            }, {
              label: eu.intl.string(eu.t.w28f3N),
              value: u.z.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        }), (0, i.jsx)(f.R94, {
          className: eg.marginTop8,
          type: f.R94.Types.DESCRIPTION,
          children: eu.intl.string(eu.t["165cVV"])
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      J = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.hjN, {
          title: eu.intl.string(eu.t.Paxaur),
          children: (0, i.jsx)(f.q4e, {
            options: [{
              label: eu.intl.string(eu.t.rQ0ctb),
              value: d.z.MATCH_SOME
            }, {
              label: eu.intl.string(eu.t.FCXUu7),
              value: d.z.MATCH_ALL
            }],
            value: e.getDefaultTagSetting(),
            onChange: this.handleChangeDefaultTagSetting
          })
        }), (0, i.jsx)(f.R94, {
          className: eg.marginTop8,
          type: f.R94.Types.DESCRIPTION,
          children: eu.intl.string(eu.t.DqOl8P)
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      Y = I ? C : v,
      K = null == (r = w.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      $ = G.X_.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.hjN, {
          title: P ? eu.intl.string(eu.t.O1c02t) : true,
          children: (0, i.jsxs)(f.Kqy, {
            gap: 20,
            children: [true === _ ? (0, i.jsx)(ei.Z, {
              label: eu.intl.string(eu.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(K),
              channel: e,
              onChange: this.handleChangeSlowmode
            }) : (0, i.jsx)(f.iRW, {
              label: eu.intl.string(eu.t["tTHx9/"]),
              helperText: this.getSlowmodeHelpText(K),
              className: eg.marginTop20,
              initialValue: e.rateLimitPerUser,
              markers: es.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !Y,
              equidistant: true,
              "aria-labelledby": ev,
              "aria-describedby": ey
            }), P ? (0, i.jsx)(f.iRW, {
              label: eu.intl.string(eu.t["fkY5+v"]),
              helperText: K ? eu.intl.format(eu.t.nZSuEh, eI) : eu.intl.string(eu.t.kdZU6O),
              initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
              markers: es.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeThreadMessageSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !Y,
              equidistant: true,
              "aria-labelledby": ev,
              "aria-describedby": ey
            }) : null]
          })
        }), (0, i.jsx)(f.izJ, {
          gap: 40
        })]
      }) : null,
      ee = I && null != e.threadMetadata ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(j.Z, {
          page: es.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(H.Z, {
            isDisabled: !S,
            autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : ed.AX,
            onChange: this.handleAutoArchiveDurationChanged
          })
        }), (0, i.jsx)(f.R94, {
          className: eg.marginTop8,
          type: f.R94.Types.DESCRIPTION,
          children: T ? eu.intl.string(eu.t["3aJN9P"]) : eu.intl.string(eu.t.YUXr4e)
        })]
      }) : null,
      en = e.type === es.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(f.j7V, {
          note: eu.intl.string(eu.t.cSyXJi),
          onChange: this.handleInvitableChanged,
          value: e.threadMetadata.invitable,
          hideBorder: true,
          disabled: !S,
          children: eu.intl.string(eu.t.s2rpNT)
        })
      }) : null,
      eo = null != O && (0, W.Y2)(O),
      ep = G.ov.has(e.type) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(f.j7V, {
          note: eu.intl.string(eu.t["9eUgwc"]),
          onChange: this.handleNSFWChange,
          value: (0, N.qF)(e),
          hideBorder: true,
          disabled: !v || null != e.linkedLobby || eo,
          disabledText: null != e.linkedLobby ? eu.intl.string(eu.t.l6uSVV) : null,
          children: eu.intl.string(eu.t.Es25YW)
        })
      }) : null,
      eC = G.Y0.has(e.type) && null != O && O.features.has(es.oNc.NEWS) && e.id !== (null == O ? true : O.rulesChannelId) && e.id !== (null == O ? true : O.publicUpdatesChannelId) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(f.j7V, {
          note: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              children: eu.intl.format(eu.t.tI7KNT, {
                documentationLink: et.Z.getArticleURL(es.BhN.ANNOUNCEMENT_CHANNELS)
              })
            }), (0, i.jsx)("div", {
              className: eg.marginTop8,
              children: eu.intl.string(eu.t["2Ab4IS"])
            })]
          }),
          onChange: this.handleNewsChange,
          value: e.type === es.d4z.GUILD_ANNOUNCEMENT,
          hideBorder: true,
          disabled: !v,
          children: eu.intl.string(eu.t.Au2b7u)
        })
      }) : null,
      eN = G.uC.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.izJ, {
          gap: 40
        }), (0, i.jsx)(j.Z, {
          page: es.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(H.Z, {
            isDisabled: !v,
            autoArchiveDuration: (0, k.WD)(e, null),
            onChange: this.handleChangeDefaultAutoArchiveDuration
          })
        }), (0, i.jsx)(f.R94, {
          className: eg.marginTop8,
          type: f.R94.Types.DESCRIPTION,
          children: e.isForumLikeChannel() ? eu.intl.string(eu.t.fyXclZ) : eu.intl.string(eu.t.W3Noi4)
        })]
      }) : null,
      eS = this.props.showChannelSummariesSettings ? (0, i.jsx)(f.j7V, {
        note: eu.intl.format(eu.t.feJW19, {
          helpdeskArticle: et.Z.getArticleURL(es.BhN.CONVERSATION_SUMMARIES)
        }),
        onChange: this.handleChannelSummariesToggled,
        value: !e.hasFlag(ea.zZ.SUMMARIES_DISABLED) && (null == O ? true : O.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
        hideBorder: true,
        disabled: !v || !(null == O ? true : O.features.has(es.oNc.SUMMARIES_ENABLED_BY_USER)),
        children: (0, i.jsxs)("div", {
          className: eh.badgedItem,
          children: [eu.intl.string(eu.t.id3ozs), (0, i.jsx)(f.IGR, {
            text: eu.intl.string(eu.t.oW0eUV),
            color: g.Z.colors.BG_BRAND.css
          })]
        })
      }) : null,
      eE = e.isMediaChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.izJ, {
          gap: 40
        }), (0, i.jsx)(f.j7V, {
          onChange: this.handleShowMediaOptionsToggled,
          value: !e.hasFlag(ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
          note: eu.intl.string(eu.t.J4wCc3),
          hideBorder: true,
          disabled: !v,
          children: eu.intl.string(eu.t.u8LZOj)
        })]
      }) : null;
    e.type === es.d4z.GUILD_CATEGORY ? (x = eu.intl.string(eu.t.OCAkGB), b = "category-name") : e.isForumPost() ? (x = eu.intl.string(eu.t.uyVrTE), b = "post-title") : I ? (x = eu.intl.string(eu.t.j3XWjI), b = "thread-name") : (x = eu.intl.string(eu.t.PVbHDg), b = "channel-name");
    let eO = R ? y : v;
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(f.oil, {
        label: x,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: b,
        autoFocus: true,
        disabled: !eO,
        maxLength: es.HN8,
        trailing: eO ? {
          type: "emoji",
          button: (0, i.jsx)(eA, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), (0, i.jsx)(f.izJ, {
        gap: 40
      }), V, U, z, F, $, ee, X, q, J, en, ep, eC, eS, eN, eE]
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
    let l = (0, Y.g7)(t, e),
      r = this.getError("bitrate");
    return (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      className: eg.marginBottom40,
      children: [(0, i.jsx)(f.vwX, {
        id: eC,
        children: eu.intl.string(eu.t.w2d0vb)
      }), "" !== r && (0, i.jsx)(f.R94, {
        id: eN,
        type: f.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: eg.marginBottom8,
        children: r
      }), (0, i.jsx)(f.iRW, {
        initialValue: Math.min(e.bitrate, l),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [es.Fc, es.epw, l],
        minValue: es.Fc,
        maxValue: l,
        keyboardStep: es.V7H,
        disabled: !n,
        "aria-labelledby": eC,
        "aria-describedby": null != r && "" !== r ? eN : eS
      }), l > es.epw ? (0, i.jsx)(f.R94, {
        id: eS,
        type: f.geA.DESCRIPTION,
        children: eu.intl.format(eu.t.SbQJk5, {
          bitrate: es.epw / 1e3
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
      value: es.Ucd.AUTO,
      name: eu.intl.string(eu.t.jjKYpq)
    }, {
      value: es.Ucd.FULL,
      name: eu.intl.string(eu.t["7jOoJC"])
    }];
    return (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      className: eg.marginBottom40,
      children: [(0, i.jsx)(f.FXm, {
        label: eu.intl.string(eu.t.jhJEJi),
        onChange: e => this.handleVideoQualityModeChange(e),
        options: l,
        value: null != (t = e.videoQualityMode) ? t : es.Ucd.AUTO,
        disabled: !n
      }), (0, i.jsx)(f.R94, {
        type: f.geA.DESCRIPTION,
        children: eu.intl.format(eu.t.c5W7Sk, {})
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? eu.intl.string(eu.t.XX5ciY) : eu.intl.formatToPlainString(eu.t["3uHFUV"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      l = e.isGuildStageVoice() ? es.xGv : es.$pe;
    return (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      className: eg.marginBottom40,
      children: [(0, i.jsx)(f.vwX, {
        id: eE,
        children: eu.intl.string(eu.t["/AoSGB"])
      }), "" !== n && (0, i.jsx)(f.R94, {
        id: eO,
        type: f.geA.DESCRIPTION,
        style: {
          color: g.Z.unsafe_rawColors.RED_400.css
        },
        className: eg.marginBottom8,
        children: n
      }), (0, i.jsx)(f.iRW, {
        initialValue: Math.min(e.userLimit, l),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, l],
        minValue: 0,
        maxValue: l,
        disabled: !t,
        "aria-labelledby": eE,
        "aria-describedby": null != n && "" !== n ? eO : eZ
      }), (0, i.jsx)(f.R94, {
        id: eZ,
        type: f.geA.DESCRIPTION,
        children: eu.intl.format(e.isGuildStageVoice() ? eu.t.OqZI8P : eu.t["8yb3JS"], {})
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
      label: eu.intl.string(eu.t.JEmsam),
      value: e_
    });
    let a = null != (t = e.rtcRegion) ? t : e_;
    return (0, i.jsxs)(T.Z, {
      direction: T.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(f.vwX, {
        children: eu.intl.string(eu.t.Ms8bX1)
      }), (0, i.jsx)(f.q4e, {
        options: s,
        value: a,
        onChange: this.handleRegionChange,
        isDisabled: !l
      }), (0, i.jsx)(f.R94, {
        type: f.geA.DESCRIPTION,
        children: eu.intl.string(eu.t["dbTs+/"])
      })]
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === es.d4z.GUILD_CATEGORY ? (0, p.wj)(l) ? n(309095) : n(925442) : (0, p.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(T.Z, {
      justify: T.Z.Justify.CENTER,
      className: eg.marginTop60,
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
    super(e), ep(this, "defaultReactionButtonRef", l.createRef()), ep(this, "nameInputRef", l.createRef()), ep(this, "cursorPosition", 0), ep(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, i.jsx)(I.Z, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: i
          } = e;
          this.handleChangeDefaultReactionEmoji(n), i && t()
        },
        pickerIntention: eo.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: eT
      })
    }), ep(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, ee.mB)(t.flags, ea.zZ.REQUIRE_TAG, e);
      (0, b.pW)({
        flags: n
      })
    }), ep(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, V.Z)(e, false) : es.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Y.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, b.pW)({
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
        let e = (0, V.Z)(t, true);
        e !== t && (0, b.pW)({
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
      (0, b.pW)({
        name: a
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), ep(this, "handleChangeTopic", e => {
      (0, b.pW)({
        topic: A.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ep(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), ep(this, "handleChangeTemplate", e => {
      (0, b.pW)({
        template: A.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ep(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? true : e.id) != null ? {
        emojiId: e.id,
        emojiName: true
      } : {
        emojiId: true,
        emojiName: e.optionallyDiverseSequence
      };
      (0, b.pW)({
        defaultReactionEmoji: t
      })
    }), ep(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ep(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultSortOrder: e
      })
    }), ep(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultTagSetting: e
      })
    }), ep(this, "handleChangeBitrate", e => {
      (0, b.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ep(this, "handleUserLimitChange", e => {
      (0, b.pW)({
        userLimit: Math.round(e)
      })
    }), ep(this, "handleNSFWChange", e => {
      (0, b.pW)({
        nsfw: e
      })
    }), ep(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, ee.mB)(t.flags, ea.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, b.pW)({
        flags: n
      })
    }), ep(this, "handleNewsChange", e => {
      (0, b.pW)({
        type: e ? es.d4z.GUILD_ANNOUNCEMENT : es.d4z.GUILD_TEXT
      })
    }), ep(this, "handleChangeSlowmode", e => {
      (0, b.pW)({
        rateLimitPerUser: e
      })
    }), ep(this, "handleChangeThreadMessageSlowmode", e => {
      (0, b.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), ep(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, b.pW)({
        defaultAutoArchiveDuration: e
      })
    }), ep(this, "handleRegionChange", e => {
      (0, b.pW)({
        rtcRegion: e === e_ ? null : e
      })
    }), ep(this, "handleVideoQualityModeChange", e => {
      (0, b.pW)({
        videoQualityMode: e
      })
    }), ep(this, "handleAutoArchiveDurationChanged", e => {
      (0, b.pW)({
        autoArchiveDuration: e
      })
    }), ep(this, "handleInvitableChanged", e => {
      (0, b.pW)({
        invitable: e
      })
    }), ep(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, ee.mB)(t.flags, ea.zZ.SUMMARIES_DISABLED, !e);
      (0, b.pW)({
        flags: n
      })
    }), ep(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, ee.mB)(t.flags, ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, b.pW)({
        flags: n
      })
    });
    let r = null != (n = null == (t = this.props.channel) ? true : t.topic) ? n : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, O.JM)(r),
      topicFocused: false,
      updateNameInputCursorPosition: false
    }
  }
}

function eM() {
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
  }).enabled, v = Chunk647438.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [Chunk787014, Chunk481060]);
  return (0, Chunk951288.jsx)(eL, {
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
    isOwner: null == exports ? true : exports.isOwner(Chunk755721),
    handleSetDefaultLayout: Chunk852860,
    showChannelSummariesSettings: Chunk771340,
    showAdvancedSlowModeSetting: Chunk410575
  })
}