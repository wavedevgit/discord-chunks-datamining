/** Chunk was on 29497 **/
/** chunk id: 241865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eo,
  p: () => ei
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk990547 = require("./990547.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk333848 = require("./333848.js"),
  Chunk749210 = require("./749210.js"),
  Chunk332063 = require("./332063.jsx"),
  Chunk620123 = require("./620123.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk812206 = require("./812206.js"),
  Chunk605436 = require("./605436.js"),
  Chunk974339 = require("./974339.jsx"),
  Chunk215157 = require("./215157.js"),
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
  Chunk933557 = require("./933557.js"),
  Chunk636816 = require("./636816.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk185923 = require("./185923.js"),
  Chunk710352 = require("./710352.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305048 = require("./305048.js");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}

function er(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ei(e) {
  let {
    isNew: t,
    isBeta: n
  } = e, i = null;
  returntrue === t ? i = (0, r.jsx)(m.IGR, {
    text: $.intl.string($.t.psHMa6),
    className: ee.newBadge,
    color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
  }) : true === n && (i = (0, r.jsx)(_.Z, {
    className: ee.newBadge
  })), i
}

function es(e) {
  let {
    onChange: t,
    guildId: n,
    channelType: s,
    description: l
  } = e, [a, o] = i.useState(""), [c, d] = i.useState({}), h = i.useRef(null), u = (0, p.e7)([Z.Z], () => Z.Z.getGuild(n)), g = s === X.d4z.GUILD_STAGE_VOICE, {
    roles: C,
    members: b,
    getRichTag: N
  } = (0, v.Q)(u, null, g ? D.yP : (0, w.CG)(s), a, g), f = I.Z.useSections({
    roles: C,
    members: b
  });
  return (i.useEffect(() => {
    t(c)
  }, [c, t]), null == u) ? null : (0, r.jsx)(I.Z.Provider, {
    listRef: h,
    query: a,
    setQuery: o,
    pendingAdditions: c,
    setPendingAdditions: d,
    roles: C,
    members: b,
    getRichTag: N,
    children: (0, r.jsxs)(m.hzk, {
      className: ee.addMembersContainer,
      children: [null != l && "" !== l ? (0, r.jsx)(m.Text, {
        color: "header-secondary",
        className: ee.description,
        variant: "text-sm/normal",
        children: l
      }) : null, (0, r.jsx)(I.Z.SearchBox, {
        placeholderText: $.intl.string($.t.iezLLn)
      }), (0, r.jsx)(m.Text, {
        className: ee.searchHelpText,
        variant: "text-xs/normal",
        children: $.intl.string($.t.rwFx85)
      }), (0, r.jsx)(m._2F, {
        ref: h,
        className: ee.membersList,
        sectionHeight: I.Z.SECTION_HEIGHT,
        renderSection: I.Z.renderSection,
        rowHeight: I.Z.ROW_HEIGHT,
        renderRow: I.Z.renderRow,
        sections: f,
        innerAriaOrientation: "vertical",
        innerRole: "listbox"
      })]
    })
  })
}

function el(e) {
  let {
    onEmojiPicked: t,
    guildId: n
  } = e, s = i.useRef(null), l = i.useMemo(() => ({
    popoutLocation: {
      page: X.ZY5.CREATE_CHANNEL_MODAL,
      section: X.jXE.CHANNEL_NAME,
      object: X.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = i.useCallback(e => {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(A.Z, {
      channel: null,
      guildId: n,
      pickerIntention: K.Hz.CHANNEL_NAME,
      closePopout: i,
      onNavigateAway: i,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: r
        } = e;
        null != n && n.type === T.B.UNICODE && t(n.surrogates), r && i()
      },
      showOnlyUnicode: true,
      analyticsOverride: l
    })
  }, [l, n, t]);
  return (0, r.jsx)(m.yRy, {
    targetElementRef: s,
    renderPopout: a,
    animation: m.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(S.Z, er(en({}, e), {
        ref: s,
        active: n,
        className: ee.emojiButton,
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
class ea extends Chunk647438.PureComponent {
  componentDidMount() {
    let {
      _input: e
    } = this;
    null != module && module.select();
    let {
      guildId: t,
      applications: n,
      canCreateStoreChannel: r
    } = this.props;
    Chunk951288 && null == require && Chunk749210.Z.fetchApplications(exports), Chunk367907.ZP.trackWithMetadata(Chunk981631.rMx.OPEN_MODAL, {
      type: "Create Channel"
    })
  }
  componentDidUpdate(e, t) {
    !t.isPrivate && this.state.isPrivate && this.state.channelType === X.d4z.GUILD_ANNOUNCEMENT && this.setState({
      channelType: X.d4z.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && O.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, {
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
      isPrivate: r,
      channelType: i,
      skuId: s,
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
        categoryId: i,
        onClose: s
      } = this.props,
      {
        channelType: l
      } = this.state,
      a = null != require ? Chunk388032.intl.string(Chunk388032.t.dEaPc4) : l === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    if (null != Chunk647438) {
      let n = Chunk592125.Z.getChannel(Chunk647438);
      t = (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: Chunk305048.subtitle,
        children: Chunk388032.intl.format(Chunk388032.t.L1zJgb, {
          categoryName: null != (e = null == require ? true : require.name) ? module : ""
        })
      })
    }
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: false,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk305048.header,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          id: this.headerId,
          variant: "heading-lg/semibold",
          className: Chunk305048.title,
          children: Chunk512722
        }), exports]
      }), (0, Chunk951288.jsx)(Chunk481060.olH, {
        onClick: Chunk120356,
        className: Chunk305048.closeButton
      })]
    })
  }
  getHelperText() {
    let {
      cloneChannel: e,
      channelType: t,
      guildId: i
    } = this.props;
    return null != module ? Chunk388032.intl.format(Chunk388032.t.s2ZzZZ, {
      name: (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z, true)
    }) : exports === Chunk981631.d4z.GUILD_FORUM ? Chunk388032.intl.format(Chunk388032.t.tbVWyR, {
      forumUpsellHook: (e, t) => (0, r.jsx)(m.Anchor, {
        onClick: () => (0, m.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18417").then(n.bind(n, 740696));
          return t => (0, r.jsx)(e, er(en({}, t), {
            guildId: i
          }))
        }),
        children: e
      }, t)
    }) : true
  }
  renderName() {
    let e, {
        guildId: t
      } = this.props,
      {
        errors: n,
        channelType: i
      } = this.state;
    (null == require ? true : require.name) != null && (e = Array.isArray(require.name) ? require.name.join(", ") : require.name);
    let s = Chunk647438 === Chunk981631.d4z.GUILD_CATEGORY,
      l = Chunk120356 ? Chunk388032.intl.string(Chunk388032.t.OCAkGP) : Chunk388032.intl.string(Chunk388032.t.PVbHDl),
      a = this.getIconComponent();
    return (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: l,
      helperText: this.getHelperText(),
      error: module,
      value: this.state.name,
      onChange: this.handleNameChange,
      inputRef: this.setInputRef,
      maxLength: 100,
      placeholder: function(e) {
        switch (e) {
          case X.d4z.GUILD_CATEGORY:
            return $.intl.string($.t.eTVbtx);
          case X.d4z.GUILD_FORUM:
            return $.intl.string($.t["5z1Xat"]);
          default:
            return $.intl.string($.t["bw/b8E"])
        }
      }(Chunk647438),
      leading: Chunk120356 ? true : Chunk512722,
      trailing: {
        type: "emoji",
        button: (0, Chunk951288.jsx)(el, {
          onEmojiPicked: this.insertEmojiAtPosition,
          isPrivateChannel: this.state.isPrivate,
          guildId: exports
        })
      },
      autoFocus: true,
      focusProps: {
        offset: {
          right: false
        }
      }
    })
  }
  renderType() {
    let {
      cloneChannel: e,
      applications: t,
      canCreateStoreChannel: n,
      canCreateAnnouncementChannel: i,
      canCreateStageChannel: s,
      canCreateMediaChannel: l
    } = this.props, {
      channelType: a,
      isPrivate: o
    } = this.state;
    if (null != module || Chunk512722 === Chunk981631.d4z.GUILD_CATEGORY) return;
    let c = null != exports && exports.length > 0;
    return (0, Chunk951288.jsx)(Chunk755721.Gu, {
      label: Chunk388032.intl.string(Chunk388032.t["7ZcXG2"]),
      options: function(e) {
        let {
          isPrivate: t,
          showStoreChannelOption: n,
          showAnnouncementChannelOption: i,
          canCreateStageChannel: s,
          canCreateMediaChannel: l
        } = e, a = [{
          icon: t ? m.W4G : m.VL1,
          label: $.intl.string($.t.pnuRXC),
          value: X.d4z.GUILD_TEXT,
          description: $.intl.string($.t["Hf5Lb+"])
        }];
        return a.push({
          icon: t ? m.gjC : m.gj8,
          label: $.intl.string($.t.Sx55Oh),
          value: X.d4z.GUILD_VOICE,
          description: $.intl.string($.t.pqfkoF)
        }), a.push({
          icon: t ? m.BUe : m.Mmi,
          label: $.intl.string($.t.eAVID5),
          value: X.d4z.GUILD_FORUM,
          description: (0, r.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            className: ee.radioLabelDescription,
            children: [$.intl.string($.t.iZ5pgg), (0, r.jsx)("br", {}), $.intl.format($.t.fjSvsC, {
              onClick: () => {
                open(Q.V8)
              }
            })]
          })
        }), l && a.push({
          icon: t ? m.D7T : m.XBm,
          label: $.intl.string($.t["6x6fVg"]),
          value: X.d4z.GUILD_MEDIA,
          description: (0, r.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            className: ee.radioLabelDescription,
            children: [$.intl.string($.t.JyCrwS), (0, r.jsx)("br", {}), $.intl.format($.t.fjSvsC, {
              onClick: () => {
                open(V.Z.getCreatorSupportArticleURL(X.BhN.MEDIA_CHANNEL))
              }
            })]
          }),
          isBeta: true
        }), i && a.push({
          icon: m.MqZ,
          iconSize: 24,
          label: $.intl.string($.t.qr9dEP),
          value: X.d4z.GUILD_ANNOUNCEMENT,
          description: $.intl.string($.t.gBkfzu)
        }), n && a.push({
          icon: m.lO_,
          iconSize: 24,
          label: $.intl.string($.t.SxjkXf),
          value: X.d4z.GUILD_STORE,
          description: $.intl.string($.t.nmCPMC)
        }), s && a.push({
          icon: m.ewx,
          iconSize: 24,
          label: $.intl.string($.t.pNWst0),
          value: X.d4z.GUILD_STAGE_VOICE,
          description: $.intl.string($.t.VPAwgo)
        }), a.map(e => {
          let {
            icon: t,
            iconSize: n,
            label: i,
            value: s,
            description: l,
            isNew: a,
            isBeta: o
          } = e;
          return {
            name: (0, r.jsxs)("div", {
              className: ee.radioItemName,
              children: [(0, r.jsx)(t, er(en({}, null != n ? {
                width: n,
                height: n,
                size: "custom"
              } : {
                size: "md"
              }), {
                color: "currentColor",
                className: ee.icon,
                colorClass: ee.foreground
              })), (0, r.jsxs)("div", {
                children: [(0, r.jsxs)(m.Text, {
                  variant: "text-md/medium",
                  className: ee.radioLabelName,
                  children: [i, (0, r.jsx)(ei, {
                    isNew: a,
                    isBeta: o
                  })]
                }), "string" == typeof l ? (0, r.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: ee.radioLabelDescription,
                  children: l
                }) : l]
              })]
            }),
            value: s,
            radioBarClassName: ee.radioBar,
            radioItemIconClassName: ee.radioBarIcon
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
      size: Chunk755721.l7.NOT_SET,
      onChange: this.handleTypeChange,
      itemInfoClassName: Chunk305048.radioBarLabel
    })
  }
  renderStoreOptions() {
    let {
      applications: e
    } = this.props, {
      applicationId: t,
      skuId: n,
      branchId: i,
      showBranches: s,
      hasBranches: l
    } = this.state;
    if (null == module || 0 === module.length) throw Error("Unexpected empty applications");
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t.vPIW2L),
        options: module.map(e => ({
          label: e.name,
          value: e.id
        })),
        placeholder: Chunk388032.intl.string(Chunk388032.t["3XfCPX"]),
        value: exports,
        onChange: this.handleApplicationChange,
        className: Chunk305048.storeChannelOptionSelector
      }), null != exports ? (0, Chunk951288.jsx)(Chunk620123.Z, {
        label: Chunk388032.intl.string(Chunk388032.t.XNIWFj),
        applicationId: exports,
        onChange: this.handleSKUChange,
        selectedSkuId: require,
        className: Chunk305048.storeChannelOptionSelector
      }, exports) : null, null != exports && l ? (0, Chunk951288.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["3e9mH5"]),
        description: Chunk388032.intl.format(Chunk388032.t.UVXL1R, {
          devPortalUrl: Chunk981631.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT
        }),
        icon: Chunk481060._m8,
        onChange: this.handleShowBranchesToggle,
        checked: Chunk120356
      }) : null, null != exports ? (0, Chunk951288.jsx)(Chunk332063.Z, {
        label: Chunk120356 ? Chunk388032.intl.string(Chunk388032.t.o7DqF3) : true,
        applicationId: exports,
        onChange: this.handleBranchChange,
        selectedBranchId: Chunk647438,
        hide: !Chunk120356,
        includeMaster: Chunk120356,
        onHasBranchesChange: this.handleHasBranchesChange,
        className: Chunk305048.storeChannelOptionSelector
      }, exports) : null]
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
    let i = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.lEPAZ5) : Chunk388032.intl.string(Chunk388032.t.aUI70g),
      s = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.RQUk61) : Chunk388032.intl.string(Chunk388032.t.YguuKq);
    return (0, Chunk951288.jsx)(Chunk481060.rsf, {
      label: Chunk647438,
      description: Chunk120356,
      icon: Chunk481060.mBM,
      onChange: this.handlePrivacyChange,
      checked: require
    })
  }
  renderError(e) {
    let t, {
        channelType: n,
        isPrivate: i,
        errors: s
      } = this.state,
      {
        canConnect: a,
        canViewChannels: o
      } = this.props;
    if (Object.values(s).length > 0) {
      if (null != s.message && "" !== s.message) t = s.message;
      else if (e || null == s.name) {
        let e = Object.values(s)[0];
        e.length > 0 && (t = e)
      }
    } else i && !(0, j.nT)(n, o, a) && (t = (0, j.$7)(n));
    if (null != t) return (0, r.jsx)("div", {
      className: l()(ee.createError, {
        [ee.addMemberError]: e
      }),
      children: (0, r.jsx)(m.Wn, {
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
        channelType: i
      } = this.state,
      {
        isPrivate: s
      } = this.state;
    e = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    let l = Chunk120356 || Chunk647438 === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: Chunk305048.modalFooter,
      children: (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [l ? (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.PDTjLN),
          type: "button",
          onClick: () => {
            this.setState({
              slide: "ADD_MEMBERS",
              errors: {}
            })
          },
          disabled: !this.canSubmit()
        }) : (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: module,
          type: "submit",
          disabled: !this.canSubmit()
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
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
    return e = 0 === Object.keys(require).length ? Chunk388032.intl.string(Chunk388032.t["5Wxrcd"]) : exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]), (0, Chunk951288.jsx)(Chunk481060.mzw, {
      children: (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
        direction: "horizontal-reverse",
        children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: module,
          type: "submit",
          disabled: !this.canSubmit()
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["13/7kX"]),
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
      children: [this.renderHeader(), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk305048.modalContent,
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 20,
          children: [this.renderType(), this.renderName(), module === Chunk981631.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, Chunk951288.jsx)(Chunk636816.Z, {
            guildId: exports,
            channelType: module,
            className: Chunk305048.channelTypeDescription
          }), module === Chunk981631.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
        })
      }), this.renderError(), this.renderFooter()]
    })
  }
  renderAddMemberSlideContent() {
    let {
      name: e,
      channelType: t
    } = this.state, {
      guildId: n,
      onClose: i
    } = this.props, s = this.getIconComponent(), l = exports === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          className: Chunk305048.header,
          children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            className: Chunk305048.title,
            children: l ? Chunk388032.intl.string(Chunk388032.t["S/6zHM"]) : Chunk388032.intl.string(Chunk388032.t.dMJ3Y6)
          }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: Chunk305048.subtitle,
            children: [(0, Chunk951288.jsx)(Chunk120356, {
              size: "xs",
              color: "currentColor",
              className: Chunk305048.subtitleIcon
            }), module]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: Chunk647438,
          className: Chunk305048.closeButton
        })]
      }), this.renderError(true), (0, Chunk951288.jsx)(es, {
        onChange: this.handlePermissionOverwriteChange,
        guildId: require,
        channelType: exports,
        description: l ? Chunk388032.intl.string(Chunk388032.t.f7VbhF) : true
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
      className: Chunk305048.modal,
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
    super(e), et(this, "headerId", (0, y.hQ)()), et(this, "_input", true), et(this, "setInputRef", e => {
      this._input = e
    }), et(this, "handleNameChange", e => {
      var t, n;
      let {
        channelType: r
      } = this.state;
      w.xL.has(r) && (e = (0, k.Nj)(e));
      let i = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(i, i)
      })
    }), et(this, "insertEmojiAtPosition", e => {
      var t, n, r, i;
      let s = null != (r = null == (t = this._input) ? true : t.selectionStart) ? r : 0,
        l = null != (i = null == (n = this._input) ? true : n.selectionEnd) ? i : 0,
        a = this.state.name,
        o = a.substring(0, s) + e + a.substring(l);
      this.setState({
        name: o
      }, () => {
        var t, n;
        let r = s + e.length;
        null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(r, r)
      })
    }), et(this, "handleTypeChange", e => {
      let {
        value: t
      } = e, {
        name: n
      } = this.state;
      w.xL.has(t) && (n = (0, k.Nj)(n)), t === X.d4z.GUILD_STAGE_VOICE && this.setState({
        isPrivate: false
      }), this.setState({
        channelType: t,
        name: n
      })
    }), et(this, "handlePrivacyChange", e => {
      this.setState({
        isPrivate: e
      })
    }), et(this, "handleApplicationChange", e => {
      this.setState({
        applicationId: e
      })
    }), et(this, "handleSKUChange", e => {
      this.setState({
        skuId: e
      })
    }), et(this, "handleShowBranchesToggle", e => {
      this.setState({
        showBranches: e,
        branchId: null
      })
    }), et(this, "handleBranchChange", e => {
      this.setState({
        branchId: e
      })
    }), et(this, "handleHasBranchesChange", e => {
      this.setState({
        hasBranches: e
      })
    }), et(this, "handleSubmit", async e => {
      let t, n, r;
      e.preventDefault();
      let {
        cloneChannel: i,
        categoryId: s,
        user: l,
        memberRoleIds: a,
        isAdmin: o,
        onClose: c,
        owner: h
      } = this.props, {
        name: u,
        pendingPermissionOverwrites: p,
        channelType: g,
        skuId: m,
        branchId: b,
        isPrivate: N
      } = this.state, f = this.getGuildId();
      if (null != f) {
        if (null != i) t = d().values(i.permissionOverwrites), n = i.bitrate, r = i.userLimit;
        else if (g === X.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(f);
        else {
          if (N) {
            t = (0, k.oQ)(f, g, [], true);
            let e = (0, j.Tj)(p, g);
            e.length > 0 && (t = t.concat(e));
            let n = null != h && l.id === h.id;
            t.some(e => a.has(e.id)) || o || n || t.push((0, k.jZ)(l.id, g))
          }
          g === X.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(p).forEach(e => {
            let {
              row: n
            } = e;
            null != n.id && "" !== n.id && (n.rowType === W.aC.ROLE ? t.push((0, U.A)(n.id, x.BN.ROLE)) : n.rowType === W.aC.MEMBER && t.push((0, U.A)(n.id, x.BN.MEMBER)))
          }))
        }
        this.setState({
          errors: {},
          submitting: true
        });
        try {
          let e = await C.Z.createChannel({
            guildId: f,
            type: g,
            name: u,
            permissionOverwrites: t,
            bitrate: n,
            userLimit: r,
            parentId: g !== X.d4z.GUILD_CATEGORY ? s : null,
            skuId: m,
            branchId: b
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let i = e.body;
          w.xL.has(g) && (0, L.XU)(i.guild_id, i.id), this.setState({
            submitting: false
          }), c()
        } catch (e) {
          null != e.body && "object" == typeof e.body ? this.setState({
            errors: e.body,
            submitting: false
          }) : this.setState({
            errors: {
              message: $.intl.string($.t.fEptJP)
            },
            submitting: false
          })
        }
      }
    });
    let {
      channelType: t,
      cloneChannel: n,
      prefillChannelName: r
    } = e;
    this.state = {
      channelType: null != t ? t : X.d4z.GUILD_TEXT,
      name: null != n ? (0, Y.F6)(n, H.default, B.Z) : null != r ? r : "",
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
let eo = Chunk647438.forwardRef(function(e, t) {
  let {
    channelType: n,
    guildId: i,
    cloneChannelId: s
  } = e, l = (0, p.cj)([Z.Z, H.default, z.Z, M.Z, R.ZP], () => {
    var e, t, r;
    let l = Z.Z.getGuild(i),
      a = H.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let c = null != l && null != l.ownerId ? H.default.getUser(l.ownerId) : null,
      d = z.Z.can(X.Plq.ADMINISTRATOR, l),
      h = M.Z.getChannel(s);
    return {
      guild: l,
      canCreateStoreChannel: null != l && l.features.has(X.GuildFeatures.COMMERCE),
      canCreateAnnouncementChannel: null != l && l.features.has(X.GuildFeatures.NEWS),
      user: a,
      owner: c,
      memberRoles: null != (t = null == (e = R.ZP.getMember(i, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: z.Z.can(X.Plq.VIEW_CHANNEL, l),
      canConnect: z.Z.can(X.Plq.CONNECT, l),
      isAdmin: d,
      cloneChannel: h,
      channelType: null != (r = null == h ? true : h.type) ? r : n,
      canManageRoles: z.Z.can(X.Plq.MANAGE_ROLES, l),
      canManageChannels: z.Z.can(X.Plq.MANAGE_CHANNELS, l)
    }
  }), a = (0, p.Wu)([E.Z], () => E.Z.getGuildApplicationIds(i).map(e => E.Z.getApplication(e)).filter(F.lm)), c = new Set(l.memberRoles), {
    canManageRoles: d,
    canManageChannels: h
  } = l, u = (0, G.m)(i) && d && h, g = (0, P.Ui)(null == l ? true : l.guild);
  return (0, r.jsx)(ea, er(en({}, e, l), {
    memberRoleIds: c,
    applications: a,
    canCreateStageChannel: u,
    canCreateMediaChannel: g,
    ref: t,
    width: 496
  }))
})