/** Chunk was on 57486 **/
/** chunk id: 87026, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785697 = require("./785697.js"),
  Chunk933557 = require("./933557.js"),
  Chunk313201 = require("./313201.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84058 = require("./84058.js"),
  Chunk422559 = require("./422559.js"),
  Chunk210887 = require("./210887.js"),
  Chunk984933 = require("./984933.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk700785 = require("./700785.js"),
  Chunk245315 = require("./245315.js"),
  Chunk513796 = require("./513796.jsx"),
  Chunk135899 = require("./135899.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214828 = require("./214828.js"),
  Chunk289575 = require("./289575.js"),
  Chunk371411 = require("./371411.js"),
  Chunk112847 = require("./112847.js"),
  Chunk516954 = require("./516954.js"),
  Chunk674889 = require("./674889.js"),
  Chunk162752 = require("./162752.js"),
  Chunk438825 = require("./438825.js");
let H = e => {
    let {
      guild: t,
      onAcceptVerificationLevel: i,
      onAcceptContentFilter: l,
      disableContentFilter: n,
      disableVerificationLevel: a,
      headerId: r,
      theme: c
    } = e, d = (0, o.e7)([S.Z], () => S.Z.getGuild(t.id), [t.id]), x = null != d && d.verificationLevel > T.sFg.NONE, h = (null == d ? true : d.explicitContentFilter) === T.lxg.ALL_MEMBERS, g = (0, u.wj)(c) ? F : U;
    return (0, s.jsxs)("div", {
      className: A.container,
      children: [(0, s.jsxs)("div", {
        className: A.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: g,
          width: 80
        }), (0, s.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          className: A.header,
          id: r,
          children: k.intl.string(k.t.QrjLYl)
        }), (0, s.jsx)(m.Text, {
          color: "none",
          variant: "text-md/normal",
          className: A.headerCaption,
          children: k.intl.string(k.t.i1STwu)
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t.x4hbeZ),
          description: x ? k.intl.string(k.t.k5crqq) : k.intl.string(k.t.fHiGA0),
          children: (0, s.jsx)(m.Checkbox, {
            disabled: a,
            checked: t.verificationLevel > T.sFg.NONE,
            onChange: i,
            label: k.intl.string(k.t.x4hbeZ)
          })
        })
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t.COu4bk),
          description: h ? k.intl.string(k.t.qgQLpg) : k.intl.string(k.t.b0MaDV),
          children: (0, s.jsx)(m.Checkbox, {
            disabled: n,
            checked: t.explicitContentFilter === T.lxg.ALL_MEMBERS,
            onChange: l,
            label: k.intl.string(k.t.WAUiMt)
          })
        })
      })]
    })
  },
  Y = e => {
    let {
      selectableChannels: t,
      onRuleChannelChange: i,
      ruleChannel: n,
      onPublicUpdatesChannelChange: a,
      publicUpdatesChannel: r,
      headerId: o,
      theme: c,
      guildId: d
    } = e;
    l.useEffect(() => {
      (0, y.BF)({
        fromStep: _.IO.SAFETY_CHECK,
        toStep: _.IO.BASICS,
        guildId: d
      })
    }, [d]);
    let x = (0, u.wj)(c) ? G : R;
    return (0, s.jsxs)("div", {
      className: A.container,
      children: [(0, s.jsxs)("div", {
        className: A.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: x,
          width: 80
        }), (0, s.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          className: A.header,
          id: o,
          children: k.intl.string(k.t.YtXpEh)
        }), (0, s.jsx)(m.Text, {
          color: "none",
          variant: "text-md/normal",
          className: A.headerCaption,
          children: k.intl.string(k.t["J/fYR8"])
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.VcW, {
          label: k.intl.string(k.t.dYrhCO),
          description: k.intl.string(k.t["+Af+Vw"]),
          options: t,
          onChange: i,
          value: n,
          maxVisibleItems: 4
        })
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.VcW, {
          label: k.intl.string(k.t.vAyDGU),
          description: k.intl.string(k.t.ZFeonu),
          options: t,
          onChange: a,
          value: r,
          popoutPosition: "top",
          maxVisibleItems: 4
        })
      })]
    })
  },
  q = e => {
    let {
      guild: t,
      policyAccepted: i,
      everyoneRolePermissionsAccepted: n,
      onAcceptPolicy: r,
      onAcceptDefaultNotifications: o,
      onAcceptEveryoneRolePermissions: c,
      disableDefaultNotifications: h,
      disableEveryoneRolePermissions: g,
      headerId: p,
      theme: f
    } = e, v = (0, u.wj)(f) ? Z : D;
    return l.useEffect(() => {
      (0, y.BF)({
        fromStep: _.IO.BASICS,
        toStep: _.IO.FINISH,
        guildId: t.id
      })
    }, [t.id]), (0, s.jsxs)("div", {
      className: A.container,
      children: [(0, s.jsxs)("div", {
        className: A.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: v,
          width: 80
        }), (0, s.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          className: A.header,
          id: p,
          children: k.intl.string(k.t["Pj/s/a"])
        }), (0, s.jsx)(m.Text, {
          color: "none",
          variant: "text-md/normal",
          className: A.headerCaption,
          children: k.intl.string(k.t["IL7/no"])
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(d.u, {
          text: h ? k.intl.string(k.t.PHjrpp) : null,
          "aria-label": !!h && k.intl.string(k.t.PHjrpp),
          children: (0, s.jsx)("div", {
            children: (0, s.jsx)(m.$qM, {
              type: x.M0.ROW,
              disabled: h,
              value: t.defaultMessageNotifications === T.bL.ONLY_MENTIONS,
              onChange: (e, t) => o(t),
              className: a()({
                [A.disabled]: h
              }),
              children: (0, s.jsx)(m.Text, {
                variant: "text-sm/normal",
                children: k.intl.format(k.t.K8Eg4P, {
                  infoHook: () => (0, s.jsx)(d.u, {
                    text: k.intl.string(k.t["3h2WyM"]),
                    "aria-label": k.intl.string(k.t["3h2WyM"]),
                    children: (0, s.jsx)(m.d3s, {
                      size: "xs",
                      color: "currentColor",
                      className: A.icon
                    })
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)(d.u, {
        text: g ? k.intl.string(k.t.PHjrpp) : null,
        "aria-label": !!g && k.intl.string(k.t.PHjrpp),
        children: (0, s.jsx)("div", {
          className: A.checkboxOption,
          children: (0, s.jsx)(m.$qM, {
            disabled: g,
            value: n,
            onChange: (e, t) => c(t),
            className: a()({
              [A.disabled]: g
            }),
            children: (0, s.jsx)(m.Text, {
              variant: "text-sm/normal",
              children: k.intl.format(k.t.v8qCoG, {
                infoHook: () => (0, s.jsx)(d.u, {
                  text: k.intl.string(k.t["+Iyaif"]),
                  "aria-label": k.intl.string(k.t["+Iyaif"]),
                  children: (0, s.jsx)(m.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: A.icon
                  })
                })
              })
            })
          })
        })
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t["k+b2Cf"]),
          description: k.intl.format(k.t["BwbW/Q"], {
            communityGuidelines: M.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: M.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(m.Checkbox, {
            checked: i,
            onChange: r,
            label: k.intl.string(k.t["9AG3wI"])
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
  } = (0, o.e7)([E.Z], () => E.Z.getEveryoneRole(t));
  return (0, s.jsx)("div", {
    className: A.__invalid_role,
    children: (0, s.jsxs)("span", {
      className: A.roleRow,
      children: [(0, s.jsx)(m.FhE, {
        className: A.roleDot,
        color: l.toString(),
        background: false,
        tooltip: false
      }), (0, s.jsx)(m.Text, {
        className: A.roleName,
        variant: "text-sm/medium",
        color: "interactive-active",
        children: i
      })]
    })
  })
}

function W(e) {
  let {
    enabledPermissions: t,
    onGetPermisisonName: i
  } = e;
  return (0, s.jsxs)("div", {
    className: A.tableContainer,
    children: [(0, s.jsx)(m.Text, {
      className: A.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: k.intl.string(k.t.xU8RDk)
    }), (0, s.jsx)("div", {
      className: A.permissionsTable,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: A.permissionRow,
        children: [(0, s.jsx)("div", {
          className: A.bulletWarning
        }), (0, s.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function V(e) {
  let {
    disabledPermissions: t,
    onGetPermisisonName: i
  } = e, l = k.intl.string(k.t.Yo5qlq);
  return t.length === _.$X.length && (l = k.intl.string(k.t.FgMS6i)), (0, s.jsxs)("div", {
    className: A.tableContainer,
    children: [(0, s.jsx)(m.Text, {
      className: A.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: l
    }), (0, s.jsx)("div", {
      className: A.permissionsTable,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: A.permissionRow,
        children: [(0, s.jsx)("div", {
          className: A.bullet
        }), (0, s.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function X(e) {
  let {
    permissions: t
  } = e, i = e => {
    switch (e.toString()) {
      case T.Plq.MENTION_EVERYONE.toString():
        return k.intl.string(k.t.yCpsQw);
      case T.Plq.CREATE_GUILD_EXPRESSIONS.toString():
        return k.intl.string(k.t.vo2LdY);
      case T.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
        return k.intl.string(k.t.cmp2W6);
      default:
        return (0, j.wt)(e)
    }
  }, {
    enabledPermissions: l,
    disabledPermissions: n
  } = t;
  return (0, s.jsxs)("div", {
    className: A.table,
    children: [0 !== l.length ? (0, s.jsx)(W, {
      enabledPermissions: l,
      onGetPermisisonName: i
    }) : null, (0, s.jsx)(V, {
      disabledPermissions: n,
      onGetPermisisonName: i
    })]
  })
}
let K = e => {
    let {
      guild: t,
      policyAccepted: i,
      onAcceptPolicy: n,
      headerId: a,
      theme: r
    } = e, o = (0, u.wj)(r) ? Z : D;
    l.useEffect(() => {
      (0, y.BF)({
        fromStep: _.IO.BASICS,
        toStep: _.IO.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let x = l.useMemo(() => {
      let e = [],
        i = [];
      return _.$X.map(s => {
        w.oz(s, t) ? e.push(s) : i.push(s)
      }), {
        enabledPermissions: e,
        disabledPermissions: i
      }
    }, [t]);
    return (0, s.jsxs)("div", {
      className: A.container,
      children: [(0, s.jsxs)("div", {
        className: A.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: o,
          width: 80
        }), (0, s.jsx)(m.Heading, {
          variant: "heading-xl/semibold",
          className: A.updatedHeader,
          id: a,
          children: k.intl.string(k.t["Pj/s/a"])
        })]
      }), (0, s.jsx)("div", {
        className: A.updatedForm,
        children: (0, s.jsxs)(m.gNt, {
          label: k.intl.string(k.t["0q344R"]),
          children: [(0, s.jsxs)("div", {
            className: A.checklistRow,
            children: [(0, s.jsx)(m.owK, {
              size: "md",
              className: A.checklistIcon,
              color: c.Z.unsafe_rawColors.GREEN_360.css,
              secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
            }), (0, s.jsx)(m.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t.K8Eg4P, {
                infoHook: () => (0, s.jsx)(d.u, {
                  text: k.intl.string(k.t["3h2WyM"]),
                  "aria-label": k.intl.string(k.t["3h2WyM"]),
                  children: (0, s.jsx)(m.d3s, {
                    size: "xs",
                    color: "currentColor",
                    className: A.icon
                  })
                })
              })
            })]
          }), (0, s.jsxs)("div", {
            className: A.checklistRow,
            children: [(0, s.jsx)(m.owK, {
              size: "md",
              className: A.checklistIcon,
              color: c.Z.unsafe_rawColors.GREEN_360.css,
              secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
            }), (0, s.jsx)(m.Text, {
              variant: "text-md/normal",
              children: k.intl.string(k.t.LfeFFr)
            }), (0, s.jsx)(z, {
              guild: t
            })]
          }), (0, s.jsx)(X, {
            permissions: x
          })]
        })
      }), (0, s.jsx)("div", {
        className: A.updatedForm,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t["k+b2Cf"]),
          description: k.intl.format(k.t["BwbW/Q"], {
            communityGuidelines: M.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: M.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(m.Checkbox, {
            label: k.intl.string(k.t["9AG3wI"]),
            checked: i,
            onChange: n
          })
        })
      })]
    })
  },
  Q = e => {
    var t;
    let {
      transitionState: i,
      onClose: n
    } = e;
    l.useEffect(() => {
      L.default.track(T.rMx.OPEN_MODAL, {
        type: _.tA
      })
    }, []);
    let {
      guild: a
    } = (0, o.cj)([v.Z], () => v.Z.getProps()), c = (0, o.e7)([b.Z], () => b.Z.theme), [d, u] = l.useState(false), [x, m] = l.useState(!_.$X.some(e => w.oz(e, a))), [j, S] = l.useState(_.b4), [M, y] = l.useState(_.b4), [G] = l.useState(null == a ? true : a.defaultMessageNotifications), [R] = l.useState(null == a ? true : a.verificationLevel), [Z] = l.useState(null == a ? true : a.explicitContentFilter), [D] = l.useState(x), F = (0, o.e7)([E.Z], () => null != a ? E.Z.getEveryoneRole(a) : true), U = (0, o.e7)([C.ZP], () => null != a ? C.ZP.getChannels(a.id) : null), z = (0, p.Dt)(), {
      enabled: W
    } = (0, h.D2)(null != (t = null == a ? true : a.id) ? t : T.lds);
    if (null == a) return null;
    let V = [{
      value: _.b4,
      label: k.intl.string(k.t.Cla0re)
    }];
    U[C.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === T.d4z.GUILD_TEXT && V.push({
        value: t.id,
        label: (0, g.F6)(t, O.default, I.Z, true)
      })
    });
    let X = R !== T.sFg.NONE,
      Q = Z === T.lxg.ALL_MEMBERS,
      $ = G === T.bL.ONLY_MENTIONS,
      J = async () => {
        var e, t;
        if (null == F || !d) return;
        let i = new Set(a.features);
        i.add(T.GuildFeatures.COMMUNITY);
        let s = x ? r.Od(F.permissions, _.mu) : F.permissions,
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
        s !== F.permissions && await (0, N.Gf)(a.id, [l]), f.Z.updateGuild({
          features: i,
          rulesChannelId: j,
          publicUpdatesChannelId: M
        }), await f.Z.saveGuild(a.id, {
          features: i,
          rulesChannelId: j,
          verificationLevel: a.verificationLevel,
          explicitContentFilter: a.explicitContentFilter,
          publicUpdatesChannelId: M,
          defaultMessageNotifications: a.defaultMessageNotifications
        }), setTimeout(() => {
          n()
        }, 0)
      }, ee = (0, s.jsx)(H, {
        guild: a,
        disableVerificationLevel: X,
        disableContentFilter: Q,
        onAcceptVerificationLevel: e => {
          if (!e) return void f.Z.updateGuild({
            verificationLevel: R
          });
          e && f.Z.updateGuild({
            verificationLevel: T.sFg.LOW
          })
        },
        onAcceptContentFilter: e => {
          if (!e) return void f.Z.updateGuild({
            explicitContentFilter: Z
          });
          f.Z.updateGuild({
            explicitContentFilter: T.lxg.ALL_MEMBERS
          })
        },
        headerId: z,
        theme: c
      }), et = (0, s.jsx)(Y, {
        selectableChannels: V,
        onRuleChannelChange: e => {
          S(e)
        },
        onPublicUpdatesChannelChange: e => {
          y(e)
        },
        ruleChannel: j,
        publicUpdatesChannel: M,
        headerId: z,
        theme: c,
        guildId: a.id
      }), ei = W ? (0, s.jsx)(K, {
        guild: a,
        policyAccepted: d,
        onAcceptPolicy: e => {
          if (e) {
            u(true), $ || f.Z.updateGuild({
              defaultMessageNotifications: T.bL.ONLY_MENTIONS
            }), x || null == F || m(true);
            return
          }
          u(false), $ && f.Z.updateGuild({
            defaultMessageNotifications: G
          }), x && null != F && m(false)
        },
        headerId: z,
        theme: c
      }) : (0, s.jsx)(q, {
        guild: a,
        disableDefaultNotifications: $,
        disableEveryoneRolePermissions: D,
        policyAccepted: d,
        everyoneRolePermissionsAccepted: x,
        onAcceptPolicy: e => {
          if (e) return void u(true);
          u(false)
        },
        onAcceptDefaultNotifications: e => {
          if (!e) return void f.Z.updateGuild({
            defaultMessageNotifications: G
          });
          f.Z.updateGuild({
            defaultMessageNotifications: T.bL.ONLY_MENTIONS
          })
        },
        onAcceptEveryoneRolePermissions: e => {
          null != F && (e ? m(true) : m(false))
        },
        headerId: z,
        theme: c
      }), es = (0, s.jsx)("img", {
        alt: "",
        src: B,
        className: A.footerImage,
        width: 240
      }), el = [{
        modalContent: ee,
        disableNextStep: a.explicitContentFilter !== T.lxg.ALL_MEMBERS || a.verificationLevel === T.sFg.NONE,
        overviewTitle: k.intl.string(k.t.PpYoSj)
      }, {
        modalContent: et,
        disableNextStep: null == j || null == M,
        overviewTitle: k.intl.string(k.t["7MEtIY"])
      }, {
        modalContent: ei,
        disableNextStep: !d,
        overviewTitle: k.intl.string(k.t.Pj9P8E)
      }];
    return (0, s.jsx)(P.Z, {
      stepData: el,
      title: k.intl.string(k.t["6U5XTu"]),
      transitionState: i,
      onClose: () => {
        n(), L.default.track(T.rMx.MODAL_DISMISSED, {
          type: _.tA
        })
      },
      completeButtonText: k.intl.string(k.t.XGl4ba),
      onComplete: J,
      overviewFooter: es,
      sequencerClassName: A.container,
      autoCloseOnComplete: false
    })
  }