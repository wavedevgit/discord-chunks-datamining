/** Chunk was on 46875 **/
/** chunk id: 978733, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => ee
}), require("./321073.js"), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk108531 = require("./108531.js"),
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
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
    ++this.currentIndex, this.steps.push(B({
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
    V(this, "currentIndex", 0), V(this, "steps", []), V(this, "completedSteps", 0)
  }
}
let Q = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return (0, l.jsx)("div", {
      className: H.Ei,
      "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, {
        numRoles: n.length
      }),
      children: n.map(e => (0, l.jsx)(x.b_, {
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
    return (0, l.jsx)(f.DUT, {
      onClick: t,
      className: H.b,
      "aria-label": z.intl.string(z.t.WAI6xu),
      children: (0, l.jsx)(f.PGe, {
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
    return (0, l.jsx)(f.DUT, {
      onClick: n,
      className: H.b,
      "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
      children: t ? (0, l.jsx)(f.gR, {
        size: "xs",
        color: "currentColor",
        className: H.ut
      }) : (0, l.jsx)(f._Xm, {
        size: "xs",
        color: "currentColor",
        className: H.ut
      })
    })
  },
  ee = e => {
    let t, {
        hasAnyThread: a,
        hasActiveThreads: s,
        channel: x
      } = e,
      {
        onboardingExpanded: V
      } = (0, U.kU)(e => {
        let {
          onboardingExpanded: t
        } = e;
        return {
          onboardingExpanded: t
        }
      }, d.x),
      {
        tagFilter: ee
      } = (0, P.R)(x.id),
      et = (0, m.bG)([N.A], () => N.A.getGuild(x.getGuildId())),
      en = (0, I.S4)(x),
      {
        transitions: el,
        setVisible: er
      } = (() => {
        let [e, t] = r.useState(true);
        return {
          transitions: (0, f.pnh)(e, {
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
      ea = (0, f.pnh)(V, {
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
      ei = r.useCallback(e => {
        var t;
        null == (t = e.clickHandler) || t.call(e)
      }, []),
      es = (t = x.id, r.useCallback(() => (er(false), R.A.hideAdminOnboarding(t, true)), [t, er])),
      {
        onboardingSteps: ec,
        isDismissed: eo,
        isHidden: ed,
        isAllDone: eu
      } = (e => {
        var t;
        let a, i, s, o, {
            guild: d,
            channel: h,
            hasAnyThread: x,
            handleHide: b
          } = e,
          [j, v] = r.useState(false),
          y = (0, D.l)(h.id),
          A = (0, m.bG)([w.A], () => w.A.hasHidden(h.id)),
          N = (a = null == d ? true : d.id, i = (0, m.bG)([O.A], () => null != a ? O.A.getSortedRoles(a) : true), r.useMemo(() => {
            let e, t, r, a, s, c, o, m, b = new X,
              j = (null == h ? true : h.isMediaChannel()) === true;
            return null == d || null == h || j || null == i || b.addStep((e = (0, p.A)(h) ? u.kg(G.xBc.VIEW_CHANNEL, G.xBc.SEND_MESSAGES) : G.xBc.SEND_MESSAGES, r = (t = null != d ? (0, k.N)(i, h, e).filter(e => h.permissionOverwrites.hasOwnProperty(e.id) || (0, C.Oy)(e)) : []).length > 0, a = t.some(e => (0, C.Oy)(e)), {
              name: z.intl.string(z.t["/Ax2gs"]),
              description: z.intl.string(z.t.gAIOfg),
              isDone: r && a,
              shouldWarn: r && !a,
              children: r ? (0, l.jsx)(Q, {
                guild: d,
                roles: t
              }) : null,
              clickHandler: () => {
                J(F._G.PERMISSIONS), (0, f.mMO)(async () => {
                  let {
                    default: r
                  } = await n.e("17110").then(n.bind(n, 698325));
                  return v(true), n => (0, l.jsx)(r, K(B({}, n), {
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
            })), j || b.addStep((s = null != h.topic && h.topic.length > 0, {
              name: z.intl.string(z.t.UgJu1e),
              description: z.intl.string(z.t["3C6/G1"]),
              clickHandler: () => {
                J(F._G.GUIDELINES), g.Ay.open(h.id, true, G.b7d.TOPIC)
              },
              isDone: s
            })), b.addStep((c = null != h.availableTags && h.availableTags.length > 0, {
              name: z.intl.string(z.t.xiBFCi),
              description: z.intl.string(z.t.wCv4Oz),
              clickHandler: () => {
                J(F._G.TAGS), g.Ay.open(h.id), (0, f.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("47326").then(n.bind(n, 950989));
                  return t => (0, l.jsx)(e, K(B({}, t), {
                    channelId: h.id,
                    guildId: h.guild_id
                  }))
                })
              },
              isDone: c
            })), b.addStep((o = null != h.defaultReactionEmoji, {
              name: z.intl.string(z.t.QlyC9s),
              description: z.intl.string(z.t["+50LJg"]),
              clickHandler: () => {
                J(F._G.DEFAULT_REACTION), (0, f.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("85157").then(n.bind(n, 939940));
                  return t => (0, l.jsx)(e, K(B({}, t), {
                    channel: h
                  }))
                })
              },
              isDone: o
            })), b.addStep((m = null == d ? true : d.id, {
              name: z.intl.string(z.t["6A0O64"]),
              description: j ? z.intl.string(z.t["8hI5vr"]) : z.intl.format(z.t.ysxcAw, {
                onClick: e => {
                  null != m && (e.preventDefault(), e.stopPropagation(), (0, M.zd)(), (0, f.mMO)(async () => {
                    let {
                      default: e
                    } = await n.e("7937").then(n.bind(n, 420472));
                    return t => (0, l.jsx)(e, K(B({}, t), {
                      guildId: m
                    }))
                  }))
                }
              }),
              clickHandler: () => {
                J(F._G.CREATE_POST), T._.dispatch(G.jej.FOCUS_COMPOSER_TITLE)
              },
              isDone: x
            })), b
          }, [h, d, i, x, v])),
          S = N.isAllDone(),
          R = y || A || (t = h.id, s = E.default.extractTimestamp(t), !c()().isBefore(c()(s).add(c().duration(15, "days"))));
        return o = r.useRef(0), r.useEffect(() => (j || !S || R ? clearTimeout(o.current) : o.current = setTimeout(() => {
          b()
        }, 60 * _.A.Millis.SECOND), () => clearTimeout(o.current)), [S, R, b, j]), {
          onboardingSteps: N,
          isHidden: A,
          isDismissed: y,
          isAllDone: S
        }
      })({
        guild: et,
        channel: x,
        hasAnyThread: a,
        handleHide: es
      }),
      em = !ed && !eo,
      eh = (0, U.ST)(),
      ef = x.isMediaChannel(),
      eg = e => eh.getState().setOnboardingExpanded(e);
    return ((0, b.Ay)(() => {
      eu && em && es()
    }), (e => {
      let {
        isAllDone: t,
        isVisible: n,
        canManageChannel: l,
        guildId: a,
        channel: i
      } = e, s = (0, m.bG)([O.A], () => null != a ? O.A.partitionVersion(a) : true), c = r.useCallback(() => {
        T._.dispatch(G.jej.REMEASURE_TARGET)
      }, []);
      r.useEffect(() => {
        c()
      }, [c, t, n, l, s, i.id, i.permissionOverwrites])
    })({
      isAllDone: eu,
      isVisible: em,
      canManageChannel: en,
      guildId: null == et ? true : et.id,
      channel: x
    }), r.useEffect(() => {
      eo || er(!ed)
    }, [eo, er, ed]), (0, b.Ay)(() => {
      a && em || eg(true)
    }), null == et) ? null : (0, v.Fo)(x) ? s || 0 !== ee.size ? ee.size > 0 ? null : (0, l.jsx)(y.A, {
      guild: et
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(y.A, {
        guild: et
      }), (0, l.jsx)(A.D, {})]
    }) : em && en ? ef ? a ? null : (0, l.jsx)(j.A, {
      channel: x
    }) : (0, l.jsx)(l.Fragment, {
      children: el((e, t) => t ? (0, l.jsx)(o.animated.div, {
        style: e,
        className: H.kL,
        children: (0, l.jsxs)("div", {
          className: H.iE,
          children: [(0, l.jsx)("div", {
            className: H.U1,
            children: (0, l.jsxs)(f.Fmo, {
              component: (0, l.jsx)(f.Heading, {
                variant: "heading-md/semibold",
                children: z.intl.string(z.t.LhlgY9)
              }),
              children: [(0, l.jsx)(f.Heading, {
                variant: "heading-md/medium",
                className: H.wx,
                children: z.intl.format(z.t["9L+8bz"], {
                  numCompleted: ec.completedSteps.toString(),
                  numSteps: ec.steps.length.toString()
                })
              }), (0, l.jsxs)(f.Text, {
                variant: "text-xs/normal",
                className: H.l2,
                children: [(0, l.jsx)(f.mir, {
                  size: "xxs",
                  color: "currentColor",
                  className: H.Kk
                }), z.intl.string(z.t.znhX2R)]
              }), (0, l.jsx)($, {
                expanded: V,
                onClick: () => eg(!V)
              }), (0, l.jsx)(Z, {
                handleHide: es
              })]
            })
          }), ea((e, t) => t ? (0, l.jsx)(o.animated.div, {
            style: e,
            className: H.qI,
            children: (0, l.jsx)("ol", {
              className: H.D4,
              children: ec.getSteps().map(e => (0, l.jsxs)(f.DUT, {
                tag: "li",
                "aria-label": e.name,
                onClick: () => ei(e),
                className: i()(H._h, {
                  [H.so]: e.isDone
                }),
                children: [e.shouldWarn ? (0, l.jsx)(f.EpV, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: h.A.colors.ICON_FEEDBACK_CRITICAL,
                  className: H.FY
                }) : e.isDone ? (0, l.jsx)(f.fkz, {
                  color: h.A.colors.STATUS_POSITIVE_BACKGROUND.css,
                  icon: f.A9s,
                  style: q,
                  className: H.FY
                }) : (0, l.jsx)(f.fkz, {
                  disableColor: true,
                  icon: (0, f.kHD)(S.A),
                  style: W,
                  className: i()(H.FY, H.so)
                }), (0, l.jsxs)("div", {
                  className: H.PM,
                  children: [(0, l.jsx)(f.Text, {
                    variant: "text-md/medium",
                    color: e.isDone ? "text-default" : "text-strong",
                    className: H.u,
                    children: e.name
                  }), (0, l.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: H.XK,
                    children: e.description
                  }), e.children]
                }), (0, l.jsx)(f._BQ, {
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
    }) : a ? null : (0, l.jsx)(L.A, {
      channelName: x.name,
      guildId: x.guild_id,
      tagFilter: ee,
      channel: x
    })
  }