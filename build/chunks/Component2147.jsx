/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eN,
  Z: () => eE
}), require("./997841.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk313361 = require("./313361.js"),
  Chunk697988 = require("./697988.js"),
  Chunk683860 = require("./683860.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk771340 = require("./771340.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk129865 = require("./129865.js"),
  Chunk902840 = require("./902840.js"),
  Chunk622822 = require("./622822.js"),
  Chunk933557 = require("./933557.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk409513 = require("./409513.js"),
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
  ej = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  ev = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  ey = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eC = "AUTOMATIC_RTC_REGION",
  eS = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eN = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
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
          defaultSortOrder: b,
          defaultForumLayout: j,
          defaultTagSetting: v
        } = module;
        module.isThread() && (t = (0, Chunk456077.Z)(exports, true)), (0, Chunk787014.wk)(module.id, {
          name: exports,
          type: require,
          topic: Chunk54381,
          bitrate: Chunk473749,
          userLimit: Chunk120356,
          nsfw: s,
          flags: Chunk913527,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: Chunk313361,
          autoArchiveDuration: null == Chunk697988 ? true : Chunk697988.autoArchiveDuration,
          locked: null == Chunk697988 ? true : Chunk697988.locked,
          invitable: null == Chunk697988 ? true : Chunk697988.invitable,
          defaultAutoArchiveDuration: Chunk683860,
          template: Chunk95015,
          rtcRegion: Chunk442837,
          videoQualityMode: Chunk796027,
          defaultReactionEmoji: Chunk199849,
          availableTags: Chunk780384,
          defaultSortOrder: Chunk481060,
          defaultForumLayout: Chunk771340,
          defaultTagSetting: Chunk410575
        })
      }
    }
  })(Chunk796027.Z);

