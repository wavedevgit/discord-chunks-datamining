/** Chunk was on 91173 **/
/** chunk id: 517820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk722770 = require("./722770.js"),
  Chunk320285 = require("./320285.js"),
  Chunk688813 = require("./688813.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk256638 = require("./256638.jsx"),
  Chunk385499 = require("./385499.jsx"),
  Chunk528011 = require("./528011.js"),
  Chunk533244 = require("./533244.js"),
  Chunk825829 = require("./825829.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk36459 = require("./36459.js"),
  Chunk434404 = require("./434404.js"),
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

function L(e) {
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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk682392.dot
  })
}

function U(e) {
  let {
    message: t,
    compact: n
  } = e, {
    notificationType: i
  } = (0, E.FL)(t);
  switch (i) {
    case E.nj:
    case u.p.RAID:
      return (0, r.jsx)(H, {
        message: t,
        compact: n
      });
    case u.p.MENTION_RAID:
      return (0, r.jsx)(V, {
        message: t,
        compact: n
      });
    case u.p.ACTIVITY_ALERTS_ENABLED:
      return (0, r.jsx)(G, {
        message: t,
        compact: n
      });
    case u.p.INTERACTION_BLOCKED:
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
  return (0, r.jsx)(z, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(f.Mgn, {
        size: "xs",
        color: m.Z.colors.HEADER_SECONDARY.css
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: R.intl.string(R.t.VdZCcH)
      })]
    }),
    content: (0, r.jsx)(f.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: R.intl.string(R.t.NxHYX1)
    })
  })
}

function B(e) {
  let {
    compact: t
  } = e;
  return (0, r.jsx)(z, {
    compact: t,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(f.Mgn, {
        size: "xs",
        color: m.Z.colors.HEADER_SECONDARY.css
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "header-secondary",
        children: R.intl.string(R.t["2qTBw8"])
      })]
    }),
    content: (0, r.jsx)(f.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: R.intl.string(R.t.Dc9wCg)
    })
  })
}

function G(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, a = S.default.getUser((0, E.Sw)(n)), o = null == (t = j.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id, c = null != o && null != a ? I.ZP.getMember(o, a.id) : null, {
    avatarSrc: u,
    avatarDecorationSrc: d,
    eventHandlers: p
  } = (0, y.Z)({
    userId: null == a ? true : a.id,
    guildId: o,
    size: 12
  }), _ = i.useRef(null);
  return (0, r.jsx)(z, {
    compact: l,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(f.bgT, {
        size: "xs",
        color: m.Z.colors.TEXT_FEEDBACK_POSITIVE.css
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-feedback-positive",
        children: R.intl.string(R.t.lVLiFh)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: D.dotSeparatedRow,
      children: [(0, r.jsx)("div", {
        className: D.alertsEnabledSubHeader,
        children: null != c && null != a && (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(f.Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: R.intl.string(R.t.qlFrXV)
          }), (0, r.jsx)(x.Z, {
            targetElementRef: _,
            user: a,
            guildId: o,
            channelId: n.channel_id,
            messageId: n.id,
            children: e => (0, r.jsxs)(f.P3F, M(L({
              innerRef: _,
              className: D.alertsEnabledSubHeaderAvatarUsername
            }, e), {
              children: [(0, r.jsx)("div", M(L({}, p), {
                children: (0, r.jsx)(f.qEK, {
                  src: u,
                  avatarDecoration: d,
                  size: f.EFr.SIZE_16,
                  "aria-label": "TODO"
                })
              })), (0, r.jsxs)(f.Text, {
                variant: "text-xs/medium",
                style: {
                  color: null != c.colorString ? c.colorString : m.Z.colors.TEXT_DEFAULT.css
                },
                children: [" ", "@", a.username]
              })]
            }))
          })]
        })
      }), (0, r.jsx)(k, {}), (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: s()(n.timestamp).fromNow()
      })]
    }),
    content: (0, r.jsx)(f.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: R.intl.string(R.t["QV/8u7"])
    })
  })
}

function H(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, {
    joinAttempts: a,
    raidDatetime: o,
    dmsSent: u,
    raidType: _,
    resolvedReason: g
  } = (0, E.FL)(n), v = (0, p.e7)([j.Z], () => j.Z.getChannel(n.channel_id), [n.channel_id]), O = null != (t = null == v ? true : v.guild_id) ? t : null, {
    shouldShowIncidentActions: y
  } = (0, h.mI)(O), x = (0, P.sR)(n.author.id, n.channel_id), I = i.useCallback(() => {
    let e = null == v ? true : v.guild_id;
    null != e && (0, C.kW)(n.id, e)
  }, [n.id, v]), S = _ === d.$.DM_RAID, T = S ? f.Mgn : f.b6m;
  return (0, r.jsx)(z, {
    compact: l,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(T, {
        size: "xs",
        color: m.Z.colors.TEXT_DANGER.css
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: S ? R.intl.string(R.t["8+lHUV"]) : R.intl.string(R.t.xMwcwc)
      })]
    }),
    subheader: (0, r.jsxs)("div", {
      className: D.dotSeparatedRow,
      children: [null != a && (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: R.intl.format(R.t["4ylIio"], {
          joinCount: a
        })
      }), null != u && (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: R.intl.format(R.t["5C8Mh4"], {
          dmsSent: u
        })
      }), null != o && (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(k, {}), (0, r.jsx)(f.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: s()(o).fromNow()
        })]
      })]
    }),
    content: null != o ? (0, r.jsx)(f.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: R.intl.format(R.t["4QIIZm"], {
        dateTime: o.toLocaleString(R.intl.currentLocale, b.pQ)
      })
    }) : null,
    footerButtons: y ? (0, r.jsxs)("div", {
      className: D.footerRow,
      children: [(0, r.jsxs)("div", {
        className: D.footerAction,
        children: [(0, r.jsx)(f.b7C, {
          size: "xs",
          color: c.Z.BRAND,
          className: D.footerIcon
        }), (0, r.jsx)(f.Avr, {
          variant: "primary",
          size: "sm",
          textVariant: "text-xs/medium",
          text: R.intl.string(R.t.DEoVWV),
          onClick: e => {
            x(e)
          }
        })]
      }), (0, r.jsx)(k, {}), (0, r.jsx)("div", {
        className: D.footerAction,
        children: (0, r.jsx)(f.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: (0, E.ge)(g),
          onClick: I
        })
      })]
    }) : null
  })
}

function V(e) {
  var t;
  let {
    message: n,
    compact: l
  } = e, a = null == (t = j.Z.getBasicChannel(n.channel_id)) ? true : t.guild_id, {
    raidDatetime: o,
    decisionId: c,
    suspiciousMentionActivityUntil: u
  } = (0, E.FL)(n);
  return (0, r.jsx)(z, {
    compact: l,
    header: (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(f.Mgn, {
        size: "xs",
        color: m.Z.colors.TEXT_DANGER.css
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/semibold",
        color: "text-danger",
        children: R.intl.string(R.t.C2uIXF)
      })]
    }),
    subheader: (0, r.jsx)("div", {
      className: D.dotSeparatedRow,
      children: null != o && (0, r.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: s()(o).fromNow()
      })
    }),
    content: (0, r.jsx)(f.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: R.intl.string(R.t.SWIWER)
    }),
    footerButtons: (0, r.jsxs)("div", {
      className: D.footerRow,
      children: [(0, r.jsx)("div", {
        className: D.footerAction,
        children: (0, r.jsx)(f.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: R.intl.string(R.t.oX14Eh),
          onClick: function() {
            null != a && null != c && (0, v.UE)(a, c, () => {
              (0, _.c)(u), (0, v.T9)(a)
            })
          }
        })
      }), (0, r.jsx)(k, {}), (0, r.jsx)("div", {
        className: D.footerAction,
        children: (0, r.jsx)(f.Avr, {
          variant: "primary",
          textVariant: "text-xs/medium",
          size: "sm",
          text: R.intl.string(R.t["1R7QIy"]),
          onClick: function() {
            null != a && O.Z.open(a, w.pNK.GUILD_AUTOMOD, true, w.KsC.AUTOMOD_MENTION_SPAM)
          }
        })
      })]
    })
  })
}

function z(e) {
  let {
    compact: t,
    header: n,
    subheader: i,
    content: l,
    footerButtons: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(D.embedCard, {
      [D.compact]: t
    }),
    children: [(0, r.jsxs)("div", {
      className: D.cardContent,
      children: [(0, r.jsxs)("div", {
        className: D.cardHeaderContianer,
        children: [(0, r.jsx)("div", {
          className: D.cardHeader,
          children: n
        }), null != i && (0, r.jsx)("div", {
          className: D.subheader,
          children: i
        })]
      }), l]
    }), null != o && (0, r.jsx)("div", {
      className: a()(D.centeredRowContainer, D.cardFooter, {
        [D.compact]: t
      }),
      children: o
    })]
  })
}

function W(e) {
  let {
    id: t,
    compact: n,
    message: i,
    channel: l
  } = e, {
    avatarSrc: o,
    eventHandlers: {
      onMouseEnter: s,
      onMouseLeave: c
    }
  } = (0, N.m)(true), {
    notificationType: d
  } = (0, E.FL)(i), p = null == d || d === u.p.RAID;
  return (0, r.jsx)("div", {
    onMouseEnter: s,
    onMouseLeave: c,
    children: (0, r.jsx)(A.Z, {
      className: a()(D.mainContainer, {
        [D.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(N.S, {
        src: o
      }),
      iconContainerClassName: D.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(D.content, {
          [D.compact]: n
        }),
        children: [(0, r.jsx)(T.nD, {
          message: i,
          messageClassname: D.spanCorrection,
          className: a()(D.usernameContainer, D.spanCorrection, {
            [D.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: D.spanCorrection,
            children: [(0, r.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: D.username,
              children: R.intl.string(R.t.hG1StL)
            }), (0, r.jsx)(g.Z, {
              type: Z.Hb.SYSTEM_DM,
              className: D.systemTag
            }), p && (0, r.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              tag: "span",
              className: D.spanCorrection,
              children: R.intl.string(R.t.ufawc3)
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: D.flexLineBreak
        }), (0, r.jsx)(U, {
          message: i,
          compact: n
        })]
      })
    })
  })
}