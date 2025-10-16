/** Chunk was on 57486 **/
/** chunk id: 87026, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk353302 = require("./353302.js"),
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
    } = e, d = (0, o.e7)([E.Z], () => E.Z.getGuild(t.id), [t.id]), x = null != d && d.verificationLevel > T.sFg.NONE, h = (null == d ? true : d.explicitContentFilter) === T.lxg.ALL_MEMBERS, g = (0, u.wj)(c) ? F : U;
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
          children: k.intl.string(k.t.QrjLYm)
        }), (0, s.jsx)(m.Text, {
          color: "none",
          variant: "text-md/normal",
          className: A.headerCaption,
          children: k.intl.string(k.t.i1STws)
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t.x4hbeX),
          description: x ? k.intl.string(k.t.k5crqq) : k.intl.string(k.t.fHiGAw),
          children: (0, s.jsx)(m.Checkbox, {
            disabled: a,
            checked: t.verificationLevel > T.sFg.NONE,
            onChange: i,
            label: k.intl.string(k.t.x4hbeX)
          })
        })
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t.COu4bm),
          description: h ? k.intl.string(k.t.qgQLpq) : k.intl.string(k.t.b0MaDQ),
          children: (0, s.jsx)(m.Checkbox, {
            disabled: n,
            checked: t.explicitContentFilter === T.lxg.ALL_MEMBERS,
            onChange: l,
            label: k.intl.string(k.t.WAUiMj)
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
        fromStep: P.IO.SAFETY_CHECK,
        toStep: P.IO.BASICS,
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
          children: k.intl.string(k.t["J/fYR0"])
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.VcW, {
          label: k.intl.string(k.t.dYrhCA),
          description: k.intl.string(k.t["+Af+V1"]),
          options: t,
          onChange: i,
          value: n,
          maxVisibleItems: 4
        })
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(m.VcW, {
          label: k.intl.string(k.t.vAyDGR),
          description: k.intl.string(k.t.ZFeonp),
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
        fromStep: P.IO.BASICS,
        toStep: P.IO.FINISH,
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
          children: k.intl.string(k.t["Pj/s/f"])
        }), (0, s.jsx)(m.Text, {
          color: "none",
          variant: "text-md/normal",
          className: A.headerCaption,
          children: k.intl.string(k.t["IL7/np"])
        })]
      }), (0, s.jsx)("div", {
        className: A.form,
        children: (0, s.jsx)(d.u, {
          text: h ? k.intl.string(k.t.PHjrpq) : null,
          "aria-label": !!h && k.intl.string(k.t.PHjrpq),
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
                children: k.intl.format(k.t.K8Eg4O, {
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
        text: g ? k.intl.string(k.t.PHjrpq) : null,
        "aria-label": !!g && k.intl.string(k.t.PHjrpq),
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
              children: k.intl.format(k.t.v8qCoK, {
                infoHook: () => (0, s.jsx)(d.u, {
                  text: k.intl.string(k.t["+IyaiY"]),
                  "aria-label": k.intl.string(k.t["+IyaiY"]),
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
          label: k.intl.string(k.t["k+b2CQ"]),
          description: k.intl.format(k.t["BwbW/f"], {
            communityGuidelines: L.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(m.Checkbox, {
            checked: i,
            onChange: r,
            label: k.intl.string(k.t["9AG3wM"])
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
  } = (0, o.e7)([S.Z], () => S.Z.getEveryoneRole(t));
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
      children: k.intl.string(k.t.xU8RDg)
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

function X(e) {
  let {
    disabledPermissions: t,
    onGetPermisisonName: i
  } = e, l = k.intl.string(k.t.Yo5qlp);
  return t.length === P.$X.length && (l = k.intl.string(k.t.FgMS6u)), (0, s.jsxs)("div", {
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

function V(e) {
  let {
    permissions: t
  } = e, i = e => {
    switch (e.toString()) {
      case T.Plq.MENTION_EVERYONE.toString():
        return k.intl.string(k.t.yCpsQ0);
      case T.Plq.CREATE_GUILD_EXPRESSIONS.toString():
        return k.intl.string(k.t.vo2LdX);
      case T.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
        return k.intl.string(k.t.cmp2W1);
      default:
        return (0, N.wt)(e)
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
    }) : null, (0, s.jsx)(X, {
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
        fromStep: P.IO.BASICS,
        toStep: P.IO.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let x = l.useMemo(() => {
      let e = [],
        i = [];
      return P.$X.map(s => {
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
          children: k.intl.string(k.t["Pj/s/f"])
        })]
      }), (0, s.jsx)("div", {
        className: A.updatedForm,
        children: (0, s.jsxs)(m.gNt, {
          label: k.intl.string(k.t["0q344e"]),
          children: [(0, s.jsxs)("div", {
            className: A.checklistRow,
            children: [(0, s.jsx)(m.owK, {
              size: "md",
              className: A.checklistIcon,
              color: c.Z.unsafe_rawColors.GREEN_360.css,
              secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
            }), (0, s.jsx)(m.Text, {
              variant: "text-md/normal",
              children: k.intl.format(k.t.K8Eg4O, {
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
              children: k.intl.string(k.t.LfeFFh)
            }), (0, s.jsx)(z, {
              guild: t
            })]
          }), (0, s.jsx)(V, {
            permissions: x
          })]
        })
      }), (0, s.jsx)("div", {
        className: A.updatedForm,
        children: (0, s.jsx)(m.gNt, {
          label: k.intl.string(k.t["k+b2CQ"]),
          description: k.intl.format(k.t["BwbW/f"], {
            communityGuidelines: L.Z.getArticleURL(T.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: L.Z.getArticleURL(T.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          }),
          children: (0, s.jsx)(m.Checkbox, {
            label: k.intl.string(k.t["9AG3wM"]),
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
      M.default.track(T.rMx.OPEN_MODAL, {
        type: P.tA
      })
    }, []);
    let {
      guild: a
    } = (0, o.cj)([v.Z], () => v.Z.getProps()), c = (0, o.e7)([b.Z], () => b.Z.theme), [d, u] = l.useState(false), [x, m] = l.useState(!P.$X.some(e => w.oz(e, a))), [N, E] = l.useState(P.b4), [L, y] = l.useState(P.b4), [G] = l.useState(null == a ? true : a.defaultMessageNotifications), [R] = l.useState(null == a ? true : a.verificationLevel), [Z] = l.useState(null == a ? true : a.explicitContentFilter), [D] = l.useState(x), F = (0, o.e7)([S.Z], () => null != a ? S.Z.getEveryoneRole(a) : true), U = (0, o.e7)([C.ZP], () => null != a ? C.ZP.getChannels(a.id) : null), z = (0, p.Dt)(), {
      enabled: W
    } = (0, h.D2)(null != (t = null == a ? true : a.id) ? t : T.lds);
    if (null == a) return null;
    let X = [{
      value: P.b4,
      label: k.intl.string(k.t.Cla0ra)
    }];
    U[C.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === T.d4z.GUILD_TEXT && X.push({
        value: t.id,
        label: (0, g.F6)(t, O.default, I.Z, true)
      })
    });
    let V = R !== T.sFg.NONE,
      Q = Z === T.lxg.ALL_MEMBERS,
      $ = G === T.bL.ONLY_MENTIONS,
      J = async () => {
        var e, t;
        if (null == F || !d) return;
        let i = new Set(a.features);
        i.add(T.GuildFeatures.COMMUNITY);
        let s = x ? r.Od(F.permissions, P.mu) : F.permissions,
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
        s !== F.permissions && await (0, j.Gf)(a.id, [l]), f.Z.updateGuild({
          features: i,
          rulesChannelId: N,
          publicUpdatesChannelId: L
        }), await f.Z.saveGuild(a.id, {
          features: i,
          rulesChannelId: N,
          verificationLevel: a.verificationLevel,
          explicitContentFilter: a.explicitContentFilter,
          publicUpdatesChannelId: L,
          defaultMessageNotifications: a.defaultMessageNotifications
        }), setTimeout(() => {
          n()
        }, 0)
      }, ee = (0, s.jsx)(H, {
        guild: a,
        disableVerificationLevel: V,
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
        selectableChannels: X,
        onRuleChannelChange: e => {
          E(e)
        },
        onPublicUpdatesChannelChange: e => {
          y(e)
        },
        ruleChannel: N,
        publicUpdatesChannel: L,
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
        overviewTitle: k.intl.string(k.t.PpYoSk)
      }, {
        modalContent: et,
        disableNextStep: null == N || null == L,
        overviewTitle: k.intl.string(k.t["7MEtIS"])
      }, {
        modalContent: ei,
        disableNextStep: !d,
        overviewTitle: k.intl.string(k.t.Pj9P8P)
      }];
    return (0, s.jsx)(_.Z, {
      stepData: el,
      title: k.intl.string(k.t["6U5XTk"]),
      transitionState: i,
      onClose: () => {
        n(), M.default.track(T.rMx.MODAL_DISMISSED, {
          type: P.tA
        })
      },
      completeButtonText: k.intl.string(k.t.XGl4bW),
      onComplete: J,
      overviewFooter: es,
      sequencerClassName: A.container,
      autoCloseOnComplete: false
    })
  }