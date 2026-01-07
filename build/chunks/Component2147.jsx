/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => eZ,
  Z: () => eE
}), require("./997841.js"), require("./290780.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk266535 = require("./266535.jsx"),
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
  Chunk338915 = require("./338915.js"),
  Chunk478411 = require("./478411.js");

function eg(e, t, n) {
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
      eg(e, t, n[t])
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
let ep = (0, Chunk313201.hQ)(),
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
  eO = {
    breakingChangeDate: (0, Chunk55935.vc)(o()(Chunk981631.zQD), "LL"),
    helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SLOWMODE)
  },
  eZ = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
    let {
      channel: e,
      submitting: t
    } = z.Z.getProps();
    return {
      channel: e,
      submitting: t,
      onReset() {
        null != e && (0, x.S1)(e.id)
      },
      onSave() {
        if (null == e) return;
        let {
          name: t,
          type: n,
          topic: i,
          bitrate: l,
          userLimit: r,
          nsfw: a,
          flags: s,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: c,
          threadMetadata: d,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: m,
          defaultReactionEmoji: f,
          availableTags: p,
          defaultSortOrder: b,
          defaultForumLayout: j,
          defaultTagSetting: v
        } = e;
        e.isThread() && (t = (0, U.Z)(t, true)), (0, x.wk)(e.id, {
          name: t,
          type: n,
          topic: i,
          bitrate: l,
          userLimit: r,
          nsfw: a,
          flags: s,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: c,
          autoArchiveDuration: null == d ? true : d.autoArchiveDuration,
          locked: null == d ? true : d.locked,
          invitable: null == d ? true : d.invitable,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: m,
          defaultReactionEmoji: f,
          availableTags: p,
          defaultSortOrder: b,
          defaultForumLayout: j,
          defaultTagSetting: v
        })
      }
    }
  })(Chunk796027.Z);

