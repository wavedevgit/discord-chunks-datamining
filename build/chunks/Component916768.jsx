/** Chunk was on 73734 **/
/** chunk id: 916768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eq,
  w: () => ew
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
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
  Chunk420216 = require("./420216.jsx"),
  Chunk984870 = require("./984870.jsx"),
  Chunk626262 = require("./626262.jsx"),
  Chunk813803 = require("./813803.jsx"),
  Chunk709710 = require("./709710.js"),
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
  Chunk234419 = require("./234419.js"),
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

function eb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let eM = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, l = null == (t = (0, G.B1)(n)) ? true : t.errorCode, a = eh.intl.formatToPlainString(eh.t.ejOT95, {
      errorCode: l
    }), o = (0, r.jsx)(d.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: eU.fU,
      selectable: true,
      children: a
    });
    return i ? (0, r.jsx)(d.DUT, {
      tag: "span",
      className: eU.wz,
      onClick: () => i && open(eS.A.getArticleURL(em.MVz.AV_ERROR_CODES)),
      children: o
    }) : o
  },
  ej = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      children: [(0, r.jsx)(d.PMB, {
        noticeType: t,
        onClick: () => {
          ew()
        }
      }), eh.intl.string(eh.t.o3zuYz), (0, r.jsx)(eM, {
        error: G.iy.NO_INPUT_DEVICES
      }), (0, r.jsx)(d.eCN, {
        href: eS.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eh.intl.string(eh.t.RYKKox)
      })]
    })
  };

function ev(e) {
  return (0, eP.isWindows)() && c().satisfies(null === g.A || true === g.A ? true : g.A.os.release, ef.PH) ? "".concat("ms-settings:sound-properties", "?endpointId=").concat(e) : "ms-settings:sound"
}
let ek = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      children: [(0, r.jsx)(d.PMB, {
        noticeType: n,
        onClick: () => {
          ew(), (0, eE.h)()
        }
      }), eh.intl.string(eh.t.ppW3ri), (0, r.jsx)(eM, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(d.eCN, {
        href: ev(t),
        noticeType: n,
        children: eh.intl.string(eh.t.pxYBbM)
      })]
    })
  },
  eL = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      children: [(0, r.jsx)(d.PMB, {
        noticeType: n,
        onClick: () => {
          ew(), (0, eE.h)()
        }
      }), eh.intl.string(eh.t.j4gGA4), (0, r.jsx)(eM, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(d.eCN, {
        href: ev(t),
        noticeType: n,
        children: eh.intl.string(eh.t.pxYBbM)
      })]
    })
  },
  ex = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      children: [(0, r.jsx)(d.PMB, {
        noticeType: t,
        onClick: () => {
          ew(), (0, eE.h)()
        }
      }), eh.intl.string(eh.t.nCO9bI), (0, r.jsx)(eM, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(d.eCN, {
        href: eS.A.getArticleURL(em.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eh.intl.string(eh.t.RYKKox)
      })]
    })
  },
  eG = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      children: [(0, r.jsx)(d.PMB, {
        noticeType: t,
        onClick: () => {
          ew(), (0, eE.h)()
        }
      }), eh.intl.string(eh.t.dNAJ18), (0, r.jsx)(eM, {
        allowClick: true,
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(d.zr9, {
        onClick: () => {
          (0, ec.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, {
            section: em.nc_.VOICE
          })
        },
        children: eh.intl.string(eh.t.I6YlB4)
      })]
    })
  };

function ew(e) {
  O.A.dismiss(null != e ? {
    untilAtLeast: a()(e)
  } : true)
}
let eB = Chunk64700.memo(function() {
  var e, t;
  let l = (0, u.bG)([eI.default], () => eI.default.getCurrentUser()),
    a = (0, u.bG)([eT.A], () => eT.A.getGuildId()),
    s = (0, u.bG)([ep.Ay], () => ep.Ay.getNotice()),
    {
      analyticsLocations: c
    } = (0, U.Ay)(),
    O = (0, H.H)(a),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: g
    } = (0, J.I)({
      location: "AppNotice"
    }),
    h = (0, ee.V)();
  i.useEffect(() => {
    if ((null == s ? true : s.type) != null) {
      let e;
      if (null == h && (s.type === em.kqX.PREMIUM_TIER_2_TRIAL_ENDING || s.type === em.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
      let t = {};
      null != a && (t.guild_id = a), (null == h ? true : h.trial_id) != null && (t.trial_id = h.trial_id), e = eb({
        notice_type: s.type
      }, t), eR.default.track(em.HAw.APP_NOTICE_VIEWED, e)
    }
  }, [null == s ? true : s.type, a, h]), i.useEffect(() => {
    if (null != s && s.type === em.kqX.SURVEY && null != s.metadata) {
      let {
        metadata: e
      } = s, t = B.A.getUserExperimentDescriptor(e.id);
      null != t && (0, w.LQ)(e.id, t), (async () => {
        var e, t;
        (null == (e = s.metadata) ? true : e.id) != null && await (0, y.oX)(null == (t = s.metadata) ? true : t.id)
      })()
    }
  }, [s]);
  let G = (0, Z.x5)(eD.oh.AUDIO_INPUT),
    [eE, ef] = i.useState(""),
    [eM, ev] = i.useState(null),
    [eB, eq] = i.useState(null);
  if (i.useEffect(() => {
      if ((0, eP.isWindows)() && g) {
        let e = null == G ? true : G.guid;
        null != e && "" !== e && (ef(e), ey.Ay.ensureModule("discord_voice").then(() => {
          try {
            var t, n, r, i;
            let l = (0, E.lE)();
            null == l || null == (n = l.getDeviceOSMuted) || null == (t = n.call(l, e)) || t.then(e => ev(e)), null == l || null == (i = l.getDeviceOSVolume) || null == (r = i.call(l, e)) || r.then(e => eq(e))
          } catch (e) {}
        }).catch())
      }
    }, [g, null == G ? true : G.guid]), null == s) return null;
  let eX = null != s.type ? ep.Re[s.type] : null,
    eV = null != s.type ? ep.k3[s.type] : null,
    eF = null != s.type ? ep.f7[s.type] : null,
    eH = ep.pe[s.type];
  if (null != eX) return (0, r.jsx)(L.$, {
    dismissibleContent: eX,
    noticeType: s.type
  });
  if (null != eV) return (0, r.jsx)(x._, {
    dismissibleContent: eV,
    noticeType: s.type
  });
  if (null != eF) return (0, r.jsx)(k.T, {
    dismissibleContent: eF
  });
  if (null != eH) return (0, r.jsx)(v.r, {
    dismissibleContent: eH,
    noticeType: s.type
  });
  let eW = null == (e = s.metadata) ? true : e.premiumType;
  switch (s.type) {
    case em.kqX.PTT_NO_KEYBIND_WARNING:
      return (0, r.jsx)(eu.A, {});
    case em.kqX.LURKING_GUILD:
      return (0, r.jsx)(z.A, {});
    case em.kqX.PENDING_MEMBER:
      return (0, r.jsx)(W.A, {});
    case em.kqX.INVITED_TO_SPEAK:
      return (0, r.jsx)(ea.A, {});
    case em.kqX.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eK
      } = s.metadata;
      return (0, r.jsx)(q.A, {
        onDismiss: () => ew(eK)
      });
    case em.kqX.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: eY
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(eY),
          noticeType: s.type
        }), eh.intl.format(eh.t["08KQ1P"], {
          helpCenterLink: eS.A.getArticleURL(em.MVz.WIN32_DEPRECATE)
        })]
      });
    case em.kqX.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e$
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(e$),
          noticeType: s.type
        }), eh.intl.format(eh.t["8Je+dX"], {
          helpCenterLink: eS.A.getArticleURL(em.MVz.WIN7_8_DEPRECATE)
        })]
      });
    case em.kqX.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: ez
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(ez),
          noticeType: s.type
        }), eh.intl.format(eh.t.q8VPLo, {
          helpCenterLink: eS.A.getArticleURL(em.MVz.MACOS_19_DEPRECATE)
        })]
      });
    case em.kqX.E2EE_UPDATE_REQUIRED:
      let {
        dismissUntil: eJ
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(eJ),
          noticeType: s.type
        }), eh.intl.format(eP.isPlatformEmbedded ? eh.t.J232TI : eh.t.vceuiL, {
          helpCenterLink: eS.A.getArticleURL(em.MVz.END_TO_END_ENCRYPTION)
        })]
      });
    case em.kqX.GENERIC:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: s.type
        }), s.message, null != s.buttonText ? (0, r.jsx)(d.Z_L, {
          onClick: s.callback,
          noticeType: s.type,
          children: s.buttonText
        }) : null]
      });
    case em.kqX.LAUNCH_GAME_FAILURE:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: s.type
        }), s.message, null != s.buttonText ? (0, r.jsx)(d.Z_L, {
          onClick: s.callback,
          noticeType: s.type,
          children: s.buttonText
        }) : null]
      });
    case em.kqX.VOICE_DISABLED:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => {
            N.A.clearRemoteDisconnectVoiceChannelId(), ew()
          },
          noticeType: s.type
        }), eh.intl.string(eh.t.bOQ3jV), (0, r.jsx)(d.Z_L, {
          onClick: () => {
            let e = eA.A.getRemoteDisconnectVoiceChannelId();
            null != e && null != ed.A.getChannel(e) && p.default.selectVoiceChannel(e)
          },
          noticeType: s.type,
          children: eh.intl.string(eh.t.vD60Pv)
        })]
      });
    case em.kqX.VOICE_CONNECTED_LAST_SESSION:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => {
            N.A.clearLastSessionVoiceChannelId(), ew()
          },
          noticeType: s.type
        }), eh.intl.string(eh.t.jY2lUA), (0, r.jsx)(d.Z_L, {
          onClick: () => {
            let e = eA.A.getLastSessionVoiceChannelId();
            null != e && null != ed.A.getChannel(e) && p.default.selectVoiceChannel(e)
          },
          noticeType: s.type,
          children: eh.intl.string(eh.t.vD60Pv)
        })]
      });
    case em.kqX.SPOTIFY_AUTO_PAUSED:
      let eZ = D.A.get(em.fg2.SPOTIFY);
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: s.type
        }), (0, r.jsx)("img", {
          alt: "",
          className: eU.tV,
          src: eZ.icon.whiteSVG
        }), eh.intl.string(eh.t.D8Cp76), (0, r.jsx)(d.Z_L, {
          onClick: () => (0, ec.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, {
            section: em.nc_.VOICE
          }),
          noticeType: s.type,
          children: eh.intl.string(eh.t.NiTd0e)
        }), (0, r.jsx)(d.MzZ, {
          className: eU.N0,
          href: eS.A.getArticleURL(em.MVz.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eh.intl.string(eh.t.CiqAIU)
        })]
      });
    case em.kqX.UNCLAIMED_ACCOUNT:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [eh.intl.string(eh.t["f+Zaol"]), (0, r.jsx)(d.Z_L, {
          noticeType: s.type,
          onClick: () => O && null != a ? (0, F.Ze)(a) : M.R(),
          children: eh.intl.string(eh.t.fiNVin)
        })]
      });
    case em.kqX.UNVERIFIED_ACCOUNT:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [eh.intl.string(eh.t["3sWbf3"]), (0, r.jsx)(d.Z_L, {
          noticeType: s.type,
          onClick: () => {
            T.A.verifyResend(), _.A.show({
              title: eh.intl.string(eh.t.LykQYk),
              body: eh.intl.format(eh.t.azKEPy, {
                email: null == l ? true : l.email
              }),
              cancelText: eh.intl.string(eh.t.Vm8akB),
              onCancel: M.R
            })
          },
          children: eh.intl.string(eh.t.WnX4J2)
        })]
      });
    case em.kqX.SCHEDULED_MAINTENANCE:
      if (null == s.metadata) return null;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => R.A.ackScheduledMaintenance(),
          noticeType: s.type
        }), eh.intl.format(eh.t["yb96S+"], s.metadata), (0, r.jsx)(d.eCN, {
          href: "".concat(em.qF7.STATUS, "/incidents/").concat(s.metadata.id),
          noticeType: s.type,
          children: eh.intl.string(eh.t.hvVgAZ)
        })]
      });
    case em.kqX.NO_INPUT_DETECTED:
      if ((0, J.F)({
          location: "AppNotice.trueTriggerPoint"
        }), (0, eP.isWindows)() && g) {
        if (true === eM) return (0, r.jsx)(ek, {
          deviceGuid: eE,
          noticeType: s.type
        });
        else if (0 === eB) return (0, r.jsx)(eL, {
          deviceGuid: eE,
          noticeType: s.type
        })
      }
      if (!e_.A.supports(eD.O5.LOOPBACK)) return (0, r.jsx)(ex, {
        noticeType: s.type
      });
      return (0, r.jsx)(eG, {
        noticeType: s.type
      });
    case em.kqX.NO_INPUT_DEVICES_DETECTED:
      return (0, r.jsx)(ej, {
        noticeType: s.type
      });
    case em.kqX.HARDWARE_MUTE:
      if (null == s.metadata) return null;
      let {
        vendor: eQ, model: e0
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [eh.intl.format(eh.t.qoDex7, {
          vendorName: eQ.name,
          modelName: e0.name
        }), (0, r.jsx)(d.PMB, {
          noticeType: s.type,
          onClick: () => {
            A.A.setEnableHardwareMuteNotice(false), ew()
          }
        }), (0, r.jsx)(d.eCN, {
          href: e0.url,
          target: "_blank",
          rel: "noreferrer noopener",
          noticeType: s.type,
          children: eh.intl.string(eh.t["Yl/Riu"])
        })]
      });
    case em.kqX.STREAMER_MODE:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.STREAMER_MODE,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.STREAMER_MODE
        }), eh.intl.string(eh.t.iEgBXp), (0, r.jsx)(d.Z_L, {
          onClick: () => P.A.setEnabled(false),
          noticeType: em.kqX.STREAMER_MODE,
          children: eh.intl.string(eh.t.R9GHya)
        })]
      });
    case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == s.metadata) return null;
      let {
        skuId: e1, applicationId: e9
      } = s.metadata, e7 = eO.A.get(e1), e2 = b.A.getApplication(e9);
      if (null == e7 || null == e2) return null;
      let e6 = {
        page: em.liQ.IN_APP
      };
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => I.X(e7.id),
          noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, r.jsx)(d.tvc, {
          size: "md",
          color: "currentColor",
          className: eU.PC
        }), eh.intl.format(eh.t["g3MU/+"], {
          applicationName: e2.name,
          skuName: e7.name
        }), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, f.j)({
            applicationId: e2.id,
            skuId: e7.id,
            openPremiumPaymentModal: () => {
              (0, Q.A)({
                initialPlanId: null,
                subscriptionTier: eC.pe.TIER_2,
                analyticsLocations: c,
                analyticsObject: e6
              })
            },
            analyticsLocations: c,
            analyticsLocationObject: e6,
            context: __OVERLAY__ ? em.BRT.OVERLAY : em.BRT.APP
          }).then(() => I.X(e7.id)),
          children: eh.intl.string(eh.t.KEwPYx)
        })]
      });
    case em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == s.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = s.metadata, n = eO.A.get(e), i = b.A.getApplication(t);
      if (null == n || null == i) return null;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, r.jsx)(d.tvc, {
          size: "md",
          color: "currentColor",
          className: eU.PC
        }), eh.intl.format(eh.t.LquIKC, {
          applicationName: i.name,
          skuName: n.name
        }), (0, r.jsx)(d.zr9, {
          children: (0, r.jsx)(o.N_, {
            onClick: () => ew(),
            to: {
              pathname: em.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: false
              }
            },
            children: eh.intl.string(eh.t.hvVgAZ)
          })
        })]
      })
    }
    case em.kqX.SURVEY: {
      let e = s.metadata;
      if (null == e) return null;
      let {
        key: t,
        prompt: n,
        cta: i,
        url: l,
        embedded: a,
        id: o
      } = e;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.CUSTOM,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.SURVEY,
          onClick: () => {
            (0, y.pX)(t, true)
          }
        }), n, (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.SURVEY,
          onClick: () => {
            a ? (0, et.K)(o) : window.open(l, "_blank"), (0, y.pX)(t, false)
          },
          children: i
        })]
      })
    }
    case em.kqX.CORRUPT_INSTALLATION:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [eh.intl.string(eh.t["ugxmk/"]), (0, r.jsx)(d.eCN, {
          href: eS.A.getArticleURL(em.MVz.CORRUPT_INSTALLATION),
          target: "_blank",
          noticeType: s.type,
          children: eh.intl.string(eh.t["6ik4Xk"])
        })]
      });
    case em.kqX.VIDEO_UNSUPPORTED_BROWSER:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER
        }), eh.intl.string(eh.t.wVjKGi), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, d.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
              return t => (0, r.jsx)(e, eb({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: eh.intl.string(eh.t["1WjMbC"])
        })]
      });
    case em.kqX.DISPATCH_ERROR:
      if (null == s.metadata) return null;
      let {
        error: e5
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.DISPATCH_ERROR
        }), null == e5 ? true : e5.displayMessage, (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.DISPATCH_ERROR,
          onClick: () => (0, d.mMO)(async () => {
            let {
              default: e
            } = await n.e("88014").then(n.bind(n, 627261));
            return t => (0, r.jsx)(e, eb({}, t))
          }),
          children: eh.intl.string(eh.t.hvVgAZ)
        })]
      });
    case em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == s.metadata) return null;
      let {
        progress: e8, total: e3, name: e4
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DEFAULT,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, r.jsxs)(j.A, {
          justify: j.A.Justify.CENTER,
          children: [null != e4 ? eh.intl.formatToPlainString(eh.t["pHj+z4"], {
            name: "".concat(e4),
            progress: e8,
            total: e3
          }) : eh.intl.formatToPlainString(eh.t["lHZn+A"], {
            progress: e8,
            total: e3
          }), (0, r.jsx)(d.y$y, {
            type: d.y$y.Type.PULSING_ELLIPSIS,
            className: eU.gO
          })]
        })]
      });
    case em.kqX.APPLICATION_TEST_MODE:
      if (null == s.metadata) return null;
      if (null != eN.A.testModeEmbeddedApplicationId) return (0, r.jsx)(d.$Td, {
        color: d.Hv$.WARNING,
        children: (0, r.jsxs)(j.A, {
          justify: j.A.Justify.CENTER,
          align: j.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eh.intl.format(eh.t["1qxVe4"], {
              applicationName: s.metadata.applicationName
            })
          }), (0, r.jsx)(d.PMB, {
            onClick: m.cL,
            noticeType: em.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, r.jsx)(d.$Td, {
        color: d.Hv$.WARNING,
        children: (0, r.jsxs)(j.A, {
          justify: j.A.Justify.CENTER,
          align: j.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eh.intl.format(eh.t.Fv5HrE, {
              applicationName: s.metadata.applicationName
            })
          }), (0, r.jsx)(C.A, {
            dropdownSize: C.p.DropdownSizes.SMALL,
            className: eU.aV,
            color: C.p.Colors.WHITE,
            look: C.p.Looks.OUTLINED,
            size: C.p.Sizes.MIN,
            onSKUSelect: e => S.ct(e.id, {
              analyticsSource: {
                page: null,
                section: em.JJy.NOTIFICATION_BAR,
                object: em.ZSU.NAVIGATION_LINK
              }
            }),
            applicationId: s.metadata.applicationId,
            children: eh.intl.string(eh.t.Q5ZgpK)
          }), (0, r.jsx)(d.PMB, {
            onClick: m.cL,
            noticeType: em.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
    case em.kqX.VIEWING_ROLES:
      return (0, r.jsx)($.A, {});
    case em.kqX.PREMIUM_UNCANCEL:
      return (0, r.jsxs)(d.$Td, {
        color: eW === eC.PremiumTypes.TIER_1 ? d.Hv$.PREMIUM_TIER_1 : eW === eC.PremiumTypes.TIER_0 ? d.Hv$.PREMIUM_TIER_0 : d.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), (0, r.jsx)(d.tvc, {
          size: "md",
          color: "currentColor",
          className: eU.PC
        }), eW === eC.PremiumTypes.TIER_1 ? eh.intl.formatToPlainString(eh.t.fXv4wm, {
          daysLeft: s.metadata.daysLeft
        }) : eW === eC.PremiumTypes.TIER_0 ? eh.intl.formatToPlainString(eh.t.ZOHZMr, {
          daysLeft: s.metadata.daysLeft
        }) : eh.intl.formatToPlainString(eh.t.outyHh, {
          daysLeft: s.metadata.daysLeft
        }), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, d.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("62175"), n.e("14704"), n.e("1536")]).then(n.bind(n, 174705));
              return t => {
                var n, i;
                return (0, r.jsx)(e, (n = eb({}, t), i = i = {
                  daysLeft: s.metadata.daysLeft,
                  premiumType: eW,
                  analyticsSource: "Nag Bar",
                  premiumSubscription: s.metadata.premiumSubscription
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                }), n))
              }
            })
          },
          children: eW === eC.PremiumTypes.TIER_1 ? eh.intl.string(eh.t.BkbUPM) : eW === eC.PremiumTypes.TIER_0 ? eh.intl.string(eh.t.Px978X) : eh.intl.string(eh.t.LW5tCE)
        })]
      });
    case em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: te, dismissUntil: tt
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: s.type,
          onClick: () => {
            ew(tt)
          }
        }), eh.intl.format(eh.t.zxU0Kp, {
          daysPastDue: te
        }), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            ew(tt), (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
              section: em.nc_.SUBSCRIPTIONS
            })
          },
          children: eh.intl.string(eh.t.q8rxeS)
        })]
      });
    case em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eh.intl.string(eh.t.LlZaoX), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
              section: em.nc_.SUBSCRIPTIONS
            })
          },
          children: eh.intl.string(eh.t["Zpd+Yq"])
        })]
      });
    case em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eh.intl.string(eh.t["30YfCr"]), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
              section: em.nc_.SUBSCRIPTIONS
            })
          },
          children: eh.intl.string(eh.t.U5pKWA)
        })]
      });
    case em.kqX.PREMIUM_MISSING_PAYMENT:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eW === eC.PremiumTypes.TIER_1 ? eh.intl.formatToPlainString(eh.t.b6QUvf, {
          daysLeft: s.metadata.daysLeft
        }) : eW === eC.PremiumTypes.TIER_0 ? eh.intl.formatToPlainString(eh.t["tURZ/M"], {
          daysLeft: s.metadata.daysLeft
        }) : eh.intl.formatToPlainString(eh.t.AyC74I, {
          daysLeft: s.metadata.daysLeft
        }), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ew(null == (t = s.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ec.openUserSettings)(es.X.SUBSCRIPTIONS_PANEL, {
              section: em.nc_.SUBSCRIPTIONS
            })
          },
          children: eW === eC.PremiumTypes.TIER_1 ? eh.intl.string(eh.t.lboF5O) : eW === eC.PremiumTypes.TIER_0 ? eh.intl.string(eh.t["4UPwOq"]) : eh.intl.string(eh.t["P/VvGb"])
        })]
      });
    case em.kqX.BACK_TO_PREVIOUS_SCREEN:
      return (0, r.jsx)(K.y, {
        buttonText: null != (t = s.buttonText) ? t : eh.intl.string(eh.t["/g10LC"]),
        onGoBack: s.callback,
        onDismiss: () => ew(),
        showCloseButton: true
      });
    case em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, r.jsx)(V.A, {
        guildId: a,
        analyticsLocations: c
      });
    case em.kqX.QUARANTINED:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [eh.intl.string(eh.t.DVFJYf), (0, r.jsx)(d.eCN, {
          href: eg.q,
          target: "_blank",
          noticeType: s.type,
          children: eh.intl.string(eh.t.kvHdFN)
        }), (0, r.jsx)(d.MzZ, {
          href: eS.A.getArticleURL(em.MVz.QUARANTINE),
          target: "_blank",
          className: eU.yw,
          children: eh.intl.string(eh.t.hvVgAZ)
        })]
      });
    case em.kqX.BLOCKED_BY_PROXY:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [eh.intl.string(eh.t.Ugijzi), (0, r.jsx)(d.eCN, {
          href: "".concat(em.qF7.STATUS),
          noticeType: s.type,
          children: eh.intl.string(eh.t.hvVgAZ)
        }), (0, r.jsx)(d.PMB, {
          onClick: () => ew(),
          noticeType: em.kqX.BLOCKED_BY_PROXY
        })]
      });
    case em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: tn, decisionId: tr
      } = s.metadata;
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.WARNING,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != a && (0, X.wu)(a), ew(tn)
          }
        }), eh.intl.string(eh.t.B8ruyY), (0, r.jsx)(d.zr9, {
          onClick: () => {
            null != a && (0, X.W5)(a, tr, () => {
              ew(tn), (0, X.wu)(a)
            })
          },
          children: eh.intl.string(eh.t.oX14El)
        }), null != a ? (0, r.jsx)(d.zr9, {
          onClick: () => Y.A.open(a, em.BEX.GUILD_AUTOMOD, true, em.nd0.AUTOMOD_MENTION_SPAM),
          children: eh.intl.string(eh.t["1R7QIx"])
        }) : null]
      });
    case em.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            er.li(), ew()
          }
        }), eh.intl.string(eh.t.I1nKfO), (0, r.jsx)(d.Z_L, {
          noticeType: em.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, d.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
              return t => (0, r.jsx)(e, eb({}, t))
            }), er.li(), ew()
          },
          children: eh.intl.string(eh.t.l5xYnH)
        })]
      });
    case em.kqX.QUESTS_PROGRESS_INTERRUPTION:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.DANGER,
        children: [(0, r.jsx)(d.PMB, {
          noticeType: em.kqX.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = s.metadata) ? true : e.streamKey) != null && (0, en.lk)(s.metadata.streamKey)
          }
        }), eh.intl.string(eh.t.rOx44m)]
      });
    case em.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        children: [(0, r.jsx)(d.PMB, {
          onClick: () => {
            var e;
            ew(null == (e = s.metadata) ? true : e.dismissUntil)
          },
          noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR
        }), eh.intl.string(eh.t["0klLS7"]), (0, r.jsx)(d.Z_L, {
          onClick: () => {
            var e;
            (0, el.$)(), ew(null == (e = s.metadata) ? true : e.dismissUntil)
          },
          noticeType: em.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
          children: eh.intl.string(eh.t.e4y2VM)
        })]
      });
    case em.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, r.jsx)(ei.A, {});
    case em.kqX.SYSTEM_SERVICE_WARNING:
      return (0, r.jsx)(eo.A, {});
    default:
      return null
  }
});

function eq() {
  let {
    analyticsLocations: e
  } = (0, U.Ay)(h.A.NOTICE);
  return (0, r.jsx)(U.f5, {
    value: e,
    children: (0, r.jsx)(eB, {})
  })
}