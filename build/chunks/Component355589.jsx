/** Chunk was on 9456 **/
/** chunk id: 355589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./539854.js"), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442748 = require("./442748.js"),
  Chunk574583 = require("./574583.js"),
  Chunk831209 = require("./831209.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk412899 = require("./412899.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk447003 = require("./447003.js"),
  Chunk621516 = require("./621516.jsx"),
  Chunk982168 = require("./982168.js"),
  Chunk386923 = require("./386923.jsx"),
  Chunk474366 = require("./474366.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk961675 = require("./961675.js"),
  Chunk883429 = require("./883429.js"),
  Chunk993259 = require("./993259.js"),
  Chunk109434 = require("./109434.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk432771 = require("./432771.js"),
  Chunk538366 = require("./538366.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951718 = require("./951718.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
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
let W = {
    width: 28,
    height: 28
  },
  q = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  K = e => {
    (0, k.e5)({
      onboardingCTA: e
    })
  };
class X {
  addStep(e) {
    ++this.currentIndex, this.steps.push(G({
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
    U(this, "currentIndex", 0), U(this, "steps", []), U(this, "completedSteps", 0)
  }
}
let Y = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return (0, r.jsx)("div", {
      className: B.rolesList,
      "aria-label": z.intl.formatToPlainString(z.t.PCs0oo, {
        numRoles: n.length
      }),
      children: n.map(e => (0, r.jsx)(x.UB, {
        role: e,
        canRemove: false,
        onRemove: H.VqG,
        guildId: t.id,
        className: B.rolePill
      }, e.id))
    })
  },
  J = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  Q = e => {
    let {
      handleHide: t
    } = e;
    return (0, r.jsx)(g.P3F, {
      onClick: t,
      className: B.closeButton,
      "aria-label": z.intl.string(z.t.WAI6xu),
      children: (0, r.jsx)(g.Dio, {
        size: "md",
        color: "currentColor",
        className: B.closeIcon
      })
    })
  },
  $ = e => {
    let {
      expanded: t,
      onClick: n
    } = e;
    return (0, r.jsx)(g.P3F, {
      onClick: n,
      className: B.closeButton,
      "aria-label": t ? z.intl.string(z.t.iTcuma) : z.intl.string(z.t.dcl9MQ),
      children: t ? (0, r.jsx)(g.dOc, {
        size: "xs",
        color: "currentColor",
        className: B.closeIcon
      }) : (0, r.jsx)(g.bJT, {
        size: "xs",
        color: "currentColor",
        className: B.closeIcon
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
        onboardingExpanded: U
      } = (0, F.xH)(e => {
        let {
          onboardingExpanded: t
        } = e;
        return {
          onboardingExpanded: t
        }
      }, d.X),
      {
        tagFilter: ee
      } = (0, M.H)(x.id),
      et = (0, h.e7)([w.Z], () => w.Z.getGuild(x.getGuildId())),
      en = (0, Z.r_)(x),
      {
        transitions: er,
        setVisible: ei
      } = (() => {
        let [e, t] = i.useState(true);
        return {
          transitions: (0, g.Yzy)(e, {
            keys: e => e ? "shown" : "hidden",
            config: J,
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
      ea = (0, g.Yzy)(U, {
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
      el = i.useCallback(e => {
        var t;
        null == (t = e.clickHandler) || t.call(e)
      }, []),
      es = (t = x.id, i.useCallback(() => (ei(false), E.Z.hideAdminOnboarding(t, true)), [t, ei])),
      {
        onboardingSteps: eo,
        isDismissed: ec,
        isHidden: ed,
        isAllDone: eu
      } = (e => {
        let {
          guild: t,
          channel: a,
          hasAnyThread: l,
          handleHide: s
        } = e, [c, d] = i.useState(false), u = (0, A.c)(a.id), x = (0, h.e7)([I.Z], () => I.Z.hasHidden(a.id)), p = function(e, t, a, l) {
          let s = null == e ? true : e.id,
            o = (0, h.e7)([T.Z], () => null != s ? T.Z.getSortedRoles(s) : true);
          return i.useMemo(() => {
            let i, s = new X,
              c = (null == t ? true : t.isMediaChannel()) === true;
            return null == e || null == t || c || null == o || s.addStep(function(e, t, i, a) {
              let l = (0, b.Z)(i) ? m.$e(H.Plq.VIEW_CHANNEL, H.Plq.SEND_MESSAGES) : H.Plq.SEND_MESSAGES,
                s = null != e ? (0, R.E)(t, i, l).filter(e => i.permissionOverwrites.hasOwnProperty(e.id) || (0, y.fI)(e)) : [],
                o = s.length > 0,
                c = s.some(e => (0, y.fI)(e));
              return {
                name: z.intl.string(z.t["/Ax2gs"]),
                description: z.intl.string(z.t.gAIOfg),
                isDone: o && c,
                shouldWarn: o && !c,
                children: o ? (0, r.jsx)(Y, {
                  guild: e,
                  roles: s
                }) : null,
                clickHandler: () => {
                  K(D.ZI.PERMISSIONS), (0, g.ZDy)(async () => {
                    let {
                      default: t
                    } = await n.e("78704").then(n.bind(n, 560602));
                    return a(true), n => (0, r.jsx)(t, V(G({}, n), {
                      channel: i,
                      guild: e,
                      permission: l,
                      currentSelectedRoles: s
                    }))
                  }, {
                    modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                    onCloseRequest: H.VqG,
                    onCloseCallback: () => a(false)
                  })
                }
              }
            }(e, o, t, l)), c || s.addStep((e => {
              let t = null != e.topic && e.topic.length > 0;
              return {
                name: z.intl.string(z.t.UgJu1e),
                description: z.intl.string(z.t["3C6/G1"]),
                clickHandler: () => {
                  K(D.ZI.GUIDELINES), f.ZP.open(e.id, true, H.ZfP.TOPIC)
                },
                isDone: t
              }
            })(t)), s.addStep((e => {
              let t = null != e.availableTags && e.availableTags.length > 0;
              return {
                name: z.intl.string(z.t.xiBFCi),
                description: z.intl.string(z.t.wCv4Oz),
                clickHandler: () => {
                  K(D.ZI.TAGS), f.ZP.open(e.id), (0, g.ZDy)(async () => {
                    let {
                      default: t
                    } = await n.e("21971").then(n.bind(n, 201049));
                    return n => (0, r.jsx)(t, V(G({}, n), {
                      channelId: e.id,
                      guildId: e.guild_id
                    }))
                  })
                },
                isDone: t
              }
            })(t)), s.addStep((e => {
              let t = null != e.defaultReactionEmoji;
              return {
                name: z.intl.string(z.t.QlyC9s),
                description: z.intl.string(z.t["+50LJg"]),
                clickHandler: () => {
                  K(D.ZI.DEFAULT_REACTION), (0, g.ZDy)(async () => {
                    let {
                      default: t
                    } = await n.e("80404").then(n.bind(n, 158586));
                    return n => (0, r.jsx)(t, V(G({}, n), {
                      channel: e
                    }))
                  })
                },
                isDone: t
              }
            })(t)), s.addStep((i = null == e ? true : e.id, {
              name: z.intl.string(z.t["6A0O64"]),
              description: c ? z.intl.string(z.t["8hI5vr"]) : z.intl.format(z.t.ysxcAw, {
                onClick: e => {
                  null != i && (e.preventDefault(), e.stopPropagation(), (0, k.qz)(), (0, g.ZDy)(async () => {
                    let {
                      default: e
                    } = await n.e("18417").then(n.bind(n, 740696));
                    return t => (0, r.jsx)(e, V(G({}, t), {
                      guildId: i
                    }))
                  }))
                }
              }),
              clickHandler: () => {
                K(D.ZI.CREATE_POST), N.S.dispatch(H.CkL.FOCUS_COMPOSER_TITLE)
              },
              isDone: a
            })), s
          }, [t, e, o, a, l])
        }(t, a, l, d), j = p.isAllDone(), v = u || x || !(e => {
          let t = P.default.extractTimestamp(e);
          return o()().isBefore(o()(t).add(o().duration(15, "days")))
        })(a.id), _ = i.useRef(0);
        return i.useEffect(() => (c || !j || v ? clearTimeout(_.current) : _.current = setTimeout(() => {
          s()
        }, 60 * O.Z.Millis.SECOND), () => clearTimeout(_.current)), [j, v, s, c]), {
          onboardingSteps: p,
          isHidden: x,
          isDismissed: u,
          isAllDone: j
        }
      })({
        guild: et,
        channel: x,
        hasAnyThread: a,
        handleHide: es
      }),
      em = !ed && !ec,
      eh = (0, F.AF)(),
      eg = x.isMediaChannel(),
      ef = e => eh.getState().setOnboardingExpanded(e);
    return ((0, p.ZP)(() => {
      eu && em && es()
    }), (e => {
      let {
        isAllDone: t,
        isVisible: n,
        canManageChannel: r,
        guildId: a,
        channel: l
      } = e, s = (0, h.e7)([T.Z], () => null != a ? T.Z.partitionVersion(a) : true), o = i.useCallback(() => {
        N.S.dispatch(H.CkL.REMEASURE_TARGET)
      }, []);
      i.useEffect(() => {
        o()
      }, [o, t, n, r, s, l.id, l.permissionOverwrites])
    })({
      isAllDone: eu,
      isVisible: em,
      canManageChannel: en,
      guildId: null == et ? true : et.id,
      channel: x
    }), i.useEffect(() => {
      ec || ei(!ed)
    }, [ec, ei, ed]), (0, p.ZP)(() => {
      a && em || ef(true)
    }), null == et) ? null : (0, v.iZ)(x) ? s || 0 !== ee.size ? ee.size > 0 ? null : (0, r.jsx)(_.Z, {
      guild: et
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.Z, {
        guild: et
      }), (0, r.jsx)(C.q, {})]
    }) : em && en ? eg ? a ? null : (0, r.jsx)(j.Z, {
      channel: x
    }) : (0, r.jsx)(r.Fragment, {
      children: er((e, t) => t ? (0, r.jsx)(c.animated.div, {
        style: e,
        className: B.container,
        children: (0, r.jsxs)("div", {
          className: B.wrapper,
          children: [(0, r.jsx)("div", {
            className: B.headerRow,
            children: (0, r.jsxs)(g.y5t, {
              component: (0, r.jsx)(g.Heading, {
                variant: "heading-md/semibold",
                children: z.intl.string(z.t.LhlgY9)
              }),
              children: [(0, r.jsx)(g.Heading, {
                variant: "heading-md/medium",
                className: B.header,
                children: z.intl.format(z.t["9L+8bz"], {
                  numCompleted: eo.completedSteps.toString(),
                  numSteps: eo.steps.length.toString()
                })
              }), (0, r.jsxs)(g.Text, {
                variant: "text-xs/normal",
                className: B.visibilityInfo,
                children: [(0, r.jsx)(g.d3s, {
                  size: "xxs",
                  color: "currentColor",
                  className: B.icon
                }), z.intl.string(z.t.znhX2R)]
              }), (0, r.jsx)($, {
                expanded: U,
                onClick: () => ef(!U)
              }), (0, r.jsx)(Q, {
                handleHide: es
              })]
            })
          }), ea((e, t) => t ? (0, r.jsx)(c.animated.div, {
            style: e,
            className: B.listContainer,
            children: (0, r.jsx)("ol", {
              className: B.checklist,
              children: eo.getSteps().map(e => (0, r.jsxs)(g.P3F, {
                tag: "li",
                "aria-label": e.name,
                onClick: () => el(e),
                className: l()(B.stepContainer, {
                  [B.completed]: e.isDone
                }),
                children: [e.shouldWarn ? (0, r.jsx)(g.Mgn, {
                  size: "custom",
                  width: 20,
                  height: 20,
                  color: u.Z.STATUS_DANGER,
                  className: B.stepStatus
                }) : e.isDone ? (0, r.jsx)(g.G2e, {
                  color: u.Z.STATUS_POSITIVE_BACKGROUND,
                  icon: g.dz2,
                  style: q,
                  className: B.stepStatus
                }) : (0, r.jsx)(g.G2e, {
                  disableColor: true,
                  icon: (0, g.GSL)(S.Z),
                  style: W,
                  className: l()(B.stepStatus, B.completed)
                }), (0, r.jsxs)("div", {
                  className: B.step,
                  children: [(0, r.jsx)(g.Text, {
                    variant: "text-md/medium",
                    color: e.isDone ? "header-secondary" : "header-primary",
                    className: B.stepName,
                    children: e.name
                  }), (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: B.stepDescription,
                    children: e.description
                  }), e.children]
                }), (0, r.jsx)(g.Fbu, {
                  size: "custom",
                  color: "currentColor",
                  width: 12,
                  className: B.stepStatus
                })]
              }, "onboard-step-".concat(e.index)))
            })
          }) : null)]
        })
      }) : null)
    }) : a ? null : (0, r.jsx)(L.Z, {
      channelName: x.name,
      guildId: x.guild_id,
      tagFilter: ee,
      channel: x
    })
  }