function eS(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, a = l.useRef(null), s = l.useCallback(e => {
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
        null != n && n.type === L.B.UNICODE && t(n.surrogates), i && l()
      },
      showOnlyUnicode: true,
      analyticsOverride: ey
    })
  }, [n, r, t]);
  return (0, i.jsx)(b.yRy, {
    targetElementRef: a,
    renderPopout: s,
    animation: b.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(I.Z, ef(em({}, e), {
        ref: a,
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
class eN extends Chunk473749.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && j.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, i, l;
    let r = null != (i = null == (t = this.props.channel) ? true : t.topic) ? i : "";
    (null != (l = null == (n = e.channel) ? true : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, N.JM)(r)
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? ed.intl.format(ed.t.EIQq9v, eO) : ed.intl.string(ed.t["a+1pdO"]) : (null == t ? true : t.isThread()) ? e ? ed.intl.format(ed.t["8sTC8t"], eO) : ed.intl.string(ed.t.OMmNCv) : e ? ed.intl.format(ed.t.wW2MWu, eO) : ed.intl.string(ed.t["HEA/DU"])
  }
  getCooldownSliderMarker(e) {
    return (0, et.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, et.A)(e * $.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, s, o, h, g;
    let m, p, {
        canManageChannels: x,
        canSendMessages: j,
        isThreadModerator: y,
        canManageThread: C,
        guild: Z,
        isForumPost: N,
        isOwner: T,
        showAdvancedSlowModeSetting: P
      } = this.props,
      I = H.Ec.has(e.type),
      R = e.isForumLikeChannel(),
      L = R && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      A = (null == (l = X.default.getCurrentUser()) ? true : l.isStaff()) === true,
      B = H.TK.has(e.type) ? (0, i.jsx)(b.gNt, {
        label: R ? ed.intl.string(ed.t.yR6HwZ) : ed.intl.string(ed.t.X8jMDh),
        children: (0, i.jsx)(E.ZP, {
          className: a()(eu.topicContainer, {
            [eu.disabled]: !x
          }),
          innerClassName: a()(eu.topic, {
            [eu.disabled]: !x
          }),
          characterCountClassName: eu.topicCharacterCount,
          maxCharacterCount: R ? ea.Z7 : ea.$x,
          onChange: this.handleChangeRichTopic,
          placeholder: ed.intl.string(ed.t["71fbmh"]),
          channel: ej,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: R ? S.Ie.FORUM_CHANNEL_GUIDELINES : S.Ie.CHANNEL_TOPIC,
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
      U = R && A ? (0, i.jsx)(b.Kx8, {
        label: ed.intl.string(ed.t.qk2jdY),
        placeholder: ed.intl.string(ed.t.DDjD1H),
        value: M.ZP.translateSurrogatesToInlineEmoji(null != (s = e.template) ? s : ""),
        onChange: this.handleChangeTemplate,
        error: this.getError("template"),
        maxLength: eo.Vb,
        disabled: !x,
        autosize: true,
        showCharacterCount: true
      }) : null,
      V = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsx)(b.gNt, {
          label: ed.intl.string(ed.t["P/y+sj"]),
          description: ed.intl.string(ed.t["/oQQ3y"]),
          errorMessage: this.getError("available_tags"),
          id: ep,
          children: (0, i.jsx)(_.Z, {
            channel: e
          })
        }), (0, i.jsx)(b.Checkbox, {
          disabled: !x || L,
          checked: e.hasFlag(ea.zZ.REQUIRE_TAG),
          onChange: e => this.handleRequireTagChanged(e),
          label: ed.intl.string(ed.t["9g2Zyv"])
        })]
      }) : null,
      W = e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsx)(b.gNt, {
          label: ed.intl.string(ed.t["8ao1+E"]),
          description: ed.intl.string(ed.t.SdbF0q),
          children: (0, i.jsxs)("div", {
            className: eu.twoColumnSettings,
            children: [(0, i.jsx)("div", {
              className: a()(eu.settingsLeft, eu.settingsDefaultReaction),
              children: (0, i.jsxs)(b.ButtonGroup, {
                align: "center",
                children: [(0, i.jsx)(b.yRy, {
                  targetElementRef: this.defaultReactionButtonRef,
                  renderPopout: this.renderEmojiPicker,
                  position: "right",
                  animation: b.yRy.Animation.NONE,
                  align: "center",
                  children: e => (0, i.jsx)(b.Button, ef(em({}, e), {
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
            className: a()(eu.settingsLeft, eu.settingsDefaultView),
            children: (0, i.jsx)(f.y6, {
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
      Y = e.isForumLikeChannel() ? (0, i.jsx)(f.y6, {
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
      q = e.isForumLikeChannel() ? (0, i.jsx)(f.y6, {
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
      J = I ? y : x,
      Q = null == (r = w.Z.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : r.enabled,
      K = true === P ? (0, i.jsx)(en.Z, {
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
      $ = H.X_.has(e.type) ? R ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(b.izJ, {}), (0, i.jsxs)(b.C3N, {
          label: ed.intl.string(ed.t.O1c02q),
          children: [K, (0, i.jsx)(b.iRW, {
            label: ed.intl.string(ed.t["fkY5+l"]),
            helperText: Q ? ed.intl.format(ed.t.nZSuEj, eO) : ed.intl.string(ed.t.kdZU6H),
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
      et = I && null != e.threadMetadata ? (0, i.jsx)(v.Z, {
        page: er.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(G.Z, {
          isDisabled: !C,
          autoArchiveDuration: null != (g = e.threadMetadata.autoArchiveDuration) ? g : ec.AX,
          onChange: this.handleAutoArchiveDurationChanged,
          helperText: N ? ed.intl.string(ed.t["3aJN9M"]) : ed.intl.string(ed.t.YUXr4Z)
        })
      }) : null,
      es = e.type === er.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(b.rsf, {
          label: ed.intl.string(ed.t.s2rpNf),
          description: ed.intl.string(ed.t.cSyXJk),
          checked: e.threadMetadata.invitable,
          onChange: this.handleInvitableChanged,
          disabled: !C
        })
      }) : null,
      eh = null != Z && (0, F.Y2)(Z),
      eg = H.ov.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(b.rsf, {
          label: ed.intl.string(ed.t.Es25Yf),
          description: ed.intl.string(ed.t["9eUgwR"]),
          onChange: this.handleNSFWChange,
          checked: (0, O.qF)(e),
          disabled: !x || null != e.linkedLobby || eh
        }), null != e.linkedLobby ? (0, i.jsx)(b.Wn, {
          messageType: b.QYI.WARNING,
          children: ed.intl.string(ed.t.l6uSVa)
        }) : null]
      }) : null,
      ev = H.Y0.has(e.type) && null != Z && Z.features.has(er.GuildFeatures.NEWS) && e.id !== (null == Z ? true : Z.rulesChannelId) && e.id !== (null == Z ? true : Z.publicUpdatesChannelId) ? (0, i.jsxs)(b.Kqy, {
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
      ey = H.uC.has(e.type) ? (0, i.jsx)(v.Z, {
        page: er.ZY5.CHANNEL_SETTINGS,
        children: (0, i.jsx)(G.Z, {
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
        checked: !e.hasFlag(ea.zZ.SUMMARIES_DISABLED) && (null == Z ? true : Z.features.has(er.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
        disabled: !x || !(null == Z ? true : Z.features.has(er.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
      }) : null,
      eZ = e.isMediaChannel() ? (0, i.jsx)(b.rsf, {
        label: ed.intl.string(ed.t.u8LZOt),
        description: ed.intl.string(ed.t.J4wCc7),
        checked: !e.hasFlag(ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        onChange: this.handleShowMediaOptionsToggled,
        disabled: !x
      }) : null;
    e.type === er.d4z.GUILD_CATEGORY ? (p = ed.intl.string(ed.t.OCAkGP), m = "category-name") : e.isForumPost() ? (p = ed.intl.string(ed.t.uyVrTN), m = "post-title") : I ? (p = ed.intl.string(ed.t.j3XWjD), m = "thread-name") : (p = ed.intl.string(ed.t.PVbHDl), m = "channel-name");
    let eN = T ? j : x;
    return (0, i.jsxs)(b.Kqy, {
      gap: 24,
      children: [(0, i.jsx)(b.oil, {
        label: p,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: m,
        autoFocus: true,
        disabled: !eN,
        maxLength: er.HN8,
        trailing: eN ? {
          type: "emoji",
          button: (0, i.jsx)(eS, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), B, U, V, W, $, et, z, Y, q, es, eg, ev, eC, ey, eZ]
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
    return null != e && null != e.guild_id && H.vg.has(e.type) && (e.isGuildVocal() || B.tM.getCurrentConfig({
      guildId: e.guild_id,
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
    let a = [];
    null != n && (a = n.filter(e => !e.deprecated && !e.hidden).map(e => ({
      label: e.name,
      value: e.id
    }))).unshift({
      label: ed.intl.string(ed.t.JEmsap),
      value: eC
    });
    let s = null != (t = e.rtcRegion) ? t : eC;
    return (0, i.jsx)(f.y6, {
      label: ed.intl.string(ed.t["Ms8bX+"]),
      description: ed.intl.string(ed.t["dbTs+z"]),
      options: a,
      value: s,
      onChange: this.handleRegionChange,
      isDisabled: !l
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === er.d4z.GUILD_CATEGORY ? (0, p.wj)(l) ? n(309095) : n(925442) : (0, p.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(T.Z, {
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
    return null == e || null == t || null == n ? null : (0, i.jsxs)(b.C3N, {
      label: ed.intl.string(ed.t["/dp6yY"]),
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, i.jsx)(b.izJ, {
        gap: 24
      }) : null, this.renderVoiceBitrate(e, n), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
        analyticsOverride: ev
      })
    }), eg(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, ea.zZ.REQUIRE_TAG, e);
      (0, x.pW)({
        flags: n
      })
    }), eg(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, U.Z)(e, false) : er.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, Q.Nj)(e));
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
        let e = (0, U.Z)(t, true);
        e !== t && (0, x.pW)({
          name: e
        })
      }
    }), eg(this, "insertEmojiAtPosition", e => {
      var t, n;
      let i = this.nameInputRef.current,
        l = null != (t = null == i ? true : i.selectionStart) ? t : 0,
        r = null != (n = null == i ? true : i.selectionEnd) ? n : 0,
        a = this.props.channelName,
        s = (null == a ? true : a.substring(0, l)) + e + (null == a ? true : a.substring(r));
      (0, x.pW)({
        name: s
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), eg(this, "handleChangeTopic", e => {
      (0, x.pW)({
        topic: M.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), eg(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), eg(this, "handleChangeTemplate", e => {
      (0, x.pW)({
        template: M.ZP.translateInlineEmojiToSurrogates(e)
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
      let n = (0, h.mB)(t.flags, ea.zZ.ACTIVE_CHANNELS_REMOVED, !e);
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
      let n = (0, h.mB)(t.flags, ea.zZ.SUMMARIES_DISABLED, !e);
      (0, x.pW)({
        flags: n
      })
    }), eg(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.mB)(t.flags, ea.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, x.pW)({
        flags: n
      })
    });
    let r = null != (n = null == (t = this.props.channel) ? true : t.topic) ? n : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, N.JM)(r),
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
  } = (0, g.cj)([z.Z], () => z.Z.getProps()), a = (0, g.e7)([J.Z], () => {
    var e;
    return J.Z.getRegions(null != (e = null == t ? true : t.getGuildId()) ? e : null)
  }), s = (0, g.e7)([V.Z], () => V.Z.theme), o = (0, g.e7)([Y.Z], () => Y.Z.getGuild(null == t ? true : t.getGuildId())), c = (0, B.C7)(t), d = (0, B.Xb)(t), {
    canManageChannels: u,
    canSendMessages: h
  } = (0, g.cj)([q.Z], () => ({
    canManageChannels: q.Z.can(er.Plq.MANAGE_CHANNELS, t),
    canSendMessages: q.Z.can(er.Plq.SEND_MESSAGES, t)
  })), m = (0, Z.ZP)(t), f = W.default.getId(), p = (0, A.v)(), b = null == t ? true : t.id, x = (0, C.ts)(t, false, true), j = y.Z.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, v = l.useCallback(e => {
    null != b && p.getState().setLayoutType(b, e)
  }, [b, p]);
  return (0, i.jsx)(eN, {
    errors: e,
    channel: t,
    channelName: m,
    submitting: n,
    regions: a,
    theme: s,
    guild: o,
    canManageChannels: (null == t ? true : t.isThread()) ? c : u,
    canSendMessages: h,
    isThreadModerator: d,
    canManageThread: c,
    subsection: r,
    isForumPost: null != t && t.isForumPost(),
    isOwner: null == t ? true : t.isOwner(f),
    handleSetDefaultLayout: v,
    showChannelSummariesSettings: x,
    showAdvancedSlowModeSetting: j
  })
}