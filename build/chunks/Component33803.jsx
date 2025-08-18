/** Chunk was on 91173 **/
/** chunk id: 33803, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ee
}), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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
  Chunk545869 = require("./545869.js");

function H(e) {
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

function V(e, t) {
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

function z(e, t) {
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
}

function W(e, t) {
  let {
    popouts: n,
    selected: r,
    setPopout: l
  } = (0, R.Z)(e.id, M.d$), {
    usernameProfile: o,
    avatarProfile: a
  } = n, s = (0, Z.wq)(e.author.id, t.id), c = (0, Z.RN)(e.author.id, t.id, e.id), u = (0, Z.XO)(e, t, o, l);
  return {
    selected: r,
    onContextMenu: s,
    onContextMenuModerateUser: c,
    onClickUsername: u,
    onClickAvatar: (0, Z.R9)(a, l),
    onPopoutRequestClose: i.useCallback(() => l({
      usernameProfile: false,
      avatarProfile: false,
      referencedUsernameProfile: false
    }), [l]),
    renderPopout: w.Z,
    showAvatarPopout: a,
    showUsernamePopout: o
  }
}

function Y(e, t, n) {
  return i.useMemo(() => {
    if (null != t && null != n) return i => (0, r.jsx)(v.Z, V(H({}, i), {
      user: t,
      currentUser: n,
      guildId: e.guild_id,
      channelId: e.id
    }))
  }, [e, t, n])
}

function K(e) {
  let {
    children: t,
    className: n,
    compact: i
  } = e;
  return (0, r.jsx)("div", {
    className: o()(G.footerContainer, n, {
      [G.compact]: i
    }),
    children: t
  })
}

function X(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(G.annotationRow, n),
    children: t
  })
}

function q(e, t) {
  switch (e) {
    case _.d.DELETE_USER_MESSAGE:
      return (0, r.jsx)(p.XHJ, H({
        size: "xs",
        color: "currentColor",
        className: G.alertActionIcon
      }, t));
    case _.d.SET_COMPLETED:
      return (0, r.jsx)(p.dz2, H({
        size: "xs",
        color: "currentColor",
        className: o()(G.alertActionIcon, G.alertActionSetCompletedIcon)
      }, t));
    case _.d.SUBMIT_FEEDBACK:
      return (0, r.jsx)(p.U65, H({
        size: "xs",
        color: "currentColor",
        className: G.alertActionIcon
      }, t));
    default:
      return null
  }
}

function J(e) {
  let {
    alertAction: t,
    guildId: n
  } = e, i = (0, d.e7)([x.default], () => x.default.getUser(t.actor), [t.actor]);
  try {
    let e = parseInt(t.actionType);
    if (null == i) return q(e, {});
    let l = function(e, t, n) {
      var r;
      let i = null != (r = j.ZP.getNickname(n, null, t)) ? r : I.ZP.getUserTag(t),
        l = s()(e.ts),
        o = "".concat(i, " ").concat(l.fromNow());
      try {
        switch (parseInt(e.actionType)) {
          case _.d.DELETE_USER_MESSAGE:
            return B.intl.formatToPlainString(B.t.BtKE9v, {
              userName: i,
              timestamp: l.fromNow()
            });
          case _.d.SET_COMPLETED:
            return B.intl.formatToPlainString(B.t.dyo9UV, {
              userName: i,
              timestamp: l.fromNow()
            });
          case _.d.SUBMIT_FEEDBACK:
            return B.intl.formatToPlainString(B.t["C9/kIC"], {
              userName: i,
              timestamp: l.fromNow()
            });
          default:
            return o
        }
      } catch (e) {
        return o
      }
    }(t, i, n);
    return (0, r.jsx)(p.ua7, {
      text: l,
      children: t => q(e, t)
    })
  } catch (e) {
    return null
  }
}

function Q(e) {
  let {
    alertActionsExecution: t,
    guildId: n
  } = e, i = Object.values(t.actions).sort((e, t) => e.actionType < t.actionType ? 1 : false);
  return (0, r.jsx)("div", {
    className: G.alertActionsIconContainer,
    children: i.map(e => (0, r.jsx)(J, {
      alertAction: e,
      guildId: n
    }, e.actionType))
  })
}
let $ = Chunk647438.memo(function(e) {
  let t, {
      message: n,
      channel: i,
      embedChannel: l,
      compact: o,
      interactionUserId: a
    } = e,
    s = W(n, i),
    c = Y(i, n.author),
    u = (0, T.ZP)(n),
    d = (0, A.CF)(H({
      message: n,
      channel: i,
      author: u,
      guildId: null == i ? true : i.guild_id,
      compact: o
    }, s), c),
    m = x.default.getUser(a),
    f = W(n, i),
    g = Y(i, m, x.default.getCurrentUser());
  if (null != m) {
    let e = (0, T.ij)(m, i),
      r = (0, A.CF)(H({
        message: n,
        channel: i,
        author: e,
        guildId: null == i ? true : i.guild_id,
        compact: o
      }, f), g);
    t = () => r
  }
  return (0, r.jsx)(p.Text, {
    variant: "text-md/normal",
    color: "header-primary",
    tag: "span",
    className: G.spanCorrection,
    children: (0, h.Mq)(n, l, () => (0, r.jsx)("div", {
      className: G.channelNameContainer,
      children: (0, r.jsx)(P.Z, {
        channel: l,
        className: G.channelName,
        openChatWithoutConnecting: true
      })
    }), () => d, t)
  })
});

function ee(e) {
  var t;
  let {
    id: n,
    compact: l,
    message: a,
    channel: s
  } = e, {
    avatarSrc: v,
    eventHandlers: {
      onMouseEnter: x,
      onMouseLeave: j
    }
  } = (0, D.m)(true), I = (0, c.JA)(null != n ? n : ""), {
    onFocus: T
  } = I, P = z(I, ["onFocus"]), {
    isFocused: w,
    handleFocus: R,
    handleBlur: M
  } = (0, Z.bb)(T), Y = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled), q = (0, d.e7)([y.Z], () => y.Z.can(k.Plq.MANAGE_MESSAGES, s), [s]), {
    ruleName: J,
    embedChannel: ee,
    decisionId: et,
    keywordMatchedContent: en,
    keyword: er,
    content: ei,
    flaggedMessageId: el,
    timeoutDuration: eo,
    decisionReason: ea,
    alertActionsExecution: es,
    quarantineType: ec,
    interactionUserId: eu
  } = (0, h.ZP)(a), ed = i.useMemo(() => (0, S.k$)(ei, en, s.id), [ei, en, s]), ep = W(a, s), {
    selected: em
  } = ep, ef = z(ep, ["selected"]), eg = i.useCallback(() => {
    (0, b._s)(a.id, ei, et, s)
  }, [a.id, ei, et, s]), e_ = i.useCallback(e => {
    null != el && null != ee && (e.stopPropagation(), e.preventDefault(), (0, C.Z)(k.Z5c.CHANNEL(null == ee ? true : ee.guild_id, null == ee ? true : ee.id, el)))
  }, [ee, el]), eh = i.useCallback(e => {
    null != ee && (m.default.selectChannel({
      guildId: ee.guild_id,
      channelId: e,
      messageId: a.id
    }), (0, O.Kh)(e))
  }, [a, ee]), eb = i.useCallback(() => {
    (0, E.Xx)(a.id, s, _.d.DELETE_USER_MESSAGE)
  }, [s, a.id]), eE = (0, F.L9)(Number(eo)), eC = null != ea, eO = q && null != el && (null == es || !es.actions.hasOwnProperty(_.d.DELETE_USER_MESSAGE)), ev = a.embeds.length > 0 ? null == (t = a.embeds[0].fields.find(e => "channel_id" === e.rawName)) ? true : t.rawValue : null, ey = null != ev;
  return (0, r.jsx)("div", {
    onMouseEnter: x,
    onMouseLeave: j,
    children: (0, r.jsx)(L.Z, {
      className: o()(G.mainContainer, {
        [G.compact]: l
      }),
      iconNode: l ? null : (0, r.jsx)(D.S, {
        src: v
      }),
      iconContainerClassName: G.iconContainer,
      compact: l,
      children: (0, r.jsxs)("div", {
        className: o()(G.content, {
          [G.compact]: l
        }),
        children: [(0, r.jsx)(A.nD, {
          message: a,
          messageClassname: G.spanCorrection,
          className: o()(G.usernameContainer, G.spanCorrection, {
            [G.compact]: l
          }),
          username: (0, r.jsxs)("div", {
            className: G.spanCorrection,
            children: [(0, r.jsx)(p.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: G.username,
              children: B.intl.string(B.t.hG1StL)
            }), (0, r.jsx)(g.Z, {
              type: U.Hb.SYSTEM_DM,
              className: G.systemTag
            }), (0, r.jsx)($, {
              message: a,
              channel: s,
              embedChannel: ee,
              compact: l,
              interactionUserId: eu
            })]
          }),
          compact: l,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: o()(G.messageContent, {
            [G.compact]: l
          }),
          children: (0, r.jsx)(N.Z, V(H({}, P), {
            message: a,
            channel: ee,
            content: ed,
            compact: l,
            withFooter: true,
            hideTimestamp: true,
            className: o()(G.embedCard, {
              [G.compact]: l,
              [G.selected]: em || Y && w,
              [G.isClickable]: null != el && null != ee
            }),
            childrenAccessories: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsxs)("div", {
                className: G.centeredRowContainer,
                children: [null != er && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    children: B.intl.format(B.t.SYIUTU, {
                      keyword: er
                    })
                  }), (0, r.jsx)("div", {
                    className: o()(G.dot, G.dotMargin)
                  })]
                }), null != J && (0, r.jsx)(p.Text, {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  tag: "span",
                  children: B.intl.format(B.t.ZoOyKC, {
                    ruleName: J
                  })
                }), null != eE && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: o()(G.dot, G.dotMargin)
                  }), (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: G.__invalid_footerText,
                    children: B.intl.format(B.t["3LYql5"], {
                      duration: eE
                    })
                  })]
                }), null != ec && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: o()(G.dot, G.dotMargin)
                  }), (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: G.titleCase,
                    children: B.intl.format(B.t["26bB2N"], {
                      reason: (0, h.hU)(ec)
                    })
                  })]
                })]
              }), eC ? (0, r.jsx)(X, {
                children: (0, r.jsx)(p.Text, {
                  variant: "text-xs/medium",
                  color: "text-default",
                  tag: "span",
                  children: ea
                })
              }) : null]
            }),
            popoutProps: ef,
            zalgo: true,
            onFocus: R,
            onBlur: M,
            onClick: e_
          }))
        }), (0, r.jsx)(K, {
          compact: l,
          children: (0, r.jsxs)("div", {
            className: o()(G.centeredRowContainer, G.buttonContainer, {
              [G.compact]: l
            }),
            children: [(0, r.jsxs)("div", {
              className: G.footerAction,
              children: [(0, r.jsx)(p.b7C, {
                size: "xs",
                color: u.Z.BRAND,
                className: G.footerIcon
              }), (0, r.jsx)(p.Avr, {
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: B.intl.string(B.t.DEoVWV),
                onClick: e => {
                  var t;
                  null == (t = ef.onContextMenuModerateUser) || t.call(ef, e)
                }
              })]
            }), ey ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: G.dot
              }), (0, r.jsx)("div", {
                className: G.footerAction,
                children: (0, r.jsx)(p.Avr, {
                  onClick: () => eh(ev),
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: B.intl.string(B.t.jtkj09)
                })
              })]
            }) : null, (0, r.jsx)("div", {
              className: G.dot
            }), (0, r.jsx)("div", {
              className: G.footerAction,
              children: (0, r.jsx)(p.Avr, {
                onClick: eg,
                variant: "primary",
                size: "sm",
                textVariant: "text-xs/normal",
                text: B.intl.string(B.t["94JbMz"])
              })
            }), eO ? (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", {
                className: G.dot
              }), (0, r.jsx)("div", {
                className: G.footerAction,
                children: (0, r.jsx)(p.Avr, {
                  onClick: eb,
                  variant: "primary",
                  size: "sm",
                  textVariant: "text-xs/normal",
                  text: B.intl.string(B.t["3A52tb"])
                })
              })]
            }) : null, null != es ? (0, r.jsx)(Q, {
              alertActionsExecution: es,
              guildId: s.guild_id
            }) : null]
          })
        })]
      })
    })
  })
}