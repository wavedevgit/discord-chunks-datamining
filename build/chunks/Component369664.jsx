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
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js"),
  Chunk474936 = require("./474936.js"),
  Chunk610674 = require("./610674.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710930 = require("./710930.js");

function eD(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ex(e) {
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

function ej(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eL(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eM = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, G.hp)(n)) ? true : t.errorCode, o = ew.intl.formatToPlainString(ew.t.ejOT95, {
      errorCode: a
    }), s = (0, r.jsx)(f.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eR.errorCodeNoticeText,
      selectable: true,
      children: o
    });
    return i ? (0, r.jsx)(f.P3F, {
      tag: "span",
      className: eR.errorCodeNoticeClickable,
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
          eY()
        }
      }), ew.intl.string(ew.t.o3zuYz), (0, r.jsx)(eM, {
        error: G.u.NO_INPUT_DEVICES
      }), (0, r.jsx)(f.u3T, {
        href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: ew.intl.string(ew.t.RYKKox)
      })]
    })
  },
  eU = "ms-settings:sound-properties";

function eG(e) {
  return (0, eS.isWindows)() && c().satisfies(null === A.Z || true === A.Z ? true : A.Z.os.release, eC.lb) ? "".concat(eU, "?endpointId=").concat(e) : "ms-settings:sound"
}
let eZ = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eY(), (0, ef.b)()
        }
      }), ew.intl.string(ew.t.ppW3ri), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eG(t),
        noticeType: n,
        children: ew.intl.string(ew.t.pxYBbM)
      })]
    })
  },
  eF = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: n,
        onClick: () => {
          eY(), (0, ef.b)()
        }
      }), ew.intl.string(ew.t.j4gGA4), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: eG(t),
        noticeType: n,
        children: ew.intl.string(ew.t.pxYBbM)
      })]
    })
  },
  eB = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.qXd, {
      color: f.DM8.DANGER,
      children: [(0, r.jsx)(f.RyX, {
        noticeType: t,
        onClick: () => {
          eY(), (0, ef.b)()
        }
      }), ew.intl.string(ew.t.nCO9bI), (0, r.jsx)(eM, {
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.u3T, {
        href: ev.Z.getArticleURL(eT.BhN.NO_INPUT_DETECTED),
        noticeType: t,
        children: ew.intl.string(ew.t.RYKKox)
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
          eY(), (0, ef.b)()
        }
      }), ew.intl.string(ew.t.dNAJ18), (0, r.jsx)(eM, {
        allowClick: true,
        error: G.u.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.EyT, {
        onClick: () => {
          (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, {
            section: eT.oAB.VOICE
          })
        },
        children: ew.intl.string(ew.t.I6YlB4)
      })]
    })
  };

function eH(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), eO.default.track(eT.rMx.APP_NOTICE_VIEWED, n)
}

