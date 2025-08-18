/** Chunk was on 45094 **/
/** chunk id: 218613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => el,
  p: () => en
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk990547 = require("./990547.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk333848 = require("./333848.js"),
  Chunk749210 = require("./749210.js"),
  Chunk332063 = require("./332063.jsx"),
  Chunk620123 = require("./620123.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk812206 = require("./812206.js"),
  Chunk933557 = require("./933557.js"),
  Chunk636816 = require("./636816.jsx"),
  Chunk605436 = require("./605436.js"),
  Chunk185413 = require("./185413.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.jsx"),
  Chunk906411 = require("./906411.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk312146 = require("./312146.js"),
  Chunk703656 = require("./703656.js"),
  Chunk146085 = require("./146085.js"),
  Chunk60222 = require("./60222.js"),
  Chunk388131 = require("./388131.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk934415 = require("./934415.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk185923 = require("./185923.js"),
  Chunk710352 = require("./710352.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk421835 = require("./421835.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      $(e, t, n[t])
    })
  }
  return e
}

function et(e, t) {
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

function en(e) {
  let {
    isNew: t,
    isBeta: n
  } = e, s = null;
  returntrue === t ? s = (0, i.jsx)(m.IGR, {
    text: J.intl.string(J.t.psHMa2),
    className: Q.newBadge,
    color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
  }) : true === n && (s = (0, i.jsx)(T.Z, {
    className: Q.newBadge
  })), s
}

function ei(e) {
  let {
    onChange: t,
    guildId: n,
    channelType: r,
    description: l
  } = e, [a, o] = s.useState({}), d = (0, p.e7)([w.Z], () => w.Z.getGuild(n)), c = r === X.d4z.GUILD_STAGE_VOICE;
  return (s.useEffect(() => {
    t(a)
  }, [a, t]), null == d) ? null : (0, i.jsx)(m.hzk, {
    className: Q.addMembersContainer,
    children: (0, i.jsx)(O.U, {
      guild: d,
      channel: null,
      permission: c ? U.yP : (0, M.CG)(r),
      pendingAdditions: a,
      setPendingAdditions: o,
      isStageChannel: c,
      description: l
    })
  })
}

function es(e) {
  let {
    onEmojiPicked: t,
    guildId: n
  } = e, r = s.useRef(null), l = s.useMemo(() => ({
    popoutLocation: {
      page: X.ZY5.CREATE_CHANNEL_MODAL,
      section: X.jXE.CHANNEL_NAME,
      object: X.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = s.useCallback(e => {
    let {
      closePopout: s
    } = e;
    return (0, i.jsx)(A.Z, {
      channel: null,
      guildId: n,
      pickerIntention: q.Hz.CHANNEL_NAME,
      closePopout: s,
      onNavigateAway: s,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === _.B.UNICODE && t(n.surrogates), i && s()
      },
      showOnlyUnicode: true,
      analyticsOverride: l
    })
  }, [l, n, t]);
  return (0, i.jsx)(m.yRy, {
    targetElementRef: r,
    renderPopout: a,
    animation: m.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(y.Z, et(ee({}, e), {
        ref: r,
        active: n,
        className: Q.emojiButton,
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
class er extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      _input: e
    } = this;
    null != module && module.select();
    let {
      guildId: t,
      applications: n,
      canCreateStoreChannel: i
    } = this.props;
    Chunk951288 && null == require && Chunk749210.Z.fetchApplications(exports), Chunk367907.ZP.trackWithMetadata(Chunk981631.rMx.OPEN_MODAL, {
      type: "Create Channel"
    })
  }
  componentDidUpdate(e, t) {
    !t.isPrivate && this.state.isPrivate && this.state.channelType === X.d4z.GUILD_ANNOUNCEMENT && this.setState({
      channelType: X.d4z.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && I.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, {
      type: "Create Private Channel"
    })
  }
  getGuildId() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.props;
    return module.guildId
  }
  canSubmit() {
    let {
      canViewChannels: e,
      canConnect: t,
      transitionState: n
    } = this.props, {
      isPrivate: i,
      channelType: s,
      skuId: r,
      name: l,
      submitting: a
    } = this.state;
    return !Chunk512722 && require !== Chunk481060.Dvm.EXITING && "" !== l && "" !== l.trim() && (!Chunk951288 || !!(0, Chunk605436.nT)(Chunk647438, module, exports)) && (Chunk647438 !== Chunk981631.d4z.GUILD_STORE || null != Chunk120356)
  }
  getIconComponent() {
    let {
      isPrivate: e,
      channelType: t
    } = this.state;
    switch (exports) {
      case Chunk981631.d4z.GUILD_TEXT:
        return module ? Chunk481060.W4G : Chunk481060.VL1;
      case Chunk981631.d4z.GUILD_FORUM:
        return Chunk481060.Mmi;
      case Chunk981631.d4z.GUILD_MEDIA:
        return Chunk481060.XBm;
      case Chunk981631.d4z.GUILD_VOICE:
        return module ? Chunk481060.gjC : Chunk481060.gj8;
      case Chunk981631.d4z.GUILD_STORE:
        return Chunk481060.lO_;
      case Chunk981631.d4z.GUILD_ANNOUNCEMENT:
        return Chunk481060.MqZ;
      case Chunk981631.d4z.GUILD_STAGE_VOICE:
        return Chunk481060.ewx;
      default:
        return (0, Chunk131704.zi)(exports) ? Chunk481060.VL1 : Chunk231338.Vq
    }
  }
  renderHeader() {
    var e;
    let t, {
        cloneChannel: n,
        categoryId: s,
        onClose: r
      } = this.props,
      {
        channelType: l
      } = this.state,
      a = null != require ? Chunk388032.intl.string(Chunk388032.t.dEaPc3) : l === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+ND"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+v"]);
    if (null != Chunk647438) {
      let n = Chunk592125.Z.getChannel(Chunk647438);
      t = (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: Chunk421835.subtitle,
        children: Chunk388032.intl.format(Chunk388032.t.L1zJgY, {
          categoryName: null != (e = null == require ? true : require.name) ? module : ""
        })
      })
    }
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: false,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk421835.header,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          id: this.headerId,
          variant: "heading-lg/semibold",
          className: Chunk421835.title,
          children: Chunk512722
        }), exports]
      }), (0, Chunk951288.jsx)(Chunk481060.olH, {
        onClick: Chunk120356,
        className: Chunk421835.closeButton
      })]
    })
  }
  renderName() {
    let e, {
        cloneChannel: t,
        guildId: s
      } = this.props,
      {
        errors: r,
        channelType: l
      } = this.state;
    (null == Chunk120356 ? true : Chunk120356.name) != null && (e = (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: Chunk421835.error,
      children: Chunk120356.name
    }));
    let a = l === Chunk981631.d4z.GUILD_CATEGORY,
      o = Chunk512722 ? Chunk388032.intl.string(Chunk388032.t.OCAkGB) : Chunk388032.intl.string(Chunk388032.t.PVbHDg),
      d = null != exports ? (0, Chunk951288.jsx)(Chunk481060.R94, {
        className: Chunk421835.channelNameNote,
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.s2ZzZW, {
          name: (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z, true)
        })
      }) : l === Chunk981631.d4z.GUILD_FORUM ? (0, Chunk951288.jsx)(Chunk481060.R94, {
        className: Chunk421835.channelNameNote,
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.tbVWyc, {
          forumUpsellHook: (e, t) => (0, i.jsx)(m.eee, {
            onClick: () => (0, m.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18417").then(n.bind(n, 740696));
              return t => (0, i.jsx)(e, et(ee({}, t), {
                guildId: s
              }))
            }),
            children: e
          }, t)
        })
      }) : null,
      c = this.getIconComponent();
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, i.jsxs)(m.xJW, {
        title: o,
        tag: "label",
        htmlFor: t,
        titleClassName: Q.sectionTitle,
        className: Q.name,
        children: [(0, i.jsx)(m.oil, {
          id: t,
          value: this.state.name,
          onChange: this.handleNameChange,
          inputRef: this.setInputRef,
          maxLength: 100,
          placeholder: function(e) {
            switch (e) {
              case X.d4z.GUILD_CATEGORY:
                return J.intl.string(J.t.eTVbt7);
              case X.d4z.GUILD_FORUM:
                return J.intl.string(J.t["5z1Xam"]);
              default:
                return J.intl.string(J.t["bw/b8P"])
            }
          }(l),
          leading: a ? true : c,
          trailing: {
            type: "emoji",
            button: (0, i.jsx)(es, {
              onEmojiPicked: this.insertEmojiAtPosition,
              isPrivateChannel: this.state.isPrivate,
              guildId: s
            })
          },
          autoFocus: true,
          focusProps: {
            offset: {
              right: false
            }
          }
        }, t), e, d]
      })
    })
  }
  renderType() {
    let {
      cloneChannel: e,
      applications: t,
      canCreateStoreChannel: n,
      canCreateAnnouncementChannel: s,
      canCreateStageChannel: r,
      canCreateMediaChannel: l
    } = this.props, {
      channelType: a,
      isPrivate: o
    } = this.state;
    if (null != module || Chunk512722 === Chunk981631.d4z.GUILD_CATEGORY) return;
    let d = null != exports && exports.length > 0;
    return (0, Chunk951288.jsx)(Chunk481060.xJW, {
      className: Chunk421835.type,
      title: Chunk388032.intl.string(Chunk388032.t["7ZcXGx"]),
      children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
        options: function(e) {
          let {
            isPrivate: t,
            showStoreChannelOption: n,
            showAnnouncementChannelOption: s,
            canCreateStageChannel: r,
            canCreateMediaChannel: l
          } = e, a = [{
            icon: t ? m.W4G : m.VL1,
            label: J.intl.string(J.t.pnuRXF),
            value: X.d4z.GUILD_TEXT,
            description: J.intl.string(J.t.Hf5Lb2)
          }];
          return a.push({
            icon: t ? m.gjC : m.gj8,
            label: J.intl.string(J.t.Sx55Oj),
            value: X.d4z.GUILD_VOICE,
            description: J.intl.string(J.t.pqfkoK)
          }), a.push({
            icon: t ? m.BUe : m.Mmi,
            label: J.intl.string(J.t.eAVIDw),
            value: X.d4z.GUILD_FORUM,
            description: (0, i.jsxs)(m.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: Q.radioLabelDescription,
              children: [J.intl.string(J.t.iZ5pgo), (0, i.jsx)("br", {}), J.intl.format(J.t.fjSvsL, {
                onClick: () => {
                  open(W.V8)
                }
              })]
            })
          }), l && a.push({
            icon: t ? m.D7T : m.XBm,
            label: J.intl.string(J.t["6x6fVl"]),
            value: X.d4z.GUILD_MEDIA,
            description: (0, i.jsxs)(m.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: Q.radioLabelDescription,
              children: [J.intl.string(J.t.JyCrwc), (0, i.jsx)("br", {}), J.intl.format(J.t.fjSvsL, {
                onClick: () => {
                  open(F.Z.getCreatorSupportArticleURL(X.BhN.MEDIA_CHANNEL))
                }
              })]
            }),
            isBeta: true
          }), s && a.push({
            icon: m.MqZ,
            iconSize: 24,
            label: J.intl.string(J.t.qr9dEB),
            value: X.d4z.GUILD_ANNOUNCEMENT,
            description: J.intl.string(J.t.gBkfzs)
          }), n && a.push({
            icon: m.lO_,
            iconSize: 24,
            label: J.intl.string(J.t.SxjkXV),
            value: X.d4z.GUILD_STORE,
            description: J.intl.string(J.t.nmCPMD)
          }), r && a.push({
            icon: m.ewx,
            iconSize: 24,
            label: J.intl.string(J.t.pNWst7),
            value: X.d4z.GUILD_STAGE_VOICE,
            description: J.intl.string(J.t.VPAwgo)
          }), a.map(e => {
            let {
              icon: t,
              iconSize: n,
              label: s,
              value: r,
              description: l,
              isNew: a,
              isBeta: o
            } = e;
            return {
              name: (0, i.jsxs)("div", {
                className: Q.radioItemName,
                children: [(0, i.jsx)(t, et(ee({}, null != n ? {
                  width: n,
                  height: n,
                  size: "custom"
                } : {
                  size: "md"
                }), {
                  color: "currentColor",
                  className: Q.icon,
                  colorClass: Q.foreground
                })), (0, i.jsxs)("div", {
                  children: [(0, i.jsxs)(m.Text, {
                    variant: "text-md/medium",
                    className: Q.radioLabelName,
                    children: [s, (0, i.jsx)(en, {
                      isNew: a,
                      isBeta: o
                    })]
                  }), "string" == typeof l ? (0, i.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: Q.radioLabelDescription,
                    children: l
                  }) : l]
                })]
              }),
              value: r,
              radioBarClassName: Q.radioBar,
              radioItemIconClassName: Q.radioBarIcon
            }
          })
        }({
          isPrivate: o,
          showStoreChannelOption: require && Chunk392711,
          showAnnouncementChannelOption: Chunk647438,
          canCreateStageChannel: Chunk120356,
          canCreateMediaChannel: l
        }),
        value: Chunk512722,
        size: Chunk481060.FXm.Sizes.NOT_SET,
        onChange: this.handleTypeChange,
        itemInfoClassName: Chunk421835.radioBarLabel
      })
    })
  }
  renderStoreOptions() {
    let {
      applications: e
    } = this.props, {
      applicationId: t,
      skuId: n,
      branchId: r,
      showBranches: l,
      hasBranches: a
    } = this.state;
    if (null == module || 0 === module.length) throw Error("Unexpected empty applications");
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: "h5",
        children: Chunk388032.intl.string(Chunk388032.t.vPIW2N)
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        options: module.map(e => ({
          label: e.name,
          value: e.id
        })),
        placeholder: Chunk388032.intl.string(Chunk388032.t["3XfCPT"]),
        value: exports,
        onChange: this.handleApplicationChange,
        className: Chunk421835.storeChannelOptionSelector
      }), null != exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          children: Chunk388032.intl.string(Chunk388032.t.XNIWFh)
        }), (0, Chunk951288.jsx)(Chunk620123.Z, {
          applicationId: exports,
          onChange: this.handleSKUChange,
          selectedSkuId: require,
          className: Chunk421835.storeChannelOptionSelector
        }, exports)]
      }) : null, null != exports && Chunk512722 ? (0, Chunk951288.jsxs)(Chunk481060.j7V, {
        hideBorder: true,
        onChange: this.handleShowBranchesToggle,
        value: l,
        note: Chunk388032.intl.format(Chunk388032.t.UVXL1d, {
          devPortalUrl: Chunk981631.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060._m8, {
          size: "md",
          color: "currentColor",
          className: Chunk421835.switchIcon
        }), Chunk388032.intl.string(Chunk388032.t["3e9mHx"])]
      }) : null, null != exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [l ? (0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          children: Chunk388032.intl.string(Chunk388032.t.o7DqFx)
        }) : null, (0, Chunk951288.jsx)(Chunk332063.Z, {
          applicationId: exports,
          onChange: this.handleBranchChange,
          selectedBranchId: Chunk120356,
          hide: !l,
          onHasBranchesChange: this.handleHasBranchesChange,
          className: Chunk421835.storeChannelOptionSelector
        }, exports)]
      }) : null]
    })
  }
  renderPrivacyOptions() {
    let {
      cloneChannel: e
    } = this.props, {
      channelType: t,
      isPrivate: n
    } = this.state;
    if (null != module || exports === Chunk981631.d4z.GUILD_ANNOUNCEMENT) return null;
    let s = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.lEPAZ2) : Chunk388032.intl.string(Chunk388032.t.aUI70t),
      r = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["RQUk6+"]) : Chunk388032.intl.string(Chunk388032.t.YguuKi);
    return (0, Chunk951288.jsx)(Chunk481060.xJW, {
      children: (0, Chunk951288.jsxs)(Chunk481060.j7V, {
        hideBorder: true,
        onChange: this.handlePrivacyChange,
        value: require,
        note: Chunk120356,
        children: [(0, Chunk951288.jsx)(Chunk481060.mBM, {
          size: "md",
          color: "currentColor",
          className: Chunk421835.switchIcon
        }), Chunk647438]
      })
    }, "privacy-switch")
  }
  renderError(e) {
    let t, {
        channelType: n,
        isPrivate: s,
        errors: r
      } = this.state,
      {
        canConnect: a,
        canViewChannels: o
      } = this.props;
    if (Object.values(r).length > 0) {
      if (null != r.message && "" !== r.message) t = r.message;
      else if (e || null == r.name) {
        let e = Object.values(r)[0];
        e.length > 0 && (t = e)
      }
    } else s && !(0, f.nT)(n, o, a) && (t = (0, f.$7)(n));
    if (null != t) return (0, i.jsx)("div", {
      className: l()(Q.createError, {
        [Q.addMemberError]: e
      }),
      children: (0, i.jsx)(m.Wn, {
        messageType: m.QYI.ERROR,
        children: t
      })
    })
  }
  renderFooter() {
    let e, {
        channelType: t,
        onClose: n
      } = this.props,
      {
        channelType: s
      } = this.state,
      {
        isPrivate: r
      } = this.state;
    e = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+ND"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+v"]);
    let l = Chunk120356 || Chunk647438 === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: Chunk421835.modalFooter,
      children: (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        direction: "horizontal-reverse",
        children: [l ? (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.PDTjLC),
          type: "button",
          onClick: () => {
            this.setState({
              slide: "ADD_MEMBERS",
              errors: {}
            })
          },
          disabled: !this.canSubmit()
        }) : (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: module,
          type: "submit",
          disabled: !this.canSubmit()
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: require
        })]
      })
    })
  }
  renderAddMemberFooter() {
    let e, {
        channelType: t
      } = this.props,
      {
        pendingPermissionOverwrites: n
      } = this.state;
    return e = 0 === Object.keys(require).length ? Chunk388032.intl.string(Chunk388032.t["5WxrcX"]) : exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+ND"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+v"]), (0, Chunk951288.jsx)(Chunk481060.mzw, {
      children: (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        direction: "horizontal-reverse",
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: module,
          type: "submit",
          disabled: !this.canSubmit()
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["13/7kZ"]),
          onClick: () => {
            this.setState({
              slide: "CHANNEL_INFO"
            })
          }
        })]
      })
    })
  }
  handlePermissionOverwriteChange(e) {
    this.setState({
      pendingPermissionOverwrites: e
    })
  }
  renderCreateChannelContent() {
    let {
      channelType: e
    } = this.state, {
      guildId: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [this.renderHeader(), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        className: Chunk421835.modalContent,
        children: [this.renderType(), this.renderName(), module === Chunk981631.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, Chunk951288.jsx)(Chunk636816.Z, {
          guildId: exports,
          channelType: module,
          className: Chunk421835.channelTypeDescription
        }), module === Chunk981631.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
      }), this.renderError(), this.renderFooter()]
    })
  }
  renderAddMemberSlideContent() {
    let {
      name: e,
      channelType: t
    } = this.state, {
      guildId: n,
      onClose: s
    } = this.props, r = this.getIconComponent(), l = exports === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          className: Chunk421835.header,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk421835.title,
            children: l ? Chunk388032.intl.string(Chunk388032.t["S/6zHB"]) : Chunk388032.intl.string(Chunk388032.t.dMJ3Y2)
          }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: Chunk421835.subtitle,
            children: [(0, Chunk951288.jsx)(Chunk120356, {
              size: "xs",
              color: "currentColor",
              className: Chunk421835.subtitleIcon
            }), module]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: Chunk647438,
          className: Chunk421835.closeButton
        })]
      }), this.renderError(true), (0, Chunk951288.jsx)(ei, {
        onChange: this.handlePermissionOverwriteChange,
        guildId: require,
        channelType: exports
      }), this.renderAddMemberFooter()]
    })
  }
  renderSlides() {
    let {
      slide: e
    } = this.state, {
      width: t
    } = this.props, n = {
      impression_group: Chunk990547.ImpressionGroups.CHANNEL_ADD_FLOW
    };
    return (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsxs)(Chunk481060.MyZ, {
        activeSlide: module,
        width: exports,
        children: [(0, Chunk951288.jsx)(Chunk481060.Mi4, {
          id: "CHANNEL_INFO",
          impressionName: Chunk990547.ImpressionNames.CHANNEL_ADD_INFO,
          impressionProperties: require,
          children: this.renderCreateChannelContent()
        }), (0, Chunk951288.jsx)(Chunk481060.Mi4, {
          id: "ADD_MEMBERS",
          impressionName: Chunk990547.ImpressionNames.CHANNEL_ADD_MEMBERS,
          impressionProperties: require,
          children: this.renderAddMemberSlideContent()
        })]
      })
    })
  }
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.Y0X, {
      transitionState: module,
      className: Chunk421835.modal,
      "aria-labelledby": this.headerId,
      size: Chunk481060.CgR.DYNAMIC,
      parentComponent: "CreateChannel",
      children: (0, Chunk951288.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: this.renderSlides()
      })
    })
  }
  constructor(e) {
    super(e), $(this, "headerId", (0, S.hQ)()), $(this, "_input", true), $(this, "setInputRef", e => {
      this._input = e
    }), $(this, "handleNameChange", e => {
      var t, n;
      let {
        channelType: i
      } = this.state;
      M.xL.has(i) && (e = (0, H.Nj)(e));
      let s = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(s, s)
      })
    }), $(this, "insertEmojiAtPosition", e => {
      var t, n, i, s;
      let r = null != (i = null == (t = this._input) ? true : t.selectionStart) ? i : 0,
        l = null != (s = null == (n = this._input) ? true : n.selectionEnd) ? s : 0,
        a = this.state.name,
        o = a.substring(0, r) + e + a.substring(l);
      this.setState({
        name: o
      }, () => {
        var t, n;
        let i = r + e.length;
        null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i)
      })
    }), $(this, "handleTypeChange", e => {
      let {
        value: t
      } = e, {
        name: n
      } = this.state;
      M.xL.has(t) && (n = (0, H.Nj)(n)), t === X.d4z.GUILD_STAGE_VOICE && this.setState({
        isPrivate: false
      }), this.setState({
        channelType: t,
        name: n
      })
    }), $(this, "handlePrivacyChange", e => {
      this.setState({
        isPrivate: e
      })
    }), $(this, "handleApplicationChange", e => {
      this.setState({
        applicationId: e
      })
    }), $(this, "handleSKUChange", e => {
      this.setState({
        skuId: e
      })
    }), $(this, "handleShowBranchesToggle", e => {
      this.setState({
        showBranches: e,
        branchId: null
      })
    }), $(this, "handleBranchChange", e => {
      this.setState({
        branchId: e
      })
    }), $(this, "handleHasBranchesChange", e => {
      this.setState({
        hasBranches: e
      })
    }), $(this, "handleSubmit", async e => {
      let t, n, i;
      e.preventDefault();
      let {
        cloneChannel: s,
        categoryId: r,
        user: l,
        memberRoleIds: a,
        isAdmin: o,
        onClose: d,
        owner: h
      } = this.props, {
        name: u,
        pendingPermissionOverwrites: p,
        channelType: m,
        skuId: C,
        branchId: N,
        isPrivate: x
      } = this.state, I = this.getGuildId();
      if (null != I) {
        if (null != s) t = c().values(s.permissionOverwrites), n = s.bitrate, i = s.userLimit;
        else if (m === X.d4z.GUILD_ANNOUNCEMENT) t = (0, H.rt)(I);
        else {
          if (x) {
            t = (0, H.oQ)(I, m, [], true);
            let e = (0, f.Tj)(p, m);
            e.length > 0 && (t = t.concat(e));
            let n = null != h && l.id === h.id;
            t.some(e => a.has(e.id)) || o || n || t.push((0, H.jZ)(l.id, m))
          }
          m === X.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(p).forEach(e => {
            let {
              row: n
            } = e;
            null != n.id && "" !== n.id && (n.rowType === Y.aC.ROLE ? t.push((0, G.A)(n.id, E.BN.ROLE)) : n.rowType === Y.aC.MEMBER && t.push((0, G.A)(n.id, E.BN.MEMBER)))
          }))
        }
        this.setState({
          errors: {},
          submitting: true
        });
        try {
          let e = await g.Z.createChannel({
            guildId: I,
            type: m,
            name: u,
            permissionOverwrites: t,
            bitrate: n,
            userLimit: i,
            parentId: m !== X.d4z.GUILD_CATEGORY ? r : null,
            skuId: C,
            branchId: N
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let s = e.body;
          M.xL.has(m) && (0, L.XU)(s.guild_id, s.id), this.setState({
            submitting: false
          }), d()
        } catch (e) {
          null != e.body && "object" == typeof e.body ? this.setState({
            errors: e.body,
            submitting: false
          }) : this.setState({
            errors: {
              message: J.intl.string(J.t.fEptJC)
            },
            submitting: false
          })
        }
      }
    });
    let {
      channelType: t,
      cloneChannel: n,
      prefillChannelName: i
    } = e;
    this.state = {
      channelType: null != t ? t : X.d4z.GUILD_TEXT,
      name: null != n ? (0, b.F6)(n, k.default, B.Z) : null != i ? i : "",
      pendingPermissionOverwrites: {},
      isPrivate: false,
      prevGuildId: e.guildId,
      applicationId: null,
      skuId: null,
      branchId: null,
      showBranches: false,
      hasBranches: false,
      slide: "CHANNEL_INFO",
      errors: {},
      submitting: false
    }, this.handlePermissionOverwriteChange = this.handlePermissionOverwriteChange.bind(this)
  }
}
let el = Chunk647438.forwardRef(function(e, t) {
  let {
    channelType: n,
    guildId: s,
    cloneChannelId: r
  } = e, l = (0, p.cj)([w.Z, k.default, Z.Z, z.Z, R.ZP], () => {
    var e, t, i;
    let l = w.Z.getGuild(s),
      a = k.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let d = null != l && null != l.ownerId ? k.default.getUser(l.ownerId) : null,
      c = Z.Z.can(X.Plq.ADMINISTRATOR, l),
      h = z.Z.getChannel(r);
    return {
      guild: l,
      canCreateStoreChannel: null != l && l.features.has(X.oNc.COMMERCE),
      canCreateAnnouncementChannel: null != l && l.features.has(X.oNc.NEWS),
      user: a,
      owner: d,
      memberRoles: null != (t = null == (e = R.ZP.getMember(s, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: Z.Z.can(X.Plq.VIEW_CHANNEL, l),
      canConnect: Z.Z.can(X.Plq.CONNECT, l),
      isAdmin: c,
      cloneChannel: h,
      channelType: null != (i = null == h ? true : h.type) ? i : n,
      canManageRoles: Z.Z.can(X.Plq.MANAGE_ROLES, l),
      canManageChannels: Z.Z.can(X.Plq.MANAGE_CHANNELS, l)
    }
  }), a = (0, p.Wu)([j.Z], () => j.Z.getGuildApplicationIds(s).map(e => j.Z.getApplication(e)).filter(V.lm)), d = new Set(l.memberRoles), {
    canManageRoles: c,
    canManageChannels: h
  } = l, u = (0, P.m)(s) && c && h, m = (0, D.Ui)(null == l ? true : l.guild);
  return (0, i.jsx)(er, et(ee({}, e, l), {
    memberRoleIds: d,
    applications: a,
    canCreateStageChannel: u,
    canCreateMediaChannel: m,
    ref: t,
    width: 496
  }))
})