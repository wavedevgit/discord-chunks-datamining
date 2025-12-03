/** Chunk was on 29497 **/
/** chunk id: 241865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => el,
  p: () => et
}), require("./539854.js"), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk933557 = require("./933557.js"),
  Chunk636816 = require("./636816.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk185923 = require("./185923.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305048 = require("./305048.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}

function ee(e, t) {
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

function et(e) {
  let {
    isNew: t,
    isBeta: n
  } = e, r = null;
  returntrue === t ? r = (0, i.jsx)(g.IGR, {
    text: Q.intl.string(Q.t.psHMa6),
    className: K.newBadge,
    color: p.Z.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css
  }) : true === n && (r = (0, i.jsx)(T.Z, {
    className: K.newBadge
  })), r
}

function en(e) {
  let t, {
      transitionState: n,
      onClose: l,
      channelType: s,
      iconComponent: a,
      error: o,
      name: c,
      guildId: u,
      onBack: p,
      canSubmit: m,
      onMembersChange: C,
      pendingPermissionOverwrites: f
    } = e,
    [b, O] = r.useState(""),
    [E, I] = r.useState({}),
    v = r.useRef(null),
    S = (0, h.e7)([R.Z], () => R.Z.getGuild(u)),
    j = s === Y.d4z.GUILD_STAGE_VOICE,
    {
      roles: x,
      members: P,
      getRichTag: T
    } = (0, N.Q)(S, null, j ? G.yP : (0, L.CG)(s), b, j),
    A = y.Z.useSections({
      roles: x,
      members: P
    });
  return (r.useEffect(() => {
    C(E)
  }, [E, C]), null == S) ? null : (t = 0 === Object.keys(f).length ? Q.intl.string(Q.t["5Wxrcd"]) : s === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]), (0, i.jsx)(y.Z.Provider, {
    listRef: v,
    query: b,
    setQuery: O,
    pendingAdditions: E,
    setPendingAdditions: I,
    roles: x,
    members: P,
    getRichTag: T,
    children: (0, i.jsx)(d.Modal, {
      transitionState: n,
      onClose: l,
      title: j ? Q.intl.string(Q.t["S/6zHM"]) : Q.intl.string(Q.t.dMJ3Y6),
      subtitle: {
        text: c,
        leadingIcon: a
      },
      input: (0, i.jsxs)(i.Fragment, {
        children: [j ? (0, i.jsx)(g.Text, {
          color: "header-secondary",
          className: K.description,
          variant: "text-sm/normal",
          children: Q.intl.string(Q.t.f7VbhF)
        }) : true, (0, i.jsx)(y.Z.SearchBox, {
          placeholderText: Q.intl.string(Q.t.iezLLn)
        }), (0, i.jsx)(g.Text, {
          className: K.searchHelpText,
          variant: "text-xs/normal",
          children: Q.intl.string(Q.t.rwFx85)
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
        text: Q.intl.string(Q.t["13/7kX"]),
        onClick: p
      }, {
        variant: "primary",
        text: t,
        type: "submit",
        disabled: !m
      }]
    })
  }))
}

function ei(e) {
  let {
    onEmojiPicked: t,
    guildId: n
  } = e, l = r.useRef(null), s = r.useMemo(() => ({
    popoutLocation: {
      page: Y.ZY5.CREATE_CHANNEL_MODAL,
      section: Y.jXE.CHANNEL_NAME,
      object: Y.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = r.useCallback(e => {
    let {
      closePopout: r
    } = e;
    return (0, i.jsx)(x.Z, {
      channel: null,
      guildId: n,
      pickerIntention: X.Hz.CHANNEL_NAME,
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
  return (0, i.jsx)(g.yRy, {
    targetElementRef: l,
    renderPopout: a,
    animation: g.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(j.Z, ee($({}, e), {
        ref: l,
        active: n,
        className: K.emojiButton,
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
class er extends Chunk473749.PureComponent {
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
    Chunk54381 && null == require && Chunk749210.Z.fetchApplications(exports), Chunk367907.ZP.trackWithMetadata(Chunk981631.rMx.OPEN_MODAL, {
      type: "Create Channel"
    })
  }
  componentDidUpdate(e, t) {
    !t.isPrivate && this.state.isPrivate && this.state.channelType === Y.d4z.GUILD_ANNOUNCEMENT && this.setState({
      channelType: Y.d4z.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && E.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, {
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
    return !Chunk512722 && require !== Chunk481060.Dvm.EXITING && "" !== s && "" !== s.trim() && (!Chunk54381 || !!(0, Chunk605436.nT)(Chunk473749, module, exports)) && (Chunk473749 !== Chunk981631.d4z.GUILD_STORE || null != Chunk120356)
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
      forumUpsellHook: (e, t) => (0, i.jsx)(g.Anchor, {
        onClick: () => (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18417").then(n.bind(n, 740696));
          return t => (0, i.jsx)(e, ee($({}, t), {
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
    let l = Chunk473749 === Chunk981631.d4z.GUILD_CATEGORY,
      s = Chunk120356 ? Chunk388032.intl.string(Chunk388032.t.OCAkGP) : Chunk388032.intl.string(Chunk388032.t.PVbHDl),
      a = this.getIconComponent();
    return (0, Chunk54381.jsx)(Chunk481060.oil, {
      label: s,
      helperText: this.getHelperText(),
      error: module,
      value: this.state.name,
      onChange: this.handleNameChange,
      inputRef: this.setInputRef,
      maxLength: 100,
      placeholder: function(e) {
        switch (e) {
          case Y.d4z.GUILD_CATEGORY:
            return Q.intl.string(Q.t.eTVbtx);
          case Y.d4z.GUILD_FORUM:
            return Q.intl.string(Q.t["5z1Xat"]);
          default:
            return Q.intl.string(Q.t["bw/b8E"])
        }
      }(Chunk473749),
      leading: Chunk120356 ? true : Chunk512722,
      trailing: {
        type: "emoji",
        button: (0, Chunk54381.jsx)(ei, {
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
    return (0, Chunk54381.jsx)(Chunk793030.Eep, {
      label: Chunk388032.intl.string(Chunk388032.t["7ZcXG2"]),
      options: function(e) {
        let {
          isPrivate: t,
          showStoreChannelOption: n,
          showAnnouncementChannelOption: i,
          canCreateStageChannel: r,
          canCreateMediaChannel: l
        } = e, s = [{
          leadingIcon: t ? g.W4G : g.VL1,
          name: Q.intl.string(Q.t.pnuRXC),
          value: Y.d4z.GUILD_TEXT,
          desc: Q.intl.string(Q.t["Hf5Lb+"])
        }, {
          leadingIcon: t ? g.gjC : g.gj8,
          name: Q.intl.string(Q.t.Sx55Oh),
          value: Y.d4z.GUILD_VOICE,
          desc: Q.intl.string(Q.t.pqfkoF)
        }, {
          leadingIcon: t ? g.BUe : g.Mmi,
          name: Q.intl.string(Q.t.eAVID5),
          value: Y.d4z.GUILD_FORUM,
          desc: Q.intl.string(Q.t.iZ5pgg)
        }];
        return l && s.push({
          leadingIcon: t ? g.D7T : g.XBm,
          name: Q.intl.string(Q.t["6x6fVg"]),
          value: Y.d4z.GUILD_MEDIA,
          desc: Q.intl.string(Q.t.JyCrwS)
        }), i && s.push({
          leadingIcon: g.MqZ,
          name: Q.intl.string(Q.t.qr9dEP),
          value: Y.d4z.GUILD_ANNOUNCEMENT,
          desc: Q.intl.string(Q.t.gBkfzu)
        }), n && s.push({
          leadingIcon: g.lO_,
          name: Q.intl.string(Q.t.SxjkXf),
          value: Y.d4z.GUILD_STORE,
          desc: Q.intl.string(Q.t.nmCPMC)
        }), r && s.push({
          leadingIcon: g.ewx,
          name: Q.intl.string(Q.t.pNWst0),
          value: Y.d4z.GUILD_STAGE_VOICE,
          desc: Q.intl.string(Q.t.VPAwgo)
        }), s
      }({
        isPrivate: o,
        showStoreChannelOption: require && Chunk392711,
        showAnnouncementChannelOption: Chunk473749,
        canCreateStageChannel: Chunk120356,
        canCreateMediaChannel: s
      }),
      value: Chunk512722,
      onChange: this.handleTypeChange
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
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.q4e, {
        label: Chunk388032.intl.string(Chunk388032.t.vPIW2L),
        options: module.map(e => ({
          label: e.name,
          value: e.id
        })),
        placeholder: Chunk388032.intl.string(Chunk388032.t["3XfCPX"]),
        value: exports,
        onChange: this.handleApplicationChange,
        className: Chunk305048.storeChannelOptionSelector
      }), null != exports ? (0, Chunk54381.jsx)(Chunk620123.Z, {
        label: Chunk388032.intl.string(Chunk388032.t.XNIWFj),
        applicationId: exports,
        onChange: this.handleSKUChange,
        selectedSkuId: require,
        className: Chunk305048.storeChannelOptionSelector
      }, exports) : null, null != exports && s ? (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["3e9mH5"]),
        description: Chunk388032.intl.format(Chunk388032.t.UVXL1R, {
          devPortalUrl: Chunk981631.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT
        }),
        icon: Chunk481060._m8,
        onChange: this.handleShowBranchesToggle,
        checked: Chunk120356
      }) : null, null != exports ? (0, Chunk54381.jsx)(Chunk332063.Z, {
        label: Chunk120356 ? Chunk388032.intl.string(Chunk388032.t.o7DqF3) : true,
        applicationId: exports,
        onChange: this.handleBranchChange,
        selectedBranchId: Chunk473749,
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
    return (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk473749,
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
    } else r && !(0, v.nT)(n, o, a) && (t = (0, v.$7)(n));
    if (null != t) return (0, i.jsx)("div", {
      className: s()(K.createError, {
        [K.addMemberError]: e
      }),
      children: (0, i.jsx)(g.Wn, {
        messageType: g.QYI.ERROR,
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
        channelType: h
      } = this.props,
      p = null != o ? Chunk388032.intl.string(Chunk388032.t.dEaPc4) : Chunk473749 === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    if (null != Chunk392711) {
      let n = Chunk592125.Z.getChannel(Chunk392711);
      t = Chunk388032.intl.format(Chunk388032.t.L1zJgb, {
        categoryName: null != (e = null == require ? true : require.name) ? module : ""
      })
    }
    n = Chunk442837 === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+NM"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+j"]);
    let g = Chunk120356 || Chunk473749 === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk54381.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, Chunk54381.jsx)(Chunk793030.Modal, {
        transitionState: Chunk512722,
        onClose: u,
        title: Chunk692547,
        subtitle: exports,
        preview: this.renderError(),
        actions: [{
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: u
        }, Chunk481060 ? {
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
        children: (0, Chunk54381.jsxs)("div", {
          className: Chunk305048.createChannelContent,
          children: [this.renderType(), this.renderName(), Chunk442837 === Chunk981631.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, Chunk54381.jsx)(Chunk636816.Z, {
            guildId: s,
            channelType: Chunk473749,
            className: Chunk305048.channelTypeDescription
          }), Chunk473749 === Chunk981631.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
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
    return (0, Chunk54381.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, Chunk54381.jsx)(en, {
        onClose: Chunk120356,
        transitionState: s,
        channelType: exports,
        iconComponent: this.getIconComponent(),
        error: this.renderError(true),
        name: module,
        guildId: Chunk473749,
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
    super(e), J(this, "headerId", (0, S.hQ)()), J(this, "_input", true), J(this, "setInputRef", e => {
      this._input = e
    }), J(this, "handleNameChange", e => {
      var t, n;
      let {
        channelType: i
      } = this.state;
      L.xL.has(i) && (e = (0, H.Nj)(e));
      let r = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(r, r)
      })
    }), J(this, "insertEmojiAtPosition", e => {
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
    }), J(this, "handleTypeChange", e => {
      let {
        name: t
      } = this.state;
      L.xL.has(e) && (t = (0, H.Nj)(t)), e === Y.d4z.GUILD_STAGE_VOICE && this.setState({
        isPrivate: false
      }), this.setState({
        channelType: e,
        name: t
      })
    }), J(this, "handlePrivacyChange", e => {
      this.setState({
        isPrivate: e
      })
    }), J(this, "handleApplicationChange", e => {
      this.setState({
        applicationId: e
      })
    }), J(this, "handleSKUChange", e => {
      this.setState({
        skuId: e
      })
    }), J(this, "handleShowBranchesToggle", e => {
      this.setState({
        showBranches: e,
        branchId: null
      })
    }), J(this, "handleBranchChange", e => {
      this.setState({
        branchId: e
      })
    }), J(this, "handleHasBranchesChange", e => {
      this.setState({
        hasBranches: e
      })
    }), J(this, "handleSubmit", async e => {
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
        skuId: C,
        branchId: f,
        isPrivate: b
      } = this.state, E = this.getGuildId();
      if (null != E) {
        if (null != r) t = u().values(r.permissionOverwrites), n = r.bitrate, i = r.userLimit;
        else if (g === Y.d4z.GUILD_ANNOUNCEMENT) t = (0, H.rt)(E);
        else {
          if (b) {
            t = (0, H.oQ)(E, g, [], true);
            let e = (0, v.Tj)(p, g);
            e.length > 0 && (t = t.concat(e));
            let n = null != d && s.id === d.id;
            t.some(e => a.has(e.id)) || o || n || t.push((0, H.jZ)(s.id, g))
          }
          g === Y.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(p).forEach(e => {
            let {
              row: n
            } = e;
            null != n.id && "" !== n.id && (n.rowType === q.aC.ROLE ? t.push((0, w.A)(n.id, O.BN.ROLE)) : n.rowType === q.aC.MEMBER && t.push((0, w.A)(n.id, O.BN.MEMBER)))
          }))
        }
        this.setState({
          errors: {},
          submitting: true
        });
        try {
          let e = await m.Z.createChannel({
            guildId: E,
            type: g,
            name: h,
            permissionOverwrites: t,
            bitrate: n,
            userLimit: i,
            parentId: g !== Y.d4z.GUILD_CATEGORY ? l : null,
            skuId: C,
            branchId: f
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let r = e.body;
          L.xL.has(g) && (0, _.XU)(r.guild_id, r.id), this.setState({
            submitting: false
          }), c()
        } catch (e) {
          null != e.body && "object" == typeof e.body ? this.setState({
            errors: e.body,
            submitting: false
          }) : this.setState({
            errors: {
              message: Q.intl.string(Q.t.fEptJP)
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
      channelType: null != t ? t : Y.d4z.GUILD_TEXT,
      name: null != n ? (0, V.F6)(n, B.default, z.Z) : null != i ? i : "",
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
let el = Chunk473749.forwardRef(function(e, t) {
  let {
    channelType: n,
    guildId: r,
    cloneChannelId: l
  } = e, s = (0, h.cj)([R.Z, B.default, M.Z, D.Z, Z.ZP], () => {
    var e, t, i;
    let s = R.Z.getGuild(r),
      a = B.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let c = null != s && null != s.ownerId ? B.default.getUser(s.ownerId) : null,
      u = M.Z.can(Y.Plq.ADMINISTRATOR, s),
      d = D.Z.getChannel(l);
    return {
      guild: s,
      canCreateStoreChannel: null != s && s.features.has(Y.GuildFeatures.COMMERCE),
      canCreateAnnouncementChannel: null != s && s.features.has(Y.GuildFeatures.NEWS),
      user: a,
      owner: c,
      memberRoles: null != (t = null == (e = Z.ZP.getMember(r, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: M.Z.can(Y.Plq.VIEW_CHANNEL, s),
      canConnect: M.Z.can(Y.Plq.CONNECT, s),
      isAdmin: u,
      cloneChannel: d,
      channelType: null != (i = null == d ? true : d.type) ? i : n,
      canManageRoles: M.Z.can(Y.Plq.MANAGE_ROLES, s),
      canManageChannels: M.Z.can(Y.Plq.MANAGE_CHANNELS, s)
    }
  }), a = (0, h.Wu)([I.Z], () => I.Z.getGuildApplicationIds(r).map(e => I.Z.getApplication(e)).filter(k.lm)), c = new Set(s.memberRoles), {
    canManageRoles: u,
    canManageChannels: d
  } = s, p = (0, U.m)(r) && u && d, g = (0, A.Ui)(null == s ? true : s.guild);
  return (0, i.jsx)(er, ee($({}, e, s), {
    memberRoleIds: c,
    applications: a,
    canCreateStageChannel: p,
    canCreateMediaChannel: g,
    ref: t,
    width: 496
  }))
})