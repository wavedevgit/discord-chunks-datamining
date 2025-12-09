/** Chunk was on web.js **/
/** chunk id: 327192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk526665 = require("./526665.js"),
  Chunk349728 = require("./349728.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk205266 = require("./205266.jsx"),
  Chunk216153 = require("./216153.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11049 = require("./11049.js");

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
      joinErrorMessage: s,
      showJoinErrorMessage: c
    } = (0, l.cj)([C.Z], () => ({
      isJoining: C.Z.isJoining(a.id),
      joinErrorMessage: "" === C.Z.joinErrorMessage(a.id) ? F.intl.string(F.t.j2d6Km) : C.Z.joinErrorMessage(a.id),
      showJoinErrorMessage: true !== C.Z.joinErrorMessage(a.id)
    }), [a.id]);

  function u() {
    m.Z.joinServer(a.id, () => {})
  }
  return null == (0, l.e7)([N.Z], () => N.Z.getGuild(a.guild.id), [a.guild.id]) && (i = (0, r.jsx)(p.Button, {
    size: "sm",
    onClick: u,
    disabled: o,
    variant: "primary",
    text: o ? F.intl.string(F.t.RXvQQu) : F.intl.string(F.t.XpeFYr)
  })), (0, r.jsxs)("div", {
    className: V.integrationWrapper,
    children: [(0, r.jsxs)("div", {
      className: V.integration,
      children: [(0, r.jsx)(T.Z, {
        size: T.Z.Sizes.SMALL,
        guild: a.guild,
        className: V.guildIcon
      }), (0, r.jsxs)("div", {
        className: V.integrationInner,
        children: [(0, r.jsx)(p.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: a.guild.name
        }), (0, r.jsx)(p.Anchor, {
          href: null == (n = b.Z.get(a.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, a.account),
          children: (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: a.account.name
          })
        })]
      }), i]
    }), c && (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: V.integrationError,
      children: s
    })]
  })
};

function q(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: a,
    locale: l
  } = e, [c, _] = i.useState(n.friendSync), [h, g] = i.useState(n.visibility), [E, I] = i.useState(n.metadataVisibility), [T, C] = i.useState(n.showActivity), [N, P] = i.useState(null), [R, w] = i.useState(null), [M, B] = i.useState(false), [H, W] = i.useState([]), q = (0, y.rR)(n.type), Q = b.Z.get(q);
  i.useEffect(() => {
    _(n.friendSync), g(n.visibility), I(n.metadataVisibility), C(n.showActivity)
  }, [n]);
  let X = {
      inProgressVisibility: N,
      inProgressMetadataVisibility: R
    },
    J = i.useRef(X);

  function $(e) {
    var t;
    let n = b.Z.get(e.type),
      i = b.Z.get(q),
      o = "1" === (null != (t = e.metadata) ? t : {})[Z.PC.TWITTER_VERIFIED],
      s = null;
    return n.type === G.ABu.TWITTER && o && (s = (0, r.jsx)(d.u, {
      text: F.intl.string(F.t.Jebrww),
      children: (0, r.jsx)(A.Z, {
        color: u.Z.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(p.kmB, {
          size: "xs",
          color: u.Z.unsafe_rawColors.WHITE_500.css
        })
      })
    })), (0, r.jsxs)("div", {
      className: V.connectionHeader,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: V.connectionIcon,
        src: (0, f.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: V.connectionAccountLabelContainer,
          children: [(0, r.jsx)(p.Text, {
            color: "header-primary",
            variant: "text-md/semibold",
            className: V.connectionAccountValue,
            children: e.name
          }), null != s && (0, r.jsx)("div", {
            className: V.connectionAccountLabelVerified,
            children: s
          })]
        }), (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: V.connectionAccountLabel,
          children: i.name
        })]
      }), (0, r.jsx)(p.P3F, {
        className: V.connectionDelete,
        onClick: eo,
        "aria-label": F.intl.string(F.t.ppppRJ),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, r.jsx)(p.Dio, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }

  function ee(e) {
    return e.twoWayLink ? null : e.type === G.ABu.XBOX ? (0, r.jsx)(U.Y, {}) : e.type === G.ABu.PLAYSTATION ? (0, r.jsx)(k.t, {}) : null
  }

  function et(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      a = (0, O.FI)(n[Z.PC.CREATED_AT], l);
    switch (e.type) {
      case G.ABu.REDDIT:
        i = (0, S.oP)(n, V.metadataItem);
        break;
      case G.ABu.STEAM:
        i = (0, S.Dq)(n, V.metadataItem);
        break;
      case G.ABu.BLUESKY:
      case G.ABu.TWITTER:
      case G.ABu.MASTODON:
        i = (0, S.rJ)(n, V.metadataItem);
        break;
      case G.ABu.EBAY:
        i = (0, S.ul)(n, V.metadataItem);
        break;
      case G.ABu.PAYPAL:
        i = (0, S.li)(n, V.metadataItem);
        break;
      case G.ABu.TIKTOK:
        i = (0, S.hf)(n, V.metadataItem)
    }
    null !== a && (null == i && (i = []), null == i || i.push((0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: V.connectedAccountVanityMetadataCreatedAt,
      children: F.intl.format(F.t["9rfonh"], {
        date: a
      })
    }, "member-since")));
    let o = H.includes(e.id),
      s = F.intl.string(F.t.wzzjk9);
    if (null == i || 0 === i.length)
      if (true !== b.Z.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(p.IGR, {
        className: V.connectionMetadataUpsellTag,
        text: F.intl.string(F.t.y2b7CA)
      }, "badge"), (0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        className: V.connectionMetadataUpsellDescription,
        children: F.intl.format(F.t.Up2ni7, {
          helpdeskUrl: D.Z.getArticleURL(G.BhN.CONNECTION_DETAILS)
        })
      }, "label")], s = F.intl.string(F.t["LVh3/5"]);
    return o && (s = F.intl.string(F.t.i4jeWR)), i.push((0, r.jsx)("div", {
      className: V.metadataRefreshButton,
      children: (0, r.jsx)(p.Button, {
        text: s,
        variant: "secondary",
        size: "sm",
        loading: M,
        disabled: o,
        "aria-label": F.intl.string(F.t.sCkLYH),
        onClick: o ? true : () => {
          B(true), m.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              H.push(e.id), W(H), B(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: V.metadataContainer,
      children: i
    })
  }

  function en(e) {
    var t;
    let i, a, o;
    return G.BFP.has(n.type) && (i = (0, r.jsx)(p.rsf, {
      label: F.intl.string(F.t["+KCMSi"]),
      checked: c,
      onChange: ec
    })), G.vbS.has(n.type) && (a = (0, r.jsx)(p.rsf, {
      label: F.intl.format(F.t["6u6J0q"], {
        platform: e.name
      }),
      checked: T,
      onChange: eu
    })), (null == (t = b.Z.get(n.type)) ? true : t.hasMetadata) === true && (o = (0, r.jsx)(p.rsf, {
      label: F.intl.string(F.t.FYKGsL),
      checked: 1 === E,
      onChange: el,
      disabled: 1 !== h || null == n.metadata
    })), (0, r.jsxs)("div", {
      className: V.connectionOptions,
      children: [(0, r.jsx)(p.rsf, {
        label: F.intl.string(F.t.f7yOAX),
        checked: 1 === h,
        onChange: es
      }), o, a, i]
    })
  }

  function er() {
    return n.revoked ? (0, r.jsx)(s.Wn, {
      messageType: s.QYI.INFO,
      children: F.intl.format(F.t["6C4lgA"], {
        onReconnect: ea
      })
    }) : n.integrations.length > 0 ? (0, r.jsx)(p.gNt, {
      label: F.intl.string(F.t.fOe3fZ),
      children: n.integrations.map(e => (0, r.jsx)(z, {
        integration: e
      }, e.id))
    }) : true
  }

  function ei() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(p.izJ, {})
  }

  function ea() {
    (0, v.Z)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function eo() {
    let e = b.Z.get(n.type);
    (0, p.h7j)(i => (0, r.jsx)(s.Modal, K(Y({
      title: F.intl.formatToPlainString(F.t.U5x12f, {
        name: e.name
      }),
      subtitle: F.intl.format(F.t.VgqIPj, {
        provider: e.name
      }),
      actions: [{
        text: F.intl.string(F.t["ETE/oC"]),
        onClick: i.onClose,
        variant: "secondary"
      }, {
        text: F.intl.string(F.t.bsbMVz),
        onClick: () => {
          t(), i.onClose()
        },
        variant: "primary"
      }]
    }, i), {
      children: (0, L.Z)(n) && (0, r.jsx)(j.Z, {
        children: F.intl.format(F.t.COW3Xn, {
          platformName: e.name
        })
      })
    })))
  }

  function es(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      P(r), (0, v.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    g(r), m.Z.setVisibility(n.type, n.id, r)
  }

  function el(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      w(r), (0, v.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    I(r), m.Z.setMetadataVisibility(n.type, n.id, r)
  }

  function ec(e) {
    _(e), m.Z.setFriendSync(n.type, n.id, e)
  }

  function eu(e) {
    C(e), m.Z.setShowActivity(n.type, n.id, e)
  }
  i.useEffect(() => {
    J.current = X
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = J.current;
    null != e && (g(e), m.Z.setVisibility(n.type, n.id, e), P(null)), null != t && (I(t), m.Z.setMetadataVisibility(n.type, n.id, t), w(null))
  }, [n]);
  let ed = (0, x.wy)("ConnectedAccount");
  return (0, r.jsxs)("div", {
    className: o()(V.connection, {
      [V.connectionUserSettingsRedesign]: ed
    }),
    children: [$(n), ee(n), et(n), en(Q), ei(), er()]
  })
}

function Q() {
  return Chunk473749.useEffect(() => () => {
    (0, Chunk266454.Q3)(Chunk704215.z.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: Chunk921944.L.AUTO
    })
  }, []), (0, Chunk54381.jsx)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t.ZeDrUf),
    description: Chunk388032.intl.format(Chunk388032.t["oYc+Gz"], {
      privacyPolicyUrl: Chunk981631.EYA.PRIVACY
    }),
    children: (0, Chunk54381.jsx)(J, {})
  })
}

function X(e) {
  let t = b.Z.get(e);
  (0, v.Z)({
    platformType: t.type
  }), R.default.track(G.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function J() {
  function e() {
    Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: X
    })
  }
  let t = (0, Chunk122021.fq)();
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk11049.connectionsContainer,
    children: [exports.slice(0, 10).map(e => (0, r.jsx)(g.Z, {
      type: e.type,
      className: V.__invalid_accountButton,
      innerClassName: V.accountButtonInner
    }, e.type)), (0, Chunk54381.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t.QqTz8b),
      children: (0, Chunk54381.jsx)("div", {
        className: o()(Chunk11049.accountAddWrapper, Chunk11049.__invalid_accountButton),
        children: (0, Chunk54381.jsx)(Chunk481060.tEY, {
          children: (0, Chunk54381.jsx)("button", {
            className: o()(Chunk11049.accountAddInner, Chunk11049.accountButtonInner),
            type: "button",
            onClick: module,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.Zhcj9X),
            children: (0, Chunk54381.jsx)(Chunk481060.Fbu, {
              color: "currentColor",
              size: "md",
              "aria-label": Chunk388032.intl.string(Chunk388032.t.QqTz8b)
            })
          })
        })
      })
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
    m.Z.disconnect(t, n)
  }
  return t = n ? (0, r.jsx)(p.$jN, {
    type: p.$jN.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(p.ubH, {
    theme: a,
    children: (0, r.jsx)(p.OZU, {
      note: F.intl.string(F.t.WenGZ2),
      children: F.intl.string(F.t.aoLS84)
    })
  }) : i.filter(e => b.Z.isSupported(e.type)).map((e, t) => (0, r.jsx)(q, {
    theme: a,
    account: e,
    locale: o,
    onDisconnect: () => s(e)
  }, t)), (0, r.jsx)("div", {
    className: V.connectionList,
    children: t
  })
}
let ee = () => {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    n = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    a = (0, Chunk410030.ZP)(),
    o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return (Chunk473749.useEffect(() => {
    Chunk457330.Z.fetch()
  }, []), module) ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (0, Chunk54381.jsxs)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    children: [(0, Chunk54381.jsx)(Q, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {
      gap: 24
    }), (0, Chunk54381.jsx)($, {
      fetching: exports,
      accounts: require,
      theme: Chunk120356,
      locale: o
    })]
  })
}