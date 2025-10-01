/** Chunk was on web.js **/
/** chunk id: 33803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk722770 = require("./722770.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk116618 = require("./116618.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = z(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function q(e, t) {
  let {
    popouts: n,
    selected: r,
    setPopout: a
  } = (0, x.Z)(e.id, k.d$), {
    usernameProfile: o,
    avatarProfile: s
  } = n, l = (0, L.wq)(e.author.id, t.id), c = (0, L.RN)(e.author.id, t.id, e.id), u = (0, L.XO)(e, t, o, a);
  return {
    selected: r,
    onContextMenu: l,
    onContextMenuModerateUser: c,
    onClickUsername: u,
    onClickAvatar: (0, L.R9)(s, a),
    onPopoutRequestClose: i.useCallback(() => a({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [a]),
    renderPopout: D.Z,
    showAvatarPopout: s,
    showUsernamePopout: o
  }
}

function X(e, t, n) {
  return i.useMemo(() => {
    if (null != t && null != n) return i => (0, r.jsx)(v.Z, W(H({}, i), {
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
    className: o()(F.footerContainer, n, {
      [F.compact]: i
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
    className: o()(F.annotationRow, n),
    children: t
  })
}

function $(e, t) {
  switch (e) {
    case m.d.DELETE_USER_MESSAGE:
      return (0, r.jsx)(f.XHJ, H({
        size: "xs",
        color: "currentColor",
        className: F.alertActionIcon
      }, t));
    case m.d.SET_COMPLETED:
      return (0, r.jsx)(f.dz2, H({
        size: "xs",
        color: "currentColor",
        className: o()(F.alertActionIcon, F.alertActionSetCompletedIcon)
      }, t));
    case m.d.SUBMIT_FEEDBACK:
      return (0, r.jsx)(f.U65, H({
        size: "xs",
        color: "currentColor",
        className: F.alertActionIcon
      }, t));
    default:
      return null
  }
}

function ee(e, t, n) {
  var r;
  let i = null != (r = S.ZP.getNickname(n, null, t)) ? r : A.ZP.getUserTag(t),
    a = l()(e.ts),
    o = "".concat(i, " ").concat(a.fromNow());
  try {
    switch (parseInt(e.actionType)) {
      case m.d.DELETE_USER_MESSAGE:
        return Z.intl.formatToPlainString(Z.t.BtKE9v, {
          userName: i,
          timestamp: a.fromNow()
        });
      case m.d.SET_COMPLETED:
        return Z.intl.formatToPlainString(Z.t.dyo9UV, {
          userName: i,
          timestamp: a.fromNow()
        });
      case m.d.SUBMIT_FEEDBACK:
        return Z.intl.formatToPlainString(Z.t["C9/kIC"], {
          userName: i,
          timestamp: a.fromNow()
        });
      default:
        return o
    }
  } catch (e) {
    return o
  }
}

function et(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, i = (0, d.e7)([T.default], () => T.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == i) return $(e, {});
    let a = ee(t, i, n);
    return (0, r.jsx)(f.ua7, {
      text: a,
      children: t => $(e, t)
    })
  } catch (e) {
    return null
  }
}

function en(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : false);
  return (0, r.jsx)("div", {
    className: F.alertActionsIconContainer,
    children: i.map(e => (0, r.jsx)(et, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let er = Chunk647438.memo(function(e) {
  let t, {
      message: n,
      channel: i,
      embedChannel: a,
      compact: o,
      interactionUserId: s
    } = e,
    l = q(n, i),
    c = X(i, n.author),
    u = (0, N.ZP)(n),
    d = (0, w.CF)(H({
      message: n,
      channel: i,
      author: u,
      guildId: null == i ? true : i.guild_id,
      compact: o
    }, l), c),
    _ = () => d,
    p = T.default.getUser(s),
    h = q(n, i),
    m = X(i, p, T.default.getCurrentUser());
  if (null != p) {
    let e = (0, N.ij)(p, i),
      r = (0, w.CF)(H({
        message: n,
        channel: i,
        author: e,
        guildId: null == i ? true : i.guild_id,
        compact: o
      }, h), m);
    t = () => r
  }
  let E = () => (0, r.jsx)("div", {
    className: F.channelNameContainer,
    children: (0, r.jsx)(R.Z, {
      channel: a,
      className: F.channelName,
      openChatWithoutConnecting: true
    })
  });
  return (0, r.jsx)(f.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    tag: "span",
    className: F.spanCorrection,
    children: (0, g.Mq)(n, a, E, _, t)
  })
});

function ei(e) {
  var t;
  let {
    id: n,
    compact: a,
    message: s,
    channel: l
  } = e, {
    avatarSrc: v,
    eventHandlers: {
      onMouseEnter: T,
      onMouseLeave: S
    }
  } = (0, j.m)(true), A = (0, c.JA)(null != n ? n : ""), {
    onFocus: N
  } = A, R = K(A, ["onFocus"]), {
    isFocused: D,
    handleFocus: x,
    handleBlur: k
  } = (0, L.bb)(N), V = (0, d.e7)([p.Z], () => p.Z.keyboardModeEnabled), Y = (0, d.e7)([I.Z], () => I.Z.can(U.Plq.MANAGE_MESSAGES, l), [l]), {
    ruleName: z,
    embedChannel: X,
    decisionId: $,
    keywordMatchedContent: ee,
    keyword: et,
    content: ei,
    flaggedMessageId: ea,
    timeoutDuration: eo,
    decisionReason: es,
    alertActionsExecution: el,
    quarantineType: ec,
    interactionUserId: eu
  } = (0, g.ZP)(s), ed = i.useMemo(() => (0, C.k$)(ei, ee, l.id), [ei, ee, l]), ef = q(s, l), {
    selected: e_
  } = ef, ep = K(ef, ["selected"]), eh = e_ || V && D, em = e => {
    var t;
    null == (t = ep.onContextMenuModerateUser) || t.call(ep, e)
  }, eg = i.useCallback(() => {
    (0, E._s)(s.id, ei, $, l)
  }, [s.id, ei, $, l]), eE = i.useCallback(e => {
    null != ea && null != X && (e.stopPropagation(), e.preventDefault(), (0, y.Z)(U.Z5c.CHANNEL(null == X ? true : X.guild_id, null == X ? true : X.id, ea)))
  }, [X, ea]), eb = i.useCallback(e => {
    null != X && (_.default.selectChannel({
      guildId: X.guild_id,
      channelId: e,
      messageId: s.id
    }), (0, O.Kh)(e))
  }, [s, X]), ey = i.useCallback(() => {
    (0, b.Xx)(s.id, l, m.d.DELETE_USER_MESSAGE)
  }, [l, s.id]), eO = (0, B.L9)(Number(eo)), ev = null != es, eI = Y && null != ea && (null == el || !el.actions.hasOwnProperty(m.d.DELETE_USER_MESSAGE)), eT = s.embeds.length > 0 ? null == (t = s.embeds[0].fields.find(e => "channel_id" === e.rawName)) ? true : t.rawValue : null, eS = null != eT;
  return (0, r.jsx)("div", {
    onMouseEnter: T,
    onMouseLeave: S,
    children: (0, r.jsx)(M.Z, {
      className: o()(F.mainContainer, {
        [F.compact]: a
      }),
      iconNode: a ? null : (0, r.jsx)(j.S, {
        src: v
      }),
      iconContainerClassName: F.iconContainer,
      compact: a,
      children: (0, r.jsxs)("div", {
        className: o()(F.content, {
          [F.compact]: a
        }),
        children: [(0, r.jsx)(w.nD, {
          message: s,
          messageClassname: F.spanCorrection,
          className: o()(F.usernameContainer, F.spanCorrection, {
            [F.compact]: a
          }),
          username: (0, r.jsxs)("div", {
            className: F.spanCorrection,
            children: [(0, r.jsx)(f.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: F.username,
              children: Z.intl.string(Z.t.hG1StL)
            }), (0, r.jsx)(h.Z, {
              type: G.Hb.SYSTEM_DM,
              className: F.systemTag
            }), (0, r.jsx)(er, {
              message: s,
              channel: l,
              embedChannel: X,
              compact: a,
              interactionUserId: eu
            })]
          }),
          compact: a,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: o()(F.messageContent, {
            [F.compact]: a
          }),
          children: (0, r.jsx)(P.Z, W(H({}, R), {
            message: s,
            channel: X,
            content: ed,
            compact: a,
            withFooter: true,
            hideTimestamp: true,
            className: o()(F.embedCard, {
              [F.compact]: a,
              [F.selected]: eh,
              [F.isClickable]: null != ea && null != X
            }),
            childrenAccessories: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: F.centeredRowContainer,
                children: [null != et && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: Z.intl.format(Z.t.SYIUTU, {
                      keyword: et
                    })
                  }), (0, r.jsx)("div", {
                    className: o()(F.dot, F.dotMargin)
                  })]
                }), null != z && (0, r.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: Z.intl.format(Z.t.ZoOyKC, {
                    ruleName: z
                  })
                }), null != eO && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: o()(F.dot, F.dotMargin)
                  }), (0, r.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: F.__invalid_footerText,
                    children: Z.intl.format(Z.t["3LYql5"], {
                      duration: eO
                    })
                  })]
                }), null != ec && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: o()(F.dot, F.dotMargin)
                  }), (0, r.jsx)(f.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: F.titleCase,
                    children: Z.intl.format(Z.t["26bB2N"], {
                      reason: (0, g.hU)(ec)
                    })
                  })]
                })]
              }), ev ? (0, r.jsx)(J, {
                children: (0, r.jsx)(f.Text, {
                  variant: "text-xs/medium",
                  color: "text-default",
                  tag: "span",
                  children: es
                })
              }) : null]
            }),
            popoutProps: ep,
            zalgo: true,
            onFocus: x,
            onBlur: k,
            onClick: eE
          }))
        }), (0, r.jsx)(Q, {
          compact: a,
          children: (0, r.jsxs)("div", {
            className: o()(F.centeredRowContainer, F.buttonContainer, {
              [F.compact]: a
            }),
            children: [(0, r.jsxs)("div", {
              className: F.footerAction,
              children: [(0, r.jsx)(f.b7C, {
                size: "xs",
                color: u.Z.BRAND,
                className: F.footerIcon
              }), (0, r.jsx)(f.Avr, {
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: Z.intl.string(Z.t.DEoVWV),
                onClick: em
              })]
            }), eS ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: F.dot
              }), (0, r.jsx)("div", {
                className: F.footerAction,
                children: (0, r.jsx)(f.Avr, {
                  onClick: () => eb(eT),
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: Z.intl.string(Z.t.jtkj09)
                })
              })]
            }) : null, (0, r.jsx)("div", {
              className: F.dot
            }), (0, r.jsx)("div", {
              className: F.footerAction,
              children: (0, r.jsx)(f.Avr, {
                onClick: eg,
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: Z.intl.string(Z.t["94JbMz"])
              })
            }), eI ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: F.dot
              }), (0, r.jsx)("div", {
                className: F.footerAction,
                children: (0, r.jsx)(f.Avr, {
                  onClick: ey,
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: Z.intl.string(Z.t["3A52tb"])
                })
              })]
            }) : null, null != el ? (0, r.jsx)(en, {
              alertActionsExecution: el,
              guildId: l.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}