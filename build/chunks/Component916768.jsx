/** Chunk was on web.js **/
/** chunk id: 916768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eZ,
  w: () => ez
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
  Chunk234419 = require("./234419.js"),
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

function eL(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ej(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eL(e, t, n[t])
    })
  }
  return e
}

function eM(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ek(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eM(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eU = e => {
    var t;
    let {
      error: n,
      allowClick: i = false
    } = e, a = null == (t = (0, G.B1)(n)) ? true : t.errorCode, s = eD.intl.formatToPlainString(eD.t.ejOT95, {
      errorCode: a
    }), o = (0, r.jsx)(f.Text, {
      variant: "text-sm/bold",
      color: "currentColor",
      tag: "span",
      className: ex.fU,
      selectable: true,
      children: s
    });
    return i ? (0, r.jsx)(f.DUT, {
      tag: "span",
      className: ex.wz,
      onClick: () => i && open(eI.A.getArticleURL(eC.MVz.AV_ERROR_CODES)),
      children: o
    }) : o
  },
  eG = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: t,
        onClick: () => {
          ez()
        }
      }), eD.intl.string(eD.t.o3zuYz), (0, r.jsx)(eU, {
        error: G.iy.NO_INPUT_DEVICES
      }), (0, r.jsx)(f.eCN, {
        href: eI.A.getArticleURL(eC.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eD.intl.string(eD.t.RYKKox)
      })]
    })
  },
  eV = "ms-settings:sound-properties";

function eF(e) {
  return (0, eS.isWindows)() && c().satisfies(null === C.A || true === C.A ? true : C.A.os.release, eN.PH) ? "".concat(eV, "?endpointId=").concat(e) : "ms-settings:sound"
}
let eB = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: n,
        onClick: () => {
          ez(), (0, e_.h)()
        }
      }), eD.intl.string(eD.t.ppW3ri), (0, r.jsx)(eU, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eF(t),
        noticeType: n,
        children: eD.intl.string(eD.t.pxYBbM)
      })]
    })
  },
  eH = e => {
    let {
      deviceGuid: t,
      noticeType: n
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: n,
        onClick: () => {
          ez(), (0, e_.h)()
        }
      }), eD.intl.string(eD.t.j4gGA4), (0, r.jsx)(eU, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eF(t),
        noticeType: n,
        children: eD.intl.string(eD.t.pxYBbM)
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
          ez(), (0, e_.h)()
        }
      }), eD.intl.string(eD.t.nCO9bI), (0, r.jsx)(eU, {
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.eCN, {
        href: eI.A.getArticleURL(eC.MVz.NO_INPUT_DETECTED),
        noticeType: t,
        children: eD.intl.string(eD.t.RYKKox)
      })]
    })
  },
  eW = e => {
    let {
      noticeType: t
    } = e;
    return (0, r.jsxs)(f.$Td, {
      color: f.Hv$.DANGER,
      children: [(0, r.jsx)(f.PMB, {
        noticeType: t,
        onClick: () => {
          ez(), (0, e_.h)()
        }
      }), eD.intl.string(eD.t.dNAJ18), (0, r.jsx)(eU, {
        allowClick: true,
        error: G.iy.NO_AUDIO_INPUT_DETECTED
      }), (0, r.jsx)(f.zr9, {
        onClick: () => {
          (0, ef.openUserSettings)(ed.X.VOICE_AND_VIDEO_PANEL, {
            section: eC.nc_.VOICE
          })
        },
        children: eD.intl.string(eD.t.I6YlB4)
      })]
    })
  };

function eK(e, t) {
  let n = ej({
    notice_type: e
  }, t);
  eA.default.track(eC.HAw.APP_NOTICE_VIEWED, n)
}

function ez(e) {
  g.A.dismiss(null != e ? {
    untilAtLeast: s()(e)
  } : true)
}
let eq = Chunk64700.memo(function() {
  var e, t;
  let a = (0, u.bG)([ey.default], () => ey.default.getCurrentUser()),
    l = (0, u.bG)([eE.A], () => eE.A.getGuildId()),
    c = (0, u.bG)([ev.Ay], () => ev.Ay.getNotice()),
    {
      analyticsLocations: g
    } = (0, R.Ay)(),
    C = (0, K.H)(l),
    {
      windowsMuteAndZeroVolumeDetectionEnabled: w
    } = (0, J.I)({
      location: "AppNotice"
    }),
    G = (0, et.V)();
  i.useEffect(() => {
    if ((null == c ? true : c.type) != null) {
      if (null == G && (c.type === eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING || c.type === eC.kqX.PREMIUM_TIER_0_TRIAL_ENDING)) return;
      let e = {};
      null != l && (e.guild_id = l), (null == G ? true : G.trial_id) != null && (e.trial_id = G.trial_id), eK(c.type, e)
    }
  }, [null == c ? true : c.type, l, G]), i.useEffect(() => {
    if (null != c && c.type === eC.kqX.SURVEY && null != c.metadata) {
      let {
        metadata: e
      } = c, t = F.A.getUserExperimentDescriptor(e.id);
      null != t && (0, V.LQ)(e.id, t), (async () => {
        var e, t;
        (null == (e = c.metadata) ? true : e.id) != null && await (0, A.oX)(null == (t = c.metadata) ? true : t.id)
      })()
    }
  }, [c]);
  let e_ = (0, $.x5)(eP.oh.AUDIO_INPUT),
    [eA, eN] = i.useState(""),
    [eL, eM] = i.useState(null),
    [eU, eV] = i.useState(null);
  if (i.useEffect(() => {
      if ((0, eS.isWindows)() && w) {
        let e = null == e_ ? true : e_.guid;
        null != e && "" !== e && (eN(e), eT.Ay.ensureModule("discord_voice").then(() => {
          try {
            var t, n, r, i;
            let a = (0, d.lE)();
            null == a || null == (n = a.getDeviceOSMuted) || null == (t = n.call(a, e)) || t.then(e => eM(e)), null == a || null == (i = a.getDeviceOSVolume) || null == (r = i.call(a, e)) || r.then(e => eV(e))
          } catch (e) {}
        }).catch())
      }
    }, [w, null == e_ ? true : e_.guid]), null == c) return null;
  let eF = null != c.type ? ev.Re[c.type] : null,
    eq = null != c.type ? ev.k3[c.type] : null,
    eZ = null != c.type ? ev.f7[c.type] : null,
    eX = ev.pe[c.type];
  if (null != eF) return (0, r.jsx)(k.$, {
    dismissibleContent: eF,
    noticeType: c.type
  });
  if (null != eq) return (0, r.jsx)(U._, {
    dismissibleContent: eq,
    noticeType: c.type
  });
  if (null != eZ) return (0, r.jsx)(M.T, {
    dismissibleContent: eZ
  });
  if (null != eX) return (0, r.jsx)(j.r, {
    dismissibleContent: eX,
    noticeType: c.type
  });
  let eQ = null == (e = c.metadata) ? true : e.premiumType;
  switch (c.type) {
    case eC.kqX.PTT_NO_KEYBIND_WARNING:
      return (0, r.jsx)(ep.A, {});
    case eC.kqX.LURKING_GUILD:
      return (0, r.jsx)(Q.A, {});
    case eC.kqX.PENDING_MEMBER:
      return (0, r.jsx)(z.A, {});
    case eC.kqX.INVITED_TO_SPEAK:
      return (0, r.jsx)(ec.A, {});
    case eC.kqX.GUILD_RAID_NOTIFICATION:
      let {
        dismissUntil: eJ
      } = c.metadata;
      return (0, r.jsx)(B.A, {
        onDismiss: () => ez(eJ)
      });
    case eC.kqX.WIN32_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e$
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(e$),
          noticeType: c.type
        }), eD.intl.format(eD.t["08KQ1P"], {
          helpCenterLink: eI.A.getArticleURL(eC.MVz.WIN32_DEPRECATE)
        })]
      });
    case eC.kqX.WIN7_8_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e0
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(e0),
          noticeType: c.type
        }), eD.intl.format(eD.t["8Je+dX"], {
          helpCenterLink: eI.A.getArticleURL(eC.MVz.WIN7_8_DEPRECATE)
        })]
      });
    case eC.kqX.MACOS_19_DEPRECATED_MESSAGE:
      let {
        dismissUntil: e1
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(e1),
          noticeType: c.type
        }), eD.intl.format(eD.t.q8VPLo, {
          helpCenterLink: eI.A.getArticleURL(eC.MVz.MACOS_19_DEPRECATE)
        })]
      });
    case eC.kqX.GENERIC:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.Z_L, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eC.kqX.LAUNCH_GAME_FAILURE:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: c.type
        }), c.message, null != c.buttonText ? (0, r.jsx)(f.Z_L, {
          onClick: c.callback,
          noticeType: c.type,
          children: c.buttonText
        }) : null]
      });
    case eC.kqX.VOICE_DISABLED:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            E.A.clearRemoteDisconnectVoiceChannelId(), ez()
          },
          noticeType: c.type
        }), eD.intl.string(eD.t.bOQ3jV), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            let e = eg.A.getRemoteDisconnectVoiceChannelId();
            null != e && null != eh.A.getChannel(e) && y.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: eD.intl.string(eD.t.vD60Pv)
        })]
      });
    case eC.kqX.VOICE_CONNECTED_LAST_SESSION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            E.A.clearLastSessionVoiceChannelId(), ez()
          },
          noticeType: c.type
        }), eD.intl.string(eD.t.jY2lUA), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            let e = eg.A.getLastSessionVoiceChannelId();
            null != e && null != eh.A.getChannel(e) && y.default.selectVoiceChannel(e)
          },
          noticeType: c.type,
          children: eD.intl.string(eD.t.vD60Pv)
        })]
      });
    case eC.kqX.SPOTIFY_AUTO_PAUSED:
      let e2 = N.A.get(eC.fg2.SPOTIFY);
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: c.type
        }), (0, r.jsx)("img", {
          alt: "",
          className: ex.tV,
          src: e2.icon.whiteSVG
        }), eD.intl.string(eD.t.D8Cp76), (0, r.jsx)(f.Z_L, {
          onClick: () => (0, ef.openUserSettings)(ed.X.VOICE_AND_VIDEO_PANEL, {
            section: eC.nc_.VOICE
          }),
          noticeType: c.type,
          children: eD.intl.string(eD.t.NiTd0e)
        }), (0, r.jsx)(f.MzZ, {
          className: ex.N0,
          href: eI.A.getArticleURL(eC.MVz.SPOTIFY_AUTO_PAUSED),
          target: "_blank",
          children: eD.intl.string(eD.t.CiqAIU)
        })]
      });
    case eC.kqX.UNCLAIMED_ACCOUNT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [eD.intl.string(eD.t["f+Zaol"]), (0, r.jsx)(f.Z_L, {
          noticeType: c.type,
          onClick: () => C && null != l ? (0, W.Ze)(l) : D.R(),
          children: eD.intl.string(eD.t.fiNVin)
        })]
      });
    case eC.kqX.UNVERIFIED_ACCOUNT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [eD.intl.string(eD.t["3sWbf3"]), (0, r.jsx)(f.Z_L, {
          noticeType: c.type,
          onClick: () => {
            h.A.verifyResend(), p.A.show({
              title: eD.intl.string(eD.t.LykQYk),
              body: eD.intl.format(eD.t.azKEPy, {
                email: null == a ? true : a.email
              }),
              cancelText: eD.intl.string(eD.t.Vm8akB),
              onCancel: D.R
            })
          },
          children: eD.intl.string(eD.t.WnX4J2)
        })]
      });
    case eC.kqX.SCHEDULED_MAINTENANCE:
      if (null == c.metadata) return null;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => b.A.ackScheduledMaintenance(),
          noticeType: c.type
        }), eD.intl.format(eD.t["yb96S+"], c.metadata), (0, r.jsx)(f.eCN, {
          href: "".concat(eC.qF7.STATUS, "/incidents/").concat(c.metadata.id),
          noticeType: c.type,
          children: eD.intl.string(eD.t.hvVgAZ)
        })]
      });
    case eC.kqX.NO_INPUT_DETECTED:
      if ((0, J.F)({
          location: "AppNotice.trueTriggerPoint"
        }), (0, eS.isWindows)() && w) {
        if (true === eL) return (0, r.jsx)(eB, {
          deviceGuid: eA,
          noticeType: c.type
        });
        else if (0 === eU) return (0, r.jsx)(eH, {
          deviceGuid: eA,
          noticeType: c.type
        })
      }
      if (!em.A.supports(eP.O5.LOOPBACK)) return (0, r.jsx)(eY, {
        noticeType: c.type
      });
      return (0, r.jsx)(eW, {
        noticeType: c.type
      });
    case eC.kqX.NO_INPUT_DEVICES_DETECTED:
      return (0, r.jsx)(eG, {
        noticeType: c.type
      });
    case eC.kqX.HARDWARE_MUTE:
      if (null == c.metadata) return null;
      let {
        vendor: e3, model: e6
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eD.intl.format(eD.t.qoDex7, {
          vendorName: e3.name,
          modelName: e6.name
        }), (0, r.jsx)(f.PMB, {
          noticeType: c.type,
          onClick: () => {
            _.A.setEnableHardwareMuteNotice(false), ez()
          }
        }), (0, r.jsx)(f.eCN, {
          href: e6.url,
          target: "_blank",
          rel: "noreferrer noopener",
          noticeType: c.type,
          children: eD.intl.string(eD.t["Yl/Riu"])
        })]
      });
    case eC.kqX.STREAMER_MODE:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.STREAMER_MODE,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.STREAMER_MODE
        }), eD.intl.string(eD.t.iEgBXp), (0, r.jsx)(f.Z_L, {
          onClick: () => v.A.setEnabled(false),
          noticeType: eC.kqX.STREAMER_MODE,
          children: eD.intl.string(eD.t.R9GHya)
        })]
      });
    case eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
      if (null == c.metadata) return null;
      let {
        skuId: e4, applicationId: e5
      } = c.metadata, e7 = eb.A.get(e4), e8 = P.A.getApplication(e5);
      if (null == e7 || null == e8) return null;
      let e9 = {
        page: eC.liQ.IN_APP
      };
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => m.X(e7.id),
          noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: ex.PC
        }), eD.intl.format(eD.t["g3MU/+"], {
          applicationName: e8.name,
          skuName: e7.name
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
          onClick: () => (0, S.j)({
            applicationId: e8.id,
            skuId: e7.id,
            openPremiumPaymentModal: () => {
              (0, ee.A)({
                initialPlanId: null,
                subscriptionTier: ew.pe.TIER_2,
                analyticsLocations: g,
                analyticsObject: e9
              })
            },
            analyticsLocations: g,
            analyticsLocationObject: e9,
            context: __OVERLAY__ ? eC.BRT.OVERLAY : eC.BRT.APP
          }).then(() => m.X(e7.id)),
          children: eD.intl.string(eD.t.KEwPYx)
        })]
      });
    case eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
      if (null == c.metadata) return null;
      let {
        skuId: e,
        applicationId: t
      } = c.metadata, n = eb.A.get(e), i = P.A.getApplication(t);
      if (null == n || null == i) return null;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.PREMIUM_TIER_1,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: ex.PC
        }), eD.intl.format(eD.t.LquIKC, {
          applicationName: i.name,
          skuName: n.name
        }), (0, r.jsx)(f.zr9, {
          children: (0, r.jsx)(o.N_, {
            onClick: () => ez(),
            to: {
              pathname: eC.BVt.APPLICATION_STORE_LISTING_SKU(n.id),
              state: {
                scrollRestoration: false
              }
            },
            children: eD.intl.string(eD.t.hvVgAZ)
          })
        })]
      })
    }
    case eC.kqX.SURVEY: {
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
          noticeType: eC.kqX.SURVEY,
          onClick: () => {
            (0, A.pX)(t, true)
          }
        }), n, (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.SURVEY,
          onClick: () => {
            s ? (0, ei.K)(o) : window.open(a, "_blank"), (0, A.pX)(t, false)
          },
          children: i
        })]
      })
    }
    case eC.kqX.CORRUPT_INSTALLATION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eD.intl.string(eD.t["ugxmk/"]), (0, r.jsx)(f.eCN, {
          href: eI.A.getArticleURL(eC.MVz.CORRUPT_INSTALLATION),
          target: "_blank",
          noticeType: c.type,
          children: eD.intl.string(eD.t["6ik4Xk"])
        })]
      });
    case eC.kqX.VIDEO_UNSUPPORTED_BROWSER:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.VIDEO_UNSUPPORTED_BROWSER
        }), eD.intl.string(eD.t.wVjKGi), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.VIDEO_UNSUPPORTED_BROWSER,
          onClick: () => {
            (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
              return t => (0, r.jsx)(e, ej({
                source: "Video unsupported browser"
              }, t))
            })
          },
          children: eD.intl.string(eD.t["1WjMbC"])
        })]
      });
    case eC.kqX.DISPATCH_ERROR:
      if (null == c.metadata) return null;
      let {
        error: te
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.DISPATCH_ERROR
        }), null == te ? true : te.displayMessage, (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.DISPATCH_ERROR,
          onClick: () => (0, f.mMO)(async () => {
            let {
              default: e
            } = await n.e("88014").then(n.bind(n, 627261));
            return t => (0, r.jsx)(e, ej({}, t))
          }),
          children: eD.intl.string(eD.t.hvVgAZ)
        })]
      });
    case eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS:
      if (null == c.metadata) return null;
      let {
        progress: tt, total: tn, name: tr
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DEFAULT,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS
        }), (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          children: [null != tr ? eD.intl.formatToPlainString(eD.t["pHj+z4"], {
            name: "".concat(tr),
            progress: tt,
            total: tn
          }) : eD.intl.formatToPlainString(eD.t["lHZn+A"], {
            progress: tt,
            total: tn
          }), (0, r.jsx)(f.y$y, {
            type: f.y$y.Type.PULSING_ELLIPSIS,
            className: ex.gO
          })]
        })]
      });
    case eC.kqX.APPLICATION_TEST_MODE:
      if (null == c.metadata) return null;
      if (null != eO.A.testModeEmbeddedApplicationId) return (0, r.jsx)(f.$Td, {
        color: f.Hv$.WARNING,
        children: (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          align: x.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eD.intl.format(eD.t["1qxVe4"], {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(f.PMB, {
            onClick: I.cL,
            noticeType: eC.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
      return (0, r.jsx)(f.$Td, {
        color: f.Hv$.WARNING,
        children: (0, r.jsxs)(x.A, {
          justify: x.A.Justify.CENTER,
          align: x.A.Align.CENTER,
          children: [(0, r.jsx)("div", {
            children: eD.intl.format(eD.t.Fv5HrE, {
              applicationName: c.metadata.applicationName
            })
          }), (0, r.jsx)(T.A, {
            dropdownSize: T.p.DropdownSizes.SMALL,
            className: ex.aV,
            color: T.p.Colors.WHITE,
            look: T.p.Looks.OUTLINED,
            size: T.p.Sizes.MIN,
            onSKUSelect: e => O.ct(e.id, {
              analyticsSource: {
                page: null,
                section: eC.JJy.NOTIFICATION_BAR,
                object: eC.ZSU.NAVIGATION_LINK
              }
            }),
            applicationId: c.metadata.applicationId,
            children: eD.intl.string(eD.t.Q5ZgpK)
          }), (0, r.jsx)(f.PMB, {
            onClick: I.cL,
            noticeType: eC.kqX.APPLICATION_TEST_MODE
          })]
        })
      });
    case eC.kqX.VIEWING_ROLES:
      return (0, r.jsx)(X.A, {});
    case eC.kqX.PREMIUM_UNCANCEL:
      return (0, r.jsxs)(f.$Td, {
        color: eQ === ew.PremiumTypes.TIER_1 ? f.Hv$.PREMIUM_TIER_1 : eQ === ew.PremiumTypes.TIER_0 ? f.Hv$.PREMIUM_TIER_0 : f.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), (0, r.jsx)(f.tvc, {
          size: "md",
          color: "currentColor",
          className: ex.PC
        }), eQ === ew.PremiumTypes.TIER_1 ? eD.intl.formatToPlainString(eD.t.fXv4wm, {
          daysLeft: c.metadata.daysLeft
        }) : eQ === ew.PremiumTypes.TIER_0 ? eD.intl.formatToPlainString(eD.t.ZOHZMr, {
          daysLeft: c.metadata.daysLeft
        }) : eD.intl.formatToPlainString(eD.t.outyHh, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.PREMIUM_UNCANCEL,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("14704"), n.e("47827")]).then(n.bind(n, 174705));
              return t => (0, r.jsx)(e, ek(ej({}, t), {
                daysLeft: c.metadata.daysLeft,
                premiumType: eQ,
                analyticsSource: "Nag Bar",
                premiumSubscription: c.metadata.premiumSubscription
              }))
            })
          },
          children: eQ === ew.PremiumTypes.TIER_1 ? eD.intl.string(eD.t.BkbUPM) : eQ === ew.PremiumTypes.TIER_0 ? eD.intl.string(eD.t.Px978X) : eD.intl.string(eD.t.LW5tCE)
        })]
      });
    case eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
      let {
        daysPastDue: ti, dismissUntil: ta
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: c.type,
          onClick: () => {
            ez(ta)
          }
        }), eD.intl.format(eD.t.zxU0Kp, {
          daysPastDue: ti
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
          onClick: () => {
            ez(ta), (0, ef.openUserSettings)(ed.X.SUBSCRIPTIONS_PANEL, {
              section: eC.nc_.SUBSCRIPTIONS
            })
          },
          children: eD.intl.string(eD.t.q8rxeS)
        })]
      });
    case eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eD.intl.string(eD.t.LlZaoX), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ef.openUserSettings)(ed.X.SUBSCRIPTIONS_PANEL, {
              section: eC.nc_.SUBSCRIPTIONS
            })
          },
          children: eD.intl.string(eD.t["Zpd+Yq"])
        })]
      });
    case eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eD.intl.string(eD.t["30YfCr"]), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ef.openUserSettings)(ed.X.SUBSCRIPTIONS_PANEL, {
              section: eC.nc_.SUBSCRIPTIONS
            })
          },
          children: eD.intl.string(eD.t.U5pKWA)
        })]
      });
    case eC.kqX.PREMIUM_MISSING_PAYMENT:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd)
          }
        }), eQ === ew.PremiumTypes.TIER_1 ? eD.intl.formatToPlainString(eD.t.b6QUvf, {
          daysLeft: c.metadata.daysLeft
        }) : eQ === ew.PremiumTypes.TIER_0 ? eD.intl.formatToPlainString(eD.t["tURZ/M"], {
          daysLeft: c.metadata.daysLeft
        }) : eD.intl.formatToPlainString(eD.t.AyC74I, {
          daysLeft: c.metadata.daysLeft
        }), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.PREMIUM_MISSING_PAYMENT,
          onClick: () => {
            var e, t;
            ez(null == (t = c.metadata) || null == (e = t.premiumSubscription) ? true : e.currentPeriodEnd), (0, ef.openUserSettings)(ed.X.SUBSCRIPTIONS_PANEL, {
              section: eC.nc_.SUBSCRIPTIONS
            })
          },
          children: eQ === ew.PremiumTypes.TIER_1 ? eD.intl.string(eD.t.lboF5O) : eQ === ew.PremiumTypes.TIER_0 ? eD.intl.string(eD.t["4UPwOq"]) : eD.intl.string(eD.t["P/VvGb"])
        })]
      });
    case eC.kqX.BACK_TO_PREVIOUS_SCREEN:
      return (0, r.jsx)(q.y, {
        buttonText: null != (t = c.buttonText) ? t : eD.intl.string(eD.t["/g10LC"]),
        onGoBack: c.callback,
        onDismiss: () => ez(),
        showCloseButton: true
      });
    case eC.kqX.AUTOMOD_QUARANTINED_USER_PROFILE:
      return (0, r.jsx)(Y.A, {
        guildId: l,
        analyticsLocations: g
      });
    case eC.kqX.QUARANTINED:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [eD.intl.string(eD.t.DVFJYf), (0, r.jsx)(f.eCN, {
          href: eR.q,
          target: "_blank",
          noticeType: c.type,
          children: eD.intl.string(eD.t.kvHdFN)
        }), (0, r.jsx)(f.MzZ, {
          href: eI.A.getArticleURL(eC.MVz.QUARANTINE),
          target: "_blank",
          className: ex.yw,
          children: eD.intl.string(eD.t.hvVgAZ)
        })]
      });
    case eC.kqX.BLOCKED_BY_PROXY:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [eD.intl.string(eD.t.Ugijzi), (0, r.jsx)(f.eCN, {
          href: "".concat(eC.qF7.STATUS),
          noticeType: c.type,
          children: eD.intl.string(eD.t.hvVgAZ)
        }), (0, r.jsx)(f.PMB, {
          onClick: () => ez(),
          noticeType: eC.kqX.BLOCKED_BY_PROXY
        })]
      });
    case eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION:
      let {
        dismissUntil: ts, decisionId: to
      } = c.metadata;
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.WARNING,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION,
          onClick: () => {
            null != l && (0, H.wu)(l), ez(ts)
          }
        }), eD.intl.string(eD.t.B8ruyY), (0, r.jsx)(f.zr9, {
          onClick: () => {
            null != l && (0, H.W5)(l, to, () => {
              ez(ts), (0, H.wu)(l)
            })
          },
          children: eD.intl.string(eD.t.oX14El)
        }), null != l ? (0, r.jsx)(f.zr9, {
          onClick: () => Z.A.open(l, eC.BEX.GUILD_AUTOMOD, true, eC.nd0.AUTOMOD_MENTION_SPAM),
          children: eD.intl.string(eD.t["1R7QIx"])
        }) : null]
      });
    case eC.kqX.SAFETY_USER_SENTIMENT_NAGBAR:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.BRAND,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            es.li(), ez()
          }
        }), eD.intl.string(eD.t.I1nKfO), (0, r.jsx)(f.Z_L, {
          noticeType: eC.kqX.SAFETY_USER_SENTIMENT_NAGBAR,
          onClick: () => {
            (0, f.mMO)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
              return t => (0, r.jsx)(e, ej({}, t))
            }), es.li(), ez()
          },
          children: eD.intl.string(eD.t.l5xYnH)
        })]
      });
    case eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
      let tl = s()().add(5, "days").toDate();
      return (0, r.jsx)(er.A, {
        dismissCurrentNotice: () => {
          (0, L.Dr)(ev.pe[eC.kqX.PREMIUM_TIER_2_TRIAL_ENDING]), ez(tl)
        },
        subscriptionTier: ew.pe.TIER_2
      });
    case eC.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
      let tc = s()().add(5, "days").toDate();
      return (0, r.jsx)(en.A, {
        dismissCurrentNotice: () => {
          ez(tc)
        },
        subscriptionTier: ew.pe.TIER_2
      });
    case eC.kqX.QUESTS_PROGRESS_INTERRUPTION:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.DANGER,
        children: [(0, r.jsx)(f.PMB, {
          noticeType: eC.kqX.QUESTS_PROGRESS_INTERRUPTION,
          onClick: () => {
            var e;
            (null == (e = c.metadata) ? true : e.streamKey) != null && (0, ea.lk)(c.metadata.streamKey)
          }
        }), eD.intl.string(eD.t.rOx44m)]
      });
    case eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR:
      return (0, r.jsxs)(f.$Td, {
        color: f.Hv$.BRAND,
        children: [(0, r.jsx)(f.PMB, {
          onClick: () => {
            var e;
            ez(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR
        }), eD.intl.string(eD.t["0klLS7"]), (0, r.jsx)(f.Z_L, {
          onClick: () => {
            var e;
            (0, el.$)(), ez(null == (e = c.metadata) ? true : e.dismissUntil)
          },
          noticeType: eC.kqX.BLOCK_USER_FEEDBACK_NAGBAR,
          children: eD.intl.string(eD.t.e4y2VM)
        })]
      });
    case eC.kqX.IGNORE_USER_FEEDBACK_NAGBAR:
      return (0, r.jsx)(eo.A, {});
    case eC.kqX.SYSTEM_SERVICE_WARNING:
      return (0, r.jsx)(eu.A, {});
    default:
      return null
  }
});

function eZ() {
  let {
    analyticsLocations: e
  } = (0, R.Ay)(w.A.NOTICE);
  return (0, r.jsx)(R.f5, {
    value: e,
    children: (0, r.jsx)(eq, {})
  })
}