/** Chunk was on 86915 **/
/** chunk id: 2147, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  G: () => ew,
  Z: () => e_
}), require("./997841.js"), require("./953529.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function eh(e, t) {
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
let eg = (0, Chunk313201.hQ)(),
  em = (0, Chunk313201.hQ)(),
  ep = (0, Chunk313201.hQ)(),
  ef = (0, Chunk313201.hQ)(),
  ex = (0, Chunk313201.hQ)(),
  ej = (0, Chunk313201.hQ)(),
  eb = (0, Chunk313201.hQ)(),
  ev = (0, Chunk313201.hQ)(),
  ey = (0, Chunk313201.hQ)(),
  eC = (0, Chunk313201.hQ)(),
  eN = (0, Chunk313201.hQ)(),
  eS = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  eE = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_DEFAULT_REACTION,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eO = {
    popoutLocation: {
      page: Chunk981631.ZY5.CHANNEL_SETTINGS,
      section: Chunk981631.jXE.CHANNEL_NAME,
      object: Chunk981631.qAy.EMOJI_PICKER_BUTTON
    }
  },
  eZ = "AUTOMATIC_RTC_REGION",
  ew = Chunk442837.ZP.connectStores([Chunk388610.Z], () => {
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
          defaultReactionEmoji: f,
          availableTags: x,
          defaultSortOrder: j,
          defaultForumLayout: b,
          defaultTagSetting: v
        } = module;
        module.isThread() && (t = (0, Chunk456077.Z)(exports, true)), (0, Chunk787014.wk)(module.id, {
          name: exports,
          type: require,
          topic: Chunk255367,
          bitrate: Chunk73800,
          userLimit: Chunk120356,
          nsfw: s,
          flags: Chunk313361,
          rateLimitPerUser: Chunk697988,
          defaultThreadRateLimitPerUser: Chunk683860,
          autoArchiveDuration: null == Chunk442837 ? true : Chunk442837.autoArchiveDuration,
          locked: null == Chunk442837 ? true : Chunk442837.locked,
          invitable: null == Chunk442837 ? true : Chunk442837.invitable,
          defaultAutoArchiveDuration: Chunk692547,
          template: Chunk780384,
          rtcRegion: Chunk755721,
          videoQualityMode: Chunk481060,
          defaultReactionEmoji: Chunk771340,
          availableTags: Chunk410575,
          defaultSortOrder: Chunk852860,
          defaultForumLayout: Chunk129865,
          defaultTagSetting: Chunk902840
        })
      }
    }
  })(Chunk852860.Z);

function eT(e) {
  let {
    onEmojiPicked: t,
    channel: n,
    guildId: r
  } = e, s = l.useRef(null), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(T.Z, {
      channel: n,
      guildId: r,
      pickerIntention: el.Hz.CHANNEL_NAME,
      closePopout: l,
      onNavigateAway: l,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === R.B.UNICODE && t(n.surrogates), i && l()
      },
      showOnlyUnicode: true,
      analyticsOverride: eO
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
      return (0, i.jsx)(w.Z, eh(eu({}, e), {
        ref: s,
        active: n,
        className: eo.emojiButton,
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
class eR extends Chunk73800.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && Chunk771340.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, n, i, l;
    let r = null != (i = null == (t = this.props.channel) ? true : t.topic) ? i : "";
    (null != (l = null == (n = e.channel) ? true : n.topic) ? l : "") !== r && r !== this.state.textTopicValue && this.setState({
      textTopicValue: r,
      richTopicValue: (0, S.JM)(r)
    })
  }
  getError(e) {
    let {
      errors: t
    } = this.props;
    return null == t ? true : t[e]
  }
  getCooldownSliderMarker(e) {
    return (0, $.A)(e, true)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, $.A)(e * q.Z.Seconds.MINUTE, true)
  }
  renderChannelInfo(e, t) {
    var n, l, r, d, h, p;
    let f, j, {
        canManageChannels: b,
        canSendMessages: v,
        isThreadModerator: C,
        canManageThread: S,
        guild: O,
        isForumPost: Z,
        isOwner: w,
        showAdvancedSlowModeSetting: T
      } = this.props,
      R = V.Ec.has(e.type),
      I = e.isForumLikeChannel(),
      D = I && (null == (n = e.availableTags) ? true : n.every(e => e.moderated)),
      M = (null == (l = X.default.getCurrentUser()) ? true : l.isStaff()) === true,
      B = V.TK.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.xJW, {
          title: I ? ea.intl.string(ea.t.yR6Hwc) : ea.intl.string(ea.t.X8jMDg),
          className: ec.marginTop20,
          children: (0, i.jsx)(E.ZP, {
            innerClassName: eo.topic,
            characterCountClassName: eo.topicCharacterCount,
            maxCharacterCount: I ? ei.Z7 : ei.$x,
            onChange: this.handleChangeRichTopic,
            placeholder: ea.intl.string(ea.t["71fbmp"]),
            channel: eS,
            textValue: this.state.textTopicValue,
            richValue: this.state.richTopicValue,
            type: I ? N.Ie.FORUM_CHANNEL_GUIDELINES : N.Ie.CHANNEL_TOPIC,
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
            disabled: !b
          })
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      W = I && M ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.xJW, {
          title: ea.intl.string(ea.t.qk2jdX),
          className: ec.marginTop20,
          children: (0, i.jsx)(g.iS, {
            placeholder: ea.intl.string(ea.t.DDjD1N),
            value: _.ZP.translateSurrogatesToInlineEmoji(null != (r = e.template) ? r : ""),
            onChange: this.handleChangeTemplate,
            error: this.getError("template"),
            maxLength: er.Vb,
            disabled: !b,
            autosize: true
          })
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      U = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(m.xJW, {
          children: [(0, i.jsx)(m.vwX, {
            error: this.getError("available_tags"),
            id: eg,
            className: eo.formTitle,
            children: ea.intl.string(ea.t["P/y+sr"])
          }), (0, i.jsx)(m.R94, {
            id: em,
            type: m.R94.Types.DESCRIPTION,
            className: eo.description,
            children: ea.intl.string(ea.t["/oQQ39"])
          }), (0, i.jsx)(P.Z, {
            channel: e
          })]
        }), (0, i.jsx)(m.XZJ, {
          disabled: !b || D,
          value: e.hasFlag(ei.zZ.REQUIRE_TAG),
          type: m.XZJ.Types.INVERTED,
          onChange: (e, t) => this.handleRequireTagChanged(t),
          children: (0, i.jsx)(m.Text, {
            variant: "text-sm/normal",
            children: ea.intl.string(ea.t["9g2Zys"])
          })
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      G = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eo.twoColumnSettings,
          children: [(0, i.jsxs)(m.xJW, {
            className: s()(eo.settingsLeft, eo.settingsDefaultReaction),
            children: [(0, i.jsx)(m.vwX, {
              id: ep,
              className: eo.formTitle,
              children: ea.intl.string(ea.t["8ao1+P"])
            }), (0, i.jsx)(m.R94, {
              id: em,
              type: m.R94.Types.DESCRIPTION,
              className: eo.description,
              children: ea.intl.string(ea.t.SdbF0t)
            }), (0, i.jsxs)("div", {
              className: eo.buttonRow,
              children: [(0, i.jsx)(m.yRy, {
                targetElementRef: this.defaultReactionButtonRef,
                renderPopout: this.renderEmojiPicker,
                position: "right",
                animation: m.yRy.Animation.NONE,
                align: "center",
                children: e => (0, i.jsx)(g.zx, eh(eu({}, e), {
                  buttonRef: this.defaultReactionButtonRef,
                  disabled: !b,
                  onClick: t => {
                    var n;
                    null == (n = e.onClick) || n.call(e, t)
                  },
                  children: ea.intl.string(ea.t["59QgaG"])
                }))
              }), null != e.defaultReactionEmoji ? (0, i.jsx)(g.zx, {
                className: eo.removeButton,
                onClick: () => this.handleChangeDefaultReactionEmoji(null),
                size: g.zx.Sizes.MIN,
                look: g.zx.Looks.LINK,
                color: g.zx.Colors.RED,
                children: ea.intl.string(ea.t.N86XcH)
              }) : null]
            })]
          }), (0, i.jsx)(A.Z, {
            reactionEmoji: e.defaultReactionEmoji
          })]
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      F = e.isForumChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: eo.twoColumnSettings,
          children: [(0, i.jsxs)(m.xJW, {
            className: s()(eo.settingsLeft, eo.settingsDefaultView),
            children: [(0, i.jsx)(m.hjN, {
              title: ea.intl.string(ea.t.kQvoCw),
              children: (0, i.jsx)(m.q4e, {
                options: [{
                  label: ea.intl.string(ea.t["4HXEZG"]),
                  value: a.X.LIST
                }, {
                  label: ea.intl.string(ea.t["8RswJC"]),
                  value: a.X.GRID
                }],
                value: null != (d = e.defaultForumLayout) ? d : a.X.LIST,
                onChange: this.handleChangeDefaultForumLayout
              })
            }), (0, i.jsx)(m.R94, {
              className: ec.marginTop8,
              type: m.R94.Types.DESCRIPTION,
              children: ea.intl.string(ea.t.mOSViY)
            })]
          }), e.defaultForumLayout === a.X.GRID ? (0, i.jsx)(ee.Z, {
            className: eo.defaultImageView
          }) : (0, i.jsx)(et.Z, {
            className: eo.defaultImageView
          })]
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      z = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.xJW, {
          children: (0, i.jsx)(m.hjN, {
            title: ea.intl.string(ea.t.gePre3),
            children: (0, i.jsx)(m.q4e, {
              options: [{
                label: ea.intl.string(ea.t.ElZtzs),
                value: c.z.LATEST_ACTIVITY
              }, {
                label: ea.intl.string(ea.t.w28f3N),
                value: c.z.CREATION_DATE
              }],
              value: e.getDefaultSortOrder(),
              onChange: this.handleChangeDefaultSortOrder
            })
          })
        }), (0, i.jsx)(m.R94, {
          className: ec.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: ea.intl.string(ea.t["165cVV"])
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      J = e.isForumLikeChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.xJW, {
          children: (0, i.jsx)(m.hjN, {
            title: ea.intl.string(ea.t.Paxaur),
            children: (0, i.jsx)(m.q4e, {
              options: [{
                label: ea.intl.string(ea.t.rQ0ctb),
                value: o.z.MATCH_SOME
              }, {
                label: ea.intl.string(ea.t.FCXUu7),
                value: o.z.MATCH_ALL
              }],
              value: e.getDefaultTagSetting(),
              onChange: this.handleChangeDefaultTagSetting
            })
          })
        }), (0, i.jsx)(m.R94, {
          className: ec.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: ea.intl.string(ea.t.DqOl8P)
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      q = R ? C : b,
      Y = V.X_.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsxs)(m.xJW, {
          children: [(0, i.jsx)(m.vwX, {
            id: ef,
            className: ec.marginBottom8,
            children: ea.intl.string(ea.t["tTHx9/"])
          }), I ? (0, i.jsx)(m.vwX, {
            className: ec.marginTop20,
            children: ea.intl.string(ea.t.O1c02t)
          }) : null, true === T ? (0, i.jsx)(K.Z, {
            channel: e,
            onChange: this.handleChangeSlowmode
          }) : (0, i.jsx)(m.iRW, {
            className: ec.marginTop20,
            initialValue: e.rateLimitPerUser,
            markers: en.BiE,
            stickToMarkers: true,
            onValueChange: this.handleChangeSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !q,
            equidistant: true,
            "aria-labelledby": ef,
            "aria-describedby": ex
          }), (0, i.jsx)(m.R94, {
            id: ex,
            type: m.R94.Types.DESCRIPTION,
            children: I ? ea.intl.string(ea.t["a+1pdH"]) : R ? ea.intl.string(ea.t.OMmNCg) : ea.intl.string(ea.t["HEA/DQ"])
          }), I ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.vwX, {
              className: ec.marginTop20,
              children: ea.intl.string(ea.t["fkY5+v"])
            }), (0, i.jsx)(m.iRW, {
              className: ec.marginTop20,
              initialValue: null != (h = e.defaultThreadRateLimitPerUser) ? h : 0,
              markers: en.BiE,
              stickToMarkers: true,
              onValueChange: this.handleChangeThreadMessageSlowmode,
              onMarkerRender: this.getCooldownSliderMarker,
              disabled: !q,
              equidistant: true,
              "aria-labelledby": ef,
              "aria-describedby": ex
            }), (0, i.jsx)(m.R94, {
              type: m.R94.Types.DESCRIPTION,
              children: ea.intl.string(ea.t.kdZU6O)
            })]
          }) : null]
        }), (0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        })]
      }) : null,
      $ = R && null != e.threadMetadata ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.xJW, {
          children: (0, i.jsx)(x.Z, {
            page: en.ZY5.CHANNEL_SETTINGS,
            children: (0, i.jsx)(k.Z, {
              isDisabled: !S,
              autoArchiveDuration: null != (p = e.threadMetadata.autoArchiveDuration) ? p : es.AX,
              onChange: this.handleAutoArchiveDurationChanged
            })
          })
        }), (0, i.jsx)(m.R94, {
          className: ec.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: Z ? ea.intl.string(ea.t["3aJN9P"]) : ea.intl.string(ea.t.YUXr4e)
        })]
      }) : null,
      el = e.type === en.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: ea.intl.string(ea.t.cSyXJi),
          onChange: this.handleInvitableChanged,
          value: e.threadMetadata.invitable,
          hideBorder: true,
          disabled: !S,
          children: ea.intl.string(ea.t.s2rpNT)
        })
      }) : null,
      ed = null != O && (0, H.Y2)(O),
      ej = V.ov.has(e.type) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: ea.intl.string(ea.t["9eUgwc"]),
          onChange: this.handleNSFWChange,
          value: (0, y.aC)(e),
          hideBorder: true,
          disabled: !b || null != e.linkedLobby || ed,
          disabledText: null != e.linkedLobby ? ea.intl.string(ea.t.l6uSVV) : null,
          children: ea.intl.string(ea.t.Es25YW)
        })
      }) : null,
      eb = V.Y0.has(e.type) && null != O && O.features.has(en.oNc.NEWS) && e.id !== (null == O ? true : O.rulesChannelId) && e.id !== (null == O ? true : O.publicUpdatesChannelId) ? (0, i.jsx)("div", {
        children: (0, i.jsx)(m.j7V, {
          note: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              children: ea.intl.format(ea.t.tI7KNT, {
                documentationLink: Q.Z.getArticleURL(en.BhN.ANNOUNCEMENT_CHANNELS)
              })
            }), (0, i.jsx)("div", {
              className: ec.marginTop8,
              children: ea.intl.string(ea.t["2Ab4IS"])
            })]
          }),
          onChange: this.handleNewsChange,
          value: e.type === en.d4z.GUILD_ANNOUNCEMENT,
          hideBorder: true,
          disabled: !b,
          children: ea.intl.string(ea.t.Au2b7u)
        })
      }) : null,
      ev = V.uC.has(e.type) ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        }), (0, i.jsx)(x.Z, {
          page: en.ZY5.CHANNEL_SETTINGS,
          children: (0, i.jsx)(k.Z, {
            isDisabled: !b,
            autoArchiveDuration: (0, L.WD)(e, null),
            onChange: this.handleChangeDefaultAutoArchiveDuration
          })
        }), (0, i.jsx)(m.R94, {
          className: ec.marginTop8,
          type: m.R94.Types.DESCRIPTION,
          children: e.isForumLikeChannel() ? ea.intl.string(ea.t.fyXclZ) : ea.intl.string(ea.t.W3Noi4)
        })]
      }) : null,
      ey = this.props.showChannelSummariesSettings ? (0, i.jsx)(m.j7V, {
        note: ea.intl.format(ea.t.feJW19, {
          helpdeskArticle: Q.Z.getArticleURL(en.BhN.CONVERSATION_SUMMARIES)
        }),
        onChange: this.handleChannelSummariesToggled,
        value: !e.hasFlag(ei.zZ.SUMMARIES_DISABLED) && (null == O ? true : O.features.has(en.oNc.SUMMARIES_ENABLED_BY_USER)),
        hideBorder: true,
        disabled: !b || !(null == O ? true : O.features.has(en.oNc.SUMMARIES_ENABLED_BY_USER)),
        children: (0, i.jsxs)("div", {
          className: eo.badgedItem,
          children: [ea.intl.string(ea.t.id3ozs), (0, i.jsx)(m.IGR, {
            text: ea.intl.string(ea.t.oW0eUV),
            color: u.Z.colors.BG_BRAND.css
          })]
        })
      }) : null,
      eC = e.isMediaChannel() ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.$i$, {
          className: s()(ec.marginTop40, ec.marginBottom40)
        }), (0, i.jsx)(m.j7V, {
          onChange: this.handleShowMediaOptionsToggled,
          value: !e.hasFlag(ei.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
          note: ea.intl.string(ea.t.J4wCc3),
          hideBorder: true,
          disabled: !b,
          children: ea.intl.string(ea.t.u8LZOj)
        })]
      }) : null;
    return e.type === en.d4z.GUILD_CATEGORY ? (j = ea.intl.string(ea.t.OCAkGB), f = "category-name") : e.isForumPost() ? (j = ea.intl.string(ea.t.uyVrTE), f = "post-title") : R ? (j = ea.intl.string(ea.t.j3XWjI), f = "thread-name") : (j = ea.intl.string(ea.t.PVbHDg), f = "channel-name"), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(m.xJW, {
        title: j,
        children: (0, i.jsxs)("div", {
          className: eo.nameInput,
          children: [(0, i.jsx)(g.Is, {
            inputRef: this.nameInputRef,
            value: t,
            onChange: this.handleChangeName,
            onBlur: this.handleBlurName,
            error: this.getError("name"),
            name: f,
            autoFocus: true,
            disabled: w ? !v : !b,
            maxLength: en.HN8,
            className: eo.nameInputWrapper,
            inputClassName: eo.nameInputInner,
            focusProps: {
              offset: {
                right: false
              }
            }
          }), (0, i.jsx)(eT, {
            onEmojiPicked: this.insertEmojiAtPosition,
            channel: e,
            guildId: null == e ? true : e.guild_id
          })]
        })
      }), (0, i.jsx)(m.$i$, {
        className: s()(ec.marginTop40, ec.marginBottom40)
      }), B, W, U, G, Y, $, F, z, J, el, ej, eb, ey, ev, eC]
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
    return (0, i.jsxs)(O.Z, {
      direction: O.Z.Direction.VERTICAL,
      className: ec.marginBottom40,
      children: [(0, i.jsx)(m.vwX, {
        id: ej,
        children: ea.intl.string(ea.t.w2d0vb)
      }), "" !== r && (0, i.jsx)(m.R94, {
        id: eb,
        type: m.geA.DESCRIPTION,
        style: {
          color: u.Z.unsafe_rawColors.RED_400.css
        },
        className: ec.marginBottom8,
        children: r
      }), (0, i.jsx)(m.iRW, {
        initialValue: Math.min(e.bitrate, l),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [en.Fc, en.epw, l],
        minValue: en.Fc,
        maxValue: l,
        keyboardStep: en.V7H,
        disabled: !n,
        "aria-labelledby": ej,
        "aria-describedby": null != r && "" !== r ? eb : ev
      }), l > en.epw ? (0, i.jsx)(m.R94, {
        id: ev,
        type: m.geA.DESCRIPTION,
        children: ea.intl.format(ea.t.SbQJk5, {
          bitrate: en.epw / 1e3
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
      value: en.Ucd.AUTO,
      name: ea.intl.string(ea.t.jjKYpq)
    }, {
      value: en.Ucd.FULL,
      name: ea.intl.string(ea.t["7jOoJC"])
    }];
    return (0, i.jsxs)(O.Z, {
      direction: O.Z.Direction.VERTICAL,
      className: ec.marginBottom40,
      children: [(0, i.jsx)(m.xJW, {
        title: ea.intl.string(ea.t.jhJEJi),
        children: (0, i.jsx)(m.FXm, {
          onChange: e => {
            let {
              value: t
            } = e;
            return this.handleVideoQualityModeChange(t)
          },
          options: l,
          value: null != (t = e.videoQualityMode) ? t : en.Ucd.AUTO,
          disabled: !n
        })
      }), (0, i.jsx)(m.R94, {
        type: m.geA.DESCRIPTION,
        children: ea.intl.format(ea.t.c5W7Sk, {})
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ea.intl.string(ea.t.XX5ciY) : ea.intl.formatToPlainString(ea.t["3uHFUV"], {
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = this.getError("user_limit"),
      l = e.isGuildStageVoice() ? en.xGv : en.$pe;
    return (0, i.jsxs)(O.Z, {
      direction: O.Z.Direction.VERTICAL,
      className: ec.marginBottom40,
      children: [(0, i.jsx)(m.vwX, {
        id: ey,
        children: ea.intl.string(ea.t["/AoSGB"])
      }), "" !== n && (0, i.jsx)(m.R94, {
        id: eC,
        type: m.geA.DESCRIPTION,
        style: {
          color: u.Z.unsafe_rawColors.RED_400.css
        },
        className: ec.marginBottom8,
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
        "aria-labelledby": ey,
        "aria-describedby": null != n && "" !== n ? eC : eN
      }), (0, i.jsx)(m.R94, {
        id: eN,
        type: m.geA.DESCRIPTION,
        children: ea.intl.format(e.isGuildStageVoice() ? ea.t.OqZI8P : ea.t["8yb3JS"], {})
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
      label: ea.intl.string(ea.t.JEmsam),
      value: eZ
    });
    let a = null != (t = e.rtcRegion) ? t : eZ;
    return (0, i.jsxs)(O.Z, {
      direction: O.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(m.vwX, {
        children: ea.intl.string(ea.t.Ms8bX1)
      }), (0, i.jsx)(m.q4e, {
        options: s,
        value: a,
        onChange: this.handleRegionChange,
        isDisabled: !l
      }), (0, i.jsx)(m.R94, {
        type: m.geA.DESCRIPTION,
        children: ea.intl.string(ea.t["dbTs+/"])
      })]
    })
  }
  renderJuiceImage(e) {
    let t, {
      theme: l
    } = this.props;
    return t = e.type === en.d4z.GUILD_CATEGORY ? (0, h.wj)(l) ? n(309095) : n(925442) : (0, h.wj)(l) ? n(316491) : n(301358), (0, i.jsx)(O.Z, {
      justify: O.Z.Justify.CENTER,
      className: ec.marginTop60,
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
    return null == module || null == exports || null == require ? null : (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      className: "channel-settings-overview",
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["/dp6yc"]),
      children: [this.renderChannelInfo(module, exports), this.showVoiceSettings() ? (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: s()(Chunk197571.marginTop40, Chunk197571.marginBottom40)
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
    super(e), ed(this, "defaultReactionButtonRef", l.createRef()), ed(this, "nameInputRef", l.createRef()), ed(this, "cursorPosition", 0), ed(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: n
      } = this.props;
      return (0, i.jsx)(T.Z, {
        guildId: null == n ? true : n.guild_id,
        closePopout: t,
        onSelectEmoji: e => {
          let {
            emoji: n,
            willClose: i
          } = e;
          this.handleChangeDefaultReactionEmoji(n), i && t()
        },
        pickerIntention: el.Hz.COMMUNITY_CONTENT,
        channel: n,
        analyticsOverride: eE
      })
    }), ed(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, Y.mB)(t.flags, ei.zZ.REQUIRE_TAG, e);
      (0, p.pW)({
        flags: n
      })
    }), ed(this, "handleChangeName", e => {
      var t, n;
      let {
        channel: i
      } = this.props;
      if (null == i) return;
      i.isThread() ? e = (0, M.Z)(e, false) : en.TPd.LIMITED_CHANNEL_NAME.has(i.type) && (e = (0, J.Nj)(e));
      let l = null != (n = null == (t = this.nameInputRef.current) ? true : t.selectionStart) ? n : 0;
      (0, p.pW)({
        name: e
      }), setTimeout(() => {
        var e;
        null == (e = this.nameInputRef.current) || e.setSelectionRange(l, l)
      }, 0)
    }), ed(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? true : e.isThread()) && null != t) {
        let e = (0, M.Z)(t, true);
        e !== t && (0, p.pW)({
          name: e
        })
      }
    }), ed(this, "insertEmojiAtPosition", e => {
      var t, n;
      let i = this.nameInputRef.current,
        l = null != (t = null == i ? true : i.selectionStart) ? t : 0,
        r = null != (n = null == i ? true : i.selectionEnd) ? n : 0,
        s = this.props.channelName,
        a = (null == s ? true : s.substring(0, l)) + e + (null == s ? true : s.substring(r));
      (0, p.pW)({
        name: a
      }), setTimeout(() => {
        let t = l + e.length;
        null == i || i.focus(), null == i || i.setSelectionRange(t, t)
      }, 0)
    }), ed(this, "handleChangeTopic", e => {
      (0, p.pW)({
        topic: _.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ed(this, "handleChangeRichTopic", (e, t, n) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: n
      }), this.handleChangeTopic(t)
    }), ed(this, "handleChangeTemplate", e => {
      (0, p.pW)({
        template: _.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), ed(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? true : e.id) != null ? {
        emojiId: e.id,
        emojiName: true
      } : {
        emojiId: true,
        emojiName: e.optionallyDiverseSequence
      };
      (0, p.pW)({
        defaultReactionEmoji: t
      })
    }), ed(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, p.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ed(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, p.pW)({
        defaultSortOrder: e
      })
    }), ed(this, "handleChangeDefaultTagSetting", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, p.pW)({
        defaultTagSetting: e
      })
    }), ed(this, "handleChangeBitrate", e => {
      (0, p.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ed(this, "handleUserLimitChange", e => {
      (0, p.pW)({
        userLimit: Math.round(e)
      })
    }), ed(this, "handleNSFWChange", e => {
      (0, p.pW)({
        nsfw: e
      })
    }), ed(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, Y.mB)(t.flags, ei.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, p.pW)({
        flags: n
      })
    }), ed(this, "handleNewsChange", e => {
      (0, p.pW)({
        type: e ? en.d4z.GUILD_ANNOUNCEMENT : en.d4z.GUILD_TEXT
      })
    }), ed(this, "handleChangeSlowmode", e => {
      (0, p.pW)({
        rateLimitPerUser: e
      })
    }), ed(this, "handleChangeThreadMessageSlowmode", e => {
      (0, p.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), ed(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, p.pW)({
        defaultAutoArchiveDuration: e
      })
    }), ed(this, "handleRegionChange", e => {
      (0, p.pW)({
        rtcRegion: e === eZ ? null : e
      })
    }), ed(this, "handleVideoQualityModeChange", e => {
      (0, p.pW)({
        videoQualityMode: e
      })
    }), ed(this, "handleAutoArchiveDurationChanged", e => {
      (0, p.pW)({
        autoArchiveDuration: e
      })
    }), ed(this, "handleInvitableChanged", e => {
      (0, p.pW)({
        invitable: e
      })
    }), ed(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, Y.mB)(t.flags, ei.zZ.SUMMARIES_DISABLED, !e);
      (0, p.pW)({
        flags: n
      })
    }), ed(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let n = (0, Y.mB)(t.flags, ei.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, p.pW)({
        flags: n
      })
    });
    let r = null != (n = null == (t = this.props.channel) ? true : t.topic) ? n : "";
    this.state = {
      textTopicValue: r,
      richTopicValue: (0, S.JM)(r),
      topicFocused: false,
      updateNameInputCursorPosition: false
    }
  }
}

function e_() {
  let {
    errors: e,
    channel: t,
    submitting: n,
    subsection: r
  } = (0, Chunk442837.cj)([Chunk388610.Z], () => Chunk388610.Z.getProps()), s = (0, Chunk442837.e7)([Chunk903223.Z], () => {
    var e;
    return Chunk903223.Z.getRegions(null != (e = null == exports ? true : exports.getGuildId()) ? module : null)
  }), a = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), o = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(null == exports ? true : exports.getGuildId())), c = (0, Chunk665906.C7)(exports), u = (0, Chunk665906.Xb)(exports), {
    canManageChannels: h,
    canSendMessages: g
  } = (0, Chunk442837.cj)([Chunk496675.Z], () => ({
    canManageChannels: Chunk496675.Z.can(Chunk981631.Plq.MANAGE_CHANNELS, exports),
    canSendMessages: Chunk496675.Z.can(Chunk981631.Plq.SEND_MESSAGES, exports)
  })), m = (0, Chunk933557.ZP)(exports), p = Chunk314897.default.getId(), f = (0, Chunk109434.v)(), x = null == exports ? true : exports.id, j = (0, Chunk902840.ts)(exports, false, true), y = Chunk129865.Z.useExperiment({
    guildId: null == exports ? true : exports.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, N = Chunk73800.useCallback(e => {
    null != x && f.getState().setLayoutType(x, e)
  }, [Chunk410575, Chunk771340]);
  return (0, Chunk255367.jsx)(eR, {
    errors: module,
    channel: exports,
    channelName: Chunk481060,
    submitting: require,
    regions: s,
    theme: Chunk313361,
    guild: Chunk697988,
    canManageChannels: (null == exports ? true : exports.isThread()) ? Chunk683860 : Chunk780384,
    canSendMessages: Chunk755721,
    isThreadModerator: Chunk692547,
    canManageThread: Chunk683860,
    subsection: Chunk120356,
    isForumPost: null != exports && exports.isForumPost(),
    isOwner: null == exports ? true : exports.isOwner(Chunk787014),
    handleSetDefaultLayout: Chunk541716,
    showChannelSummariesSettings: Chunk852860,
    showAdvancedSlowModeSetting: Chunk622822
  })
}