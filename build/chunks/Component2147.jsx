/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eS,
  Z: () => eZ
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
  Chunk543855 = require("./543855.js"),
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

function eh(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      eh(e, t, n[t])
    })
  }
  return e
}

function ep(e, t) {
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
let em = (0, Chunk313201.hQ)(),
  ef = (0, Chunk313201.hQ)(),
  eb = (0, Chunk313201.hQ)(),
  ex = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  ej = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  ev = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  ey = "AUTOMATIC_RTC_REGION",
  eC = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eS = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
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
        module.isThread() && (t = (0, Chunk543855.Z)(exports, true)), (0, Chunk787014.wk)(module.id, {
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
          defaultReactionEmoji: Chunk780384,
          availableTags: Chunk481060,
          defaultSortOrder: Chunk771340,
          defaultForumLayout: Chunk410575,
          defaultTagSetting: Chunk129865
        })
      }
    }
  })(Chunk796027.Z);

function eN(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = l.useRef(null), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(R.Z, {
      channel: n,
      guildId: r,
      pickerIntention: es.Hz.CHANNEL_NAME,
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
      analyticsOverride: ev
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
      return (0, i.jsx)(_.Z, ep(eg({}, e), {
        ref: s,
        active: n,
        className: ed.emojiButton,
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
class eO extends Chunk473749.PureComponent {
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? ec.intl.format(ec.t.EIQq9v, eC) : ec.intl.string(ec.t["a+1pdO"]) : (null == t ? true : t.isThread()) ? e ? ec.intl.format(ec.t["8sTC8t"], eC) : ec.intl.string(ec.t.OMmNCv) : e ? ec.intl.format(ec.t.wW2MWu, eC) : ec.intl.string(ec.t["HEA/DU"])
  }
  getCooldownSliderMarker(e) {
    return (0, ee.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, ee.A)(e * K.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, a, o, h, g;
    let p, m, {
        canManageChannels: b,
        canSendMessages: x,
        isThreadModerator: v,
        canManageThread: y,
        guild: S,
        isForumPost: O,
        isOwner: w,
        showAdvancedSlowModeSetting: T
      } = this.props,
      _ = G.Ec.has(e.type),
      R = e.isForumLikeChannel(),
      P = R && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      L = (null == (l = J.default.getCurrentUser()) ? true : l.isStaff()) === true,
      k = G.TK.has(e.type) ? (0, i.jsx)(f.gNt, {
        label: R ? ec.intl.string(ec.t.yR6HwZ) : ec.intl.string(ec.t.X8jMDh),
        children: (0, i.jsx)(Z.ZP, {
          className: s()(ed.topicContainer, {
            [ed.disabled]: !b
          }),
          innerClassName: s()(ed.topic, {
            [ed.disabled]: !b
          }),
          characterCountClassName: ed.topicCharacterCount,
          maxCharacterCount: R ? er.Z7 : er.$x,
          onChange: this.handleChangeRichTopic,
          placeholder: ec.intl.string(ec.t["71fbmh"]),
          channel: ex,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: R ? N.Ie.FORUM_CHANNEL_GUIDELINES : N.Ie.CHANNEL_TOPIC,
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
          disabled: !b,
          showValueWhenDisabled: true
        })
      }) : null,
      B = R && L ? (0, i.jsx)(f.Kx8, {
        label: ec.intl.string(ec.t.qk2jdY),
        placeholder: ec.intl.string(ec.t.DDjD1H),
        value: I.ZP.translateSurrogatesToInlineEmoji(null != (a = e.template) ? a : ""),
        onChange: this.handleChangeTemplate,
        error: this.getError("template"),
        maxLength: ea.Vb,
        disabled: !b,
        autosize: true,
        showCharacterCount: true
      }) : null,
      U = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.izJ, {}), (0, i.jsx)(f.gNt, {
          label: ec.intl.string(ec.t["P/y+sj"]),
          description: ec.intl.string(ec.t["/oQQ3y"]),
          errorMessage: this.getError("available_tags"),
          id: em,
          children: (0, i.jsx)(M.Z, {
            channel: e
          })
        }), (0, i.jsx)(f.Checkbox, {
          disabled: !b || P,
          checked: e.hasFlag(er.zZ.REQUIRE_TAG),
          onChange: e => this.handleRequireTagChanged(e),
          label: ec.intl.string(ec.t["9g2Zyv"])
        })]
      }) : null,
      W = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.izJ, {}), (0, i.jsx)(f.gNt, {
          label: ec.intl.string(ec.t["8ao1+E"]),
          description: ec.intl.string(ec.t.SdbF0q),
          children: (0, i.jsxs)("div", {
            className: ed.twoColumnSettings,
            children: [(0, i.jsx)("div", {
              className: s()(ed.settingsLeft, ed.settingsDefaultReaction),
              children: (0, i.jsxs)(f.ButtonGroup, {
                align: "center",
                children: [(0, i.jsx)(f.yRy, {
                  targetElementRef: this.defaultReactionButtonRef,
                  renderPopout: this.renderEmojiPicker,
                  position: "right",
                  animation: f.yRy.Animation.NONE,
                  align: "center",
                  children: e => (0, i.jsx)(f.Button, ep(eg({}, e), {
                    buttonRef: this.defaultReactionButtonRef,
                    text: ec.intl.string(ec.t["59QgaD"]),
                    disabled: !b,
                    onClick: t => {
                      var n;
                      null == (n = e.onClick) || n.call(e, t)
                    }
                  }))
                }), null != e.defaultReactionEmoji ? (0, i.jsx)(f.Avr, {
                  text: ec.intl.string(ec.t.N86XcP),
                  onClick: () => this.handleChangeDefaultReactionEmoji(null),
                  variant: "critical"
                }) : null]
              })
            }), (0, i.jsx)(A.Z, {
              reactionEmoji: e.defaultReactionEmoji
            })]
          })
        })]
      }) : null,
      F = e.isForumChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.izJ, {}), (0, i.jsxs)("div", {
          className: ed.twoColumnSettings,
          children: [(0, i.jsx)("div", {
            className: s()(ed.settingsLeft, ed.settingsDefaultView),
            children: (0, i.jsx)(f.q4e, {
              label: ec.intl.string(ec.t["kQvoC/"]),
              description: ec.intl.string(ec.t.mOSViT),
              options: [{
                label: ec.intl.string(ec.t["4HXEZG"]),
                value: c.X.LIST
              }, {
                label: ec.intl.string(ec.t["8RswJG"]),
                value: c.X.GRID
              }],
              value: null != (o = e.defaultForumLayout) ? o : c.X.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), e.defaultForumLayout === c.X.GRID ? (0, i.jsx)(en.Z, {
            className: ed.defaultImageView
          }) : (0, i.jsx)(ei.Z, {
            className: ed.defaultImageView
          })]
        }), (0, i.jsx)(f.izJ, {})]
      }) : null,
      z = e.isForumLikeChannel() ? (0, i.jsx)(f.q4e, {
        label: ec.intl.string(ec.t.gePre2),
        description: ec.intl.string(ec.t["165cVX"]),
        options: [{
          label: ec.intl.string(ec.t.ElZtzj),
          value: u.z.LATEST_ACTIVITY
        }, {
          label: ec.intl.string(ec.t.w28f3F),
          value: u.z.CREATION_DATE
        }],
        value: e.getDefaultSortOrder(),
        onChange: this.handleChangeDefaultSortOrder
      }) : null,
      q = e.isForumLikeChannel() ? (0, i.jsx)(f.q4e, {
        label: ec.intl.string(ec.t.Paxaug),
        description: ec.intl.string(ec.t.DqOl8J),
        options: [{
          label: ec.intl.string(ec.t.rQ0ctQ),
          value: d.z.MATCH_SOME
        }, {
          label: ec.intl.string(ec.t.FCXUu0),
          value: d.z.MATCH_ALL
        }],
        value: e.getDefaultTagSetting(),
        onChange: this.handleChangeDefaultTagSetting
      }) : null,
      Y = _ ? v : b,
      X = null == (r = E.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      Q = true === T ? (0, i.jsx)(et.Z, {
        label: ec.intl.string(ec.t.tTHx98),
        helperText: this.getSlowmodeHelpText(X),
        channel: e,
        onChange: this.handleChangeSlowmode
      }) : (0, i.jsx)(f.iRW, {
        label: ec.intl.string(ec.t.tTHx98),
        helperText: this.getSlowmodeHelpText(X),
        initialValue: e.rateLimitPerUser,
        markers: el.BiE,
        stickToMarkers: true,
        onValueChange: this.handleChangeSlowmode,
        onMarkerRender: this.getCooldownSliderMarker,
        disabled: !Y,
        equidistant: true,
        "aria-labelledby": ef,
        "aria-describedby": eb
      }),
      K = G.X_.has(e.type) ? R ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(f.izJ, {}), (0, i.jsxs)(f.C3N, {
          label: ec.intl.string(ec.t.O1c02q),
          children: [Q, (0, i.jsx)(f.iRW, {
            label: ec.intl.string(ec.t["fkY5+l"]),
            helperText: X ? ec.intl.format(ec.t.nZSuEj, eC) : ec.intl.string(ec.t.kdZU6H),
            initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
            markers: el.BiE,
            stickToMarkers: true,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !Y,
            equidistant: true,
            "aria-labelledby": ef,
            "aria-describedby": eb
          })]
        }), (0, i.jsx)(f.izJ, {})]
      }) : Q : null,
      ee = _ && null != e.threadMetadata ? (0, i.jsx)(j.Z, {
        page: el.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(H.Z, {
          isDisabled: !y,
          autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : eo.AX,
          onChange: this.handleAutoArchiveDurationChanged,
          helperText: O ? ec.intl.string(ec.t["3aJN9M"]) : ec.intl.string(ec.t.YUXr4Z)
        })
      }) : null,
      es = e.type === el.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(f.rsf, {
          label: ec.intl.string(ec.t.s2rpNf),
          description: ec.intl.string(ec.t.cSyXJk),
          checked: e.threadMetadata.invitable,
          onChange: this.handleInvitableChanged,
          disabled: !y
        })
      }) : null,
      eu = null != S && (0, V.Y2)(S),
      eh = G.ov.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(f.rsf, {
          label: ec.intl.string(ec.t.Es25Yf),
          description: ec.intl.string(ec.t["9eUgwR"]),
          onChange: this.handleNSFWChange,
          checked: (0, C.qF)(e),
          disabled: !b || null != e.linkedLobby || eu
        }), null != e.linkedLobby ? (0, i.jsx)(f.Wn, {
          messageType: f.QYI.WARNING,
          children: ec.intl.string(ec.t.l6uSVa)
        }) : null]
      }) : null,
      ej = G.Y0.has(e.type) && null != S && S.features.has(el.GuildFeatures.NEWS) && e.id !== (null == S ? true : S.rulesChannelId) && e.id !== (null == S ? true : S.publicUpdatesChannelId) ? (0, i.jsxs)(f.Kqy, {
        gap: 4,
        children: [(0, i.jsx)(f.rsf, {
          label: ec.intl.string(ec.t.Au2b7m),
          description: ec.intl.format(ec.t.tI7KNX, {
            documentationLink: $.Z.getArticleURL(el.BhN.ANNOUNCEMENT_CHANNELS)
          }),
          onChange: this.handleNewsChange,
          checked: e.type === el.d4z.GUILD_ANNOUNCEMENT,
          disabled: !b
        }), (0, i.jsx)(f.Wn, {
          messageType: f.QYI.INFO,
          children: ec.intl.string(ec.t["2Ab4Id"])
        })]
      }) : null,
      ev = G.uC.has(e.type) ? (0, i.jsx)(j.Z, {
        page: el.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(H.Z, {
          isDisabled: !b,
          autoArchiveDuration: (0, D.WD)(e, null),
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          helperText: e.isForumLikeChannel() ? ec.intl.string(ec.t.fyXclY) : ec.intl.string(ec.t.W3Noi9)
        })
      }) : null,
      ey = this.props.showChannelSummariesSettings ? (0, i.jsx)(f.rsf, {
        label: ec.intl.string(ec.t.id3ozj),
        description: ec.intl.format(ec.t.feJW1z, {
          helpdeskArticle: $.Z.getArticleURL(el.BhN.CONVERSATION_SUMMARIES)
        }),
        badge: "beta",
        onChange: this.handleChannelSummariesToggled,
        checked: !e.hasFlag(er.zZ.SUMMARIES_DISABLED) && (null == S ? true : S.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
        disabled: !b || !(null == S ? true : S.features.has(el.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
      }) : null,
      eS = e.isMediaChannel() ? (0, i.jsx)(f.rsf, {
        label: ec.intl.string(ec.t.u8LZOt),
        description: ec.intl.string(ec.t.J4wCc7),
        checked: !e.hasFlag(er.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        onChange: this.handleShowMediaOptionsToggled,
        disabled: !b
      }) : null;
    e.type === el.d4z.GUILD_CATEGORY ? (m = ec.intl.string(ec.t.OCAkGP), p = "category-name") : e.isForumPost() ? (m = ec.intl.string(ec.t.uyVrTN), p = "post-title") : _ ? (m = ec.intl.string(ec.t.j3XWjD), p = "thread-name") : (m = ec.intl.string(ec.t.PVbHDl), p = "channel-name");
    let eO = w ? x : b;
    return (0, i.jsxs)(f.Kqy, {
      gap: 24,
      children: [(0, i.jsx)(f.oil, {
        label: m,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: p,
        autoFocus: true,
        disabled: !eO,
        maxLength: el.HN8,
        trailing: eO ? {
          type: "emoji",
          button: (0, i.jsx)(eN, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), k, B, U, W, K, ee, F, z, q, es, eh, ej, ey, ev, eS]
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
    let l = (0, X.g7)(t, e),
      r = this.getError("bitrate");
    return (0, i.jsx)(f.iRW, {
      label: ec.intl.string(ec.t.w2d0vU),
      errorMessage: "" !== r ? r : true,
      helperText: l > el.epw ? ec.intl.format(ec.t.SbQJk5, {
        bitrate: el.epw / 1e3
      }) : true,
      initialValue: Math.min(e.bitrate, l),
      onValueChange: this.handleChangeBitrate,
      onValueRender: this.renderBitrate,
      onMarkerRender: this.renderBitrate,
      markers: [el.Fc, el.epw, l],
      minValue: el.Fc,
      maxValue: l,
      keyboardStep: el.V7H,
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
      value: el.Ucd.AUTO,
      name: ec.intl.string(ec.t.jjKYpu)
    }, {
      value: el.Ucd.FULL,
      name: ec.intl.string(ec.t["7jOoJE"])
    }];
    return (0, i.jsx)(f.FXm, {
      label: ec.intl.string(ec.t.jhJEJs),
      helperText: ec.intl.format(ec.t.c5W7Ss, {}),
      onChange: e => this.handleVideoQualityModeChange(e),
      options: l,
      value: null != (t = e.videoQualityMode) ? t : el.Ucd.AUTO,
      disabled: !n
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ec.intl.string(ec.t.XX5ciX) : ec.intl.formatToPlainString(ec.t["3uHFUR"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      l = e.isGuildStageVoice() ? el.xGv : el.$pe;
    return (0, i.jsx)(f.iRW, {
      label: ec.intl.string(ec.t["/AoSGN"]),
      errorMessage: "" !== n ? n : true,
      helperText: ec.intl.format(e.isGuildStageVoice() ? ec.t.OqZI8D : ec.t["8yb3JT"], {}),
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
      label: ec.intl.string(ec.t.JEmsap),
      value: ey
    });
    let a = null != (t = e.rtcRegion) ? t : ey;
    return (0, i.jsx)(f.q4e, {
      label: ec.intl.string(ec.t["Ms8bX+"]),
      description: ec.intl.string(ec.t["dbTs+z"]),
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
    return t = e.type === el.d4z.GUILD_CATEGORY ? (0, m.wj)(l) ? n(309095) : n(925442) : (0, m.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(w.Z, {
      justify: w.Z.Justify.CENTER,
      className: eu.marginTop60,
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
    super(e), eh(this, "defaultReactionButtonRef", l.createRef()), eh(this, "nameInputRef", l.createRef()), eh(this, "cursorPosition", 0), eh(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, i.jsx)(R.Z, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: i
          } = e;
          this.handleChangeDefaultReactionEmoji(n), i && t()
        },
        pickerIntention: es.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: ej
      })
    }), eh(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, er.zZ.REQUIRE_TAG, e);
      (0, b.pW)({
        flags: n
      })
    }), eh(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, B.Z)(e, false) : el.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, X.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, b.pW)({
        name: e
      }), setTimeout(() => {
        var e;
        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l)
      }, 0)
    }), eh(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? true : e.isThread()) && null != t) {
        let e = (0, B.Z)(t, true);
        e !== t && (0, b.pW)({
          name: e
        })
      }
    }), eh(this, "insertEmojiAtPosition", e => {
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
    }), eh(this, "handleChangeTopic", e => {
      (0, b.pW)({
        topic: I.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eh(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), eh(this, "handleChangeTemplate", e => {
      (0, b.pW)({
        template: I.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eh(this, "handleChangeDefaultReactionEmoji", e => {
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
    }), eh(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), eh(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultSortOrder: e
      })
    }), eh(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.pW)({
        defaultTagSetting: e
      })
    }), eh(this, "handleChangeBitrate", e => {
      (0, b.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), eh(this, "handleUserLimitChange", e => {
      (0, b.pW)({
        userLimit: Math.round(e)
      })
    }), eh(this, "handleNSFWChange", e => {
      (0, b.pW)({
        nsfw: e
      })
    }), eh(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, er.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, b.pW)({
        flags: n
      })
    }), eh(this, "handleNewsChange", e => {
      (0, b.pW)({
        type: e ? el.d4z.GUILD_ANNOUNCEMENT : el.d4z.GUILD_TEXT
      })
    }), eh(this, "handleChangeSlowmode", e => {
      (0, b.pW)({
        rateLimitPerUser: e
      })
    }), eh(this, "handleChangeThreadMessageSlowmode", e => {
      (0, b.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), eh(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, b.pW)({
        defaultAutoArchiveDuration: e
      })
    }), eh(this, "handleRegionChange", e => {
      (0, b.pW)({
        rtcRegion: e === ey ? null : e
      })
    }), eh(this, "handleVideoQualityModeChange", e => {
      (0, b.pW)({
        videoQualityMode: e
      })
    }), eh(this, "handleAutoArchiveDurationChanged", e => {
      (0, b.pW)({
        autoArchiveDuration: e
      })
    }), eh(this, "handleInvitableChanged", e => {
      (0, b.pW)({
        invitable: e
      })
    }), eh(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, er.zZ.SUMMARIES_DISABLED, !e);
      (0, b.pW)({
        flags: n
      })
    }), eh(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, er.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
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

function eZ() {
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
  }).enabled, C = Chunk473749.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [Chunk787014, Chunk481060]);
  return (0, Chunk54381.jsx)(eO, {
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
    isOwner: null == exports ? true : exports.isOwner(Chunk780384),
    handleSetDefaultLayout: Chunk622822,
    showChannelSummariesSettings: Chunk771340,
    showAdvancedSlowModeSetting: Chunk410575
  })
}