/** Chunk was on web.js **/
/** chunk id: 369664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eW,
  c: () => eH
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

function eD(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ew(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eD(e, t, n[t])
    })
  }
  return e
}

function eL(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ex(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eM = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, G.hp)(n)) ? true : t.errorCode, o = eR.intl.formatToPlainString(eR.t.ejOT95, {
      errorCode: a
    }), s = (0, r.jsx)(f.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eP.errorCodeNoticeText,
      selectable: true,
      children: o
    });
    return i ? (0, r.jsx)(f.P3F, {
      tag: "span",
      className: eP.errorCodeNoticeClickable,
      onClick: () => i && open(ev.Z.getArticleURL(eT.BhN.AV_ERROR_CODES)),
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
          eH()
        }
      }), eR.intl.string(eR.t.o3zuYz), (0, r.jsx)(eM, {
        error: G.u.NO_INPUT_DEVICES
      }), (0, r.jsx)(f.u3T, {
        href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: eR.intl.string(eR.t.RYKKox)
      })]
    })
  },
  ej = "ms-settings:sound-properties";

function eU(e) {
  return (0, eI.isWindows)() && c().satisfies(null === C.Z || true === C.Z ? true : C.Z.os.release, eS.lb) ? "".concat(ej, "?endpointId=").concat(e) : "ms-settings:sound"
}
let eG = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eH(), (0, ef.b)()
        }
      }), eR.intl.string(eR.t.ppW3ri), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eU(t),
        noticeType: n,
        children: eR.intl.string(eR.t.pxYBbM)
      })]
    })
  },
  eB = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eH(), (0, ef.b)()
        }
      }), eR.intl.string(eR.t.j4gGA4), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eU(t),
        noticeType: n,
        children: eR.intl.string(eR.t.pxYBbM)
      })]
    })
  },
  eZ = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: t,
        onClick: () => {
          eH(), (0, ef.b)()
        }
      }), eR.intl.string(eR.t.nCO9bI), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: eR.intl.string(eR.t.RYKKox)
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
          eH(), (0, ef.b)()
        }
      }), eR.intl.string(eR.t.dNAJ18), (0, r.jsx)(eM, {
        allowClick: true,
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.EyT, {
        onClick: () => {
          (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, {
            section: eT.oAB.VOICE
          })
        },
        children: eR.intl.string(eR.t.I6YlB4)
      })]
    })
  };

function eV(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), eO.default.track(eT.rMx.APP_NOTICE_VIEWED, n)
}

function eH(e) {
  g.Z.dismiss(null != e ? {
    untilAtLeast: o()(e)
  } : true)
}
let eY = Chunk473749.memo(function() {
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
    });
  Chunk473749.useEffect(() => {
    (null == c ? true : c.type) != null && eV(c.type, Chunk209739)
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
  let G = (0, Chunk72897.p6)(Chunk65154.h7.AUDIO_INPUT),
    [ef, eO] = Chunk473749.useState(""),
    [eS, eD] = Chunk473749.useState(null),
    [eL, eM] = Chunk473749.useState(null);
  if (Chunk473749.useEffect(() => {
      if ((0, Chunk358085.isWindows)() && Chunk100527) {
        let i = (0, Chunk992774.zS)();
        if ((null == Chunk458725 ? true : Chunk458725.guid) != null) {
          var e, t, n, r;
          Chunk626135(Chunk458725.guid), null == (t = Chunk473749.getDeviceOSMuted) || null == (e = exports.call(Chunk473749, Chunk458725.guid)) || module.then(e => eD(e)), null == (r = Chunk473749.getDeviceOSVolume) || null == (n = Chunk54381.call(Chunk473749, Chunk458725.guid)) || require.then(e => eM(e))
        }
      }
    }, [Chunk100527, Chunk458725.guid]), null == c) return null;
  let ej = null != c.type ? Chunk933429.zD[c.type] : null,
    eU = null != c.type ? Chunk933429.o[c.type] : null,
    eY = null != c.type ? Chunk933429.nA[c.type] : null,
    eW = Chunk933429.m9[c.type];
  if (null != ej) return (0, Chunk54381.jsx)(Chunk132144.W, {
    dismissibleContent: ej,
    noticeType: c.type
  });
  if (null != eU) return (0, Chunk54381.jsx)(Chunk131130.q, {
    dismissibleContent: eU,
    noticeType: c.type
  });
  if (null != eY) return (0, Chunk54381.jsx)(Chunk196068.c, {
    dismissibleContent: eY
  });
  if (null != eW) return (0, Chunk54381.jsx)(Chunk749277.A, {
    dismissibleContent: eW,
    noticeType: c.type
  });
  let eK = null == (e = c.metadata) ? true : module.premiumType;
  switch (c.type) {
    case Chunk981631.kVF.LURKING_GUILD:
      return (0, Chunk54381.jsx)(Chunk859428.Z, {});
    case Chunk981631.kVF.PENDING_MEMBER:
      return (0, Chunk54381.jsx)(Chunk574650.Z, {});
    case Chunk981631.kVF.INVITED_TO_SPEAK:
      return (0, Chunk54381.jsx)(Chunk852923.Z, {});
    case Chunk981631.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: ez
      } = c.metadata;
      return (0, Chunk54381.jsx)(Chunk506357.Z, {
        onDismiss: () => eH(ez)
      });
    case Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eq
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(eq),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t["08KQ1P"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN32_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eX
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(eX),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t["8Je+dX"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eQ
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(eQ),
          noticeType: c.type
        }), Chunk388032.intl.format(Chunk388032.t.q8VPLo, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MACOS_19_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.GENERIC:
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(),
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
          onClick: () => eH(),
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
            Chunk195500.Z.clearRemoteDisconnectVoiceChannelId(), eH()
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
            Chunk195500.Z.clearLastSessionVoiceChannelId(), eH()
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
      let eJ = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY);
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(),
          noticeType: c.type
        }), (0, Chunk54381.jsx)("img", {
          alt: "",
          className: Chunk627881.platformIcon,
          src: eJ.icon.whiteSVG
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
        if (true === Chunk70722) return (0, Chunk54381.jsx)(eG, {
          deviceGuid: Chunk475808,
          noticeType: c.type
        });
        else if (0 === eL) return (0, Chunk54381.jsx)(eB, {
          deviceGuid: Chunk475808,
          noticeType: c.type
        })
      }
      if (!Chunk131951.Z.supports(Chunk65154.AN.LOOPBACK)) return (0, Chunk54381.jsx)(eZ, {
        noticeType: c.type
      });
      return (0, Chunk54381.jsx)(eF, {
        noticeType: c.type
      });
    case Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED:
      return (0, Chunk54381.jsx)(ek, {
        noticeType: c.type
      });
    case Chunk981631.kVF.HARDWARE_MUTE:
      if (null == c.metadata) return null;
      let {
        vendor: e$, model: e0
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.format(Chunk388032.t.qoDex7, {
          vendorName: e$.name,
          modelName: e0.name
        }), (0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: c.type,
          onClick: () => {
            Chunk846027.Z.setEnableHardwareMuteNotice(false), eH()
          }
        }), (0, Chunk54381.jsx)(Chunk481060.u3T, {
          href: e0.url,
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
          onClick: () => eH(),
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
        skuId: e1, applicationId: e3
      } = c.metadata, e2 = Chunk55563.Z.get(e1), e4 = Chunk812206.Z.getApplication(e3);
      if (null == e2 || null == e4) return null;
      let e5 = {
        page: Chunk981631.ZY5.IN_APP
      };
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk117266.Z(e2.id),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk627881.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t["g3MU/+"], {
          applicationName: e4.name,
          skuName: e2.name
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, Chunk72924.S)({
            applicationId: e4.id,
            skuId: e2.id,
            openPremiumPaymentModal: () => {
              (0, Chunk963249.Z)({
                initialPlanId: null,
                subscriptionTier: Chunk474936.Si.TIER_2,
                analyticsLocations: Chunk254854,
                analyticsObject: e5
              })
            },
            analyticsLocations: Chunk254854,
            analyticsLocationObject: e5,
            context: __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP
          }).then(() => Chunk117266.Z(e2.id)),
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
          onClick: () => eH(),
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
            onClick: () => eH(),
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
            o ? (0, Chunk126916.q)(Chunk319498) : window.open(Chunk913527, "_blank"), (0, Chunk491428.hZ)(exports, false)
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
          onClick: () => eH(),
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), Chunk388032.intl.string(Chunk388032.t.wVjKGi), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
              return t => (0, r.jsx)(e, ew({
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
        error: e8
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(),
          noticeType: Chunk981631.kVF.DISPATCH_ERROR
        }), null == e8 ? true : e8.displayMessage, (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DISPATCH_ERROR,
          onClick: () => (0, Chunk481060.ZDy)(async () => {
            let {
              default: e
            } = await require.e("20212").then(require.bind(require, 915194));
            return t => (0, r.jsx)(e, ew({}, t))
          }),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAZ)
        })]
      });
    case Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == c.metadata) return null;
      let {
        progress: e6, total: e7, name: e9
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          onClick: () => eH(),
          noticeType: Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: [null != e9 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["pHj+z4"], {
            name: "".concat(e9),
            progress: e6,
            total: e7
          }) : Chunk388032.intl.formatToPlainString(Chunk388032.t["lHZn+A"], {
            progress: e6,
            total: e7
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
                section: eT.jXE.NOTIFICATION_BAR,
                object: eT.qAy.NAVIGATION_LINK
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
        color: eK === Chunk474936.PremiumTypes.TIER_1 ? Chunk481060.DM8.PREMIUM_TIER_1 : eK === Chunk474936.PremiumTypes.TIER_0 ? Chunk481060.DM8.PREMIUM_TIER_0 : Chunk481060.DM8.PREMIUM_TIER_2,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), (0, Chunk54381.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk627881.premiumIcon
        }), eK === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.fXv4wm, {
          daysLeft: c.metadata.daysLeft
        }) : eK === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZOHZMr, {
          daysLeft: c.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.outyHh, {
          daysLeft: c.metadata.daysLeft
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("84992"), require.e("67569")]).then(require.bind(require, 561623));
              return t => (0, r.jsx)(e, ex(ew({}, t), {
                daysLeft: c.metadata.daysLeft,
                premiumType: eK,
                analyticsSource: "Nag Bar",
                premiumSubscription: c.metadata.premiumSubscription
              }))
            })
          },
          children: eK === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.BkbUPM) : eK === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t.Px978X) : Chunk388032.intl.string(Chunk388032.t.LW5tCE)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: te, dismissUntil: tt
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: c.type,
          onClick: () => {
            eH(tt)
          }
        }), Chunk388032.intl.format(Chunk388032.t.zxU0Kp, {
          daysPastDue: te
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eH(tt), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
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
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t.LlZaoX), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
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
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t["30YfCr"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
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
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), eK === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.b6QUvf, {
          daysLeft: c.metadata.daysLeft
        }) : eK === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["tURZ/M"], {
          daysLeft: c.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.AyC74I, {
          daysLeft: c.metadata.daysLeft
        }), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eH(null == (t = c.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS
            })
          },
          children: eK === Chunk474936.PremiumTypes.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.lboF5O) : eK === Chunk474936.PremiumTypes.TIER_0 ? Chunk388032.intl.string(Chunk388032.t["4UPwOq"]) : Chunk388032.intl.string(Chunk388032.t["P/VvGb"])
        })]
      });
    case Chunk981631.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, Chunk54381.jsx)(Chunk665302.h, {
        buttonText: null != (t = c.buttonText) ? exports : Chunk388032.intl.string(Chunk388032.t["/g10LC"]),
        onGoBack: c.callback,
        onDismiss: () => eH(),
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
          onClick: () => eH(),
          noticeType: Chunk981631.kVF.BLOCKED_BY_PROXY
        })]
      });
    case Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: tn, decisionId: tr
      } = c.metadata;
      return (0, Chunk54381.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk54381.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != Chunk209739 && (0, Chunk36459.T9)(Chunk209739), eH(tn)
          }
        }), Chunk388032.intl.string(Chunk388032.t.B8ruyY), (0, Chunk54381.jsx)(Chunk481060.EyT, {
          onClick: () => {
            null != Chunk209739 && (0, Chunk36459.UE)(Chunk209739, tr, () => {
              eH(tn), (0, Chunk36459.T9)(Chunk209739)
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
            Chunk523255.hZ(), eH()
          }
        }), Chunk388032.intl.string(Chunk388032.t.I1nKfO), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("26860"), require.e("52432")]).then(require.bind(require, 349994));
              return t => (0, r.jsx)(e, ew({}, t))
            }), Chunk523255.hZ(), eH()
          },
          children: Chunk388032.intl.string(Chunk388032.t.l5xYnH)
        })]
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let ti = o()().add(5, "days").toDate();
      return (0, Chunk54381.jsx)(Chunk246965.Z, {
        dismissCurrentNotice: () => {
          (0, Chunk266454.Q3)(Chunk933429.m9[Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eH(ti)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let ta = o()().add(5, "days").toDate();
      return (0, Chunk54381.jsx)(Chunk535278.Z, {
        dismissCurrentNotice: () => {
          eH(ta)
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
            eH(null == (e = c.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR
        }), Chunk388032.intl.string(Chunk388032.t["0klLS7"]), (0, Chunk54381.jsx)(Chunk481060.NoS, {
          onClick: () => {
            var e;
            (0, Chunk496729.ZZ)(), eH(null == (e = c.metadata) ? true : module.dismissUntil)
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

function eW() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.NOTICE);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk54381.jsx)(eY, {})
  })
}