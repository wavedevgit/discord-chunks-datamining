/** Chunk was on web.js **/
/** chunk id: 369664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eF,
  c: () => eG
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk799899 = require("./799899.js"),
  Chunk442837 = require("./442837.js"),
  Chunk992774 = require("./992774.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk846027 = require("./846027.js"),
  Chunk893776 = require("./893776.js"),
  Chunk117266 = require("./117266.js"),
  Chunk254854 = require("./254854.js"),
  Chunk195500 = require("./195500.js"),
  Chunk287734 = require("./287734.js"),
  Chunk205355 = require("./205355.js"),
  Chunk558381 = require("./558381.js"),
  Chunk223245 = require("./223245.js"),
  Chunk491428 = require("./491428.js"),
  Chunk401430 = require("./401430.js"),
  Chunk72924 = require("./72924.jsx"),
  Chunk69499 = require("./69499.jsx"),
  Chunk726542 = require("./726542.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk749277 = require("./749277.jsx"),
  Chunk196068 = require("./196068.jsx"),
  Chunk132144 = require("./132144.jsx"),
  Chunk131130 = require("./131130.jsx"),
  Chunk458725 = require("./458725.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk506357 = require("./506357.jsx"),
  Chunk36459 = require("./36459.js"),
  Chunk236069 = require("./236069.jsx"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk574650 = require("./574650.jsx"),
  Chunk665302 = require("./665302.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk918658 = require("./918658.jsx"),
  Chunk859428 = require("./859428.jsx"),
  Chunk647085 = require("./647085.js"),
  Chunk72897 = require("./72897.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk272008 = require("./272008.js"),
  Chunk523255 = require("./523255.js"),
  Chunk101879 = require("./101879.jsx"),
  Chunk496729 = require("./496729.jsx"),
  Chunk852923 = require("./852923.jsx"),
  Chunk957030 = require("./957030.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk475808 = require("./475808.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk695103 = require("./695103.js"),
  Chunk933429 = require("./933429.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk610674 = require("./610674.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk655227 = require("./655227.js");

function eA(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eA(e, t, n[t])
    })
  }
  return e
}

function eN(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eR(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eN(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eP = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, k.hp)(n)) ? true : t.errorCode, o = eT.intl.formatToPlainString(eT.t.ejOT95, {
      errorCode: a
    }), s = (0, r.jsx)(u.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eS.errorCodeNoticeText,
      selectable: true,
      children: o
    });
    return i ? (0, r.jsx)(u.P3F, {
      tag: "span",
      className: eS.errorCodeNoticeClickable,
      onClick: () => i && open(eE.Z.getArticleURL(ey.BhN.AV_ERROR_CODES)),
      children: s
    }) : s
  },
  ew = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eG()
      }
    }), Chunk388032.intl.string(Chunk388032.t.o3zuYz), (0, Chunk951288.jsx)(eP, {
      error: Chunk458725.u.NO_INPUT_DEVICES
    }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
      href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NO_INPUT_DETECTED),
      children: Chunk388032.intl.string(Chunk388032.t.RYKKox)
    })]
  }),
  eD = "ms-settings:sound-properties",
  eL = e => "".concat(eD, "?endpointId=").concat(e),
  ex = e => {
    let {
      deviceGuid: t
    } = e;
    return (0, r.jsxs)(u.qXd, {
      color: u.DM8.DANGER,
      children: [(0, r.jsx)(u.RyX, {
        onClick: () => {
          eG(), (0, el.b)()
        }
      }), eT.intl.string(eT.t.ppW3ri), (0, r.jsx)(eP, {
        error: k.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(u.u3T, {
        href: eL(t),
        children: eT.intl.string(eT.t.pxYBbM)
      })]
    })
  },
  eM = e => {
    let {
      deviceGuid: t
    } = e;
    return (0, r.jsxs)(u.qXd, {
      color: u.DM8.DANGER,
      children: [(0, r.jsx)(u.RyX, {
        onClick: () => {
          eG(), (0, el.b)()
        }
      }), eT.intl.string(eT.t.j4gGA4), (0, r.jsx)(eP, {
        error: k.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(u.u3T, {
        href: eL(t),
        children: eT.intl.string(eT.t.pxYBbM)
      })]
    })
  },
  ek = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eG(), (0, Chunk475808.b)()
      }
    }), Chunk388032.intl.string(Chunk388032.t.nCO9bI), (0, Chunk951288.jsx)(eP, {
      error: Chunk458725.u.NO_AUDIO_INPUT_DETECTED
    }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
      href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NO_INPUT_DETECTED),
      children: Chunk388032.intl.string(Chunk388032.t.RYKKox)
    })]
  }),
  ej = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eG(), (0, Chunk475808.b)()
      }
    }), Chunk388032.intl.string(Chunk388032.t.dNAJ18), (0, Chunk951288.jsx)(eP, {
      allowClick: true,
      error: Chunk458725.u.NO_AUDIO_INPUT_DETECTED
    }), (0, Chunk951288.jsx)(Chunk481060.EyT, {
      onClick: () => {
        (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
          section: Chunk981631.oAB.VOICE
        })
      },
      children: Chunk388032.intl.string(Chunk388032.t.I6YlB4)
    })]
  });

function eU(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), eg.default.track(ey.rMx.APP_NOTICE_VIEWED, n)
}

function eG(e) {
  h.Z.dismiss(null != e ? {
    untilAtLeast: o()(e)
  } : true)
}

function eB(e) {
  return null != e ? em.m9[e] : null
}
let eZ = Chunk647438.memo(function() {
  var e, t;
  let a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    h = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    A = (0, Chunk442837.e7)([Chunk933429.ZP], () => Chunk933429.ZP.getNotice()),
    {
      analyticsLocations: k
    } = (0, Chunk906732.ZP)(),
    el = null == Chunk100527 ? true : Chunk100527.type,
    eg = (0, Chunk281956.J)(Chunk254854),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: eA
    } = (0, Chunk647085.U)({
      location: "AppNotice"
    });
  Chunk647438.useEffect(() => {
    null != Chunk475808 && eU(Chunk475808, Chunk254854)
  }, [Chunk475808, Chunk254854]), Chunk647438.useEffect(() => {
    if (null != Chunk100527 && Chunk100527.type === Chunk981631.kVF.SURVEY && null != Chunk100527.metadata) {
      let {
        metadata: e
      } = Chunk100527, t = Chunk353926.Z.getUserExperimentDescriptor(module.id);
      null != exports && (0, Chunk492435.W9)(module.id, exports), (async () => {
        var e, t;
        (null == (e = Chunk100527.metadata) ? true : module.id) != null && await (0, Chunk491428.g8)(null == (t = Chunk100527.metadata) ? true : exports.id)
      })()
    }
  }, [Chunk100527]);
  let eN = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    [eP, eD] = Chunk647438.useState(""),
    [eL, eZ] = Chunk647438.useState(null),
    [eF, eV] = Chunk647438.useState(null);
  Chunk647438.useEffect(() => {
    if ((0, Chunk358085.isWindows)() && eA) {
      let e = (0, Chunk992774.zS)();
      module.getInputDevices(t => {
        let n = t.find(e => e.hardwareId === eN.hardwareId);
        if ((null == n ? true : n.guid) != null) {
          var r, i, a, o;
          eD(n.guid), null == (i = e.getDeviceOSMuted) || null == (r = i.call(e, n.guid)) || r.then(e => eZ(e)), null == (o = e.getDeviceOSVolume) || null == (a = o.call(e, n.guid)) || a.then(e => eV(e))
        }
      })
    }
  }, [eA, eN.hardwareId]);
  let eH = null != Chunk475808 ? Chunk933429.zD[Chunk475808] : null,
    eY = null != Chunk475808 ? Chunk933429.o[Chunk475808] : null,
    eW = null != Chunk475808 ? Chunk933429.nA[Chunk475808] : null,
    eK = eB(Chunk475808);
  if (null == Chunk100527) return null;
  if (null != eH) return (0, Chunk951288.jsx)(Chunk132144.W, {
    dismissibleContent: eH,
    noticeType: Chunk100527.type
  });
  if (null != eY) return (0, Chunk951288.jsx)(Chunk131130.q, {
    dismissibleContent: eY,
    noticeType: Chunk100527.type
  });
  if (null != eW) return (0, Chunk951288.jsx)(Chunk196068.c, {
    dismissibleContent: eW
  });
  if (null != eK) return (0, Chunk951288.jsx)(Chunk749277.A, {
    dismissibleContent: eK,
    noticeType: Chunk100527.type
  });
  let ez = null == (e = Chunk100527.metadata) ? true : module.premiumType;
  switch (Chunk100527.type) {
    case Chunk981631.kVF.LURKING_GUILD:
      return (0, Chunk951288.jsx)(Chunk859428.Z, {});
    case Chunk981631.kVF.PENDING_MEMBER:
      return (0, Chunk951288.jsx)(Chunk574650.Z, {});
    case Chunk981631.kVF.INVITED_TO_SPEAK:
      return (0, Chunk951288.jsx)(Chunk852923.Z, {});
    case Chunk981631.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eq
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsx)(Chunk506357.Z, {
        onDismiss: () => eG(eq)
      });
    case Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eX
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(eX),
          noticeType: Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t["08KQ1P"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN32_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eQ
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(eQ),
          noticeType: Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t["8Je+dX"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eJ
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(eJ),
          noticeType: Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t.q8VPLo, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MACOS_19_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.GENERIC:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.GENERIC
        }), Chunk100527.message, null != Chunk100527.buttonText ? (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: Chunk100527.callback,
          noticeType: Chunk981631.kVF.GENERIC,
          children: Chunk100527.buttonText
        }) : null]
      });
    case Chunk981631.kVF.LAUNCH_GAME_FAILURE:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.LAUNCH_GAME_FAILURE
        }), Chunk100527.message, null != Chunk100527.buttonText ? (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: Chunk100527.callback,
          noticeType: Chunk981631.kVF.LAUNCH_GAME_FAILURE,
          children: Chunk100527.buttonText
        }) : null]
      });
    case Chunk981631.kVF.VOICE_DISABLED:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk195500.Z.clearRemoteDisconnectVoiceChannelId(), eG()
          },
          noticeType: Chunk981631.kVF.VOICE_DISABLED
        }), Chunk388032.intl.string(Chunk388032.t.bOQ3jV), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getRemoteDisconnectVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: Chunk981631.kVF.VOICE_DISABLED,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pv)
        })]
      });
    case Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk195500.Z.clearLastSessionVoiceChannelId(), eG()
          },
          noticeType: Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION
        }), Chunk388032.intl.string(Chunk388032.t.jY2lUA), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getLastSessionVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pv)
        })]
      });
    case Chunk981631.kVF.SPOTIFY_AUTO_PAUSED:
      let e$ = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY);
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.SPOTIFY_AUTO_PAUSED
        }), (0, Chunk951288.jsx)("img", {
          alt: "",
          className: Chunk655227.platformIcon,
          src: e$.icon.whiteSVG
        }), Chunk388032.intl.string(Chunk388032.t.D8Cp76), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
            section: Chunk981631.oAB.VOICE
          }),
          noticeType: Chunk981631.kVF.SPOTIFY_AUTO_PAUSED,
          children: Chunk388032.intl.string(Chunk388032.t.NiTd0e)
        }), (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          className: Chunk655227.textLinkSmall,
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t.CiqAIU)
        })]
      });
    case Chunk981631.kVF.UNCLAIMED_ACCOUNT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["f+Zaol"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.UNCLAIMED_ACCOUNT,
          onClick: () => Chunk626135 && null != Chunk254854 ? (0, Chunk305325.hk)(Chunk254854) : Chunk391650.j(),
          children: Chunk388032.intl.string(Chunk388032.t.fiNVin)
        })]
      });
    case Chunk981631.kVF.UNVERIFIED_ACCOUNT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["3sWbf3"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.UNVERIFIED_ACCOUNT,
          onClick: () => {
            Chunk893776.Z.verifyResend(), Chunk668781.Z.show({
              title: Chunk388032.intl.string(Chunk388032.t.LykQYk),
              body: Chunk388032.intl.format(Chunk388032.t.azKEPy, {
                email: null == Chunk913527 ? true : Chunk913527.email
              }),
              secondaryConfirmText: Chunk388032.intl.string(Chunk388032.t.oP5zGA),
              onConfirmSecondary: Chunk391650.j
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.WnX4J2)
        })]
      });
    case Chunk981631.kVF.SCHEDULED_MAINTENANCE:
      if (null == Chunk100527.metadata) return null;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk205355.Z.ackScheduledMaintenance(),
          noticeType: Chunk981631.kVF.SCHEDULED_MAINTENANCE
        }), Chunk388032.intl.format(Chunk388032.t["yb96S+"], Chunk100527.metadata), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS, "/incidents/").concat(Chunk100527.metadata.id),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.NO_INPUT_DETECTED:
      if ((0, Chunk358085.isWindows)() && eA) {
        if (true === eL) return (0, Chunk951288.jsx)(ex, {
          deviceGuid: eP
        });
        else if (0 === eF) return (0, Chunk951288.jsx)(eM, {
          deviceGuid: eP
        })
      }
      if (!Chunk131951.Z.supports(Chunk65154.AN.LOOPBACK)) return (0, Chunk951288.jsx)(ek, {});
      return (0, Chunk951288.jsx)(ej, {});
    case Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED:
      return (0, Chunk951288.jsx)(ew, {});
    case Chunk981631.kVF.HARDWARE_MUTE:
      if (null == Chunk100527.metadata) return null;
      let {
        vendor: e0, model: e1
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.format(Chunk388032.t.qoDex7, {
          vendorName: e0.name,
          modelName: e1.name
        }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk846027.Z.setEnableHardwareMuteNotice(false), eG()
          }
        }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: e1.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: Chunk388032.intl.string(Chunk388032.t["Yl/Riu"])
        })]
      });
    case Chunk981631.kVF.STREAMER_MODE:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.STREAMER_MODE,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.STREAMER_MODE
        }), Chunk388032.intl.string(Chunk388032.t.iEgBXp), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => Chunk223245.Z.setEnabled(false),
          noticeType: Chunk981631.kVF.STREAMER_MODE,
          children: Chunk388032.intl.string(Chunk388032.t.R9GHya)
        })]
      });
    case Chunk981631.kVF.H264_DISABLED:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            eG()
          }
        }), Chunk388032.intl.string(Chunk388032.t.HcErZT), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => {
            (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
              section: Chunk981631.oAB.VOICE
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["51hI/g"])
        })]
      });
    case Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == Chunk100527.metadata) return null;
      let {
        skuId: e3, applicationId: e2
      } = Chunk100527.metadata, e4 = Chunk55563.Z.get(e3), e8 = Chunk812206.Z.getApplication(e2);
      if (null == e4 || null == e8) return null;
      let e5 = {
        page: Chunk981631.ZY5.IN_APP
      };
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk117266.Z(e4.id),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk655227.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t["g3MU/+"], {
          applicationName: e8.name,
          skuName: e4.name
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, Chunk72924.S)({
            applicationId: e8.id,
            skuId: e4.id,
            openPremiumPaymentModal: () => {
              (0, Chunk963249.Z)({
                initialPlanId: null,
                subscriptionTier: Chunk474936.Si.TIER_2,
                analyticsLocations: Chunk458725,
                analyticsObject: e5
              })
            },
            analyticsLocations: Chunk458725,
            analyticsLocationObject: e5,
            context: __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP
          }).then(() => Chunk117266.Z(e4.id)),
          children: Chunk388032.intl.string(Chunk388032.t.KEwPYx)
        })]
      });
    case Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == Chunk100527.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = Chunk100527.metadata, n = Chunk55563.Z.get(module), i = Chunk812206.Z.getApplication(exports);
      if (null == require || null == Chunk647438) return null;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk655227.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t.LquIKC, {
          applicationName: Chunk647438.name,
          skuName: require.name
        }), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          children: (0, Chunk951288.jsx)(Chunk799899.rU, {
            onClick: () => eG(),
            to: {
              pathname: Chunk981631.Z5c.APPLICATION_STORE_LISTING_SKU(require.id),
              state: {
                scrollRestoration: false
              }
            },
            children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
          })
        })]
      })
    }
    case Chunk981631.kVF.SURVEY: {
      let e = Chunk100527.metadata;
      if (null == module) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: a
      } = module;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.CUSTOM,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.SURVEY,
          onClick: () => {
            (0, Chunk491428.hZ)(exports, true)
          }
        }), require, (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SURVEY,
          onClick: () => {
            window.open(Chunk913527, "_blank"), (0, Chunk491428.hZ)(exports, false)
          },
          children: Chunk647438
        })]
      })
    }
    case Chunk981631.kVF.CORRUPT_INSTALLATION:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.string(Chunk388032.t["ugxmk/"]), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CORRUPT_INSTALLATION),
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t["6ik4Xk"])
        })]
      });
    case Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), Chunk388032.intl.string(Chunk388032.t.wVjKGi), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
              return t => (0, r.jsx)(e, eC({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["1WjMbC"])
        })]
      });
    case Chunk981631.kVF.DISPATCH_ERROR:
      if (null == Chunk100527.metadata) return null;
      let {
        error: e6
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.DISPATCH_ERROR
        }), null == e6 ? true : e6.displayMessage, (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DISPATCH_ERROR,
          onClick: () => (0, Chunk481060.ZDy)(async () => {
            let {
              default: e
            } = await require.e("20212").then(require.bind(require, 915194));
            return t => (0, r.jsx)(e, eC({}, t))
          }),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == Chunk100527.metadata) return null;
      let {
        progress: e7, total: e9, name: te
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: [null != te ? Chunk388032.intl.formatToPlainString(Chunk388032.t["pHj+z4"], {
            name: "".concat(te),
            progress: e7,
            total: e9
          }) : Chunk388032.intl.formatToPlainString(Chunk388032.t["lHZn+A"], {
            progress: e7,
            total: e9
          }), (0, Chunk951288.jsx)(Chunk481060.$jN, {
            type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
            className: Chunk655227.ellipsis
          })]
        })]
      });
    case Chunk981631.kVF.APPLICATION_TEST_MODE:
      if (null == Chunk100527.metadata) return null;
      if (null != Chunk695103.Z.testModeEmbeddedApplicationId) return (0, Chunk951288.jsx)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk951288.jsx)("div", {
            children: Chunk388032.intl.format(Chunk388032.t["1qxVe4"], {
              applicationName: Chunk100527.metadata.applicationName
            })
          }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
            onClick: Chunk401430.mc,
            noticeType: Chunk981631.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, Chunk951288.jsx)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk951288.jsx)("div", {
            children: Chunk388032.intl.format(Chunk388032.t.Fv5HrE, {
              applicationName: Chunk100527.metadata.applicationName
            })
          }), (0, Chunk951288.jsx)(Chunk69499.Z, {
            dropdownSize: Chunk69499.E.DropdownSizes.SMALL,
            className: Chunk655227.testModeSKUSelector,
            color: Chunk69499.E.Colors.WHITE,
            look: Chunk69499.E.Looks.OUTLINED,
            size: Chunk69499.E.Sizes.MIN,
            onSKUSelect: e => b.yt(e.id, {
              analyticsSource: {
                page: null,
                section: ey.jXE.NOTIFICATION_BAR,
                object: ey.qAy.NAVIGATION_LINK
              }
            }),
            applicationId: Chunk100527.metadata.applicationId,
            children: Chunk388032.intl.string(Chunk388032.t.Q5ZgpK)
          }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
            onClick: Chunk401430.mc,
            noticeType: Chunk981631.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
    case Chunk981631.kVF.VIEWING_ROLES:
      return (0, Chunk951288.jsx)(Chunk918658.Z, {});
    case Chunk981631.kVF.PREMIUM_UNCANCEL:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: ez === Chunk474936.PremiumTypes.TIER_1 ? Chunk481060.DM8.PREMIUM_TIER_1 : ez === Chunk474936.PremiumTypes.TIER_0 ? Chunk481060.DM8.PREMIUM_TIER_0 : Chunk481060.DM8.PREMIUM_TIER_2,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk655227.premiumIcon
        }), ez === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.fXv4wm, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : ez === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZOHZMr, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.outyHh, {
          daysLeft: Chunk100527.metadata.daysLeft
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("17938"), require.e("84992"), require.e("11394")]).then(require.bind(require, 561623));
              return t => (0, r.jsx)(e, eR(eC({}, t), {
                daysLeft: A.metadata.daysLeft,
                premiumType: ez,
                analyticsSource: "Nag Bar",
                premiumSubscription: A.metadata.premiumSubscription
              }))
            })
          },
          children: ez === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.BkbUPM) : ez === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t.Px978X) : Chunk388032.intl.string(Chunk388032.t.LW5tCE)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: tt, dismissUntil: tn
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk475808,
          onClick: () => {
            eG(tn)
          }
        }), Chunk388032.intl.format(Chunk388032.t.zxU0Kp, {
          daysPastDue: tt
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eG(tn), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.q8rxeS)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t.LlZaoX), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["Zpd+Yq"])
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t["30YfCr"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.U5pKWA)
        })]
      });
    case Chunk981631.kVF.PREMIUM_MISSING_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), ez === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.b6QUvf, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : ez === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["tURZ/M"], {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.AyC74I, {
          daysLeft: Chunk100527.metadata.daysLeft
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eG(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: ez === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.lboF5O) : ez === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t["4UPwOq"]) : Chunk388032.intl.string(Chunk388032.t["P/VvGb"])
        })]
      });
    case Chunk981631.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, Chunk951288.jsx)(Chunk665302.h, {
        buttonText: null != (t = Chunk100527.buttonText) ? exports : Chunk388032.intl.string(Chunk388032.t["/g10LC"]),
        onGoBack: Chunk100527.callback,
        onDismiss: () => eG(),
        showCloseButton: true
      });
    case Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, Chunk951288.jsx)(Chunk236069.Z, {
        guildId: Chunk254854,
        analyticsLocations: Chunk458725
      });
    case Chunk981631.kVF.QUARANTINED:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.string(Chunk388032.t.DVFJYf), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: Chunk610674.Z,
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t.kvHdFN)
        }), (0, Chunk951288.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUARANTINE),
          target: "_blank",
          className: Chunk655227.quarantineLearnMoreLink,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.BLOCKED_BY_PROXY:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [Chunk388032.intl.string(Chunk388032.t.Ugijzi), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eG(),
          noticeType: Chunk981631.kVF.BLOCKED_BY_PROXY
        })]
      });
    case Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: tr, decisionId: ti
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != Chunk254854 && (0, Chunk36459.T9)(Chunk254854), eG(tr)
          }
        }), Chunk388032.intl.string(Chunk388032.t.B8ruyY), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => {
            null != Chunk254854 && (0, Chunk36459.UE)(Chunk254854, ti, () => {
              eG(tr), (0, Chunk36459.T9)(Chunk254854)
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.oX14El)
        }), null != Chunk254854 ? (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => Chunk434404.Z.open(Chunk254854, Chunk981631.pNK.GUILD_AUTOMOD, true, Chunk981631.KsC.AUTOMOD_MENTION_SPAM),
          children: Chunk388032.intl.string(Chunk388032.t["1R7QIx"])
        }) : null]
      });
    case Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            Chunk523255.hZ(), eG()
          }
        }), Chunk388032.intl.string(Chunk388032.t.I1nKfO), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("26860"), require.e("52432")]).then(require.bind(require, 349994));
              return t => (0, r.jsx)(e, eC({}, t))
            }), Chunk523255.hZ(), eG()
          },
          children: Chunk388032.intl.string(Chunk388032.t.l5xYnH)
        })]
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let ta = o()().add(5, "days").toDate();
      return (0, Chunk951288.jsx)(Chunk246965.Z, {
        dismissCurrentNotice: () => {
          (0, Chunk266454.Q3)(Chunk933429.m9[Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eG(ta)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let to = o()().add(5, "days").toDate();
      return (0, Chunk951288.jsx)(Chunk535278.Z, {
        dismissCurrentNotice: () => {
          eG(to)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = Chunk100527.metadata) ? true : module.streamKey) != null && (0, Chunk272008.nE)(Chunk100527.metadata.streamKey)
          }
        }), Chunk388032.intl.string(Chunk388032.t.rOx44m)]
      });
    case Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            var e;
            eG(null == (e = Chunk100527.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR
        }), Chunk388032.intl.string(Chunk388032.t["0klLS7"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            var e;
            (0, Chunk496729.ZZ)(), eG(null == (e = Chunk100527.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
          children: Chunk388032.intl.string(Chunk388032.t.e4y2VM)
        })]
      });
    case Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, Chunk951288.jsx)(Chunk101879.Z, {});
    case Chunk981631.kVF.SYSTEM_SERVICE_WARNING:
      return (0, Chunk951288.jsx)(Chunk957030.Z, {});
    default:
      return null
  }
});

function eF() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.NOTICE);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsx)(eZ, {})
  })
}