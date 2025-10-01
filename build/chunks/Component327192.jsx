/** Chunk was on web.js **/
/** chunk id: 327192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => $
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk457330 = require("./457330.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk23551 = require("./23551.jsx"),
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = e => {
  var t, n;
  let i, {
      integration: a
    } = e,
    {
      isJoining: o,
      joinErrorMessage: s,
      showJoinErrorMessage: c
    } = (0, l.cj)([A.Z], () => ({
      isJoining: A.Z.isJoining(a.id),
      joinErrorMessage: "" === A.Z.joinErrorMessage(a.id) ? B.intl.string(B.t.j2d6Ki) : A.Z.joinErrorMessage(a.id),
      showJoinErrorMessage: true !== A.Z.joinErrorMessage(a.id)
    }), [a.id]);

  function u() {
    p.Z.joinServer(a.id, () => {})
  }
  return null == (0, l.e7)([C.Z], () => C.Z.getGuild(a.guild.id), [a.guild.id]) && (i = (0, r.jsx)(f.zxk, {
    size: "sm",
    onClick: u,
    disabled: o,
    variant: "primary",
    text: o ? B.intl.string(B.t.RXvQQk) : B.intl.string(B.t.XpeFYm)
  })), (0, r.jsxs)("div", {
    className: Z.integrationWrapper,
    children: [(0, r.jsxs)("div", {
      className: Z.integration,
      children: [(0, r.jsx)(T.Z, {
        size: T.Z.Sizes.SMALL,
        guild: a.guild,
        className: Z.guildIcon
      }), (0, r.jsxs)("div", {
        className: Z.integrationInner,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: a.guild.name
        }), (0, r.jsx)(f.eee, {
          href: null == (n = E.Z.get(a.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, a.account),
          children: (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: a.account.name
          })
        })]
      }), i]
    }), c && (0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: Z.integrationError,
      children: s
    })]
  })
};

function z(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: a,
    locale: o
  } = e, [l, c] = i.useState(n.friendSync), [_, h] = i.useState(n.visibility), [m, g] = i.useState(n.metadataVisibility), [I, T] = i.useState(n.showActivity), [A, C] = i.useState(null), [N, R] = i.useState(null), [w, x] = i.useState(false), [G, F] = i.useState([]), V = (0, b.rR)(n.type), Y = E.Z.get(V);
  i.useEffect(() => {
    c(n.friendSync), h(n.visibility), g(n.metadataVisibility), T(n.showActivity)
  }, [n]);
  let z = {
      inProgressVisibility: A,
      inProgressMetadataVisibility: N
    },
    q = i.useRef(z);

  function X(e) {
    var t;
    let n = E.Z.get(e.type),
      i = E.Z.get(V),
      o = "1" === (null != (t = e.metadata) ? t : {})[U.PC.TWITTER_VERIFIED],
      s = null;
    return n.type === k.ABu.TWITTER && o && (s = (0, r.jsx)(f.ua7, {
      text: B.intl.string(B.t.Jebrw8),
      children: e => (0, r.jsx)(S.Z, W(H({}, e), {
        color: u.Z.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(f.kmB, {
          size: "xs",
          color: u.Z.unsafe_rawColors.WHITE_500.css
        })
      }))
    })), (0, r.jsxs)("div", {
      className: Z.connectionHeader,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: Z.connectionIcon,
        src: (0, d.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: Z.connectionAccountLabelContainer,
          children: [(0, r.jsx)(f.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: Z.connectionAccountValue,
            children: e.name
          }), null != s && (0, r.jsx)("div", {
            className: Z.connectionAccountLabelVerified,
            children: s
          })]
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: Z.connectionAccountLabel,
          children: i.name
        })]
      }), (0, r.jsx)(f.P3F, {
        className: Z.connectionDelete,
        onClick: er,
        "aria-label": B.intl.string(B.t.ppppRE),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, r.jsx)(f.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }

  function Q(e) {
    return e.twoWayLink ? null : e.type === k.ABu.XBOX ? (0, r.jsx)("div", {
      className: Z.upsellWrapper,
      children: (0, r.jsx)(M.Y, {})
    }) : e.type === k.ABu.PLAYSTATION ? (0, r.jsx)("div", {
      className: Z.upsellWrapper,
      children: (0, r.jsx)(j.t, {})
    }) : null
  }

  function J(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      a = (0, y.FI)(n[U.PC.CREATED_AT], o);
    switch (e.type) {
      case k.ABu.REDDIT:
        i = (0, v.oP)(n, Z.metadataItem);
        break;
      case k.ABu.STEAM:
        i = (0, v.Dq)(n, Z.metadataItem);
        break;
      case k.ABu.BLUESKY:
      case k.ABu.TWITTER:
      case k.ABu.MASTODON:
        i = (0, v.rJ)(n, Z.metadataItem);
        break;
      case k.ABu.EBAY:
        i = (0, v.ul)(n, Z.metadataItem);
        break;
      case k.ABu.PAYPAL:
        i = (0, v.li)(n, Z.metadataItem);
        break;
      case k.ABu.TIKTOK:
        i = (0, v.hf)(n, Z.metadataItem)
    }
    null !== a && (null == i && (i = []), null == i || i.push((0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "interactive-active",
      className: Z.connectedAccountVanityMetadataCreatedAt,
      children: B.intl.format(B.t["9rfonp"], {
        date: a
      })
    }, "member-since")));
    let s = G.includes(e.id),
      l = B.intl.string(B.t.wzzjk5);
    if (null == i || 0 === i.length)
      if (true !== E.Z.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(f.IGR, {
        className: Z.connectionMetadataUpsellTag,
        text: B.intl.string(B.t.y2b7CA)
      }, "badge"), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: Z.connectionMetadataUpsellDescription,
        children: B.intl.format(B.t.Up2ni4, {
          helpdeskUrl: P.Z.getArticleURL(k.BhN.CONNECTION_DETAILS)
        })
      }, "label")], l = B.intl.string(B.t["LVh3//"]);
    return s && (l = B.intl.string(B.t.i4jeWV)), i.push((0, r.jsx)("div", {
      className: Z.metadataRefreshButton,
      children: (0, r.jsx)(f.zxk, {
        text: l,
        variant: "primary",
        size: "sm",
        loading: w,
        disabled: s,
        "aria-label": B.intl.string(B.t.sCkLYG),
        onClick: s ? true : () => {
          x(true), p.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              G.push(e.id), F(G), x(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: Z.metadataContainer,
      children: i
    })
  }

  function $(e) {
    var t;
    let i, a, o;
    return k.BFP.has(n.type) && (i = (0, r.jsx)(f.j7V, {
      className: Z.connectionOptionSwitch,
      hideBorder: true,
      value: l,
      onChange: eo,
      children: (0, r.jsx)(f.Text, {
        variant: "text-sm/semibold",
        children: B.intl.string(B.t["+KCMSk"])
      })
    })), k.vbS.has(n.type) && (a = (0, r.jsx)(f.j7V, {
      className: Z.connectionOptionSwitch,
      hideBorder: true,
      value: I,
      onChange: es,
      children: (0, r.jsx)(f.Text, {
        variant: "text-sm/semibold",
        children: B.intl.format(B.t["6u6J0t"], {
          platform: e.name
        })
      })
    })), (null == (t = E.Z.get(n.type)) ? true : t.hasMetadata) === true && (o = (0, r.jsx)(f.j7V, {
      className: Z.connectionOptionSwitch,
      hideBorder: true,
      value: 1 === m,
      onChange: ea,
      disabled: 1 !== _ || null == n.metadata,
      children: (0, r.jsx)(f.Text, {
        variant: "text-sm/semibold",
        children: B.intl.string(B.t.FYKGsL)
      })
    })), (0, r.jsx)("div", {
      className: Z.connectionOptionsWrapper,
      children: (0, r.jsxs)("div", {
        className: Z.connectionOptions,
        children: [(0, r.jsx)(f.j7V, {
          className: Z.connectionOptionSwitch,
          hideBorder: true,
          value: 1 === _,
          onChange: ei,
          children: (0, r.jsx)(f.Text, {
            variant: "text-sm/semibold",
            children: B.intl.string(B.t.f7yOAQ)
          })
        }), o, a, i]
      })
    })
  }

  function ee() {
    return n.revoked ? (0, r.jsx)("div", {
      className: Z.integrationsWrapper,
      children: (0, r.jsx)(f.R94, {
        className: Z.integrationRevoked,
        children: B.intl.format(B.t["6C4lgI"], {
          onReconnect: en
        })
      })
    }) : n.integrations.length > 0 ? (0, r.jsxs)("div", {
      className: Z.integrationsWrapper,
      children: [(0, r.jsx)(f.vwX, {
        children: (0, r.jsx)(f.Text, {
          variant: "text-xs/semibold",
          children: B.intl.string(B.t.fOe3fX)
        })
      }), (0, r.jsx)("div", {
        children: n.integrations.map(e => (0, r.jsx)(K, {
          integration: e
        }, e.id))
      })]
    }) : true
  }

  function et() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.izJ, {
      className: Z.connectedAccountSeparator
    })
  }

  function en() {
    (0, O.Z)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function er() {
    let e = E.Z.get(n.type);
    (0, f.h7j)(i => (0, r.jsx)(s.Modal, W(H({
      title: B.intl.formatToPlainString(B.t.U5x12d, {
        name: e.name
      }),
      subtitle: B.intl.format(B.t.VgqIPj, {
        provider: e.name
      }),
      actions: [{
        text: B.intl.string(B.t["ETE/oK"]),
        onClick: i.onClose,
        variant: "secondary"
      }, {
        text: B.intl.string(B.t.bsbMV1),
        onClick: () => {
          t(), i.onClose()
        },
        variant: "primary"
      }]
    }, i), {
      children: (0, D.Z)(n) && (0, r.jsx)(L.Z, {
        children: B.intl.format(B.t.COW3Xl, {
          platformName: e.name
        })
      })
    })))
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
    h(r), p.Z.setVisibility(n.type, n.id, r)
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
    g(r), p.Z.setMetadataVisibility(n.type, n.id, r)
  }

  function eo(e) {
    c(e), p.Z.setFriendSync(n.type, n.id, e)
  }

  function es(e) {
    T(e), p.Z.setShowActivity(n.type, n.id, e)
  }
  return i.useEffect(() => {
    q.current = z
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = q.current;
    null != e && (h(e), p.Z.setVisibility(n.type, n.id, e), C(null)), null != t && (g(t), p.Z.setMetadataVisibility(n.type, n.id, t), R(null))
  }, [n]), (0, r.jsxs)("div", {
    className: Z.connection,
    children: [X(n), Q(n), J(n), $(Y), et(), ee()]
  })
}

function q() {
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
    }), (0, Chunk951288.jsx)(Q, {})]
  })
}

function X(e) {
  let t = E.Z.get(e);
  (0, O.Z)({
    platformType: t.type
  }), R.default.track(k.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function Q() {
  function e() {
    Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: X
    })
  }
  let t = (0, Chunk122021.fq)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk465631.connectionsContainer,
    children: [exports.slice(0, 10).map(e => (0, r.jsx)(m.Z, {
      type: e.type,
      className: Z.__invalid_accountButton,
      innerClassName: Z.accountButtonInner
    }, e.type)), (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.QqTz8f),
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: i
        } = t;
        return (0, r.jsx)("div", {
          className: o()(Z.accountAddWrapper, Z.__invalid_accountButton),
          children: (0, r.jsx)(f.tEY, {
            children: (0, r.jsx)("button", {
              onMouseEnter: n,
              onMouseLeave: i,
              className: o()(Z.accountAddInner, Z.accountButtonInner),
              type: "button",
              onClick: e,
              "aria-label": B.intl.string(B.t.Zhcj9f),
              children: (0, r.jsx)(f.Fbu, {
                color: "currentColor",
                size: "md",
                "aria-label": B.intl.string(B.t.QqTz8f)
              })
            })
          })
        })
      }
    })]
  })
}

function J(e) {
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
    p.Z.disconnect(t, n)
  }
  return t = n ? (0, r.jsx)(f.$jN, {
    className: F.marginTop20,
    type: f.$jN.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(f.ubH, {
    className: F.marginTop40,
    theme: a,
    children: (0, r.jsx)(f.OZU, {
      note: B.intl.string(B.t.WenGZ2),
      children: B.intl.string(B.t["aoLS8/"])
    })
  }) : i.filter(e => E.Z.isSupported(e.type)).map((e, t) => (0, r.jsx)(z, {
    theme: a,
    account: e,
    locale: o,
    onDisconnect: () => s(e)
  }, t)), (0, r.jsx)("div", {
    className: Z.connectionList,
    children: t
  })
}
let $ = () => {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    n = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    a = (0, Chunk410030.ZP)(),
    o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return (Chunk647438.useEffect(() => {
    Chunk457330.Z.fetch()
  }, []), module) ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsxs)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["3fe7U1"]),
    children: [(0, Chunk951288.jsx)(q, {}), (0, Chunk951288.jsx)(J, {
      fetching: exports,
      accounts: require,
      theme: Chunk120356,
      locale: o
    })]
  })
}