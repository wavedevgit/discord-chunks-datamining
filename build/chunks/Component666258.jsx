/** Chunk was on 7654 **/
/** chunk id: 666258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => F
}), require("./388685.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk657305 = require("./657305.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk65361 = require("./65361.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk934415 = require("./934415.js"),
  Chunk572004 = require("./572004.js"),
  Chunk971130 = require("./971130.js"),
  Chunk366980 = require("./366980.js"),
  Chunk281123 = require("./281123.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk350250 = require("./350250.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = e => {
    let {
      inviteIcon: t,
      channelIcon: n,
      heading: i,
      subheading: r
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [null == t ? null : (0, l.jsx)("div", {
        className: Z.inviteIcon,
        children: t
      }), (0, l.jsxs)("div", {
        className: Z.inviteTarget,
        children: [(0, l.jsxs)("div", {
          className: Z.inviteTargetHeading,
          children: [null == n ? null : n, (0, l.jsx)(h.X6q, {
            variant: "heading-md/semibold",
            color: "header-secondary",
            lineClamp: 1,
            children: i
          })]
        }), r]
      })]
    })
  },
  R = e => {
    let {
      guild: t,
      channel: n
    } = e, i = (0, S.a5)({
      type: n.type
    }), r = (0, l.jsx)(h.Text, {
      variant: "text-xs/medium",
      color: "header-muted",
      lineClamp: 1,
      children: [i, t.name].join("\xa0\xa0•\xa0\xa0")
    }), a = (0, x.KS)(n, t), s = (0, l.jsx)(N.Ft, {
      guildId: t.id,
      guildName: t.name,
      guildIcon: t.icon,
      iconSize: 40
    });
    return (0, l.jsx)(w, {
      inviteIcon: s,
      channelIcon: null == a ? null : (0, l.jsx)(a, {
        className: Z.inviteTargetIcon,
        size: "xs"
      }),
      heading: n.name,
      subheading: r
    })
  },
  k = e => {
    let t, {
        guild: n
      } = e,
      {
        guildProfile: r,
        fetchGuildProfile: a
      } = (0, j.u)(n.id);
    i.useEffect(() => {
      a()
    }, [a]), t = null === r ? null : (0, l.jsxs)("div", {
      className: Z.guildPresence,
      children: [(0, l.jsxs)("div", {
        className: Z.onlineCount,
        children: [(0, l.jsx)("div", {
          className: Z.dot
        }), (0, l.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "header-muted",
          children: P.intl.format(P.t["LC+S+v"], {
            membersOnline: r.onlineCount
          })
        })]
      }), (0, l.jsxs)("div", {
        className: Z.memberCount,
        children: [(0, l.jsx)("div", {
          className: Z.dot
        }), (0, l.jsx)(h.Text, {
          variant: "text-xs/medium",
          color: "header-muted",
          children: P.intl.format(P.t.zRl6XV, {
            count: r.memberCount
          })
        })]
      })]
    });
    let s = (0, l.jsx)(N.Ft, {
      guildId: n.id,
      guildName: n.name,
      guildIcon: n.icon,
      iconSize: 40
    });
    return (0, l.jsx)(w, {
      inviteIcon: s,
      heading: n.name,
      subheading: t
    })
  },
  D = e => {
    let {
      applicationId: t
    } = e, [n] = (0, v.Z)([t]);
    if (null == n) return null;
    let i = (0, p.Z)(n.name),
      r = (0, l.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "header-muted",
        lineClamp: 1,
        children: (0, l.jsx)(l.Fragment, {
          children: n.tags.join("\xa0\xa0•\xa0\xa0")
        })
      }),
      a = (0, l.jsx)(f.Z, {
        game: n,
        size: f.A.MEDIUM,
        className: Z.inviteIcon
      });
    return (0, l.jsx)(w, {
      inviteIcon: a,
      heading: i,
      subheading: r
    })
  };

function L(e) {
  let {
    guild: t,
    channel: n,
    applicationId: i
  } = e;
  return null != i ? (0, l.jsx)(D, {
    applicationId: i
  }) : null != n ? (0, l.jsx)(R, {
    guild: t,
    channel: n
  }) : (0, l.jsx)(k, {
    guild: t
  })
}

function V(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("div", {
    className: a()(t, Z.advancedOptions),
    children: n
  })
}

function U(e) {
  let t, n, {
    className: i,
    children: r,
    htmlFor: s,
    onClick: o
  } = e;
  return null != s ? (t = "label", n = {
    htmlFor: s
  }) : null != o ? (t = h.P3F, n = {
    onClick: o
  }) : (t = "div", n = {}), (0, l.jsx)(t, M(A({
    className: Z.advancedOption
  }, n), {
    children: (0, l.jsx)("div", {
      className: a()(i, Z.advancedOptionInner),
      children: r
    })
  }))
}

function F(e) {
  let {
    className: t,
    guild: r,
    channel: s,
    applicationId: p,
    getInviteKey: v,
    sendInvite: x,
    canUseVanityURL: f,
    disabled: j,
    hasSelection: N,
    options: S,
    setOptions: w,
    isApplicationBypassAllowed: R,
    isGuestInviteAllowed: k,
    isTemporaryInviteAllowed: D,
    setError: F,
    analyticsLocation: B
  } = e, [G, z] = i.useState(false), [H, q] = i.useState(false), Y = i.useRef(null), [W] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]), K = (0, I.Dt)(), X = (0, I.Dt)(), Q = (0, I.Dt)(), $ = i.useMemo(() => f && null != r.vanityURLCode ? (0, T.Z)(r.vanityURLCode, false) : null, [r, f]), J = i.useCallback(async () => {
    var e, t;
    if (j) return;
    null !== Y.current && clearTimeout(Y.current);
    let n = await v();
    o()(null != n, "Invite key could not be determined.");
    let l = (0, T.Z)(n);
    return (0, E.JG)(l, () => {
      z(true), Y.current = setTimeout(() => {
        z(false), Y.current = null
      }, 1e3)
    }, e => {
      F(e)
    }), b.default.track(C.rMx.COPY_INSTANT_INVITE, {
      server: r.id,
      channel: null != (e = null == s ? true : s.id) ? e : null,
      channel_type: null != (t = null == s ? true : s.type) ? t : null,
      location: B,
      code: n,
      application_id: p
    }), () => {
      null !== Y.current && clearTimeout(Y.current)
    }
  }, [j, v, r, s, B, p, F]), ee = i.useCallback(e => {
    w({
      max_age: e
    })
  }, [w]), et = i.useCallback(e => {
    w({
      max_uses: e
    })
  }, [w]), en = i.useCallback(e => {
    S.flags === e ? w({
      flags: true
    }) : w({
      flags: e
    })
  }, [S, w]), el = i.useCallback(e => {
    w({
      temporary: e
    })
  }, [w]), ei = i.useCallback(e => {
    var t;
    let i = null == (t = e.currentTarget) ? true : t.getBoundingClientRect(),
      {
        left: r = 0,
        width: a = 0
      } = null != i ? i : {};
    e.pageX = r + a + 12, (0, m.jW)(e, async () => {
      let {
        default: e
      } = await n.e("84212").then(n.bind(n, 593851));
      return t => (0, l.jsx)(e, M(A({}, t), {
        initialOptions: S,
        onChangeMaxAge: ee,
        onChangeMaxUses: et
      }))
    })
  }, [S, ee, et]), er = function(e) {
    let t = y.H.find(t => {
        let {
          value: n
        } = t;
        return n === e.max_age
      }),
      n = y.p.find(t => {
        let {
          value: n
        } = t;
        return n === e.max_uses
      });
    return null == t || null == n ? null : t.value === O.ZP.INVITE_OPTIONS_FOREVER.value && n.value === O.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.string(P.t["5u4A6e"]) : t.value !== O.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== O.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.formatToPlainString(P.t["Z5Vt5+"], {
      maxAge: t.label,
      maxUses: n.label
    }) : n.value === O.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== O.ZP.INVITE_OPTIONS_FOREVER.value ? t.label : n.value !== O.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === O.ZP.INVITE_OPTIONS_FOREVER.value ? n.label : null
  }(S);
  return (0, l.jsxs)("div", {
    className: a()(t, Z.footer),
    children: [(0, l.jsxs)("div", {
      className: Z.guildRow,
      children: [(0, l.jsx)(L, {
        guild: r,
        channel: s,
        applicationId: p
      }), (0, l.jsx)(h.ua7, {
        position: "top",
        text: P.intl.string(P.t["4QuV7O"]),
        children: e => (0, l.jsx)(h.P3F, M(A({
          className: a()(Z.settingsButton, {
            [Z.settingsOpen]: H
          })
        }, e), {
          onClick: () => {
            var t;
            null == e || null == (t = e.onClick) || t.call(e), q(e => !e)
          },
          children: (0, l.jsx)(h.ewm, {
            size: "refresh_sm",
            color: c.Z.colors.ICON_PRIMARY
          })
        }))
      })]
    }), H && (0, l.jsxs)(V, {
      children: [(0, l.jsxs)(U, {
        onClick: ei,
        children: [(0, l.jsxs)("div", {
          className: Z.advancedOptionContent,
          children: [(0, l.jsx)(h.X6q, {
            variant: "heading-md/medium",
            children: P.intl.string(P.t.YlT5MT)
          }), (0, l.jsx)(h.ua7, {
            position: "top",
            text: P.intl.string(P.t.efLzgY),
            children: e => (0, l.jsx)(h.idN, M(A({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))
          })]
        }), (0, l.jsxs)("div", {
          className: Z.advancedOptionContent,
          children: [null != er && (0, l.jsx)(h.Text, {
            variant: "text-sm/medium",
            color: "header-muted",
            children: er
          }), (0, l.jsx)(h.Fbu, {
            size: "xs",
            color: c.Z.colors.INTERACTIVE_NORMAL
          })]
        })]
      }), R && (0, l.jsxs)(U, {
        htmlFor: K,
        children: [(0, l.jsxs)("div", {
          className: Z.advancedOptionContent,
          children: [(0, l.jsx)(h.X6q, {
            variant: "heading-md/medium",
            children: P.intl.string(P.t.EPIOl5)
          }), (0, l.jsx)(h.ua7, {
            position: "top",
            text: P.intl.string(P.t["jvd/LC"]),
            children: e => (0, l.jsx)(h.idN, M(A({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))
          })]
        }), (0, l.jsx)(h.rsf, {
          id: K,
          checked: S.flags === u.$.IS_APPLICATION_BYPASS,
          onChange: () => en(u.$.IS_APPLICATION_BYPASS)
        })]
      }), k && (0, l.jsxs)(U, {
        htmlFor: X,
        children: [(0, l.jsxs)("div", {
          className: Z.advancedOptionContent,
          children: [(0, l.jsx)(h.X6q, {
            variant: "heading-md/medium",
            children: P.intl.string(P.t.NKqlpq)
          }), (0, l.jsx)(h.ua7, {
            position: "top",
            text: P.intl.string(P.t.pBOevb),
            children: e => (0, l.jsx)(h.idN, M(A({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))
          })]
        }), (0, l.jsx)(h.rsf, {
          id: X,
          checked: S.flags === u.$.IS_GUEST_INVITE,
          onChange: () => en(u.$.IS_GUEST_INVITE)
        })]
      }), D && (0, l.jsxs)(U, {
        htmlFor: Q,
        children: [(0, l.jsxs)("div", {
          className: Z.advancedOptionContent,
          children: [(0, l.jsx)(h.X6q, {
            variant: "heading-md/medium",
            children: P.intl.string(P.t.UL177u)
          }), (0, l.jsx)(h.ua7, {
            position: "top",
            text: P.intl.string(P.t.cl1HNT),
            children: e => (0, l.jsx)(h.idN, M(A({}, e), {
              size: "xs",
              color: c.Z.colors.INTERACTIVE_NORMAL
            }))
          })]
        }), (0, l.jsx)(h.rsf, {
          id: Q,
          checked: !!S.temporary,
          onChange: e => el(e)
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: Z.buttonRow,
      children: [(0, l.jsx)(h.ua7, {
        position: "top",
        text: $,
        shouldShow: null !== $ && !W,
        children: e => (0, l.jsx)(g.zx, M(A({
          className: Z.button,
          innerClassName: Z.buttonInner,
          color: g.zx.Colors.PRIMARY
        }, e), {
          onClick: () => {
            var t;
            null == e || null == (t = e.onClick) || t.call(e), J()
          },
          disabled: j,
          children: G ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.dz2, {
              size: "xs",
              color: "currentColor"
            }), (0, l.jsx)("span", {
              children: P.intl.string(P.t["+5kSoa"])
            })]
          }) : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.xPt, {
              size: "xs",
              color: "currentColor"
            }), (0, l.jsx)("span", {
              children: P.intl.string(P.t.WqhZsr)
            })]
          })
        }))
      }), (0, l.jsxs)(g.zx, {
        className: Z.button,
        innerClassName: Z.buttonInner,
        onClick: () => x(),
        disabled: !N || j,
        children: [(0, l.jsx)("span", {
          children: P.intl.string(P.t.BcAABg)
        }), (0, l.jsx)(h.Uuj, {
          size: "xs",
          color: "currentColor"
        })]
      })]
    })]
  })
}