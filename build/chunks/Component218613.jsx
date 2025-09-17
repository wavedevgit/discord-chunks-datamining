/** Chunk was on 45094 **/
/** chunk id: 218613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ec,
  p: () => es
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
  Chunk742746 = require("./742746.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk185923 = require("./185923.js"),
  Chunk710352 = require("./710352.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk748280 = require("./748280.js");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function ei(e, t) {
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

function es(e) {
  let {
    isNew: t,
    isBeta: n
  } = e, i = null;
  returntrue === t ? i = (0, r.jsx)(x.IGR, {
    text: ee.intl.string(ee.t.psHMa2),
    className: et.newBadge,
    color: u.Z.BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER
  }) : true === n && (i = (0, r.jsx)(L.Z, {
    className: et.newBadge
  })), i
}

function el(e) {
  let {
    onChange: t,
    guildId: n,
    channelType: s,
    description: l
  } = e, [a, o] = i.useState(""), [c, d] = i.useState({}), h = i.useRef(null), u = (0, p.e7)([H.Z], () => H.Z.getGuild(n)), g = s === q.d4z.GUILD_STAGE_VOICE, {
    roles: C,
    members: N,
    getRichTag: b
  } = (0, T.Q)(u, null, g ? R.yP : (0, M.CG)(s), a, g), E = S.Z.useSections({
    roles: C,
    members: N
  });
  return (i.useEffect(() => {
    t(c)
  }, [c, t]), null == u) ? null : (0, r.jsx)(S.Z.Provider, {
    listRef: h,
    query: a,
    setQuery: o,
    pendingAdditions: c,
    setPendingAdditions: d,
    roles: C,
    members: N,
    getRichTag: b,
    children: (0, r.jsxs)(x.hzk, {
      className: et.addMembersContainer,
      children: [null != l && "" !== l ? (0, r.jsx)(x.Text, {
        color: "header-secondary",
        className: et.description,
        variant: "text-sm/normal",
        children: l
      }) : null, (0, r.jsx)(S.Z.SearchBox, {
        placeholderText: ee.intl.string(ee.t.iezLLi)
      }), (0, r.jsx)(x.Text, {
        className: et.searchHelpText,
        variant: "text-xs/normal",
        children: ee.intl.string(ee.t["rwFx8/"])
      }), (0, r.jsx)(m._2, {
        ref: h,
        className: et.membersList,
        sectionHeight: S.Z.SECTION_HEIGHT,
        renderSection: S.Z.renderSection,
        rowHeight: S.Z.ROW_HEIGHT,
        renderRow: S.Z.renderRow,
        sections: E,
        innerAriaOrientation: "vertical",
        innerRole: "listbox"
      })]
    })
  })
}

function ea(e) {
  let {
    onEmojiPicked: t,
    guildId: n
  } = e, s = i.useRef(null), l = i.useMemo(() => ({
    popoutLocation: {
      page: q.ZY5.CREATE_CHANNEL_MODAL,
      section: q.jXE.CHANNEL_NAME,
      object: q.qAy.EMOJI_PICKER_BUTTON
    }
  }), []), a = i.useCallback(e => {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(D.Z, {
      channel: null,
      guildId: n,
      pickerIntention: J.Hz.CHANNEL_NAME,
      closePopout: i,
      onNavigateAway: i,
      onSelectEmoji: e => {
        let {
          emoji: n,
          willClose: r
        } = e;
        null != n && n.type === P.B.UNICODE && t(n.surrogates), r && i()
      },
      showOnlyUnicode: true,
      analyticsOverride: l
    })
  }, [l, n, t]);
  return (0, r.jsx)(x.yRy, {
    targetElementRef: s,
    renderPopout: a,
    animation: x.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsx)(A.Z, ei(er({}, e), {
        ref: s,
        active: n,
        className: et.emojiButton,
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
class eo extends Chunk647438.PureComponent {
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
    !t.isPrivate && this.state.isPrivate && this.state.channelType === q.d4z.GUILD_ANNOUNCEMENT && this.setState({
      channelType: q.d4z.GUILD_TEXT
    }), !t.isPrivate && this.state.isPrivate && f.ZP.trackWithMetadata(q.rMx.OPEN_MODAL, {
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
      a = null != require ? Chunk388032.intl.string(Chunk388032.t.dEaPc3) : l === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+ND"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+v"]);
    if (null != Chunk647438) {
      let n = Chunk592125.Z.getChannel(Chunk647438);
      t = (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: Chunk748280.subtitle,
        children: Chunk388032.intl.format(Chunk388032.t.L1zJgY, {
          categoryName: null != (e = null == require ? true : require.name) ? module : ""
        })
      })
    }
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: false,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk748280.header,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          id: this.headerId,
          variant: "heading-lg/semibold",
          className: Chunk748280.title,
          children: Chunk512722
        }), exports]
      }), (0, Chunk951288.jsx)(Chunk481060.olH, {
        onClick: Chunk120356,
        className: Chunk748280.closeButton
      })]
    })
  }
  renderName() {
    let e, {
        cloneChannel: t,
        guildId: i
      } = this.props,
      {
        errors: s,
        channelType: l
      } = this.state;
    (null == Chunk120356 ? true : Chunk120356.name) != null && (e = (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: Chunk748280.error,
      children: Chunk120356.name
    }));
    let a = l === Chunk981631.d4z.GUILD_CATEGORY,
      o = Chunk512722 ? Chunk388032.intl.string(Chunk388032.t.OCAkGB) : Chunk388032.intl.string(Chunk388032.t.PVbHDg),
      c = null != exports ? (0, Chunk951288.jsx)(Chunk481060.R94, {
        className: Chunk748280.channelNameNote,
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.s2ZzZW, {
          name: (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z, true)
        })
      }) : l === Chunk981631.d4z.GUILD_FORUM ? (0, Chunk951288.jsx)(Chunk481060.R94, {
        className: Chunk748280.channelNameNote,
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.tbVWyc, {
          forumUpsellHook: (e, t) => (0, r.jsx)(x.eee, {
            onClick: () => (0, x.ZDy)(async () => {
              let {
                default: e
              } = await n.e("18417").then(n.bind(n, 740696));
              return t => (0, r.jsx)(e, ei(er({}, t), {
                guildId: i
              }))
            }),
            children: e
          }, t)
        })
      }) : null,
      d = this.getIconComponent();
    return (0, Chunk951288.jsx)(Chunk313201.FG, {
      children: t => (0, r.jsxs)(x.xJW, {
        title: o,
        htmlFor: t,
        titleClassName: et.sectionTitle,
        className: et.name,
        children: [(0, r.jsx)(x.oil, {
          id: t,
          value: this.state.name,
          onChange: this.handleNameChange,
          inputRef: this.setInputRef,
          maxLength: 100,
          placeholder: function(e) {
            switch (e) {
              case q.d4z.GUILD_CATEGORY:
                return ee.intl.string(ee.t.eTVbt7);
              case q.d4z.GUILD_FORUM:
                return ee.intl.string(ee.t["5z1Xam"]);
              default:
                return ee.intl.string(ee.t["bw/b8P"])
            }
          }(l),
          leading: a ? true : d,
          trailing: {
            type: "emoji",
            button: (0, r.jsx)(ea, {
              onEmojiPicked: this.insertEmojiAtPosition,
              isPrivateChannel: this.state.isPrivate,
              guildId: i
            })
          },
          autoFocus: true,
          focusProps: {
            offset: {
              right: false
            }
          }
        }, t), e, c]
      })
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
    return (0, Chunk951288.jsx)(Chunk481060.xJW, {
      className: Chunk748280.type,
      title: Chunk388032.intl.string(Chunk388032.t["7ZcXGx"]),
      children: (0, Chunk951288.jsx)(Chunk755721.Gu, {
        options: function(e) {
          let {
            isPrivate: t,
            showStoreChannelOption: n,
            showAnnouncementChannelOption: i,
            canCreateStageChannel: s,
            canCreateMediaChannel: l
          } = e, a = [{
            icon: t ? x.W4G : x.VL1,
            label: ee.intl.string(ee.t.pnuRXF),
            value: q.d4z.GUILD_TEXT,
            description: ee.intl.string(ee.t.Hf5Lb2)
          }];
          return a.push({
            icon: t ? x.gjC : x.gj8,
            label: ee.intl.string(ee.t.Sx55Oj),
            value: q.d4z.GUILD_VOICE,
            description: ee.intl.string(ee.t.pqfkoK)
          }), a.push({
            icon: t ? x.BUe : x.Mmi,
            label: ee.intl.string(ee.t.eAVIDw),
            value: q.d4z.GUILD_FORUM,
            description: (0, r.jsxs)(x.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: et.radioLabelDescription,
              children: [ee.intl.string(ee.t.iZ5pgo), (0, r.jsx)("br", {}), ee.intl.format(ee.t.fjSvsL, {
                onClick: () => {
                  open(Q.V8)
                }
              })]
            })
          }), l && a.push({
            icon: t ? x.D7T : x.XBm,
            label: ee.intl.string(ee.t["6x6fVl"]),
            value: q.d4z.GUILD_MEDIA,
            description: (0, r.jsxs)(x.Text, {
              variant: "text-sm/normal",
              color: "header-secondary",
              className: et.radioLabelDescription,
              children: [ee.intl.string(ee.t.JyCrwc), (0, r.jsx)("br", {}), ee.intl.format(ee.t.fjSvsL, {
                onClick: () => {
                  open(W.Z.getCreatorSupportArticleURL(q.BhN.MEDIA_CHANNEL))
                }
              })]
            }),
            isBeta: true
          }), i && a.push({
            icon: x.MqZ,
            iconSize: 24,
            label: ee.intl.string(ee.t.qr9dEB),
            value: q.d4z.GUILD_ANNOUNCEMENT,
            description: ee.intl.string(ee.t.gBkfzs)
          }), n && a.push({
            icon: x.lO_,
            iconSize: 24,
            label: ee.intl.string(ee.t.SxjkXV),
            value: q.d4z.GUILD_STORE,
            description: ee.intl.string(ee.t.nmCPMD)
          }), s && a.push({
            icon: x.ewx,
            iconSize: 24,
            label: ee.intl.string(ee.t.pNWst7),
            value: q.d4z.GUILD_STAGE_VOICE,
            description: ee.intl.string(ee.t.VPAwgo)
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
                className: et.radioItemName,
                children: [(0, r.jsx)(t, ei(er({}, null != n ? {
                  width: n,
                  height: n,
                  size: "custom"
                } : {
                  size: "md"
                }), {
                  color: "currentColor",
                  className: et.icon,
                  colorClass: et.foreground
                })), (0, r.jsxs)("div", {
                  children: [(0, r.jsxs)(x.Text, {
                    variant: "text-md/medium",
                    className: et.radioLabelName,
                    children: [i, (0, r.jsx)(es, {
                      isNew: a,
                      isBeta: o
                    })]
                  }), "string" == typeof l ? (0, r.jsx)(x.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: et.radioLabelDescription,
                    children: l
                  }) : l]
                })]
              }),
              value: s,
              radioBarClassName: et.radioBar,
              radioItemIconClassName: et.radioBarIcon
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
        itemInfoClassName: Chunk748280.radioBarLabel
      })
    })
  }
  renderStoreOptions() {
    let {
      applications: e
    } = this.props, {
      applicationId: t,
      skuId: n,
      branchId: s,
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
        className: Chunk748280.storeChannelOptionSelector
      }), null != exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          children: Chunk388032.intl.string(Chunk388032.t.XNIWFh)
        }), (0, Chunk951288.jsx)(Chunk620123.Z, {
          applicationId: exports,
          onChange: this.handleSKUChange,
          selectedSkuId: require,
          className: Chunk748280.storeChannelOptionSelector
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
          className: Chunk748280.switchIcon
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
          className: Chunk748280.storeChannelOptionSelector
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
    let i = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t.lEPAZ2) : Chunk388032.intl.string(Chunk388032.t.aUI70t),
      s = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["RQUk6+"]) : Chunk388032.intl.string(Chunk388032.t.YguuKi);
    return (0, Chunk951288.jsx)(Chunk481060.xJW, {
      children: (0, Chunk951288.jsxs)(Chunk481060.j7V, {
        hideBorder: true,
        onChange: this.handlePrivacyChange,
        value: require,
        note: Chunk120356,
        children: [(0, Chunk951288.jsx)(Chunk481060.mBM, {
          size: "md",
          color: "currentColor",
          className: Chunk748280.switchIcon
        }), Chunk647438]
      })
    }, "privacy-switch")
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
    } else i && !(0, y.nT)(n, o, a) && (t = (0, y.$7)(n));
    if (null != t) return (0, r.jsx)("div", {
      className: l()(et.createError, {
        [et.addMemberError]: e
      }),
      children: (0, r.jsx)(x.Wn, {
        messageType: x.QYI.ERROR,
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
    e = exports === Chunk981631.d4z.GUILD_CATEGORY ? Chunk388032.intl.string(Chunk388032.t["ISN+ND"]) : Chunk388032.intl.string(Chunk388032.t["fUYU+v"]);
    let l = Chunk120356 || Chunk647438 === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: Chunk748280.modalFooter,
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
        className: Chunk748280.modalContent,
        children: [this.renderType(), this.renderName(), module === Chunk981631.d4z.GUILD_STORE ? this.renderStoreOptions() : null, (0, Chunk951288.jsx)(Chunk636816.Z, {
          guildId: exports,
          channelType: module,
          className: Chunk748280.channelTypeDescription
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
      onClose: i
    } = this.props, s = this.getIconComponent(), l = exports === Chunk981631.d4z.GUILD_STAGE_VOICE;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        separator: false,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          className: Chunk748280.header,
          children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk748280.title,
            children: l ? Chunk388032.intl.string(Chunk388032.t["S/6zHB"]) : Chunk388032.intl.string(Chunk388032.t.dMJ3Y2)
          }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: Chunk748280.subtitle,
            children: [(0, Chunk951288.jsx)(Chunk120356, {
              size: "xs",
              color: "currentColor",
              className: Chunk748280.subtitleIcon
            }), module]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: Chunk647438,
          className: Chunk748280.closeButton
        })]
      }), this.renderError(true), (0, Chunk951288.jsx)(el, {
        onChange: this.handlePermissionOverwriteChange,
        guildId: require,
        channelType: exports,
        description: l ? Chunk388032.intl.string(Chunk388032.t.f7VbhI) : true
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
      className: Chunk748280.modal,
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
    super(e), en(this, "headerId", (0, _.hQ)()), en(this, "_input", true), en(this, "setInputRef", e => {
      this._input = e
    }), en(this, "handleNameChange", e => {
      var t, n;
      let {
        channelType: r
      } = this.state;
      M.xL.has(r) && (e = (0, X.Nj)(e));
      let i = null != (n = null == (t = this._input) ? true : t.selectionStart) ? n : 0;
      this.setState({
        name: e
      }, () => {
        var e;
        null == (e = this._input) || e.setSelectionRange(i, i)
      })
    }), en(this, "insertEmojiAtPosition", e => {
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
    }), en(this, "handleTypeChange", e => {
      let {
        value: t
      } = e, {
        name: n
      } = this.state;
      M.xL.has(t) && (n = (0, X.Nj)(n)), t === q.d4z.GUILD_STAGE_VOICE && this.setState({
        isPrivate: false
      }), this.setState({
        channelType: t,
        name: n
      })
    }), en(this, "handlePrivacyChange", e => {
      this.setState({
        isPrivate: e
      })
    }), en(this, "handleApplicationChange", e => {
      this.setState({
        applicationId: e
      })
    }), en(this, "handleSKUChange", e => {
      this.setState({
        skuId: e
      })
    }), en(this, "handleShowBranchesToggle", e => {
      this.setState({
        showBranches: e,
        branchId: null
      })
    }), en(this, "handleBranchChange", e => {
      this.setState({
        branchId: e
      })
    }), en(this, "handleHasBranchesChange", e => {
      this.setState({
        hasBranches: e
      })
    }), en(this, "handleSubmit", async e => {
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
        channelType: m,
        skuId: g,
        branchId: x,
        isPrivate: N
      } = this.state, b = this.getGuildId();
      if (null != b) {
        if (null != i) t = d().values(i.permissionOverwrites), n = i.bitrate, r = i.userLimit;
        else if (m === q.d4z.GUILD_ANNOUNCEMENT) t = (0, X.rt)(b);
        else {
          if (N) {
            t = (0, X.oQ)(b, m, [], true);
            let e = (0, y.Tj)(p, m);
            e.length > 0 && (t = t.concat(e));
            let n = null != h && l.id === h.id;
            t.some(e => a.has(e.id)) || o || n || t.push((0, X.jZ)(l.id, m))
          }
          m === q.d4z.GUILD_STAGE_VOICE && (t = [], Object.values(p).forEach(e => {
            let {
              row: n
            } = e;
            null != n.id && "" !== n.id && (n.rowType === K.aC.ROLE ? t.push((0, Z.A)(n.id, O.BN.ROLE)) : n.rowType === K.aC.MEMBER && t.push((0, Z.A)(n.id, O.BN.MEMBER)))
          }))
        }
        this.setState({
          errors: {},
          submitting: true
        });
        try {
          let e = await C.Z.createChannel({
            guildId: b,
            type: m,
            name: u,
            permissionOverwrites: t,
            bitrate: n,
            userLimit: r,
            parentId: m !== q.d4z.GUILD_CATEGORY ? s : null,
            skuId: g,
            branchId: x
          });
          if (null == e || 201 !== e.status) return void this.setState({
            submitting: false
          });
          let i = e.body;
          M.xL.has(m) && (0, G.XU)(i.guild_id, i.id), this.setState({
            submitting: false
          }), c()
        } catch (e) {
          null != e.body && "object" == typeof e.body ? this.setState({
            errors: e.body,
            submitting: false
          }) : this.setState({
            errors: {
              message: ee.intl.string(ee.t.fEptJC)
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
      channelType: null != t ? t : q.d4z.GUILD_TEXT,
      name: null != n ? (0, I.F6)(n, F.default, V.Z) : null != r ? r : "",
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
let ec = Chunk647438.forwardRef(function(e, t) {
  let {
    channelType: n,
    guildId: i,
    cloneChannelId: s
  } = e, l = (0, p.cj)([H.Z, F.default, k.Z, z.Z, B.ZP], () => {
    var e, t, r;
    let l = H.Z.getGuild(i),
      a = F.default.getCurrentUser();
    o()(null != a, "CreateChannel: user cannot be undefined");
    let c = null != l && null != l.ownerId ? F.default.getUser(l.ownerId) : null,
      d = k.Z.can(q.Plq.ADMINISTRATOR, l),
      h = z.Z.getChannel(s);
    return {
      guild: l,
      canCreateStoreChannel: null != l && l.features.has(q.oNc.COMMERCE),
      canCreateAnnouncementChannel: null != l && l.features.has(q.oNc.NEWS),
      user: a,
      owner: c,
      memberRoles: null != (t = null == (e = B.ZP.getMember(i, a.id)) ? true : e.roles) ? t : [],
      canViewChannels: k.Z.can(q.Plq.VIEW_CHANNEL, l),
      canConnect: k.Z.can(q.Plq.CONNECT, l),
      isAdmin: d,
      cloneChannel: h,
      channelType: null != (r = null == h ? true : h.type) ? r : n,
      canManageRoles: k.Z.can(q.Plq.MANAGE_ROLES, l),
      canManageChannels: k.Z.can(q.Plq.MANAGE_CHANNELS, l)
    }
  }), a = (0, p.Wu)([j.Z], () => j.Z.getGuildApplicationIds(i).map(e => j.Z.getApplication(e)).filter(Y.lm)), c = new Set(l.memberRoles), {
    canManageRoles: d,
    canManageChannels: h
  } = l, u = (0, U.m)(i) && d && h, m = (0, w.Ui)(null == l ? true : l.guild);
  return (0, r.jsx)(eo, ei(er({}, e, l), {
    memberRoleIds: c,
    applications: a,
    canCreateStageChannel: u,
    canCreateMediaChannel: m,
    ref: t,
    width: 496
  }))
})