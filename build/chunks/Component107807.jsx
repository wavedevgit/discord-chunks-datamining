/** Chunk was on 38413 **/
/** chunk id: 107807, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => en
}), require("./953529.js"), require("./388685.js"), require("./642613.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk749210 = require("./749210.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk367907 = require("./367907.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk277800 = require("./277800.js"),
  Chunk471445 = require("./471445.js"),
  Chunk819602 = require("./819602.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk553795 = require("./553795.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk228643 = require("./228643.js"),
  Chunk275759 = require("./275759.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk753194 = require("./753194.jsx"),
  Chunk225104 = require("./225104.jsx"),
  Chunk458034 = require("./458034.jsx"),
  Chunk856651 = require("./856651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969495 = require("./969495.js");

function K(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      c = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), c.forEach(function(n) {
      var c;
      c = t[n], n in e ? Object.defineProperty(e, n, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = c
    })
  }
  return e
}

function J(e) {
  let {
    platformType: n,
    className: t
  } = e, a = (0, b.ZP)(), o = j.Z.get(n);
  return (0, c.jsx)("img", {
    src: (0, x.ap)(a) ? o.icon.lightSVG : o.icon.darkSVG,
    alt: "",
    className: l()(q.platformIcon, t)
  })
}

function Q(e) {
  let {
    channel: n,
    className: t
  } = e, a = (0, I.KS)(n);
  return (0, c.jsxs)("div", {
    className: l()(q.channelName, t),
    children: [null != a ? (0, c.jsx)(a, {
      className: q.channelNameIcon
    }) : null, (0, c.jsx)(p.Heading, {
      variant: "heading-lg/semibold",
      color: "text-default",
      className: q.channelNameText,
      children: n.name
    })]
  })
}

function X(e) {
  let n, {
      connectionType: t,
      connectionMetadataField: a,
      operator: o,
      value: l,
      result: i,
      description: r
    } = e,
    s = null;
  if (null != r) switch (o) {
    case V.iO.LESS_THAN:
      s = Y.intl.format(Y.t["2p7dA3"], {
        description: r,
        count: Math.max(0, Number(l) - 1)
      });
      break;
    case V.iO.GREATER_THAN:
      s = Y.intl.format(Y.t["2p7dA3"], {
        description: r,
        count: Math.max(0, Number(l) + 1)
      });
      break;
    default:
      s = r
  } else {
    let e;
    switch (o) {
      case V.iO.EQUAL:
        e = Y.t["0BlpbA"], t === W.ABu.PAYPAL && a === V.PC.PAYPAL_VERIFIED && (e = Y.t.dcSDhW);
        break;
      case V.iO.NOT_EQUAL:
        e = Y.t.otcpTN;
        break;
      case V.iO.LESS_THAN:
        e = Y.t.Ef35xs;
        break;
      case V.iO.GREATER_THAN:
        e = Y.t["8W9OXU"];
        break;
      case true:
      case null:
        return null
    }
    if (null == (s = (0, D.n_)({
        connectionType: t,
        connectionMetadataField: a,
        operator: o,
        operatorText: e,
        value: l
      }))) return null
  }
  return n = i ? "text-default" : "text-feedback-critical", (0, c.jsx)(p.Text, {
    variant: "text-xs/normal",
    color: n,
    className: q.connectionsCheck,
    children: s
  })
}

function $(e) {
  let {
    eligibilityStatesGroups: n,
    onPlatformConnect: t,
    onPlatformConnected: o
  } = e, [i, s] = a.useState({}), [u, x] = a.useState(0), [f, N] = a.useState(null), [v, b] = a.useState(null), T = a.useMemo(() => d().flatten(n), [n]), y = a.useMemo(() => d().groupBy(T, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [T]);
  a.useEffect(() => x(Date.now()), [T]), a.useEffect(() => {
    if (null == f) return;
    let e = y["".concat(f).concat(null != v ? ":".concat(v.id) : "")];
    null != e && e.every(e => e.result) && o(f, v)
  }, [y, f, v, o]);
  let I = (0, p.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
  return (0, c.jsx)(c.Fragment, {
    children: Object.keys(y).sort((e, n) => {
      let t = y[e].every(e => e.result),
        c = y[n].every(e => e.result);
      returntrue === t && false === c ? 1 : false === t && true === c ? false : 0
    }).map(e => {
      var n, a, o;
      let d, h, x, f = y[e],
        v = f.find(e => null == e.operator),
        T = f.filter(e => null != e.operator),
        E = (null == v || v.result) && T.every(e => e.result),
        k = f.find(e => null != e.application),
        _ = j.Z.get(e),
        O = null == _ || _.enabled,
        S = null == k ? true : k.application,
        G = (null == S ? true : S.bot) != null ? new P.Z(S.bot) : null;
      D.SJ.includes(null != (n = null == S ? true : S.id) ? n : "") ? d = (0, c.jsx)(U.Z, {
        className: q.botTag,
        color: I,
        size: 16
      }) : null != G && (d = (0, c.jsx)(g.Z, {
        className: q.botTag,
        verified: G.isVerifiedBot()
      }));
      let w = i[null != (a = null == _ ? true : _.type) ? a : V.Kt],
        R = !E && null != w && w <= u;
      return h = E ? (0, c.jsx)(p.dz2, {
        size: "md",
        color: "currentColor",
        className: q.connectionsChecksGroupCheckmark
      }) : R ? (0, c.jsx)(C.zx, {
        size: C.zx.Sizes.TINY,
        look: C.zx.Looks.LINK,
        color: C.zx.Colors.LINK,
        className: q.connectionsChecksGroupRetryButton,
        children: Y.intl.string(Y.t["5911Lb"])
      }) : O ? (0, c.jsx)(B.Z, {
        direction: B.Z.Directions.RIGHT,
        className: q.connectionsChecksGroupCaret
      }) : (0, c.jsx)(p.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: Y.intl.string(Y.t.cEts68)
      }), (null == _ ? true : _.type) === W.ABu.STEAM && (x = Y.intl.string(Y.t.NcZh6K)), (0, c.jsxs)(p.P3F, {
        className: l()(q.connectionsChecksGroup, E ? q.connectionsChecksGroupPassed : null, O ? null : q.connectionsChecksGroupPlatformDisabled),
        onClick: !E && O ? () => {
          var e, n, c, a;
          return n = null != (e = null == _ ? true : _.type) ? e : V.Kt, void((0, H.Z)({
            platformType: n,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == S ? true : S.role_connections_verification_url
          }), s((c = K({}, i), a = a = {
            [n]: Date.now()
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var c = Object.getOwnPropertySymbols(e);
              t.push.apply(t, c)
            }
            return t
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(a, e))
          }), c)), N(n), b(null != S ? S : null), t())
        } : true,
        children: [!E && R ? (0, c.jsx)("div", {
          className: q.connectionsChecksGroupRequirementsNotMet,
          children: (0, c.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: Y.intl.string(Y.t.UB3hKo)
          })
        }) : null, null != _ ? (0, c.jsx)(J, {
          platformType: _.type
        }) : null, null != G ? (0, c.jsx)(A.Z, {
          user: G
        }) : null, (0, c.jsxs)("div", {
          className: q.connectionsChecksGroupTextContainer,
          children: [(0, c.jsxs)("div", {
            className: q.connectionsChecksGroupTextNameContainer,
            children: [(0, c.jsx)(p.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: null != (o = null == _ ? true : _.name) ? o : null == S ? true : S.name
            }), d, null != x ? (0, c.jsx)(m.u, {
              text: x,
              children: (0, c.jsx)(p.d3s, {
                size: "xs",
                color: "currentColor",
                className: q.connectionsChecksGroupTextNameInfoIcon
              })
            }) : null]
          }), T.map(e => {
            let {
              connection_type: n,
              connection_metadata_field: t,
              operator: a,
              value: o,
              result: l,
              description: i
            } = e;
            return r()(null != t, "connectionMetadataField is null"), r()(null != a, "operator is null"), r()(null != o, "value is null"), (0, c.jsx)(X, {
              connectionType: n,
              connectionMetadataField: t,
              operator: a,
              value: o,
              result: l,
              description: i
            }, t)
          })]
        }), h]
      }, e)
    })
  })
}

function ee(e) {
  let n, t, o, {
      account: l,
      setShowPreviewInvisibleIcon: i,
      setShowPreviewMetadata: r
    } = e,
    [s, d] = a.useState(l.friendSync),
    [u, h] = a.useState(l.showActivity),
    [m, x] = a.useState(1 === l.metadataVisibility),
    [C, N] = a.useState(1 === l.visibility);
  (0, v.ZP)(() => {
    i(!C), r(m)
  });
  let A = j.Z.get(l.type);
  return W.BFP.has(l.type) && (n = (0, c.jsx)(p.rsf, {
    label: Y.intl.string(Y.t["+KCMSi"]),
    checked: s,
    onChange: e => {
      d(e), f.Z.setFriendSync(l.type, l.id, e)
    }
  })), W.vbS.has(l.type) && (t = (0, c.jsx)(p.rsf, {
    label: Y.intl.format(Y.t["6u6J0q"], {
      platform: A.name
    }),
    checked: u,
    onChange: e => {
      h(e), f.Z.setShowActivity(l.type, l.id, e)
    }
  })), true === A.hasMetadata && (o = (0, c.jsx)(p.rsf, {
    label: Y.intl.string(Y.t.FYKGsL),
    checked: m,
    disabled: !C,
    onChange: e => {
      r(e), x(e), f.Z.setMetadataVisibility(l.type, l.id, +!!e)
    }
  })), (0, c.jsxs)("div", {
    className: q.accountConnectedPrivacyOptionsContainer,
    children: [(0, c.jsx)(p.rsf, {
      label: Y.intl.string(Y.t.f7yOAX),
      checked: C,
      onChange: e => {
        i(!e), N(e), f.Z.setVisibility(l.type, l.id, +!!e)
      }
    }), o, t, n]
  })
}

function en(e) {
  let {
    transitionState: n,
    onClose: t,
    guildId: o,
    role: l
  } = e, [i, s] = a.useState(0), [d, h] = a.useState(null), [x, C] = a.useState(false), [f, A] = a.useState(true), [v, g] = a.useState(false), [I, P] = a.useState(true), [B, D] = a.useState(false), H = (0, u.e7)([w.Z], () => w.Z.getAccounts()), U = (0, u.e7)([S.default], () => S.default.getId()), [V, J] = a.useState(null), [X, en] = a.useState(null), [et, ec] = a.useState(null), ea = (0, b.ZP)(), eo = (0, u.e7)([k.default], () => k.default.locale), el = (0, u.e7)([R.ZP], () => R.ZP.getMember(o, U)), ei = Object.values((0, u.e7)([G.Z], () => G.Z.getMutableGuildChannelsForGuild(o))).filter(e => Z.Z.can(W.Plq.VIEW_CHANNEL, e) && Z.Z.can(W.Plq.SEND_MESSAGES, e) && (0, y.Z)(e).includes(l));

  function er() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == t || t(), e && (0, p.Mr3)(z.s$, p.z1l)
  }

  function es() {
    er(true), (0, O.openUserSettings)(_.n.AUTHORIZED_APPS_PANEL, {
      section: W.oAB.AUTHORIZED_APPS
    })
  }

  function ed() {
    er(true), (0, O.openUserSettings)(_.n.CONNECTIONS_PANEL, {
      section: W.oAB.CONNECTIONS
    })
  }
  async function eu() {
    g(true), await N.Z.assignGuildRoleConnection(o, l.id)
  }

  function eh() {
    L.default.track(W.rMx.PASSPORT_CHALLENGE_STARTED, K({
      role_id: l.id
    }, (0, T.hH)(o)))
  }

  function em(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    J(e), en(n), s(1), null != n && (0, M.nj)().then(e => {
      ec(e)
    }).catch(() => {})
  }
  return a.useEffect(() => {
    N.Z.fetchGuildRoleConnectionsEligibility(o, l.id).then(e => {
      h(e), C(e.some(e => e.every(e => e.result))), A(false)
    })
  }, [o, l.id, H]), a.useEffect(() => {
    L.default.track(W.rMx.PASSPORT_CHALLENGE_VIEWED, K({
      role_id: l.id
    }, (0, T.hH)(o)))
  }, [o, l.id]), a.useEffect(() => {
    v && null != el && el.roles.includes(l.id) && (g(false), ei.length > 0 ? s(2) : null == t || t(), L.default.track(W.rMx.PASSPORT_CHALLENGE_FINISHED, K({
      role_id: l.id
    }, (0, T.hH)(o))))
  }, [v, ei.length, el, o, l.id, t]), (0, c.jsxs)(p.Y0X, {
    size: p.CgR.MEDIUM,
    transitionState: n,
    "aria-label": Y.intl.string(Y.t.zOZh3R),
    className: q.modalRoot,
    parentComponent: "GuildRoleConnectionsConnectAccountsModal",
    children: [function() {
      switch (i) {
        case 0:
          return (0, c.jsxs)(p.xBx, {
            className: q.header,
            separator: false,
            children: [(0, c.jsx)("div", {
              className: q.headerText,
              children: (0, c.jsx)(p.Heading, {
                variant: "heading-xl/semibold",
                children: Y.intl.string(Y.t.zOZh3R)
              })
            }), (0, c.jsx)(p.olH, {
              onClick: () => er()
            })]
          });
        case 1: {
          var e, n;
          r()(null != V, "lastPlatformConnected is null");
          let t = null != (n = null == X ? true : X.name) ? n : null == (e = j.Z.get(V)) ? true : e.name;
          return (0, c.jsxs)(p.xBx, {
            className: q.header,
            separator: false,
            children: [(0, c.jsx)(p.Heading, {
              variant: "heading-xl/semibold",
              className: q.headerText,
              children: Y.intl.format(Y.t.yQvgBO, {
                platformName: t
              })
            }), (0, c.jsx)(p.olH, {
              onClick: () => er()
            })]
          })
        }
        case 2:
          return (0, c.jsxs)(p.xBx, {
            className: q.header,
            separator: false,
            children: [(0, c.jsx)(p.Heading, {
              variant: "heading-xl/extrabold",
              className: q.headerText,
              children: Y.intl.string(Y.t.najNdz)
            }), (0, c.jsx)(p.olH, {
              onClick: () => er(true)
            })]
          });
        default:
          return null
      }
    }(), (0, c.jsx)(p.qBt, {
      step: i,
      steps: [0, 1, 2],
      children: function() {
        switch (i) {
          case 0: {
            let e = null != d && d.length > 1,
              n = null != d && 1 === d.length && 1 === d[0].length;
            return (0, c.jsx)(p.hzk, {
              children: f || null == d ? (0, c.jsx)(p.$jN, {
                className: q.connectionsChecksGroups
              }) : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)(p.Text, {
                  variant: "text-md/medium",
                  color: "text-default",
                  children: Y.intl.format(n ? Y.t.jHfRvZ : e ? Y.t["mOQ8k+"] : Y.t.U0olLg, {
                    roleName: l.name
                  })
                }), (0, c.jsx)(p.zJl, {
                  className: q.connectionsChecksGroups,
                  children: (0, c.jsx)($, {
                    eligibilityStatesGroups: d,
                    onPlatformConnect: eh,
                    onPlatformConnected: em
                  })
                }), (0, c.jsx)(p.Text, {
                  variant: "text-xs/normal",
                  className: q.footerText,
                  color: "text-default",
                  children: Y.intl.format(Y.t.gsgvxh, {
                    privacyPolicyUrl: W.EYA.PRIVACY,
                    onAuthorizedApplicationsClick: () => es(),
                    onConnectionsClick: () => ed()
                  })
                })]
              })
            })
          }
          case 1: {
            r()(null != V, "lastPlatformConnected is null");
            let e = H.find(e => {
                let {
                  type: n
                } = e;
                return V === n
              }),
              n = null == et ? true : et.find(e => {
                let {
                  application: n
                } = e;
                return n.id === (null == X ? true : X.id)
              });
            return (0, c.jsxs)(p.hzk, {
              children: [(0, c.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: Y.intl.format(Y.t.gsgvxh, {
                  privacyPolicyUrl: W.EYA.PRIVACY,
                  onAuthorizedApplicationsClick: () => es(),
                  onConnectionsClick: () => ed()
                })
              }), (0, c.jsx)("div", {
                className: q.accountConnectedContainer,
                children: null == e && null == n ? (0, c.jsx)(p.$jN, {
                  className: q.accountConnectedLoading
                }) : (0, c.jsxs)(c.Fragment, {
                  children: [null != e ? (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsxs)("div", {
                      className: q.accountConnectedContainerChild,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: Y.intl.string(Y.t.TOjkEg)
                      }), (0, c.jsx)(E.E3, {
                        connectedAccount: e,
                        userId: U,
                        theme: ea,
                        locale: eo,
                        className: q.accountConnectedPreviewConnectedUserAccount,
                        showMetadata: I,
                        showInvisibleIcon: B
                      })]
                    }), (0, c.jsxs)("div", {
                      className: q.accountConnectedContainerChild,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: Y.intl.string(Y.t.jndPhX)
                      }), (0, c.jsx)(ee, {
                        account: e,
                        setShowPreviewInvisibleIcon: D,
                        setShowPreviewMetadata: P
                      })]
                    })]
                  }) : null, null != n ? (0, c.jsxs)("div", {
                    className: q.accountConnectedContainerChild,
                    children: [(0, c.jsxs)("div", {
                      className: q.accountConnectedHeader,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "text-default",
                        children: Y.intl.string(Y.t.TOjkEg)
                      }), (0, c.jsx)(m.u, {
                        text: Y.intl.string(Y.t.x3svVc),
                        children: (0, c.jsx)(p.d3s, {
                          size: "xs",
                          color: "currentColor"
                        })
                      })]
                    }), (0, c.jsx)(E.tH, {
                      applicationRoleConnection: n,
                      className: q.accountConnectedPreviewConnectedUserAccount,
                      locale: eo
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, c.jsxs)(p.hzk, {
              children: [(0, c.jsxs)("div", {
                className: q.roleGranted,
                children: [(0, c.jsx)(F.Z, {
                  guildId: o,
                  className: q.verifiedIcon,
                  role: l,
                  size: 24
                }), (0, c.jsx)(p.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: q.roleGrantedName,
                  children: l.name
                })]
              }), (0, c.jsx)(p.zJl, {
                className: q.channelsGranted,
                children: ei.map(e => (0, c.jsx)(Q, {
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
      switch (i) {
        case 0:
          return (0, c.jsxs)(p.mzw, {
            children: [(0, c.jsx)(p.Button, {
              variant: "primary",
              text: Y.intl.string(Y.t["8SuVoE"]),
              onClick: () => eu(),
              disabled: f || !x || v
            }), n ? (0, c.jsx)("div", {
              className: q.manageConnectionsFooterButton,
              children: (0, c.jsx)(p.Avr, {
                variant: "primary",
                text: Y.intl.string(Y.t.VXV55P),
                onClick: ed
              })
            }) : null]
          });
        case 1:
          return (0, c.jsx)(p.mzw, {
            children: (0, c.jsx)(p.Button, {
              variant: "primary",
              text: Y.intl.string(Y.t.i4jeWR),
              onClick: () => s(0)
            })
          });
        default:
          return (0, c.jsxs)(p.mzw, {
            children: [(0, c.jsx)(p.Button, {
              variant: "primary",
              text: Y.intl.string(Y.t.cpT0Cq),
              onClick: () => er(true)
            }), n ? (0, c.jsx)("div", {
              className: q.manageConnectionsFooterButton,
              children: (0, c.jsx)(p.Avr, {
                variant: "primary",
                text: Y.intl.string(Y.t.VXV55P),
                onClick: ed
              })
            }) : null]
          })
      }
    }()]
  })
}