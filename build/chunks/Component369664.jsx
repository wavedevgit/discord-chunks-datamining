/** Chunk was on web.js **/
/** chunk id: 369664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eK,
  c: () => eY
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk319498 = require("./319498.js"),
  Chunk209739 = require("./209739.js"),
  c = require.n(Chunk209739),
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
  Chunk579806 = require("./579806.js"),
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
  Chunk947245 = require("./947245.js"),
  Chunk126916 = require("./126916.jsx"),
  Chunk22095 = require("./22095.js"),
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
  Chunk70722 = require("./70722.js"),
  Chunk474936 = require("./474936.js"),
  Chunk610674 = require("./610674.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk627881 = require("./627881.js");

function ew(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eL(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ew(e, t, n[t])
    })
  }
  return e
}

function ex(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eM(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ej = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, G.hp)(n)) ? true : t.errorCode, o = eP.intl.formatToPlainString(eP.t.ejOT95, {
      errorCode: a
    }), s = (0, r.jsx)(f.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eD.errorCodeNoticeText,
      selectable: true,
      children: o
    });
    return i ? (0, r.jsx)(f.P3F, {
      tag: "span",
      className: eD.errorCodeNoticeClickable,
      onClick: () => i && open(eI.Z.getArticleURL(eS.BhN.AV_ERROR_CODES)),
      children: s
    }) : s
  },
  ek = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: t,
        onClick: () => {
          eY()
        }
      }), eP.intl.string(eP.t.o3zuYz), (0, r.jsx)(ej, {
        error: G.u.NO_INPUT_DEVICES
      }), (0, r.jsx)(f.u3T, {
        href: eI.Z.getArticleURL(eS.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: eP.intl.string(eP.t.RYKKox)
      })]
    })
  },
  eU = "ms-settings:sound-properties";

function eG(e) {
  return (0, eT.isWindows)() && c().satisfies(null === C.Z || true === C.Z ? true : C.Z.os.release, eA.lb) ? "".concat(eU, "?endpointId=").concat(e) : "ms-settings:sound"
}
let eB = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eY(), (0, e_.b)()
        }
      }), eP.intl.string(eP.t.ppW3ri), (0, r.jsx)(ej, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eG(t),
        noticeType: n,
        children: eP.intl.string(eP.t.pxYBbM)
      })]
    })
  },
  eZ = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eY(), (0, e_.b)()
        }
      }), eP.intl.string(eP.t.j4gGA4), (0, r.jsx)(ej, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eG(t),
        noticeType: n,
        children: eP.intl.string(eP.t.pxYBbM)
      })]
    })
  },
  eF = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: t,
        onClick: () => {
          eY(), (0, e_.b)()
        }
      }), eP.intl.string(eP.t.nCO9bI), (0, r.jsx)(ej, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eI.Z.getArticleURL(eS.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: eP.intl.string(eP.t.RYKKox)
      })]
    })
  },
  eV = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: t,
        onClick: () => {
          eY(), (0, e_.b)()
        }
      }), eP.intl.string(eP.t.dNAJ18), (0, r.jsx)(ej, {
        allowClick: true,
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.EyT, {
        onClick: () => {
          (0, ef.openUserSettings)(ed.n.VOICE_AND_VIDEO_PANEL, {
            section: eS.oAB.VOICE
          })
        },
        children: eP.intl.string(eP.t.I6YlB4)
      })]
    })
  };

function eH(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), ev.default.track(eS.rMx.APP_NOTICE_VIEWED, n)
}

function eY(e) {
  g.Z.dismiss(null != e ? {
    untilAtLeast: o()(e)
  } : true)
}
let eW = Chunk473749.memo(function() {
  var e, t;
  let a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    l = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    c = (0, Chunk442837.e7)([Chunk933429.ZP], () => Chunk933429.ZP.getNotice()),
    {
      analyticsLocations: g
    } = (0, Chunk906732.ZP)(),
    C = (0, Chunk281956.J)(Chunk209739),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: R
    } = (0, Chunk647085.U)({
      location: "AppNotice"
    }),
    {
      enableEmbeddedSurvey: G
    } = Chunk947245.E.useConfig({
      location: "AppNotice"
    });
  Chunk473749.useEffect(() => {
    (null == c ? true : c.type) != null && eH(c.type, Chunk209739)
  }, [null == c ? true : c.type, Chunk209739]), Chunk473749.useEffect(() => {
    if (null != c && c.type === Chunk981631.kVF.SURVEY && null != c.metadata) {
      let {
        metadata: e
      } = c, t = Chunk353926.Z.getUserExperimentDescriptor(module.id);
      null != exports && (0, Chunk492435.W9)(module.id, exports), (async () => {
        var e, t;
        (null == (e = c.metadata) ? true : module.id) != null && await (0, Chunk491428.g8)(null == (t = c.metadata) ? true : exports.id)
      })()
    }
  }, [c]);
  let e_ = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    [ev, eA] = Chunk473749.useState(""),
    [ew, ex] = Chunk473749.useState(null),
    [ej, eU] = Chunk473749.useState(null);
  if (Chunk473749.useEffect(() => {
      if ((0, Chunk358085.isWindows)() && Chunk100527) {
        let i = (0, Chunk992774.zS)();
        if ((null == Chunk475808 ? true : Chunk475808.guid) != null) {
          var e, t, n, r;
          Chunk70722(Chunk475808.guid), null == (t = Chunk473749.getDeviceOSMuted) || null == (e = exports.call(Chunk473749, Chunk475808.guid)) || module.then(e => ex(e)), null == (r = Chunk473749.getDeviceOSVolume) || null == (n = Chunk54381.call(Chunk473749, Chunk475808.guid)) || require.then(e => eU(e))
        }
      }
    }, [Chunk100527, Chunk475808.guid]), null == c) return null;
  let eG = null != c.type ? Chunk933429.zD[c.type] : null,
    eW = null != c.type ? Chunk933429.o[c.type] : null,
    eK = null != c.type ? Chunk933429.nA[c.type] : null,
    ez = Chunk933429.m9[c.type];
  if (null != eG) return (0, Chunk54381.jsx)(Chunk132144.W, {
    dismissibleContent: eG,
    noticeType: c.type
  });
  if (null != eW) return (0, Chunk54381.jsx)(Chunk131130.q, {
    dismissibleContent: eW,
    noticeType: c.type
  });
  if (null != eK) return (0, Chunk54381.jsx)(Chunk196068.c, {
    dismissibleContent: eK
  });
  if (null != ez) return (0, Chunk54381.jsx)(Chunk749277.A, {
    dismissibleContent: ez,
    noticeType: c.type
  });
  let eq = null == (e = c.metadata) ? true : module.premiumType;
  switch (c.type) {
    case Chunk981631.kVF.LURKING_GUILD:
      return (0, Chunk54381.jsx)(Chunk859428.Z, {});
    case Chunk981631.kVF.PENDING_MEMBER:
      return (0, Chunk54381.jsx)(Chunk574650.Z, {});
    case Chunk981631.kVF.INVITED_TO_SPEAK:
      return (0, Chunk54381.jsx)(Chunk852923.Z, {});
    case Chunk981631.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eX
      } = c.metadata;
      return (0, Chunk54381.jsx)(Chunk506357.Z, {
        onDismiss: () => eY(eX)
      });
    case Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eQ
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(eQ),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t["08KQ1P"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN32_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eJ
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(eJ),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t["8Je+dX"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e$
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(e$),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t.q8VPLo, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MACOS_19_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.GENERIC:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case Chunk981631.kVF.LAUNCH_GAME_FAILURE:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case Chunk981631.kVF.VOICE_DISABLED:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk195500.Z.clearRemoteDisconnectVoiceChannelId(), eY()
          },
          noticeType: c.type
        }), Chunk388032.intl.string(Chunk388032.t.bOQ3jV), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getRemoteDisconnectVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pv)
        })]
      });
    case Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk195500.Z.clearLastSessionVoiceChannelId(), eY()
          },
          noticeType: c.type
        }), Chunk388032.intl.string(Chunk388032.t.jY2lUA), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getLastSessionVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pv)
        })]
      });
    case Chunk981631.kVF.SPOTIFY_AUTO_PAUSED:
      let e0 = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY);
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), (0, Chunk54381.jsx)("img", {
          alt: "",
          className: Chunk627881.platformIcon,
          src: e0.icon.whiteSVG
        }), Chunk388032.intl.string(Chunk388032.t.D8Cp76), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.VOICE_AND_VIDEO_PANEL, {
            section: Chunk981631.oAB.VOICE
          }),
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.NiTd0e)
        }), (0, Chunk54381.jsx)(Chunk481060.Anchor, {
          className: Chunk627881.textLinkSmall,
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t.CiqAIU)
        })]
      });
    case Chunk981631.kVF.UNCLAIMED_ACCOUNT:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["f+Zaol"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: c.type,
          onClick: () => Chunk579806 && null != Chunk209739 ? (0, Chunk305325.hk)(Chunk209739) : Chunk391650.j(),
          children: Chunk388032.intl.string(Chunk388032.t.fiNVin)
        })]
      });
    case Chunk981631.kVF.UNVERIFIED_ACCOUNT:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["3sWbf3"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: c.type,
          onClick: () => {
            Chunk893776.Z.verifyResend(), Chunk668781.Z.show({
              title: Chunk388032.intl.string(Chunk388032.t.LykQYk),
              body: Chunk388032.intl.format(Chunk388032.t.azKEPy, {
                email: null == Chunk913527 ? true : Chunk913527.email
              }),
              cancelText: Chunk388032.intl.string(Chunk388032.t.Vm8akB),
              onCancel: Chunk391650.j
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.WnX4J2)
        })]
      });
    case Chunk981631.kVF.SCHEDULED_MAINTENANCE:
      if (null == c.metadata) return null;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk205355.Z.ackScheduledMaintenance(),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t["yb96S+"], c.metadata), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS, "/incidents/").concat(c.metadata.id),
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.NO_INPUT_DETECTED:
      if ((0, Chunk647085.q)({
          location: "AppNotice.trueTriggerPoint"
        }), (0, Chunk358085.isWindows)() && Chunk100527) {
        if (true === ew) return (0, Chunk54381.jsx)(eB, {
          deviceGuid: Chunk626135,
          noticeType: c.type
        });
        else if (0 === ej) return (0, Chunk54381.jsx)(eZ, {
          deviceGuid: Chunk626135,
          noticeType: c.type
        })
      }
      if (!Chunk131951.Z.supports(Chunk65154.AN.LOOPBACK)) return (0, Chunk54381.jsx)(eF, {
        noticeType: c.type
      });
      return (0, Chunk54381.jsx)(eV, {
        noticeType: c.type
      });
    case Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED:
      return (0, Chunk54381.jsx)(ek, {
        noticeType: c.type
      });
    case Chunk981631.kVF.HARDWARE_MUTE:
      if (null == c.metadata) return null;
      let {
        vendor: e1, model: e3
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.format(Chunk388032.t.qoDex7, {
          vendorName: e1.name,
          modelName: e3.name
        }), (0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: c.type,
          onClick: () => {
            Chunk846027.Z.setEnableHardwareMuteNotice(false), eY()
          }
        }), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: e3.url,
          target: "_blank",
          rel: "noreferrer noopener",
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t["Yl/Riu"])
        })]
      });
    case Chunk981631.kVF.STREAMER_MODE:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.STREAMER_MODE,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.STREAMER_MODE
        }), Chunk388032.intl.string(Chunk388032.t.iEgBXp), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => Chunk223245.Z.setEnabled(false),
          noticeType: Chunk981631.kVF.STREAMER_MODE,
          children: Chunk388032.intl.string(Chunk388032.t.R9GHya)
        })]
      });
    case Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == c.metadata) return null;
      let {
        skuId: e2, applicationId: e4
      } = c.metadata, e5 = Chunk55563.Z.get(e2), e8 = Chunk812206.Z.getApplication(e4);
      if (null == e5 || null == e8) return null;
      let e6 = {
        page: Chunk981631.ZY5.IN_APP
      };
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk117266.Z(e5.id),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk627881.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t["g3MU/+"], {
          applicationName: e8.name,
          skuName: e5.name
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, Chunk72924.S)({
            applicationId: e8.id,
            skuId: e5.id,
            openPremiumPaymentModal: () => {
              (0, Chunk963249.Z)({
                initialPlanId: null,
                subscriptionTier: Chunk474936.Si.TIER_2,
                analyticsLocations: Chunk254854,
                analyticsObject: e6
              })
            },
            analyticsLocations: Chunk254854,
            analyticsLocationObject: e6,
            context: __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP
          }).then(() => Chunk117266.Z(e5.id)),
          children: Chunk388032.intl.string(Chunk388032.t.KEwPYx)
        })]
      });
    case Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == c.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = c.metadata, n = Chunk55563.Z.get(module), i = Chunk812206.Z.getApplication(exports);
      if (null == require || null == Chunk473749) return null;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk627881.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t.LquIKC, {
          applicationName: Chunk473749.name,
          skuName: require.name
        }), (0, Chunk54381.jsx)(Chunk481060.EyT, {
          children: (0, Chunk54381.jsx)(Chunk319498.rU, {
            onClick: () => eY(),
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
      let e = c.metadata;
      if (null == module) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: a,
        embedded: o,
        id: s
      } = module;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.CUSTOM,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.SURVEY,
          onClick: () => {
            (0, Chunk491428.hZ)(exports, true)
          }
        }), require, (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SURVEY,
          onClick: () => {
            o && Chunk458725 ? (0, Chunk126916.q)(Chunk319498) : window.open(Chunk913527, "_blank"), (0, Chunk491428.hZ)(exports, false)
          },
          children: Chunk473749
        })]
      })
    }
    case Chunk981631.kVF.CORRUPT_INSTALLATION:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.string(Chunk388032.t["ugxmk/"]), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CORRUPT_INSTALLATION),
          target: "_blank",
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t["6ik4Xk"])
        })]
      });
    case Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), Chunk388032.intl.string(Chunk388032.t.wVjKGi), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
              return t => (0, r.jsx)(e, eL({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["1WjMbC"])
        })]
      });
    case Chunk981631.kVF.DISPATCH_ERROR:
      if (null == c.metadata) return null;
      let {
        error: e7
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.DISPATCH_ERROR
        }), null == e7 ? true : e7.displayMessage, (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DISPATCH_ERROR,
          onClick: () => (0, Chunk481060.ZDy)(async () => {
            let {
              default: e
            } = await require.e("20212").then(require.bind(require, 915194));
            return t => (0, r.jsx)(e, eL({}, t))
          }),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == c.metadata) return null;
      let {
        progress: e9, total: te, name: tt
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: [null != tt ? Chunk388032.intl.formatToPlainString(Chunk388032.t["pHj+z4"], {
            name: "".concat(tt),
            progress: e9,
            total: te
          }) : Chunk388032.intl.formatToPlainString(Chunk388032.t["lHZn+A"], {
            progress: e9,
            total: te
          }), (0, Chunk54381.jsx)(Chunk481060.$jN, {
            type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
            className: Chunk627881.ellipsis
          })]
        })]
      });
    case Chunk981631.kVF.APPLICATION_TEST_MODE:
      if (null == c.metadata) return null;
      if (null != Chunk695103.Z.testModeEmbeddedApplicationId) return (0, Chunk54381.jsx)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk54381.jsx)("div", {
            children: Chunk388032.intl.format(Chunk388032.t["1qxVe4"], {
              applicationName: c.metadata.applicationName
            })
          }), (0, Chunk54381.jsx)(Chunk481060.RyX, {
            onClick: Chunk401430.mc,
            noticeType: Chunk981631.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, Chunk54381.jsx)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          align: Chunk600164.Z.Align.CENTER,
          children: [(0, Chunk54381.jsx)("div", {
            children: Chunk388032.intl.format(Chunk388032.t.Fv5HrE, {
              applicationName: c.metadata.applicationName
            })
          }), (0, Chunk54381.jsx)(Chunk69499.Z, {
            dropdownSize: Chunk69499.E.DropdownSizes.SMALL,
            className: Chunk627881.testModeSKUSelector,
            color: Chunk69499.E.Colors.WHITE,
            look: Chunk69499.E.Looks.OUTLINED,
            size: Chunk69499.E.Sizes.MIN,
            onSKUSelect: e => O.yt(e.id, {
              analyticsSource: {
                page: null,
                section: eS.jXE.NOTIFICATION_BAR,
                object: eS.qAy.NAVIGATION_LINK
              }
            }),
            applicationId: c.metadata.applicationId,
            children: Chunk388032.intl.string(Chunk388032.t.Q5ZgpK)
          }), (0, Chunk54381.jsx)(Chunk481060.RyX, {
            onClick: Chunk401430.mc,
            noticeType: Chunk981631.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
    case Chunk981631.kVF.VIEWING_ROLES:
      return (0, Chunk54381.jsx)(Chunk918658.Z, {});
    case Chunk981631.kVF.PREMIUM_UNCANCEL:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: eq === Chunk474936.PremiumTypes.TIER_1 ? Chunk481060.DM8.PREMIUM_TIER_1 : eq === Chunk474936.PremiumTypes.TIER_0 ? Chunk481060.DM8.PREMIUM_TIER_0 : Chunk481060.DM8.PREMIUM_TIER_2,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk627881.premiumIcon
        }), eq === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.fXv4wm, {
          daysLeft: c.metadata.daysLeft
        }) : eq === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZOHZMr, {
          daysLeft: c.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.outyHh, {
          daysLeft: c.metadata.daysLeft
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("84992"), require.e("67569")]).then(require.bind(require, 561623));
              return t => (0, r.jsx)(e, eM(eL({}, t), {
                daysLeft: c.metadata.daysLeft,
                premiumType: eq,
                analyticsSource: "Nag Bar",
                premiumSubscription: c.metadata.premiumSubscription
              }))
            })
          },
          children: eq === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.BkbUPM) : eq === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t.Px978X) : Chunk388032.intl.string(Chunk388032.t.LW5tCE)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: tn, dismissUntil: tr
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: c.type,
          onClick: () => {
            eY(tr)
          }
        }), Chunk388032.intl.format(Chunk388032.t.zxU0Kp, {
          daysPastDue: tn
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eY(tr), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.q8rxeS)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t.LlZaoX), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["Zpd+Yq"])
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t["30YfCr"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.U5pKWA)
        })]
      });
    case Chunk981631.kVF.PREMIUM_MISSING_PAYMENT:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), eq === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.b6QUvf, {
          daysLeft: c.metadata.daysLeft
        }) : eq === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["tURZ/M"], {
          daysLeft: c.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.AyC74I, {
          daysLeft: c.metadata.daysLeft
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: eq === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.lboF5O) : eq === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t["4UPwOq"]) : Chunk388032.intl.string(Chunk388032.t["P/VvGb"])
        })]
      });
    case Chunk981631.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, Chunk54381.jsx)(Chunk665302.h, {
        buttonText: null != (t = c.buttonText) ? exports : Chunk388032.intl.string(Chunk388032.t["/g10LC"]),
        onGoBack: c.callback,
        onDismiss: () => eY(),
        showCloseButton: true
      });
    case Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, Chunk54381.jsx)(Chunk236069.Z, {
        guildId: Chunk209739,
        analyticsLocations: Chunk254854
      });
    case Chunk981631.kVF.QUARANTINED:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.string(Chunk388032.t.DVFJYf), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: Chunk610674.Z,
          target: "_blank",
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.kvHdFN)
        }), (0, Chunk54381.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUARANTINE),
          target: "_blank",
          className: Chunk627881.quarantineLearnMoreLink,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.BLOCKED_BY_PROXY:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [Chunk388032.intl.string(Chunk388032.t.Ugijzi), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS),
          noticeType: c.type,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        }), (0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eY(),
          noticeType: Chunk981631.kVF.BLOCKED_BY_PROXY
        })]
      });
    case Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ti, decisionId: ta
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != Chunk209739 && (0, Chunk36459.T9)(Chunk209739), eY(ti)
          }
        }), Chunk388032.intl.string(Chunk388032.t.B8ruyY), (0, Chunk54381.jsx)(Chunk481060.EyT, {
          onClick: () => {
            null != Chunk209739 && (0, Chunk36459.UE)(Chunk209739, ta, () => {
              eY(ti), (0, Chunk36459.T9)(Chunk209739)
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.oX14El)
        }), null != Chunk209739 ? (0, Chunk54381.jsx)(Chunk481060.EyT, {
          onClick: () => Chunk434404.Z.open(Chunk209739, Chunk981631.pNK.GUILD_AUTOMOD, true, Chunk981631.KsC.AUTOMOD_MENTION_SPAM),
          children: Chunk388032.intl.string(Chunk388032.t["1R7QIx"])
        }) : null]
      });
    case Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            Chunk523255.hZ(), eY()
          }
        }), Chunk388032.intl.string(Chunk388032.t.I1nKfO), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("26860"), require.e("52432")]).then(require.bind(require, 349994));
              return t => (0, r.jsx)(e, eL({}, t))
            }), Chunk523255.hZ(), eY()
          },
          children: Chunk388032.intl.string(Chunk388032.t.l5xYnH)
        })]
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let to = o()().add(5, "days").toDate();
      return (0, Chunk54381.jsx)(Chunk246965.Z, {
        dismissCurrentNotice: () => {
          (0, Chunk266454.Q3)(Chunk933429.m9[Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eY(to)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let ts = o()().add(5, "days").toDate();
      return (0, Chunk54381.jsx)(Chunk535278.Z, {
        dismissCurrentNotice: () => {
          eY(ts)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = c.metadata) ? true : module.streamKey) != null && (0, Chunk22095.nE)(c.metadata.streamKey)
          }
        }), Chunk388032.intl.string(Chunk388032.t.rOx44m)]
      });
    case Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => {
            var e;
            eY(null == (e = c.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR
        }), Chunk388032.intl.string(Chunk388032.t["0klLS7"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => {
            var e;
            (0, Chunk496729.ZZ)(), eY(null == (e = c.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
          children: Chunk388032.intl.string(Chunk388032.t.e4y2VM)
        })]
      });
    case Chunk981631.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, Chunk54381.jsx)(Chunk101879.Z, {});
    case Chunk981631.kVF.SYSTEM_SERVICE_WARNING:
      return (0, Chunk54381.jsx)(Chunk957030.Z, {});
    default:
      return null
  }
});

function eK() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.NOTICE);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk54381.jsx)(eW, {})
  })
}