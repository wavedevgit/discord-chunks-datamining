/** Chunk was on 58481 **/
/** chunk id: 488358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => et
}), require("./228524.js"), require("./896048.js"), require("./638769.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  d = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77468 = require("./77468.js"),
  Chunk686956 = require("./686956.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk58149 = require("./58149.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk920268 = require("./920268.js"),
  Chunk713654 = require("./713654.js"),
  Chunk46937 = require("./46937.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk962173 = require("./962173.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk619006 = require("./619006.js"),
  Chunk370480 = require("./370480.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk355971 = require("./355971.jsx"),
  Chunk967740 = require("./967740.jsx"),
  Chunk293260 = require("./293260.jsx"),
  Chunk783419 = require("./783419.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk102448 = require("./102448.js");

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function X(e) {
  let {
    platformType: t,
    className: n
  } = e, l = (0, y.Ay)(), c = N.A.get(t);
  return (0, a.jsx)("img", {
    src: (0, p.qB)(l) ? c.icon.lightSVG : c.icon.darkSVG,
    alt: "",
    className: o()(Q.tV, n)
  })
}

function Z(e) {
  let {
    channel: t,
    className: n
  } = e, l = (0, O.gU)(t);
  return (0, a.jsxs)("div", {
    className: o()(Q.HA, n),
    children: [null != l ? (0, a.jsx)(l, {
      className: Q.er
    }) : null, (0, a.jsx)(b.Heading, {
      variant: "heading-lg/semibold",
      color: "text-default",
      className: Q.Kw,
      children: t.name
    })]
  })
}

function q(e) {
  let t, {
      connectionType: n,
      connectionMetadataField: l,
      operator: c,
      value: o,
      result: i,
      description: r
    } = e,
    s = null;
  if (null != r) switch (c) {
    case $.so.LESS_THAN:
      s = K.intl.format(K.t["2p7dA3"], {
        description: r,
        count: Math.max(0, Number(o) - 1)
      });
      break;
    case $.so.GREATER_THAN:
      s = K.intl.format(K.t["2p7dA3"], {
        description: r,
        count: Math.max(0, Number(o) + 1)
      });
      break;
    default:
      s = r
  } else {
    let e;
    switch (c) {
      case $.so.EQUAL:
        e = K.t["0BlpbA"], n === z.fg2.PAYPAL && l === $.pK.PAYPAL_VERIFIED && (e = K.t.dcSDhW);
        break;
      case $.so.NOT_EQUAL:
        e = K.t.otcpTN;
        break;
      case $.so.LESS_THAN:
        e = K.t.Ef35xs;
        break;
      case $.so.GREATER_THAN:
        e = K.t["8W9OXU"];
        break;
      case true:
      case null:
        return null
    }
    if (null == (s = (0, V.RP)({
        connectionType: n,
        connectionMetadataField: l,
        operator: c,
        operatorText: e,
        value: o
      }))) return null
  }
  return t = i ? "text-default" : "text-feedback-critical", (0, a.jsx)(b.Text, {
    variant: "text-xs/normal",
    color: t,
    className: Q.E6,
    children: s
  })
}

function J(e) {
  let {
    eligibilityStatesGroups: t,
    onPlatformConnect: n,
    onPlatformConnected: c
  } = e, [i, s] = l.useState({}), [u, p] = l.useState(0), [f, _] = l.useState(null), [A, y] = l.useState(null), j = l.useMemo(() => d().flatten(t), [t]), v = l.useMemo(() => d().groupBy(j, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [j]);
  l.useEffect(() => p(Date.now()), [j]), l.useEffect(() => {
    if (null == f) return;
    let e = v["".concat(f).concat(null != A ? ":".concat(A.id) : "")];
    null == e || e.every(e => e.result) && c(f, A)
  }, [v, f, A, c]);
  let O = (0, b.rdh)(h.A.unsafe_rawColors.GREEN_330).hex();
  return (0, a.jsx)(a.Fragment, {
    children: Object.keys(v).sort((e, t) => {
      let n = v[e].every(e => e.result),
        a = v[t].every(e => e.result);
      returntrue === n && false === a ? 1 : false === n && true === a ? false : 0
    }).map(e => {
      var t, l, c;
      let d, h, p, f = v[e],
        A = f.find(e => null == e.operator),
        j = f.filter(e => null != e.operator),
        E = (null == A || A.result) && j.every(e => e.result),
        T = f.find(e => null != e.application),
        S = N.A.get(e),
        I = null == S || S.enabled,
        w = null == T ? true : T.application,
        P = (null == w ? true : w.bot) != null ? new k.A(w.bot) : null;
      V.iC.includes(null != (t = null == w ? true : w.id) ? t : "") ? d = (0, a.jsx)(F.A, {
        className: Q.AO,
        color: O,
        size: 16
      }) : null != P && (d = (0, a.jsx)(g.A, {
        className: Q.AO,
        verified: P.isVerifiedBot()
      }));
      let G = i[null != (l = null == S ? true : S.type) ? l : $.zR],
        R = !E && null != G && G <= u;
      return h = E ? (0, a.jsx)(b.A9s, {
        size: "md",
        color: "currentColor",
        className: Q.rA
      }) : R ? (0, a.jsx)(x.$n, {
        size: x.$n.Sizes.TINY,
        look: x.$n.Looks.LINK,
        color: x.$n.Colors.LINK,
        className: Q.gN,
        children: K.intl.string(K.t["5911Lb"])
      }) : I ? (0, a.jsx)(U.A, {
        direction: U.A.Directions.RIGHT,
        className: Q.t4
      }) : (0, a.jsx)(b.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: K.intl.string(K.t.cEts68)
      }), (null == S ? true : S.type) === z.fg2.STEAM && (p = K.intl.string(K.t.NcZh6K)), (0, a.jsxs)(b.DUT, {
        className: o()(Q.UY, E ? Q.o6 : null, I ? null : Q.pC),
        onClick: !E && I ? () => {
          var e, t, a, l;
          return t = null != (e = null == S ? true : S.type) ? e : $.zR, void((0, D.A)({
            platformType: t,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == w ? true : w.role_connections_verification_url
          }), s((a = W({}, i), l = l = {
            [t]: Date.now()
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              n.push.apply(n, a)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
          }), a)), _(t), y(null != w ? w : null), n())
        } : true,
        children: [!E && R ? (0, a.jsx)("div", {
          className: Q.Z1,
          children: (0, a.jsx)(b.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: K.intl.string(K.t.UB3hKo)
          })
        }) : null, null != S ? (0, a.jsx)(X, {
          platformType: S.type
        }) : null, null != P ? (0, a.jsx)(C.A, {
          user: P
        }) : null, (0, a.jsxs)("div", {
          className: Q.EZ,
          children: [(0, a.jsxs)("div", {
            className: Q.Pf,
            children: [(0, a.jsx)(b.Text, {
              variant: "text-md/medium",
              color: "text-strong",
              children: null != (c = null == S ? true : S.name) ? c : null == w ? true : w.name
            }), d, null != p ? (0, a.jsx)(m.m, {
              text: p,
              children: (0, a.jsx)(b.mir, {
                size: "xs",
                color: "currentColor",
                className: Q.$I
              })
            }) : null]
          }), j.map(e => {
            let {
              connection_type: t,
              connection_metadata_field: n,
              operator: l,
              value: c,
              result: o,
              description: i
            } = e;
            return r()(null != n, "connectionMetadataField is null"), r()(null != l, "operator is null"), r()(null != c, "value is null"), (0, a.jsx)(q, {
              connectionType: t,
              connectionMetadataField: n,
              operator: l,
              value: c,
              result: o,
              description: i
            }, n)
          })]
        }), h]
      }, e)
    })
  })
}

function ee(e) {
  let t, n, c, {
      account: o,
      setShowPreviewInvisibleIcon: i,
      setShowPreviewMetadata: r
    } = e,
    [s, d] = l.useState(o.friendSync),
    [u, h] = l.useState(o.showActivity),
    [m, p] = l.useState(1 === o.metadataVisibility),
    [x, _] = l.useState(1 === o.visibility);
  (0, A.Ay)(() => {
    i(!x), r(m)
  });
  let C = N.A.get(o.type);
  return z.txh.has(o.type) && (t = (0, a.jsx)(b.dOG, {
    label: K.intl.string(K.t["+KCMSi"]),
    checked: s,
    onChange: e => {
      d(e), f.A.setFriendSync(o.type, o.id, e)
    }
  })), z.ewM.has(o.type) && (n = (0, a.jsx)(b.dOG, {
    label: K.intl.format(K.t["6u6J0q"], {
      platform: C.name
    }),
    checked: u,
    onChange: e => {
      h(e), f.A.setShowActivity(o.type, o.id, e)
    }
  })), true === C.hasMetadata && (c = (0, a.jsx)(b.dOG, {
    label: K.intl.string(K.t.FYKGsL),
    checked: m,
    disabled: !x,
    onChange: e => {
      r(e), p(e), f.A.setMetadataVisibility(o.type, o.id, +!!e)
    }
  })), (0, a.jsxs)("div", {
    className: Q.ek,
    children: [(0, a.jsx)(b.dOG, {
      label: K.intl.string(K.t.f7yOAX),
      checked: x,
      onChange: e => {
        i(!e), _(e), f.A.setVisibility(o.type, o.id, +!!e)
      }
    }), c, n, t]
  })
}

function et(e) {
  let {
    transitionState: t,
    onClose: n,
    guildId: c,
    role: o
  } = e, [i, s] = l.useState(0), [d, h] = l.useState(null), [p, x] = l.useState(false), [f, C] = l.useState(true), [A, g] = l.useState(false), [O, k] = l.useState(true), [U, V] = l.useState(false), D = (0, u.bG)([G.A], () => G.A.getAccounts()), F = (0, u.bG)([w.default], () => w.default.getId()), [$, X] = l.useState(null), [q, et] = l.useState(null), [en, ea] = l.useState(null), el = (0, y.Ay)(), ec = (0, u.bG)([T.default], () => T.default.locale), eo = (0, u.bG)([R.Ay], () => R.Ay.getMember(c, F)), ei = Object.values((0, u.bG)([P.A], () => P.A.getMutableGuildChannelsForGuild(c))).filter(e => L.A.can(z.xBc.VIEW_CHANNEL, e) && L.A.can(z.xBc.SEND_MESSAGES, e) && (0, v.A)(e).includes(o));

  function er() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == n || n(), e && (0, b.OoC)(Y.CB, b.SYi)
  }

  function es() {
    er(true), (0, I.openUserSettings)(S.X.AUTHORIZED_APPS_PANEL, {
      section: z.nc_.AUTHORIZED_APPS
    })
  }

  function ed() {
    er(true), (0, I.openUserSettings)(S.X.CONNECTIONS_PANEL, {
      section: z.nc_.CONNECTIONS
    })
  }
  async function eu() {
    g(true), await _.A.assignGuildRoleConnection(c, o.id)
  }

  function eh() {
    M.default.track(z.HAw.PASSPORT_CHALLENGE_STARTED, W({
      role_id: o.id
    }, (0, j.H$)(c)))
  }

  function em(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    X(e), et(t), s(1), null != t && (0, H.XC)().then(e => {
      ea(e)
    }).catch(() => {})
  }
  return l.useEffect(() => {
    _.A.fetchGuildRoleConnectionsEligibility(c, o.id).then(e => {
      h(e), x(e.some(e => e.every(e => e.result))), C(false)
    })
  }, [c, o.id, D]), l.useEffect(() => {
    M.default.track(z.HAw.PASSPORT_CHALLENGE_VIEWED, W({
      role_id: o.id
    }, (0, j.H$)(c)))
  }, [c, o.id]), l.useEffect(() => {
    A && null != eo && eo.roles.includes(o.id) && (g(false), ei.length > 0 ? s(2) : null == n || n(), M.default.track(z.HAw.PASSPORT_CHALLENGE_FINISHED, W({
      role_id: o.id
    }, (0, j.H$)(c))))
  }, [A, ei.length, eo, c, o.id, n]), (0, a.jsxs)(b.EOs, {
    size: b.rIJ.MEDIUM,
    transitionState: t,
    "aria-label": K.intl.string(K.t.zOZh3R),
    className: Q.CR,
    parentComponent: "GuildRoleConnectionsConnectAccountsModal",
    children: [function() {
      switch (i) {
        case 0:
          return (0, a.jsxs)(b.rQ0, {
            className: Q.wx,
            separator: false,
            children: [(0, a.jsx)("div", {
              className: Q.TK,
              children: (0, a.jsx)(b.Heading, {
                variant: "heading-xl/semibold",
                children: K.intl.string(K.t.zOZh3R)
              })
            }), (0, a.jsx)(b.s_y, {
              onClick: () => er()
            })]
          });
        case 1: {
          var e, t;
          r()(null != $, "lastPlatformConnected is null");
          let n = null != (e = null == q ? true : q.name) ? e : null == (t = N.A.get($)) ? true : t.name;
          return (0, a.jsxs)(b.rQ0, {
            className: Q.wx,
            separator: false,
            children: [(0, a.jsx)(b.Heading, {
              variant: "heading-xl/semibold",
              className: Q.TK,
              children: K.intl.format(K.t.yQvgBO, {
                platformName: n
              })
            }), (0, a.jsx)(b.s_y, {
              onClick: () => er()
            })]
          })
        }
        case 2:
          return (0, a.jsxs)(b.rQ0, {
            className: Q.wx,
            separator: false,
            children: [(0, a.jsx)(b.Heading, {
              variant: "heading-xl/extrabold",
              className: Q.TK,
              children: K.intl.string(K.t.najNdz)
            }), (0, a.jsx)(b.s_y, {
              onClick: () => er(true)
            })]
          });
        default:
          return null
      }
    }(), (0, a.jsx)(b.YC2, {
      step: i,
      steps: [0, 1, 2],
      children: function() {
        switch (i) {
          case 0: {
            let e = null != d && d.length > 1,
              t = null != d && 1 === d.length && 1 === d[0].length;
            return (0, a.jsx)(b.$mQ, {
              children: f || null == d ? (0, a.jsx)(b.y$y, {
                className: Q.NL
              }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(b.Text, {
                  variant: "text-md/medium",
                  color: "text-default",
                  children: K.intl.format(t ? K.t.jHfRvZ : e ? K.t["mOQ8k+"] : K.t.U0olLg, {
                    roleName: o.name
                  })
                }), (0, a.jsx)(b.IpV, {
                  className: Q.NL,
                  children: (0, a.jsx)(J, {
                    eligibilityStatesGroups: d,
                    onPlatformConnect: eh,
                    onPlatformConnected: em
                  })
                }), (0, a.jsx)(b.Text, {
                  variant: "text-xs/normal",
                  className: Q.PJ,
                  color: "text-default",
                  children: K.intl.format(K.t.gsgvxh, {
                    privacyPolicyUrl: z.X7G.PRIVACY,
                    onAuthorizedApplicationsClick: () => es(),
                    onConnectionsClick: () => ed()
                  })
                })]
              })
            })
          }
          case 1: {
            r()(null != $, "lastPlatformConnected is null");
            let e = D.find(e => {
                let {
                  type: t
                } = e;
                return $ === t
              }),
              t = null == en ? true : en.find(e => {
                let {
                  application: t
                } = e;
                return t.id === (null == q ? true : q.id)
              });
            return (0, a.jsxs)(b.$mQ, {
              children: [(0, a.jsx)(b.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: K.intl.format(K.t.gsgvxh, {
                  privacyPolicyUrl: z.X7G.PRIVACY,
                  onAuthorizedApplicationsClick: () => es(),
                  onConnectionsClick: () => ed()
                })
              }), (0, a.jsx)("div", {
                className: Q.m1,
                children: null == e && null == t ? (0, a.jsx)(b.y$y, {
                  className: Q.bD
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [null != e ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                      className: Q.yk,
                      children: [(0, a.jsx)(b.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: K.intl.string(K.t.TOjkEg)
                      }), (0, a.jsx)(E.wQ, {
                        connectedAccount: e,
                        userId: F,
                        theme: el,
                        locale: ec,
                        className: Q.eT,
                        showMetadata: O,
                        showInvisibleIcon: U
                      })]
                    }), (0, a.jsxs)("div", {
                      className: Q.yk,
                      children: [(0, a.jsx)(b.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: K.intl.string(K.t.jndPhX)
                      }), (0, a.jsx)(ee, {
                        account: e,
                        setShowPreviewInvisibleIcon: V,
                        setShowPreviewMetadata: k
                      })]
                    })]
                  }) : null, null != t ? (0, a.jsxs)("div", {
                    className: Q.yk,
                    children: [(0, a.jsxs)("div", {
                      className: Q.a5,
                      children: [(0, a.jsx)(b.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: K.intl.string(K.t.TOjkEg)
                      }), (0, a.jsx)(m.m, {
                        text: K.intl.string(K.t.x3svVc),
                        children: (0, a.jsx)(b.mir, {
                          size: "xs",
                          color: "currentColor"
                        })
                      })]
                    }), (0, a.jsx)(E.Wc, {
                      applicationRoleConnection: t,
                      className: Q.eT,
                      locale: ec
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, a.jsxs)(b.$mQ, {
              children: [(0, a.jsxs)("div", {
                className: Q.kf,
                children: [(0, a.jsx)(B.A, {
                  guildId: c,
                  className: Q.w$,
                  role: o,
                  size: 24
                }), (0, a.jsx)(b.Text, {
                  variant: "text-lg/semibold",
                  color: "text-strong",
                  className: Q.jm,
                  children: o.name
                })]
              }), (0, a.jsx)(b.IpV, {
                className: Q.eu,
                children: ei.map(e => (0, a.jsx)(Z, {
                  channel: e
                }, e.id))
              })]
            });
          default:
            return null
        }
      }()
    }), function() {
      var e;
      let t = null != (e = null == d ? true : d.flat().some(e => null == e.application_id)) && e;
      switch (i) {
        case 0:
          return (0, a.jsxs)(b.jlY, {
            children: [(0, a.jsx)(b.Button, {
              variant: "primary",
              text: K.intl.string(K.t["8SuVoE"]),
              onClick: () => eu(),
              disabled: f || !p || A
            }), t ? (0, a.jsx)("div", {
              className: Q.yY,
              children: (0, a.jsx)(b.QWc, {
                variant: "primary",
                text: K.intl.string(K.t.VXV55P),
                onClick: ed
              })
            }) : null]
          });
        case 1:
          return (0, a.jsx)(b.jlY, {
            children: (0, a.jsx)(b.Button, {
              variant: "primary",
              text: K.intl.string(K.t.i4jeWR),
              onClick: () => s(0)
            })
          });
        default:
          return (0, a.jsxs)(b.jlY, {
            children: [(0, a.jsx)(b.Button, {
              variant: "primary",
              text: K.intl.string(K.t.cpT0Cq),
              onClick: () => er(true)
            }), t ? (0, a.jsx)("div", {
              className: Q.yY,
              children: (0, a.jsx)(b.QWc, {
                variant: "primary",
                text: K.intl.string(K.t.VXV55P),
                onClick: ed
              })
            }) : null]
          })
      }
    }()]
  })
}