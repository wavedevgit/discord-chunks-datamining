/** Chunk was on 21738 **/
/** chunk id: 928636, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eO
}), require("./747238.js"), require("./812715.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk492684 = require("./492684.jsx"),
  Chunk212245 = require("./212245.js"),
  Chunk573648 = require("./573648.js"),
  Chunk447031 = require("./447031.js"),
  Chunk908289 = require("./908289.js"),
  Chunk682261 = require("./682261.js"),
  Chunk672979 = require("./672979.js"),
  Chunk90644 = require("./90644.js"),
  Chunk960076 = require("./960076.js"),
  Chunk847177 = require("./847177.js"),
  Chunk359549 = require("./359549.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk47167 = require("./47167.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk681827 = require("./681827.jsx"),
  Chunk755395 = require("./755395.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk609425 = require("./609425.js"),
  Chunk73392 = require("./73392.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk279250 = require("./279250.js"),
  Chunk607407 = require("./607407.jsx"),
  Chunk290987 = require("./290987.jsx"),
  Chunk928550 = require("./928550.js"),
  Chunk594262 = require("./594262.js"),
  Chunk378570 = require("./378570.js"),
  Chunk345942 = require("./345942.js"),
  Chunk804980 = require("./804980.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk879945 = require("./879945.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk139675 = require("./139675.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk281489 = require("./281489.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270582 = require("./270582.js");
let es = [14, 14, 12, 12, 10, 8, 6],
  eo = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(h.Text, {
      className: s()(ea.P_, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  ec = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(h.Text, {
      className: s()(ea.P_, t),
      variant: "text-xs/normal",
      color: "text-muted",
      children: e
    })
  },
  eu = (0, Chunk492684.A)(e => {
    let {
      message: t
    } = e;
    return (0, i.jsx)("div", {
      className: ea.__invalid_timestamp,
      children: t
    })
  }),
  ed = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)("section", {
      className: ea.uW,
      children: t
    })
  },
  ep = e => {
    let {
      inset: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(ea.me, {
        [ea.C5]: t
      }, n)
    })
  },
  eh = e => {
    let {
      onCloudPlayClick: t,
      analyticsLocations: n
    } = e;
    return (0, T.A)({
      name: o.ImpressionNames.CLOUD_PLAY_CTA,
      type: o.ImpressionTypes.VIEW,
      properties: {
        location_stack: n
      }
    }), (0, i.jsx)(p.m, {
      text: el.intl.string(el.t.JVwWva),
      children: (0, i.jsx)(h.Button, {
        size: "sm",
        variant: "primary",
        icon: h.hpF,
        text: el.intl.string(el.t.YsIsPU),
        onClick: t
      })
    })
  },
  eg = e => {
    let {
      activity: t,
      user: n
    } = e, r = (0, Y.l)({
      activity: t,
      user: n,
      supportsAskToJoin: false
    }), i = null != r;
    return {
      isJoinActivityButtonShown: i,
      joinActivityButtonAction: r,
      hasButton: i
    }
  },
  ef = e => {
    let {
      activity: t,
      user: n
    } = e, {
      joinActivityButtonAction: r,
      isJoinActivityButtonShown: l
    } = eg({
      activity: t,
      user: n
    });
    if (l && null != r) {
      let {
        isJoining: e,
        handleJoinRequest: t,
        buttonCTA: n,
        tooltip: l,
        isEnabled: a
      } = r;
      return (0, i.jsx)(p.m, {
        text: l,
        asContainer: !a,
        children: (0, i.jsx)(h.Button, {
          size: "sm",
          variant: "secondary",
          icon: h._xR,
          text: n,
          disabled: !a,
          loading: e,
          onClick: e => {
            e.stopPropagation(), t()
          }
        })
      })
    }
    return null
  },
  em = e => {
    let {
      activity: t,
      analyticsLocations: n
    } = e, {
      application_id: r,
      name: l
    } = t, {
      data: a
    } = (0, j.YY)(r), s = (0, S.A)({
      application: a,
      analyticsLocations: n
    }), o = (0, M.JZ)(u.M.CLOUD_PLAY_NEW_BADGE), c = (0, F.L)(r);
    return null == s || c ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(ep, {
        className: ea.gi
      }), (0, i.jsxs)("div", {
        className: ea.DK,
        children: [(0, i.jsxs)("div", {
          className: ea.tJ,
          children: [o ? null : (0, i.jsx)(h.LpS, {
            text: el.intl.string(el.t.y2b7CA),
            color: d.A.colors.BACKGROUND_BRAND.css
          }), (0, i.jsx)(h.Text, {
            variant: "text-xs/medium",
            children: el.intl.formatToPlainString(el.t.RmiYF3, {
              gameName: l
            })
          })]
        }), (0, i.jsx)(eh, {
          onCloudPlayClick: s,
          analyticsLocations: n
        })]
      })]
    })
  };
var eA = ((r = eA || {}).XBOX = "XBOX", r.SPOTIFY = "SPOTIFY", r.MULTIPLE = "MULTIPLE", r);
let e_ = e => {
  let t, {
    src: n,
    onClick: r,
    onContextMenu: l
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, i.jsx)($.A, {
        className: ea.nr,
        color: d.A.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, i.jsx)(J.A, {
        className: ea.nr,
        color: d.A.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, i.jsx)("div", {
        className: ea.XQ,
        children: (0, i.jsx)(h._xR, {
          size: "md",
          className: s()(ea.nr, ea.iY),
          color: d.A.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, i.jsx)("img", {
        src: null != n ? n : true,
        alt: "",
        className: ea.nr
      })
  }
  return null != r || null != l ? (0, i.jsx)(h.DUT, {
    onClick: r,
    className: s()(null != r ? ea.vk : ""),
    onContextMenu: l,
    children: t
  }) : t
};
e_.Src = eA;
let eb = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: r,
    icon: l,
    onSubtitleClick: a,
    onIconClick: o,
    onContextMenu: c,
    guildId: u,
    displayNameFont: d
  } = e, p = (0, i.jsx)(h.Text, {
    className: ea.P_,
    variant: "text-sm/normal",
    color: "text-muted",
    children: r
  });
  return (0, i.jsxs)("header", {
    className: null != l ? ea.dI : ea.sk,
    children: [(0, i.jsx)(h.euF, {
      src: t.user.getAvatarURL(u, 32),
      "aria-label": t.user.username,
      size: h._3J.SIZE_32,
      className: ea.Nw,
      status: t.status,
      onContextMenu: c
    }), (0, i.jsxs)("div", {
      className: ea.__invalid_headerDetails,
      children: [(0, i.jsx)(h.Text, {
        className: s()(ea.P_, d),
        variant: "text-md/semibold",
        children: n
      }), null != a ? (0, i.jsx)(h.DUT, {
        className: ea.vk,
        onClick: a,
        children: p
      }) : p]
    }), null != l && null != o ? (0, i.jsx)(h.DUT, {
      className: ea.vk,
      onClick: o,
      children: l
    }) : l]
  })
};
eb.Icon = e_;
let eE = e => {
  var t, n;
  let {
    children: r,
    className: l
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["children", "className"]);
  return (0, i.jsx)(h.vN3, {
    children: (0, i.jsx)(D.A, (t = function(e) {
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
    }({
      noBackground: true,
      className: s()(l, ea.iE),
      padded: false
    }, a), n = n = {
      children: r
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
};
eE.Header = eb, eE.Body = e => {
  let {
    children: t
  } = e;
  return (0, i.jsx)(D.A, {
    inset: true,
    padded: false,
    className: ea.rf,
    children: t
  })
}, eE.Separator = ep, eE.VoiceSection = e => {
  var t;
  let {
    guild: n,
    channel: r,
    partySize: a,
    members: o,
    onChannelContextMenu: c
  } = e, u = l.useRef(null), d = (0, P.Ay)(r, true), p = (0, z.Iv)(n, 32), f = (0, z.Rb)(n);
  return (0, i.jsx)(ed, {
    children: (0, i.jsxs)("div", {
      className: ea.iO,
      ref: u,
      onContextMenu: e => c(e, r),
      children: [(0, i.jsx)(h.DUT, {
        onClick: () => (0, W.u)(n.id),
        "aria-hidden": true,
        tabIndex: false,
        children: (0, i.jsxs)("div", {
          className: ea.J4,
          children: [null != p ? (0, i.jsx)("img", {
            alt: "",
            src: p,
            className: s()(ea.y8, ea.p8)
          }) : (0, i.jsx)("div", {
            className: ea.I,
            children: (0, i.jsx)("div", {
              className: ea.lB,
              style: {
                fontSize: null != (t = es[f.length]) ? t : es[es.length - 1]
              },
              children: f
            })
          }), (0, i.jsx)("div", {
            className: ea._s,
            children: (0, i.jsx)(h.HKD, {
              size: "md",
              color: "currentColor",
              className: ea.ZS
            })
          })]
        })
      }), (0, i.jsx)(h.DUT, {
        onClick: () => {
          g.default.selectVoiceChannel(r.id), (0, K.iN)(r.id)
        },
        focusProps: {
          ringTarget: u
        },
        children: (0, i.jsxs)("div", {
          className: ea.U6,
          children: [eo(n.name, ea.BJ), ec(d, ea.BJ)]
        })
      }), (0, i.jsx)(er.A, {
        partySize: a,
        members: o,
        guildId: n.id
      })]
    })
  })
}, eE.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: r,
    members: l,
    activity: a
  } = e, {
    analyticsLocations: s
  } = (0, N.Ay)(C.A.NOW_PLAYING_ITEM_GAME_SECTION);
  return (0, i.jsxs)(ed, {
    children: [(0, i.jsxs)("div", {
      className: ea.yn,
      children: [null != t ? (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: ea.RZ
      }) : null, (0, i.jsxs)("div", {
        children: [eo(n), ec(el.intl.formatToPlainString(el.t.C4WXvc, {
          memberCount: r.totalSize
        }))]
      }), (0, i.jsx)(er.A, {
        partySize: r,
        members: l
      })]
    }), (0, i.jsx)(em, {
      activity: a,
      analyticsLocations: s
    })]
  })
}, eE.RichPresenceSection = e => {
  var t, r, l, a, o;
  let {
    activity: c,
    getAssetImage: u,
    user: d
  } = e, {
    analyticsLocations: p
  } = (0, N.Ay)(C.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION), {
    data: h
  } = (0, j.YY)(c.application_id), {
    assets: g,
    details: f,
    state: m,
    application_id: A
  } = c, {
    hasButton: _
  } = eg({
    activity: c,
    user: d
  }), b = null != (t = null == (o = (0, L.C4)(h)) ? true : o.src) ? t : n(960648), I = (0, S.A)({
    application: h,
    analyticsLocations: p
  });
  return null != c.assets || (0, E.A)(c) || null != I ? (0, i.jsxs)(ed, {
    children: [(0, i.jsxs)("div", {
      className: s()(ea.tL, {
        [ea._2]: _
      }),
      children: [null != g && 0 !== Object.keys(g).length ? (0, i.jsxs)("div", {
        className: ea.YY,
        children: [(0, i.jsx)("img", {
          alt: null != (r = g.large_text) ? r : "",
          src: null != (l = u(A, g.large_image, [160, 160])) ? l : b,
          className: s()(ea.nX, {
            [ea.p8]: null != g.small_image
          })
        }), null != g.small_image ? (0, i.jsx)("img", {
          alt: null != (a = g.small_text) ? a : "",
          src: u(A, g.small_image, [64, 64]),
          className: ea.rp
        }) : null]
      }) : (0, i.jsx)("div", {
        className: ea.YY,
        children: (0, i.jsx)("img", {
          alt: "",
          src: b,
          className: ea.nX
        })
      }), (0, i.jsxs)("div", {
        className: ea.JD,
        children: [eo(null != f && "" !== f ? f : c.name), null != m ? ec(m) : null, (() => {
          let {
            timestamps: e
          } = c;
          return null == e || !(0, O.A)(c) || (0, y.A)(c) ? null : ec((0, E.A)(c) ? (0, i.jsx)(eu, {
            timestamps: e
          }) : (0, i.jsx)(H.Ay, {
            start: e.start,
            end: e.end,
            location: H.Ay.Locations.USER_ACTIVITY,
            className: ea.__invalid_playTime
          }))
        })()]
      }), (0, i.jsx)(ef, {
        activity: c,
        user: d
      })]
    }), (0, i.jsx)(em, {
      activity: c,
      analyticsLocations: p
    })]
  }) : null
}, eE.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, i.jsx)(ed, {
    children: (0, i.jsxs)("div", {
      className: ea.oc,
      children: [(0, i.jsx)($.A, {
        className: ea.Ai
      }), (0, i.jsxs)("div", {
        className: ea.__invalid_xboxSectionDetails,
        children: [eo(t), ec(el.intl.string(el.t["JG9r+9"]))]
      })]
    })
  })
}, eE.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: r,
      state: l,
      application_id: a
    },
    partySize: o,
    members: c,
    isSolo: u,
    getAssetImage: p
  } = e;
  return (0, i.jsx)(ed, {
    children: (0, i.jsxs)("div", {
      className: ea.uy,
      children: [null != n ? (0, i.jsxs)("div", {
        className: ea.YY,
        children: [(0, i.jsx)("img", {
          alt: null != (t = n.large_text) ? t : "",
          src: p(a, n.large_image, [160, 160]),
          className: s()(ea.nX, ea.Dy, {
            [ea.p8]: null != n.small_image
          })
        }), u ? null : (0, i.jsx)(J.A, {
          className: ea.rp,
          color: d.A.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, i.jsx)("div", {}), (0, i.jsxs)("div", {
        children: [null != r ? eo(r) : null, null != l ? ec(l.replace(/; /g, ", ")) : null]
      }), (0, i.jsx)(er.A, {
        minAvatarsShown: u ? 2 : 1,
        partySize: o,
        members: c
      })]
    })
  })
}, eE.TwitchSection = e => {
  let t, {
      activity: r,
      user: l,
      getAssetImage: a,
      guildId: o
    } = e,
    {
      name: c,
      details: u,
      assets: d,
      application_id: p
    } = r;
  if (null != d && (0, I.A)(r)) {
    var g;
    t = (0, i.jsx)(R.A, {
      className: ea.E6,
      aspectRatio: 16 / 9,
      children: (0, i.jsxs)(h.DUT, {
        href: (0, b.A)(r),
        tag: "a",
        target: "_blank",
        children: [(0, i.jsx)("img", {
          alt: null != (g = d.large_text) ? g : "",
          src: a(p, d.large_image, [900, 500]),
          className: ea.ZB
        }), (0, i.jsx)("img", {
          src: n(606621),
          className: ea.vc,
          alt: ""
        })]
      })
    })
  }
  return (0, i.jsxs)(ed, {
    children: [(0, i.jsxs)("div", {
      className: s()({
        [ea.x5]: null == l,
        [ea.Qh]: null != l
      }),
      children: [(0, i.jsx)("img", {
        alt: "",
        src: A.A.get(ei.fg2.TWITCH).icon.lightSVG,
        className: ea.Gq
      }), (0, i.jsxs)("div", {
        children: [eo(c), null != u ? ec(u) : null]
      }), null != l ? (0, i.jsx)(h.euF, {
        src: l.getAvatarURL(o, 24),
        "aria-label": l.username,
        className: ea.AZ,
        size: h._3J.SIZE_24
      }) : null]
    }), t]
  })
}, eE.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: r,
    user: l,
    applicationStream: a,
    onPreviewClick: s,
    guildId: o
  } = e, u = (0, c.bG)([X.A], () => X.A.getChannel(a.channelId)), [d, p] = (0, V.zP)(u), g = (0, i.jsxs)(h.DUT, {
    onClick: d ? s : true,
    className: ea.q_,
    children: [(0, i.jsx)(B.A, {
      stream: a,
      className: ea.IN
    }), (0, i.jsx)(h.Text, {
      className: ea.Er,
      variant: "text-sm/medium",
      color: "always-white",
      children: (0, V.CT)(p)
    })]
  }), f = null != (t = null == (n = (0, v.A)(r, a)) ? true : n.activityText) ? t : el.intl.string(el.t.eXan7B), m = (0, k.A)({
    userId: l.id,
    guildId: o
  }), A = (0, U.a)({
    displayNameStyles: m
  });
  return (0, i.jsxs)(ed, {
    children: [(0, i.jsxs)("div", {
      className: ea.ME,
      children: [(0, i.jsx)(h.euF, {
        size: h._3J.SIZE_32,
        src: l.getAvatarURL(o, 32),
        "aria-label": l.username,
        className: ea.OL
      }), (0, i.jsxs)("div", {
        children: [eo(en.Ay.getName(l), A), ec(f)]
      }), (0, i.jsx)(w.Ay, {
        size: w.Ay.Sizes.SMALL
      })]
    }), g]
  })
}, eE.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: r,
    participants: a
  } = e, [s, o] = l.useState(null), u = t.application_id;
  l.useEffect(() => {
    null != u && (0, ee.RG)(u, ["embedded_background"]).then(e => {
      let [t] = e;
      return o(t)
    })
  }, [u]);
  let d = (0, c.yK)([Z.default, Q.default], () => Array.from(a).map(e => Q.default.getId() === e ? null : Z.default.getUser(e)).filter(et.Vq)),
    p = (0, m.p)(),
    {
      analyticsLocations: g
    } = (0, N.Ay)();
  if (null == u) return null;
  let f = x.A.getApplication(u);
  if (null == f) return null;
  let A = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : true,
    b = (0, ee.uD)(f.id, s, 300);
  return (0, i.jsxs)(ed, {
    children: [(0, i.jsxs)("div", {
      className: ea.h1,
      children: [(0, i.jsx)(G.A, {
        game: f,
        size: G.M.XSMALL,
        className: ea.VZ
      }), (0, i.jsx)("div", {
        className: ea.F0,
        children: (0, i.jsx)(h.Text, {
          variant: "text-sm/semibold",
          children: f.name
        })
      }), null != A ? (0, i.jsx)("div", {
        className: ea.T$,
        children: (0, i.jsx)(h.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, i.jsx)(eu, {
            timestamps: A
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: ea.Kt,
      children: [null != b ? (0, i.jsx)("img", {
        src: b,
        alt: f.name,
        className: ea.pV
      }) : null, (0, i.jsxs)("div", {
        className: ea.d4,
        children: [(0, i.jsx)(q.LN, {
          users: d,
          guildId: r,
          channelId: n.id
        }), (0, i.jsx)("div", {
          className: ea.ZE,
          children: (0, i.jsx)(h.Button, {
            variant: "primary",
            size: "sm",
            text: el.intl.string(el.t.VJlc0S),
            onClick: e => {
              e.stopPropagation(), (0, _.A)({
                applicationId: u,
                activityChannelId: n.id,
                locationObject: p.location,
                analyticsLocations: g
              })
            }
          })
        })]
      })]
    })]
  })
};
let eO = eE