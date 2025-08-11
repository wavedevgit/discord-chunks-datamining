/** Chunk was on 71879 **/
/** chunk id: 355589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => eg
}), require("./539854.js"), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk126663 = require("./126663.js"),
  Chunk94171 = require("./94171.js"),
  Chunk831209 = require("./831209.js"),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk412899 = require("./412899.js"),
  Chunk493773 = require("./493773.js"),
  Chunk447003 = require("./447003.js"),
  Chunk621516 = require("./621516.js"),
  Chunk982168 = require("./982168.js"),
  Chunk386923 = require("./386923.js"),
  Chunk474366 = require("./474366.js"),
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
  Chunk538366 = require("./538366.js"),
  Chunk470623 = require("./470623.js"),
  Chunk710352 = require("./710352.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk354094 = require("./354094.js");

function U(e, t, n) {
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
      U(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
let q = {
    width: 28,
    height: 28
  },
  W = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  X = e => {
    (0, k.e5)({
      onboardingCTA: e
    })
  };
class K {
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
    U(this, "currentIndex", 0), U(this, "steps", []), U(this, "completedSteps", 0)
  }
}
let J = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: H.intl.string(H.t.UgJu1d),
      description: H.intl.string(H.t["3C6/Gx"]),
      clickHandler: () => {
        X(D.ZI.GUIDELINES), f.ZP.open(e.id, true, z.ZfP.TOPIC)
      },
      isDone: t
    }
  },
  Y = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: H.intl.string(H.t.xiBFCg),
      description: H.intl.string(H.t.wCv4Oz),
      clickHandler: () => {
        X(D.ZI.TAGS), f.ZP.open(e.id), (0, g.ZDy)(async () => {
          let {
            default: t
          } = await n.e("21971").then(n.bind(n, 201049));
          return n => <t{...G(V({}, n), {
            channelId: e.id,
            guildId: e.guild_id
          })} />
        })
      },
      isDone: t
    }
  },
  Q = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: H.intl.string(H.t.QlyC9v),
      description: H.intl.string(H.t["+50LJi"]),
      clickHandler: () => {
        X(D.ZI.DEFAULT_REACTION), (0, g.ZDy)(async () => {
          let {
            default: t
          } = await n.e("80404").then(n.bind(n, 158586));
          return n => <t{...G(V({}, n), {
            channel: e
          })} />
        })
      },
      isDone: t
    }
  },
  $ = (e, t, i) => ({
    name: H.intl.string(H.t["6A0O6+"]),
    description: t ? H.intl.string(H.t["8hI5vr"]) : H.intl.format(H.t.ysxcAw, {
      onClick: e => {
        null != i && (e.preventDefault(), e.stopPropagation(), (0, k.qz)(), (0, g.ZDy)(async () => {
          let {
            default: e
          } = await n.e("18417").then(n.bind(n, 740696));
          return t => <e{...G(V({}, t), {
            guildId: i
          })} />
        }))
      }
    }),
    clickHandler: () => {
      X(D.ZI.CREATE_POST), S.S.dispatch(z.CkL.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  ee = (e, t) => i.useCallback(() => (t(false), E.Z.hideAdminOnboarding(e, true)), [e, t]),
  et = e => {
    let t = N.default.extractTimestamp(e);
    return o()().isBefore(o()(t).add(o().duration(15, "days")))
  },
  en = (e, t, n) => {
    i.useEffect(() => {
      e || n(!t)
    }, [e, n, t])
  },
  er = (e, t, n, r) => {
    let a = i.useRef(0);
    i.useEffect(() => (n || !e || t ? clearTimeout(a.current) : a.current = setTimeout(() => {
      r()
    }, 60 * T.Z.Millis.SECOND), () => clearTimeout(a.current)), [e, t, r, n])
  },
  ei = (e, t, n) => {
    (0, p.ZP)(() => {
      e && t && n()
    })
  },
  ea = e => {
    let {
      isAllDone: t,
      isVisible: n,
      canManageChannel: r,
      guildId: a,
      channel: l
    } = e, s = (0, h.e7)([O.Z], () => null != a ? O.Z.partitionVersion(a) : true), o = i.useCallback(() => {
      S.S.dispatch(z.CkL.REMEASURE_TARGET)
    }, []);
    i.useEffect(() => {
      o()
    }, [o, t, n, r, s, l.id, l.permissionOverwrites])
  },
  el = () => {
    let [e, t] = Chunk73800.useState(true);
    return {
      transitions: (0, Chunk481060.Yzy)(module, {
        keys: e => e ? "shown" : "hidden",
        config: ec,
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
      setVisible: exports
    }
  },
  es = e => (0, g.Yzy)(e, {
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
  eo = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return <div className={B.rolesList} aria-label={H.intl.formatToPlainString(H.t.PCs0oq, {
        numRoles: n.length
      })}>{n.map(e => (0, r.jsx)(x.UB, {
        role: e,
        canRemove: false,
        onRemove: z.VqG,
        guildId: t.id,
        className: B.rolePill
      }, e.id))}</div>
  },
  ec = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: true
  },
  ed = e => {
    let {
      guild: t,
      channel: a,
      hasAnyThread: l,
      handleHide: s
    } = e, [o, c] = i.useState(false), d = (0, A.c)(a.id), u = (0, h.e7)([I.Z], () => I.Z.hasHidden(a.id)), f = function(e, t, a, l) {
      let s = null == e ? true : e.id,
        o = (0, h.e7)([O.Z], () => null != s ? O.Z.getSortedRoles(s) : true);
      return i.useMemo(() => {
        let i = new K,
          s = (null == t ? true : t.isMediaChannel()) === true;
        return null == e || null == t || s || null == o || i.addStep(function(e, t, i, a) {
          let l = (0, b.Z)(i) ? m.$e(z.Plq.VIEW_CHANNEL, z.Plq.SEND_MESSAGES) : z.Plq.SEND_MESSAGES,
            s = null != e ? (0, R.E)(t, i, l).filter(e => i.permissionOverwrites.hasOwnProperty(e.id) || (0, y.fI)(e)) : [],
            o = s.length > 0,
            c = s.some(e => (0, y.fI)(e));
          return {
            name: H.intl.string(H.t["/Ax2go"]),
            description: H.intl.string(H.t.gAIOfn),
            isDone: o && c,
            shouldWarn: o && !c,
            children: o ? <eo guild={e} roles={s} /> : null,
            clickHandler: () => {
              X(D.ZI.PERMISSIONS), (0, g.ZDy)(async () => {
                let {
                  default: t
                } = await n.e("78704").then(n.bind(n, 560602));
                return a(true), n => <t{...G(V({}, n), {
                  channel: i,
                  guild: e,
                  permission: l,
                  currentSelectedRoles: s
                })} />
              }, {
                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                onCloseRequest: z.VqG,
                onCloseCallback: () => a(false)
              })
            }
          }
        }(e, o, t, l)), s || i.addStep(J(t)), i.addStep(Y(t)), i.addStep(Q(t)), i.addStep($(a, s, null == e ? true : e.id)), i
      }, [t, e, o, a, l])
    }(t, a, l, c), x = f.isAllDone();
    return er(x, d || u || !et(a.id), o, s), {
      onboardingSteps: f,
      isHidden: u,
      isDismissed: d,
      isAllDone: x
    }
  },
  eu = () => Chunk73800.useCallback(e => {
    var t;
    null == (t = e.clickHandler) || t.call(e)
  }, []),
  em = e => {
    let {
      handleHide: t
    } = e;
    return <g.P3F onClick={t} className={B.closeButton} aria-label={H.intl.string(H.t.WAI6xs)}><g.Dio size={"md"} color={"currentColor"} className={B.closeIcon} /></g.P3F>
  },
  eh = e => {
    let {
      expanded: t,
      onClick: n
    } = e;
    return <g.P3F onClick={n} className={B.closeButton} aria-label={t ? H.intl.string(H.t.iTcumZ) : H.intl.string(H.t.dcl9MT)}>{t ? (0, r.jsx)(g.dOc, {
        size: "xs",
        color: "currentColor",
        className: B.closeIcon
      }) : (0, r.jsx)(g.bJT, {
        size: "xs",
        color: "currentColor",
        className: B.closeIcon
      })}</g.P3F>
  },
  eg = e => {
    let {
      hasAnyThread: t,
      hasActiveThreads: n,
      channel: i
    } = e, {
      onboardingExpanded: a
    } = (0, F.xH)(e => {
      let {
        onboardingExpanded: t
      } = e;
      return {
        onboardingExpanded: t
      }
    }, d.X), {
      tagFilter: s
    } = (0, M.H)(i.id), o = (0, h.e7)([w.Z], () => w.Z.getGuild(i.getGuildId())), m = (0, Z.r_)(i), {
      transitions: f,
      setVisible: x
    } = el(), b = es(a), y = eu(), O = ee(i.id, x), {
      onboardingSteps: S,
      isDismissed: T,
      isHidden: N,
      isAllDone: I
    } = ed({
      guild: o,
      channel: i,
      hasAnyThread: t,
      handleHide: O
    }), E = !N && !T, R = (0, F.AF)(), k = i.isMediaChannel(), A = e => R.getState().setOnboardingExpanded(e);
    return (ei(I, E, O), ea({
      isAllDone: I,
      isVisible: E,
      canManageChannel: m,
      guildId: null == o ? true : o.id,
      channel: i
    }), en(T, N, x), (0, p.ZP)(() => {
      t && E || A(true)
    }), null == o) ? null : (0, v.iZ)(i) ? n || 0 !== s.size ? s.size > 0 ? null : <C.Z guild={o} /> : <r.Fragment>{<C.Z guild={o} />}{<_.q />}</r.Fragment> : E && m ? k ? t ? null : <j.Z channel={i} /> : <r.Fragment>{f((e, t) => t ? (0, r.jsx)(c.animated.div, {
        style: e,
        className: B.container,
        children: (0, r.jsxs)("div", {
          className: B.wrapper,
          children: [(0, r.jsx)("div", {
            className: B.headerRow,
            children: (0, r.jsxs)(g.y5t, {
              component: (0, r.jsx)(g.X6q, {
                variant: "heading-md/semibold",
                children: H.intl.string(H.t.LhlgY2)
              }),
              children: [(0, r.jsx)(g.X6q, {
                variant: "heading-md/medium",
                className: B.header,
                children: H.intl.format(H.t["9L+8b2"], {
                  numCompleted: S.completedSteps.toString(),
                  numSteps: S.steps.length.toString()
                })
              }), (0, r.jsxs)(g.Text, {
                variant: "text-xs/normal",
                className: B.visibilityInfo,
                children: [(0, r.jsx)(g.d3s, {
                  size: "xxs",
                  color: "currentColor",
                  className: B.icon
                }), H.intl.string(H.t.znhX2d)]
              }), (0, r.jsx)(eh, {
                expanded: a,
                onClick: () => A(!a)
              }), (0, r.jsx)(em, {
                handleHide: O
              })]
            })
          }), b((e, t) => t ? (0, r.jsx)(c.animated.div, {
            style: e,
            className: B.listContainer,
            children: (0, r.jsx)("ol", {
              className: B.checklist,
              children: S.getSteps().map(e => (0, r.jsxs)(g.P3F, {
                tag: "li",
                "aria-label": e.name,
                onClick: () => y(e),
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
                  style: W,
                  className: B.stepStatus
                }) : (0, r.jsx)(g.G2e, {
                  disableColor: true,
                  icon: (0, g.GSL)(P.Z),
                  style: q,
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
      }) : null)}</r.Fragment> : t ? null : <L.Z channelName={i.name} guildId={i.guild_id} tagFilter={s} channel={i} />
  }