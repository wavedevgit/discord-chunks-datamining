/** Chunk was on 29497 **/
/** chunk id: 241865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => er,
  p: () => et
}), require("./539854.js"), require("./388685.js"), require("./953529.js"), require("./781311.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
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
  Chunk238365 = require("./238365.js");

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
  } = e, l = null;
  returntrue === t ? l = (0, i.jsx)(g.IGR, {
    text: Q.intl.string(Q.t.psHMa6),
    className: K.newBadge,
    color: p.Z.colors.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER.css
  }) : true === n && (l = (0, i.jsx)(T.Z, {
    className: K.newBadge
  })), l
}

function en(e) {
  let t, {
      transitionState: n,
      onClose: r,
      channelType: s,
      iconComponent: a,
      error: o,
      name: u,
      guildId: c,
      onBack: p,
      canSubmit: m,
      onMembersChange: f,
      pendingPermissionOverwrites: C
    } = e,
    [b, O] = l.useState(""),
    [E, I] = l.useState({}),
    v = l.useRef(null),
    S = (0, h.e7)([Z.Z], () => Z.Z.getGuild(c)),
    x = s === Y.d4z.GUILD_STAGE_VOICE,
    {
      roles: j,
      members: P,
      getRichTag: T
    } = (0, N.Q)(S, null, x ? G.yP : (0, L.CG)(s), b, x),
    A = y.Z.useSections({
      roles: j,
      members: P
    });
  return (l.useEffect(() => {
    f(E)
  }, [E, f]), null == S) ? null : (t = 0 === Object.keys(C).length ? Q.intl.string(Q.t["5Wxrcd"]) : s === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]), (0, i.jsx)(y.Z.Provider, {
    listRef: v,
    query: b,
    setQuery: O,
    pendingAdditions: E,
    setPendingAdditions: I,
    roles: j,
    members: P,
    getRichTag: T,
    children: (0, i.jsx)(d.Modal, {
      transitionState: n,
      onClose: r,
      title: x ? Q.intl.string(Q.t["S/6zHM"]) : Q.intl.string(Q.t.dMJ3Y6),
      subtitle: {
        text: u,
        leadingIcon: a
      },
      input: (0, i.jsxs)(i.Fragment, {
        children: [x ? (0, i.jsx)(g.Text, {
          color: "text-default",
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
  } = e, r = l.useRef(null), s = l.useMemo(() => ({
    popoutLocation: {
      page: Y.ZY5.CREATE_CHANNEL_MODAL,
      section: Y.jXE.CHANNEL_NAME,
      object: Y.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = l.useCallback(e => {
    let {
      closePopout: l
    } = e;
    return (0, i.jsx)(j.Z, {
      channel: null,
      guildId: n,
      pickerIntention: W.Hz.CHANNEL_NAME,
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
      analyticsOverride: s
    })
  }, [s, n, t]);
  return (0, i.jsx)(g.yRy, {
    targetElementRef: r,
    renderPopout: a,
    animation: g.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, i.jsx)(x.Z, ee($({}, e), {
        ref: r,
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
class el extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      _input: e
    } = this;
    null != e && e.select();
    let {
      guildId: t,
      applications: n,
      canCreateStoreChannel: i
    } = this.props;
    i && null == n && f.Z.fetchApplications(t), E.ZP.trackWithMetadata(Y.rMx.OPEN_MODAL, {
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
    return e.guildId
  }
  canSubmit() {
    let {
      canViewChannels: e,
      canConnect: t,
      transitionState: n
    } = this.props, {
      isPrivate: i,
      channelType: l,
      skuId: r,
      name: s,
      submitting: a
    } = this.state;
    return !a && n !== g.Dvm.EXITING && "" !== s && "" !== s.trim() && (!i || !!(0, v.nT)(l, e, t)) && (l !== Y.d4z.GUILD_STORE || null != r)
  }
  getIconComponent() {
    let {
      isPrivate: e,
      channelType: t
    } = this.state;
    switch (t) {
      case Y.d4z.GUILD_TEXT:
        return e ? g.W4G : g.VL1;
      case Y.d4z.GUILD_FORUM:
        return g.Mmi;
      case Y.d4z.GUILD_MEDIA:
        return g.XBm;
      case Y.d4z.GUILD_VOICE:
        return e ? g.gjC : g.gj8;
      case Y.d4z.GUILD_STORE:
        return g.lO_;
      case Y.d4z.GUILD_ANNOUNCEMENT:
        return g.MqZ;
      case Y.d4z.GUILD_STAGE_VOICE:
        return g.ewx;
      default:
        return (0, L.zi)(t) ? g.VL1 : q.Vq
    }
  }
  getHelperText() {
    let {
      cloneChannel: e,
      channelType: t,
      guildId: l
    } = this.props;
    return null != e ? Q.intl.format(Q.t.s2ZzZZ, {
      name: (0, V.F6)(e, B.default, z.Z, true)
    }) : t === Y.d4z.GUILD_FORUM ? Q.intl.format(Q.t.tbVWyR, {
      forumUpsellHook: (e, t) => (0, i.jsx)(g.eee, {
        onClick: () => (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18417").then(n.bind(n, 740696));
          return t => (0, i.jsx)(e, ee($({}, t), {
            guildId: l
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
        channelType: l
      } = this.state;
    (null == n ? true : n.name) != null && (e = Array.isArray(n.name) ? n.name.join(", ") : n.name);
    let r = l === Y.d4z.GUILD_CATEGORY,
      s = r ? Q.intl.string(Q.t.OCAkGP) : Q.intl.string(Q.t.PVbHDl),
      a = this.getIconComponent();
    return (0, i.jsx)(g.oil, {
      label: s,
      helperText: this.getHelperText(),
      error: e,
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
      }(l),
      leading: r ? true : a,
      trailing: {
        type: "emoji",
        button: (0, i.jsx)(ei, {
          onEmojiPicked: this.insertEmojiAtPosition,
          isPrivateChannel: this.state.isPrivate,
          guildId: t
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
      canCreateAnnouncementChannel: l,
      canCreateStageChannel: r,
      canCreateMediaChannel: s
    } = this.props, {
      channelType: a,
      isPrivate: o
    } = this.state;
    if (null != e || a === Y.d4z.GUILD_CATEGORY) return;
    let u = null != t && t.length > 0;
    return (0, i.jsx)(d.Eep, {
      label: Q.intl.string(Q.t["7ZcXG2"]),
      options: function(e) {
        let {
          isPrivate: t,
          showStoreChannelOption: n,
          showAnnouncementChannelOption: i,
          canCreateStageChannel: l,
          canCreateMediaChannel: r
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
        return r && s.push({
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
        }), l && s.push({
          leadingIcon: g.ewx,
          name: Q.intl.string(Q.t.pNWst0),
          value: Y.d4z.GUILD_STAGE_VOICE,
          desc: Q.intl.string(Q.t.VPAwgo)
        }), s
      }({
        isPrivate: o,
        showStoreChannelOption: n && u,
        showAnnouncementChannelOption: l,
        canCreateStageChannel: r,
        canCreateMediaChannel: s
      }),
      value: a,
      onChange: this.handleTypeChange
    })
  }
  renderStoreOptions() {
    let {
      applications: e
    } = this.props, {
      applicationId: t,
      skuId: n,
      branchId: l,
      showBranches: r,
      hasBranches: s
    } = this.state;
    if (null == e || 0 === e.length) throw Error("Unexpected empty applications");
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(g.PhF, {
        label: Q.intl.string(Q.t.vPIW2L),
        options: e.map(e => ({
          id: e.id,
          label: e.name,
          value: e.id
        })),
        placeholder: Q.intl.string(Q.t["3XfCPX"]),
        value: t,
        onSelectionChange: this.handleApplicationChange,
        selectionMode: "single",
        fullWidth: true
      }), null != t ? (0, i.jsx)(b.Z, {
        label: Q.intl.string(Q.t.XNIWFj),
        applicationId: t,
        onChange: this.handleSKUChange,
        selectedSkuId: n,
        className: K.storeChannelOptionSelector
      }, t) : null, null != t && s ? (0, i.jsx)(g.rsf, {
        label: Q.intl.string(Q.t["3e9mH5"]),
        description: Q.intl.format(Q.t.UVXL1R, {
          devPortalUrl: Y.EYA.API_DOCS_GAME_AND_SERVER_MANAGEMENT
        }),
        icon: g._m8,
        onChange: this.handleShowBranchesToggle,
        checked: r
      }) : null, null != t ? (0, i.jsx)("div", {
        className: K.storeChannelOptionSelector,
        children: (0, i.jsx)(C.Z, {
          label: r ? Q.intl.string(Q.t.o7DqF3) : true,
          applicationId: t,
          onChange: this.handleBranchChange,
          selectedBranchId: l,
          hide: !r,
          includeMaster: r,
          onHasBranchesChange: this.handleHasBranchesChange
        }, t)
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
    if (null != e || t === Y.d4z.GUILD_ANNOUNCEMENT) return null;
    let l = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t.lEPAZ5) : Q.intl.string(Q.t.aUI70g),
      r = t === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t.RQUk61) : Q.intl.string(Q.t.YguuKq);
    return (0, i.jsx)(g.rsf, {
      label: l,
      description: r,
      icon: g.mBM,
      onChange: this.handlePrivacyChange,
      checked: n
    })
  }
  renderError(e) {
    let t, {
        channelType: n,
        isPrivate: l,
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
    } else l && !(0, v.nT)(n, o, a) && (t = (0, v.$7)(n));
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
        channelType: l,
        isPrivate: r
      } = this.state,
      {
        guildId: s,
        transitionState: a,
        cloneChannel: o,
        categoryId: u,
        onClose: c,
        channelType: h
      } = this.props,
      p = null != o ? Q.intl.string(Q.t.dEaPc4) : l === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]);
    if (null != u) {
      let n = D.Z.getChannel(u);
      t = Q.intl.format(Q.t.L1zJgb, {
        categoryName: null != (e = null == n ? true : n.name) ? e : ""
      })
    }
    n = h === Y.d4z.GUILD_CATEGORY ? Q.intl.string(Q.t["ISN+NM"]) : Q.intl.string(Q.t["fUYU+j"]);
    let g = r || l === Y.d4z.GUILD_STAGE_VOICE;
    return (0, i.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, i.jsx)(d.Modal, {
        transitionState: a,
        onClose: c,
        title: p,
        subtitle: t,
        preview: this.renderError(),
        actions: [{
          variant: "secondary",
          text: Q.intl.string(Q.t["ETE/oC"]),
          onClick: c
        }, g ? {
          variant: "primary",
          text: Q.intl.string(Q.t.PDTjLN),
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
          text: n
        }],
        children: (0, i.jsxs)("div", {
          className: K.createChannelContent,
          children: [this.renderType(), this.renderName(), h === Y.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, i.jsx)(F.Z, {
            guildId: s,
            channelType: l,
            className: K.channelTypeDescription
          }), l === Y.d4z.GUILD_STAGE_VOICE ? null : this.renderPrivacyOptions()]
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
      guildId: l,
      onClose: r,
      transitionState: s
    } = this.props, a = () => {
      this.setState({
        slide: "CHANNEL_INFO"
      })
    }, o = this.canSubmit();
    return (0, i.jsx)("form", {
      onSubmit: this.handleSubmit,
      children: (0, i.jsx)(en, {
        onClose: r,
        transitionState: s,
        channelType: t,
        iconComponent: this.getIconComponent(),
        error: this.renderError(true),
        name: e,
        guildId: l,
        onBack: a,
        canSubmit: o,
        onMembersChange: this.handlePermissionOverwriteChange,
        pendingPermissionOverwrites: n
      })
    })
  }
  render() {
    let {
      slide: e
    } = this.state;
    return "CHANNEL_INFO" === e ? this.renderCreateChannelModal() : this.renderAddMemberSlideContent()
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
      let l = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(l, l)
      })
    }), J(this, "insertEmojiAtPosition", e => {
      var t, n, i, l;
      let r = null != (i = null == (t = this._input) ? true : t.selectionStart) ? i : 0,
        s = null != (l = null == (n = this._input) ? true : n.selectionEnd) ? l : 0,
        a = this.state.name,
        o = a.substring(0, r) + e + a.substring(s);
      this.setState({
        name: o
      }, () => {
        var t, n;
        let i = r + e.length;
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
        cloneChannel: l,
        categoryId: r,
        user: s,
        memberRoleIds: a,
        isAdmin: o,
        onClose: u,
        owner: d
      } = this.props, {
        name: h,
        pendingPermissionOverwrites: p,
        channelType: g,
        skuId: f,
        branchId: C,
        isPrivate: b
      } = this.state, E = this.getGuildId();
      if (null != E) {
        if (null != l) t = c().values(l.permissionOverwrites), n = l.bitrate, i = l.userLimit;
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
            null != n.id && "" !== n.id && (n.rowType === X.aC.ROLE ? t.push((0, w.A)(n.id, O.BN.ROLE)) : n.rowType === X.aC.MEMBER && t.push((0, w.A)(n.id, O.BN.MEMBER)))
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
            parentId: g !== Y.d4z.GUILD_CATEGORY ? r : null,
            skuId: f,
            branchId: C
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let l = e.body;
          L.xL.has(g) && (0, _.XU)(l.guild_id, l.id), this.setState({
            submitting: false
          }), u()
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
let er = Chunk473749.forwardRef(function(e, t) {
  let {
    channelType: n,
    guildId: l,
    cloneChannelId: r
  } = e, s = (0, h.cj)([Z.Z, B.default, R.Z, D.Z, M.ZP], () => {
    var e, t, i;
    let s = Z.Z.getGuild(l),
      a = B.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let u = null != s && null != s.ownerId ? B.default.getUser(s.ownerId) : null,
      c = R.Z.can(Y.Plq.ADMINISTRATOR, s),
      d = D.Z.getChannel(r);
    return {
      guild: s,
      canCreateStoreChannel: null != s && s.features.has(Y.GuildFeatures.COMMERCE),
      canCreateAnnouncementChannel: null != s && s.features.has(Y.GuildFeatures.NEWS),
      user: a,
      owner: u,
      memberRoles: null != (t = null == (e = M.ZP.getMember(l, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: R.Z.can(Y.Plq.VIEW_CHANNEL, s),
      canConnect: R.Z.can(Y.Plq.CONNECT, s),
      isAdmin: c,
      cloneChannel: d,
      channelType: null != (i = null == d ? true : d.type) ? i : n,
      canManageRoles: R.Z.can(Y.Plq.MANAGE_ROLES, s),
      canManageChannels: R.Z.can(Y.Plq.MANAGE_CHANNELS, s)
    }
  }), a = (0, h.Wu)([I.Z], () => I.Z.getGuildApplicationIds(l).map(e => I.Z.getApplication(e)).filter(k.lm)), u = new Set(s.memberRoles), {
    canManageRoles: c,
    canManageChannels: d
  } = s, p = (0, U.m)(l) && c && d, g = (0, A.Ui)(null == s ? true : s.guild);
  return (0, i.jsx)(el, ee($({}, e, s), {
    memberRoleIds: u,
    applications: a,
    canCreateStageChannel: p,
    canCreateMediaChannel: g,
    ref: t,
    width: 496
  }))
})