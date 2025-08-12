/** Chunk was on 83744 **/
/** chunk id: 107807, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => ee
}), require("./953529.js"), require("./388685.js"), require("./642613.js"), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  d = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk749210 = require("./749210.js"),
  Chunk230711 = require("./230711.js"),
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
  Chunk143358 = require("./143358.js");

function q(e) {
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

function K(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      t.push.apply(t, c)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function W(e) {
  let {
    platformType: n,
    className: t
  } = e, o = (0, v.ZP)(), a = j.Z.get(n);
  return (0, c.jsx)("img", {
    src: (0, m.ap)(o) ? a.icon.lightSVG : a.icon.darkSVG,
    alt: "",
    className: i()(Y.platformIcon, t)
  })
}

function X(e) {
  let {
    channel: n,
    className: t
  } = e, o = (0, T.KS)(n);
  return (0, c.jsxs)("div", {
    className: i()(Y.channelName, t),
    children: [null != o ? (0, c.jsx)(o, {
      className: Y.channelNameIcon
    }) : null, (0, c.jsx)(p.X6q, {
      variant: "heading-lg/semibold",
      color: "text-default",
      className: Y.channelNameText,
      children: n.name
    })]
  })
}

function Q(e) {
  let n, {
      connectionType: t,
      connectionMetadataField: o,
      operator: a,
      value: i,
      result: l,
      description: r
    } = e,
    s = null;
  if (null != r) switch (a) {
    case H.iO.LESS_THAN:
      s = D.intl.format(D.t["2p7dAw"], {
        description: r,
        count: Math.max(0, Number(i) - 1)
      });
      break;
    case H.iO.GREATER_THAN:
      s = D.intl.format(D.t["2p7dAw"], {
        description: r,
        count: Math.max(0, Number(i) + 1)
      });
      break;
    default:
      s = r
  } else {
    let e;
    switch (a) {
      case H.iO.EQUAL:
        e = D.t["0BlpbG"], t === U.ABu.PAYPAL && o === H.PC.PAYPAL_VERIFIED && (e = D.t.dcSDhY);
        break;
      case H.iO.NOT_EQUAL:
        e = D.t.otcpTE;
        break;
      case H.iO.LESS_THAN:
        e = D.t.Ef35xs;
        break;
      case H.iO.GREATER_THAN:
        e = D.t["8W9OXV"];
        break;
      case true:
      case null:
        return null
    }
    if (null == (s = (0, V.n_)({
        connectionType: t,
        connectionMetadataField: o,
        operator: a,
        operatorText: e,
        value: i
      }))) return null
  }
  return n = l ? "header-secondary" : "text-danger", (0, c.jsx)(p.Text, {
    variant: "text-xs/normal",
    color: n,
    className: Y.connectionsCheck,
    children: s
  })
}

function J(e) {
  let {
    eligibilityStatesGroups: n,
    onPlatformConnect: t,
    onPlatformConnected: a
  } = e, [l, s] = o.useState({}), [u, m] = o.useState(0), [x, f] = o.useState(null), [b, _] = o.useState(null), v = o.useMemo(() => d().flatten(n), [n]), y = o.useMemo(() => d().groupBy(v, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")), [v]);
  o.useEffect(() => m(Date.now()), [v]), o.useEffect(() => {
    if (null == x) return;
    let e = y["".concat(x).concat(null != b ? ":".concat(b.id) : "")];
    null != e && e.every(e => e.result) && a(x, b)
  }, [y, x, b, a]);
  let g = (0, p.dQu)(h.Z.unsafe_rawColors.GREEN_330).hex();
  return (0, c.jsx)(c.Fragment, {
    children: Object.keys(y).sort((e, n) => {
      let t = y[e].every(e => e.result),
        c = y[n].every(e => e.result);
      returntrue === t && false === c ? 1 : false === t && true === c ? false : 0
    }).map(e => {
      var n, o, a;
      let d, h, m, x = y[e],
        b = x.find(e => null == e.operator),
        v = x.filter(e => null != e.operator),
        T = (null == b || b.result) && v.every(e => e.result),
        k = x.find(e => null != e.application),
        I = j.Z.get(e),
        S = null == I || I.enabled,
        E = null == k ? true : k.application,
        G = (null == E ? true : E.bot) != null ? new O.Z(E.bot) : null;
      V.SJ.includes(null != (n = null == E ? true : E.id) ? n : "") ? d = (0, c.jsx)(B.Z, {
        className: Y.botTag,
        color: g,
        size: 16
      }) : null != G && (d = (0, c.jsx)(A.Z, {
        className: Y.botTag,
        verified: G.isVerifiedBot()
      }));
      let P = l[null != (o = null == I ? true : I.type) ? o : H.Kt],
        w = !T && null != P && P <= u;
      return h = T ? (0, c.jsx)(p.dz2, {
        size: "md",
        color: "currentColor",
        className: Y.connectionsChecksGroupCheckmark
      }) : w ? (0, c.jsx)(C.zx, {
        size: C.zx.Sizes.TINY,
        look: C.zx.Looks.LINK,
        color: C.zx.Colors.LINK,
        className: Y.connectionsChecksGroupRetryButton,
        children: D.intl.string(D.t["5911LS"])
      }) : S ? (0, c.jsx)(M.Z, {
        direction: M.Z.Directions.RIGHT,
        className: Y.connectionsChecksGroupCaret
      }) : (0, c.jsx)(p.Text, {
        variant: "text-md/medium",
        color: "text-muted",
        children: D.intl.string(D.t["cEts6+"])
      }), (null == I ? true : I.type) === U.ABu.STEAM && (m = D.intl.string(D.t.NcZh6O)), (0, c.jsxs)(p.P3F, {
        className: i()(Y.connectionsChecksGroup, T ? Y.connectionsChecksGroupPassed : null, S ? null : Y.connectionsChecksGroupPlatformDisabled),
        onClick: !T && S ? () => {
          var e, n;
          return n = null != (e = null == I ? true : I.type) ? e : H.Kt, void((0, L.Z)({
            platformType: n,
            location: "Verified Roles Connect Accounts Modal",
            overrideUrl: null == E ? true : E.role_connections_verification_url
          }), s(K(q({}, l), {
            [n]: Date.now()
          })), f(n), _(null != E ? E : null), t())
        } : true,
        children: [!T && w ? (0, c.jsx)("div", {
          className: Y.connectionsChecksGroupRequirementsNotMet,
          children: (0, c.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: D.intl.string(D.t.UB3hKi)
          })
        }) : null, null != I ? (0, c.jsx)(W, {
          platformType: I.type
        }) : null, null != G ? (0, c.jsx)(N.Z, {
          user: G
        }) : null, (0, c.jsxs)("div", {
          className: Y.connectionsChecksGroupTextContainer,
          children: [(0, c.jsxs)("div", {
            className: Y.connectionsChecksGroupTextNameContainer,
            children: [(0, c.jsx)(p.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              children: null != (a = null == I ? true : I.name) ? a : null == E ? true : E.name
            }), d, null != m ? (0, c.jsx)(p.ua7, {
              text: m,
              children: e => (0, c.jsx)(p.d3s, K(q({
                size: "xs",
                color: "currentColor"
              }, e), {
                className: Y.connectionsChecksGroupTextNameInfoIcon
              }))
            }) : null]
          }), v.map(e => {
            let {
              connection_type: n,
              connection_metadata_field: t,
              operator: o,
              value: a,
              result: i,
              description: l
            } = e;
            return r()(null != t, "connectionMetadataField is null"), r()(null != o, "operator is null"), r()(null != a, "value is null"), (0, c.jsx)(Q, {
              connectionType: n,
              connectionMetadataField: t,
              operator: o,
              value: a,
              result: i,
              description: l
            }, t)
          })]
        }), h]
      }, e)
    })
  })
}

function $(e) {
  let n, t, a, {
      account: i,
      setShowPreviewInvisibleIcon: l,
      setShowPreviewMetadata: r
    } = e,
    [s, d] = o.useState(i.friendSync),
    [u, h] = o.useState(i.showActivity),
    [m, C] = o.useState(1 === i.metadataVisibility),
    [f, b] = o.useState(1 === i.visibility);
  (0, _.ZP)(() => {
    l(!f), r(m)
  });
  let N = j.Z.get(i.type);
  return U.BFP.has(i.type) && (n = (0, c.jsx)(p.j7V, {
    className: Y.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: true,
    value: s,
    onChange: e => {
      d(e), x.Z.setFriendSync(i.type, i.id, e)
    },
    children: (0, c.jsx)(p.Text, {
      variant: "text-sm/semibold",
      children: D.intl.string(D.t["+KCMSk"])
    })
  })), U.vbS.has(i.type) && (t = (0, c.jsx)(p.j7V, {
    className: Y.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: true,
    value: u,
    onChange: e => {
      h(e), x.Z.setShowActivity(i.type, i.id, e)
    },
    children: (0, c.jsx)(p.Text, {
      variant: "text-sm/semibold",
      children: D.intl.format(D.t["6u6J0t"], {
        platform: N.name
      })
    })
  })), true === N.hasMetadata && (a = (0, c.jsx)(p.j7V, {
    className: Y.accountConnectedPrivacyOptionsSwitchItem,
    hideBorder: true,
    value: m,
    disabled: !f,
    onChange: e => {
      r(e), C(e), x.Z.setMetadataVisibility(i.type, i.id, +!!e)
    },
    children: (0, c.jsx)(p.Text, {
      variant: "text-sm/semibold",
      children: D.intl.string(D.t.FYKGsL)
    })
  })), (0, c.jsxs)("div", {
    className: Y.accountConnectedPrivacyOptionsContainer,
    children: [(0, c.jsx)(p.j7V, {
      className: Y.accountConnectedPrivacyOptionsSwitchItem,
      hideBorder: true,
      value: f,
      onChange: e => {
        l(!e), b(e), x.Z.setVisibility(i.type, i.id, +!!e)
      },
      children: (0, c.jsx)(p.Text, {
        variant: "text-sm/semibold",
        children: D.intl.string(D.t.f7yOAQ)
      })
    }), a, t, n]
  })
}

function ee(e) {
  let {
    transitionState: n,
    onClose: t,
    guildId: a,
    role: i
  } = e, [l, s] = o.useState(0), [d, h] = o.useState(null), [m, C] = o.useState(false), [x, N] = o.useState(true), [_, A] = o.useState(false), [T, O] = o.useState(true), [M, V] = o.useState(false), L = (0, u.e7)([G.Z], () => G.Z.getAccounts()), B = (0, u.e7)([S.default], () => S.default.getId()), [H, K] = o.useState(null), [W, Q] = o.useState(null), [ee, en] = o.useState(null), et = (0, v.ZP)(), ec = (0, u.e7)([I.default], () => I.default.locale), eo = (0, u.e7)([P.ZP], () => P.ZP.getMember(a, B)), ea = Object.values((0, u.e7)([E.Z], () => E.Z.getMutableGuildChannelsForGuild(a))).filter(e => w.Z.can(U.Plq.VIEW_CHANNEL, e) && w.Z.can(U.Plq.SEND_MESSAGES, e) && (0, g.Z)(e).includes(i));

  function ei() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == t || t(), e && (0, p.Mr3)(F.s$, p.z1l)
  }

  function el() {
    ei(true), b.Z.open(U.oAB.AUTHORIZED_APPS)
  }

  function er() {
    ei(true), b.Z.open(U.oAB.CONNECTIONS)
  }
  async function es() {
    A(true), await f.Z.assignGuildRoleConnection(a, i.id)
  }

  function ed() {
    R.default.track(U.rMx.PASSPORT_CHALLENGE_STARTED, q({
      role_id: i.id
    }, (0, y.hH)(a)))
  }

  function eu(e) {
    let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    K(e), Q(n), s(1), null != n && (0, Z.nj)().then(e => {
      en(e)
    }).catch(() => {})
  }
  return o.useEffect(() => {
    f.Z.fetchGuildRoleConnectionsEligibility(a, i.id).then(e => {
      h(e), C(e.some(e => e.every(e => e.result))), N(false)
    })
  }, [a, i.id, L]), o.useEffect(() => {
    R.default.track(U.rMx.PASSPORT_CHALLENGE_VIEWED, q({
      role_id: i.id
    }, (0, y.hH)(a)))
  }, [a, i.id]), o.useEffect(() => {
    _ && null != eo && eo.roles.includes(i.id) && (A(false), ea.length > 0 ? s(2) : null == t || t(), R.default.track(U.rMx.PASSPORT_CHALLENGE_FINISHED, q({
      role_id: i.id
    }, (0, y.hH)(a))))
  }, [_, ea.length, eo, a, i.id, t]), (0, c.jsxs)(p.Y0X, {
    size: p.CgR.MEDIUM,
    transitionState: n,
    "aria-label": D.intl.string(D.t.zOZh3d),
    className: Y.modalRoot,
    parentComponent: "GuildRoleConnectionsConnectAccountsModal",
    children: [function() {
      switch (l) {
        case 0:
          return (0, c.jsxs)(p.xBx, {
            className: Y.header,
            separator: false,
            children: [(0, c.jsx)("div", {
              className: Y.headerText,
              children: (0, c.jsx)(p.X6q, {
                variant: "heading-xl/semibold",
                children: D.intl.string(D.t.zOZh3d)
              })
            }), (0, c.jsx)(p.olH, {
              onClick: () => ei()
            })]
          });
        case 1: {
          var e, n;
          r()(null != H, "lastPlatformConnected is null");
          let t = null != (n = null == W ? true : W.name) ? n : null == (e = j.Z.get(H)) ? true : e.name;
          return (0, c.jsxs)(p.xBx, {
            className: Y.header,
            separator: false,
            children: [(0, c.jsx)(p.X6q, {
              variant: "heading-xl/semibold",
              className: Y.headerText,
              children: D.intl.format(D.t.yQvgBA, {
                platformName: t
              })
            }), (0, c.jsx)(p.olH, {
              onClick: () => ei()
            })]
          })
        }
        case 2:
          return (0, c.jsxs)(p.xBx, {
            className: Y.header,
            separator: false,
            children: [(0, c.jsx)(p.X6q, {
              variant: "heading-xl/extrabold",
              className: Y.headerText,
              children: D.intl.string(D.t.najNd3)
            }), (0, c.jsx)(p.olH, {
              onClick: () => ei(true)
            })]
          });
        default:
          return null
      }
    }(), (0, c.jsx)(p.qBt, {
      step: l,
      steps: [0, 1, 2],
      children: function() {
        switch (l) {
          case 0: {
            let e = null != d && d.length > 1,
              n = null != d && 1 === d.length && 1 === d[0].length;
            return (0, c.jsx)(p.hzk, {
              children: x || null == d ? (0, c.jsx)(p.$jN, {
                className: Y.connectionsChecksGroups
              }) : (0, c.jsxs)(c.Fragment, {
                children: [(0, c.jsx)(p.Text, {
                  variant: "text-md/medium",
                  color: "header-secondary",
                  children: D.intl.format(n ? D.t.jHfRvb : e ? D.t.mOQ8k5 : D.t.U0olLi, {
                    roleName: i.name
                  })
                }), (0, c.jsx)(p.zJl, {
                  className: Y.connectionsChecksGroups,
                  children: (0, c.jsx)(J, {
                    eligibilityStatesGroups: d,
                    onPlatformConnect: ed,
                    onPlatformConnected: eu
                  })
                }), (0, c.jsx)(p.Text, {
                  variant: "text-xs/normal",
                  className: Y.footerText,
                  color: "header-secondary",
                  children: D.intl.format(D.t.gsgvxs, {
                    privacyPolicyUrl: U.EYA.PRIVACY,
                    onAuthorizedApplicationsClick: () => el(),
                    onConnectionsClick: () => er()
                  })
                })]
              })
            })
          }
          case 1: {
            r()(null != H, "lastPlatformConnected is null");
            let e = L.find(e => {
                let {
                  type: n
                } = e;
                return H === n
              }),
              n = null == ee ? true : ee.find(e => {
                let {
                  application: n
                } = e;
                return n.id === (null == W ? true : W.id)
              });
            return (0, c.jsxs)(p.hzk, {
              children: [(0, c.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: D.intl.format(D.t.gsgvxs, {
                  privacyPolicyUrl: U.EYA.PRIVACY,
                  onAuthorizedApplicationsClick: () => el(),
                  onConnectionsClick: () => er()
                })
              }), (0, c.jsx)("div", {
                className: Y.accountConnectedContainer,
                children: null == e && null == n ? (0, c.jsx)(p.$jN, {
                  className: Y.accountConnectedLoading
                }) : (0, c.jsxs)(c.Fragment, {
                  children: [null != e ? (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsxs)("div", {
                      className: Y.accountConnectedContainerChild,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: D.intl.string(D.t.TOjkEh)
                      }), (0, c.jsx)(k.E3, {
                        connectedAccount: e,
                        userId: B,
                        theme: et,
                        locale: ec,
                        className: Y.accountConnectedPreviewConnectedUserAccount,
                        showMetadata: T,
                        showInvisibleIcon: M
                      })]
                    }), (0, c.jsxs)("div", {
                      className: Y.accountConnectedContainerChild,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: D.intl.string(D.t.jndPhY)
                      }), (0, c.jsx)($, {
                        account: e,
                        setShowPreviewInvisibleIcon: V,
                        setShowPreviewMetadata: O
                      })]
                    })]
                  }) : null, null != n ? (0, c.jsxs)("div", {
                    className: Y.accountConnectedContainerChild,
                    children: [(0, c.jsxs)("div", {
                      className: Y.accountConnectedHeader,
                      children: [(0, c.jsx)(p.Text, {
                        variant: "eyebrow",
                        color: "header-secondary",
                        children: D.intl.string(D.t.TOjkEh)
                      }), (0, c.jsx)(p.ua7, {
                        text: D.intl.string(D.t.x3svVV),
                        children: e => (0, c.jsx)(p.d3s, q({
                          size: "xs",
                          color: "currentColor"
                        }, e))
                      })]
                    }), (0, c.jsx)(k.tH, {
                      applicationRoleConnection: n,
                      className: Y.accountConnectedPreviewConnectedUserAccount,
                      locale: ec
                    })]
                  }) : null]
                })
              })]
            })
          }
          case 2:
            return (0, c.jsxs)(p.hzk, {
              children: [(0, c.jsxs)("div", {
                className: Y.roleGranted,
                children: [(0, c.jsx)(z.Z, {
                  guildId: a,
                  className: Y.verifiedIcon,
                  role: i,
                  size: 24
                }), (0, c.jsx)(p.Text, {
                  variant: "text-lg/semibold",
                  color: "header-primary",
                  className: Y.roleGrantedName,
                  children: i.name
                })]
              }), (0, c.jsx)(p.zJl, {
                className: Y.channelsGranted,
                children: ea.map(e => (0, c.jsx)(X, {
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
      switch (l) {
        case 0:
          return (0, c.jsxs)(p.mzw, {
            children: [(0, c.jsx)(p.zxk, {
              variant: "primary",
              text: D.intl.string(D.t["8SuVoK"]),
              onClick: () => es(),
              disabled: x || !m || _
            }), n ? (0, c.jsx)("div", {
              className: Y.manageConnectionsFooterButton,
              children: (0, c.jsx)(p.Avr, {
                variant: "primary",
                text: D.intl.string(D.t.VXV55O),
                onClick: er
              })
            }) : null]
          });
        case 1:
          return (0, c.jsx)(p.mzw, {
            children: (0, c.jsx)(p.zxk, {
              variant: "primary",
              text: D.intl.string(D.t.i4jeWV),
              onClick: () => s(0)
            })
          });
        default:
          return (0, c.jsxs)(p.mzw, {
            children: [(0, c.jsx)(p.zxk, {
              variant: "primary",
              text: D.intl.string(D.t.cpT0Cg),
              onClick: () => ei(true)
            }), n ? (0, c.jsx)("div", {
              className: Y.manageConnectionsFooterButton,
              children: (0, c.jsx)(p.Avr, {
                variant: "primary",
                text: D.intl.string(D.t.VXV55O),
                onClick: er
              })
            }) : null]
          })
      }
    }()]
  })
}