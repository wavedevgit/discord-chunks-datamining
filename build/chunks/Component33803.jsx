/** Chunk was on web.js **/
/** chunk id: 33803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk607070 = require("./607070.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk313889 = require("./313889.js"),
  Chunk825829 = require("./825829.js"),
  Chunk226192 = require("./226192.jsx"),
  Chunk36459 = require("./36459.js"),
  Chunk336197 = require("./336197.js"),
  Chunk359110 = require("./359110.js"),
  Chunk726033 = require("./726033.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk779125 = require("./779125.jsx"),
  Chunk890410 = require("./890410.jsx"),
  Chunk464891 = require("./464891.jsx"),
  Chunk507418 = require("./507418.jsx"),
  Chunk348238 = require("./348238.jsx"),
  Chunk38267 = require("./38267.js"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk590433 = require("./590433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk545869 = require("./545869.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = q(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function Q(e, t) {
  let {
    popouts: n,
    selected: r,
    setPopout: o
  } = (0, j.Z)(e.id, U.d$), {
    usernameProfile: a,
    avatarProfile: s
  } = n, l = (0, L.wq)(e.author.id, t.id), c = (0, L.RN)(e.author.id, t.id, e.id), u = (0, L.XO)(e, t, a, o);
  return {
    selected: r,
    onContextMenu: l,
    onContextMenuModerateUser: c,
    onClickUsername: u,
    onClickAvatar: (0, L.R9)(s, o),
    onPopoutRequestClose: i.useCallback(() => o({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [o]),
    renderPopout: x.Z,
    showAvatarPopout: s,
    showUsernamePopout: a
  }
}

function X(e, t, n) {
  return i.useMemo(() => {
    if (null != t && null != n) return i => (0, r.jsx)(S.Z, K(Y({}, i), {
      user: t,
      currentUser: n,
      guildId: e.guild_id,
      channelId: e.id
    }))
  }, [e, t, n])
}

function J(e) {
  let {
    children: t,
    className: n,
    compact: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(V.footerContainer, n, {
      [V.compact]: i
    }),
    children: t
  })
}

function $(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: a()(V.annotationRow, n),
    children: t
  })
}

function ee(e) {
  switch (e) {
    case g.d.DELETE_USER_MESSAGE:
      return (0, r.jsx)(p.XHJ, {
        size: "xs",
        color: "currentColor",
        className: V.alertActionIcon
      });
    case g.d.SET_COMPLETED:
      return (0, r.jsx)(p.dz2, {
        size: "xs",
        color: "currentColor",
        className: a()(V.alertActionIcon, V.alertActionSetCompletedIcon)
      });
    case g.d.SUBMIT_FEEDBACK:
      return (0, r.jsx)(p.U65, {
        size: "xs",
        color: "currentColor",
        className: V.alertActionIcon
      });
    default:
      return null
  }
}

function et(e, t, n) {
  var r;
  let i = null != (r = C.ZP.getNickname(n, null, t)) ? r : A.ZP.getUserTag(t),
    o = l()(e.ts),
    a = "".concat(i, " ").concat(o.fromNow());
  try {
    switch (parseInt(e.actionType)) {
      case g.d.DELETE_USER_MESSAGE:
        return B.intl.formatToPlainString(B.t.BtKE9h, {
          userName: i,
          timestamp: o.fromNow()
        });
      case g.d.SET_COMPLETED:
        return B.intl.formatToPlainString(B.t.dyo9US, {
          userName: i,
          timestamp: o.fromNow()
        });
      case g.d.SUBMIT_FEEDBACK:
        return B.intl.formatToPlainString(B.t["C9/kIO"], {
          userName: i,
          timestamp: o.fromNow()
        });
      default:
        return a
    }
  } catch (e) {
    return a
  }
}

function en(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, i = (0, u.e7)([T.default], () => T.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == i) return ee(e);
    let o = et(t, i, n);
    return (0, r.jsx)(f.u, {
      text: o,
      children: ee(e)
    })
  } catch (e) {
    return null
  }
}

function er(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : false);
  return (0, r.jsx)("div", {
    className: V.alertActionsIconContainer,
    children: i.map(e => (0, r.jsx)(en, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let ei = Chunk473749.memo(function(e) {
  let t, {
      message: n,
      channel: i,
      embedChannel: o,
      compact: a,
      interactionUserId: s
    } = e,
    l = Q(n, i),
    c = X(i, n.author),
    u = (0, P.ZP)(n),
    d = (0, D.CF)(Y({
      message: n,
      channel: i,
      author: u,
      guildId: null == i ? true : i.guild_id,
      compact: a
    }, l), c),
    f = () => d,
    _ = T.default.getUser(s),
    m = Q(n, i),
    h = X(i, _, T.default.getCurrentUser());
  if (null != _) {
    let e = (0, P.ij)(_, i),
      r = (0, D.CF)(Y({
        message: n,
        channel: i,
        author: e,
        guildId: null == i ? true : i.guild_id,
        compact: a
      }, m), h);
    t = () => r
  }
  let g = () => (0, r.jsx)("div", {
    className: V.channelNameContainer,
    children: (0, r.jsx)(R.Z, {
      channel: o,
      className: V.channelName,
      openChatWithoutConnecting: true
    })
  });
  return (0, r.jsx)(p.Text, {
    variant: "text-md/normal",
    color: "text-strong",
    tag: "span",
    className: V.spanCorrection,
    children: (0, E.Mq)(n, o, g, f, t)
  })
});

function eo(e) {
  var t;
  let {
    id: n,
    compact: o,
    message: s,
    channel: l
  } = e, {
    avatarSrc: f,
    eventHandlers: {
      onMouseEnter: S,
      onMouseLeave: T
    }
  } = (0, M.m)(true), C = (0, c.JA)(null != n ? n : ""), {
    onFocus: A
  } = C, P = z(C, ["onFocus"]), {
    isFocused: R,
    handleFocus: x,
    handleBlur: j
  } = (0, L.bb)(A), U = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), H = (0, u.e7)([I.Z], () => I.Z.can(G.Plq.MANAGE_MESSAGES, l), [l]), {
    ruleName: W,
    embedChannel: q,
    decisionId: X,
    keywordMatchedContent: ee,
    keyword: et,
    content: en,
    flaggedMessageId: eo,
    timeoutDuration: ea,
    decisionReason: es,
    alertActionsExecution: el,
    quarantineType: ec,
    interactionUserId: eu
  } = (0, E.ZP)(s), ed = i.useMemo(() => (0, N.k$)(en, ee, l.id), [en, ee, l]), ef = Q(s, l), {
    selected: ep
  } = ef, e_ = z(ef, ["selected"]), em = ep || U && R, eh = e => {
    var t;
    null == (t = e_.onContextMenuModerateUser) || t.call(e_, e)
  }, eg = i.useCallback(() => {
    (0, b._s)(s.id, en, X, l)
  }, [s.id, en, X, l]), eE = i.useCallback(e => {
    null != eo && null != q && (e.stopPropagation(), e.preventDefault(), (0, O.Z)(G.Z5c.CHANNEL(null == q ? true : q.guild_id, null == q ? true : q.id, eo)))
  }, [q, eo]), eb = i.useCallback(e => {
    null != q && (_.default.selectChannel({
      guildId: q.guild_id,
      channelId: e,
      messageId: s.id
    }), (0, v.Kh)(e))
  }, [s, q]), ey = i.useCallback(() => {
    (0, y.Xx)(s.id, l, g.d.DELETE_USER_MESSAGE)
  }, [l, s.id]), eO = (0, F.getFriendlyDurationString)(Number(ea)), ev = null != es, eS = H && null != eo && (null == el || !el.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)), eI = s.embeds.length > 0 ? null == (t = s.embeds[0].fields.find(e => "channel_id" === e.rawName)) ? true : t.rawValue : null, eT = null != eI;
  return (0, r.jsx)("div", {
    onMouseEnter: S,
    onMouseLeave: T,
    children: (0, r.jsx)(k.Z, {
      className: a()(V.mainContainer, {
        [V.compact]: o
      }),
      iconNode: o ? null : (0, r.jsx)(M.S, {
        src: f
      }),
      iconContainerClassName: V.iconContainer,
      compact: o,
      children: (0, r.jsxs)("div", {
        className: a()(V.content, {
          [V.compact]: o
        }),
        children: [(0, r.jsx)(D.nD, {
          message: s,
          messageClassname: V.spanCorrection,
          className: a()(V.usernameContainer, V.spanCorrection, {
            [V.compact]: o
          }),
          username: (0, r.jsxs)("div", {
            className: V.spanCorrection,
            children: [(0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: V.username,
              children: B.intl.string(B.t.hG1StD)
            }), (0, r.jsx)(h.Z, {
              type: Z.Hb.SYSTEM_DM,
              className: V.systemTag
            }), (0, r.jsx)(ei, {
              message: s,
              channel: l,
              embedChannel: q,
              compact: o,
              interactionUserId: eu
            })]
          }),
          compact: o,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(V.messageContent, {
            [V.compact]: o
          }),
          children: (0, r.jsx)(w.Z, K(Y({}, P), {
            message: s,
            channel: q,
            content: ed,
            compact: o,
            withFooter: true,
            hideTimestamp: true,
            className: a()(V.embedCard, {
              [V.compact]: o,
              [V.selected]: em,
              [V.isClickable]: null != eo && null != q
            }),
            childrenAccessories: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: V.centeredRowContainer,
                children: [null != et && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: B.intl.format(B.t.SYIUTR, {
                      keyword: et
                    })
                  }), (0, r.jsx)("div", {
                    className: a()(V.dot, V.dotMargin)
                  })]
                }), null != W && (0, r.jsx)(p.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: B.intl.format(B.t.ZoOyKB, {
                    ruleName: W
                  })
                }), null != eO && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: a()(V.dot, V.dotMargin)
                  }), (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.__invalid_footerText,
                    children: B.intl.format(B.t["3LYql6"], {
                      duration: eO
                    })
                  })]
                }), null != ec && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: a()(V.dot, V.dotMargin)
                  }), (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: V.titleCase,
                    children: B.intl.format(B.t["26bB2M"], {
                      reason: (0, E.hU)(ec)
                    })
                  })]
                })]
              }), ev ? (0, r.jsx)($, {
                children: (0, r.jsx)(p.Text, {
                  variant: "text-xs/medium",
                  color: "text-default",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: e_,
            zalgo: true,
            onFocus: x,
            onBlur: j,
            onClick: eE
          }))
        }), (0, r.jsx)(J, {
          compact: o,
          children: (0, r.jsxs)("div", {
            className: a()(V.centeredRowContainer, V.buttonContainer, {
              [V.compact]: o
            }),
            children: [(0, r.jsxs)("div", {
              className: V.footerAction,
              children: [(0, r.jsx)(p.b7C, {
                size: "xs",
                color: d.Z.unsafe_rawColors.BRAND_500.css,
                className: V.footerIcon
              }), (0, r.jsx)(p.Avr, {
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: B.intl.string(B.t.DEoVWZ),
                onClick: eh
              })]
            }), eT ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: V.dot
              }), (0, r.jsx)("div", {
                className: V.footerAction,
                children: (0, r.jsx)(p.Avr, {
                  onClick: () => eb(eI),
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: B.intl.string(B.t.jtkj06)
                })
              })]
            }) : null, (0, r.jsx)("div", {
              className: V.dot
            }), (0, r.jsx)("div", {
              className: V.footerAction,
              children: (0, r.jsx)(p.Avr, {
                onClick: eg,
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: B.intl.string(B.t["94JbM3"])
              })
            }), eS ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: V.dot
              }), (0, r.jsx)("div", {
                className: V.footerAction,
                children: (0, r.jsx)(p.Avr, {
                  onClick: ey,
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: B.intl.string(B.t["3A52tY"])
                })
              })]
            }) : null, null != el ? (0, r.jsx)(er, {
              alertActionsExecution: el,
              guildId: l.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}