/** Chunk was on 29497 **/
/** chunk id: 241865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eo,
  p: () => er
}), require("./539854.js"), require("./953529.js"), require("./388685.js"), require("./781311.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk831209 = require("./831209.js"),
  Chunk793030 = require("./793030.js"),
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
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

function er(e) {
  let {
    isNew: t,
    isBeta: n
  } = e, r = null;
  returntrue === t ? r = (0, i.jsx)(m.IGR, {
    text: $.intl.string($.t.psHMa6),
    className: ee.newBadge,
    color: d.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
  }) : true === n && (r = (0, i.jsx)(A.Z, {
    className: ee.newBadge
  })), r
}

function el(e) {
  let t, {
      transitionState: n,
      onClose: l,
      channelType: s,
      iconComponent: a,
      error: o,
      name: c,
      guildId: u,
      onBack: d,
      canSubmit: g,
      onMembersChange: C,
      pendingPermissionOverwrites: b
    } = e,
    [f, O] = r.useState(""),
    [E, N] = r.useState({}),
    v = r.useRef(null),
    I = (0, p.e7)([M.Z], () => M.Z.getGuild(u)),
    S = s === X.d4z.GUILD_STAGE_VOICE,
    {
      roles: j,
      members: T,
      getRichTag: P
    } = (0, x.Q)(I, null, S ? G.yP : (0, D.CG)(s), f, S),
    A = y.Z.useSections({
      roles: j,
      members: T
    });
  return (r.useEffect(() => {
    C(E)
  }, [E, C]), null == I) ? null : (t = 0 === Object.keys(b).length ? $.intl.string($.t["5Wxrcd"]) : s === X.d4z.GUILD_CATEGORY ? $.intl.string($.t["ISN+NM"]) : $.intl.string($.t["fUYU+j"]), (0, i.jsx)(y.Z.Provider, {
    listRef: v,
    query: f,
    setQuery: O,
    pendingAdditions: E,
    setPendingAdditions: N,
    roles: j,
    members: T,
    getRichTag: P,
    children: (0, i.jsx)(h.Modal, {
      transitionState: n,
      onClose: l,
      title: S ? $.intl.string($.t["S/6zHM"]) : $.intl.string($.t.dMJ3Y6),
      subtitle: {
        text: c,
        leadingIcon: a
      },
      input: (0, i.jsxs)(i.Fragment, {
        children: [S ? (0, i.jsx)(m.Text, {
          color: "header-secondary",
          className: ee.description,
          variant: "text-sm/normal",
          children: $.intl.string($.t.f7VbhF)
        }) : true, (0, i.jsx)(y.Z.SearchBox, {
          placeholderText: $.intl.string($.t.iezLLn)
        }), (0, i.jsx)(m.Text, {
          className: ee.searchHelpText,
          variant: "text-xs/normal",
          children: $.intl.string($.t.rwFx85)
        })]
      }),
      preview: o,
      listProps: {
        sectionHeight: y.Z.SECTION_HEIGHT,
        renderSection: y.Z.renderSection,
        rowHeight: y.Z.ROW_HEIGHT,
        renderRow: y.Z.renderRow,
        sections: A,
        innerAriaOrientation: "vertical",
        innerRole: "listbox"
      },
      actions: [{
        variant: "secondary",
        text: $.intl.string($.t["13/7kX"]),
        onClick: d
      }, {
        variant: "primary",
        text: t,
        type: "submit",
        disabled: !g
      }]
    })
  }))
}

function es(e) {
  let {
    onEmojiPicked: t,
    guildId: n
  } = e, l = r.useRef(null), s = r.useMemo(() => ({
    popoutLocation: {
      page: X.ZY5.CREATE_CHANNEL_MODAL,
      section: X.jXE.CHANNEL_NAME,
      object: X.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = r.useCallback(e => {
    let {
      closePopout: r
    } = e;
    return (0, i.jsx)(T.Z, {
      channel: null,
      guildId: n,
      pickerIntention: Q.Hz.CHANNEL_NAME,
      closePopout: r,
      onNavigateAway: r,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: i
        } = e;
        null != n && n.type === P.B.UNICODE && t(n.surrogates), i && r()
      },
      showOnlyUnicode: true,
      analyticsOverride: s
    })
  }, [s, n, t]);
  return (0, i.jsx)(m.yRy, {
    targetElementRef: l,
    renderPopout: a,
    animation: m.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(j.Z, ei(en({}, e), {
        ref: l,
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
      canCreateStoreChannel: i
    } = this.props;
    Chunk951288 && null == require && Chunk749210.Z.fetchApplications(exports), Chunk367907.ZP.trackWithMetadata(Chunk981631.rMx.OPEN_MODAL, {
      type: "Create Channel"
    })
  }
  componentDidUpdate(e, t) {
    !t.isPrivate && this.state.isPrivate && this.state.channelType === X.d4z.GUILD_ANNOUNCEMENT && this.setState({
      channelType: X.d4z.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && N.ZP.trackWithMetadata(X.rMx.OPEN_MODAL, {
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
      channelType: r,
      skuId: l,
      name: s,
      submitting: a
    } = this.state;
    return !Chunk512722 && require !== Chunk481060.Dvm.EXITING && "" !== s && "" !== s.trim() && (!Chunk951288 || !!(0, Chunk605436.nT)(Chunk647438, module, exports)) && (Chunk647438 !== Chunk981631.d4z.GUILD_STORE || null != Chunk120356)
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
  getHelperText() {
    let {
      cloneChannel: e,
      channelType: t,
      guildId: r
    } = this.props;
    return null != module ? Chunk388032.intl.format(Chunk388032.t.s2ZzZZ, {
      name: (0, Chunk933557.F6)(module, Chunk594174.default, Chunk699516.Z, true)
    }) : exports === Chunk981631.d4z.GUILD_FORUM ? Chunk388032.intl.format(Chunk388032.t.tbVWyR, {
      forumUpsellHook: (e, t) => (0, i.jsx)(m.Anchor, {
        onClick: () => (0, m.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18417").then(n.bind(n, 740696));
          return t => (0, i.jsx)(e, ei(en({}, t), {
            guildId: r
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
        channelType: r
      } = this.state;
    (null == require ? true : require.name) != null && (e = Array.isArray(require.name) ? require.name.join(", ") : require.name);
    let l = Chunk647438 === Chunk981631.d4z.GUILD_CATEGORY,
      s = Chunk120356 ? Chunk388032.intl.string(Chunk388032.t.OCAkGP) : Chunk388032.intl.string(Chunk388032.t.PVbHDl),
      a = this.getIconComponent();
    return (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: s,
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
        button: (0, Chunk951288.jsx)(es, {
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
      canCreateAnnouncementChannel: r,
      canCreateStageChannel: l,
      canCreateMediaChannel: s
    } = this.props, {
      channelType: a,
      isPrivate: o
    } = this.state;
    if (null != module || Chunk512722 === Chunk981631.d4z.GUILD_CATEGORY) return;
    let c = null != exports && exports.length > 0;
    return (0, Chunk951288.jsx)(Chunk755721.Gu, {
      className: Chunk305048.channelTypes,
      label: Chunk388032.intl.string(Chunk388032.t["7ZcXG2"]),
      options: function(e) {
        let {
          isPrivate: t,
          showStoreChannelOption: n,
          showAnnouncementChannelOption: r,
          canCreateStageChannel: l,
          canCreateMediaChannel: s
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
          description: (0, i.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            className: ee.radioLabelDescription,
            children: [$.intl.string($.t.iZ5pgg), (0, i.jsx)("br", {}), $.intl.format($.t.fjSvsC, {
              onClick: () => {
                open(K.V8)
              }
            })]
          })
        }), s && a.push({
          icon: t ? m.D7T : m.XBm,
          label: $.intl.string($.t["6x6fVg"]),
          value: X.d4z.GUILD_MEDIA,
          description: (0, i.jsxs)(m.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            className: ee.radioLabelDescription,
            children: [$.intl.string($.t.JyCrwS), (0, i.jsx)("br", {}), $.intl.format($.t.fjSvsC, {
              onClick: () => {
                open(F.Z.getCreatorSupportArticleURL(X.BhN.MEDIA_CHANNEL))
              }
            })]
          }),
          isBeta: true
        }), r && a.push({
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
        }), l && a.push({
          icon: m.ewx,
          iconSize: 24,
          label: $.intl.string($.t.pNWst0),
          value: X.d4z.GUILD_STAGE_VOICE,
          description: $.intl.string($.t.VPAwgo)
        }), a.map(e => {
          let {
            icon: t,
            iconSize: n,
            label: r,
            value: l,
            description: s,
            isNew: a,
            isBeta: o
          } = e;
          return {
            name: (0, i.jsxs)("div", {
              className: ee.radioItemName,
              children: [(0, i.jsx)(t, ei(en({}, null != n ? {
                width: n,
                height: n,
                size: "custom"
              } : {
                size: "md"
              }), {
                color: "currentColor",
                className: ee.icon,
                colorClass: ee.foreground
              })), (0, i.jsxs)("div", {
                children: [(0, i.jsxs)(m.Text, {
                  variant: "text-md/medium",
                  className: ee.radioLabelName,
                  children: [r, (0, i.jsx)(er, {
                    isNew: a,
                    isBeta: o
                  })]
                }), "string" == typeof s ? (0, i.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: ee.radioLabelDescription,
                  children: s
                }) : s]
              })]
            }),
            value: l,
            radioBarClassName: ee.radioBar,
            radioItemIconClassName: ee.radioBarIcon
          }
        })
      }({
        isPrivate: o,
        showStoreChannelOption: require && Chunk392711,
        showAnnouncementChannelOption: Chunk647438,
        canCreateStageChannel: Chunk120356,
        canCreateMediaChannel: s
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
      branchId: r,
      showBranches: l,
      hasBranches: s
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
      }, exports) : null, null != exports && s ? (0, Chunk951288.jsx)(Chunk481060.rsf, {
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
    let r = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.lEPAZ5) : Chunk388032.intl.string(Chunk388032.t.aUI70g),
      l = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.RQUk61) : Chunk388032.intl.string(Chunk388032.t.YguuKq);
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
        isPrivate: r,
        errors: l
      } = this.state,
      {
        canConnect: a,
        canViewChannels: o
      } = this.props;
    if (Object.values(l).length > 0) {
      if (null != l.message && "" !== l.message) t = l.message;
      else if (e || null == l.name) {
        let e = Object.values(l)[0];
        e.length > 0 && (t = e)
      }
    } else r && !(0, I.nT)(n, o, a) && (t = (0, I.$7)(n));
    if (null != t) return (0, i.jsx)("div", {
      className: s()(ee.createError, {
        [ee.addMemberError]: e
      }),
      children: (0, i.jsx)(m.Wn, {
        messageType: m.QYI.ERROR,
        children: t
      })
    })
  }
  handlePermissionOverwriteChange(e) {
    this.setState({
      pendingPermissionOverwrites: e
    })
  }
  renderCreateChannelModal() {
    var e;
    let t, n, {
        channelType: r,
        isPrivate: l
      } = this.state,
      {
        guildId: s,
        transitionState: a,
        cloneChannel: o,
        categoryId: c,
        onClose: u,
        channelType: d
      } = this.props,
      p = null != o ? Chunk388032.intl.string(Chunk388032.t.dEaPc4) : Chunk647438 === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    if (null != Chunk392711) {
      let n = Chunk592125.Z.getChannel(Chunk392711);
      t = Chunk388032.intl.format(Chunk388032.t.L1zJgb, {
        categoryName: null != (e = null == require ? true : require.name) ? module : ""
      })
    }
    n = Chunk831209 === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    let g = Chunk120356 || Chunk647438 === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, Chunk951288.jsx)(Chunk793030.Modal, {
        transitionState: Chunk512722,
        onClose: u,
        title: Chunk442837,
        subtitle: exports,
        preview: this.renderError(),
        actions: [{
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: u
        }, Chunk755721 ? {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.PDTjLN),
          type: "button",
          onClick: () => {
            this.setState({
              slide: "ADD_MEMBERS",
              errors: {}
            })
          }
        } : {
          variant: "primary",
          type: "submit",
          disabled: !this.canSubmit(),
          text: require
        }],
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk305048.createChannelContent,
          children: [this.renderType(), this.renderName(), Chunk831209 === Chunk981631.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, Chunk951288.jsx)(Chunk636816.Z, {
            guildId: s,
            channelType: Chunk647438,
            className: Chunk305048.channelTypeDescription
          }), Chunk647438 === Chunk981631.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
        })
      })
    })
  }
  renderAddMemberSlideContent() {
    let {
      name: e,
      channelType: t,
      pendingPermissionOverwrites: n
    } = this.state, {
      guildId: r,
      onClose: l,
      transitionState: s
    } = this.props, a = () => {
      this.setState({
        slide: "CHANNEL_INFO"
      })
    }, o = this.canSubmit();
    return (0, Chunk951288.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, Chunk951288.jsx)(el, {
        onClose: Chunk120356,
        transitionState: s,
        channelType: exports,
        iconComponent: this.getIconComponent(),
        error: this.renderError(true),
        name: module,
        guildId: Chunk647438,
        onBack: Chunk512722,
        canSubmit: o,
        onMembersChange: this.handlePermissionOverwriteChange,
        pendingPermissionOverwrites: require
      })
    })
  }
  render() {
    let {
      slide: e
    } = this.state;
    return "CHANNEL_INFO" === module ? this.renderCreateChannelModal() : this.renderAddMemberSlideContent()
  }
  constructor(e) {
    super(e), et(this, "headerId", (0, S.hQ)()), et(this, "_input", true), et(this, "setInputRef", e => {
      this._input = e
    }), et(this, "handleNameChange", e => {
      var t, n;
      let {
        channelType: i
      } = this.state;
      D.xL.has(i) && (e = (0, k.Nj)(e));
      let r = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(r, r)
      })
    }), et(this, "insertEmojiAtPosition", e => {
      var t, n, i, r;
      let l = null != (i = null == (t = this._input) ? true : t.selectionStart) ? i : 0,
        s = null != (r = null == (n = this._input) ? true : n.selectionEnd) ? r : 0,
        a = this.state.name,
        o = a.substring(0, l) + e + a.substring(s);
      this.setState({
        name: o
      }, () => {
        var t, n;
        let i = l + e.length;
        null == (t = this._input) || t.focus(), null == (n = this._input) || n.setSelectionRange(i, i)
      })
    }), et(this, "handleTypeChange", e => {
      let {
        value: t
      } = e, {
        name: n
      } = this.state;
      D.xL.has(t) && (n = (0, k.Nj)(n)), t === X.d4z.GUILD_STAGE_VOICE && this.setState({
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
      let t, n, i;
      e.preventDefault();
      let {
        cloneChannel: r,
        categoryId: l,
        user: s,
        memberRoleIds: a,
        isAdmin: o,
        onClose: c,
        owner: d
      } = this.props, {
        name: h,
        pendingPermissionOverwrites: p,
        channelType: g,
        skuId: m,
        branchId: b,
        isPrivate: f
      } = this.state, O = this.getGuildId();
      if (null != O) {
        if (null != r) t = u().values(r.permissionOverwrites), n = r.bitrate, i = r.userLimit;
        else if (g === X.d4z.GUILD_ANNOUNCEMENT) t = (0, k.rt)(O);
        else {
          if (f) {
            t = (0, k.oQ)(O, g, [], true);
            let e = (0, I.Tj)(p, g);
            e.length > 0 && (t = t.concat(e));
            let n = null != d && s.id === d.id;
            t.some(e => a.has(e.id)) || o || n || t.push((0, k.jZ)(s.id, g))
          }
          g === X.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(p).forEach(e => {
            let {
              row: n
            } = e;
            null != n.id && "" !== n.id && (n.rowType === W.aC.ROLE ? t.push((0, U.A)(n.id, E.BN.ROLE)) : n.rowType === W.aC.MEMBER && t.push((0, U.A)(n.id, E.BN.MEMBER)))
          }))
        }
        this.setState({
          errors: {},
          submitting: true
        });
        try {
          let e = await C.Z.createChannel({
            guildId: O,
            type: g,
            name: h,
            permissionOverwrites: t,
            bitrate: n,
            userLimit: i,
            parentId: g !== X.d4z.GUILD_CATEGORY ? l : null,
            skuId: m,
            branchId: b
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let r = e.body;
          D.xL.has(g) && (0, L.XU)(r.guild_id, r.id), this.setState({
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
      prefillChannelName: i
    } = e;
    this.state = {
      channelType: null != t ? t : X.d4z.GUILD_TEXT,
      name: null != n ? (0, Y.F6)(n, H.default, B.Z) : null != i ? i : "",
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
    guildId: r,
    cloneChannelId: l
  } = e, s = (0, p.cj)([M.Z, H.default, z.Z, Z.Z, R.ZP], () => {
    var e, t, i;
    let s = M.Z.getGuild(r),
      a = H.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let c = null != s && null != s.ownerId ? H.default.getUser(s.ownerId) : null,
      u = z.Z.can(X.Plq.ADMINISTRATOR, s),
      d = Z.Z.getChannel(l);
    return {
      guild: s,
      canCreateStoreChannel: null != s && s.features.has(X.GuildFeatures.COMMERCE),
      canCreateAnnouncementChannel: null != s && s.features.has(X.GuildFeatures.NEWS),
      user: a,
      owner: c,
      memberRoles: null != (t = null == (e = R.ZP.getMember(r, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: z.Z.can(X.Plq.VIEW_CHANNEL, s),
      canConnect: z.Z.can(X.Plq.CONNECT, s),
      isAdmin: u,
      cloneChannel: d,
      channelType: null != (i = null == d ? true : d.type) ? i : n,
      canManageRoles: z.Z.can(X.Plq.MANAGE_ROLES, s),
      canManageChannels: z.Z.can(X.Plq.MANAGE_CHANNELS, s)
    }
  }), a = (0, p.Wu)([v.Z], () => v.Z.getGuildApplicationIds(r).map(e => v.Z.getApplication(e)).filter(V.lm)), c = new Set(s.memberRoles), {
    canManageRoles: u,
    canManageChannels: d
  } = s, h = (0, w.m)(r) && u && d, g = (0, _.Ui)(null == s ? true : s.guild);
  return (0, i.jsx)(ea, ei(en({}, e, s), {
    memberRoleIds: c,
    applications: a,
    canCreateStageChannel: h,
    canCreateMediaChannel: g,
    ref: t,
    width: 496
  }))
})