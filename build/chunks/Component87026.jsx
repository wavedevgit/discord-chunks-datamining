/** Chunk was on 57486 **/
/** chunk id: 87026, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => K
}), require("./953529.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785697 = require("./785697.js"),
  Chunk933557 = require("./933557.js"),
  Chunk313201 = require("./313201.js"),
  Chunk434404 = require("./434404.js"),
  Chunk764260 = require("./764260.js"),
  Chunk999382 = require("./999382.js"),
  Chunk416162 = require("./416162.jsx"),
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

function F(e) {
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
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      i.push.apply(i, s)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
let B = e => {
    let {
      guild: t,
      onAcceptVerificationLevel: i,
      onAcceptContentFilter: n,
      disableContentFilter: l,
      disableVerificationLevel: a,
      headerId: r,
      theme: c
    } = e, m = (0, o.e7)([S.Z], () => S.Z.getGuild(t.id), [t.id]), x = null != m && m.verificationLevel > L.sFg.NONE, f = (null == m ? true : m.explicitContentFilter) === L.lxg.ALL_MEMBERS, p = (0, d.wj)(c) ? k : G;
    return (0, s.jsxs)("div", {
      className: M.container,
      children: [(0, s.jsxs)("div", {
        className: M.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: p,
          width: 80
        }), (0, s.jsx)(u.X6q, {
          variant: "heading-xl/semibold",
          className: M.header,
          id: r,
          children: R.intl.string(R.t.QrjLYm)
        }), (0, s.jsx)(u.Text, {
          color: "none",
          variant: "text-md/normal",
          className: M.headerCaption,
          children: R.intl.string(R.t.i1STws)
        })]
      }), (0, s.jsxs)("div", {
        className: M.form,
        children: [(0, s.jsx)(u.vwX, {
          children: R.intl.string(R.t.DpRdYG)
        }), (0, s.jsx)(u.R94, {
          type: u.geA.DESCRIPTION,
          className: M.description,
          children: x ? R.intl.string(R.t.k5crqq) : R.intl.string(R.t.fHiGAw)
        }), (0, s.jsx)(u.XZJ, {
          type: u.XZJ.Types.ROW,
          disabled: a,
          value: t.verificationLevel > L.sFg.NONE,
          onChange: i,
          children: (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: R.intl.string(R.t.x4hbeX)
          })
        })]
      }), (0, s.jsxs)("div", {
        className: M.form,
        children: [(0, s.jsx)(u.vwX, {
          children: R.intl.string(R.t.COu4bm)
        }), (0, s.jsx)(u.R94, {
          type: u.geA.DESCRIPTION,
          className: M.description,
          children: f ? R.intl.string(R.t.qgQLpq) : R.intl.string(R.t.b0MaDQ)
        }), (0, s.jsx)(u.XZJ, {
          type: u.XZJ.Types.ROW,
          disabled: l,
          value: t.explicitContentFilter === L.lxg.ALL_MEMBERS,
          onChange: n,
          children: (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: R.intl.string(R.t.WAUiMj)
          })
        })]
      })]
    })
  },
  U = e => {
    let {
      selectableChannels: t,
      onRuleChannelChange: i,
      ruleChannel: l,
      onPublicUpdatesChannelChange: a,
      publicUpdatesChannel: r,
      headerId: o,
      theme: c,
      guildId: m
    } = e;
    n.useEffect(() => {
      (0, w.BF)({
        fromStep: y.IO.SAFETY_CHECK,
        toStep: y.IO.BASICS,
        guildId: m
      })
    }, [m]);
    let x = (0, d.wj)(c) ? P : Z;
    return (0, s.jsxs)("div", {
      className: M.container,
      children: [(0, s.jsxs)("div", {
        className: M.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: x,
          width: 80
        }), (0, s.jsx)(u.X6q, {
          variant: "heading-xl/semibold",
          className: M.header,
          id: o,
          children: R.intl.string(R.t.YtXpEh)
        }), (0, s.jsx)(u.Text, {
          color: "none",
          variant: "text-md/normal",
          className: M.headerCaption,
          children: R.intl.string(R.t["J/fYR0"])
        })]
      }), (0, s.jsxs)("div", {
        className: M.form,
        children: [(0, s.jsx)(u.vwX, {
          children: R.intl.string(R.t.dYrhCA)
        }), (0, s.jsx)(u.R94, {
          type: u.geA.DESCRIPTION,
          className: M.description,
          children: R.intl.string(R.t["+Af+V1"])
        }), (0, s.jsx)(u.VcW, {
          options: t,
          onChange: i,
          value: l,
          maxVisibleItems: 4
        })]
      }), (0, s.jsxs)("div", {
        className: M.form,
        children: [(0, s.jsx)(u.vwX, {
          children: R.intl.string(R.t.vAyDGR)
        }), (0, s.jsx)(u.R94, {
          type: u.geA.DESCRIPTION,
          className: M.description,
          children: R.intl.string(R.t.ZFeonp)
        }), (0, s.jsx)(u.VcW, {
          options: t,
          onChange: a,
          value: r,
          popoutPosition: "top",
          maxVisibleItems: 4
        })]
      })]
    })
  },
  W = e => {
    let {
      guild: t,
      policyAccepted: i,
      everyoneRolePermissionsAccepted: l,
      onAcceptPolicy: r,
      onAcceptDefaultNotifications: o,
      onAcceptEveryoneRolePermissions: c,
      disableDefaultNotifications: m,
      disableEveryoneRolePermissions: x,
      headerId: f,
      theme: p
    } = e, h = (0, d.wj)(p) ? A : D;
    return n.useEffect(() => {
      (0, w.BF)({
        fromStep: y.IO.BASICS,
        toStep: y.IO.FINISH,
        guildId: t.id
      })
    }, [t.id]), (0, s.jsxs)("div", {
      className: M.container,
      children: [(0, s.jsxs)("div", {
        className: M.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: h,
          width: 80
        }), (0, s.jsx)(u.X6q, {
          variant: "heading-xl/semibold",
          className: M.header,
          id: f,
          children: R.intl.string(R.t["Pj/s/f"])
        }), (0, s.jsx)(u.Text, {
          color: "none",
          variant: "text-md/normal",
          className: M.headerCaption,
          children: R.intl.string(R.t["IL7/np"])
        })]
      }), (0, s.jsx)("div", {
        className: M.form,
        children: (0, s.jsx)(u.ua7, {
          text: m ? R.intl.string(R.t.PHjrpq) : null,
          "aria-label": !!m && R.intl.string(R.t.PHjrpq),
          children: e => (0, s.jsx)("div", q(F({}, e), {
            children: (0, s.jsx)(u.XZJ, {
              type: u.XZJ.Types.ROW,
              disabled: m,
              value: t.defaultMessageNotifications === L.bL.ONLY_MENTIONS,
              onChange: o,
              className: a()({
                [M.disabled]: m
              }),
              children: (0, s.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: R.intl.format(R.t.K8Eg4O, {
                  infoHook: () => (0, s.jsx)(u.ua7, {
                    text: R.intl.string(R.t["3h2WyM"]),
                    "aria-label": R.intl.string(R.t["3h2WyM"]),
                    children: e => (0, s.jsx)(u.d3s, F({
                      size: "xs",
                      color: "currentColor",
                      className: M.icon
                    }, e))
                  })
                })
              })
            })
          }))
        })
      }), (0, s.jsx)(u.ua7, {
        text: x ? R.intl.string(R.t.PHjrpq) : null,
        "aria-label": !!x && R.intl.string(R.t.PHjrpq),
        children: e => (0, s.jsx)("div", q(F({}, e), {
          className: M.checkboxOption,
          children: (0, s.jsx)(u.XZJ, {
            type: u.XZJ.Types.ROW,
            disabled: x,
            value: l,
            onChange: c,
            className: a()({
              [M.disabled]: x
            }),
            children: (0, s.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: R.intl.format(R.t.v8qCoK, {
                infoHook: () => (0, s.jsx)(u.ua7, {
                  text: R.intl.string(R.t["+IyaiY"]),
                  "aria-label": R.intl.string(R.t["+IyaiY"]),
                  children: e => (0, s.jsx)(u.d3s, F({
                    size: "xs",
                    color: "currentColor",
                    className: M.icon
                  }, e))
                })
              })
            })
          })
        }))
      }), (0, s.jsxs)("div", {
        className: M.form,
        children: [(0, s.jsx)(u.vwX, {
          children: R.intl.string(R.t["k+b2CQ"])
        }), (0, s.jsx)(u.R94, {
          type: u.geA.DESCRIPTION,
          className: M.description,
          children: R.intl.format(R.t["BwbW/f"], {
            communityGuidelines: O.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: O.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          })
        }), (0, s.jsx)(u.XZJ, {
          type: u.XZJ.Types.ROW,
          value: i,
          onChange: r,
          children: (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: R.intl.string(R.t["9AG3wM"])
          })
        })]
      })]
    })
  };

function Y(e) {
  let {
    guild: t
  } = e, {
    name: i,
    color: n
  } = (0, o.e7)([C.Z], () => C.Z.getEveryoneRole(t));
  return (0, s.jsx)("div", {
    className: M.__invalid_role,
    children: (0, s.jsxs)("span", {
      className: M.roleRow,
      children: [(0, s.jsx)(u.FhE, {
        className: M.roleDot,
        color: n.toString(),
        background: false,
        tooltip: false
      }), (0, s.jsx)(u.Text, {
        className: M.roleName,
        variant: "text-sm/medium",
        color: "interactive-active",
        children: i
      })]
    })
  })
}

function H(e) {
  let {
    enabledPermissions: t,
    onGetPermisisonName: i
  } = e;
  return (0, s.jsxs)("div", {
    className: M.tableContainer,
    children: [(0, s.jsx)(u.Text, {
      className: M.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: R.intl.string(R.t.xU8RDg)
    }), (0, s.jsx)("div", {
      className: M.permissionsTable,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: M.permissionRow,
        children: [(0, s.jsx)("div", {
          className: M.bulletWarning
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function z(e) {
  let {
    disabledPermissions: t,
    onGetPermisisonName: i
  } = e, n = R.intl.string(R.t.Yo5qlp);
  return t.length === y.$X.length && (n = R.intl.string(R.t.FgMS6u)), (0, s.jsxs)("div", {
    className: M.tableContainer,
    children: [(0, s.jsx)(u.Text, {
      className: M.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: n
    }), (0, s.jsx)("div", {
      className: M.permissionsTable,
      children: t.map((e, t) => (0, s.jsxs)("div", {
        className: M.permissionRow,
        children: [(0, s.jsx)("div", {
          className: M.bullet
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: i(e)
        })]
      }, t))
    })]
  })
}

function J(e) {
  let {
    permissions: t
  } = e, i = e => {
    switch (e.toString()) {
      case L.Plq.MENTION_EVERYONE.toString():
        return R.intl.string(R.t.yCpsQ0);
      case L.Plq.CREATE_GUILD_EXPRESSIONS.toString():
        return R.intl.string(R.t.vo2LdX);
      case L.Plq.MANAGE_GUILD_EXPRESSIONS.toString():
        return R.intl.string(R.t.cmp2W1);
      default:
        return (0, g.wt)(e)
    }
  }, {
    enabledPermissions: n,
    disabledPermissions: l
  } = t;
  return (0, s.jsxs)("div", {
    className: M.table,
    children: [0 !== n.length ? (0, s.jsx)(H, {
      enabledPermissions: n,
      onGetPermisisonName: i
    }) : null, (0, s.jsx)(z, {
      disabledPermissions: l,
      onGetPermisisonName: i
    })]
  })
}
let V = e => {
    let {
      guild: t,
      policyAccepted: i,
      onAcceptPolicy: l,
      headerId: a,
      theme: r
    } = e, o = (0, d.wj)(r) ? A : D;
    n.useEffect(() => {
      (0, w.BF)({
        fromStep: y.IO.BASICS,
        toStep: y.IO.FINISH,
        guildId: t.id
      })
    }, [t.id]);
    let m = n.useMemo(() => {
      let e = [],
        i = [];
      return y.$X.map(s => {
        T.oz(s, t) ? e.push(s) : i.push(s)
      }), {
        enabledPermissions: e,
        disabledPermissions: i
      }
    }, [t]);
    return (0, s.jsxs)("div", {
      className: M.container,
      children: [(0, s.jsxs)("div", {
        className: M.content,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: o,
          width: 80
        }), (0, s.jsx)(u.X6q, {
          variant: "heading-xl/semibold",
          className: M.updatedHeader,
          id: a,
          children: R.intl.string(R.t["Pj/s/f"])
        })]
      }), (0, s.jsxs)("div", {
        className: M.updatedForm,
        children: [(0, s.jsx)(u.vwX, {
          className: M.formTitle,
          children: R.intl.string(R.t["0q344e"])
        }), (0, s.jsxs)("div", {
          className: M.checklistRow,
          children: [(0, s.jsx)(u.owK, {
            size: "md",
            className: M.checklistIcon,
            color: c.Z.unsafe_rawColors.GREEN_360.css,
            secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: R.intl.format(R.t.K8Eg4O, {
              infoHook: () => (0, s.jsx)(u.ua7, {
                text: R.intl.string(R.t["3h2WyM"]),
                "aria-label": R.intl.string(R.t["3h2WyM"]),
                children: e => (0, s.jsx)(u.d3s, F({
                  size: "xs",
                  color: "currentColor",
                  className: M.icon
                }, e))
              })
            })
          })]
        }), (0, s.jsxs)("div", {
          className: M.checklistRow,
          children: [(0, s.jsx)(u.owK, {
            size: "md",
            className: M.checklistIcon,
            color: c.Z.unsafe_rawColors.GREEN_360.css,
            secondaryColor: c.Z.unsafe_rawColors.WHITE_500.css
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: R.intl.string(R.t.LfeFFh)
          }), (0, s.jsx)(Y, {
            guild: t
          })]
        }), (0, s.jsx)(J, {
          permissions: m
        })]
      }), (0, s.jsxs)("div", {
        className: M.updatedForm,
        children: [(0, s.jsx)(u.vwX, {
          className: M.formTitle,
          children: R.intl.string(R.t["k+b2CQ"])
        }), (0, s.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: M.description,
          children: R.intl.format(R.t["BwbW/f"], {
            communityGuidelines: O.Z.getArticleURL(L.BhN.PUBLIC_GUILD_GUILDLINES),
            typesOfGuilds: O.Z.getArticleURL(L.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
          })
        }), (0, s.jsx)(u.XZJ, {
          type: u.XZJ.Types.ROW,
          value: i,
          onChange: l,
          children: (0, s.jsx)(u.Text, {
            className: M.acceptText,
            variant: "text-md/medium",
            color: "header-primary",
            children: R.intl.string(R.t["9AG3wM"])
          })
        })]
      })]
    })
  },
  K = e => {
    var t;
    let {
      transitionState: i,
      onClose: l
    } = e;
    n.useEffect(() => {
      E.default.track(L.rMx.OPEN_MODAL, {
        type: y.tA
      })
    }, []);
    let {
      guild: a
    } = (0, o.cj)([b.Z], () => b.Z.getProps()), c = (0, o.e7)([N.Z], () => N.Z.theme), [d, u] = n.useState(false), [g, S] = n.useState(!y.$X.some(e => T.oz(e, a))), [O, w] = n.useState(y.b4), [P, Z] = n.useState(y.b4), [A] = n.useState(null == a ? true : a.defaultMessageNotifications), [D] = n.useState(null == a ? true : a.verificationLevel), [k] = n.useState(null == a ? true : a.explicitContentFilter), [G] = n.useState(g), Y = (0, o.e7)([C.Z], () => null != a ? C.Z.getEveryoneRole(a) : true), H = (0, o.e7)([j.ZP], () => null != a ? j.ZP.getChannels(a.id) : null), z = (0, f.Dt)(), {
      enabled: J
    } = (0, m.D2)(null != (t = null == a ? true : a.id) ? t : L.lds);
    if (null == a) return null;
    let K = [{
      value: y.b4,
      label: R.intl.string(R.t.Cla0ra)
    }];
    H[j.sH].forEach(e => {
      let {
        channel: t
      } = e;
      t.type === L.d4z.GUILD_TEXT && K.push({
        value: t.id,
        label: (0, x.F6)(t, I.default, _.Z, true)
      })
    });
    let Q = D !== L.sFg.NONE,
      $ = k === L.lxg.ALL_MEMBERS,
      ee = A === L.bL.ONLY_MENTIONS,
      et = async () => {
        if (null == Y || !d) return;
        let e = new Set(a.features);
        e.add(L.oNc.COMMUNITY);
        let t = g ? r.Od(Y.permissions, y.mu) : Y.permissions,
          i = q(F({}, Y), {
            permissions: t
          });
        t !== Y.permissions && await (0, h.Gf)(a.id, [i]), p.Z.updateGuild({
          features: e,
          rulesChannelId: O,
          publicUpdatesChannelId: P
        }), await p.Z.saveGuild(a.id, {
          features: e,
          rulesChannelId: O,
          verificationLevel: a.verificationLevel,
          explicitContentFilter: a.explicitContentFilter,
          publicUpdatesChannelId: P,
          defaultMessageNotifications: a.defaultMessageNotifications
        }), setTimeout(() => {
          l()
        }, 0)
      }, ei = (0, s.jsx)(B, {
        guild: a,
        disableVerificationLevel: Q,
        disableContentFilter: $,
        onAcceptVerificationLevel: (e, t) => {
          if (!t) return void p.Z.updateGuild({
            verificationLevel: D
          });
          t && p.Z.updateGuild({
            verificationLevel: L.sFg.LOW
          })
        },
        onAcceptContentFilter: (e, t) => {
          if (!t) return void p.Z.updateGuild({
            explicitContentFilter: k
          });
          p.Z.updateGuild({
            explicitContentFilter: L.lxg.ALL_MEMBERS
          })
        },
        headerId: z,
        theme: c
      }), es = (0, s.jsx)(U, {
        selectableChannels: K,
        onRuleChannelChange: e => {
          w(e)
        },
        onPublicUpdatesChannelChange: e => {
          Z(e)
        },
        ruleChannel: O,
        publicUpdatesChannel: P,
        headerId: z,
        theme: c,
        guildId: a.id
      }), en = J ? (0, s.jsx)(V, {
        guild: a,
        policyAccepted: d,
        onAcceptPolicy: (e, t) => {
          if (t) {
            u(true), ee || p.Z.updateGuild({
              defaultMessageNotifications: L.bL.ONLY_MENTIONS
            }), g || null == Y || S(true);
            return
          }
          u(false), ee && p.Z.updateGuild({
            defaultMessageNotifications: A
          }), g && null != Y && S(false)
        },
        headerId: z,
        theme: c
      }) : (0, s.jsx)(W, {
        guild: a,
        disableDefaultNotifications: ee,
        disableEveryoneRolePermissions: G,
        policyAccepted: d,
        everyoneRolePermissionsAccepted: g,
        onAcceptPolicy: (e, t) => {
          if (t) return void u(true);
          u(false)
        },
        onAcceptDefaultNotifications: (e, t) => {
          if (!t) return void p.Z.updateGuild({
            defaultMessageNotifications: A
          });
          p.Z.updateGuild({
            defaultMessageNotifications: L.bL.ONLY_MENTIONS
          })
        },
        onAcceptEveryoneRolePermissions: (e, t) => {
          null != Y && (t ? S(true) : S(false))
        },
        headerId: z,
        theme: c
      }), el = (0, s.jsx)("img", {
        alt: "",
        src: X,
        className: M.footerImage,
        width: 240
      }), ea = [{
        modalContent: ei,
        disableNextStep: a.explicitContentFilter !== L.lxg.ALL_MEMBERS || a.verificationLevel === L.sFg.NONE,
        overviewTitle: R.intl.string(R.t.PpYoSk)
      }, {
        modalContent: es,
        disableNextStep: null == O || null == P,
        overviewTitle: R.intl.string(R.t["7MEtIS"])
      }, {
        modalContent: en,
        disableNextStep: !d,
        overviewTitle: R.intl.string(R.t.Pj9P8P)
      }];
    return (0, s.jsx)(v.Z, {
      stepData: ea,
      title: R.intl.string(R.t["6U5XTk"]),
      transitionState: i,
      onClose: () => {
        l(), E.default.track(L.rMx.MODAL_DISMISSED, {
          type: y.tA
        })
      },
      completeButtonText: R.intl.string(R.t.XGl4bW),
      onComplete: et,
      overviewFooter: el,
      sequencerClassName: M.container,
      autoCloseOnComplete: false
    })
  }