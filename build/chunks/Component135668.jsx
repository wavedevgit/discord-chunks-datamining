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
    } = e, o = (0, c.bG)([E.A], () => E.A.getGuild(t.id), [t.id]), x = null != o && o.verificationLevel > k.PvD.NONE, m = (null == o ? true : o.explicitContentFilter) === k.gh6.ALL_MEMBERS, f = (0, u.Mw)(d) ? Y : H;
    return (0, s.jsxs)("div", {
      className: T.kL,
      children: [(0, s.jsxs)("div", {
        className: T.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: f,
          width: 80
        }), (0, s.jsx)(b.Heading, {
          variant: "heading-xl/semibold",
          className: T.wx,
          id: r,
          children: G.intl.string(G.t.QrjLYl)
        }), (0, s.jsx)(b.Text, {
          color: "none",
          variant: "text-md/normal",
          className: T.ab,
          children: G.intl.string(G.t.i1STwu)
        })]
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(b.D0$, {
          label: G.intl.string(G.t.x4hbeZ),
          description: x ? G.intl.string(G.t.k5crqq) : G.intl.string(G.t.fHiGA0),
          children: (0, s.jsx)(b.Checkbox, {
            disabled: a,
            checked: t.verificationLevel > k.PvD.NONE,
            onChange: i,
            label: G.intl.string(G.t.x4hbeZ)
          })
        })
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(b.D0$, {
          label: G.intl.string(G.t.COu4bk),
          description: m ? G.intl.string(G.t.qgQLpg) : G.intl.string(G.t.b0MaDV),
          children: (0, s.jsx)(b.Checkbox, {
            disabled: n,
            checked: t.explicitContentFilter === k.gh6.ALL_MEMBERS,
            onChange: l,
            label: G.intl.string(G.t.WAUiMt)
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
      headerId: c,
      theme: d,
      guildId: x
    } = e;
    l.useEffect(() => {
      (0, O.sx)({
        fromStep: P.pj.SAFETY_CHECK,
        toStep: P.pj.BASICS,
        guildId: x
      })
    }, [x]);
    let m = (0, u.Mw)(d) ? D : R;
    return (0, s.jsxs)("div", {
      className: T.kL,
      children: [(0, s.jsxs)("div", {
        className: T.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: m,
          width: 80
        }), (0, s.jsx)(b.Heading, {
          variant: "heading-xl/semibold",
          className: T.wx,
          id: c,
          children: G.intl.string(G.t.YtXpEh)
        }), (0, s.jsx)(b.Text, {
          color: "none",
          variant: "text-md/normal",
          className: T.ab,
          children: G.intl.string(G.t["J/fYR8"])
        })]
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(o.p, {
          label: G.intl.string(G.t.dYrhCO),
          description: G.intl.string(G.t["+Af+Vw"]),
          options: t,
          onChange: i,
          value: n,
          maxVisibleItems: 4
        })
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(o.p, {
          label: G.intl.string(G.t.vAyDGU),
          description: G.intl.string(G.t.ZFeonu),
          options: t,
          onChange: a,
          value: r,
          popoutPosition: "top",
          maxVisibleItems: 4
        })
      })]
    })
  },
  z = e => {
    let {
      guild: t,
      policyAccepted: i,
      everyoneRolePermissionsAccepted: n,
      onAcceptPolicy: r,
      onAcceptDefaultNotifications: c,
      onAcceptEveryoneRolePermissions: d,
      disableDefaultNotifications: o,
      disableEveryoneRolePermissions: f,
      headerId: h,
      theme: p
    } = e, g = (0, u.Mw)(p) ? U : F;
    return l.useEffect(() => {
      (0, O.sx)({
        fromStep: P.pj.BASICS,
        toStep: P.pj.FINISH,
        guildId: t.id
      })
    }, [t.id]), (0, s.jsxs)("div", {
      className: T.kL,
      children: [(0, s.jsxs)("div", {
        className: T.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: g,
          width: 80
        }), (0, s.jsx)(b.Heading, {
          variant: "heading-xl/semibold",
          className: T.wx,
          id: h,
          children: G.intl.string(G.t["Pj/s/a"])
        }), (0, s.jsx)(b.Text, {
          color: "none",
          variant: "text-md/normal",
          className: T.ab,
          children: G.intl.string(G.t["IL7/no"])
        })]
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(x.m, {
          text: o ? G.intl.string(G.t.PHjrpp) : null,
          "aria-label": !!o && G.intl.string(G.t.PHjrpp),
          children: (0, s.jsx)("div", {
            children: (0, s.jsx)(b.KjF, {
              type: m.Xo.ROW,
              disabled: o,
              value: t.defaultMessageNotifications === k.orn.ONLY_MENTIONS,
              onChange: (e, t) => c(t),
              className: a()({
                [T.r9]: o
              }),
              children: (0, s.jsx)(b.Text, {
                variant: "text-sm/normal",
                children: G.intl.format(G.t.K8Eg4P, {
                  infoHook: () => (0, s.jsx)(x.m, {
                    text: G.intl.string(G.t["3h2WyM"]),
                    "aria-label": G.intl.string(G.t["3h2WyM"]),
                    children: (0, s.jsx)(b.mir, {
                      size: "xs",
                      color: "currentColor",
                      className: T.Kk
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)(x.m, {
        text: f ? G.intl.string(G.t.PHjrpp) : null,
        "aria-label": !!f && G.intl.string(G.t.PHjrpp),
        children: (0, s.jsx)("div", {
          className: T.nj,
          children: (0, s.jsx)(b.KjF, {
            disabled: f,
            value: n,
            onChange: (e, t) => d(t),
            className: a()({
              [T.r9]: f
            }),
            children: (0, s.jsx)(b.Text, {
              variant: "text-sm/normal",
              children: G.intl.format(G.t.v8qCoG, {
                infoHook: () => (0, s.jsx)(x.m, {
                  text: G.intl.string(G.t["+Iyaif"]),
                  "aria-label": G.intl.string(G.t["+Iyaif"]),
                  children: (0, s.jsx)(b.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: T.Kk
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)("div", {
        className: T.Zd,
        children: (0, s.jsx)(b.D0$, {
          label: G.intl.string(G.t["k+b2Cf"]),
          description: G.intl.format(G.t["BwbW/Q"], {
            communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(b.Checkbox, {
            checked: i,
            onChange: r,
            label: G.intl.string(G.t["9AG3wI"])
          })
        })
      })]
    })
  };

function W(e) {
  let {
    guild: t
  } = e, {
    name: i,
    color: l
  } = (0, c.bG)([A.A], () => A.A.getEveryoneRole(t));
  return (0, s.jsx)("div", {
    className: T.__invalid_role,
    children: (0, s.jsxs)("span", {
      className: T.xf,
      children: [(0, s.jsx)(b.WYI, {
        className: T.m4,
        color: l.toString(),
        background: false,
        tooltip: false
      }), (0, s.jsx)(b.Text, {
        className: T.S3,
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
    className: T.CZ,
    children: [(0, s.jsx)(b.Text, {
      className: T.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: G.intl.string(G.t.xU8RDk)
    }), (0, s.jsx)("div", {
      className: T.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: T.ce,
        children: [(0, s.jsx)("div", {
          className: T.dT
        }), (0, s.jsx)(b.Text, {
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
  } = e, l = G.intl.string(G.t.Yo5qlq);
  return t.length === P.dR.length && (l = G.intl.string(G.t.FgMS6i)), (0, s.jsxs)("div", {
    className: T.CZ,
    children: [(0, s.jsx)(b.Text, {
      className: T.qd,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: l
    }), (0, s.jsx)("div", {
      className: T.lM,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: T.ce,
        children: [(0, s.jsx)("div", {
          className: T.xE
        }), (0, s.jsx)(b.Text, {
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
        return G.intl.string(G.t.yCpsQw);
      case k.xBc.CREATE_GUILD_EXPRESSIONS.toString():
        return G.intl.string(G.t.vo2LdY);
      case k.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
        return G.intl.string(G.t.cmp2W6);
      default:
        return (0, N.hx)(e)
    }
  }, {
    enabledPermissions: l,
    disabledPermissions: n
  } = t;
  return (0, s.jsxs)("div", {
    className: T.tp,
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
    } = e, c = (0, u.Mw)(r) ? U : F;
    l.useEffect(() => {
      (0, O.sx)({
        fromStep: P.pj.BASICS,
        toStep: P.pj.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let o = l.useMemo(() => {
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
      className: T.kL,
      children: [(0, s.jsxs)("div", {
        className: T.Qs,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: c,
          width: 80
        }), (0, s.jsx)(b.Heading, {
          variant: "heading-xl/semibold",
          className: T.dc,
          id: a,
          children: G.intl.string(G.t["Pj/s/a"])
        })]
      }), (0, s.jsx)("div", {
        className: T.yN,
        children: (0, s.jsxs)(b.D0$, {
          label: G.intl.string(G.t["0q344R"]),
          children: [(0, s.jsxs)("div", {
            className: T.J_,
            children: [(0, s.jsx)(b.yr3, {
              size: "md",
              className: T.aV,
              color: d.A.unsafe_rawColors.GREEN_360.css,
              secondaryColor: d.A.unsafe_rawColors.WHITE.css
            }), (0, s.jsx)(b.Text, {
              variant: "text-md/normal",
              children: G.intl.format(G.t.K8Eg4P, {
                infoHook: () => (0, s.jsx)(x.m, {
                  text: G.intl.string(G.t["3h2WyM"]),
                  "aria-label": G.intl.string(G.t["3h2WyM"]),
                  children: (0, s.jsx)(b.mir, {
                    size: "xs",
                    color: "currentColor",
                    className: T.Kk
                  })
                })
              })
            })]
          }), (0, s.jsxs)("div", {
            className: T.J_,
            children: [(0, s.jsx)(b.yr3, {
              size: "md",
              className: T.aV,
              color: d.A.unsafe_rawColors.GREEN_360.css,
              secondaryColor: d.A.unsafe_rawColors.WHITE.css
            }), (0, s.jsx)(b.Text, {
              variant: "text-md/normal",
              children: G.intl.string(G.t.LfeFFr)
            }), (0, s.jsx)(W, {
              guild: t
            })]
          }), (0, s.jsx)(K, {
            permissions: o
          })]
        })
      }), (0, s.jsx)("div", {
        className: T.yN,
        children: (0, s.jsx)(b.D0$, {
          label: G.intl.string(G.t["k+b2Cf"]),
          description: G.intl.format(G.t["BwbW/Q"], {
            communityGuidelines: L.A.getArticleURL(k.MVz.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.A.getArticleURL(k.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(b.Checkbox, {
            label: G.intl.string(G.t["9AG3wI"]),
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
    } = (0, c.cf)([j.A], () => j.A.getProps()), d = (0, c.bG)([C.A], () => C.A.theme), [o, x] = l.useState(false), [u, m] = l.useState(!P.dR.some(e => y.Ib(e, a))), [b, N] = l.useState(P.SP), [E, L] = l.useState(P.SP), [O] = l.useState(null == a ? true : a.defaultMessageNotifications), [D] = l.useState(null == a ? true : a.verificationLevel), [R] = l.useState(null == a ? true : a.explicitContentFilter), [U] = l.useState(u), F = (0, c.bG)([A.A], () => null != a ? A.A.getEveryoneRole(a) : true), Y = (0, c.bG)([_.Ay], () => null != a ? _.Ay.getChannels(a.id) : null), H = (0, p.GV)(), {
      enabled: W
    } = (0, f.zi)(null != (t = null == a ? true : a.id) ? t : k.dJq);
    if (null == a) return null;
    let Z = [{
      value: P.SP,
      label: G.intl.string(G.t.Cla0re)
    }];
    Y[_.I6].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === k.rbe.GUILD_TEXT && Z.push({
        value: t.id,
        label: (0, h.m1)(t, I.default, S.A, true)
      })
    });
    let J = D !== k.PvD.NONE,
      K = R === k.gh6.ALL_MEMBERS,
      $ = O === k.orn.ONLY_MENTIONS,
      X = async () => {
        var e, t;
        if (null == F || !o) return;
        let i = new Set(a.features);
        i.add(k.GuildFeatures.COMMUNITY);
        let s = u ? r.TF(F.permissions, P.e$) : F.permissions,
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
          }({}, F), t = t = {
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
        s !== F.permissions && await (0, v.JY)(a.id, [l]), g.A.updateGuild({
          features: i,
          rulesChannelId: b,
          publicUpdatesChannelId: E
        }), await g.A.saveGuild(a.id, {
          features: i,
          rulesChannelId: b,
          verificationLevel: a.verificationLevel,
          explicitContentFilter: a.explicitContentFilter,
          publicUpdatesChannelId: E,
          defaultMessageNotifications: a.defaultMessageNotifications
        }), setTimeout(() => {
          n()
        }, 0)
      }, ee = (0, s.jsx)(V, {
        guild: a,
        disableVerificationLevel: J,
        disableContentFilter: K,
        onAcceptVerificationLevel: e => {
          e ? e && g.A.updateGuild({
            verificationLevel: k.PvD.LOW
          }) : g.A.updateGuild({
            verificationLevel: D
          })
        },
        onAcceptContentFilter: e => {
          e ? g.A.updateGuild({
            explicitContentFilter: k.gh6.ALL_MEMBERS
          }) : g.A.updateGuild({
            explicitContentFilter: R
          })
        },
        headerId: H,
        theme: d
      }), et = (0, s.jsx)(q, {
        selectableChannels: Z,
        onRuleChannelChange: e => {
          N(e)
        },
        onPublicUpdatesChannelChange: e => {
          L(e)
        },
        ruleChannel: b,
        publicUpdatesChannel: E,
        headerId: H,
        theme: d,
        guildId: a.id
      }), ei = W ? (0, s.jsx)(Q, {
        guild: a,
        policyAccepted: o,
        onAcceptPolicy: e => {
          if (e) {
            x(true), $ || g.A.updateGuild({
              defaultMessageNotifications: k.orn.ONLY_MENTIONS
            }), u || null == F || m(true);
            return
          }
          x(false), $ && g.A.updateGuild({
            defaultMessageNotifications: O
          }), u && null != F && m(false)
        },
        headerId: H,
        theme: d
      }) : (0, s.jsx)(z, {
        guild: a,
        disableDefaultNotifications: $,
        disableEveryoneRolePermissions: U,
        policyAccepted: o,
        everyoneRolePermissionsAccepted: u,
        onAcceptPolicy: e => {
          e ? x(true) : x(false)
        },
        onAcceptDefaultNotifications: e => {
          e ? g.A.updateGuild({
            defaultMessageNotifications: k.orn.ONLY_MENTIONS
          }) : g.A.updateGuild({
            defaultMessageNotifications: O
          })
        },
        onAcceptEveryoneRolePermissions: e => {
          null != F && (e ? m(true) : m(false))
        },
        headerId: H,
        theme: d
      }), es = (0, s.jsx)("img", {
        alt: "",
        src: B,
        className: T.Hw,
        width: 240
      }), el = [{
        modalContent: ee,
        disableNextStep: a.explicitContentFilter !== k.gh6.ALL_MEMBERS || a.verificationLevel === k.PvD.NONE,
        overviewTitle: G.intl.string(G.t.PpYoSj)
      }, {
        modalContent: et,
        disableNextStep: null == b || null == E,
        overviewTitle: G.intl.string(G.t["7MEtIY"])
      }, {
        modalContent: ei,
        disableNextStep: !o,
        overviewTitle: G.intl.string(G.t.Pj9P8E)
      }];
    return (0, s.jsx)(w.A, {
      stepData: el,
      title: G.intl.string(G.t["6U5XTu"]),
      transitionState: i,
      onClose: () => {
        n(), M.default.track(k.HAw.MODAL_DISMISSED, {
          type: P.bK
        })
      },
      completeButtonText: G.intl.string(G.t.XGl4ba),
      onComplete: X,
      overviewFooter: es,
      sequencerClassName: T.kL,
      autoCloseOnComplete: false
    })
  }