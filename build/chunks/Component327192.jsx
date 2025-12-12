/** Chunk was on web.js **/
/** chunk id: 327192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => X,
  mN: () => W,
  vq: () => Q
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk457330 = require("./457330.js"),
  Chunk23551 = require("./23551.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk275759 = require("./275759.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk888496 = require("./888496.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk11049 = require("./11049.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = e => {
  var t, n;
  let i, {
      integration: o
    } = e,
    {
      isJoining: a,
      joinErrorMessage: s,
      showJoinErrorMessage: c
    } = (0, l.cj)([I.Z], () => ({
      isJoining: I.Z.isJoining(o.id),
      joinErrorMessage: "" === I.Z.joinErrorMessage(o.id) ? U.intl.string(U.t.j2d6Km) : I.Z.joinErrorMessage(o.id),
      showJoinErrorMessage: true !== I.Z.joinErrorMessage(o.id)
    }), [o.id]);

  function u() {
    _.Z.joinServer(o.id, () => {})
  }
  return null == (0, l.e7)([T.Z], () => T.Z.getGuild(o.guild.id), [o.guild.id]) && (i = (0, r.jsx)(f.Button, {
    size: "sm",
    onClick: u,
    disabled: a,
    variant: "primary",
    text: a ? U.intl.string(U.t.RXvQQu) : U.intl.string(U.t.XpeFYr)
  })), (0, r.jsxs)("div", {
    className: G.integrationWrapper,
    children: [(0, r.jsxs)("div", {
      className: G.integration,
      children: [(0, r.jsx)(v.Z, {
        size: v.Z.Sizes.SMALL,
        guild: o.guild,
        className: G.guildIcon
      }), (0, r.jsxs)("div", {
        className: G.integrationInner,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: o.guild.name
        }), (0, r.jsx)(f.Anchor, {
          href: null == (n = g.Z.get(o.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, o.account),
          children: (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: o.account.name
          })
        })]
      }), i]
    }), c && (0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: G.integrationError,
      children: s
    })]
  })
};

function Y(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: o,
    locale: l
  } = e, [p, m] = i.useState(n.friendSync), [h, v] = i.useState(n.visibility), [I, T] = i.useState(n.metadataVisibility), [C, A] = i.useState(n.showActivity), [P, x] = i.useState(null), [Z, B] = i.useState(null), [Y, W] = i.useState(false), [K, z] = i.useState([]), q = (0, E.rR)(n.type), Q = g.Z.get(q);
  i.useEffect(() => {
    m(n.friendSync), v(n.visibility), T(n.metadataVisibility), A(n.showActivity)
  }, [n]);
  let X = {
      inProgressVisibility: P,
      inProgressMetadataVisibility: Z
    },
    J = i.useRef(X);

  function $(e) {
    var t;
    let n = g.Z.get(e.type),
      i = g.Z.get(q),
      a = "1" === (null != (t = e.metadata) ? t : {})[k.PC.TWITTER_VERIFIED],
      s = null;
    return n.type === M.ABu.TWITTER && a && (s = (0, r.jsx)(u.u, {
      text: U.intl.string(U.t.Jebrww),
      children: (0, r.jsx)(S.Z, {
        color: c.Z.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(f.kmB, {
          size: "xs",
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      })
    })), (0, r.jsxs)("div", {
      className: G.connectionHeader,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: G.connectionIcon,
        src: (0, d.wj)(o) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: G.connectionAccountLabelContainer,
          children: [(0, r.jsx)(f.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: G.connectionAccountValue,
            children: e.name
          }), null != s && (0, r.jsx)("div", {
            className: G.connectionAccountLabelVerified,
            children: s
          })]
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: G.connectionAccountLabel,
          children: i.name
        })]
      }), (0, r.jsx)(f.P3F, {
        className: G.connectionDelete,
        onClick: ea,
        "aria-label": U.intl.string(U.t.ppppRJ),
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

  function ee(e) {
    return e.twoWayLink ? null : e.type === M.ABu.XBOX ? (0, r.jsx)(j.Y, {}) : e.type === M.ABu.PLAYSTATION ? (0, r.jsx)(L.t, {}) : null
  }

  function et(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      o = (0, b.FI)(n[k.PC.CREATED_AT], l);
    switch (e.type) {
      case M.ABu.REDDIT:
        i = (0, O.oP)(n, G.metadataItem);
        break;
      case M.ABu.STEAM:
        i = (0, O.Dq)(n, G.metadataItem);
        break;
      case M.ABu.BLUESKY:
      case M.ABu.TWITTER:
      case M.ABu.MASTODON:
        i = (0, O.rJ)(n, G.metadataItem);
        break;
      case M.ABu.EBAY:
        i = (0, O.ul)(n, G.metadataItem);
        break;
      case M.ABu.PAYPAL:
        i = (0, O.li)(n, G.metadataItem);
        break;
      case M.ABu.TIKTOK:
        i = (0, O.hf)(n, G.metadataItem)
    }
    null !== o && (null == i && (i = []), null == i || i.push((0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: G.connectedAccountVanityMetadataCreatedAt,
      children: U.intl.format(U.t["9rfonh"], {
        date: o
      })
    }, "member-since")));
    let a = K.includes(e.id),
      s = U.intl.string(U.t.wzzjk9);
    if (null == i || 0 === i.length)
      if (true !== g.Z.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(f.IGR, {
        className: G.connectionMetadataUpsellTag,
        text: U.intl.string(U.t.y2b7CA)
      }, "badge"), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: G.connectionMetadataUpsellDescription,
        children: U.intl.format(U.t.Up2ni7, {
          helpdeskUrl: N.Z.getArticleURL(M.BhN.CONNECTION_DETAILS)
        })
      }, "label")], s = U.intl.string(U.t["LVh3/5"]);
    return a && (s = U.intl.string(U.t.i4jeWR)), i.push((0, r.jsx)("div", {
      className: G.metadataRefreshButton,
      children: (0, r.jsx)(f.Button, {
        text: s,
        variant: "secondary",
        size: "sm",
        loading: Y,
        disabled: a,
        "aria-label": U.intl.string(U.t.sCkLYH),
        onClick: a ? true : () => {
          W(true), _.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              K.push(e.id), z(K), W(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: G.metadataContainer,
      children: i
    })
  }

  function en(e) {
    var t;
    let i, o, a;
    return M.BFP.has(n.type) && (i = (0, r.jsx)(f.rsf, {
      label: U.intl.string(U.t["+KCMSi"]),
      checked: p,
      onChange: ec
    })), M.vbS.has(n.type) && (o = (0, r.jsx)(f.rsf, {
      label: U.intl.format(U.t["6u6J0q"], {
        platform: e.name
      }),
      checked: C,
      onChange: eu
    })), (null == (t = g.Z.get(n.type)) ? true : t.hasMetadata) === true && (a = (0, r.jsx)(f.rsf, {
      label: U.intl.string(U.t.FYKGsL),
      checked: 1 === I,
      onChange: el,
      disabled: 1 !== h || null == n.metadata
    })), (0, r.jsxs)("div", {
      className: G.connectionOptions,
      children: [(0, r.jsx)(f.rsf, {
        label: U.intl.string(U.t.f7yOAX),
        checked: 1 === h,
        onChange: es
      }), a, o, i]
    })
  }

  function er() {
    return n.revoked ? (0, r.jsx)(s.Wn, {
      messageType: s.QYI.INFO,
      children: U.intl.format(U.t["6C4lgA"], {
        onReconnect: eo
      })
    }) : n.integrations.length > 0 ? (0, r.jsx)(f.gNt, {
      label: U.intl.string(U.t.fOe3fZ),
      children: n.integrations.map(e => (0, r.jsx)(H, {
        integration: e
      }, e.id))
    }) : true
  }

  function ei() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.izJ, {})
  }

  function eo() {
    (0, y.Z)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function ea() {
    let e = g.Z.get(n.type);
    (0, f.h7j)(i => (0, r.jsx)(s.Modal, V(F({
      title: U.intl.formatToPlainString(U.t.U5x12f, {
        name: e.name
      }),
      subtitle: U.intl.format(U.t.VgqIPj, {
        provider: e.name
      }),
      actions: [{
        text: U.intl.string(U.t["ETE/oC"]),
        onClick: i.onClose,
        variant: "secondary"
      }, {
        text: U.intl.string(U.t.bsbMVz),
        onClick: () => {
          t(), i.onClose()
        },
        variant: "primary"
      }]
    }, i), {
      children: (0, w.Z)(n) && (0, r.jsx)(D.Z, {
        children: U.intl.format(U.t.COW3Xn, {
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
      x(r), (0, y.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    v(r), _.Z.setVisibility(n.type, n.id, r)
  }

  function el(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      B(r), (0, y.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    T(r), _.Z.setMetadataVisibility(n.type, n.id, r)
  }

  function ec(e) {
    m(e), _.Z.setFriendSync(n.type, n.id, e)
  }

  function eu(e) {
    A(e), _.Z.setShowActivity(n.type, n.id, e)
  }
  i.useEffect(() => {
    J.current = X
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = J.current;
    null != e && (v(e), _.Z.setVisibility(n.type, n.id, e), x(null)), null != t && (T(t), _.Z.setMetadataVisibility(n.type, n.id, t), B(null))
  }, [n]);
  let ed = (0, R.wy)("ConnectedAccount");
  return (0, r.jsxs)("div", {
    className: a()(G.connection, {
      [G.connectionUserSettingsRedesign]: ed
    }),
    children: [$(n), ee(n), et(n), en(Q), ei(), er()]
  })
}

function W() {
  return (0, Chunk54381.jsx)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t.ZeDrUf),
    description: Chunk388032.intl.format(Chunk388032.t["oYc+Gz"], {
      privacyPolicyUrl: Chunk981631.EYA.PRIVACY
    }),
    children: (0, Chunk54381.jsx)(z, {})
  })
}

function K(e) {
  let t = g.Z.get(e);
  (0, y.Z)({
    platformType: t.type
  }), A.default.track(M.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function z() {
  function e() {
    Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: K
    })
  }
  let t = (0, Chunk122021.fq)();
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk11049.connectionsContainer,
    children: [exports.slice(0, 10).map(e => (0, r.jsx)(m.Z, {
      type: e.type,
      className: G.__invalid_accountButton,
      innerClassName: G.accountButtonInner
    }, e.type)), (0, Chunk54381.jsx)(Chunk28664.u, {
      text: Chunk388032.intl.string(Chunk388032.t.QqTz8b),
      children: (0, Chunk54381.jsx)("div", {
        className: a()(Chunk11049.accountAddWrapper, Chunk11049.__invalid_accountButton),
        children: (0, Chunk54381.jsx)(Chunk481060.tEY, {
          children: (0, Chunk54381.jsx)("button", {
            className: a()(Chunk11049.accountAddInner, Chunk11049.accountButtonInner),
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

function q(e) {
  let t, {
    fetching: n,
    accounts: i,
    theme: o,
    locale: a
  } = e;

  function s(e) {
    let {
      type: t,
      id: n
    } = e;
    _.Z.disconnect(t, n)
  }
  return t = n ? (0, r.jsx)(f.$jN, {
    type: f.$jN.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(f.ubH, {
    theme: o,
    children: (0, r.jsx)(f.OZU, {
      note: U.intl.string(U.t.WenGZ2),
      children: U.intl.string(U.t.aoLS84)
    })
  }) : i.filter(e => g.Z.isSupported(e.type)).map((e, t) => (0, r.jsx)(Y, {
    theme: o,
    account: e,
    locale: a,
    onDisconnect: () => s(e)
  }, t)), (0, r.jsx)("div", {
    className: G.connectionList,
    children: t
  })
}

function Q() {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    n = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    i = (0, Chunk410030.ZP)(),
    o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return module ? null : (0, Chunk54381.jsx)(q, {
    fetching: exports,
    accounts: require,
    theme: Chunk473749,
    locale: Chunk120356
  })
}
let X = () => {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    n = (0, Chunk410030.ZP)(),
    o = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return Chunk473749.useEffect(() => {
    Chunk457330.Z.fetch()
  }, []), (0, Chunk54381.jsxs)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["3fe7U5"]),
    children: [(0, Chunk54381.jsx)(W, {}), (0, Chunk54381.jsx)(Chunk481060.izJ, {
      gap: 24
    }), (0, Chunk54381.jsx)(q, {
      fetching: module,
      accounts: exports,
      theme: require,
      locale: Chunk120356
    })]
  })
}