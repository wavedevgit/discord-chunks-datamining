/** Chunk was on web.js **/
/** chunk id: 517820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk320285 = require("./320285.js"),
  Chunk688813 = require("./688813.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk528011 = require("./528011.js"),
  Chunk533244 = require("./533244.js"),
  Chunk825829 = require("./825829.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk36459 = require("./36459.js"),
  Chunk434404 = require("./434404.js"),
  Chunk369664 = require("./369664.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682392 = require("./682392.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk682392.dot
  })
}

function Z(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: i
  } = (0, g.FL)(t);
  switch (i) {
    case g.nj:
    case c.p.RAID:
      return (0, r.jsx)(H, {
        message: t,
        compact: n
      });
    case c.p.MENTION_RAID:
      return (0, r.jsx)(Y, {
        message: t,
        compact: n
      });
    case c.p.ACTIVITY_ALERTS_ENABLED:
      return (0, r.jsx)(V, {
        message: t,
        compact: n
      });
    case c.p.INTERACTION_BLOCKED:
      return (0, r.jsx)(B, {
        compact: n
      });
    default:
      return (0, r.jsx)(F, {
        compact: n
      })
  }
}

function F(e) {
  let {
    compact: t
  } = e;
  return (0, r.jsx)(W, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.Mgn, {
        size: "xs",
        color: f.Z.colors.TEXT_DEFAULT.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-default",
        children: x.intl.string(x.t.VdZCcC)
      })]
    }),
    content: (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t["NxHYX/"])
    })
  })
}

function B(e) {
  let {
    compact: t
  } = e;
  return (0, r.jsx)(W, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.Mgn, {
        size: "xs",
        color: f.Z.colors.TEXT_DEFAULT.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-default",
        children: x.intl.string(x.t["2qTBw/"])
      })]
    }),
    content: (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t.Dc9wCp)
    })
  })
}

function V(e) {
  var t;
  let {
    message: n,
    compact: o
  } = e, a = C.default.getUser((0, g.Sw)(n)), s = null == (t = I.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id, c = null != s && null != a ? T.ZP.getMember(s, a.id) : null, {
    avatarSrc: u,
    avatarDecorationSrc: d,
    eventHandlers: _
  } = (0, v.Z)({
    userId: null == a ? true : a.id,
    guildId: s,
    size: 12
  }), m = i.useRef(null);
  return (0, r.jsx)(W, {
    compact: o,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.bgT, {
        size: "xs",
        color: f.Z.colors.TEXT_FEEDBACK_POSITIVE.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-positive",
        children: x.intl.string(x.t.lVLiFp)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: L.dotSeparatedRow,
      children: [(0, r.jsx)("div", {
        className: L.alertsEnabledSubHeader,
        children: null != c && null != a && (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(p.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: x.intl.string(x.t.qlFrXW)
          }), (0, r.jsx)(S.Z, {
            targetElementRef: m,
            user: a,
            guildId: s,
            channelId: n.channel_id,
            messageId: n.id,
            children: e => (0, r.jsxs)(p.P3F, U(M({
              innerRef: m,
              className: L.alertsEnabledSubHeaderAvatarUsername
            }, e), {
              children: [(0, r.jsx)("div", U(M({}, _), {
                children: (0, r.jsx)(p.qEK, {
                  src: u,
                  avatarDecoration: d,
                  size: p.EFr.SIZE_16,
                  "aria-label": "TODO"
                })
              })), (0, r.jsxs)(p.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != c.colorString ? c.colorString : f.Z.colors.TEXT_DEFAULT.css
                },
                children: [" ", "@", a.username]
              })]
            }))
          })]
        })
      }), (0, r.jsx)(G, {}), (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: l()(n.timestamp).fromNow()
      })]
    }),
    content: (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t["QV/8u5"])
    })
  })
}

function H(e) {
  var t;
  let {
    message: n,
    compact: o
  } = e, {
    joinAttempts: a,
    raidDatetime: s,
    dmsSent: c,
    raidType: _,
    resolvedReason: b
  } = (0, g.FL)(n), y = (0, d.e7)([I.Z], () => I.Z.getChannel(n.channel_id), [n.channel_id]), O = null != (t = null == y ? true : y.guild_id) ? t : null, {
    shouldShowIncidentActions: v
  } = (0, m.mI)(O), S = (0, N.sR)(n.author.id, n.channel_id), T = e => {
    S(e)
  }, C = i.useCallback(() => {
    let e = null == y ? true : y.guild_id;
    null != e && (0, E.kW)(n.id, e)
  }, [n.id, y]), A = _ === u.$.DM_RAID, P = A ? p.Mgn : p.b6m;
  return (0, r.jsx)(W, {
    compact: o,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(P, {
        size: "xs",
        color: f.Z.colors.TEXT_FEEDBACK_CRITICAL.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-critical",
        children: A ? x.intl.string(x.t["8+lHUb"]) : x.intl.string(x.t.xMwcwV)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: L.dotSeparatedRow,
      children: [null != a && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: x.intl.format(x.t["4ylIiu"], {
          joinCount: a
        })
      }), null != c && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: x.intl.format(x.t["5C8Mh3"], {
          dmsSent: c
        })
      }), null != s && (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(G, {}), (0, r.jsx)(p.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: l()(s).fromNow()
        })]
      })]
    }),
    content: null != s ? (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.format(x.t["4QIIZl"], {
        dateTime: s.toLocaleString(x.intl.currentLocale, h.pQ)
      })
    }) : null,
    footerButtons: v ? (0, r.jsxs)("div", {
      className: L.footerRow,
      children: [(0, r.jsxs)("div", {
        className: L.footerAction,
        children: [(0, r.jsx)(p.b7C, {
          size: "xs",
          color: f.Z.unsafe_rawColors.BRAND_500.css,
          className: L.footerIcon
        }), (0, r.jsx)(p.Avr, {
          variant: "primary",
          size: "sm",
          textVariant: "text-xs/medium",
          text: x.intl.string(x.t.DEoVWZ),
          onClick: T
        })]
      }), (0, r.jsx)(G, {}), (0, r.jsx)("div", {
        className: L.footerAction,
        children: (0, r.jsx)(p.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: (0, g.ge)(b),
          onClick: C
        })
      })]
    }) : null
  })
}

function Y(e) {
  var t;
  let {
    message: n,
    compact: o
  } = e, a = null == (t = I.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id, {
    raidDatetime: s,
    decisionId: c,
    suspiciousMentionActivityUntil: u
  } = (0, g.FL)(n);

  function d() {
    null != a && null != c && (0, b.UE)(a, c, () => {
      (0, O.c)(u), (0, b.T9)(a)
    })
  }

  function _() {
    null != a && y.Z.open(a, w.pNK.GUILD_AUTOMOD, true, w.KsC.AUTOMOD_MENTION_SPAM)
  }
  return (0, r.jsx)(W, {
    compact: o,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.Mgn, {
        size: "xs",
        color: f.Z.colors.TEXT_FEEDBACK_CRITICAL.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-critical",
        children: x.intl.string(x.t.C2uIXE)
      })]
    }),
    subheader: (0, r.jsx)("div", {
      className: L.dotSeparatedRow,
      children: null != s && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: l()(s).fromNow()
      })
    }),
    content: (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t.SWIWEV)
    }),
    footerButtons: (0, r.jsxs)("div", {
      className: L.footerRow,
      children: [(0, r.jsx)("div", {
        className: L.footerAction,
        children: (0, r.jsx)(p.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: x.intl.string(x.t.oX14El),
          onClick: d
        })
      }), (0, r.jsx)(G, {}), (0, r.jsx)("div", {
        className: L.footerAction,
        children: (0, r.jsx)(p.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: x.intl.string(x.t["1R7QIx"]),
          onClick: _
        })
      })]
    })
  })
}

function W(e) {
  let {
    compact: t,
    header: n,
    subheader: i,
    content: o,
    footerButtons: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(L.embedCard, {
      [L.compact]: t
    }),
    children: [(0, r.jsxs)("div", {
      className: L.cardContent,
      children: [(0, r.jsxs)("div", {
        className: L.cardHeaderContianer,
        children: [(0, r.jsx)("div", {
          className: L.cardHeader,
          children: n
        }), null != i && (0, r.jsx)("div", {
          className: L.subheader,
          children: i
        })]
      }), o]
    }), null != s && (0, r.jsx)("div", {
      className: a()(L.centeredRowContainer, L.cardFooter, {
        [L.compact]: t
      }),
      children: s
    })]
  })
}

function K(e) {
  let {
    id: t,
    compact: n,
    message: i,
    channel: o
  } = e, {
    avatarSrc: s,
    eventHandlers: {
      onMouseEnter: l,
      onMouseLeave: u
    }
  } = (0, P.m)(true), {
    notificationType: d
  } = (0, g.FL)(i), f = null == d || d === c.p.RAID;
  return (0, r.jsx)("div", {
    onMouseEnter: l,
    onMouseLeave: u,
    children: (0, r.jsx)(R.Z, {
      className: a()(L.mainContainer, {
        [L.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(P.S, {
        src: s
      }),
      iconContainerClassName: L.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(L.content, {
          [L.compact]: n
        }),
        children: [(0, r.jsx)(A.nD, {
          message: i,
          messageClassname: L.spanCorrection,
          className: a()(L.usernameContainer, L.spanCorrection, {
            [L.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: L.spanCorrection,
            children: [(0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: L.username,
              children: x.intl.string(x.t.hG1StD)
            }), (0, r.jsx)(_.Z, {
              type: D.Hb.SYSTEM_DM,
              className: L.systemTag
            }), f && (0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-strong",
              tag: "span",
              className: L.spanCorrection,
              children: x.intl.string(x.t.ufawcw)
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: L.flexLineBreak
        }), (0, r.jsx)(Z, {
          message: i,
          compact: n
        })]
      })
    })
  })
}