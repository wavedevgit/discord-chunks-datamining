/** Chunk was on 78888 **/
/** chunk id: 865678, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => eN,
  w: () => ev
}), require("./938796.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk371444 = require("./371444.js"),
  Chunk392421 = require("./392421.js"),
  Chunk602137 = require("./602137.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk534963 = require("./534963.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk213464 = require("./213464.js"),
  Chunk432371 = require("./432371.js"),
  Chunk323073 = require("./323073.js"),
  Chunk47167 = require("./47167.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk386849 = require("./386849.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk937773 = require("./937773.jsx"),
  Chunk770335 = require("./770335.js"),
  Chunk7584 = require("./7584.js"),
  Chunk422844 = require("./422844.js"),
  Chunk856220 = require("./856220.jsx"),
  Chunk235640 = require("./235640.jsx"),
  Chunk268761 = require("./268761.js"),
  Chunk406704 = require("./406704.js"),
  Chunk474078 = require("./474078.js"),
  Chunk71397 = require("./71397.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk961350 = require("./961350.js"),
  Chunk863036 = require("./863036.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk717518 = require("./717518.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147036 = require("./147036.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk975571 = require("./975571.js"),
  Chunk879631 = require("./879631.js"),
  Chunk532277 = require("./532277.jsx"),
  Chunk592739 = require("./592739.jsx"),
  Chunk436387 = require("./436387.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk307731 = require("./307731.js");
require("./253913.js");
var Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935456 = require("./935456.js"),
  Chunk473169 = require("./473169.js");

function eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      eu(e, t, n[t])
    })
  }
  return e
}

function eg(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let em = (0, Chunk915089.Ld)(),
  ep = (0, Chunk915089.Ld)(),
  ef = (0, Chunk915089.Ld)(),
  eb = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  ex = {
    popoutLocation: {
      page: Chunk652215.liQ.CHANNEL_SETTINGS,
      section: Chunk652215.JJy.CHANNEL_DEFAULT_REACTION,
      object: Chunk652215.ZSU.EMOJI_PICKER_BUTTON
    }
  },
  ej = {
    popoutLocation: {
      page: Chunk652215.liQ.CHANNEL_SETTINGS,
      section: Chunk652215.JJy.CHANNEL_NAME,
      object: Chunk652215.ZSU.EMOJI_PICKER_BUTTON
    }
  },
  eA = "AUTOMATIC_RTC_REGION",
  ey = {
    breakingChangeDate: (0, Chunk405269.i$)(o()(Chunk652215.X30), "LL"),
    helpCenterLink: Chunk975571.A.getArticleURL(Chunk652215.MVz.SLOWMODE)
  },
  ev = Chunk311907.Ay.connectStores([Chunk863036.A], () => {
    let {
      channel: e,
      submitting: t
    } = Z.A.getProps();
    return {
      channel: e,
      submitting: t,
      onReset() {
        null != e && (0, b.Ts)(e.id)
      },
      onSave() {
        if (null == e) return;
        let {
          name: t,
          type: n,
          topic: l,
          bitrate: i,
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
          defaultSortOrder: x,
          defaultForumLayout: j,
          defaultTagSetting: A
        } = e;
        e.isThread() && (t = (0, B.A)(t, true)), (0, b.RT)(e.id, {
          name: t,
          type: n,
          topic: l,
          bitrate: i,
          userLimit: r,
          nsfw: s,
          flags: a,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: c,
          autoArchiveDuration: null == d ? true : d.autoArchiveDuration,
          locked: null == d ? true : d.locked,
          invitable: null == d ? true : d.invitable,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: m,
          defaultReactionEmoji: p,
          availableTags: f,
          defaultSortOrder: x,
          defaultForumLayout: j,
          defaultTagSetting: A
        })
      }
    }
  })(Chunk36525.A);

function eO(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = i.useRef(null), a = i.useCallback(e => {
    let {
      closePopout: i
    } = e;
    return (0, l.jsx)(M.A, {
      channel: n,
      guildId: r,
      pickerIntention: es.b_.CHANNEL_NAME,
      closePopout: i,
      onNavigateAway: i,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: l
        } = e;
        null != n && n.type === R.i.UNICODE && t(n.surrogates), l && i()
      },
      showOnlyUnicode: true,
      analyticsOverride: ej
    })
  }, [n, r, t]);
  return (0, l.jsx)(f.YNO, {
    targetElementRef: s,
    renderPopout: a,
    animation: f.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.jsx)(w.A, eg(eh({}, e), {
        ref: s,
        active: n,
        className: ec.Z8,
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
class eC extends Chunk64700.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && x.A.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, l, i;
    let r = null != (t = null == (l = this.props.channel) ? true : l.topic) ? t : "";
    (null != (n = null == (i = e.channel) ? true : i.topic) ? n : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, N.x7)(r)
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
    return (null == t ? true : t.isForumLikeChannel()) ? e ? eo.intl.format(eo.t.EIQq9v, ey) : eo.intl.string(eo.t["a+1pdO"]) : (null == t ? true : t.isThread()) ? e ? eo.intl.format(eo.t["8sTC8t"], ey) : eo.intl.string(eo.t.OMmNCv) : e ? eo.intl.format(eo.t.wW2MWu, ey) : eo.intl.string(eo.t["HEA/DU"])
  }
  getCooldownSliderMarker(e) {
    return (0, ee.$)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, ee.$)(e * K.A.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, i, r, a, o, h, g;
    let m, p, {
        canManageChannels: b,
        canSendMessages: x,
        isThreadModerator: A,
        canManageThread: y,
        guild: O,
        isForumPost: N,
        isOwner: _,
        showAdvancedSlowModeSetting: T
      } = this.props,
      w = H.Le.has(e.type),
      M = e.isForumLikeChannel(),
      R = M && (null == (o = e.availableTags) ? true : o.every(e => e.moderated)),
      L = (null == (h = Q.default.getCurrentUser()) ? true : h.isStaff()) === true,
      G = H.IY.has(e.type) ? (0, l.jsx)(f.D0$, {
        label: M ? eo.intl.string(eo.t.yR6HwZ) : eo.intl.string(eo.t.X8jMDh),
        children: (0, l.jsx)(S.Ay, {
          className: s()(ec.zm, {
            [ec.r9]: !b
          }),
          innerClassName: s()(ec.At, {
            [ec.r9]: !b
          }),
          characterCountClassName: ec.IQ,
          maxCharacterCount: M ? er.U9 : er.s4,
          onChange: this.handleChangeRichTopic,
          placeholder: eo.intl.string(eo.t["71fbmh"]),
          channel: eb,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: M ? C.oU.FORUM_CHANNEL_GUIDELINES : C.oU.CHANNEL_TOPIC,
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
      B = M && L ? (0, l.jsx)(f.fs1, {
        label: eo.intl.string(eo.t.qk2jdY),
        placeholder: eo.intl.string(eo.t.DDjD1H),
        value: I.Ay.translateSurrogatesToInlineEmoji(null != (n = e.template) ? n : ""),
        onChange: this.handleChangeTemplate,
        error: this.getError("template"),
        maxLength: 256,
        disabled: !b,
        autosize: true,
        showCharacterCount: true
      }) : null,
      V = e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.cGx, {}), (0, l.jsx)(f.D0$, {
          label: eo.intl.string(eo.t["P/y+sj"]),
          description: eo.intl.string(eo.t["/oQQ3y"]),
          errorMessage: this.getError("available_tags"),
          id: em,
          children: (0, l.jsx)(P.A, {
            channel: e
          })
        }), (0, l.jsx)(f.Checkbox, {
          disabled: !b || R,
          checked: e.hasFlag(er.lx.REQUIRE_TAG),
          onChange: e => this.handleRequireTagChanged(e),
          label: eo.intl.string(eo.t["9g2Zyv"])
        })]
      }) : null,
      W = e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.cGx, {}), (0, l.jsx)(f.D0$, {
          label: eo.intl.string(eo.t["8ao1+E"]),
          description: eo.intl.string(eo.t.SdbF0q),
          children: (0, l.jsxs)("div", {
            className: ec.OZ,
            children: [(0, l.jsx)("div", {
              className: s()(ec.t0, ec._h),
              children: (0, l.jsxs)(f.ButtonGroup, {
                align: "center",
                children: [(0, l.jsx)(f.YNO, {
                  targetElementRef: this.defaultReactionButtonRef,
                  renderPopout: this.renderEmojiPicker,
                  position: "right",
                  animation: f.YNO.Animation.NONE,
                  align: "center",
                  children: e => (0, l.jsx)(f.Button, eg(eh({}, e), {
                    buttonRef: this.defaultReactionButtonRef,
                    text: eo.intl.string(eo.t["59QgaD"]),
                    disabled: !b,
                    onClick: t => {
                      var n;
                      null == (n = e.onClick) || n.call(e, t)
                    }
                  }))
                }), null != e.defaultReactionEmoji ? (0, l.jsx)(f.QWc, {
                  text: eo.intl.string(eo.t.N86XcP),
                  onClick: () => this.handleChangeDefaultReactionEmoji(null),
                  variant: "critical"
                }) : null]
              })
            }), (0, l.jsx)(D.A, {
              reactionEmoji: e.defaultReactionEmoji
            })]
          })
        })]
      }) : null,
      Z = e.isForumChannel() ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.cGx, {}), (0, l.jsxs)("div", {
          className: ec.OZ,
          children: [(0, l.jsx)("div", {
            className: s()(ec.t0, ec.WC),
            children: (0, l.jsx)(f.l6P, {
              selectionMode: "single",
              label: eo.intl.string(eo.t["kQvoC/"]),
              description: eo.intl.string(eo.t.mOSViT),
              options: [{
                id: "list",
                label: eo.intl.string(eo.t["4HXEZG"]),
                value: c.C.LIST
              }, {
                id: "grid",
                label: eo.intl.string(eo.t["8RswJG"]),
                value: c.C.GRID
              }],
              value: null != (i = e.defaultForumLayout) ? i : c.C.LIST,
              onSelectionChange: this.handleChangeDefaultForumLayout
            })
          }), e.defaultForumLayout === c.C.GRID ? (0, l.jsx)(en.A, {
            className: ec.Kf
          }) : (0, l.jsx)(el.A, {
            className: ec.Kf
          })]
        }), (0, l.jsx)(f.cGx, {})]
      }) : null,
      Y = e.isForumLikeChannel() ? (0, l.jsx)(f.l6P, {
        selectionMode: "single",
        label: eo.intl.string(eo.t.gePre2),
        description: eo.intl.string(eo.t["165cVX"]),
        options: [{
          id: "activity",
          label: eo.intl.string(eo.t.ElZtzj),
          value: u.T.LATEST_ACTIVITY
        }, {
          id: "creation",
          label: eo.intl.string(eo.t.w28f3F),
          value: u.T.CREATION_DATE
        }],
        value: e.getDefaultSortOrder(),
        onSelectionChange: this.handleChangeDefaultSortOrder
      }) : null,
      J = e.isForumLikeChannel() ? (0, l.jsx)(f.l6P, {
        selectionMode: "single",
        label: eo.intl.string(eo.t.Paxaug),
        description: eo.intl.string(eo.t.DqOl8J),
        options: [{
          id: "some",
          label: eo.intl.string(eo.t.rQ0ctQ),
          value: d.n.MATCH_SOME
        }, {
          id: "all",
          label: eo.intl.string(eo.t.FCXUu0),
          value: d.n.MATCH_ALL
        }],
        value: e.getDefaultTagSetting(),
        onSelectionChange: this.handleChangeDefaultTagSetting
      }) : null,
      z = w ? A : b,
      X = null == (g = E.A.getCurrentConfig({
        guildId: e.guild_id,
        location: "ChannelSettingsOverview"
      })) ? true : g.enabled,
      q = true === T ? (0, l.jsx)(et.A, {
        label: eo.intl.string(eo.t.tTHx98),
        helperText: this.getSlowmodeHelpText(X),
        channel: e,
        onChange: this.handleChangeSlowmode
      }) : (0, l.jsx)(f.Apm, {
        label: eo.intl.string(eo.t.tTHx98),
        helperText: this.getSlowmodeHelpText(X),
        initialValue: e.rateLimitPerUser,
        markers: ei.s_7,
        stickToMarkers: true,
        onValueChange: this.handleChangeSlowmode,
        onMarkerRender: this.getCooldownSliderMarker,
        disabled: !z,
        equidistant: true,
        "aria-labelledby": ep,
        "aria-describedby": ef
      }),
      K = H.nb.has(e.type) ? M ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(f.cGx, {}), (0, l.jsxs)(f.nVY, {
          label: eo.intl.string(eo.t.O1c02q),
          children: [q, (0, l.jsx)(f.Apm, {
            label: eo.intl.string(eo.t["fkY5+l"]),
            helperText: X ? eo.intl.format(eo.t.nZSuEj, ey) : eo.intl.string(eo.t.kdZU6H),
            initialValue: null != (r = e.defaultThreadRateLimitPerUser) ? r : 0,
            markers: ei.s_7,
            stickToMarkers: true,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !z,
            equidistant: true,
            "aria-labelledby": ep,
            "aria-describedby": ef
          })]
        }), (0, l.jsx)(f.cGx, {})]
      }) : q : null,
      ee = w && null != e.threadMetadata ? (0, l.jsx)(j.A, {
        page: ei.liQ.CHANNEL_SETTINGS,
        children: (0, l.jsx)(U.A, {
          isDisabled: !y,
          autoArchiveDuration: null != (a = e.threadMetadata.autoArchiveDuration) ? a : ea.cM,
          onChange: this.handleAutoArchiveDurationChanged,
          helperText: N ? eo.intl.string(eo.t["3aJN9M"]) : eo.intl.string(eo.t.YUXr4Z)
        })
      }) : null,
      es = e.type === ei.rbe.PRIVATE_THREAD && null != e.threadMetadata ? (0, l.jsx)("div", {
        children: (0, l.jsx)(f.dOG, {
          label: eo.intl.string(eo.t.s2rpNf),
          description: eo.intl.string(eo.t.cSyXJk),
          checked: e.threadMetadata.invitable,
          onChange: this.handleInvitableChanged,
          disabled: !y
        })
      }) : null,
      ed = null != O && (0, F.wh)(O),
      eu = H.LE.has(e.type) ? (0, l.jsxs)("div", {
        children: [(0, l.jsx)(f.dOG, {
          label: eo.intl.string(eo.t.Es25Yf),
          description: eo.intl.string(eo.t["9eUgwR"]),
          onChange: this.handleNSFWChange,
          checked: (0, v.Gc)(e),
          disabled: !b || null != e.linkedLobby || ed
        }), null != e.linkedLobby ? (0, l.jsx)(f.po8, {
          messageType: f.YCn.WARNING,
          children: eo.intl.string(eo.t.l6uSVa)
        }) : null]
      }) : null,
      ex = H.xR.has(e.type) && null != O && O.features.has(ei.GuildFeatures.NEWS) && e.id !== (null == O ? true : O.rulesChannelId) && e.id !== (null == O ? true : O.publicUpdatesChannelId) ? (0, l.jsxs)(f.BJc, {
        gap: 4,
        children: [(0, l.jsx)(f.dOG, {
          label: eo.intl.string(eo.t.Au2b7m),
          description: eo.intl.format(eo.t.tI7KNX, {
            documentationLink: $.A.getArticleURL(ei.MVz.ANNOUNCEMENT_CHANNELS)
          }),
          onChange: this.handleNewsChange,
          checked: e.type === ei.rbe.GUILD_ANNOUNCEMENT,
          disabled: !b
        }), (0, l.jsx)(f.po8, {
          messageType: f.YCn.INFO,
          children: eo.intl.string(eo.t["2Ab4Id"])
        })]
      }) : null,
      ej = H.wE.has(e.type) ? (0, l.jsx)(j.A, {
        page: ei.liQ.CHANNEL_SETTINGS,
        children: (0, l.jsx)(U.A, {
          isDisabled: !b,
          autoArchiveDuration: (0, k.Gl)(e, null),
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          helperText: e.isForumLikeChannel() ? eo.intl.string(eo.t.fyXclY) : eo.intl.string(eo.t.W3Noi9)
        })
      }) : null,
      eA = this.props.showChannelSummariesSettings ? (0, l.jsx)(f.dOG, {
        label: eo.intl.string(eo.t.id3ozj),
        description: eo.intl.format(eo.t.feJW1z, {
          helpdeskArticle: $.A.getArticleURL(ei.MVz.CONVERSATION_SUMMARIES)
        }),
        badge: "beta",
        onChange: this.handleChannelSummariesToggled,
        checked: !e.hasFlag(er.lx.SUMMARIES_DISABLED) && (null == O ? true : O.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
        disabled: !b || !(null == O ? true : O.features.has(ei.GuildFeatures.SUMMARIES_ENABLED_BY_USER))
      }) : null,
      ev = e.isMediaChannel() ? (0, l.jsx)(f.dOG, {
        label: eo.intl.string(eo.t.u8LZOt),
        description: eo.intl.string(eo.t.J4wCc7),
        checked: !e.hasFlag(er.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        onChange: this.handleShowMediaOptionsToggled,
        disabled: !b
      }) : null;
    e.type === ei.rbe.GUILD_CATEGORY ? (p = eo.intl.string(eo.t.OCAkGP), m = "category-name") : e.isForumPost() ? (p = eo.intl.string(eo.t.uyVrTN), m = "post-title") : w ? (p = eo.intl.string(eo.t.j3XWjD), m = "thread-name") : (p = eo.intl.string(eo.t.PVbHDl), m = "channel-name");
    let eC = _ ? x : b;
    return (0, l.jsxs)(f.BJc, {
      gap: 24,
      children: [(0, l.jsx)(f.ksK, {
        label: p,
        fullWidth: true,
        inputRef: this.nameInputRef,
        value: t,
        onChange: this.handleChangeName,
        onBlur: this.handleBlurName,
        error: this.getError("name"),
        name: m,
        autoFocus: true,
        disabled: !eC,
        maxLength: ei.Ign,
        trailing: eC ? {
          type: "emoji",
          button: (0, l.jsx)(eO, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })
        } : true
      }), G, B, V, W, K, ee, Z, Y, J, es, eu, ex, eA, ej, ev]
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
    let i = (0, X.Jz)(t, e),
      r = this.getError("bitrate");
    return (0, l.jsx)(f.Apm, {
      label: eo.intl.string(eo.t.w2d0vU),
      errorMessage: "" !== r ? r : true,
      helperText: i > ei.gp3 ? eo.intl.format(eo.t.SbQJk5, {
        bitrate: ei.gp3 / 1e3
      }) : true,
      initialValue: Math.min(e.bitrate, i),
      onValueChange: this.handleChangeBitrate,
      onValueRender: this.renderBitrate,
      onMarkerRender: this.renderBitrate,
      markers: [ei.hcd, ei.gp3, i],
      minValue: ei.hcd,
      maxValue: i,
      keyboardStep: ei.l2F,
      disabled: !n
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != e && null != e.guild_id && H.k.has(e.type) && (e.isGuildVocal() || G.io.getCurrentConfig({
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
    let i = [{
      value: ei.K3c.AUTO,
      name: eo.intl.string(eo.t.jjKYpu)
    }, {
      value: ei.K3c.FULL,
      name: eo.intl.string(eo.t["7jOoJE"])
    }];
    return (0, l.jsx)(f.z6M, {
      label: eo.intl.string(eo.t.jhJEJs),
      helperText: eo.intl.format(eo.t.c5W7Ss, {}),
      onChange: e => this.handleVideoQualityModeChange(e),
      options: i,
      value: null != (t = e.videoQualityMode) ? t : ei.K3c.AUTO,
      disabled: !n
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? eo.intl.string(eo.t.XX5ciX) : eo.intl.formatToPlainString(eo.t["3uHFUR"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      i = e.isGuildStageVoice() ? ei.RCc : ei.cSc;
    return (0, l.jsx)(f.Apm, {
      label: eo.intl.string(eo.t["/AoSGN"]),
      errorMessage: "" !== n ? n : true,
      helperText: eo.intl.format(e.isGuildStageVoice() ? eo.t.OqZI8D : eo.t["8yb3JT"], {}),
      initialValue: Math.min(e.userLimit, i),
      onValueChange: this.handleUserLimitChange,
      onValueRender: this.onRenderUserLimit,
      onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
      markers: [0, i],
      minValue: 0,
      maxValue: i,
      disabled: !t
    })
  }
  renderRegionOverride(e) {
    var t;
    let {
      regions: n,
      canManageChannels: i,
      guild: r
    } = this.props;
    if (null == r || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
    let s = [];
    null != n && (s = n.filter(e => !e.deprecated && !e.hidden).map(e => ({
      id: e.id,
      label: e.name,
      value: e.id
    }))).unshift({
      id: "auto",
      label: eo.intl.string(eo.t.JEmsap),
      value: eA
    });
    let a = null != (t = e.rtcRegion) ? t : eA;
    return (0, l.jsx)(f.l6P, {
      selectionMode: "single",
      label: eo.intl.string(eo.t["Ms8bX+"]),
      description: eo.intl.string(eo.t["dbTs+z"]),
      options: s,
      value: a,
      onSelectionChange: this.handleRegionChange,
      disabled: !i
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: i
    } = this.props;
    return t = e.type === ei.rbe.GUILD_CATEGORY ? (0, p.Mw)(i) ? n(477777) : n(517649) : (0, p.Mw)(i) ? n(241306) : n(16474), (0, l.jsx)(_.A, {
      justify: _.A.Justify.CENTER,
      className: ed.o9,
      children: (0, l.jsx)("img", {
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
    return null == e || null == t || null == n ? null : (0, l.jsxs)(f.nVY, {
      label: eo.intl.string(eo.t["/dp6yY"]),
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, l.jsx)(f.cGx, {
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
    super(e), eu(this, "defaultReactionButtonRef", i.createRef()), eu(this, "nameInputRef", i.createRef()), eu(this, "cursorPosition", 0), eu(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, l.jsx)(M.A, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: l
          } = e;
          this.handleChangeDefaultReactionEmoji(n), l && t()
        },
        pickerIntention: es.b_.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: ex
      })
    }), eu(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.lA)(t.flags, er.lx.REQUIRE_TAG, e);
      (0, b.fy)({
        flags: n
      })
    }), eu(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: l
      } = this.props;
      if (null == l) return;
      l.isThread() ? e = (0, B.A)(e, false) : ei.kvI.LIMITED_CHANNEL_NAME.has(l.type) && (e = (0, X.an)(e));
      let i = null != (t = null == (n = this.nameInputRef.current) ? true : n.selectionStart) ? t : 0;
      (0, b.fy)({
        name: e
      }), setTimeout(() => {
        var e;
        null == (e = this.nameInputRef.current) || e.setSelectionRange(i, i)
      }, 0)
    }), eu(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? true : e.isThread()) && null != t) {
        let e = (0, B.A)(t, true);
        e !== t && (0, b.fy)({
          name: e
        })
      }
    }), eu(this, "insertEmojiAtPosition", e => {
      var t, n;
      let l = this.nameInputRef.current,
        i = null != (t = null == l ? true : l.selectionStart) ? t : 0,
        r = null != (n = null == l ? true : l.selectionEnd) ? n : 0,
        s = this.props.channelName,
        a = (null == s ? true : s.substring(0, i)) + e + (null == s ? true : s.substring(r));
      (0, b.fy)({
        name: a
      }), setTimeout(() => {
        let t = i + e.length;
        null == l || l.focus(), null == l || l.setSelectionRange(t, t)
      }, 0)
    }), eu(this, "handleChangeTopic", e => {
      (0, b.fy)({
        topic: I.Ay.translateInlineEmojiToSurrogates(e)
      })
    }), eu(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), eu(this, "handleChangeTemplate", e => {
      (0, b.fy)({
        template: I.Ay.translateInlineEmojiToSurrogates(e)
      })
    }), eu(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? true : e.id) != null ? {
        emojiId: e.id,
        emojiName: true
      } : {
        emojiId: true,
        emojiName: e.optionallyDiverseSequence
      };
      (0, b.fy)({
        defaultReactionEmoji: t
      })
    }), eu(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.fy)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), eu(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.fy)({
        defaultSortOrder: e
      })
    }), eu(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, b.fy)({
        defaultTagSetting: e
      })
    }), eu(this, "handleChangeBitrate", e => {
      (0, b.fy)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), eu(this, "handleUserLimitChange", e => {
      (0, b.fy)({
        userLimit: Math.round(e)
      })
    }), eu(this, "handleNSFWChange", e => {
      (0, b.fy)({
        nsfw: e
      })
    }), eu(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.lA)(t.flags, er.lx.ACTIVE_CHANNELS_REMOVED, !e);
      (0, b.fy)({
        flags: n
      })
    }), eu(this, "handleNewsChange", e => {
      (0, b.fy)({
        type: e ? ei.rbe.GUILD_ANNOUNCEMENT : ei.rbe.GUILD_TEXT
      })
    }), eu(this, "handleChangeSlowmode", e => {
      (0, b.fy)({
        rateLimitPerUser: e
      })
    }), eu(this, "handleChangeThreadMessageSlowmode", e => {
      (0, b.fy)({
        defaultThreadRateLimitPerUser: e
      })
    }), eu(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, b.fy)({
        defaultAutoArchiveDuration: e
      })
    }), eu(this, "handleRegionChange", e => {
      (0, b.fy)({
        rtcRegion: e === eA ? null : e
      })
    }), eu(this, "handleVideoQualityModeChange", e => {
      (0, b.fy)({
        videoQualityMode: e
      })
    }), eu(this, "handleAutoArchiveDurationChanged", e => {
      (0, b.fy)({
        autoArchiveDuration: e
      })
    }), eu(this, "handleInvitableChanged", e => {
      (0, b.fy)({
        invitable: e
      })
    }), eu(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.lA)(t.flags, er.lx.SUMMARIES_DISABLED, !e);
      (0, b.fy)({
        flags: n
      })
    }), eu(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, h.lA)(t.flags, er.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, b.fy)({
        flags: n
      })
    });
    const r = null != (t = null == (n = this.props.channel) ? true : n.topic) ? t : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, N.x7)(r),
      topicFocused: false,
      updateNameInputCursorPosition: false
    }
  }
}

function eN() {
  let {
    errors: e,
    channel: t,
    submitting: n,
    subsection: r
  } = (0, g.cf)([Z.A], () => Z.A.getProps()), s = (0, g.bG)([z.A], () => {
    var e;
    return z.A.getRegions(null != (e = null == t ? true : t.getGuildId()) ? e : null)
  }), a = (0, g.bG)([V.A], () => V.A.theme), o = (0, g.bG)([Y.A], () => Y.A.getGuild(null == t ? true : t.getGuildId())), c = (0, G.NI)(t), d = (0, G.H_)(t), {
    canManageChannels: u,
    canSendMessages: h
  } = (0, g.cf)([J.A], () => ({
    canManageChannels: J.A.can(ei.xBc.MANAGE_CHANNELS, t),
    canSendMessages: J.A.can(ei.xBc.SEND_MESSAGES, t)
  })), m = (0, O.Ay)(t), p = W.default.getId(), f = (0, L.p)(), b = null == t ? true : t.id, x = (0, y.cI)(t, false, true), j = A.A.useExperiment({
    guildId: null == t ? true : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, v = i.useCallback(e => {
    null != b && f.getState().setLayoutType(b, e)
  }, [b, f]);
  return (0, l.jsx)(eC, {
    errors: e,
    channel: t,
    channelName: m,
    submitting: n,
    regions: s,
    theme: a,
    guild: o,
    canManageChannels: (null == t ? true : t.isThread()) ? c : u,
    canSendMessages: h,
    isThreadModerator: d,
    canManageThread: c,
    subsection: r,
    isForumPost: null != t && t.isForumPost(),
    isOwner: null == t ? true : t.isOwner(p),
    handleSetDefaultLayout: v,
    showChannelSummariesSettings: x,
    showAdvancedSlowModeSetting: j
  })
}