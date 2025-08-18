/** Chunk was on 1272 **/
/** chunk id: 358924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk438139 = require("./438139.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk726542 = require("./726542.js"),
  Chunk638880 = require("./638880.js"),
  Chunk655922 = require("./655922.js"),
  Chunk122810 = require("./122810.js"),
  Chunk833664 = require("./833664.js"),
  Chunk503438 = require("./503438.js"),
  Chunk420660 = require("./420660.js"),
  Chunk74433 = require("./74433.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk933557 = require("./933557.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk264165 = require("./264165.jsx"),
  Chunk548816 = require("./548816.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk707409 = require("./707409.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk849171 = require("./849171.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk395361 = require("./395361.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk81063 = require("./81063.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk599706 = require("./599706.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84822 = require("./84822.js");
let K = [14, 14, 12, 12, 10, 8, 6],
  q = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(u.Text, {
      className: o()(Y.textContent, t),
      variant: "text-sm/semibold",
      children: e
    })
  },
  Q = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    return (0, i.jsx)(u.Text, {
      className: o()(Y.textContent, t),
      variant: "text-xs/normal",
      children: e
    })
  },
  X = (0, Chunk438139.Z)(e => {
    let {
      message: t
    } = e;
    return (0, i.jsx)("div", {
      className: Y.__invalid_timestamp,
      children: t
    })
  }),
  J = e => {
    let {
      children: t
    } = e;
    return (0, i.jsx)("section", {
      className: Y.section,
      children: t
    })
  };
class $ extends Chunk647438.Component {
  renderTimePlayed() {
    let {
      activity: e
    } = this.props, {
      timestamps: t
    } = module;
    return null == exports || !(0, Chunk833664.Z)(module) || (0, Chunk503438.Z)(module) ? null : Q((0, Chunk122810.Z)(module) ? (0, Chunk951288.jsx)(X, {
      timestamps: exports
    }) : (0, Chunk951288.jsx)(Chunk707409.ZP, {
      start: exports.start,
      end: exports.end,
      location: Chunk707409.ZP.Locations.USER_ACTIVITY,
      className: Chunk84822.__invalid_playTime
    }))
  }
  render() {
    var e, t;
    let {
      activity: {
        assets: r,
        details: l,
        state: a,
        application_id: s
      },
      getAssetImage: c
    } = this.props;
    return (0, Chunk951288.jsx)(J, {
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk84822.activitySection,
        children: [null != r && 0 !== Object.keys(r).length ? (0, Chunk951288.jsxs)("div", {
          className: Chunk84822.activitySectionAssets,
          children: [(0, Chunk951288.jsx)("img", {
            alt: null != (e = r.large_text) ? module : "",
            src: Chunk692547(Chunk442837, r.large_image, [160, 160]),
            className: o()(Chunk84822.largeImage, {
              [Chunk84822.largeImageMask]: null != r.small_image
            })
          }), null != r.small_image ? (0, Chunk951288.jsx)("img", {
            alt: null != (t = r.small_text) ? exports : "",
            src: Chunk692547(Chunk442837, r.small_image, [64, 64]),
            className: Chunk84822.smallImage
          }) : null]
        }) : (0, Chunk951288.jsx)("div", {
          className: Chunk84822.activitySectionAssets,
          children: (0, Chunk951288.jsx)("img", {
            alt: "",
            src: require("./211827.js"),
            className: Chunk84822.largeImage
          })
        }), (0, Chunk951288.jsxs)("div", {
          children: [q(null != Chunk647438 && "" !== Chunk647438 ? Chunk647438 : Chunk388032.intl.string(Chunk388032.t["2TbM/P"])), null != Chunk120356 ? Q(Chunk120356) : null, this.renderTimePlayed()]
        })]
      })
    })
  }
}
var ee = ((r = ee || {}).XBOX = "XBOX", r.SPOTIFY = "SPOTIFY", r.MULTIPLE = "MULTIPLE", r);
let et = e => {
  let t, {
    src: n,
    onClick: r,
    onContextMenu: l
  } = e;
  switch (n) {
    case "XBOX":
      t = (0, i.jsx)(G.Z, {
        className: Y.headerIcon,
        color: c.Z.unsafe_rawColors.PRIMARY_300.css
      });
      break;
    case "SPOTIFY":
      t = (0, i.jsx)(U.Z, {
        className: Y.headerIcon,
        color: c.Z.unsafe_rawColors.SPOTIFY.css
      });
      break;
    case "MULTIPLE":
      t = (0, i.jsx)("div", {
        className: Y.multipleIconWrapper,
        children: (0, i.jsx)(u.iWm, {
          size: "md",
          className: o()(Y.headerIcon, Y.multipleIcon),
          color: c.Z.unsafe_rawColors.PRIMARY_300.css
        })
      });
      break;
    default:
      t = (0, i.jsx)("img", {
        src: null != n ? n : true,
        alt: "",
        className: Y.headerIcon
      })
  }
  return null != r || null != l ? (0, i.jsx)(u.P3F, {
    onClick: r,
    className: o()(null != r ? Y.clickable : ""),
    onContextMenu: l,
    children: t
  }) : t
};
et.Src = ee;
let en = e => {
  let {
    priorityUser: t,
    title: n,
    subtitle: r,
    icon: l,
    onSubtitleClick: a,
    onIconClick: o,
    onContextMenu: s,
    guildId: c
  } = e, d = (0, i.jsx)(u.Text, {
    color: "header-secondary",
    className: Y.textContent,
    variant: "text-sm/normal",
    children: r
  });
  return (0, i.jsxs)("header", {
    className: null != l ? Y.headerFull : Y.headerSimple,
    children: [(0, i.jsx)(u.qEK, {
      src: t.user.getAvatarURL(c, 32),
      "aria-label": t.user.username,
      size: u.EFr.SIZE_32,
      className: Y.headerAvatar,
      status: t.status,
      onContextMenu: s
    }), (0, i.jsxs)("div", {
      className: Y.__invalid_headerDetails,
      children: [(0, i.jsx)(u.Text, {
        className: Y.textContent,
        variant: "text-md/semibold",
        children: n
      }), null != a ? (0, i.jsx)(u.P3F, {
        className: Y.clickable,
        onClick: a,
        children: d
      }) : d]
    }), null != l && null != o ? (0, i.jsx)(u.P3F, {
      className: Y.clickable,
      onClick: o,
      children: l
    }) : l]
  })
};
en.Icon = et;
let er = e => {
  var t, n, {
      children: r,
      className: l
    } = e,
    a = function(e, t) {
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
    }(e, ["children", "className"]);
  return (0, i.jsx)(u.tEY, {
    children: (0, i.jsx)(T.Z, (t = function(e) {
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
      className: o()(l, Y.wrapper),
      padded: true
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
er.Header = en, er.Body = e => {
  let {
    children: t
  } = e;
  return (0, i.jsx)(T.Z, {
    inset: true,
    padded: false,
    className: Y.body,
    children: t
  })
}, er.Separator = e => {
  let {
    inset: t,
    className: n
  } = e;
  return (0, i.jsx)("div", {
    className: o()(Y.separator, {
      [Y.inset]: t
    }, n)
  })
}, er.VoiceSection = e => {
  var t;
  let {
    guild: n,
    channel: r,
    partySize: a,
    members: s,
    onChannelContextMenu: c
  } = e, p = l.useRef(null), f = (0, C.ZP)(r, true), h = (0, R.EB)(n, 32), g = (0, R.gM)(n);
  return (0, i.jsx)(J, {
    children: (0, i.jsxs)("div", {
      className: Y.voiceSection,
      ref: p,
      onContextMenu: e => c(e, r),
      children: [(0, i.jsx)(u.P3F, {
        onClick: () => (0, w.X)(n.id),
        "aria-hidden": true,
        tabIndex: false,
        children: (0, i.jsxs)("div", {
          className: Y.voiceSectionAssets,
          children: [null != h ? (0, i.jsx)("img", {
            alt: "",
            src: h,
            className: o()(Y.voiceSectionGuildImage, Y.largeImageMask)
          }) : (0, i.jsx)("div", {
            className: Y.voiceSectionNoGuildImageWrapper,
            children: (0, i.jsx)("div", {
              className: Y.voiceSectionNoGuildImage,
              style: {
                fontSize: null != (t = K[g.length]) ? t : K[K.length - 1]
              },
              children: g
            })
          }), (0, i.jsx)("div", {
            className: Y.voiceSectionIconWrapper,
            children: (0, i.jsx)(u.gj8, {
              size: "md",
              color: "currentColor",
              className: Y.voiceSectionIcon
            })
          })]
        })
      }), (0, i.jsx)(u.P3F, {
        onClick: () => {
          d.default.selectVoiceChannel(r.id), (0, Z.Kh)(r.id)
        },
        focusProps: {
          ringTarget: p
        },
        children: (0, i.jsxs)("div", {
          className: Y.voiceSectionDetails,
          children: [q(n.name, Y.voiceSectionText), Q(f, Y.voiceSectionText)]
        })
      }), (0, i.jsx)(F.Z, {
        partySize: a,
        members: s,
        guildId: n.id
      })]
    })
  })
}, er.GameSection = e => {
  let {
    icon: t,
    name: n,
    partySize: r,
    members: l
  } = e;
  return (0, i.jsx)(J, {
    children: (0, i.jsxs)("div", {
      className: Y.gameSection,
      children: [null != t ? (0, i.jsx)("img", {
        alt: "",
        src: t,
        className: Y.gameSectionIcon
      }) : null, (0, i.jsxs)("div", {
        children: [q(n), Q(W.intl.formatToPlainString(W.t.C4WXvb, {
          memberCount: r.totalSize
        }))]
      }), (0, i.jsx)(F.Z, {
        partySize: r,
        members: l
      })]
    })
  })
}, er.RichPresenceSection = $, er.XboxSection = e => {
  let {
    title: t
  } = e;
  return (0, i.jsx)(J, {
    children: (0, i.jsxs)("div", {
      className: Y.xboxSection,
      children: [(0, i.jsx)(G.Z, {
        className: Y.xboxSectionIcon
      }), (0, i.jsxs)("div", {
        className: Y.__invalid_xboxSectionDetails,
        children: [q(t), Q(W.intl.string(W.t["JG9r+/"]))]
      })]
    })
  })
}, er.SpotifySection = e => {
  var t;
  let {
    activity: {
      assets: n,
      details: r,
      state: l,
      application_id: a
    },
    partySize: s,
    members: u,
    isSolo: d,
    getAssetImage: p
  } = e;
  return (0, i.jsx)(J, {
    children: (0, i.jsxs)("div", {
      className: Y.spotifySection,
      children: [null != n ? (0, i.jsxs)("div", {
        className: Y.activitySectionAssets,
        children: [(0, i.jsx)("img", {
          alt: null != (t = n.large_text) ? t : "",
          src: p(a, n.large_image, [160, 160]),
          className: o()(Y.largeImage, Y.borderRadius0, {
            [Y.largeImageMask]: null != n.small_image
          })
        }), d ? null : (0, i.jsx)(U.Z, {
          className: Y.smallImage,
          color: c.Z.unsafe_rawColors.SPOTIFY.css
        })]
      }) : (0, i.jsx)("div", {}), (0, i.jsxs)("div", {
        children: [null != r ? q(r) : null, null != l ? Q(l) : null]
      }), (0, i.jsx)(F.Z, {
        minAvatarsShown: d ? 2 : 1,
        partySize: s,
        members: u
      })]
    })
  })
}, er.TwitchSection = e => {
  let t, {
      activity: r,
      user: l,
      getAssetImage: a,
      guildId: s
    } = e,
    {
      name: c,
      details: d,
      assets: p,
      application_id: f
    } = r;
  if (null != p && (0, E.Z)(r)) {
    var g;
    t = (0, i.jsx)(N.Z, {
      className: Y.twitchSectionPreviewWrapper,
      aspectRatio: 16 / 9,
      children: (0, i.jsxs)(u.P3F, {
        href: (0, m.Z)(r),
        tag: "a",
        target: "_blank",
        children: [(0, i.jsx)("img", {
          alt: null != (g = p.large_text) ? g : "",
          src: a(f, p.large_image, [900, 500]),
          className: Y.twitchSectionPreview
        }), (0, i.jsx)("img", {
          src: n(497726),
          className: Y.twitchSectionPlayButton,
          alt: ""
        })]
      })
    })
  }
  return (0, i.jsxs)(J, {
    children: [(0, i.jsxs)("div", {
      className: o()({
        [Y.twitchSectionSimple]: null == l,
        [Y.twitchSectionFull]: null != l
      }),
      children: [(0, i.jsx)("img", {
        alt: "",
        src: h.Z.get(z.ABu.TWITCH).icon.lightSVG,
        className: Y.twitchSectionIcon
      }), (0, i.jsxs)("div", {
        children: [q(c), null != d ? Q(d) : null]
      }), null != l ? (0, i.jsx)(u.qEK, {
        src: l.getAvatarURL(s, 24),
        "aria-label": l.username,
        className: Y.twitchSectionAvatar,
        size: u.EFr.SIZE_24
      }) : null]
    }), t]
  })
}, er.ApplicationStreamingSection = e => {
  var t, n;
  let {
    activity: r,
    user: l,
    applicationStream: a,
    onPreviewClick: o,
    guildId: c
  } = e, d = (0, s.e7)([k.Z], () => k.Z.getChannel(a.channelId)), [p, f] = (0, j.wq)(d), h = (0, i.jsxs)(u.P3F, {
    onClick: p ? o : true,
    className: Y.applicationStreamingPreviewWrapper,
    children: [(0, i.jsx)(A.Z, {
      stream: a,
      className: Y.applicationStreamingPreviewSize
    }), (0, i.jsx)(u.Text, {
      className: Y.applicationStreamingHoverText,
      variant: "text-sm/medium",
      color: "always-white",
      children: (0, j.P9)(f)
    })]
  }), g = null != (n = null == (t = (0, y.Z)(r, a)) ? true : t.activityText) ? n : W.intl.string(W.t.eXan7O);
  return (0, i.jsxs)(J, {
    children: [(0, i.jsxs)("div", {
      className: Y.applicationStreamingSection,
      children: [(0, i.jsx)(u.qEK, {
        size: u.EFr.SIZE_32,
        src: l.getAvatarURL(c, 32),
        "aria-label": l.username,
        className: Y.applicationStreamingAvatar
      }), (0, i.jsxs)("div", {
        children: [q(H.ZP.getName(l)), Q(g)]
      }), (0, i.jsx)(S.ZP, {
        size: S.ZP.Sizes.SMALL
      })]
    }), h]
  })
}, er.EmbeddedActivitySection = e => {
  let {
    activity: t,
    channel: n,
    guildId: r,
    participants: a
  } = e, [o, c] = l.useState(null), d = t.application_id;
  l.useEffect(() => {
    null != d && (0, B.hR)(d, ["embedded_background"]).then(e => {
      let [t] = e;
      return c(t)
    })
  }, [d]);
  let p = (0, s.Wu)([M.default, D.default], () => Array.from(a).map(e => D.default.getId() === e ? null : M.default.getUser(e)).filter(V.lm)),
    h = (0, f.O)(),
    {
      analyticsLocations: m
    } = (0, v.ZP)();
  if (null == d) return null;
  let b = I.Z.getApplication(d);
  if (null == b) return null;
  let _ = null != t.created_at && t.created_at > 0 ? {
      start: t.created_at
    } : true,
    O = (0, B.xF)(b.id, o, 300);
  return (0, i.jsxs)(J, {
    children: [(0, i.jsxs)("div", {
      className: Y.embeddedActivityTopRow,
      children: [(0, i.jsx)(P.Z, {
        game: b,
        size: P.Z.Sizes.XSMALL,
        className: Y.embeddedActivityIcon
      }), (0, i.jsx)("div", {
        className: Y.embeddedActivityName,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/semibold",
          children: b.name
        })
      }), null != _ ? (0, i.jsx)("div", {
        className: Y.embeddedActivityTimeElapsed,
        children: (0, i.jsx)(u.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: (0, i.jsx)(X, {
            timestamps: _
          })
        })
      }) : null]
    }), (0, i.jsxs)("div", {
      className: Y.embeddedActivityPlayerContainer,
      children: [null != O ? (0, i.jsx)("img", {
        src: O,
        alt: b.name,
        className: Y.embeddedActivityImage
      }) : null, (0, i.jsxs)("div", {
        className: Y.embeddedActivityImageOverlay,
        children: [(0, i.jsx)(L.OV, {
          users: p,
          guildId: r,
          channelId: n.id
        }), (0, i.jsx)("div", {
          className: Y.embeddedActivityJoinWrapper,
          children: (0, i.jsx)(u.zxk, {
            variant: "primary",
            size: "sm",
            text: W.intl.string(W.t.VJlc0d),
            onClick: e => {
              e.stopPropagation(), (0, g.Z)({
                applicationId: d,
                activityChannelId: n.id,
                locationObject: h.location,
                analyticsLocations: m
              })
            }
          })
        })]
      })]
    })]
  })
};
let ei = er