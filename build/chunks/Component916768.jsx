/** Chunk was on web.js **/
/** chunk id: 916768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eq,
  w: () => eK
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk758879 = require("./758879.js"),
  Chunk299855 = require("./299855.js"),
  c = require.n(Chunk299855),
  Chunk311907 = require("./311907.js"),
  Chunk823598 = require("./823598.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk827343 = require("./827343.js"),
  Chunk830215 = require("./830215.js"),
  Chunk503703 = require("./503703.js"),
  Chunk912851 = require("./912851.js"),
  Chunk169604 = require("./169604.js"),
  Chunk956793 = require("./956793.js"),
  Chunk785796 = require("./785796.js"),
  Chunk800342 = require("./800342.js"),
  Chunk55619 = require("./55619.js"),
  Chunk246605 = require("./246605.js"),
  Chunk271866 = require("./271866.js"),
  Chunk86980 = require("./86980.jsx"),
  Chunk322337 = require("./322337.jsx"),
  Chunk77729 = require("./77729.js"),
  Chunk573648 = require("./573648.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk587895 = require("./587895.js"),
  Chunk315982 = require("./315982.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk420216 = require("./420216.jsx"),
  Chunk984870 = require("./984870.jsx"),
  Chunk626262 = require("./626262.jsx"),
  Chunk813803 = require("./813803.jsx"),
  Chunk487329 = require("./487329.js"),
  Chunk102609 = require("./102609.js"),
  Chunk49463 = require("./49463.js"),
  Chunk322223 = require("./322223.jsx"),
  Chunk137207 = require("./137207.js"),
  Chunk619029 = require("./619029.jsx"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk571139 = require("./571139.jsx"),
  Chunk527012 = require("./527012.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk475723 = require("./475723.jsx"),
  Chunk598733 = require("./598733.jsx"),
  Chunk37770 = require("./37770.js"),
  Chunk74848 = require("./74848.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk617108 = require("./617108.jsx"),
  Chunk745299 = require("./745299.jsx"),
  Chunk814249 = require("./814249.jsx"),
  Chunk829219 = require("./829219.js"),
  Chunk597936 = require("./597936.js"),
  Chunk601730 = require("./601730.jsx"),
  Chunk722255 = require("./722255.jsx"),
  Chunk613491 = require("./613491.jsx"),
  Chunk464473 = require("./464473.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk459321 = require("./459321.jsx"),
  Chunk594609 = require("./594609.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk147964 = require("./147964.js"),
  Chunk519057 = require("./519057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk502075 = require("./502075.js"),
  Chunk788868 = require("./788868.js"),
  Chunk831502 = require("./831502.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");

function ex(e, t, n) {
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
      ex(e, t, n[t])
    })
  }
  return e
}

function ej(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ej(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ek = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, G.B1)(n)) ? true : t.errorCode, s = eP.intl.formatToPlainString(eP.t.ejOT95, {
      errorCode: a
    }), o = (0, r.jsx)(f.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eD.fU,
      selectable: true,
      children: s
    });
    return i ? (0, r.jsx)(f.DUT, {
      tag: "span",
      className: eD.wz,
      onClick: () => i && open(eA.A.getArticleURL(eT.MVz.AV_ERROR_CODES)),
      children: o
    }) : o
  },
  eU = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: t,
        onClick: () => {
          eK()
        }
      }), eP.intl.string(eP.t.o3zuYz), (0, r.jsx)(ek, {
        error: G.iy.NO_INPUT_DEVICES
      }), (0, r.jsx)(f.eCN, {
        href: eA.A.getArticleURL(eT.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eP.intl.string(eP.t.RYKKox)
      })]
    })
  },
  eG = "ms-settings:sound-properties";

function eV(e) {
  return (0, eI.isWindows)() && c().satisfies(null === C.A || true === C.A ? true : C.A.os.release, eC.PH) ? "".concat(eG, "?endpointId=").concat(e) : "ms-settings:sound"
}
let eF = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: n,
        onClick: () => {
          eK(), (0, ep.h)()
        }
      }), eP.intl.string(eP.t.ppW3ri), (0, r.jsx)(ek, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eV(t),
        noticeType: n,
        children: eP.intl.string(eP.t.pxYBbM)
      })]
    })
  },
  eB = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: n,
        onClick: () => {
          eK(), (0, ep.h)()
        }
      }), eP.intl.string(eP.t.j4gGA4), (0, r.jsx)(ek, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eV(t),
        noticeType: n,
        children: eP.intl.string(eP.t.pxYBbM)
      })]
    })
  },
  eH = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: t,
        onClick: () => {
          eK(), (0, ep.h)()
        }
      }), eP.intl.string(eP.t.nCO9bI), (0, r.jsx)(ek, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eA.A.getArticleURL(eT.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eP.intl.string(eP.t.RYKKox)
      })]
    })
  },
  eY = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: t,
        onClick: () => {
          eK(), (0, ep.h)()
        }
      }), eP.intl.string(eP.t.dNAJ18), (0, r.jsx)(ek, {
        allowClick: true,
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.zr9, {
        onClick: () => {
          (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, {
            section: eT.nc_.VOICE
          })
        },
        children: eP.intl.string(eP.t.I6YlB4)
      })]
    })
  };

function eW(e, t) {
  let n = {
    notice_type: e
  };
  null != t && (n.guild_id = t), ev.default.track(eT.HAw.APP_NOTICE_VIEWED, n)
}

function eK(e) {
  g.A.dismiss(null != e ? {
    untilAtLeast: s()(e)
  } : true)
}
let ez = Chunk64700.memo(function() {
  var e, t;
  let a = (0, u.bG)([eE.default], () => eE.default.getCurrentUser()),
    l = (0, u.bG)([eg.A], () => eg.A.getGuildId()),
    c = (0, u.bG)([eO.Ay], () => eO.Ay.getNotice()),
    {
      analyticsLocations: g
    } = (0, R.Ay)(),
    C = (0, K.H)(l),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: w
    } = (0, J.I)({
      location: "AppNotice"
    });
  i.useEffect(() => {
    (null == c ? true : c.type) != null && eW(c.type, l)
  }, [null == c ? true : c.type, l]), i.useEffect(() => {
    if (null != c && c.type === eT.kqX.SURVEY && null != c.metadata) {
      let {
        metadata: e
      } = c, t = F.A.getUserExperimentDescriptor(e.id);
      null != t && (0, V.LQ)(e.id, t), (async () => {
        var e, t;
        (null == (e = c.metadata) ? true : e.id) != null && await (0, A.oX)(null == (t = c.metadata) ? true : t.id)
      })()
    }
  }, [c]);
  let G = (0, $.x5)(eR.oh.AUDIO_INPUT),
    [ep, ev] = i.useState(""),
    [eC, ex] = i.useState(null),
    [ej, ek] = i.useState(null);
  if (i.useEffect(() => {
      if ((0, eI.isWindows)() && w) {
        let e = null == G ? true : G.guid;
        null != e && "" !== e && (ev(e), eS.Ay.ensureModule("discord_voice").then(() => {
          try {
            var t, n, r, i;
            let a = (0, d.lE)();
            null == a || null == (n = a.getDeviceOSMuted) || null == (t = n.call(a, e)) || t.then(e => ex(e)), null == a || null == (i = a.getDeviceOSVolume) || null == (r = i.call(a, e)) || r.then(e => ek(e))
          } catch (e) {}
        }).catch())
      }
    }, [w, null == G ? true : G.guid]), null == c) return null;
  let eG = null != c.type ? eO.Re[c.type] : null,
    eV = null != c.type ? eO.k3[c.type] : null,
    ez = null != c.type ? eO.f7[c.type] : null,
    eq = eO.pe[c.type];
  if (null != eG) return (0, r.jsx)(k.$, {
    dismissibleContent: eG,
    noticeType: c.type
  });
  if (null != eV) return (0, r.jsx)(U._, {
    dismissibleContent: eV,
    noticeType: c.type
  });
  if (null != ez) return (0, r.jsx)(M.T, {
    dismissibleContent: ez
  });
  if (null != eq) return (0, r.jsx)(j.r, {
    dismissibleContent: eq,
    noticeType: c.type
  });
  let eZ = null == (e = c.metadata) ? true : e.premiumType;
  switch (c.type) {
    case eT.kqX.PTT_NO_KEYBIND_WARNING:
      return (0, r.jsx)(ef.A, {});
    case eT.kqX.LURKING_GUILD:
      return (0, r.jsx)(Q.A, {});
    case eT.kqX.PENDING_MEMBER:
      return (0, r.jsx)(z.A, {});
    case eT.kqX.INVITED_TO_SPEAK:
      return (0, r.jsx)(el.A, {});
    case eT.kqX.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eX
      } = c.metadata;
      return (0, r.jsx)(B.A, {
        onDismiss: () => eK(eX)
      });
    case eT.kqX.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eQ
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(eQ),
          noticeType: c.type
        }), eP.intl.format(eP.t["08KQ1P"], {
          helpCenterLink: eA.A.getArticleURL(eT.MVz.WIN32_DEPRECATE)
        })]
      });
    case eT.kqX.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eJ
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(eJ),
          noticeType: c.type
        }), eP.intl.format(eP.t["8Je+dX"], {
          helpCenterLink: eA.A.getArticleURL(eT.MVz.WIN7_8_DEPRECATE)
        })]
      });
    case eT.kqX.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e$
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(e$),
          noticeType: c.type
        }), eP.intl.format(eP.t.q8VPLo, {
          helpCenterLink: eA.A.getArticleURL(eT.MVz.MACOS_19_DEPRECATE)
        })]
      });
    case eT.kqX.GENERIC:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.Z_L, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eT.kqX.LAUNCH_GAME_FAILURE:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.Z_L, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eT.kqX.VOICE_DISABLED:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            E.A.clearRemoteDisconnectVoiceChannelId(), eK()
          },
          noticeType: c.type
        }), eP.intl.string(eP.t.bOQ3jV), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            let e = em.A.getRemoteDisconnectVoiceChannelId();
            null != e && null != e_.A.getChannel(e) && y.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: eP.intl.string(eP.t.vD60Pv)
        })]
      });
    case eT.kqX.VOICE_CONNECTED_LAST_SESSION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            E.A.clearLastSessionVoiceChannelId(), eK()
          },
          noticeType: c.type
        }), eP.intl.string(eP.t.jY2lUA), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            let e = em.A.getLastSessionVoiceChannelId();
            null != e && null != e_.A.getChannel(e) && y.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: eP.intl.string(eP.t.vD60Pv)
        })]
      });
    case eT.kqX.SPOTIFY_AUTO_PAUSED:
      let e0 = N.A.get(eT.fg2.SPOTIFY);
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: c.type
        }), (0, r.jsx)("img", {
          alt: "",
          className: eD.tV,
          src: e0.icon.whiteSVG
        }), eP.intl.string(eP.t.D8Cp76), (0, r.jsx)(f.Z_L, {
          onClick: () => (0, ed.openUserSettings)(eu.X.VOICE_AND_VIDEO_PANEL, {
            section: eT.nc_.VOICE
          }),
          noticeType: c.type,
          children: eP.intl.string(eP.t.NiTd0e)
        }), (0, r.jsx)(f.MzZ, {
          className: eD.N0,
          href: eA.A.getArticleURL(eT.MVz.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eP.intl.string(eP.t.CiqAIU)
        })]
      });
    case eT.kqX.UNCLAIMED_ACCOUNT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [eP.intl.string(eP.t["f+Zaol"]), (0, r.jsx)(f.Z_L, {
          noticeType: c.type,
          onClick: () => C && null != l ? (0, W.Ze)(l) : D.R(),
          children: eP.intl.string(eP.t.fiNVin)
        })]
      });
    case eT.kqX.UNVERIFIED_ACCOUNT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [eP.intl.string(eP.t["3sWbf3"]), (0, r.jsx)(f.Z_L, {
          noticeType: c.type,
          onClick: () => {
            h.A.verifyResend(), p.A.show({
              title: eP.intl.string(eP.t.LykQYk),
              body: eP.intl.format(eP.t.azKEPy, {
                email: null == a ? true : a.email
              }),
              cancelText: eP.intl.string(eP.t.Vm8akB),
              onCancel: D.R
            })
          },
          children: eP.intl.string(eP.t.WnX4J2)
        })]
      });
    case eT.kqX.SCHEDULED_MAINTENANCE:
      if (null == c.metadata) return null;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => b.A.ackScheduledMaintenance(),
          noticeType: c.type
        }), eP.intl.format(eP.t["yb96S+"], c.metadata), (0, r.jsx)(f.eCN, {
          href: "".concat(eT.qF7.STATUS, "/incidents/").concat(c.metadata.id),
          noticeType: c.type,
          children: eP.intl.string(eP.t.hvVgAZ)
        })]
      });
    case eT.kqX.NO_INPUT_DETECTED:
      if ((0, J.F)({
          location: "AppNotice.trueTriggerPoint"
        }), (0, eI.isWindows)() && w) {
        if (true === eC) return (0, r.jsx)(eF, {
          deviceGuid: ep,
          noticeType: c.type
        });
        else if (0 === ej) return (0, r.jsx)(eB, {
          deviceGuid: ep,
          noticeType: c.type
        })
      }
      if (!eh.A.supports(eR.O5.LOOPBACK)) return (0, r.jsx)(eH, {
        noticeType: c.type
      });
      return (0, r.jsx)(eY, {
        noticeType: c.type
      });
    case eT.kqX.NO_INPUT_DEVICES_DETECTED:
      return (0, r.jsx)(eU, {
        noticeType: c.type
      });
    case eT.kqX.HARDWARE_MUTE:
      if (null == c.metadata) return null;
      let {
        vendor: e1, model: e2
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eP.intl.format(eP.t.qoDex7, {
          vendorName: e1.name,
          modelName: e2.name
        }), (0, r.jsx)(f.PMB, {
          noticeType: c.type,
          onClick: () => {
            _.A.setEnableHardwareMuteNotice(false), eK()
          }
        }), (0, r.jsx)(f.eCN, {
          href: e2.url,
          target: "_blank",
          rel: "noreferrer noopener",
          noticeType: c.type,
          children: eP.intl.string(eP.t["Yl/Riu"])
        })]
      });
    case eT.kqX.STREAMER_MODE:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.STREAMER_MODE,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.STREAMER_MODE
        }), eP.intl.string(eP.t.iEgBXp), (0, r.jsx)(f.Z_L, {
          onClick: () => v.A.setEnabled(false),
          noticeType: eT.kqX.STREAMER_MODE,
          children: eP.intl.string(eP.t.R9GHya)
        })]
      });
    case eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == c.metadata) return null;
      let {
        skuId: e3, applicationId: e6
      } = c.metadata, e4 = ey.A.get(e3), e5 = P.A.getApplication(e6);
      if (null == e4 || null == e5) return null;
      let e7 = {
        page: eT.liQ.IN_APP
      };
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => m.X(e4.id),
          noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: eD.PC
        }), eP.intl.format(eP.t["g3MU/+"], {
          applicationName: e5.name,
          skuName: e4.name
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, S.j)({
            applicationId: e5.id,
            skuId: e4.id,
            openPremiumPaymentModal: () => {
              (0, ee.A)({
                initialPlanId: null,
                subscriptionTier: eN.pe.TIER_2,
                analyticsLocations: g,
                analyticsObject: e7
              })
            },
            analyticsLocations: g,
            analyticsLocationObject: e7,
            context: __OVERLAY__ ? eT.BRT.OVERLAY : eT.BRT.APP
          }).then(() => m.X(e4.id)),
          children: eP.intl.string(eP.t.KEwPYx)
        })]
      });
    case eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == c.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = c.metadata, n = ey.A.get(e), i = P.A.getApplication(t);
      if (null == n || null == i) return null;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: eD.PC
        }), eP.intl.format(eP.t.LquIKC, {
          applicationName: i.name,
          skuName: n.name
        }), (0, r.jsx)(f.zr9, {
          children: (0, r.jsx)(o.N_, {
            onClick: () => eK(),
            to: {
              pathname: eT.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: false
              }
            },
            children: eP.intl.string(eP.t.hvVgAZ)
          })
        })]
      })
    }
    case eT.kqX.SURVEY: {
      let e = c.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: a,
        embedded: s,
        id: o
      } = e;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.CUSTOM,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.SURVEY,
          onClick: () => {
            (0, A.pX)(t, true)
          }
        }), n, (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.SURVEY,
          onClick: () => {
            s ? (0, er.K)(o) : window.open(a, "_blank"), (0, A.pX)(t, false)
          },
          children: i
        })]
      })
    }
    case eT.kqX.CORRUPT_INSTALLATION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eP.intl.string(eP.t["ugxmk/"]), (0, r.jsx)(f.eCN, {
          href: eA.A.getArticleURL(eT.MVz.CORRUPT_INSTALLATION),
          target: "_blank",
          noticeType: c.type,
          children: eP.intl.string(eP.t["6ik4Xk"])
        })]
      });
    case eT.kqX.VIDEO_UNSUPPORTED_BROWSER:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.VIDEO_UNSUPPORTED_BROWSER
        }), eP.intl.string(eP.t.wVjKGi), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
              return t => (0, r.jsx)(e, eL({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: eP.intl.string(eP.t["1WjMbC"])
        })]
      });
    case eT.kqX.DISPATCH_ERROR:
      if (null == c.metadata) return null;
      let {
        error: e8
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.DISPATCH_ERROR
        }), null == e8 ? true : e8.displayMessage, (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.DISPATCH_ERROR,
          onClick: () => (0, f.mMO)(async () => {
            let {
              default: e
            } = await n.e("88014").then(n.bind(n, 627261));
            return t => (0, r.jsx)(e, eL({}, t))
          }),
          children: eP.intl.string(eP.t.hvVgAZ)
        })]
      });
    case eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == c.metadata) return null;
      let {
        progress: e9, total: te, name: tt
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          children: [null != tt ? eP.intl.formatToPlainString(eP.t["pHj+z4"], {
            name: "".concat(tt),
            progress: e9,
            total: te
          }) : eP.intl.formatToPlainString(eP.t["lHZn+A"], {
            progress: e9,
            total: te
          }), (0, r.jsx)(f.y$y, {
            type: f.y$y.Type.PULSING_ELLIPSIS,
            className: eD.gO
          })]
        })]
      });
    case eT.kqX.APPLICATION_TEST_MODE:
      if (null == c.metadata) return null;
      if (null != eb.A.testModeEmbeddedApplicationId) return (0, r.jsx)(f.$Td, {
        color: f.Hv$.WARNING,
        children: (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          align: x.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eP.intl.format(eP.t["1qxVe4"], {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(f.PMB, {
            onClick: I.cL,
            noticeType: eT.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, r.jsx)(f.$Td, {
        color: f.Hv$.WARNING,
        children: (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          align: x.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eP.intl.format(eP.t.Fv5HrE, {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(T.A, {
            dropdownSize: T.p.DropdownSizes.SMALL,
            className: eD.aV,
            color: T.p.Colors.WHITE,
            look: T.p.Looks.OUTLINED,
            size: T.p.Sizes.MIN,
            onSKUSelect: e => O.ct(e.id, {
              analyticsSource: {
                page: null,
                section: eT.JJy.NOTIFICATION_BAR,
                object: eT.ZSU.NAVIGATION_LINK
              }
            }),
            applicationId: c.metadata.applicationId,
            children: eP.intl.string(eP.t.Q5ZgpK)
          }), (0, r.jsx)(f.PMB, {
            onClick: I.cL,
            noticeType: eT.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
    case eT.kqX.VIEWING_ROLES:
      return (0, r.jsx)(X.A, {});
    case eT.kqX.PREMIUM_UNCANCEL:
      return (0, r.jsxs)(f.$Td, {
        color: eZ === eN.PremiumTypes.TIER_1 ? f.Hv$.PREMIUM_TIER_1 : eZ === eN.PremiumTypes.TIER_0 ? f.Hv$.PREMIUM_TIER_0 : f.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: eD.PC
        }), eZ === eN.PremiumTypes.TIER_1 ? eP.intl.formatToPlainString(eP.t.fXv4wm, {
          daysLeft: c.metadata.daysLeft
        }) : eZ === eN.PremiumTypes.TIER_0 ? eP.intl.formatToPlainString(eP.t.ZOHZMr, {
          daysLeft: c.metadata.daysLeft
        }) : eP.intl.formatToPlainString(eP.t.outyHh, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("14704"), n.e("47827")]).then(n.bind(n, 174705));
              return t => (0, r.jsx)(e, eM(eL({}, t), {
                daysLeft: c.metadata.daysLeft,
                premiumType: eZ,
                analyticsSource: "Nag Bar",
                premiumSubscription: c.metadata.premiumSubscription
              }))
            })
          },
          children: eZ === eN.PremiumTypes.TIER_1 ? eP.intl.string(eP.t.BkbUPM) : eZ === eN.PremiumTypes.TIER_0 ? eP.intl.string(eP.t.Px978X) : eP.intl.string(eP.t.LW5tCE)
        })]
      });
    case eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: tn, dismissUntil: tr
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: c.type,
          onClick: () => {
            eK(tr)
          }
        }), eP.intl.format(eP.t.zxU0Kp, {
          daysPastDue: tn
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            eK(tr), (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
              section: eT.nc_.SUBSCRIPTIONS
            })
          },
          children: eP.intl.string(eP.t.q8rxeS)
        })]
      });
    case eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eP.intl.string(eP.t.LlZaoX), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
              section: eT.nc_.SUBSCRIPTIONS
            })
          },
          children: eP.intl.string(eP.t["Zpd+Yq"])
        })]
      });
    case eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eP.intl.string(eP.t["30YfCr"]), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
              section: eT.nc_.SUBSCRIPTIONS
            })
          },
          children: eP.intl.string(eP.t.U5pKWA)
        })]
      });
    case eT.kqX.PREMIUM_MISSING_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eZ === eN.PremiumTypes.TIER_1 ? eP.intl.formatToPlainString(eP.t.b6QUvf, {
          daysLeft: c.metadata.daysLeft
        }) : eZ === eN.PremiumTypes.TIER_0 ? eP.intl.formatToPlainString(eP.t["tURZ/M"], {
          daysLeft: c.metadata.daysLeft
        }) : eP.intl.formatToPlainString(eP.t.AyC74I, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            eK(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ed.openUserSettings)(eu.X.SUBSCRIPTIONS_PANEL, {
              section: eT.nc_.SUBSCRIPTIONS
            })
          },
          children: eZ === eN.PremiumTypes.TIER_1 ? eP.intl.string(eP.t.lboF5O) : eZ === eN.PremiumTypes.TIER_0 ? eP.intl.string(eP.t["4UPwOq"]) : eP.intl.string(eP.t["P/VvGb"])
        })]
      });
    case eT.kqX.BACK_TO_PREVIOUS_SCREEN:
      return (0, r.jsx)(q.y, {
        buttonText: null != (t = c.buttonText) ? t : eP.intl.string(eP.t["/g10LC"]),
        onGoBack: c.callback,
        onDismiss: () => eK(),
        showCloseButton: true
      });
    case eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, r.jsx)(Y.A, {
        guildId: l,
        analyticsLocations: g
      });
    case eT.kqX.QUARANTINED:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eP.intl.string(eP.t.DVFJYf), (0, r.jsx)(f.eCN, {
          href: ew.q,
          target: "_blank",
          noticeType: c.type,
          children: eP.intl.string(eP.t.kvHdFN)
        }), (0, r.jsx)(f.MzZ, {
          href: eA.A.getArticleURL(eT.MVz.QUARANTINE),
          target: "_blank",
          className: eD.yw,
          children: eP.intl.string(eP.t.hvVgAZ)
        })]
      });
    case eT.kqX.BLOCKED_BY_PROXY:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [eP.intl.string(eP.t.Ugijzi), (0, r.jsx)(f.eCN, {
          href: "".concat(eT.qF7.STATUS),
          noticeType: c.type,
          children: eP.intl.string(eP.t.hvVgAZ)
        }), (0, r.jsx)(f.PMB, {
          onClick: () => eK(),
          noticeType: eT.kqX.BLOCKED_BY_PROXY
        })]
      });
    case eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ti, decisionId: ta
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != l && (0, H.wu)(l), eK(ti)
          }
        }), eP.intl.string(eP.t.B8ruyY), (0, r.jsx)(f.zr9, {
          onClick: () => {
            null != l && (0, H.W5)(l, ta, () => {
              eK(ti), (0, H.wu)(l)
            })
          },
          children: eP.intl.string(eP.t.oX14El)
        }), null != l ? (0, r.jsx)(f.zr9, {
          onClick: () => Z.A.open(l, eT.BEX.GUILD_AUTOMOD, true, eT.nd0.AUTOMOD_MENTION_SPAM),
          children: eP.intl.string(eP.t["1R7QIx"])
        }) : null]
      });
    case eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.BRAND,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            ea.li(), eK()
          }
        }), eP.intl.string(eP.t.I1nKfO), (0, r.jsx)(f.Z_L, {
          noticeType: eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
              return t => (0, r.jsx)(e, eL({}, t))
            }), ea.li(), eK()
          },
          children: eP.intl.string(eP.t.l5xYnH)
        })]
      });
    case eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
      let ts = s()().add(5, "days").toDate();
      return (0, r.jsx)(en.A, {
        dismissCurrentNotice: () => {
          (0, L.Dr)(eO.pe[eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]), eK(ts)
        },
        subscriptionTier: eN.pe.TIER_2
      });
    case eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let to = s()().add(5, "days").toDate();
      return (0, r.jsx)(et.A, {
        dismissCurrentNotice: () => {
          eK(to)
        },
        subscriptionTier: eN.pe.TIER_2
      });
    case eT.kqX.QUESTS_PROGRESS_INTERRUPTION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eT.kqX.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = c.metadata) ? true : e.streamKey) != null && (0, ei.lk)(c.metadata.streamKey)
          }
        }), eP.intl.string(eP.t.rOx44m)]
      });
    case eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.BRAND,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            var e;
            eK(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR
        }), eP.intl.string(eP.t["0klLS7"]), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            var e;
            (0, eo.$)(), eK(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
          children: eP.intl.string(eP.t.e4y2VM)
        })]
      });
    case eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, r.jsx)(es.A, {});
    case eT.kqX.SYSTEM_SERVICE_WARNING:
      return (0, r.jsx)(ec.A, {});
    default:
      return null
  }
});

function eq() {
  let {
    analyticsLocations: e
  } = (0, R.Ay)(w.A.NOTICE);
  return (0, r.jsx)(R.f5, {
    value: e,
    children: (0, r.jsx)(ez, {})
  })
}