function eO(e) {
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
      analyticsOverride: ey
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
class eZ extends Chunk473749.PureComponent {
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? ed.intl.format(ed.t.EIQq9v, eS) : ed.intl.string(ed.t["a+1pdO"]) : (null == t ? true : t.isThread()) ? e ? ed.intl.format(ed.t["8sTC8t"], eS) : ed.intl.string(ed.t.OMmNCv) : e ? ed.intl.format(ed.t.wW2MWu, eS) : ed.intl.string(ed.t["HEA/DU"])
  }
  getCooldownSliderMarker(e) {
    return (0, et.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, et.A)(e * $.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, a, o, h, g;
    let p, f, {
        canManageChannels: x,
        canSendMessages: j,
        isThreadModerator: y,
        canManageThread: C,
        guild: N,
        isForumPost: Z,
        isOwner: T,
        showAdvancedSlowModeSetting: _
      } = this.props,
      R = V.Ec.has(e.type),
      P = e.isForumLikeChannel(),
      I = P && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      M = (null == (l = X.default.getCurrentUser()) ? true : l.isStaff()) === true,
      B = V.TK.has(e.type) ? (0, i.jsx)(b.gNt, {
        label: P ? ed.intl.string(ed.t.yR6HwZ) : ed.intl.string(ed.t.X8jMDh),
        children: (0, i.jsx)(E.ZP, {
          className: s()(eu.topicContainer, {
            [eu.disabled]: !x
          }),
          innerClassName: s()(eu.topic, {
            [eu.disabled]: !x
          }),
          characterCountClassName: eu.topicCharacterCount,
          maxCharacterCount: P ? es.Z7 : es.$x,
          onChange: this.handleChangeRichTopic,
          placeholder: ed.intl.string(ed.t["71fbmh"]),
          channel: ej,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: P ? O.Ie.FORUM_CHANNEL_GUIDELINES : O.Ie.CHANNEL_TOPIC,
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
          disabled: !x,
          showValueWhenDisabled: true
        })
      }) : null,
      H = P && M ? (0, i.jsx)(b.Kx8, {
        label: ed.intl.string(ed.t.qk2jdY),
        placeholder: ed.intl.string(ed.t.DDjD1H),
        value: L.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
        onChange: this.handleChangeTemplate,
        error: this.getError("template"),
        maxLength: eo.Vb,
        disabled: !x,
        autosize: true,
        showCharacterCount: true
      }) : null,
      G = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsx)(b.gNt, {
          label: ed.intl.string(ed.t["P/y+sj"]),
          description: ed.intl.string(ed.t["/oQQ3y"]),
          errorMessage: this.getError("available_tags"),
          id: ef,
          children: (0, i.jsx)(A.Z, {
            channel: e
          })
        }), (0, i.jsx)(b.Checkbox, {
          disabled: !x || I,
          checked: e.hasFlag(es.zZ.REQUIRE_TAG),
          onChange: e => this.handleRequireTagChanged(e),
          label: ed.intl.string(ed.t["9g2Zyv"])
        })]
      }) : null,
      F = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsx)(b.gNt, {
          label: ed.intl.string(ed.t["8ao1+E"]),
          description: ed.intl.string(ed.t.SdbF0q),
          children: (0, i.jsxs)("div", {
            className: eu.twoColumnSettings,
            children: [(0, i.jsx)("div", {
              className: s()(eu.settingsLeft, eu.settingsDefaultReaction),
              children: (0, i.jsxs)(b.ButtonGroup, {
                align: "center",
                children: [(0, i.jsx)(b.yRy, {
                  targetElementRef: this.defaultReactionButtonRef,
                  renderPopout: this.renderEmojiPicker,
                  position: "right",
                  animation: b.yRy.Animation.NONE,
                  align: "center",
                  children: e => (0, i.jsx)(b.Button, em(ep({}, e), {
                    buttonRef: this.defaultReactionButtonRef,
                    text: ed.intl.string(ed.t["59QgaD"]),
                    disabled: !x,
                    onClick: t => {
                      var n;
                      null == (n = e.onClick) || n.call(e, t)
                    }
                  }))
                }), null != e.defaultReactionEmoji ? (0, i.jsx)(b.Avr, {
                  text: ed.intl.string(ed.t.N86XcP),
                  onClick: () => this.handleChangeDefaultReactionEmoji(null),
                  variant: "critical"
                }) : null]
              })
            }), (0, i.jsx)(D.Z, {
              reactionEmoji: e.defaultReactionEmoji
            })]
          })
        })]
      }) : null,
      z = e.isForumChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsxs)("div", {
          className: eu.twoColumnSettings,
          children: [(0, i.jsx)("div", {
            className: s()(eu.settingsLeft, eu.settingsDefaultView),
            children: (0, i.jsx)(m.y6, {
              label: ed.intl.string(ed.t["kQvoC/"]),
              description: ed.intl.string(ed.t.mOSViT),
              options: [{
                label: ed.intl.string(ed.t["4HXEZG"]),
                value: c.X.LIST
              }, {
                label: ed.intl.string(ed.t["8RswJG"]),
                value: c.X.GRID
              }],
              value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), e.defaultForumLayout === c.X.GRID ? (0, i.jsx)(ei.Z, {
            className: eu.defaultImageView
          }) : (0, i.jsx)(el.Z, {
            className: eu.defaultImageView
          })]
        }), (0, i.jsx)(b.izJ, {})]
      }) : null,
      q = e.isForumLikeChannel() ? (0, i.jsx)(m.y6, {
        label: ed.intl.string(ed.t.gePre2),
        description: ed.intl.string(ed.t["165cVX"]),
        options: [{
          label: ed.intl.string(ed.t.ElZtzj),
          value: u.z.LATEST_ACTIVITY
        }, {
          label: ed.intl.string(ed.t.w28f3F),
          value: u.z.CREATION_DATE
        }],
        value: e.getDefaultSortOrder(),
        onChange: this.handleChangeDefaultSortOrder
      }) : null,
      Y = e.isForumLikeChannel() ? (0, i.jsx)(m.y6, {
        label: ed.intl.string(ed.t.Paxaug),
        description: ed.intl.string(ed.t.DqOl8J),
        options: [{
          label: ed.intl.string(ed.t.rQ0ctQ),
          value: d.z.MATCH_SOME
        }, {
          label: ed.intl.string(ed.t.FCXUu0),
          value: d.z.MATCH_ALL
        }],
        value: e.getDefaultTagSetting(),
        onChange: this.handleChangeDefaultTagSetting
      }) : null,
      J = R ? y : x,
      Q = null == (r = w.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      K = true === _ ? (0, i.jsx)(en.Z, {
        label: ed.intl.string(ed.t.tTHx98),
        helperText: this.getSlowmodeHelpText(Q),
        channel: e,
        onChange: this.handleChangeSlowmode
      }) : (0, i.jsx)(b.iRW, {
        label: ed.intl.string(ed.t.tTHx98),
        helperText: this.getSlowmodeHelpText(Q),
        initialValue: e.rateLimitPerUser,
        markers: er.BiE,
        stickToMarkers: true,
        onValueChange: this.handleChangeSlowmode,
        onMarkerRender: this.getCooldownSliderMarker,
        disabled: !J,
        equidistant: true,
        "aria-labelledby": eb,
        "aria-describedby": ex
      }),
      $ = V.X_.has(e.type) ? P ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsxs)(b.C3N, {
          label: ed.intl.string(ed.t.O1c02q),
          children: [K, (0, i.jsx)(b.iRW, {
            label: ed.intl.string(ed.t["fkY5+l"]),
            helperText: Q ? ed.intl.format(ed.t.nZSuEj, eS) : ed.intl.string(ed.t.kdZU6H),
            initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
            markers: er.BiE,
            stickToMarkers: true,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !J,
            equidistant: true,
            "aria-labelledby": eb,
            "aria-describedby": ex
          })]
        }), (0, i.jsx)(b.izJ, {})]
      }) : K : null,
      et = R && null != e.threadMetadata ? (0, i.jsx)(v.Z, {
        page: er.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(U.Z, {
          isDisabled: !C,
          autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : ec.AX,
          onChange: this.handleAutoArchiveDurationChanged,
          helperText: Z ? ed.intl.string(ed.t["3aJN9M"]) : ed.intl.string(ed.t.YUXr4Z)
        })
      }) : null,
      ea = e.type === er.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(b.rsf, {
          label: ed.intl.string(ed.t.s2rpNf),
          description: ed.intl.string(ed.t.cSyXJk),
          checked: e.threadMetadata.invitable,
          onChange: this.handleInvitableChanged,
          disabled: !C
        })
      }) : null,
      eh = null != N && (0, W.Y2)(N),
      eg = V.ov.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.rsf, {
          label: ed.intl.string(ed.t.Es25Yf),
          description: ed.intl.string(ed.t["9eUgwR"]),
          onChange: this.handleNSFWChange,
          checked: (0, S.qF)(e),
          disabled: !x || null != e.linkedLobby || eh
        }), null != e.linkedLobby ? (0, i.jsx)(b.Wn, {
          messageType: b.QYI.WARNING,
          children: ed.intl.string(ed.t.l6uSVa)
        }) : null]
      }) : null,
      ev = V.Y0.has(e.type) && null != N && N.features.has(er.GuildFeatures.NEWS) && e.id !== (null == N ? true : N.rulesChannelId) && e.id !== (null == N ? true : N.publicUpdatesChannelId) ? (0, i.jsxs)(b.Kqy, {
        gap: 4,
        children: [(0, i.jsx)(b.rsf, {
          label: ed.intl.string(ed.t.Au2b7m),
          description: ed.intl.format(ed.t.tI7KNX, {
            documentationLink: ee.Z.getArticleURL(er.BhN.ANNOUNCEMENT_CHANNELS)
          }),
          onChange: this.handleNewsChange,
          checked: e.type === er.d4z.GUILD_ANNOUNCEMENT,
          disabled: !x
        }), (0, i.jsx)(b.Wn, {
          messageType: b.QYI.INFO,
          children: ed.intl.string(ed.t["2Ab4Id"])
        })]
      }) : null,
      ey = V.uC.has(e.type) ? (0, i.jsx)(v.Z, {
        page: er.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(U.Z, {
          isDisabled: !x,
          autoArchiveDuration: (0, k.WD)(e, null),
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          helperText: e.isForumLikeChannel() ? ed.intl.string(ed.t.fyXclY) : ed.intl.string(ed.t.W3Noi9)
        })
      }) : null,
      eC = this.props.showChannelSummariesSettings ? (0, i.jsx)(b.rsf, {
        label: ed.intl.string(ed.t.id3ozj),
        description: ed.intl.format(ed.t.feJW1z, {
          helpdeskArticle: ee.Z.getArticleURL(er.BhN.CONVERSATION_SUMMARIES)
        }),
        badge: "beta",
        onChange: this.handleChannelSummariesToggled,
        checked: !e.hasFlag(es.zZ.SUMMARIES_DISABLED) && (null == N ? true : N.features.has(er.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
        disabled: !x || !(null == N ? true : N.features.has(er.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
      }) : null,
      eN = e.isMediaChannel() ? (0, i.jsx)(b.rsf, {
        label: ed.intl.string(ed.t.u8LZOt),
        description: ed.intl.string(ed.t.J4wCc7),
        checked: !e.hasFlag(es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        onChange: this.handleShowMediaOptionsToggled,
        disabled: !x
      }) : null;
    e.type === er.d4z.GUILD_CATEGORY ? (f = ed.intl.string(ed.t.OCAkGP), p = "category-name") : e.isForumPost() ? (f = ed.intl.string(ed.t.uyVrTN), p = "post-title") : R ? (f = ed.intl.string(ed.t.j3XWjD), p = "thread-name") : (f = ed.intl.string(ed.t.PVbHDl), p = "channel-name");
    let eZ = T ? j : x;
    return (0, i.jsxs)(b.Kqy, {
      gap: 24,
      children: [(0, i.jsx)(b.oil, {
        label: f,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: p,
        autoFocus: true,
        disabled: !eZ,
        maxLength: er.HN8,
        trailing: eZ ? {
          type: "emoji",
          button: (0, i.jsx)(eO, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), B, H, G, F, $, et, z, q, Y, ea, eg, ev, eC, ey, eN]
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
    return (0, i.jsx)(b.iRW, {
      label: ed.intl.string(ed.t.w2d0vU),
      errorMessage: "" !== r ? r : true,
      helperText: l > er.epw ? ed.intl.format(ed.t.SbQJk5, {
        bitrate: er.epw / 1e3
      }) : true,
      initialValue: Math.min(e.bitrate, l),
      onValueChange: this.handleChangeBitrate,
      onValueRender: this.renderBitrate,
      onMarkerRender: this.renderBitrate,
      markers: [er.Fc, er.epw, l],
      minValue: er.Fc,
      maxValue: l,
      keyboardStep: er.V7H,
      disabled: !n
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
      name: ed.intl.string(ed.t.jjKYpu)
    }, {
      value: er.Ucd.FULL,
      name: ed.intl.string(ed.t["7jOoJE"])
    }];
    return (0, i.jsx)(b.FXm, {
      label: ed.intl.string(ed.t.jhJEJs),
      helperText: ed.intl.format(ed.t.c5W7Ss, {}),
      onChange: e => this.handleVideoQualityModeChange(e),
      options: l,
      value: null != (t = e.videoQualityMode) ? t : er.Ucd.AUTO,
      disabled: !n
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ed.intl.string(ed.t.XX5ciX) : ed.intl.formatToPlainString(ed.t["3uHFUR"], {
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
    return (0, i.jsx)(b.iRW, {
      label: ed.intl.string(ed.t["/AoSGN"]),
      errorMessage: "" !== n ? n : true,
      helperText: ed.intl.format(e.isGuildStageVoice() ? ed.t.OqZI8D : ed.t["8yb3JT"], {}),
      initialValue: Math.min(e.userLimit, l),
      onValueChange: this.handleUserLimitChange,
      onValueRender: this.onRenderUserLimit,
      onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
      markers: [0, l],
      minValue: 0,
      maxValue: l,
      disabled: !t
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
      label: ed.intl.string(ed.t.JEmsap),
      value: eC
    });
    let a = null != (t = e.rtcRegion) ? t : eC;
    return (0, i.jsx)(m.y6, {
      label: ed.intl.string(ed.t["Ms8bX+"]),
      description: ed.intl.string(ed.t["dbTs+z"]),
      options: s,
      value: a,
      onChange: this.handleRegionChange,
      isDisabled: !l
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === er.d4z.GUILD_CATEGORY ? (0, f.wj)(l) ? n(309095) : n(925442) : (0, f.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(T.Z, {
      justify: T.Z.Justify.CENTER,
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
    return null == module || null == exports || null == require ? null : (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t["/dp6yY"]),
      children: [this.renderChannelInfo(module, exports), this.showVoiceSettings() ? (0, Chunk54381.jsx)(Chunk481060.izJ, {
        gap: 24
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
        pickerIntention: ea.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: ev
      })
    }), eg(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, es.zZ.REQUIRE_TAG, e);
      (0, x.pW)({
        flags: n
      })
    }), eg(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, H.Z)(e, false) : er.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Q.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, x.pW)({
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
        let e = (0, H.Z)(t, true);
        e !== t && (0, x.pW)({
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
      (0, x.pW)({
        name: a
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), eg(this, "handleChangeTopic", e => {
      (0, x.pW)({
        topic: L.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eg(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), eg(this, "handleChangeTemplate", e => {
      (0, x.pW)({
        template: L.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eg(this, "handleChangeDefaultReactionEmoji", e => {
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
    }), eg(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), eg(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultSortOrder: e
      })
    }), eg(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, x.pW)({
        defaultTagSetting: e
      })
    }), eg(this, "handleChangeBitrate", e => {
      (0, x.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), eg(this, "handleUserLimitChange", e => {
      (0, x.pW)({
        userLimit: Math.round(e)
      })
    }), eg(this, "handleNSFWChange", e => {
      (0, x.pW)({
        nsfw: e
      })
    }), eg(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, es.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, x.pW)({
        flags: n
      })
    }), eg(this, "handleNewsChange", e => {
      (0, x.pW)({
        type: e ? er.d4z.GUILD_ANNOUNCEMENT : er.d4z.GUILD_TEXT
      })
    }), eg(this, "handleChangeSlowmode", e => {
      (0, x.pW)({
        rateLimitPerUser: e
      })
    }), eg(this, "handleChangeThreadMessageSlowmode", e => {
      (0, x.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), eg(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, x.pW)({
        defaultAutoArchiveDuration: e
      })
    }), eg(this, "handleRegionChange", e => {
      (0, x.pW)({
        rtcRegion: e === eC ? null : e
      })
    }), eg(this, "handleVideoQualityModeChange", e => {
      (0, x.pW)({
        videoQualityMode: e
      })
    }), eg(this, "handleAutoArchiveDurationChanged", e => {
      (0, x.pW)({
        autoArchiveDuration: e
      })
    }), eg(this, "handleInvitableChanged", e => {
      (0, x.pW)({
        invitable: e
      })
    }), eg(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, es.zZ.SUMMARIES_DISABLED, !e);
      (0, x.pW)({
        flags: n
      })
    }), eg(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, es.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
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

function eE() {
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
    canSendMessages: h
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    canManageChannels: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_CHANNELS, exports),
    canSendMessages: Chunk496675.Z.can(Chunk981631.Plq.SEND_MESSAGES, exports)
  })), p = (0, Chunk933557.ZP)(exports), m = Chunk314897.default.getId(), f = (0, Chunk109434.v)(), b = null == exports ? true : exports.id, x = (0, Chunk902840.ts)(exports, false, true), j = Chunk129865.Z.useExperiment({
    guildId: null == exports ? true : exports.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, v = Chunk473749.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [Chunk481060, Chunk780384]);
  return (0, Chunk54381.jsx)(eZ, {
    errors: module,
    channel: exports,
    channelName: Chunk796027,
    submitting: require,
    regions: s,
    theme: Chunk913527,
    guild: o,
    canManageChannels: (null == exports ? true : exports.isThread()) ? Chunk313361 : Chunk683860,
    canSendMessages: Chunk95015,
    isThreadModerator: Chunk697988,
    canManageThread: Chunk313361,
    subsection: Chunk120356,
    isForumPost: null != exports && exports.isForumPost(),
    isOwner: null == exports ? true : exports.isOwner(Chunk199849),
    handleSetDefaultLayout: Chunk410575,
    showChannelSummariesSettings: Chunk787014,
    showAdvancedSlowModeSetting: Chunk771340
  })
}