/** Chunk was on 9753 **/
/** chunk id: 508983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => et
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk775602 = require("./775602.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk845625 = require("./845625.js"),
  Chunk785823 = require("./785823.js"),
  Chunk449585 = require("./449585.jsx"),
  Chunk137207 = require("./137207.js"),
  Chunk22007 = require("./22007.js"),
  Chunk378570 = require("./378570.js"),
  Chunk589022 = require("./589022.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk465364 = require("./465364.js"),
  Chunk763754 = require("./763754.js"),
  Chunk901057 = require("./901057.jsx"),
  Chunk936044 = require("./936044.jsx"),
  Chunk643204 = require("./643204.jsx"),
  Chunk535421 = require("./535421.jsx"),
  Chunk112758 = require("./112758.jsx"),
  Chunk754459 = require("./754459.js"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk200700 = require("./200700.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk906135 = require("./906135.js");

function z(e) {
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

function W(e, t) {
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

function K(e, t) {
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
}

function Y(e, t) {
  let {
    popouts: n,
    selected: r,
    setPopout: l
  } = (0, L.A)(e.id, U.Fd), {
    usernameProfile: a,
    avatarProfile: s
  } = n, o = (0, D.r4)(e.author.id, t.id), c = (0, D.UY)(e.author.id, t.id, e.id), u = (0, D.m)(e, t, a, l);
  return {
    selected: r,
    onContextMenu: o,
    onContextMenuModerateUser: c,
    onClickUsername: u,
    onClickAvatar: (0, D.Jo)(s, l),
    onPopoutRequestClose: i.useCallback(() => l({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [l]),
    renderPopout: R.A,
    showAvatarPopout: s,
    showUsernamePopout: a
  }
}

function q(e, t, n) {
  return i.useMemo(() => {
    if (null != t && null != n) return i => (0, r.jsx)(x.A, W(z({}, i), {
      user: t,
      currentUser: n,
      guildId: e.guild_id,
      channelId: e.id
    }))
  }, [e, t, n])
}

function Q(e) {
  let {
    children: t,
    className: n,
    compact: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(V.xQ, n, {
      [V.oE]: i
    }),
    children: t
  })
}

function J(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(V.A3, n),
    children: t
  })
}

function X(e) {
  switch (e) {
    case h.G.DELETE_USER_MESSAGE:
      return (0, r.jsx)(m.ucK, {
        size: "xs",
        color: "currentColor",
        className: V.yr
      });
    case h.G.SET_COMPLETED:
      return (0, r.jsx)(m.A9s, {
        size: "xs",
        color: "currentColor",
        className: a()(V.yr, V.r0)
      });
    case h.G.SUBMIT_FEEDBACK:
      return (0, r.jsx)(m.iFK, {
        size: "xs",
        color: "currentColor",
        className: V.yr
      });
    default:
      return null
  }
}

function Z(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, i = (0, u.bG)([j.default], () => j.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == i) return X(e);
    let l = function(e, t, n) {
      var r;
      let i = null != (r = C.Ay.getNickname(n, null, t)) ? r : I.Ay.getUserTag(t),
        l = o()(e.ts),
        a = "".concat(i, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
          case h.G.DELETE_USER_MESSAGE:
            return H.intl.formatToPlainString(H.t.BtKE9h, {
              userName: i,
              timestamp: l.fromNow()
            });
          case h.G.SET_COMPLETED:
            return H.intl.formatToPlainString(H.t.dyo9US, {
              userName: i,
              timestamp: l.fromNow()
            });
          case h.G.SUBMIT_FEEDBACK:
            return H.intl.formatToPlainString(H.t["C9/kIO"], {
              userName: i,
              timestamp: l.fromNow()
            });
          default:
            return a
        }
      } catch (e) {
        return a
      }
    }(t, i, n);
    return (0, r.jsx)(p.m, {
      text: l,
      children: X(e)
    })
  } catch (e) {
    return null
  }
}

function $(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : false);
  return (0, r.jsx)("div", {
    className: V.q_,
    children: i.map(e => (0, r.jsx)(Z, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let ee = Chunk64700.memo(function(e) {
  let t, {
      message: n,
      channel: i,
      embedChannel: l,
      compact: a,
      interactionUserId: s
    } = e,
    o = Y(n, i),
    c = q(i, n.author),
    u = (0, T.Ay)(n),
    d = (0, w.tO)(z({
      message: n,
      channel: i,
      author: u,
      guildId: null == i ? true : i.guild_id,
      compact: a
    }, o), c),
    p = j.default.getUser(s),
    f = Y(n, i),
    g = q(i, p, j.default.getCurrentUser());
  if (null != p) {
    let e = (0, T.FT)(p, i),
      r = (0, w.tO)(z({
        message: n,
        channel: i,
        author: e,
        guildId: null == i ? true : i.guild_id,
        compact: a
      }, f), g);
    t = () => r
  }
  return (0, r.jsx)(m.Text, {
    variant: "text-md/normal",
    color: "text-strong",
    tag: "span",
    className: V.he,
    children: (0, b.fu)(n, l, () => (0, r.jsx)("div", {
      className: V.aT,
      children: (0, r.jsx)(N.A, {
        channel: l,
        className: V.HA,
        openChatWithoutConnecting: true
      })
    }), () => d, t)
  })
});

function et(e) {
  var t;
  let {
    id: n,
    compact: l,
    message: s,
    channel: o
  } = e, {
    avatarSrc: p,
    eventHandlers: {
      onMouseEnter: x,
      onMouseLeave: j
    }
  } = (0, M.a)(true), C = (0, c.rm)(null != n ? n : ""), {
    onFocus: I
  } = C, T = K(C, ["onFocus"]), {
    isFocused: N,
    handleFocus: R,
    handleBlur: L
  } = (0, D.G8)(I), U = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled), q = (0, u.bG)([E.A], () => E.A.can(G.xBc.MANAGE_MESSAGES, o), [o]), {
    ruleName: X,
    embedChannel: Z,
    decisionId: et,
    keywordMatchedContent: en,
    keyword: er,
    content: ei,
    flaggedMessageId: el,
    timeoutDuration: ea,
    decisionReason: es,
    alertActionsExecution: eo,
    quarantineType: ec,
    interactionUserId: eu
  } = (0, b.Ay)(s), ed = i.useMemo(() => (0, S.Tz)(ei, en, o.id), [ei, en, o]), ep = Y(s, o), {
    selected: em
  } = ep, ef = K(ep, ["selected"]), eg = i.useCallback(() => {
    (0, y.w2)(s.id, ei, et, o)
  }, [s.id, ei, et, o]), e_ = i.useCallback(e => {
    null != el && null != Z && (e.stopPropagation(), e.preventDefault(), (0, v.A)(G.BVt.CHANNEL(null == Z ? true : Z.guild_id, null == Z ? true : Z.id, el)))
  }, [Z, el]), eh = i.useCallback(e => {
    null != Z && (f.default.selectChannel({
      guildId: Z.guild_id,
      channelId: e,
      messageId: s.id
    }), (0, O.iN)(e))
  }, [s, Z]), eb = i.useCallback(() => {
    (0, A.E5)(s.id, o, h.G.DELETE_USER_MESSAGE)
  }, [o, s.id]), ey = (0, F.getFriendlyDurationString)(Number(ea)), eA = null != es, ev = q && null != el && (null == eo || !eo.actions.hasOwnProperty(h.G.DELETE_USER_MESSAGE)), eO = s.embeds.length > 0 ? null == (t = s.embeds[0].fields.find(e => "channel_id" === e.rawName)) ? true : t.rawValue : null, ex = null != eO;
  return (0, r.jsx)("div", {
    onMouseEnter: x,
    onMouseLeave: j,
    children: (0, r.jsx)(k.A, {
      className: a()(V.rs, {
        [V.oE]: l
      }),
      iconNode: l ? null : (0, r.jsx)(M.l, {
        src: p
      }),
      iconContainerClassName: V.zc,
      compact: l,
      children: (0, r.jsxs)("div", {
        className: a()(V.Qs, {
          [V.oE]: l
        }),
        children: [(0, r.jsx)(w.ix, {
          message: s,
          messageClassname: V.he,
          className: a()(V.QV, V.he, {
            [V.oE]: l
          }),
          username: (0, r.jsxs)("div", {
            className: V.he,
            children: [(0, r.jsx)(m.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: V.Xh,
              children: H.intl.string(H.t.hG1StD)
            }), (0, r.jsx)(_.A, {
              type: B.nu.SYSTEM_DM,
              className: V.Al
            }), (0, r.jsx)(ee, {
              message: s,
              channel: o,
              embedChannel: Z,
              compact: l,
              interactionUserId: eu
            })]
          }),
          compact: l,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(V.BK, {
            [V.oE]: l
          }),
          children: (0, r.jsx)(P.A, W(z({}, T), {
            message: s,
            channel: Z,
            content: ed,
            compact: l,
            withFooter: true,
            hideTimestamp: true,
            className: a()(V.gD, {
              [V.oE]: l,
              [V.wH]: em || U && N,
              [V.JD]: null != el && null != Z
            }),
            childrenAccessories: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: V.Y4,
                children: [null != er && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: H.intl.format(H.t.SYIUTR, {
                      keyword: er
                    })
                  }), (0, r.jsx)("div", {
                    className: a()(V.Om, V.Gx)
                  })]
                }), null != X && (0, r.jsx)(m.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: H.intl.format(H.t.ZoOyKB, {
                    ruleName: X
                  })
                }), null != ey && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: a()(V.Om, V.Gx)
                  }), (0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.__invalid_footerText,
                    children: H.intl.format(H.t["3LYql6"], {
                      duration: ey
                    })
                  })]
                }), null != ec && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: a()(V.Om, V.Gx)
                  }), (0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.nx,
                    children: H.intl.format(H.t["26bB2M"], {
                      reason: (0, b.o2)(ec)
                    })
                  })]
                })]
              }), eA ? (0, r.jsx)(J, {
                children: (0, r.jsx)(m.Text, {
                  variant: "text-xs/medium",
                  color: "text-default",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: ef,
            zalgo: true,
            onFocus: R,
            onBlur: L,
            onClick: e_
          }))
        }), (0, r.jsx)(Q, {
          compact: l,
          children: (0, r.jsxs)("div", {
            className: a()(V.Y4, V.UD, {
              [V.oE]: l
            }),
            children: [(0, r.jsxs)("div", {
              className: V.AX,
              children: [(0, r.jsx)(m.lmn, {
                size: "xs",
                color: d.A.unsafe_rawColors.BRAND_500.css,
                className: V.Dq
              }), (0, r.jsx)(m.QWc, {
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: H.intl.string(H.t.DEoVWZ),
                onClick: e => {
                  var t;
                  null == (t = ef.onContextMenuModerateUser) || t.call(ef, e)
                }
              })]
            }), ex ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: V.Om
              }), (0, r.jsx)("div", {
                className: V.AX,
                children: (0, r.jsx)(m.QWc, {
                  onClick: () => eh(eO),
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: H.intl.string(H.t.jtkj06)
                })
              })]
            }) : null, (0, r.jsx)("div", {
              className: V.Om
            }), (0, r.jsx)("div", {
              className: V.AX,
              children: (0, r.jsx)(m.QWc, {
                onClick: eg,
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: H.intl.string(H.t["94JbM3"])
              })
            }), ev ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: V.Om
              }), (0, r.jsx)("div", {
                className: V.AX,
                children: (0, r.jsx)(m.QWc, {
                  onClick: eb,
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: H.intl.string(H.t["3A52tY"])
                })
              })]
            }) : null, null != eo ? (0, r.jsx)($, {
              alertActionsExecution: eo,
              guildId: o.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}