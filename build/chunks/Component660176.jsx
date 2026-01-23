/** Chunk was on web.js **/
/** chunk id: 660176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk718564 = require("./718564.js"),
  Chunk348963 = require("./348963.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk585510 = require("./585510.js"),
  Chunk903093 = require("./903093.js"),
  Chunk785823 = require("./785823.js"),
  Chunk449585 = require("./449585.jsx"),
  Chunk137207 = require("./137207.js"),
  Chunk997509 = require("./997509.js"),
  Chunk916768 = require("./916768.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

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
  return (0, r.jsx)("div", {
    className: L.Om
  })
}

function V(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: i
  } = (0, g.Bk)(t);
  switch (i) {
    case g.ZA:
    case c.W.RAID:
      return (0, r.jsx)(Y, {
        message: t,
        compact: n
      });
    case c.W.MENTION_RAID:
      return (0, r.jsx)(W, {
        message: t,
        compact: n
      });
    case c.W.ACTIVITY_ALERTS_ENABLED:
      return (0, r.jsx)(H, {
        message: t,
        compact: n
      });
    case c.W.INTERACTION_BLOCKED:
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
  return (0, r.jsx)(K, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.EpV, {
        size: "xs",
        color: f.A.colors.TEXT_DEFAULT.css
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
  return (0, r.jsx)(K, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.EpV, {
        size: "xs",
        color: f.A.colors.TEXT_DEFAULT.css
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

function H(e) {
  var t;
  let {
    message: n,
    compact: a
  } = e, s = T.default.getUser((0, g.ZD)(n)), o = null == (t = I.A.getBasicChannel(n.channel_id)) ? true : t.guild_id, c = null != o && null != s ? S.Ay.getMember(o, s.id) : null, {
    avatarSrc: u,
    avatarDecorationSrc: d,
    eventHandlers: _
  } = (0, v.A)({
    userId: null == s ? true : s.id,
    guildId: o,
    size: 12
  }), h = i.useRef(null);
  return (0, r.jsx)(K, {
    compact: a,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.Hnu, {
        size: "xs",
        color: f.A.colors.TEXT_FEEDBACK_POSITIVE.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-positive",
        children: x.intl.string(x.t.lVLiFp)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: L.Ns,
      children: [(0, r.jsx)("div", {
        className: L.gk,
        children: null != c && null != s && (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(p.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: x.intl.string(x.t.qlFrXW)
          }), (0, r.jsx)(A.A, {
            targetElementRef: h,
            user: s,
            guildId: o,
            channelId: n.channel_id,
            messageId: n.id,
            children: e => (0, r.jsxs)(p.DUT, U(M({
              innerRef: h,
              className: L.rI
            }, e), {
              children: [(0, r.jsx)("div", U(M({}, _), {
                children: (0, r.jsx)(p.euF, {
                  src: u,
                  avatarDecoration: d,
                  size: p._3J.SIZE_16,
                  "aria-label": "TODO"
                })
              })), (0, r.jsxs)(p.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != c.colorString ? c.colorString : f.A.colors.TEXT_DEFAULT.css
                },
                children: [" ", "@", s.username]
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

function Y(e) {
  var t;
  let {
    message: n,
    compact: a
  } = e, {
    joinAttempts: s,
    raidDatetime: o,
    dmsSent: c,
    raidType: _,
    resolvedReason: y
  } = (0, g.Bk)(n), b = (0, d.bG)([I.A], () => I.A.getChannel(n.channel_id), [n.channel_id]), O = null != (t = null == b ? true : b.guild_id) ? t : null, {
    shouldShowIncidentActions: v
  } = (0, h.Li)(O), A = (0, N.Am)(n.author.id, n.channel_id), S = e => {
    A(e)
  }, T = i.useCallback(() => {
    let e = null == b ? true : b.guild_id;
    null != e && (0, E.is)(n.id, e)
  }, [n.id, b]), C = _ === u.p.DM_RAID, w = C ? p.EpV : p.EF8;
  return (0, r.jsx)(K, {
    compact: a,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(w, {
        size: "xs",
        color: f.A.colors.TEXT_FEEDBACK_CRITICAL.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-critical",
        children: C ? x.intl.string(x.t["8+lHUb"]) : x.intl.string(x.t.xMwcwV)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: L.Ns,
      children: [null != s && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: x.intl.format(x.t["4ylIiu"], {
          joinCount: s
        })
      }), null != c && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: x.intl.format(x.t["5C8Mh3"], {
          dmsSent: c
        })
      }), null != o && (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(G, {}), (0, r.jsx)(p.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: l()(o).fromNow()
        })]
      })]
    }),
    content: null != o ? (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.format(x.t["4QIIZl"], {
        dateTime: o.toLocaleString(x.intl.currentLocale, m.yc)
      })
    }) : null,
    footerButtons: v ? (0, r.jsxs)("div", {
      className: L.OZ,
      children: [(0, r.jsxs)("div", {
        className: L.AX,
        children: [(0, r.jsx)(p.lmn, {
          size: "xs",
          color: f.A.unsafe_rawColors.BRAND_500.css,
          className: L.Dq
        }), (0, r.jsx)(p.QWc, {
          variant: "primary",
          size: "sm",
          textVariant: "text-xs/medium",
          text: x.intl.string(x.t.DEoVWZ),
          onClick: S
        })]
      }), (0, r.jsx)(G, {}), (0, r.jsx)("div", {
        className: L.AX,
        children: (0, r.jsx)(p.QWc, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: (0, g.Oj)(y),
          onClick: T
        })
      })]
    }) : null
  })
}

function W(e) {
  var t;
  let {
    message: n,
    compact: a
  } = e, s = null == (t = I.A.getBasicChannel(n.channel_id)) ? true : t.guild_id, {
    raidDatetime: o,
    decisionId: c,
    suspiciousMentionActivityUntil: u
  } = (0, g.Bk)(n);

  function d() {
    null != s && null != c && (0, y.W5)(s, c, () => {
      (0, O.w)(u), (0, y.wu)(s)
    })
  }

  function _() {
    null != s && b.A.open(s, P.BEX.GUILD_AUTOMOD, true, P.nd0.AUTOMOD_MENTION_SPAM)
  }
  return (0, r.jsx)(K, {
    compact: a,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p.EpV, {
        size: "xs",
        color: f.A.colors.TEXT_FEEDBACK_CRITICAL.css
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-critical",
        children: x.intl.string(x.t.C2uIXE)
      })]
    }),
    subheader: (0, r.jsx)("div", {
      className: L.Ns,
      children: null != o && (0, r.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: l()(o).fromNow()
      })
    }),
    content: (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: x.intl.string(x.t.SWIWEV)
    }),
    footerButtons: (0, r.jsxs)("div", {
      className: L.OZ,
      children: [(0, r.jsx)("div", {
        className: L.AX,
        children: (0, r.jsx)(p.QWc, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: x.intl.string(x.t.oX14El),
          onClick: d
        })
      }), (0, r.jsx)(G, {}), (0, r.jsx)("div", {
        className: L.AX,
        children: (0, r.jsx)(p.QWc, {
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

function K(e) {
  let {
    compact: t,
    header: n,
    subheader: i,
    content: a,
    footerButtons: o
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(L.gD, {
      [L.oE]: t
    }),
    children: [(0, r.jsxs)("div", {
      className: L.Ux,
      children: [(0, r.jsxs)("div", {
        className: L.LN,
        children: [(0, r.jsx)("div", {
          className: L.MY,
          children: n
        }), null != i && (0, r.jsx)("div", {
          className: L.m_,
          children: i
        })]
      }), a]
    }), null != o && (0, r.jsx)("div", {
      className: s()(L.Y4, L.UX, {
        [L.oE]: t
      }),
      children: o
    })]
  })
}

function z(e) {
  let {
    id: t,
    compact: n,
    message: i,
    channel: a
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: l,
      onMouseLeave: u
    }
  } = (0, w.a)(true), {
    notificationType: d
  } = (0, g.Bk)(i), f = null == d || d === c.W.RAID;
  return (0, r.jsx)("div", {
    onMouseEnter: l,
    onMouseLeave: u,
    children: (0, r.jsx)(R.A, {
      className: s()(L.rs, {
        [L.oE]: n
      }),
      iconNode: n ? null : (0, r.jsx)(w.l, {
        src: o
      }),
      iconContainerClassName: L.zc,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: s()(L.Qs, {
          [L.oE]: n
        }),
        children: [(0, r.jsx)(C.ix, {
          message: i,
          messageClassname: L.he,
          className: s()(L.QV, L.he, {
            [L.oE]: n
          }),
          username: (0, r.jsxs)("div", {
            className: L.he,
            children: [(0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: L.Xh,
              children: x.intl.string(x.t.hG1StD)
            }), (0, r.jsx)(_.A, {
              type: D.nu.SYSTEM_DM,
              className: L.Al
            }), f && (0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-strong",
              tag: "span",
              className: L.he,
              children: x.intl.string(x.t.ufawcw)
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: L.BZ
        }), (0, r.jsx)(V, {
          message: i,
          compact: n
        })]
      })
    })
  })
}