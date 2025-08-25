/** Chunk was on web.js **/
/** chunk id: 256638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ej,
  c: () => eD
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk799899 = require("./799899.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk846027 = require("./846027.js"),
  Chunk893776 = require("./893776.js"),
  Chunk117266 = require("./117266.js"),
  Chunk37234 = require("./37234.js"),
  Chunk254854 = require("./254854.js"),
  Chunk195500 = require("./195500.js"),
  Chunk287734 = require("./287734.js"),
  Chunk205355 = require("./205355.js"),
  Chunk558381 = require("./558381.js"),
  Chunk223245 = require("./223245.js"),
  Chunk491428 = require("./491428.js"),
  Chunk401430 = require("./401430.js"),
  Chunk230711 = require("./230711.js"),
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
  Chunk963249 = require("./963249.jsx"),
  Chunk96320 = require("./96320.js"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk272008 = require("./272008.js"),
  Chunk523255 = require("./523255.js"),
  Chunk101879 = require("./101879.jsx"),
  Chunk496729 = require("./496729.jsx"),
  Chunk852923 = require("./852923.jsx"),
  Chunk957030 = require("./957030.jsx"),
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
  Chunk72924 = require("./72924.jsx"),
  Chunk69499 = require("./69499.jsx"),
  Chunk912193 = require("./912193.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk610674 = require("./610674.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");

function eI(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eT(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eI(e, t, n[t])
    })
  }
  return e
}

function eS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eA(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eS(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eC = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, j.hp)(n)) ? true : t.errorCode, o = eO.intl.formatToPlainString(eO.t["ejOT9/"], {
      errorCode: a
    }), s = (0, r.jsx)(c.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: ev.errorCodeNoticeText,
      selectable: true,
      children: o
    });
    return i ? (0, r.jsx)(c.P3F, {
      tag: "span",
      className: ev.errorCodeNoticeClickable,
      onClick: () => i && open(e_.Z.getArticleURL(eg.BhN.AV_ERROR_CODES)),
      children: s
    }) : s
  },
  eN = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eD()
      }
    }), Chunk388032.intl.string(Chunk388032.t.o3zuY2), (0, Chunk951288.jsx)(eC, {
      error: Chunk458725.u.NO_INPUT_DEVICES
    }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
      href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NO_INPUT_DETECTED),
      children: Chunk388032.intl.string(Chunk388032.t.RYKKo6)
    })]
  }),
  eR = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eD(), (0, Chunk912193.b)()
      }
    }), Chunk388032.intl.string(Chunk388032.t.nCO9bG), (0, Chunk951288.jsx)(eC, {
      error: Chunk458725.u.NO_AUDIO_INPUT_DETECTED
    }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
      href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.NO_INPUT_DETECTED),
      children: Chunk388032.intl.string(Chunk388032.t.RYKKo6)
    })]
  }),
  eP = () => (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
      onClick: () => {
        eD(), (0, Chunk912193.b)()
      }
    }), Chunk388032.intl.string(Chunk388032.t.dNAJ19), (0, Chunk951288.jsx)(eC, {
      allowClick: true,
      error: Chunk458725.u.NO_AUDIO_INPUT_DETECTED
    }), (0, Chunk951288.jsx)(Chunk481060.EyT, {
      onClick: () => {
        (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS), Chunk230711.Z.setSection(Chunk981631.oAB.VOICE)
      },
      children: Chunk388032.intl.string(Chunk388032.t.I6YlBw)
    })]
  });

function ew(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), ef.default.track(eg.rMx.APP_NOTICE_VIEWED, n)
}

function eD(e) {
  h.Z.dismiss(null != e ? {
    untilAtLeast: o()(e)
  } : true)
}

function ex(e) {
  return null != e ? ed.m9[e] : null
}
let eL = Chunk647438.memo(function() {
  var e, t;
  let a = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    h = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    S = (0, Chunk442837.e7)([Chunk933429.ZP], () => Chunk933429.ZP.getNotice()),
    {
      analyticsLocations: j
    } = (0, Chunk906732.ZP)(),
    ef = null == Chunk100527 ? true : Chunk100527.type,
    em = (0, Chunk281956.J)(Chunk254854);
  Chunk647438.useEffect(() => {
    null != Chunk626135 && ew(Chunk626135, Chunk254854)
  }, [Chunk626135, Chunk254854]), Chunk647438.useEffect(() => {
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
  let eI = null != Chunk626135 ? Chunk933429.zD[Chunk626135] : null,
    eS = null != Chunk626135 ? Chunk933429.o[Chunk626135] : null,
    eC = null != Chunk626135 ? Chunk933429.nA[Chunk626135] : null,
    eL = ex(Chunk626135);
  if (null == Chunk100527) return null;
  let {
    useRecurringNotices: ej
  } = Chunk96320.b.getCurrentConfig({
    location: "AppNotice"
  });
  if (ej && null != eI && (Chunk626135 === Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING || Chunk626135 === Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)) return (0, Chunk951288.jsx)(Chunk132144.W, {
    dismissibleContent: eI,
    noticeType: Chunk100527.type
  });
  if (null != eS) return (0, Chunk951288.jsx)(Chunk131130.q, {
    dismissibleContent: eS,
    noticeType: Chunk100527.type
  });
  if (null != eC) return (0, Chunk951288.jsx)(Chunk196068.c, {
    dismissibleContent: eC
  });
  if (null != eL) return (0, Chunk951288.jsx)(Chunk749277.A, {
    dismissibleContent: eL,
    noticeType: Chunk100527.type
  });
  let ek = null == (e = Chunk100527.metadata) ? true : module.premiumType;
  switch (Chunk100527.type) {
    case Chunk981631.kVF.LURKING_GUILD:
      return (0, Chunk951288.jsx)(Chunk859428.Z, {});
    case Chunk981631.kVF.PENDING_MEMBER:
      return (0, Chunk951288.jsx)(Chunk574650.Z, {});
    case Chunk981631.kVF.INVITED_TO_SPEAK:
      return (0, Chunk951288.jsx)(Chunk852923.Z, {});
    case Chunk981631.kVF.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eM
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsx)(Chunk506357.Z, {
        onDismiss: () => eD(eM)
      });
    case Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eU
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(eU),
          noticeType: Chunk981631.kVF.WIN32_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t["08KQ1N"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN32_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eG
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(eG),
          noticeType: Chunk981631.kVF.WIN7_8_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t["8Je+dX"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.WIN7_8_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eB
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(eB),
          noticeType: Chunk981631.kVF.MACOS_19_DEPRECATED_MESSAGE
        }), Chunk388032.intl.format(Chunk388032.t.q8VPLi, {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.MACOS_19_DEPRECATE)
        })]
      });
    case Chunk981631.kVF.GENERIC:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
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
          onClick: () => eD(),
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
            Chunk195500.Z.clearRemoteDisconnectVoiceChannelId(), eD()
          },
          noticeType: Chunk981631.kVF.VOICE_DISABLED
        }), Chunk388032.intl.string(Chunk388032.t.bOQ3jY), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getRemoteDisconnectVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: Chunk981631.kVF.VOICE_DISABLED,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pj)
        })]
      });
    case Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk195500.Z.clearLastSessionVoiceChannelId(), eD()
          },
          noticeType: Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION
        }), Chunk388032.intl.string(Chunk388032.t.jY2lUF), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            let e = Chunk19780.Z.getLastSessionVoiceChannelId();
            null != module && null != Chunk592125.Z.getChannel(module) && Chunk287734.default.selectVoiceChannel(module)
          },
          noticeType: Chunk981631.kVF.VOICE_CONNECTED_LAST_SESSION,
          children: Chunk388032.intl.string(Chunk388032.t.vD60Pj)
        })]
      });
    case Chunk981631.kVF.SPOTIFY_AUTO_PAUSED:
      let eZ = Chunk726542.Z.get(Chunk981631.ABu.SPOTIFY);
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.SPOTIFY_AUTO_PAUSED
        }), (0, Chunk951288.jsx)("img", {
          alt: "",
          className: Chunk50953.platformIcon,
          src: eZ.icon.whiteSVG
        }), Chunk388032.intl.string(Chunk388032.t["D8Cp7+"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => Chunk230711.Z.open(Chunk981631.oAB.VOICE),
          noticeType: Chunk981631.kVF.SPOTIFY_AUTO_PAUSED,
          children: Chunk388032.intl.string(Chunk388032.t.NiTd0d)
        }), (0, Chunk951288.jsx)(Chunk481060.eee, {
          className: Chunk50953.textLinkSmall,
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t.CiqAIS)
        })]
      });
    case Chunk981631.kVF.UNCLAIMED_ACCOUNT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["f+Zaoq"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.UNCLAIMED_ACCOUNT,
          onClick: () => Chunk912193 && null != Chunk254854 ? (0, Chunk305325.hk)(Chunk254854) : Chunk391650.j(),
          children: Chunk388032.intl.string(Chunk388032.t.fiNVio)
        })]
      });
    case Chunk981631.kVF.UNVERIFIED_ACCOUNT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [Chunk388032.intl.string(Chunk388032.t["3sWbf3"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.UNVERIFIED_ACCOUNT,
          onClick: () => {
            Chunk893776.Z.verifyResend(), Chunk668781.Z.show({
              title: Chunk388032.intl.string(Chunk388032.t.LykQYm),
              body: Chunk388032.intl.format(Chunk388032.t.azKEPz, {
                email: null == Chunk913527 ? true : Chunk913527.email
              }),
              secondaryConfirmText: Chunk388032.intl.string(Chunk388032.t.oP5zGB),
              onConfirmSecondary: Chunk391650.j
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.WnX4Jy)
        })]
      });
    case Chunk981631.kVF.SCHEDULED_MAINTENANCE:
      if (null == Chunk100527.metadata) return null;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk205355.Z.ackScheduledMaintenance(),
          noticeType: Chunk981631.kVF.SCHEDULED_MAINTENANCE
        }), Chunk388032.intl.format(Chunk388032.t.yb96S0, Chunk100527.metadata), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS, "/incidents/").concat(Chunk100527.metadata.id),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        })]
      });
    case Chunk981631.kVF.NO_INPUT_DETECTED:
      if (!Chunk131951.Z.supports(Chunk65154.AN.LOOPBACK)) return (0, Chunk951288.jsx)(eR, {});
      return (0, Chunk951288.jsx)(eP, {});
    case Chunk981631.kVF.NO_INPUT_DEVICES_DETECTED:
      return (0, Chunk951288.jsx)(eN, {});
    case Chunk981631.kVF.HARDWARE_MUTE:
      if (null == Chunk100527.metadata) return null;
      let {
        vendor: eV, model: eF
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.format(Chunk388032.t.qoDex8, {
          vendorName: eV.name,
          modelName: eF.name
        }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            Chunk846027.Z.setEnableHardwareMuteNotice(false), eD()
          }
        }), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: eF.url,
          target: "_blank",
          rel: "noreferrer noopener",
          children: Chunk388032.intl.string(Chunk388032.t["Yl/Rio"])
        })]
      });
    case Chunk981631.kVF.STREAMER_MODE:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.STREAMER_MODE,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.STREAMER_MODE
        }), Chunk388032.intl.string(Chunk388032.t.iEgBXl), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => Chunk223245.Z.setEnabled(false),
          noticeType: Chunk981631.kVF.STREAMER_MODE,
          children: Chunk388032.intl.string(Chunk388032.t.R9GHyc)
        })]
      });
    case Chunk981631.kVF.H264_DISABLED:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            eD()
          }
        }), Chunk388032.intl.string(Chunk388032.t.HcErZW), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => {
            (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS), Chunk230711.Z.setSection(Chunk981631.oAB.VOICE)
          },
          children: Chunk388032.intl.string(Chunk388032.t["51hI/v"])
        })]
      });
    case Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == Chunk100527.metadata) return null;
      let {
        skuId: eH, applicationId: eY
      } = Chunk100527.metadata, eW = Chunk55563.Z.get(eH), eK = Chunk812206.Z.getApplication(eY);
      if (null == eW || null == eK) return null;
      let ez = {
        page: Chunk981631.ZY5.IN_APP
      };
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.PREMIUM_TIER_1,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => Chunk117266.Z(eW.id),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk50953.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t["g3MU//"], {
          applicationName: eK.name,
          skuName: eW.name
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, Chunk72924.S)({
            applicationId: eK.id,
            skuId: eW.id,
            openPremiumPaymentModal: () => {
              (0, Chunk963249.Z)({
                initialPlanId: null,
                subscriptionTier: Chunk474936.Si.TIER_2,
                analyticsLocations: Chunk458725,
                analyticsObject: ez
              })
            },
            analyticsLocations: Chunk458725,
            analyticsLocationObject: ez,
            context: __OVERLAY__ ? Chunk981631.IlC.OVERLAY : Chunk981631.IlC.APP
          }).then(() => Chunk117266.Z(eW.id)),
          children: Chunk388032.intl.string(Chunk388032.t.KEwPY2)
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
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk50953.premiumIcon
        }), Chunk388032.intl.format(Chunk388032.t.LquIKC, {
          applicationName: Chunk647438.name,
          skuName: require.name
        }), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          children: (0, Chunk951288.jsx)(Chunk799899.rU, {
            onClick: () => eD(),
            to: {
              pathname: Chunk981631.Z5c.APPLICATION_STORE_LISTING_SKU(require.id),
              state: {
                scrollRestoration: false
              }
            },
            children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
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
        children: [Chunk388032.intl.string(Chunk388032.t.ugxmk5), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CORRUPT_INSTALLATION),
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t["6ik4Xl"])
        })]
      });
    case Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER
        }), Chunk388032.intl.string(Chunk388032.t.wVjKGh), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("32996"), require.e("74023")]).then(require.bind(require, 431583));
              return t => (0, r.jsx)(e, eT({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t["1WjMbG"])
        })]
      });
    case Chunk981631.kVF.DISPATCH_ERROR:
      if (null == Chunk100527.metadata) return null;
      let {
        error: eq
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.DISPATCH_ERROR
        }), null == eq ? true : eq.displayMessage, (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.DISPATCH_ERROR,
          onClick: () => (0, Chunk481060.ZDy)(async () => {
            let {
              default: e
            } = await require.e("20212").then(require.bind(require, 915194));
            return t => (0, r.jsx)(e, eT({}, t))
          }),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        })]
      });
    case Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == Chunk100527.metadata) return null;
      let {
        progress: eX, total: eQ, name: eJ
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DEFAULT,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          justify: Chunk600164.Z.Justify.CENTER,
          children: [null != eJ ? Chunk388032.intl.formatToPlainString(Chunk388032.t["pHj+z8"], {
            name: "".concat(eJ),
            progress: eX,
            total: eQ
          }) : Chunk388032.intl.formatToPlainString(Chunk388032.t["lHZn+P"], {
            progress: eX,
            total: eQ
          }), (0, Chunk951288.jsx)(Chunk481060.$jN, {
            type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
            className: Chunk50953.ellipsis
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
            children: Chunk388032.intl.format(Chunk388032.t["1qxVe3"], {
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
            children: Chunk388032.intl.format(Chunk388032.t.Fv5HrK, {
              applicationName: Chunk100527.metadata.applicationName
            })
          }), (0, Chunk951288.jsx)(Chunk69499.Z, {
            dropdownSize: Chunk69499.E.DropdownSizes.SMALL,
            className: Chunk50953.testModeSKUSelector,
            color: Chunk69499.E.Colors.WHITE,
            look: Chunk69499.E.Looks.OUTLINED,
            size: Chunk69499.E.Sizes.MIN,
            onSKUSelect: e => b.yt(e.id, {
              analyticsSource: {
                page: null,
                section: eg.jXE.NOTIFICATION_BAR,
                object: eg.qAy.NAVIGATION_LINK
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
        color: ek === Chunk474936.p9.TIER_1 ? Chunk481060.DM8.PREMIUM_TIER_1 : ek === Chunk474936.p9.TIER_0 ? Chunk481060.DM8.PREMIUM_TIER_0 : Chunk481060.DM8.PREMIUM_TIER_2,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.SrA, {
          size: "md",
          color: "currentColor",
          className: Chunk50953.premiumIcon
        }), ek === Chunk474936.p9.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.fXv4ws, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : ek === Chunk474936.p9.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZOHZMj, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.outyHh, {
          daysLeft: Chunk100527.metadata.daysLeft
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("84992"), require.e("56158")]).then(require.bind(require, 561623));
              return t => (0, r.jsx)(e, eA(eT({}, t), {
                daysLeft: S.metadata.daysLeft,
                premiumType: ek,
                analyticsSource: "Nag Bar",
                premiumSubscription: S.metadata.premiumSubscription
              }))
            })
          },
          children: ek === Chunk474936.p9.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.BkbUPD) : ek === Chunk474936.p9.TIER_0 ? Chunk388032.intl.string(Chunk388032.t.Px978f) : Chunk388032.intl.string(Chunk388032.t.LW5tCA)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: e$, dismissUntil: e0
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk626135,
          onClick: () => {
            eD(e0)
          }
        }), Chunk388032.intl.format(Chunk388032.t.zxU0Ki, {
          daysPastDue: e$
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eD(e0), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
          },
          children: Chunk388032.intl.string(Chunk388032.t.q8rxeX)
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t.LlZaoa), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
          },
          children: Chunk388032.intl.string(Chunk388032.t["Zpd+Ym"])
        })]
      });
    case Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), Chunk388032.intl.string(Chunk388032.t["30YfCg"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
          },
          children: Chunk388032.intl.string(Chunk388032.t.U5pKWF)
        })]
      });
    case Chunk981631.kVF.PREMIUM_MISSING_PAYMENT:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd)
          }
        }), ek === Chunk474936.p9.TIER_1 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.b6QUvb, {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : ek === Chunk474936.p9.TIER_0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t["tURZ/P"], {
          daysLeft: Chunk100527.metadata.daysLeft
        }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.AyC74O, {
          daysLeft: Chunk100527.metadata.daysLeft
        }), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eD(null == (t = Chunk100527.metadata) || null == (e = exports.premiumSubscription) ? true : module.currentPeriodEnd), Chunk230711.Z.open(Chunk981631.oAB.SUBSCRIPTIONS)
          },
          children: ek === Chunk474936.p9.TIER_1 ? Chunk388032.intl.string(Chunk388032.t.lboF5O) : ek === Chunk474936.p9.TIER_0 ? Chunk388032.intl.string(Chunk388032.t["4UPwOj"]) : Chunk388032.intl.string(Chunk388032.t["P/VvGR"])
        })]
      });
    case Chunk981631.kVF.BACK_TO_PREVIOUS_SCREEN:
      return (0, Chunk951288.jsx)(Chunk665302.h, {
        buttonText: null != (t = Chunk100527.buttonText) ? exports : Chunk388032.intl.string(Chunk388032.t["/g10LC"]),
        onGoBack: Chunk100527.callback,
        onDismiss: () => eD(),
        showCloseButton: true
      });
    case Chunk981631.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
      let e = {
        page: Chunk981631.ZY5.IN_APP
      };
      return (0, Chunk951288.jsx)(Chunk236069.Z, {
        guildId: Chunk254854,
        analyticsLocations: Chunk458725,
        analyticsLocation: module
      })
    }
    case Chunk981631.kVF.QUARANTINED:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.DANGER,
        children: [Chunk388032.intl.string(Chunk388032.t.DVFJYW), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: Chunk610674.Z,
          target: "_blank",
          children: Chunk388032.intl.string(Chunk388032.t.kvHdFB)
        }), (0, Chunk951288.jsx)(Chunk481060.eee, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUARANTINE),
          target: "_blank",
          className: Chunk50953.quarantineLearnMoreLink,
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        })]
      });
    case Chunk981631.kVF.BLOCKED_BY_PROXY:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [Chunk388032.intl.string(Chunk388032.t.Ugijzs), (0, Chunk951288.jsx)(Chunk481060.u3T, {
          href: "".concat(Chunk981631.yXt.STATUS),
          children: Chunk388032.intl.string(Chunk388032.t.hvVgAQ)
        }), (0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => eD(),
          noticeType: Chunk981631.kVF.BLOCKED_BY_PROXY
        })]
      });
    case Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: e1, decisionId: e2
      } = Chunk100527.metadata;
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.WARNING,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != Chunk254854 && (0, Chunk36459.T9)(Chunk254854), eD(e1)
          }
        }), Chunk388032.intl.string(Chunk388032.t.B8ruyc), (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => {
            null != Chunk254854 && (0, Chunk36459.UE)(Chunk254854, e2, () => {
              eD(e1), (0, Chunk36459.T9)(Chunk254854)
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.oX14Eh)
        }), null != Chunk254854 ? (0, Chunk951288.jsx)(Chunk481060.EyT, {
          onClick: () => Chunk434404.Z.open(Chunk254854, Chunk981631.pNK.GUILD_AUTOMOD, true, Chunk981631.KsC.AUTOMOD_MENTION_SPAM),
          children: Chunk388032.intl.string(Chunk388032.t["1R7QIy"])
        }) : null]
      });
    case Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            Chunk523255.hZ(), eD()
          }
        }), Chunk388032.intl.string(Chunk388032.t.I1nKfH), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          noticeType: Chunk981631.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, Chunk481060.ZDy)(async () => {
              let {
                default: e
              } = await Promise.all([require.e("26860"), require.e("52432")]).then(require.bind(require, 349994));
              return t => (0, r.jsx)(e, eT({}, t))
            }), Chunk523255.hZ(), eD()
          },
          children: Chunk388032.intl.string(Chunk388032.t.l5xYnJ)
        })]
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
      let e3 = o()().add(5, "days").toDate();
      return (0, Chunk951288.jsx)(Chunk246965.Z, {
        dismissCurrentNotice: () => {
          (0, Chunk266454.Q3)(Chunk933429.m9[Chunk981631.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eD(e3)
        },
        subscriptionTier: Chunk474936.Si.TIER_2
      });
    case Chunk981631.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let e4 = o()().add(5, "days").toDate();
      return (0, Chunk951288.jsx)(Chunk535278.Z, {
        dismissCurrentNotice: () => {
          eD(e4)
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
        }), Chunk388032.intl.string(Chunk388032.t.rOx44u)]
      });
    case Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
        color: Chunk481060.DM8.BRAND,
        children: [(0, Chunk951288.jsx)(Chunk481060.RyX, {
          onClick: () => {
            var e;
            eD(null == (e = Chunk100527.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR
        }), Chunk388032.intl.string(Chunk388032.t["0klLS0"]), (0, Chunk951288.jsx)(Chunk481060.NoS, {
          onClick: () => {
            var e;
            (0, Chunk496729.ZZ)(), eD(null == (e = Chunk100527.metadata) ? true : module.dismissUntil)
          },
          noticeType: Chunk981631.kVF.BLOCK_USER_FEEDBACK_NAGBAR,
          children: Chunk388032.intl.string(Chunk388032.t.e4y2VF)
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

function ej() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(Chunk100527.Z.NOTICE);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: module,
    children: (0, Chunk951288.jsx)(eL, {})
  })
}