function eY(e) {
  g.Z.dismiss(null != e ? {
    untilAtLeast: o()(e)
  } : true)
}
let eW = Chunk473749.memo(function() {
  var e, t;
  let a = (0, u.e7)([eg.default], () => eg.default.getCurrentUser()),
    l = (0, u.e7)([em.Z], () => em.Z.getGuildId()),
    c = (0, u.e7)([ey.ZP], () => ey.ZP.getNotice()),
    {
      analyticsLocations: g
    } = (0, w.ZP)(),
    A = (0, W.J)(l),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: P
    } = (0, J.U)({
      location: "AppNotice"
    });
  i.useEffect(() => {
    (null == c ? true : c.type) != null && eH(c.type, l)
  }, [null == c ? true : c.type, l]), i.useEffect(() => {
    if (null != c && c.type === eT.kVF.SURVEY && null != c.metadata) {
      let {
        metadata: e
      } = c, t = F.Z.getUserExperimentDescriptor(e.id);
      null != t && (0, Z.W9)(e.id, t), (async () => {
        var e, t;
        (null == (e = c.metadata) ? true : e.id) != null && await (0, S.g8)(null == (t = c.metadata) ? true : t.id)
      })()
    }
  }, [c]);
  let G = (0, $.p6)(eP.h7.AUDIO_INPUT),
    [ef, eO] = i.useState(""),
    [eC, eD] = i.useState(null),
    [eL, eM] = i.useState(null);
  if (i.useEffect(() => {
      if ((0, eS.isWindows)() && P) {
        let e = null == G ? true : G.guid;
        null != e && (eO(e), eI.ZP.ensureModule("discord_voice").then(() => {
          try {
            var t, n, r, i;
            let a = (0, d.zS)();
            null == a || null == (n = a.getDeviceOSMuted) || null == (t = n.call(a, e)) || t.then(e => eD(e)), null == a || null == (i = a.getDeviceOSVolume) || null == (r = i.call(a, e)) || r.then(e => eM(e))
          } catch (e) {}
        }).catch())
      }
    }, [P, null == G ? true : G.guid]), null == c) return null;
  let eU = null != c.type ? ey.zD[c.type] : null,
    eG = null != c.type ? ey.o[c.type] : null,
    eW = null != c.type ? ey.nA[c.type] : null,
    eK = ey.m9[c.type];
  if (null != eU) return (0, r.jsx)(k.W, {
    dismissibleContent: eU,
    noticeType: c.type
  });
  if (null != eG) return (0, r.jsx)(U.q, {
    dismissibleContent: eG,
    noticeType: c.type
  });
  if (null != eW) return (0, r.jsx)(M.c, {
    dismissibleContent: eW
  });
  if (null != eK) return (0, r.jsx)(j.A, {
    dismissibleContent: eK,
    noticeType: c.type
  });
  let ez = null == (e = c.metadata) ? true : e.premiumType;
  switch (c.type) {
    case eT.kVF.LURKING_GUILD:
      return (0, r.jsx)(X.Z, {});
    case eT.kVF.PENDING_MEMBER:
      return (0, r.jsx)(K.Z, {});
    case eT.kVF.INVITED_TO_SPEAK:
      return (0, r.jsx)(el.Z, {});
    case eT.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eq
      } = c.metadata;
      return (0, r.jsx)(B.Z, {
        onDismiss: () => eY(eq)
      });
    case eT.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eQ
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(eQ),
          noticeType: c.type
        }), ew.intl.format(ew.t["08KQ1P"], {
          helpCenterLink: ev.Z.getArticleURL(eT.BhN.WIN32_DEPRECATE)
        })]
      });
    case eT.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eX
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(eX),
          noticeType: c.type
        }), ew.intl.format(ew.t["8Je+dX"], {
          helpCenterLink: ev.Z.getArticleURL(eT.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case eT.kVF.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eJ
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(eJ),
          noticeType: c.type
        }), ew.intl.format(ew.t.q8VPLo, {
          helpCenterLink: ev.Z.getArticleURL(eT.BhN.MACOS_19_DEPRECATE)
        })]
      });
    case eT.kVF.GENERIC:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.NoS, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eT.kVF.LAUNCH_GAME_FAILURE:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.NoS, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eT.kVF.VOICE_DISABLED:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => {
            E.Z.clearRemoteDisconnectVoiceChannelId(), eY()
          },
          noticeType: c.type
        }), ew.intl.string(ew.t.bOQ3jV), (0, r.jsx)(f.NoS, {
          onClick: () => {
            let e = eh.Z.getRemoteDisconnectVoiceChannelId();
            null != e && null != ep.Z.getChannel(e) && b.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: ew.intl.string(ew.t.vD60Pv)
        })]
      });
    case eT.kVF.VOICE_CONNECTED_LAST_SESSION:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => {
            E.Z.clearLastSessionVoiceChannelId(), eY()
          },
          noticeType: c.type
        }), ew.intl.string(ew.t.jY2lUA), (0, r.jsx)(f.NoS, {
          onClick: () => {
            let e = eh.Z.getLastSessionVoiceChannelId();
            null != e && null != ep.Z.getChannel(e) && b.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: ew.intl.string(ew.t.vD60Pv)
        })]
      });
    case eT.kVF.SPOTIFY_AUTO_PAUSED:
      let e$ = N.Z.get(eT.ABu.SPOTIFY);
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: c.type
        }), (0, r.jsx)("img", {
          alt: "",
          className: eR.platformIcon,
          src: e$.icon.whiteSVG
        }), ew.intl.string(ew.t.D8Cp76), (0, r.jsx)(f.NoS, {
          onClick: () => (0, ed.openUserSettings)(eu.n.VOICE_AND_VIDEO_PANEL, {
            section: eT.oAB.VOICE
          }),
          noticeType: c.type,
          children: ew.intl.string(ew.t.NiTd0e)
        }), (0, r.jsx)(f.eee, {
          className: eR.textLinkSmall,
          href: ev.Z.getArticleURL(eT.BhN.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: ew.intl.string(ew.t.CiqAIU)
        })]
      });
    case eT.kVF.UNCLAIMED_ACCOUNT:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [ew.intl.string(ew.t["f+Zaol"]), (0, r.jsx)(f.NoS, {
          noticeType: c.type,
          onClick: () => A && null != l ? (0, Y.hk)(l) : D.j(),
          children: ew.intl.string(ew.t.fiNVin)
        })]
      });
    case eT.kVF.UNVERIFIED_ACCOUNT:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [ew.intl.string(ew.t["3sWbf3"]), (0, r.jsx)(f.NoS, {
          noticeType: c.type,
          onClick: () => {
            h.Z.verifyResend(), p.Z.show({
              title: ew.intl.string(ew.t.LykQYk),
              body: ew.intl.format(ew.t.azKEPy, {
                email: null == a ? true : a.email
              }),
              cancelText: ew.intl.string(ew.t.Vm8akB),
              onCancel: D.j
            })
          },
          children: ew.intl.string(ew.t.WnX4J2)
        })]
      });
    case eT.kVF.SCHEDULED_MAINTENANCE:
      if (null == c.metadata) return null;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => y.Z.ackScheduledMaintenance(),
          noticeType: c.type
        }), ew.intl.format(ew.t["yb96S+"], c.metadata), (0, r.jsx)(f.u3T, {
          href: "".concat(eT.yXt.STATUS, "/incidents/").concat(c.metadata.id),
          noticeType: c.type,
          children: ew.intl.string(ew.t.hvVgAZ)
        })]
      });
    case eT.kVF.NO_INPUT_DETECTED:
      if ((0, J.q)({
          location: "AppNotice.trueTriggerPoint"
        }), (0, eS.isWindows)() && P) {
        if (true === eC) return (0, r.jsx)(eZ, {
          deviceGuid: ef,
          noticeType: c.type
        });
        else if (0 === eL) return (0, r.jsx)(eF, {
          deviceGuid: ef,
          noticeType: c.type
        })
      }
      if (!e_.Z.supports(eP.AN.LOOPBACK)) return (0, r.jsx)(eB, {
        noticeType: c.type
      });
      return (0, r.jsx)(eV, {
        noticeType: c.type
      });
    case eT.kVF.NO_INPUT_DEVICES_DETECTED:
      return (0, r.jsx)(ek, {
        noticeType: c.type
      });
    case eT.kVF.HARDWARE_MUTE:
      if (null == c.metadata) return null;
      let {
        vendor: e0, model: e1
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [ew.intl.format(ew.t.qoDex7, {
          vendorName: e0.name,
          modelName: e1.name
        }), (0, r.jsx)(f.RyX, {
          noticeType: c.type,
          onClick: () => {
            _.Z.setEnableHardwareMuteNotice(false), eY()
          }
        }), (0, r.jsx)(f.u3T, {
          href: e1.url,
          target: "_blank",
          rel: "noreferrer noopener",
          noticeType: c.type,
          children: ew.intl.string(ew.t["Yl/Riu"])
        })]
      });
    case eT.kVF.STREAMER_MODE:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.STREAMER_MODE,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.STREAMER_MODE
        }), ew.intl.string(ew.t.iEgBXp), (0, r.jsx)(f.NoS, {
          onClick: () => v.Z.setEnabled(false),
          noticeType: eT.kVF.STREAMER_MODE,
          children: ew.intl.string(ew.t.R9GHya)
        })]
      });
    case eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == c.metadata) return null;
      let {
        skuId: e3, applicationId: e2
      } = c.metadata, e4 = eE.Z.get(e3), e5 = R.Z.getApplication(e2);
      if (null == e4 || null == e5) return null;
      let e8 = {
        page: eT.ZY5.IN_APP
      };
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => m.Z(e4.id),
          noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: eR.premiumIcon
        }), ew.intl.format(ew.t["g3MU/+"], {
          applicationName: e5.name,
          skuName: e4.name
        }), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, T.S)({
            applicationId: e5.id,
            skuId: e4.id,
            openPremiumPaymentModal: () => {
              (0, ee.Z)({
                initialPlanId: null,
                subscriptionTier: eA.Si.TIER_2,
                analyticsLocations: g,
                analyticsObject: e8
              })
            },
            analyticsLocations: g,
            analyticsLocationObject: e8,
            context: __OVERLAY__ ? eT.IlC.OVERLAY : eT.IlC.APP
          }).then(() => m.Z(e4.id)),
          children: ew.intl.string(ew.t.KEwPYx)
        })]
      });
    case eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == c.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = c.metadata, n = eE.Z.get(e), i = R.Z.getApplication(t);
      if (null == n || null == i) return null;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: eR.premiumIcon
        }), ew.intl.format(ew.t.LquIKC, {
          applicationName: i.name,
          skuName: n.name
        }), (0, r.jsx)(f.EyT, {
          children: (0, r.jsx)(s.rU, {
            onClick: () => eY(),
            to: {
              pathname: eT.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: false
              }
            },
            children: ew.intl.string(ew.t.hvVgAZ)
          })
        })]
      })
    }
    case eT.kVF.SURVEY: {
      let e = c.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: a,
        embedded: o,
        id: s
      } = e;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.CUSTOM,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.SURVEY,
          onClick: () => {
            (0, S.hZ)(t, true)
          }
        }), n, (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.SURVEY,
          onClick: () => {
            o ? (0, er.q)(s) : window.open(a, "_blank"), (0, S.hZ)(t, false)
          },
          children: i
        })]
      })
    }
    case eT.kVF.CORRUPT_INSTALLATION:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [ew.intl.string(ew.t["ugxmk/"]), (0, r.jsx)(f.u3T, {
          href: ev.Z.getArticleURL(eT.BhN.CORRUPT_INSTALLATION),
          target: "_blank",
          noticeType: c.type,
          children: ew.intl.string(ew.t["6ik4Xk"])
        })]
      });
    case eT.kVF.VIDEO_UNSUPPORTED_BROWSER:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), ew.intl.string(ew.t.wVjKGi), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, f.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
              return t => (0, r.jsx)(e, ex({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: ew.intl.string(ew.t["1WjMbC"])
        })]
      });
    case eT.kVF.DISPATCH_ERROR:
      if (null == c.metadata) return null;
      let {
        error: e6
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.DISPATCH_ERROR
        }), null == e6 ? true : e6.displayMessage, (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.DISPATCH_ERROR,
          onClick: () => (0, f.ZDy)(async () => {
            let {
              default: e
            } = await n.e("20212").then(n.bind(n, 915194));
            return t => (0, r.jsx)(e, ex({}, t))
          }),
          children: ew.intl.string(ew.t.hvVgAZ)
        })]
      });
    case eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == c.metadata) return null;
      let {
        progress: e7, total: e9, name: te
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DEFAULT,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, r.jsxs)(x.Z, {
          justify: x.Z.Justify.CENTER,
          children: [null != te ? ew.intl.formatToPlainString(ew.t["pHj+z4"], {
            name: "".concat(te),
            progress: e7,
            total: e9
          }) : ew.intl.formatToPlainString(ew.t["lHZn+A"], {
            progress: e7,
            total: e9
          }), (0, r.jsx)(f.$jN, {
            type: f.$jN.Type.PULSING_ELLIPSIS,
            className: eR.ellipsis
          })]
        })]
      });
    case eT.kVF.APPLICATION_TEST_MODE:
      if (null == c.metadata) return null;
      if (null != eb.Z.testModeEmbeddedApplicationId) return (0, r.jsx)(f.qXd, {
        color: f.DM8.WARNING,
        children: (0, r.jsxs)(x.Z, {
          justify: x.Z.Justify.CENTER,
          align: x.Z.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: ew.intl.format(ew.t["1qxVe4"], {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(f.RyX, {
            onClick: I.mc,
            noticeType: eT.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, r.jsx)(f.qXd, {
        color: f.DM8.WARNING,
        children: (0, r.jsxs)(x.Z, {
          justify: x.Z.Justify.CENTER,
          align: x.Z.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: ew.intl.format(ew.t.Fv5HrE, {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(C.Z, {
            dropdownSize: C.E.DropdownSizes.SMALL,
            className: eR.testModeSKUSelector,
            color: C.E.Colors.WHITE,
            look: C.E.Looks.OUTLINED,
            size: C.E.Sizes.MIN,
            onSKUSelect: e => O.yt(e.id, {
              analyticsSource: {
                page: null,
                section: eT.jXE.NOTIFICATION_BAR,
                object: eT.qAy.NAVIGATION_LINK
              }
            }),
            applicationId: c.metadata.applicationId,
            children: ew.intl.string(ew.t.Q5ZgpK)
          }), (0, r.jsx)(f.RyX, {
            onClick: I.mc,
            noticeType: eT.kVF.APPLICATION_TEST_MODE
          })]
        })
      });
    case eT.kVF.VIEWING_ROLES:
      return (0, r.jsx)(Q.Z, {});
    case eT.kVF.PREMIUM_UNCANCEL:
      return (0, r.jsxs)(f.qXd, {
        color: ez === eA.PremiumTypes.TIER_1 ? f.DM8.PREMIUM_TIER_1 : ez === eA.PremiumTypes.TIER_0 ? f.DM8.PREMIUM_TIER_0 : f.DM8.PREMIUM_TIER_2,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: eR.premiumIcon
        }), ez === eA.PremiumTypes.TIER_1 ? ew.intl.formatToPlainString(ew.t.fXv4wm, {
          daysLeft: c.metadata.daysLeft
        }) : ez === eA.PremiumTypes.TIER_0 ? ew.intl.formatToPlainString(ew.t.ZOHZMr, {
          daysLeft: c.metadata.daysLeft
        }) : ew.intl.formatToPlainString(ew.t.outyHh, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, f.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("84992"), n.e("91723")]).then(n.bind(n, 561623));
              return t => (0, r.jsx)(e, ej(ex({}, t), {
                daysLeft: c.metadata.daysLeft,
                premiumType: ez,
                analyticsSource: "Nag Bar",
                premiumSubscription: c.metadata.premiumSubscription
              }))
            })
          },
          children: ez === eA.PremiumTypes.TIER_1 ? ew.intl.string(ew.t.BkbUPM) : ez === eA.PremiumTypes.TIER_0 ? ew.intl.string(ew.t.Px978X) : ew.intl.string(ew.t.LW5tCE)
        })]
      });
    case eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: tt, dismissUntil: tn
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: c.type,
          onClick: () => {
            eY(tn)
          }
        }), ew.intl.format(ew.t.zxU0Kp, {
          daysPastDue: tt
        }), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eY(tn), (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, {
              section: eT.oAB.SUBSCRIPTIONS
            })
          },
          children: ew.intl.string(ew.t.q8rxeS)
        })]
      });
    case eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), ew.intl.string(ew.t.LlZaoX), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, {
              section: eT.oAB.SUBSCRIPTIONS
            })
          },
          children: ew.intl.string(ew.t["Zpd+Yq"])
        })]
      });
    case eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), ew.intl.string(ew.t["30YfCr"]), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, {
              section: eT.oAB.SUBSCRIPTIONS
            })
          },
          children: ew.intl.string(ew.t.U5pKWA)
        })]
      });
    case eT.kVF.PREMIUM_MISSING_PAYMENT:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), ez === eA.PremiumTypes.TIER_1 ? ew.intl.formatToPlainString(ew.t.b6QUvf, {
          daysLeft: c.metadata.daysLeft
        }) : ez === eA.PremiumTypes.TIER_0 ? ew.intl.formatToPlainString(ew.t["tURZ/M"], {
          daysLeft: c.metadata.daysLeft
        }) : ew.intl.formatToPlainString(ew.t.AyC74I, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eY(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.n.SUBSCRIPTIONS_PANEL, {
              section: eT.oAB.SUBSCRIPTIONS
            })
          },
          children: ez === eA.PremiumTypes.TIER_1 ? ew.intl.string(ew.t.lboF5O) : ez === eA.PremiumTypes.TIER_0 ? ew.intl.string(ew.t["4UPwOq"]) : ew.intl.string(ew.t["P/VvGb"])
        })]
      });
    case eT.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, r.jsx)(z.h, {
        buttonText: null != (t = c.buttonText) ? t : ew.intl.string(ew.t["/g10LC"]),
        onGoBack: c.callback,
        onDismiss: () => eY(),
        showCloseButton: true
      });
    case eT.kVF.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, r.jsx)(H.Z, {
        guildId: l,
        analyticsLocations: g
      });
    case eT.kVF.QUARANTINED:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [ew.intl.string(ew.t.DVFJYf), (0, r.jsx)(f.u3T, {
          href: eN.Z,
          target: "_blank",
          noticeType: c.type,
          children: ew.intl.string(ew.t.kvHdFN)
        }), (0, r.jsx)(f.eee, {
          href: ev.Z.getArticleURL(eT.BhN.QUARANTINE),
          target: "_blank",
          className: eR.quarantineLearnMoreLink,
          children: ew.intl.string(ew.t.hvVgAZ)
        })]
      });
    case eT.kVF.BLOCKED_BY_PROXY:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [ew.intl.string(ew.t.Ugijzi), (0, r.jsx)(f.u3T, {
          href: "".concat(eT.yXt.STATUS),
          noticeType: c.type,
          children: ew.intl.string(ew.t.hvVgAZ)
        }), (0, r.jsx)(f.RyX, {
          onClick: () => eY(),
          noticeType: eT.kVF.BLOCKED_BY_PROXY
        })]
      });
    case eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: tr, decisionId: ti
      } = c.metadata;
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.WARNING,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != l && (0, V.T9)(l), eY(tr)
          }
        }), ew.intl.string(ew.t.B8ruyY), (0, r.jsx)(f.EyT, {
          onClick: () => {
            null != l && (0, V.UE)(l, ti, () => {
              eY(tr), (0, V.T9)(l)
            })
          },
          children: ew.intl.string(ew.t.oX14El)
        }), null != l ? (0, r.jsx)(f.EyT, {
          onClick: () => q.Z.open(l, eT.pNK.GUILD_AUTOMOD, true, eT.KsC.AUTOMOD_MENTION_SPAM),
          children: ew.intl.string(ew.t["1R7QIx"])
        }) : null]
      });
    case eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.BRAND,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            ea.hZ(), eY()
          }
        }), ew.intl.string(ew.t.I1nKfO), (0, r.jsx)(f.NoS, {
          noticeType: eT.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, f.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("26860"), n.e("52432")]).then(n.bind(n, 349994));
              return t => (0, r.jsx)(e, ex({}, t))
            }), ea.hZ(), eY()
          },
          children: ew.intl.string(ew.t.l5xYnH)
        })]
      });
    case eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let ta = o()().add(5, "days").toDate();
      return (0, r.jsx)(en.Z, {
        dismissCurrentNotice: () => {
          (0, L.Q3)(ey.m9[eT.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eY(ta)
        },
        subscriptionTier: eA.Si.TIER_2
      });
    case eT.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let to = o()().add(5, "days").toDate();
      return (0, r.jsx)(et.Z, {
        dismissCurrentNotice: () => {
          eY(to)
        },
        subscriptionTier: eA.Si.TIER_2
      });
    case eT.kVF.QUESTS_PROGRESS_INTERRUPTION:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.DANGER,
        children: [(0, r.jsx)(f.RyX, {
          noticeType: eT.kVF.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = c.metadata) ? true : e.streamKey) != null && (0, ei.nE)(c.metadata.streamKey)
          }
        }), ew.intl.string(ew.t.rOx44m)]
      });
    case eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, r.jsxs)(f.qXd, {
        color: f.DM8.BRAND,
        children: [(0, r.jsx)(f.RyX, {
          onClick: () => {
            var e;
            eY(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR
        }), ew.intl.string(ew.t["0klLS7"]), (0, r.jsx)(f.NoS, {
          onClick: () => {
            var e;
            (0, es.Z)(), eY(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eT.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
          children: ew.intl.string(ew.t.e4y2VM)
        })]
      });
    case eT.kVF.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, r.jsx)(eo.Z, {});
    case eT.kVF.SYSTEM_SERVICE_WARNING:
      return (0, r.jsx)(ec.Z, {});
    default:
      return null
  }
});

function eK() {
  let {
    analyticsLocations: e
  } = (0, w.ZP)(P.Z.NOTICE);
  return (0, r.jsx)(w.Gt, {
    value: e,
    children: (0, r.jsx)(eW, {})
  })
}