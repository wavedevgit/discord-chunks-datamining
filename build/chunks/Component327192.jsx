/** Chunk was on web.js **/
/** chunk id: 327192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk457330 = require("./457330.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk23551 = require("./23551.jsx"),
  Chunk468026 = require("./468026.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk275759 = require("./275759.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk888496 = require("./888496.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk297700 = require("./297700.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk706454 = require("./706454.js"),
  Chunk349728 = require("./349728.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk205266 = require("./205266.jsx"),
  Chunk216153 = require("./216153.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465631 = require("./465631.js"),
  Chunk10198 = require("./10198.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let z = e => {
  var t, n;
  let i, {
      integration: a
    } = e,
    {
      isJoining: o,
      joinErrorMessage: l,
      showJoinErrorMessage: c
    } = (0, s.cj)([A.Z], () => ({
      isJoining: A.Z.isJoining(a.id),
      joinErrorMessage: "" === A.Z.joinErrorMessage(a.id) ? Z.intl.string(Z.t.j2d6Ki) : A.Z.joinErrorMessage(a.id),
      showJoinErrorMessage: true !== A.Z.joinErrorMessage(a.id)
    }), [a.id]);

  function u() {
    _.Z.joinServer(a.id, () => {})
  }
  return null == (0, s.e7)([C.Z], () => C.Z.getGuild(a.guild.id), [a.guild.id]) && (i = (0, r.jsx)(d.zxk, {
    size: "sm",
    onClick: u,
    disabled: o,
    variant: "primary",
    text: o ? Z.intl.string(Z.t.RXvQQk) : Z.intl.string(Z.t.XpeFYm)
  })), (0, r.jsxs)("div", {
    className: F.integrationWrapper,
    children: [(0, r.jsxs)("div", {
      className: F.integration,
      children: [(0, r.jsx)(T.Z, {
        size: T.Z.Sizes.SMALL,
        guild: a.guild,
        className: F.guildIcon
      }), (0, r.jsxs)("div", {
        className: F.integrationInner,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: a.guild.name
        }), (0, r.jsx)(d.eee, {
          href: null == (n = E.Z.get(a.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, a.account),
          children: (0, r.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: a.account.name
          })
        })]
      }), i]
    }), c && (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: F.integrationError,
      children: l
    })]
  })
};

function q(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: a,
    locale: o
  } = e, [s, l] = i.useState(n.friendSync), [f, p] = i.useState(n.visibility), [h, g] = i.useState(n.metadataVisibility), [I, T] = i.useState(n.showActivity), [A, C] = i.useState(null), [N, R] = i.useState(null), [P, D] = i.useState(false), [j, B] = i.useState([]), V = (0, b.rR)(n.type), H = E.Z.get(V);
  i.useEffect(() => {
    l(n.friendSync), p(n.visibility), g(n.metadataVisibility), T(n.showActivity)
  }, [n]);
  let W = {
      inProgressVisibility: A,
      inProgressMetadataVisibility: N
    },
    q = i.useRef(W);

  function X(e) {
    var t;
    let n = E.Z.get(e.type),
      i = E.Z.get(V),
      o = "1" === (null != (t = e.metadata) ? t : {})[G.PC.TWITTER_VERIFIED],
      s = null;
    return n.type === U.ABu.TWITTER && o && (s = (0, r.jsx)(d.ua7, {
      text: Z.intl.string(Z.t.Jebrw8),
      children: e => (0, r.jsx)(S.Z, K(Y({}, e), {
        color: c.Z.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(d.kmB, {
          size: "xs",
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      }))
    })), (0, r.jsxs)("div", {
      className: F.connectionHeader,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: F.connectionIcon,
        src: (0, u.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: F.connectionAccountLabelContainer,
          children: [(0, r.jsx)(d.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: F.connectionAccountValue,
            children: e.name
          }), null != s && (0, r.jsx)("div", {
            className: F.connectionAccountLabelVerified,
            children: s
          })]
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: F.connectionAccountLabel,
          children: i.name
        })]
      }), (0, r.jsx)(d.P3F, {
        className: F.connectionDelete,
        onClick: er,
        "aria-label": Z.intl.string(Z.t.ppppRE),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, r.jsx)(d.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }

  function Q(e) {
    return e.twoWayLink ? null : e.type === U.ABu.XBOX ? (0, r.jsx)("div", {
      className: F.upsellWrapper,
      children: (0, r.jsx)(k.Y, {})
    }) : e.type === U.ABu.PLAYSTATION ? (0, r.jsx)("div", {
      className: F.upsellWrapper,
      children: (0, r.jsx)(M.t, {})
    }) : null
  }

  function J(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      a = (0, y.FI)(n[G.PC.CREATED_AT], o);
    switch (e.type) {
      case U.ABu.REDDIT:
        i = (0, v.oP)(n, F.metadataItem);
        break;
      case U.ABu.STEAM:
        i = (0, v.Dq)(n, F.metadataItem);
        break;
      case U.ABu.BLUESKY:
      case U.ABu.TWITTER:
      case U.ABu.MASTODON:
        i = (0, v.rJ)(n, F.metadataItem);
        break;
      case U.ABu.EBAY:
        i = (0, v.ul)(n, F.metadataItem);
        break;
      case U.ABu.PAYPAL:
        i = (0, v.li)(n, F.metadataItem);
        break;
      case U.ABu.TIKTOK:
        i = (0, v.hf)(n, F.metadataItem)
    }
    null !== a && (null == i && (i = []), null == i || i.push((0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "interactive-active",
      className: F.connectedAccountVanityMetadataCreatedAt,
      children: Z.intl.format(Z.t["9rfonp"], {
        date: a
      })
    }, "member-since")));
    let s = j.includes(e.id),
      l = Z.intl.string(Z.t.wzzjk5);
    if (null == i || 0 === i.length)
      if (true !== E.Z.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(d.IGR, {
        className: F.connectionMetadataUpsellTag,
        text: Z.intl.string(Z.t.y2b7CA)
      }, "badge"), (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        className: F.connectionMetadataUpsellDescription,
        children: Z.intl.format(Z.t.Up2ni4, {
          helpdeskUrl: w.Z.getArticleURL(U.BhN.CONNECTION_DETAILS)
        })
      }, "label")], l = Z.intl.string(Z.t["LVh3//"]);
    return s && (l = Z.intl.string(Z.t.i4jeWV)), i.push((0, r.jsx)("div", {
      className: F.metadataRefreshButton,
      children: (0, r.jsx)(d.zxk, {
        text: l,
        variant: "primary",
        size: "sm",
        loading: P,
        disabled: s,
        "aria-label": Z.intl.string(Z.t.sCkLYG),
        onClick: s ? true : () => {
          D(true), _.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              j.push(e.id), B(j), D(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: F.metadataContainer,
      children: i
    })
  }

  function $(e) {
    var t;
    let i, a, o;
    return U.BFP.has(n.type) && (i = (0, r.jsx)(d.j7V, {
      className: F.connectionOptionSwitch,
      hideBorder: true,
      value: s,
      onChange: eo,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: Z.intl.string(Z.t["+KCMSk"])
      })
    })), U.vbS.has(n.type) && (a = (0, r.jsx)(d.j7V, {
      className: F.connectionOptionSwitch,
      hideBorder: true,
      value: I,
      onChange: es,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: Z.intl.format(Z.t["6u6J0t"], {
          platform: e.name
        })
      })
    })), (null == (t = E.Z.get(n.type)) ? true : t.hasMetadata) === true && (o = (0, r.jsx)(d.j7V, {
      className: F.connectionOptionSwitch,
      hideBorder: true,
      value: 1 === h,
      onChange: ea,
      disabled: 1 !== f || null == n.metadata,
      children: (0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: Z.intl.string(Z.t.FYKGsL)
      })
    })), (0, r.jsx)("div", {
      className: F.connectionOptionsWrapper,
      children: (0, r.jsxs)("div", {
        className: F.connectionOptions,
        children: [(0, r.jsx)(d.j7V, {
          className: F.connectionOptionSwitch,
          hideBorder: true,
          value: 1 === f,
          onChange: ei,
          children: (0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            children: Z.intl.string(Z.t.f7yOAQ)
          })
        }), o, a, i]
      })
    })
  }

  function ee() {
    return n.revoked ? (0, r.jsx)("div", {
      className: F.integrationsWrapper,
      children: (0, r.jsx)(d.R94, {
        className: F.integrationRevoked,
        children: Z.intl.format(Z.t["6C4lgI"], {
          onReconnect: en
        })
      })
    }) : n.integrations.length > 0 ? (0, r.jsxs)("div", {
      className: F.integrationsWrapper,
      children: [(0, r.jsx)(d.vwX, {
        children: (0, r.jsx)(d.Text, {
          variant: "text-xs/semibold",
          children: Z.intl.string(Z.t.fOe3fX)
        })
      }), (0, r.jsx)("div", {
        children: n.integrations.map(e => (0, r.jsx)(z, {
          integration: e
        }, e.id))
      })]
    }) : true
  }

  function et() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(d.$i$, {
      className: F.connectedAccountSeparator
    })
  }

  function en() {
    (0, O.Z)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function er() {
    let e = E.Z.get(n.type),
      i = Z.intl.format(Z.t.VgqIPj, {
        provider: e.name
      });
    (0, x.Z)(n) && (i = (0, r.jsxs)(r.Fragment, {
      children: [i, (0, r.jsx)(L.Z, {
        className: F.infoBox,
        children: Z.intl.format(Z.t.COW3Xl, {
          platformName: e.name
        })
      })]
    })), (0, d.h7j)(n => (0, r.jsx)(m.default, Y({
      title: Z.intl.formatToPlainString(Z.t.U5x12d, {
        name: e.name
      }),
      body: i,
      confirmText: Z.intl.string(Z.t.bsbMV1),
      cancelText: Z.intl.string(Z.t["ETE/oK"]),
      onConfirm: t
    }, n)))
  }

  function ei(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      C(r), (0, O.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    p(r), _.Z.setVisibility(n.type, n.id, r)
  }

  function ea(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      R(r), (0, O.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    g(r), _.Z.setMetadataVisibility(n.type, n.id, r)
  }

  function eo(e) {
    l(e), _.Z.setFriendSync(n.type, n.id, e)
  }

  function es(e) {
    T(e), _.Z.setShowActivity(n.type, n.id, e)
  }
  return i.useEffect(() => {
    q.current = W
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = q.current;
    null != e && (p(e), _.Z.setVisibility(n.type, n.id, e), C(null)), null != t && (g(t), _.Z.setMetadataVisibility(n.type, n.id, t), R(null))
  }, [n]), (0, r.jsxs)("div", {
    className: F.connection,
    children: [X(n), Q(n), J(n), $(H), et(), ee()]
  })
}

function X() {
  return Chunk647438.useEffect(() => () => {
    (0, Chunk266454.Q3)(Chunk704215.z.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: Chunk921944.L.AUTO
    })
  }, []), (0, Chunk951288.jsxs)("div", {
    className: Chunk465631.connectContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: Chunk465631.connectHeader,
      children: Chunk388032.intl.string(Chunk388032.t.ZeDrUV)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: Chunk388032.intl.format(Chunk388032.t["oYc+Gx"], {
        privacyPolicyUrl: Chunk981631.EYA.PRIVACY
      })
    }), (0, Chunk951288.jsx)(J, {})]
  })
}

function Q(e) {
  let t = E.Z.get(e);
  (0, O.Z)({
    platformType: t.type
  }), P.default.track(U.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function J() {
  function e() {
    Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: Q
    })
  }
  let t = (0, Chunk122021.fq)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk465631.connectionsContainer,
    children: [exports.slice(0, 10).map(e => (0, r.jsx)(h.Z, {
      type: e.type,
      className: F.__invalid_accountButton,
      innerClassName: F.accountButtonInner
    }, e.type)), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.QqTz8f),
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: i
        } = t;
        return (0, r.jsx)("div", {
          className: o()(F.accountAddWrapper, F.__invalid_accountButton),
          children: (0, r.jsx)(d.tEY, {
            children: (0, r.jsx)("button", {
              onMouseEnter: n,
              onMouseLeave: i,
              className: o()(F.accountAddInner, F.accountButtonInner),
              type: "button",
              onClick: e,
              "aria-label": Z.intl.string(Z.t.Zhcj9f),
              children: (0, r.jsx)(d.Fbu, {
                color: "currentColor",
                size: "md",
                "aria-label": Z.intl.string(Z.t.QqTz8f)
              })
            })
          })
        })
      }
    })]
  })
}

function $(e) {
  let t, {
    fetching: n,
    accounts: i,
    theme: a,
    locale: o
  } = e;

  function s(e) {
    let {
      type: t,
      id: n
    } = e;
    _.Z.disconnect(t, n)
  }
  return t = n ? (0, r.jsx)(d.$jN, {
    className: V.marginTop20,
    type: d.$jN.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(d.ubH, {
    className: V.marginTop40,
    theme: a,
    children: (0, r.jsx)(d.OZU, {
      note: Z.intl.string(Z.t.WenGZ2),
      children: Z.intl.string(Z.t["aoLS8/"])
    })
  }) : i.filter(e => E.Z.isSupported(e.type)).map((e, t) => (0, r.jsx)(q, {
    theme: a,
    account: e,
    locale: o,
    onDisconnect: () => s(e)
  }, t)), (0, r.jsx)("div", {
    className: F.connectionList,
    children: t
  })
}
let ee = () => {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    n = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    a = (0, Chunk410030.ZP)();
  (0, Chunk442837.e7)([Chunk771845.ZP], () => Chunk771845.ZP.getFlattenedGuildIds());
  let o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return (Chunk647438.useEffect(() => {
    Chunk457330.Z.fetch()
  }, []), module) ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["3fe7U1"]),
    children: [(0, Chunk951288.jsx)(X, {}), (0, Chunk951288.jsx)($, {
      fetching: exports,
      accounts: require,
      theme: Chunk120356,
      locale: o
    })]
  })
}