/** Chunk was on 92853 **/
/** chunk id: 135668, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => $
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15073 = require("./15073.js"),
  Chunk47167 = require("./47167.js"),
  Chunk915089 = require("./915089.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk636042 = require("./636042.js"),
  Chunk376092 = require("./376092.js"),
  Chunk544028 = require("./544028.js"),
  Chunk808728 = require("./808728.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk488926 = require("./488926.js"),
  Chunk455207 = require("./455207.js"),
  Chunk411319 = require("./411319.jsx"),
  Chunk124759 = require("./124759.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82830 = require("./82830.js"),
  Chunk288061 = require("./288061.js"),
  Chunk236139 = require("./236139.js"),
  Chunk843762 = require("./843762.js"),
  Chunk733955 = require("./733955.js"),
  Chunk226599 = require("./226599.js"),
  Chunk12213 = require("./12213.js"),
  Chunk628287 = require("./628287.js");
let V = e => {
    let {
      guild: t,
      onAcceptVerificationLevel: i,
      onAcceptContentFilter: l,
      disableContentFilter: n,
      disableVerificationLevel: a,
      headerId: r,
      theme: d
    } = e, c = (0, o.bG)([A.A], () => A.A.getGuild(t.id), [t.id]), u = null != c && c.verificationLevel > k.PvD.NONE, m = (null == c ? true : c.explicitContentFilter) === k.gh6.ALL_MEMBERS, h = (0, x.Mw)(d) ? H : Y;
    return (0, s.jsxs)("div", {
      className: G.kL,
      children: [(0, s.jsxs)("div", {
        className: G.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: h,
          width: 80
        }), (0, s.jsx)(p.Heading, {
          variant: "heading-xl/semibold",
          className: G.wx,
          id: r,
          children: T.intl.string(T.t.QrjLYl)
        }), (0, s.jsx)(p.Text, {
          color: "none",
          variant: "text-md/normal",
          className: G.ab,
          children: T.intl.string(T.t.i1STwu)
        })]
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(p.D0$, {
          label: T.intl.string(T.t.x4hbeZ),
          description: u ? T.intl.string(T.t.k5crqq) : T.intl.string(T.t.fHiGA0),
          children: (0, s.jsx)(p.Checkbox, {
            disabled: a,
            checked: t.verificationLevel > k.PvD.NONE,
            onChange: i,
            label: T.intl.string(T.t.x4hbeZ)
          })
        })
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(p.D0$, {
          label: T.intl.string(T.t.COu4bk),
          description: m ? T.intl.string(T.t.qgQLpg) : T.intl.string(T.t.b0MaDV),
          children: (0, s.jsx)(p.Checkbox, {
            disabled: n,
            checked: t.explicitContentFilter === k.gh6.ALL_MEMBERS,
            onChange: l,
            label: T.intl.string(T.t.WAUiMt)
          })
        })
      })]
    })
  },
  q = e => {
    let {
      selectableChannels: t,
      onRuleChannelChange: i,
      ruleChannel: n,
      onPublicUpdatesChannelChange: a,
      publicUpdatesChannel: r,
      headerId: o,
      theme: d,
      guildId: u
    } = e;
    l.useEffect(() => {
      (0, w.sx)({
        fromStep: P.pj.SAFETY_CHECK,
        toStep: P.pj.BASICS,
        guildId: u
      })
    }, [u]);
    let m = (0, x.Mw)(d) ? D : R;
    return (0, s.jsxs)("div", {
      className: G.kL,
      children: [(0, s.jsxs)("div", {
        className: G.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: m,
          width: 80
        }), (0, s.jsx)(p.Heading, {
          variant: "heading-xl/semibold",
          className: G.wx,
          id: o,
          children: T.intl.string(T.t.YtXpEh)
        }), (0, s.jsx)(p.Text, {
          color: "none",
          variant: "text-md/normal",
          className: G.ab,
          children: T.intl.string(T.t["J/fYR8"])
        })]
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(c.p, {
          label: T.intl.string(T.t.dYrhCO),
          description: T.intl.string(T.t["+Af+Vw"]),
          options: t,
          onChange: i,
          value: n,
          maxVisibleItems: 4
        })
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(c.p, {
          label: T.intl.string(T.t.vAyDGU),
          description: T.intl.string(T.t.ZFeonu),
          options: t,
          onChange: a,
          value: r,
          popoutPosition: "top",
          maxVisibleItems: 4
        })
      })]
    })
  },
  W = e => {
    let {
      guild: t,
      policyAccepted: i,
      everyoneRolePermissionsAccepted: n,
      onAcceptPolicy: r,
      onAcceptDefaultNotifications: o,
      onAcceptEveryoneRolePermissions: d,
      disableDefaultNotifications: c,
      disableEveryoneRolePermissions: h,
      headerId: b,
      theme: g
    } = e, v = (0, x.Mw)(g) ? F : U;
    return l.useEffect(() => {
      (0, w.sx)({
        fromStep: P.pj.BASICS,
        toStep: P.pj.FINISH,
        guildId: t.id
      })
    }, [t.id]), (0, s.jsxs)("div", {
      className: G.kL,
      children: [(0, s.jsxs)("div", {
        className: G.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: v,
          width: 80
        }), (0, s.jsx)(p.Heading, {
          variant: "heading-xl/semibold",
          className: G.wx,
          id: b,
          children: T.intl.string(T.t["Pj/s/a"])
        }), (0, s.jsx)(p.Text, {
          color: "none",
          variant: "text-md/normal",
          className: G.ab,
          children: T.intl.string(T.t["IL7/no"])
        })]
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(u.m, {
          text: c ? T.intl.string(T.t.PHjrpp) : null,
          "aria-label": !!c && T.intl.string(T.t.PHjrpp),
          children: (0, s.jsx)("div", {
            children: (0, s.jsx)(p.KjF, {
              type: m.Xo.ROW,
              disabled: c,
              value: t.defaultMessageNotifications === k.orn.ONLY_MENTIONS,
              onChange: (e, t) => o(t),
              className: a()({
                [G.r9]: c
              }),
              children: (0, s.jsx)(p.Text, {
                variant: "text-sm/normal",
                children: T.intl.format(T.t.K8Eg4P, {
                  infoHook: () => (0, s.jsx)(u.m, {
                    text: T.intl.string(T.t["3h2WyM"]),
                    "aria-label": T.intl.string(T.t["3h2WyM"]),
                    children: (0, s.jsx)(p.mir, {
                      size: "xs",
                      color: "currentColor",
                      className: G.Kk
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)(u.m, {
        text: h ? T.intl.string(T.t.PHjrpp) : null,
        "aria-label": !!h && T.intl.string(T.t.PHjrpp),
        children: (0, s.jsx)("div", {
          className: G.nj,
          children: (0, s.jsx)(p.KjF, {
            disabled: h,
            value: n,
            onChange: (e, t) => d(t),
            className: a()({
              [G.r9]: h
            }),
            children: (0, s.jsx)(p.Text, {
              variant: "text-sm/normal",
              children: T.intl.format(T.t.v8qCoG, {
                infoHook: () => (0, s.jsx)(u.m, {
                  text: T.intl.string(T.t["+Iyaif"]),
                  "aria-label": T.intl.string(T.t["+Iyaif"]),
                  children: (0, s.jsx)(p.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: G.Kk
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)("div", {
        className: G.Zd,
        children: (0, s.jsx)(p.D0$, {
          label: T.intl.string(T.t["k+b2Cf"]),
          description: T.intl.format(T.t["BwbW/Q"], {
            communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(p.Checkbox, {
            checked: i,
            onChange: r,
            label: T.intl.string(T.t["9AG3wI"])
          })
        })
      })]
    })
  };

function z(e) {
  let {
    guild: t
  } = e, {
    name: i,
    color: l
  } = (0, o.bG)([S.A], () => S.A.getEveryoneRole(t));
  return (0, s.jsx)("div", {
    className: G.__invalid_role,
    children: (0, s.jsxs)("span", {
      className: G.xf,
      children: [(0, s.jsx)(p.WYI, {
        className: G.m4,
        color: l.toString(),
        background: false,
        tooltip: false
      }), (0, s.jsx)(p.Text, {
        className: G.S3,
        variant: "text-sm/medium",
        color: "interactive-text-active",
        children: i
      })]
    })
  })
}

function Z(e) {
  let {
    enabledPermissions: t,
    onGetPermisisonName: i
  } = e;
  return (0, s.jsxs)("div", {
    className: G.CZ,
    children: [(0, s.jsx)(p.Text, {
      className: G.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: T.intl.string(T.t.xU8RDk)
    }), (0, s.jsx)("div", {
      className: G.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: G.ce,
        children: [(0, s.jsx)("div", {
          className: G.dT
        }), (0, s.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function J(e) {
  let {
    disabledPermissions: t,
    onGetPermisisonName: i
  } = e, l = T.intl.string(T.t.Yo5qlq);
  return t.length === P.dR.length && (l = T.intl.string(T.t.FgMS6i)), (0, s.jsxs)("div", {
    className: G.CZ,
    children: [(0, s.jsx)(p.Text, {
      className: G.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: l
    }), (0, s.jsx)("div", {
      className: G.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: G.ce,
        children: [(0, s.jsx)("div", {
          className: G.xE
        }), (0, s.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function K(e) {
  let {
    permissions: t
  } = e, i = e => {
    switch (e.toString()) {
      case k.xBc.MENTION_EVERYONE.toString():
        return T.intl.string(T.t.yCpsQw);
      case k.xBc.CREATE_GUILD_EXPRESSIONS.toString():
        return T.intl.string(T.t.vo2LdY);
      case k.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
        return T.intl.string(T.t.cmp2W6);
      default:
        return (0, N.hx)(e)
    }
  }, {
    enabledPermissions: l,
    disabledPermissions: n
  } = t;
  return (0, s.jsxs)("div", {
    className: G.tp,
    children: [0 !== l.length ? (0, s.jsx)(Z, {
      enabledPermissions: l,
      onGetPermisisonName: i
    }) : null, (0, s.jsx)(J, {
      disabledPermissions: n,
      onGetPermisisonName: i
    })]
  })
}
let Q = e => {
    let {
      guild: t,
      policyAccepted: i,
      onAcceptPolicy: n,
      headerId: a,
      theme: r
    } = e, o = (0, x.Mw)(r) ? F : U;
    l.useEffect(() => {
      (0, w.sx)({
        fromStep: P.pj.BASICS,
        toStep: P.pj.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let c = l.useMemo(() => {
      let e = [],
        i = [];
      return P.dR.map(s => {
        y.Ib(s, t) ? e.push(s) : i.push(s)
      }), {
        enabledPermissions: e,
        disabledPermissions: i
      }
    }, [t]);
    return (0, s.jsxs)("div", {
      className: G.kL,
      children: [(0, s.jsxs)("div", {
        className: G.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: o,
          width: 80
        }), (0, s.jsx)(p.Heading, {
          variant: "heading-xl/semibold",
          className: G.dc,
          id: a,
          children: T.intl.string(T.t["Pj/s/a"])
        })]
      }), (0, s.jsx)("div", {
        className: G.yN,
        children: (0, s.jsxs)(p.D0$, {
          label: T.intl.string(T.t["0q344R"]),
          children: [(0, s.jsxs)("div", {
            className: G.J_,
            children: [(0, s.jsx)(p.yr3, {
              size: "md",
              className: G.aV,
              color: d.A.unsafe_rawColors.GREEN_360.css,
              secondaryColor: d.A.unsafe_rawColors.WHITE.css
            }), (0, s.jsx)(p.Text, {
              variant: "text-md/normal",
              children: T.intl.format(T.t.K8Eg4P, {
                infoHook: () => (0, s.jsx)(u.m, {
                  text: T.intl.string(T.t["3h2WyM"]),
                  "aria-label": T.intl.string(T.t["3h2WyM"]),
                  children: (0, s.jsx)(p.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: G.Kk
                  })
                })
              })
            })]
          }), (0, s.jsxs)("div", {
            className: G.J_,
            children: [(0, s.jsx)(p.yr3, {
              size: "md",
              className: G.aV,
              color: d.A.unsafe_rawColors.GREEN_360.css,
              secondaryColor: d.A.unsafe_rawColors.WHITE.css
            }), (0, s.jsx)(p.Text, {
              variant: "text-md/normal",
              children: T.intl.string(T.t.LfeFFr)
            }), (0, s.jsx)(z, {
              guild: t
            })]
          }), (0, s.jsx)(K, {
            permissions: c
          })]
        })
      }), (0, s.jsx)("div", {
        className: G.yN,
        children: (0, s.jsx)(p.D0$, {
          label: T.intl.string(T.t["k+b2Cf"]),
          description: T.intl.format(T.t["BwbW/Q"], {
            communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(p.Checkbox, {
            label: T.intl.string(T.t["9AG3wI"]),
            checked: i,
            onChange: n
          })
        })
      })]
    })
  },
  $ = e => {
    var t;
    let {
      transitionState: i,
      onClose: n
    } = e;
    l.useEffect(() => {
      M.default.track(k.HAw.OPEN_MODAL, {
        type: P.bK
      })
    }, []);
    let {
      guild: a
    } = (0, o.cf)([j.A], () => j.A.getProps()), d = (0, o.bG)([_.A], () => _.A.theme), [c, u] = l.useState(false), [x, m] = l.useState(!P.dR.some(e => y.Ib(e, a))), [p, N] = l.useState(P.SP), [A, L] = l.useState(P.SP), [w] = l.useState(null == a ? true : a.defaultMessageNotifications), [D] = l.useState(null == a ? true : a.verificationLevel), [R] = l.useState(null == a ? true : a.explicitContentFilter), [F] = l.useState(x), U = (0, o.bG)([S.A], () => null != a ? S.A.getEveryoneRole(a) : true), H = (0, o.bG)([C.Ay], () => null != a ? C.Ay.getChannels(a.id) : null), Y = (0, g.GV)(), {
      enabled: z
    } = (0, h.zi)(null != (t = null == a ? true : a.id) ? t : k.dJq);
    if (null == a) return null;
    let Z = [{
      value: P.SP,
      label: T.intl.string(T.t.Cla0re)
    }];
    H[C.I6].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === k.rbe.GUILD_TEXT && Z.push({
        value: t.id,
        label: (0, b.m1)(t, I.default, E.A, true)
      })
    });
    let J = D !== k.PvD.NONE,
      K = R === k.gh6.ALL_MEMBERS,
      $ = w === k.orn.ONLY_MENTIONS,
      X = async () => {
        var e, t;
        if (null == U || !c) return;
        let i = new Set(a.features);
        i.add(k.GuildFeatures.COMMUNITY);
        let s = x ? r.TF(U.permissions, P.e$) : U.permissions,
          l = (e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {},
                s = Object.keys(i);
              "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
              }))), s.forEach(function(t) {
                var s;
                s = i[t], t in e ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = s
              })
            }
            return e
          }({}, U), t = t = {
            permissions: s
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              i.push.apply(i, s)
            }
            return i
          })(Object(t)).forEach(function(i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
          }), e);
        s !== U.permissions && await (0, f.JY)(a.id, [l]), v.A.updateGuild({
          features: i,
          rulesChannelId: p,
          publicUpdatesChannelId: A
        }), await v.A.saveGuild(a.id, {
          features: i,
          rulesChannelId: p,
          verificationLevel: a.verificationLevel,
          explicitContentFilter: a.explicitContentFilter,
          publicUpdatesChannelId: A,
          defaultMessageNotifications: a.defaultMessageNotifications
        }), setTimeout(() => {
          n()
        }, 0)
      }, ee = (0, s.jsx)(V, {
        guild: a,
        disableVerificationLevel: J,
        disableContentFilter: K,
        onAcceptVerificationLevel: e => {
          e ? e && v.A.updateGuild({
            verificationLevel: k.PvD.LOW
          }) : v.A.updateGuild({
            verificationLevel: D
          })
        },
        onAcceptContentFilter: e => {
          e ? v.A.updateGuild({
            explicitContentFilter: k.gh6.ALL_MEMBERS
          }) : v.A.updateGuild({
            explicitContentFilter: R
          })
        },
        headerId: Y,
        theme: d
      }), et = (0, s.jsx)(q, {
        selectableChannels: Z,
        onRuleChannelChange: e => {
          N(e)
        },
        onPublicUpdatesChannelChange: e => {
          L(e)
        },
        ruleChannel: p,
        publicUpdatesChannel: A,
        headerId: Y,
        theme: d,
        guildId: a.id
      }), ei = z ? (0, s.jsx)(Q, {
        guild: a,
        policyAccepted: c,
        onAcceptPolicy: e => {
          if (e) {
            u(true), $ || v.A.updateGuild({
              defaultMessageNotifications: k.orn.ONLY_MENTIONS
            }), x || null == U || m(true);
            return
          }
          u(false), $ && v.A.updateGuild({
            defaultMessageNotifications: w
          }), x && null != U && m(false)
        },
        headerId: Y,
        theme: d
      }) : (0, s.jsx)(W, {
        guild: a,
        disableDefaultNotifications: $,
        disableEveryoneRolePermissions: F,
        policyAccepted: c,
        everyoneRolePermissionsAccepted: x,
        onAcceptPolicy: e => {
          e ? u(true) : u(false)
        },
        onAcceptDefaultNotifications: e => {
          e ? v.A.updateGuild({
            defaultMessageNotifications: k.orn.ONLY_MENTIONS
          }) : v.A.updateGuild({
            defaultMessageNotifications: w
          })
        },
        onAcceptEveryoneRolePermissions: e => {
          null != U && (e ? m(true) : m(false))
        },
        headerId: Y,
        theme: d
      }), es = (0, s.jsx)("img", {
        alt: "",
        src: B,
        className: G.Hw,
        width: 240
      }), el = [{
        modalContent: ee,
        disableNextStep: a.explicitContentFilter !== k.gh6.ALL_MEMBERS || a.verificationLevel === k.PvD.NONE,
        overviewTitle: T.intl.string(T.t.PpYoSj)
      }, {
        modalContent: et,
        disableNextStep: null == p || null == A,
        overviewTitle: T.intl.string(T.t["7MEtIY"])
      }, {
        modalContent: ei,
        disableNextStep: !c,
        overviewTitle: T.intl.string(T.t.Pj9P8E)
      }];
    return (0, s.jsx)(O.A, {
      stepData: el,
      title: T.intl.string(T.t["6U5XTu"]),
      transitionState: i,
      onClose: () => {
        n(), M.default.track(k.HAw.MODAL_DISMISSED, {
          type: P.bK
        })
      },
      completeButtonText: T.intl.string(T.t.XGl4ba),
      onComplete: X,
      overviewFooter: es,
      sequencerClassName: G.kL,
      autoCloseOnComplete: false
    })
  }