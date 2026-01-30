/** Chunk was on 46875 **/
/** chunk id: 978733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => ee
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk864605 = require("./864605.js"),
  Chunk942381 = require("./942381.js"),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk417454 = require("./417454.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk148719 = require("./148719.js"),
  Chunk504842 = require("./504842.jsx"),
  Chunk376708 = require("./376708.js"),
  Chunk207336 = require("./207336.jsx"),
  Chunk933917 = require("./933917.jsx"),
  Chunk34457 = require("./34457.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk947094 = require("./947094.js"),
  Chunk919577 = require("./919577.js"),
  Chunk387255 = require("./387255.js"),
  Chunk422844 = require("./422844.js"),
  Chunk435470 = require("./435470.js"),
  Chunk853742 = require("./853742.js"),
  Chunk892110 = require("./892110.js"),
  Chunk633148 = require("./633148.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk253913 = require("./253913.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk524445 = require("./524445.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
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
let W = {
    width: 28,
    height: 28
  },
  q = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  J = e => {
    (0, M.bh)({
      onboardingCTA: e
    })
  };
class X {
  addStep(e) {
    ++this.currentIndex, this.steps.push(V({
      index: this.currentIndex
    }, e)), e.isDone && this.completedSteps++
  }
  getSteps() {
    return this.steps
  }
  isAllDone() {
    return this.steps.every(e => e.isDone)
  }
  constructor() {
    B(this, "currentIndex", 0), B(this, "steps", []), B(this, "completedSteps", 0)
  }
}
let Q = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return (0, r.jsx)("div", {
      className: H.Ei,
      "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, {
        numRoles: n.length
      }),
      children: n.map(e => (0, r.jsx)(x.b_, {
        role: e,
        canRemove: false,
        onRemove: G.FXj,
        guildId: t.id,
        className: H.Yq
      }, e.id))
    })
  },
  Y = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  Z = e => {
    let {
      handleHide: t
    } = e;
    return (0, r.jsx)(g.DUT, {
      onClick: t,
      className: H.b,
      "aria-label": z.intl.string(z.t.WAI6xu),
      children: (0, r.jsx)(g.PGe, {
        size: "md",
        color: "currentColor",
        className: H.ut
      })
    })
  },
  $ = e => {
    let {
      expanded: t,
      onClick: n
    } = e;
    return (0, r.jsx)(g.DUT, {
      onClick: n,
      className: H.b,
      "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
      children: t ? (0, r.jsx)(g.gR, {
        size: "xs",
        color: "currentColor",
        className: H.ut
      }) : (0, r.jsx)(g._Xm, {
        size: "xs",
        color: "currentColor",
        className: H.ut
      })
    })
  },
  ee = e => {
    let t, {
        hasAnyThread: i,
        hasActiveThreads: s,
        channel: x
      } = e,
      {
        onboardingExpanded: B
      } = (0, F.kU)(e => {
        let {
          onboardingExpanded: t
        } = e;
        return {
          onboardingExpanded: t
        }
      }, d.x),
      {
        tagFilter: ee
      } = (0, R.R)(x.id),
      et = (0, m.bG)([O.A], () => O.A.getGuild(x.getGuildId())),
      en = (0, k.S4)(x),
      {
        transitions: er,
        setVisible: el
      } = (() => {
        let [e, t] = l.useState(true);
        return {
          transitions: (0, g.pnh)(e, {
            keys: e => e ? "shown" : "hidden",
            config: Y,
            from: {
              opacity: 0
            },
            enter: {
              opacity: 1
            },
            leave: {
              opacity: 0
            },
            unique: true
          }),
          setVisible: t
        }
      })(),
      ei = (0, g.pnh)(B, {
        from: {
          maxHeight: 0
        },
        enter: {
          maxHeight: 500
        },
        leave: {
          maxHeight: 0
        },
        config: {
          duration: 200
        }
      }),
      ea = l.useCallback(e => {
        var t;
        null == (t = e.clickHandler) || t.call(e)
      }, []),
      es = (t = x.id, l.useCallback(() => (el(false), I.A.hideAdminOnboarding(t, true)), [t, el])),
      {
        onboardingSteps: eo,
        isDismissed: ec,
        isHidden: ed,
        isAllDone: eu
      } = (e => {
        var t;
        let i, a, s, c, {
            guild: d,
            channel: h,
            hasAnyThread: x,
            handleHide: p
          } = e,
          [j, v] = l.useState(false),
          _ = (0, D.l)(h.id),
          y = (0, m.bG)([E.A], () => E.A.hasHidden(h.id)),
          O = (i = null == d ? true : d.id, a = (0, m.bG)([C.A], () => null != i ? C.A.getSortedRoles(i) : true), l.useMemo(() => {
            let e, t, l, i, s, o, c, m, p = new X,
              j = (null == h ? true : h.isMediaChannel()) === true;
            return null == d || null == h || j || null == a || p.addStep((e = (0, b.A)(h) ? u.kg(G.xBc.VIEW_CHANNEL, G.xBc.SEND_MESSAGES) : G.xBc.SEND_MESSAGES, l = (t = null != d ? (0, P.N)(a, h, e).filter(e => h.permissionOverwrites.hasOwnProperty(e.id) || (0, A.Oy)(e)) : []).length > 0, i = t.some(e => (0, A.Oy)(e)), {
              name: z.intl.string(z.t["/Ax2gs"]),
              description: z.intl.string(z.t.gAIOfg),
              isDone: l && i,
              shouldWarn: l && !i,
              children: l ? (0, r.jsx)(Q, {
                guild: d,
                roles: t
              }) : null,
              clickHandler: () => {
                J(U._G.PERMISSIONS), (0, g.mMO)(async () => {
                  let {
                    default: l
                  } = await n.e("17110").then(n.bind(n, 698325));
                  return v(true), n => (0, r.jsx)(l, K(V({}, n), {
                    channel: h,
                    guild: d,
                    permission: e,
                    currentSelectedRoles: t
                  }))
                }, {
                  modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                  onCloseRequest: G.FXj,
                  onCloseCallback: () => v(false)
                })
              }
            })), j || p.addStep((s = null != h.topic && h.topic.length > 0, {
              name: z.intl.string(z.t.UgJu1e),
              description: z.intl.string(z.t["3C6/G1"]),
              clickHandler: () => {
                J(U._G.GUIDELINES), f.Ay.open(h.id, true, G.b7d.TOPIC)
              },
              isDone: s
            })), p.addStep((o = null != h.availableTags && h.availableTags.length > 0, {
              name: z.intl.string(z.t.xiBFCi),
              description: z.intl.string(z.t.wCv4Oz),
              clickHandler: () => {
                J(U._G.TAGS), f.Ay.open(h.id), (0, g.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("47326").then(n.bind(n, 950989));
                  return t => (0, r.jsx)(e, K(V({}, t), {
                    channelId: h.id,
                    guildId: h.guild_id
                  }))
                })
              },
              isDone: o
            })), p.addStep((c = null != h.defaultReactionEmoji, {
              name: z.intl.string(z.t.QlyC9s),
              description: z.intl.string(z.t["+50LJg"]),
              clickHandler: () => {
                J(U._G.DEFAULT_REACTION), (0, g.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("85157").then(n.bind(n, 939940));
                  return t => (0, r.jsx)(e, K(V({}, t), {
                    channel: h
                  }))
                })
              },
              isDone: c
            })), p.addStep((m = null == d ? true : d.id, {
              name: z.intl.string(z.t["6A0O64"]),
              description: j ? z.intl.string(z.t["8hI5vr"]) : z.intl.format(z.t.ysxcAw, {
                onClick: e => {
                  null != m && (e.preventDefault(), e.stopPropagation(), (0, M.zd)(), (0, g.mMO)(async () => {
                    let {
                      default: e
                    } = await n.e("7937").then(n.bind(n, 420472));
                    return t => (0, r.jsx)(e, K(V({}, t), {
                      guildId: m
                    }))
                  }))
                }
              }),
              clickHandler: () => {
                J(U._G.CREATE_POST), S._.dispatch(G.jej.FOCUS_COMPOSER_TITLE)
              },
              isDone: x
            })), p
          }, [h, d, a, x, v])),
          T = O.isAllDone(),
          I = _ || y || (t = h.id, s = w.default.extractTimestamp(t), !o()().isBefore(o()(s).add(o().duration(15, "days"))));
        return c = l.useRef(0), l.useEffect(() => (j || !T || I ? clearTimeout(c.current) : c.current = setTimeout(() => {
          p()
        }, 60 * N.A.Millis.SECOND), () => clearTimeout(c.current)), [T, I, p, j]), {
          onboardingSteps: O,
          isHidden: y,
          isDismissed: _,
          isAllDone: T
        }
      })({
        guild: et,
        channel: x,
        hasAnyThread: i,
        handleHide: es
      }),
      em = !ed && !ec,
      eh = (0, F.ST)(),
      eg = x.isMediaChannel(),
      ef = e => eh.getState().setOnboardingExpanded(e);
    return ((0, p.Ay)(() => {
      eu && em && es()
    }), (e => {
      let {
        isAllDone: t,
        isVisible: n,
        canManageChannel: r,
        guildId: i,
        channel: a
      } = e, s = (0, m.bG)([C.A], () => null != i ? C.A.partitionVersion(i) : true), o = l.useCallback(() => {
        S._.dispatch(G.jej.REMEASURE_TARGET)
      }, []);
      l.useEffect(() => {
        o()
      }, [o, t, n, r, s, a.id, a.permissionOverwrites])
    })({
      isAllDone: eu,
      isVisible: em,
      canManageChannel: en,
      guildId: null == et ? true : et.id,
      channel: x
    }), l.useEffect(() => {
      ec || el(!ed)
    }, [ec, el, ed]), (0, p.Ay)(() => {
      i && em || ef(true)
    }), null == et) ? null : (0, v.Fo)(x) ? s || 0 !== ee.size ? ee.size > 0 ? null : (0, r.jsx)(_.A, {
      guild: et
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.A, {
        guild: et
      }), (0, r.jsx)(y.D, {})]
    }) : em && en ? eg ? i ? null : (0, r.jsx)(j.A, {
      channel: x
    }) : (0, r.jsx)(r.Fragment, {
      children: er((e, t) => t ? (0, r.jsx)(c.animated.div, {
        style: e,
        className: H.kL,
        children: (0, r.jsxs)("div", {
          className: H.iE,
          children: [(0, r.jsx)("div", {
            className: H.U1,
            children: (0, r.jsxs)(g.Fmo, {
              component: (0, r.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                children: z.intl.string(z.t.LhlgY9)
              }),
              children: [(0, r.jsx)(g.Heading, {
                variant: "heading-md/medium",
                className: H.wx,
                children: z.intl.format(z.t["9L+8bz"], {
                  numCompleted: eo.completedSteps.toString(),
                  numSteps: eo.steps.length.toString()
                })
              }), (0, r.jsxs)(g.Text, {
                variant: "text-xs/normal",
                className: H.l2,
                children: [(0, r.jsx)(g.mir, {
                  size: "xxs",
                  color: "currentColor",
                  className: H.Kk
                }), z.intl.string(z.t.znhX2R)]
              }), (0, r.jsx)($, {
                expanded: B,
                onClick: () => ef(!B)
              }), (0, r.jsx)(Z, {
                handleHide: es
              })]
            })
          }), ei((e, t) => t ? (0, r.jsx)(c.animated.div, {
            style: e,
            className: H.qI,
            children: (0, r.jsx)("ol", {
              className: H.D4,
              children: eo.getSteps().map(e => (0, r.jsxs)(g.DUT, {
                tag: "li",
                "aria-label": e.name,
                onClick: () => ea(e),
                className: a()(H._h, {
                  [H.so]: e.isDone
                }),
                children: [e.shouldWarn ? (0, r.jsx)(g.EpV, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                  className: H.FY
                }) : e.isDone ? (0, r.jsx)(g.fkz, {
                  color: h.A.colors.STATUS_POSITIVE_BACKGROUND.css,
                  icon: g.A9s,
                  style: q,
                  className: H.FY
                }) : (0, r.jsx)(g.fkz, {
                  disableColor: true,
                  icon: (0, g.kHD)(T.A),
                  style: W,
                  className: a()(H.FY, H.so)
                }), (0, r.jsxs)("div", {
                  className: H.PM,
                  children: [(0, r.jsx)(g.Text, {
                    variant: "text-md/medium",
                    color: e.isDone ? "text-default" : "text-strong",
                    className: H.u,
                    children: e.name
                  }), (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: H.XK,
                    children: e.description
                  }), e.children]
                }), (0, r.jsx)(g._BQ, {
                  size: "custom",
                  color: "currentColor",
                  width: 12,
                  className: H.FY
                })]
              }, "onboard-step-".concat(e.index)))
            })
          }) : null)]
        })
      }) : null)
    }) : i ? null : (0, r.jsx)(L.A, {
      channelName: x.name,
      guildId: x.guild_id,
      tagFilter: ee,
      channel: x
    })
  }