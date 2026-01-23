/** Chunk was on 80971 **/
/** chunk id: 488358, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => en
}), require("./228524.js"), require("./896048.js"), require("./638769.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function Q(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function Z(e) {
  let {
    platformType: n,
    className: t
  } = e, a = (0, v.Ay)(), c = A.A.get(n);
  return (0, l.jsx)("img", {
    src: (0, h.qB)(a) ? c.icon.lightSVG : c.icon.darkSVG,
    alt: "",
    className: i()($.tV, t)
  })
}

function X(e) {
  let {
    channel: n,
    className: t
  } = e, a = (0, T.gU)(n);
  return (0, l.jsxs)("div", {
    className: i()($.HA, t),
    children: [null != a ? (0, l.jsx)(a, {
      className: $.er
    }) : null, (0, l.jsx)(f.Heading, {
      variant: "heading-lg/semibold",
      color: "text-default",
      className: $.Kw,
      children: n.name
    })]
  })
}

function J(e) {
  let n, {
      connectionType: t,
      connectionMetadataField: a,
      operator: c,
      value: i,
      result: o,
      description: s
    } = e,
    r = null;
  if (null != s) switch (c) {
    case K.so.LESS_THAN:
      r = z.intl.format(z.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(i) - 1)
      });
      break;
    case K.so.GREATER_THAN:
      r = z.intl.format(z.t["2p7dA3"], {
        description: s,
        count: Math.max(0, Number(i) + 1)
      });
      break;
    default:
      r = s
  } else {
    let e;
    switch (c) {
      case K.so.EQUAL:
        e = z.t["0BlpbA"], t === W.fg2.PAYPAL && a === K.pK.PAYPAL_VERIFIED && (e = z.t.dcSDhW);
        break;
      case K.so.NOT_EQUAL:
        e = z.t.otcpTN;
        break;
      case K.so.LESS_THAN:
        e = z.t.Ef35xs;
        break;
      case K.so.GREATER_THAN:
        e = z.t["8W9OXU"];
        break;
      case true:
      case null:
        return null
    }
    if (null == (r = (0, M.RP)({
        connectionType: t,
        connectionMetadataField: a,
        operator: c,
        operatorText: e,
        value: i
      }))) return null
  }
  return n = o ? "text-default" : "text-feedback-critical", (0, l.jsx)(f.Text, {
    variant: "text-xs/normal",
    color: n,
    className: $.E6,
    children: r
  })
}

function q(e) {
  let {
    eligibilityStatesGroups: n,
    onPlatformConnect: t,
    onPlatformConnected: c
  } = e, [o, r] = a.useState({}), [u, h] = a.useState(0), [_, b] = a.useState(null), [N, v] = a.useState(null), C = a.useMemo(() => d().flatten(n), [n]), g = a.useMemo(() => d().groupBy(C, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [C]);
  a.useEffect(() => h(Date.now()), [C]), a.useEffect(() => {
    if (null == _) return;
    let e = g["".concat(_).concat(null != N ? ":".concat(N.id) : "")];
    null == e || e.every(e => e.result) && c(_, N)
  }, [g, _, N, c]);
  let T = (0, f.rdh)(m.A.unsafe_rawColors.GREEN_330).hex();
  return (0, l.jsx)(l.Fragment, {
    children: Object.keys(g).sort((e, n) => {
      let t = g[e].every(e => e.result),
        l = g[n].every(e => e.result);
      returntrue === t && false === l ? 1 : false === t && true === l ? false : 0
    }).map(e => {
      var n, a, c;
      let d, m, h, _ = g[e],
        N = _.find(e => null == e.operator),
        C = _.filter(e => null != e.operator),
        E = (null == N || N.result) && C.every(e => e.result),
        O = _.find(e => null != e.application),
        I = A.A.get(e),
        S = null == I || I.enabled,
        w = null == O ? true : O.application,
        P = (null == w ? true : w.bot) != null ? new k.A(w.bot) : null;
      M.iC.includes(null != (n = null == w ? true : w.id) ? n : "") ? d = (0, l.jsx)(F.A, {
        className: $.AO,
        color: T,
        size: 16
      }) : null != P && (d = (0, l.jsx)(y.A, {
        className: $.AO,
        verified: P.isVerifiedBot()
      }));
      let G = o[null != (a = null == I ? true : I.type) ? a : K.zR],
        R = !E && null != G && G <= u;
      return m = E ? (0, l.jsx)(f.A9s, {
        size: "md",
        color: "currentColor",
        className: $.rA
      }) : R ? (0, l.jsx)(p.$n, {
        size: p.$n.Sizes.TINY,
        look: p.$n.Looks.LINK,
        color: p.$n.Colors.LINK,
        className: $.gN,
        children: z.intl.string(z.t["5911Lb"])
      }) : S ? (0, l.jsx)(L.A, {
        direction: L.A.Directions.RIGHT,
        className: $.t4
      }) : (0, l.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: z.intl.string(z.t.cEts68)
      }), (null == I ? true : I.type) === W.fg2.STEAM && (h = z.intl.string(z.t.NcZh6K)), (0, l.jsxs)(f.DUT, {
        className: i()($.UY, E ? $.o6 : null, S ? null : $.pC),
        onClick: !E && S ? () => {
          var e, n, l, a;
          return n = null != (e = null == I ? true : I.type) ? e : K.zR, void((0, V.A)({
            platformType: n,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == w ? true : w.role_connections_verification_url
          }), r((l = Q({}, o), a = a = {
            [n]: Date.now()
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              t.push.apply(t, l)
            }
            return t
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
          }), l)), b(n), v(null != w ? w : null), t())
        } : true,
        children: [!E && R ? (0, l.jsx)("div", {
          className: $.Z1,
          children: (0, l.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: z.intl.string(z.t.UB3hKo)
          })
        }) : null, null != I ? (0, l.jsx)(Z, {
          platformType: I.type
        }) : null, null != P ? (0, l.jsx)(j.A, {
          user: P
        }) : null, (0, l.jsxs)("div", {
          className: $.EZ,
          children: [(0, l.jsxs)("div", {
            className: $.Pf,
            children: [(0, l.jsx)(f.Text, {
              variant: "text-md/medium",
              color: "text-strong",
              children: null != (c = null == I ? true : I.name) ? c : null == w ? true : w.name
            }), d, null != h ? (0, l.jsx)(x.m, {
              text: h,
              children: (0, l.jsx)(f.mir, {
                size: "xs",
                color: "currentColor",
                className: $.$I
              })
            }) : null]
          }), C.map(e => {
            let {
              connection_type: n,
              connection_metadata_field: t,
              operator: a,
              value: c,
              result: i,
              description: o
            } = e;
            return s()(null != t, "connectionMetadataField is null"), s()(null != a, "operator is null"), s()(null != c, "value is null"), (0, l.jsx)(J, {
              connectionType: n,
              connectionMetadataField: t,
              operator: a,
              value: c,
              result: i,
              description: o
            }, t)
          })]
        }), m]
      }, e)
    })
  })
}

function ee(e) {
  let n, t, c, {
      account: i,
      setShowPreviewInvisibleIcon: o,
      setShowPreviewMetadata: s
    } = e,
    [r, d] = a.useState(i.friendSync),
    [u, m] = a.useState(i.showActivity),
    [x, h] = a.useState(1 === i.metadataVisibility),
    [p, b] = a.useState(1 === i.visibility);
  (0, N.Ay)(() => {
    o(!p), s(x)
  });
  let j = A.A.get(i.type);
  return W.txh.has(i.type) && (n = (0, l.jsx)(f.dOG, {
    label: z.intl.string(z.t["+KCMSi"]),
    checked: r,
    onChange: e => {
      d(e), _.A.setFriendSync(i.type, i.id, e)
    }
  })), W.ewM.has(i.type) && (t = (0, l.jsx)(f.dOG, {
    label: z.intl.format(z.t["6u6J0q"], {
      platform: j.name
    }),
    checked: u,
    onChange: e => {
      m(e), _.A.setShowActivity(i.type, i.id, e)
    }
  })), true === j.hasMetadata && (c = (0, l.jsx)(f.dOG, {
    label: z.intl.string(z.t.FYKGsL),
    checked: x,
    disabled: !p,
    onChange: e => {
      s(e), h(e), _.A.setMetadataVisibility(i.type, i.id, +!!e)
    }
  })), (0, l.jsxs)("div", {
    className: $.ek,
    children: [(0, l.jsx)(f.dOG, {
      label: z.intl.string(z.t.f7yOAX),
      checked: p,
      onChange: e => {
        o(!e), b(e), _.A.setVisibility(i.type, i.id, +!!e)
      }
    }), c, t, n]
  })
}

function en(e) {
  let {
    transitionState: n,
    onClose: t,
    guildId: c,
    role: i
  } = e, [o, r] = a.useState(0), [d, m] = a.useState(null), [h, p] = a.useState(false), [_, j] = a.useState(true), [N, y] = a.useState(false), [T, k] = a.useState(true), [L, M] = a.useState(false), V = (0, u.bG)([G.A], () => G.A.getAccounts()), F = (0, u.bG)([w.default], () => w.default.getId()), [K, Z] = a.useState(null), [J, en] = a.useState(null), [et, el] = a.useState(null), ea = (0, v.Ay)(), ec = (0, u.bG)([O.default], () => O.default.locale), ei = (0, u.bG)([R.Ay], () => R.Ay.getMember(c, F)), eo = Object.values((0, u.bG)([P.A], () => P.A.getMutableGuildChannelsForGuild(c))).filter(e => D.A.can(W.xBc.VIEW_CHANNEL, e) && D.A.can(W.xBc.SEND_MESSAGES, e) && (0, g.A)(e).includes(i));

  function es() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == t || t(), e && (0, f.OoC)(Y.CB, f.SYi)
  }

  function er() {
    es(true), (0, S.openUserSettings)(I.X.AUTHORIZED_APPS_PANEL, {
      section: W.nc_.AUTHORIZED_APPS
    })
  }

  function ed() {
    es(true), (0, S.openUserSettings)(I.X.CONNECTIONS_PANEL, {
      section: W.nc_.CONNECTIONS
    })
  }
  async function eu() {
    y(true), await b.A.assignGuildRoleConnection(c, i.id)
  }

  function em() {
    U.default.track(W.HAw.PASSPORT_CHALLENGE_STARTED, Q({
      role_id: i.id
    }, (0, C.H$)(c)))
  }

  function ex(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    Z(e), en(n), r(1), null != n && (0, H.XC)().then(e => {
      el(e)
    }).catch(() => {})
  }
  return a.useEffect(() => {
    b.A.fetchGuildRoleConnectionsEligibility(c, i.id).then(e => {
      m(e), p(e.some(e => e.every(e => e.result))), j(false)
    })
  }, [c, i.id, V]), a.useEffect(() => {
    U.default.track(W.HAw.PASSPORT_CHALLENGE_VIEWED, Q({
      role_id: i.id
    }, (0, C.H$)(c)))
  }, [c, i.id]), a.useEffect(() => {
    N && null != ei && ei.roles.includes(i.id) && (y(false), eo.length > 0 ? r(2) : null == t || t(), U.default.track(W.HAw.PASSPORT_CHALLENGE_FINISHED, Q({
      role_id: i.id
    }, (0, C.H$)(c))))
  }, [N, eo.length, ei, c, i.id, t]), (0, l.jsxs)(f.EOs, {
    size: f.rIJ.MEDIUM,
    transitionState: n,
    "aria-label": z.intl.string(z.t.zOZh3R),
    className: $.CR,
    parentComponent: "GuildRoleConnectionsConnectAccountsModal",
    children: [function() {
      switch (o) {
        case 0:
          return (0, l.jsxs)(f.rQ0, {
            className: $.wx,
            separator: false,
            children: [(0, l.jsx)("div", {
              className: $.TK,
              children: (0, l.jsx)(f.Heading, {
                variant: "heading-xl/semibold",
                children: z.intl.string(z.t.zOZh3R)
              })
            }), (0, l.jsx)(f.s_y, {
              onClick: () => es()
            })]
          });
        case 1: {
          var e, n;
          s()(null != K, "lastPlatformConnected is null");
          let t = null != (e = null == J ? true : J.name) ? e : null == (n = A.A.get(K)) ? true : n.name;
          return (0, l.jsxs)(f.rQ0, {
            className: $.wx,
            separator: false,
            children: [(0, l.jsx)(f.Heading, {
              variant: "heading-xl/semibold",
              className: $.TK,
              children: z.intl.format(z.t.yQvgBO, {
                platformName: t
              })
            }), (0, l.jsx)(f.s_y, {
              onClick: () => es()
            })]
          })
        }
        case 2:
          return (0, l.jsxs)(f.rQ0, {
            className: $.wx,
            separator: false,
            children: [(0, l.jsx)(f.Heading, {
              variant: "heading-xl/extrabold",
              className: $.TK,
              children: z.intl.string(z.t.najNdz)
            }), (0, l.jsx)(f.s_y, {
              onClick: () => es(true)
            })]
          });
        default:
          return null
      }
    }(), (0, l.jsx)(f.YC2, {
      step: o,
      steps: [0, 1, 2],
      children: function() {
        switch (o) {
          case 0: {
            let e = null != d && d.length > 1,
              n = null != d && 1 === d.length && 1 === d[0].length;
            return (0, l.jsx)(f.$mQ, {
              children: _ || null == d ? (0, l.jsx)(f.y$y, {
                className: $.NL
              }) : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(f.Text, {
                  variant: "text-md/medium",
                  color: "text-default",
                  children: z.intl.format(n ? z.t.jHfRvZ : e ? z.t["mOQ8k+"] : z.t.U0olLg, {
                    roleName: i.name
                  })
                }), (0, l.jsx)(f.IpV, {
                  className: $.NL,
                  children: (0, l.jsx)(q, {
                    eligibilityStatesGroups: d,
                    onPlatformConnect: em,
                    onPlatformConnected: ex
                  })
                }), (0, l.jsx)(f.Text, {
                  variant: "text-xs/normal",
                  className: $.PJ,
                  color: "text-default",
                  children: z.intl.format(z.t.gsgvxh, {
                    privacyPolicyUrl: W.X7G.PRIVACY,
                    onAuthorizedApplicationsClick: () => er(),
                    onConnectionsClick: () => ed()
                  })
                })]
              })
            })
          }
          case 1: {
            s()(null != K, "lastPlatformConnected is null");
            let e = V.find(e => {
                let {
                  type: n
                } = e;
                return K === n
              }),
              n = null == et ? true : et.find(e => {
                let {
                  application: n
                } = e;
                return n.id === (null == J ? true : J.id)
              });
            return (0, l.jsxs)(f.$mQ, {
              children: [(0, l.jsx)(f.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: z.intl.format(z.t.gsgvxh, {
                  privacyPolicyUrl: W.X7G.PRIVACY,
                  onAuthorizedApplicationsClick: () => er(),
                  onConnectionsClick: () => ed()
                })
              }), (0, l.jsx)("div", {
                className: $.m1,
                children: null == e && null == n ? (0, l.jsx)(f.y$y, {
                  className: $.bD
                }) : (0, l.jsxs)(l.Fragment, {
                  children: [null != e ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                      className: $.yk,
                      children: [(0, l.jsx)(f.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: z.intl.string(z.t.TOjkEg)
                      }), (0, l.jsx)(E.wQ, {
                        connectedAccount: e,
                        userId: F,
                        theme: ea,
                        locale: ec,
                        className: $.eT,
                        showMetadata: T,
                        showInvisibleIcon: L
                      })]
                    }), (0, l.jsxs)("div", {
                      className: $.yk,
                      children: [(0, l.jsx)(f.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: z.intl.string(z.t.jndPhX)
                      }), (0, l.jsx)(ee, {
                        account: e,
                        setShowPreviewInvisibleIcon: M,
                        setShowPreviewMetadata: k
                      })]
                    })]
                  }) : null, null != n ? (0, l.jsxs)("div", {
                    className: $.yk,
                    children: [(0, l.jsxs)("div", {
                      className: $.a5,
                      children: [(0, l.jsx)(f.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: z.intl.string(z.t.TOjkEg)
                      }), (0, l.jsx)(x.m, {
                        text: z.intl.string(z.t.x3svVc),
                        children: (0, l.jsx)(f.mir, {
                          size: "xs",
                          color: "currentColor"
                        })
                      })]
                    }), (0, l.jsx)(E.Wc, {
                      applicationRoleConnection: n,
                      className: $.eT,
                      locale: ec
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, l.jsxs)(f.$mQ, {
              children: [(0, l.jsxs)("div", {
                className: $.kf,
                children: [(0, l.jsx)(B.A, {
                  guildId: c,
                  className: $.w$,
                  role: i,
                  size: 24
                }), (0, l.jsx)(f.Text, {
                  variant: "text-lg/semibold",
                  color: "text-strong",
                  className: $.jm,
                  children: i.name
                })]
              }), (0, l.jsx)(f.IpV, {
                className: $.eu,
                children: eo.map(e => (0, l.jsx)(X, {
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
      let n = null != (e = null == d ? true : d.flat().some(e => null == e.application_id)) && e;
      switch (o) {
        case 0:
          return (0, l.jsxs)(f.jlY, {
            children: [(0, l.jsx)(f.Button, {
              variant: "primary",
              text: z.intl.string(z.t["8SuVoE"]),
              onClick: () => eu(),
              disabled: _ || !h || N
            }), n ? (0, l.jsx)("div", {
              className: $.yY,
              children: (0, l.jsx)(f.QWc, {
                variant: "primary",
                text: z.intl.string(z.t.VXV55P),
                onClick: ed
              })
            }) : null]
          });
        case 1:
          return (0, l.jsx)(f.jlY, {
            children: (0, l.jsx)(f.Button, {
              variant: "primary",
              text: z.intl.string(z.t.i4jeWR),
              onClick: () => r(0)
            })
          });
        default:
          return (0, l.jsxs)(f.jlY, {
            children: [(0, l.jsx)(f.Button, {
              variant: "primary",
              text: z.intl.string(z.t.cpT0Cq),
              onClick: () => es(true)
            }), n ? (0, l.jsx)("div", {
              className: $.yY,
              children: (0, l.jsx)(f.QWc, {
                variant: "primary",
                text: z.intl.string(z.t.VXV55P),
                onClick: ed
              })
            }) : null]
          })
      }
    }()]
  })
}