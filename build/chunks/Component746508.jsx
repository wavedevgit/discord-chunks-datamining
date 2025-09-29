/** Chunk was on 1272 **/
/** chunk id: 746508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e0
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk799899 = require("./799899.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk864094 = require("./864094.jsx"),
  Chunk75735 = require("./75735.jsx"),
  Chunk382600 = require("./382600.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk239091 = require("./239091.js"),
  Chunk925549 = require("./925549.js"),
  Chunk284056 = require("./284056.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk317381 = require("./317381.js"),
  Chunk596040 = require("./596040.js"),
  Chunk314490 = require("./314490.js"),
  Chunk374065 = require("./374065.js"),
  Chunk451576 = require("./451576.js"),
  Chunk119315 = require("./119315.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk397698 = require("./397698.jsx"),
  Chunk562129 = require("./562129.js"),
  Chunk793865 = require("./793865.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk258609 = require("./258609.js"),
  Chunk446226 = require("./446226.js"),
  Chunk935261 = require("./935261.jsx"),
  Chunk74299 = require("./74299.js"),
  Chunk803647 = require("./803647.js"),
  Chunk142497 = require("./142497.js"),
  Chunk810788 = require("./810788.js"),
  Chunk160404 = require("./160404.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk917405 = require("./917405.jsx"),
  Chunk641015 = require("./641015.js"),
  Chunk848543 = require("./848543.jsx"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk368442 = require("./368442.js"),
  Chunk600518 = require("./600518.js"),
  Chunk485287 = require("./485287.js"),
  Chunk754277 = require("./754277.js"),
  Chunk590415 = require("./590415.js"),
  Chunk695346 = require("./695346.js"),
  Chunk923973 = require("./923973.js"),
  Chunk829750 = require("./829750.js"),
  Chunk189771 = require("./189771.js"),
  Chunk544384 = require("./544384.jsx"),
  Chunk560688 = require("./560688.jsx"),
  Chunk127608 = require("./127608.jsx"),
  Chunk76021 = require("./76021.jsx"),
  Chunk173507 = require("./173507.jsx"),
  Chunk25827 = require("./25827.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk345243 = require("./345243.jsx"),
  Chunk594117 = require("./594117.jsx"),
  Chunk226323 = require("./226323.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk921944 = require("./921944.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239545 = require("./239545.js"),
  Chunk10198 = require("./10198.js");

function eB(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eV(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eB(e, t, n[t])
    })
  }
  return e
}

function eH(e, t) {
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

function eF(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let ez = {
  offset: {
    left: false,
    top: false,
    right: 1,
    bottom: 1
  }
};

function eW(e) {
  let t = e.currentTarget;
  eN.default.track(eL.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      section: eL.jXE.NOISE_CANCELLATION_POPOUT
    }
  })
}

function eY() {
  let e = Chunk647438.useRef(null);
  (0, Chunk481060.Tbt)(module), Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.OPEN_POPOUT, {
      type: Chunk981631.jXE.NOISE_CANCELLATION_POPOUT
    })
  }, []);
  let t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getNoiseCancellation());
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: Chunk239545.noiseCancellationPopout,
    children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
      hideBorder: true,
      className: Chunk10198.marginBottom4,
      value: exports,
      onChange: () => Chunk846027.Z.setNoiseCancellation(!exports, {
        section: Chunk981631.jXE.NOISE_CANCELLATION_POPOUT
      }),
      note: Chunk388032.intl.string(Chunk388032.t.uKdWn5),
      children: Chunk388032.intl.string(Chunk388032.t.WGWHv7)
    }), (0, Chunk951288.jsx)(Chunk284056.Z, {
      title: Chunk388032.intl.string(Chunk388032.t.JdUas7),
      notchBackground: Chunk284056._.BLACK,
      buttonTest: Chunk388032.intl.string(Chunk388032.t["sG+MGh"]),
      buttonStop: Chunk388032.intl.string(Chunk388032.t.Yp3SbG),
      buttonClassName: Chunk239545.micTestButton,
      buttonColor: Chunk755721.zx.Colors.PRIMARY,
      location: {
        section: Chunk981631.jXE.NOISE_CANCELLATION_POPOUT
      }
    }), (0, Chunk951288.jsx)(Chunk481060.vwX, {
      className: a()(Chunk10198.marginBottom8, Chunk10198.marginTop20),
      children: Chunk388032.intl.string(Chunk388032.t.k6h1Fx)
    }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      className: Chunk239545.__invalid_footer,
      children: [(0, Chunk951288.jsx)(Chunk481060.eee, {
        href: Chunk981631.EYA.KRISP,
        onClick: e => eW(e),
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk239545.krispLogo
        })
      }), (0, Chunk951288.jsx)(Chunk481060.eee, {
        href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NOISE_SUPPRESSION),
        className: Chunk239545.krispLink,
        onClick: e => eW(e),
        children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
      })]
    })]
  })
}

function eK() {
  let {
    parentAnalyticsLocation: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk754277.Z], () => Chunk754277.Z.isMuted()), n = exports ? Chunk388032.intl.string(Chunk388032.t.ScHlfn) : Chunk388032.intl.string(Chunk388032.t.zqxfra);
  return (0, Chunk951288.jsx)(Chunk870569.Z, {
    "aria-label": require,
    tooltipText: require,
    icon: exports ? Chunk481060.xjP : Chunk481060.RZG,
    onClick: () => {
      (0, Chunk522651.v)(module, Chunk522651.d.STAGE_MUSIC, exports), (0, Chunk600518.v)(!exports)
    }
  })
}

function eq(e) {
  let {
    channel: t,
    enableActivities: n,
    disabled: l
  } = e, o = i.useRef(null), {
    parentAnalyticsLocation: s
  } = (0, x.ZP)(), c = (0, ea.Z)(), d = (0, es.Z)(t), p = (0, u.e7)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForLocation(I.ZP.getConnectedActivityLocation())), h = (0, Q.Z)(t), {
    reachedLimit: _,
    limit: O
  } = (0, eo.Z)(t), E = i.useCallback(() => {
    (0, eu.Z)()
  }, []), y = (0, Y.bp)(), v = i.useCallback(e => {
    if (eE.Z.isVideoEnabled() === e) return;
    let n = () => {
      var n;
      b.Z.setVideoEnabled(e), e && (0, K.uL)(eL.Z5c.CHANNEL(null != (n = t.getGuildId()) ? n : eL.ME, t.id))
    };
    (0, L.v)(s, L.d.CAMERA, e), e ? (0, ef.Z)(n, y) : n()
  }, [t, y, s]), S = p || n || h, {
    Component: C,
    play: T,
    events: N
  } = (0, f.o)(c.enabled ? "disable" : "enable");
  return i.useEffect(() => () => T(), [c.enabled, T]), (0, r.jsx)(eh.Z, eH(eV({
    onChange: v,
    onCameraUnavailable: E,
    hasPermission: d,
    channelLimit: O,
    channelLimitReached: _
  }, c), {
    enabled: !l && c.enabled,
    children: e => {
      var {
        unavailable: t,
        isActive: n,
        label: i,
        iconComponent: l,
        iconColor: c
      } = e, u = eF(e, ["unavailable", "isActive", "label", "iconComponent", "iconColor"]);
      let d = (0, r.jsx)(C, {
        size: "md",
        className: a()(eU.buttonIcon, {
          [eU.withText]: !S
        }),
        color: "currentColor"
      });
      return (0, r.jsx)(m.yRy, {
        targetElementRef: o,
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(w.Z, {
            onClose: t,
            minimal: true,
            onInteraction: (0, R.u)("VideoDeviceMenu", s)
          })
        },
        position: "top",
        align: "center",
        animation: m.yRy.Animation.FADE,
        children: (e, l) => {
          var {
            onClick: s
          } = e, c = eF(e, ["onClick"]), {
            isShown: p
          } = l;
          return (0, r.jsx)(m.ua7, {
            text: i,
            children: e => (0, r.jsx)(g.zx, eH(eV({
              "data-migration-pending": true,
              buttonRef: o
            }, u, e, c), {
              onClick: t => {
                var n;
                u.onClick(t), null == (n = e.onClick) || n.call(e), p && s(t)
              },
              onMouseEnter: () => {
                var t, n;
                null == (t = e.onMouseEnter) || t.call(e), null == (n = c.onMouseEnter) || n.call(c), N.onMouseEnter()
              },
              onMouseLeave: () => {
                var t;
                null == (t = e.onMouseLeave) || t.call(e), N.onMouseLeave()
              },
              onContextMenu: t => {
                var n;
                s(t), null == (n = e.onContextMenu) || n.call(e)
              },
              size: g.zx.Sizes.MEDIUM,
              className: a()(eU.button, eU.buttonColor, {
                [eU.buttonActive]: n,
                [eU.fauxDisabled]: t,
                [eU.disabled]: u.disabled
              }),
              innerClassName: eU.buttonContents,
              wrapperClassName: eU.button,
              fullWidth: true,
              focusProps: ez,
              children: S ? d : (0, r.jsxs)(k.Z, {
                align: k.Z.Align.CENTER,
                children: [d, eM.intl.string(eM.t.FlNoSU)]
              })
            }))
          })
        }
      })
    }
  }))
}

function eQ(e) {
  let {
    channel: t,
    enableActivities: n
  } = e, i = (0, Y.bp)(), {
    parentAnalyticsLocation: l,
    newestAnalyticsLocation: o
  } = (0, x.ZP)(), s = i === eL.IlC.POPOUT, c = (0, T.KF)(t.id), p = (0, T.g5)(c), {
    userInActivity: f
  } = (0, u.cj)([I.ZP], () => ({
    userInActivity: null != I.ZP.getSelfEmbeddedActivityForChannel(t.id)
  })), h = (0, C.p)({
    surface: v.eR.VOICE_LAUNCHER,
    skipFetchingShelf: true
  }), b = c !== T.jy.CAN_LAUNCH, {
    Component: _,
    events: O,
    play: E
  } = (0, Z.Z)("RTCConnection");
  return n ? (0, r.jsx)(m.ua7, {
    text: p,
    children: e => (0, r.jsx)(M.Xf, {
      contentType: d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE,
      latestVersion: h,
      children: n => {
        let {
          visibleContent: i,
          markAsDismissed: c
        } = n;
        return (0, r.jsxs)(g.zx, eH(eV(eH(eV({
          "data-migration-pending": true
        }, e), {
          fullWidth: true,
          size: g.zx.Sizes.MEDIUM
        }), O), {
          onClick: () => {
            var n;
            E(), (0, A.Z)({
              context: null != t ? {
                type: "channel",
                channel: t
              } : {
                type: "contextless"
              },
              openInPopout: s,
              analyticsLocation: o
            }), null == (n = e.onClick) || n.call(e), (0, L.v)(l, L.d.ACTIVITY), i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && c(eD.L.TAKE_ACTION)
          },
          onMouseEnter: () => {
            var t;
            O.onMouseEnter(), null == e || null == (t = e.onMouseEnter) || t.call(e)
          },
          onMouseLeave: () => {
            var t;
            O.onMouseLeave(), null == e || null == (t = e.onMouseLeave) || t.call(e)
          },
          disabled: b,
          className: a()(eU.button, eU.buttonColor, {
            [eU.buttonActive]: f,
            [eU.disabled]: b
          }),
          innerClassName: eU.buttonContents,
          wrapperClassName: eU.button,
          focusProps: ez,
          children: [i === d.z.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, r.jsx)(P.r, {
            top: false,
            right: false
          }), (0, r.jsx)(_, {
            size: "md",
            color: "currentColor",
            className: eU.buttonIcon
          })]
        }))
      }
    })
  }) : null
}

function eX(e) {
  let t, {
      channel: n,
      canGoLive: l,
      enableActivities: o,
      disabled: s
    } = e,
    c = i.useRef(null),
    {
      parentAnalyticsLocation: d,
      analyticsLocations: f
    } = (0, x.ZP)(),
    h = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
    b = (0, u.Wu)([eg.Z], () => eg.Z.getAllActiveStreams()),
    _ = (0, es.Z)(n),
    O = n.getGuildId(),
    E = (0, u.cj)([I.ZP], () => null != I.ZP.getSelfEmbeddedActivityForChannel(n.id)),
    y = (0, Q.Z)(n),
    v = i.useCallback(() => {
      (0, ep.Z)(O, n.id, f)
    }, [O, n.id, f]),
    S = b.find(e => e.ownerId === (null == h ? true : h.id)),
    C = (0, ec.E)(n, h, b);
  t = null == S ? l ? v : ed.Z : () => (0, H.Z)(S);
  let T = null != S || C.length > 0,
    N = _ ? eM.intl.string(eM.t.fjBNo6) : eM.intl.string(eM.t.uQn9Bw),
    P = E || o || y,
    j = null != S,
    {
      Component: A,
      events: Z,
      play: w
    } = (0, p.P)(j ? "disable" : "enable");
  i.useEffect(() => () => w(), [w, j]);
  let D = (0, r.jsx)(A, {
    size: "md",
    color: "currentColor",
    className: a()(eU.buttonIcon, {
      [eU.withText]: !P
    })
  });
  return (0, r.jsx)(m.yRy, {
    targetElementRef: c,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(ec.Z, {
        channel: n,
        currentUser: h,
        activeStreams: b,
        onClose: t,
        handleGoLive: l ? v : ed.Z,
        onInteraction: (0, R.u)("ManageStreamsMenu", d, {
          entrypoint: eR.A5.OTHER_BUTTON
        })
      })
    },
    position: "top",
    align: "center",
    animation: m.yRy.Animation.FADE,
    children: e => {
      var {
        onClick: n,
        onMouseEnter: i
      } = e, l = eF(e, ["onClick", "onMouseEnter"]);
      return (0, r.jsx)(m.ua7, {
        text: N,
        children: e => (0, r.jsx)(g.zx, eH(eV(eH(eV({
          "data-migration-pending": true
        }, e), {
          buttonRef: c,
          size: g.zx.Sizes.MEDIUM,
          onClick: r => {
            var i;
            (0, L.v)(d, L.d.STREAM, null == S), T ? n(r) : t(), null == (i = e.onClick) || i.call(e)
          },
          disabled: !_ || s,
          className: a()(eU.button, eU.buttonColor, {
            [eU.buttonActive]: null != S,
            [eU.disabled]: !_ || s
          })
        }), T ? l : null), {
          onMouseEnter: () => {
            var t;
            null == i || i(), null == (t = e.onMouseEnter) || t.call(e), Z.onMouseEnter()
          },
          onMouseLeave: () => {
            var t;
            null == (t = e.onMouseLeave) || t.call(e), Z.onMouseLeave()
          },
          innerClassName: eU.buttonContents,
          wrapperClassName: eU.button,
          focusProps: ez,
          children: P ? D : (0, r.jsxs)(k.Z, {
            align: k.Z.Align.CENTER,
            children: [D, eM.intl.string(eM.t["r0/+v7"])]
          })
        }))
      })
    }
  })
}
class eJ extends Chunk647438.PureComponent {
  renderConnectionStatus() {
    let e, {
      channel: t,
      guild: n,
      rtcConnectionQuality: i,
      rtcConnectionState: l,
      rtcConnectionLastPing: a,
      hasVideo: o
    } = this.props;
    if (null == exports) return null;
    let s = (0, Chunk933557.F6)(exports, Chunk594174.default, Chunk699516.Z);
    return null != require ? (e = Chunk981631.Z5c.CHANNEL(require.id, exports.id), s = "".concat(s, " / ").concat(require.name)) : e = Chunk981631.Z5c.CHANNEL(Chunk981631.ME, exports.id), (0, Chunk951288.jsx)(Chunk917405.Z, {
      channelId: exports.id,
      quality: Chunk647438,
      state: Chunk120356,
      lastPing: a,
      hasVideo: Chunk512722,
      connectionStatusTextVariant: "text-md/medium",
      childrenAsSubtitle: true,
      children: (0, Chunk951288.jsx)(Chunk481060.tEY, {
        children: (0, Chunk951288.jsx)(Chunk799899.rU, {
          to: module,
          onClick: this.handleChannelLinkClick,
          onContextMenu: this.handleChannelLinkContextMenu,
          children: (0, Chunk951288.jsx)(Chunk345243.Z, {
            className: Chunk239545.channel,
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              lineClamp: 1,
              children: s
            })
          })
        })
      })
    })
  }
  renderNoiseCancellation() {
    let {
      noiseCancellationActive: e,
      noiseCancellationError: t,
      hasLayers: n,
      remoteVoiceState: i,
      channel: l,
      voiceStates: a
    } = this.props;
    return null != Chunk647438 ? null : (null == Chunk120356 ? true : Chunk120356.isGuildStageVoice()) && null == a.find(e => e.user.id === em.default.getId() && (0, ei.gf)(e.voiceState) === ei.xO.ON_STAGE) && (0, Chunk485287.U5)(Chunk120356.id) ? (0, Chunk951288.jsx)(eK, {}) : !require && exports ? (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t["i+SO/f"]),
      tooltipClassName: Chunk239545.noiseCancellationTooltip,
      forceOpen: true,
      children: e => {
        let {
          "aria-label": t
        } = e;
        return (0, r.jsx)(ex.Z, {
          "aria-label": t,
          tooltipText: null,
          disabled: true,
          icon: m.oIc
        })
      }
    }) : (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: this.krispButtonRef,
      position: "top",
      align: "center",
      renderPopout: () => (0, Chunk951288.jsx)(eY, {}),
      children: (t, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(e$, {
          popoutProps: t,
          isShown: i,
          noiseCancellationActive: e,
          ref: this.krispButtonRef
        })
      }
    }, "krisp-popout")
  }
  renderVoiceStates() {
    let {
      channel: e,
      voiceStates: t,
      showVoiceStates: n
    } = this.props;
    return null != module && require && 0 !== exports.length ? (0, Chunk951288.jsx)(Chunk226323.Z, {
      voiceStates: exports,
      channel: module,
      className: Chunk239545.voiceUsers
    }) : null
  }
  renderChannelButtons() {
    let {
      channel: e,
      canGoLive: t,
      remoteVoiceState: n,
      enableActivities: i,
      voiceStates: l,
      selfStream: a,
      isPrivateChannelWithEnabledActivities: o
    } = this.props;
    if (null == module || null != require) return null;
    let s = Chunk314897.default.getId();
    if (module.isGuildStageVoice()) {
      if (!(0, Chunk368442.tu)(module.guild_id) || !exports) return null;
      let n = Chunk120356.find(e => e.user.id === s);
      if (null == require || require.voiceState.suppress) return null
    }
    let c = (module.isGuildVoice() || Chunk512722) && Chunk647438,
      {
        reachedLimit: u
      } = (0, Chunk829750.t)(module),
      d = (0, Chunk368442.xJ)(module.id);
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk239545.actionButtons,
      children: [(0, Chunk951288.jsx)(eq, {
        channel: module,
        enableActivities: Chunk799899,
        disabled: !Chunk704215 && Chunk442837
      }), (0, Chunk951288.jsx)(eX, {
        channel: module,
        canGoLive: exports,
        enableActivities: Chunk799899,
        disabled: module.isGuildStageVoice() && (Chunk704215 && null == a || !Chunk704215 && Chunk442837)
      }), Chunk799899 ? (0, Chunk951288.jsx)(eQ, {
        channel: module,
        enableActivities: Chunk647438
      }) : null, (0, Chunk641015.Z)(module) ? (0, Chunk951288.jsx)(Chunk848543.Z, {
        channel: module,
        focusProps: ez
      }) : null]
    })
  }
  render() {
    let {
      channel: e,
      noiseCancellationSupported: t,
      shouldShowVoicePanelIntroduction: n
    } = this.props;
    return null == module ? null : (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: this.ref,
      renderPopout: this.renderVoicePanelIntroduction,
      position: "top",
      align: "center",
      animation: Chunk481060.yRy.Animation.TRANSLATE,
      shouldShow: require,
      children: () => (0, Chunk951288.jsxs)("div", {
        ref: this.ref,
        className: Chunk239545.container,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: Chunk239545.connection,
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk239545.inner,
            children: this.renderConnectionStatus()
          }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
            grow: 0,
            shrink: 0,
            className: Chunk239545.voiceButtonsContainer,
            children: [exports ? this.renderNoiseCancellation() : null, (0, Chunk951288.jsx)(Chunk594117.Z, {
              channel: module
            })]
          })]
        }), this.renderVoiceStates(), this.renderChannelButtons()]
      })
    })
  }
  constructor(...e) {
    super(...e), eB(this, "ref", i.createRef()), eB(this, "krispButtonRef", i.createRef()), eB(this, "handleChannelLinkClick", e => {
      var t;
      let {
        guild: n,
        channel: r
      } = this.props;
      s()(null != r, "Channel is null during navigation click"), e.stopPropagation(), O.Z.channelListScrollTo(null != (t = null == n ? true : n.id) ? t : eL.ME, r.id), (0, L.v)(j.Z.RTC_PANEL, L.d.CHANNEL_LINK)
    }), eB(this, "handleChannelLinkContextMenu", e => {
      let {
        channel: t,
        analyticsLocations: i
      } = this.props;
      (0, _.jW)(e, async () => {
        let {
          default: e
        } = await n.e("56944").then(n.bind(n, 600830));
        return n => (0, r.jsx)(x.Gt, {
          value: i,
          children: (0, r.jsx)(e, eH(eV({}, n), {
            channel: t,
            onInteraction: (0, R.u)("RTCConnectionMenu", j.Z.RTC_PANEL)
          }))
        })
      })
    }), eB(this, "handleCloseVoicePanelIntroduction", () => {
      F.Kw(ek.v.VOICE_PANEL_INTRODUCTION)
    }), eB(this, "renderVoicePanelIntroduction", () => (0, r.jsxs)("div", {
      className: a()(eU.voicePanelIntroductionWrapper, "theme-light"),
      children: [(0, r.jsx)(m.X6q, {
        className: eU.voicePanelIntroductionHeader,
        variant: "heading-md/semibold",
        children: eM.intl.string(eM.t["ba/rLy"])
      }), (0, r.jsx)(m.Text, {
        className: eU.voicePanelIntroductionText,
        variant: "text-sm/normal",
        children: eM.intl.string(eM.t.Ne1Ee3)
      }), (0, r.jsx)(g.zx, {
        className: eU.voicePanelIntroductionButton,
        color: g.zx.Colors.BRAND,
        onClick: this.handleCloseVoicePanelIntroduction,
        focusProps: ez,
        children: eM.intl.string(eM.t.shaBeH)
      })]
    }))
  }
}

function e$(e) {
  let {
    popoutProps: t,
    isShown: n,
    noiseCancellationActive: l,
    ref: a
  } = e, {
    parentAnalyticsLocation: o
  } = (0, x.ZP)(), {
    play: s,
    Component: c,
    events: u
  } = (0, h.P)(l ? "disable" : "enable");
  return i.useEffect(() => () => s(), [l, s]), (0, r.jsx)(ex.Z, eH(eV({}, t), {
    ref: a,
    onClick: e => {
      (0, L.v)(o, L.d.KRISP, !l), t.onClick(e)
    },
    onMouseEnter: () => {
      var e;
      null == (e = t.onMouseEnter) || e.call(t), u.onMouseEnter()
    },
    onMouseLeave: () => {
      u.onMouseLeave()
    },
    tooltipClassName: eU.noiseCancellationTooltip,
    tooltipText: n ? null : eM.intl.string(eM.t.vFiCS0),
    icon: (0, r.jsx)(c, {
      size: "refresh_sm"
    })
  }))
}
let e0 = (0, Chunk730749.Z)(function(e) {
  let t = (0, G.Z)(),
    n = (0, u.e7)([U.Z], () => U.Z.getAwaitingRemoteSessionInfo()),
    l = (0, u.e7)([eS.default], () => eS.default.getCurrentUser()),
    a = (0, u.cj)([ev.Z], () => null != t ? {
      channelId: t.channelId,
      rtcConnectionQuality: eL.IE4.FINE,
      rtcConnectionState: eL.hes.RTC_CONNECTED,
      rtcConnectionLastPing: 0
    } : {
      channelId: ev.Z.getChannelId(),
      rtcConnectionQuality: ev.Z.getQuality(),
      rtcConnectionState: ev.Z.getState(),
      rtcConnectionLastPing: ev.Z.getLastPing()
    }),
    {
      channelId: o
    } = a,
    s = eF(a, ["channelId"]),
    c = (0, u.e7)([eb.Z], () => eb.Z.getChannel(o), [o]),
    d = null == c ? true : c.getGuildId(),
    p = (0, u.e7)([e_.Z], () => e_.Z.getGuild(d), [d]),
    f = (0, u.cj)([eE.Z], () => ({
      noiseCancellationSupported: eE.Z.isNoiseCancellationSupported(),
      noiseCancellationActive: eE.Z.getNoiseCancellation(),
      noiseCancellationError: eE.Z.isNoiseCancellationError(),
      canGoLive: (0, V.Z)(eE.Z)
    })),
    h = (0, u.e7)([eE.Z, z.Z], () => z.Z.hasHotspot(ek.v.VOICE_PANEL_INTRODUCTION) && (0, ej.EO)(l) && !eE.Z.isInteractionRequired() && !(null == c ? true : c.isGuildStageVoice())),
    b = (0, u.e7)([eC.Z], () => null != o && eC.Z.hasVideo(o), [o]),
    _ = (0, u.e7)([eg.Z], () => eg.Z.getCurrentUserActiveStream()),
    O = (0, u.e7)([eO.Z], () => eO.Z.hasLayers()),
    E = (0, u.e7)([W.Z], () => W.Z.isViewingRoles(d)),
    y = (0, u.e7)([ey.Z], () => E && !ey.Z.can(eL.Plq.VIEW_CHANNEL, c), [E, c]),
    v = el.Fg.useSetting(),
    [I, C, T] = (0, u.Wu)([eT.ZP, J.Z], () => (null == c ? true : c.isGuildStageVoice()) ? [J.Z.getMutableParticipants(c.id, $.pV.SPEAKER), J.Z.getParticipantsVersion(c.id), null] : [null, null, null != c ? eT.ZP.getVoiceStatesForChannel(c) : null], [c]),
    P = i.useMemo(() => {
      var e, t;
      return null != (t = null != (e = null == I ? true : I.map(e => {
        let {
          user: t,
          userNick: n,
          voiceState: r
        } = e;
        return {
          user: t,
          nick: n,
          voiceState: r
        }
      })) ? e : T) ? t : []
    }, [I, C, T]),
    [A, Z] = i.useState(false);
  i.useEffect(() => {
    (E || y) && Z(false)
  }, [E, y, Z]);
  let {
    analyticsLocations: w
  } = (0, x.ZP)(j.Z.RTC_PANEL), L = (0, S.Z)(null != d ? d : eL.lds, null == c ? true : c.id), R = (0, N.Z)(null == c ? true : c.id);
  return (0, r.jsx)(x.Gt, {
    value: w,
    children: (0, r.jsxs)("div", {
      className: eU.wrapper,
      children: [null != t || null != n ? (0, r.jsx)(B.Z, {
        voiceState: t,
        awaitingRemoteSessionInfo: n
      }) : null, (0, r.jsx)(eJ, eH(eV({}, e, f, s), {
        enableActivities: L,
        remoteVoiceState: t,
        guild: p,
        channel: c,
        hasVideo: b,
        selfStream: _,
        hasLayers: O,
        voiceStates: P,
        showVoiceStates: v,
        shouldShowVoicePanelIntroduction: h,
        isPrivateChannelWithEnabledActivities: R,
        analyticsLocations: w
      })), !A && E && null != d ? (0, r.jsxs)("div", {
        className: eU.viewAsRolesWarning,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-sm/normal",
          className: eU.viewAsRolesWarningText,
          children: y ? eM.intl.string(eM.t.efjuQE) : eM.intl.string(eM.t.br8H2N)
        }), (0, r.jsx)(g.zx, {
          className: eU.viewAsRolesWarningButton,
          size: g.zx.Sizes.MIN,
          onClick: () => {
            Z(true)
          },
          focusProps: ez,
          children: eM.intl.string(eM.t.WAI6xs)
        })]
      }) : null]
    })
  })
})