/** Chunk was on web.js **/
/** chunk id: 327192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => Q,
  mN: () => Y,
  vq: () => q
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk349728 = require("./349728.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk205266 = require("./205266.jsx"),
  Chunk216153 = require("./216153.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk454578 = require("./454578.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = e => {
  var t, n;
  let i, {
      integration: a
    } = e,
    {
      isJoining: o,
      joinErrorMessage: s,
      showJoinErrorMessage: c
    } = (0, l.cj)([I.Z], () => ({
      isJoining: I.Z.isJoining(a.id),
      joinErrorMessage: "" === I.Z.joinErrorMessage(a.id) ? k.intl.string(k.t.j2d6Km) : I.Z.joinErrorMessage(a.id),
      showJoinErrorMessage: true !== I.Z.joinErrorMessage(a.id)
    }), [a.id]);

  function u() {
    _.Z.joinServer(a.id, () => {})
  }
  return null == (0, l.e7)([T.Z], () => T.Z.getGuild(a.guild.id), [a.guild.id]) && (i = (0, r.jsx)(f.Button, {
    size: "sm",
    onClick: u,
    disabled: o,
    variant: "primary",
    text: o ? k.intl.string(k.t.RXvQQu) : k.intl.string(k.t.XpeFYr)
  })), (0, r.jsxs)("div", {
    className: U.integrationWrapper,
    children: [(0, r.jsxs)("div", {
      className: U.integration,
      children: [(0, r.jsx)(v.Z, {
        size: v.Z.Sizes.SMALL,
        guild: a.guild,
        className: U.guildIcon
      }), (0, r.jsxs)("div", {
        className: U.integrationInner,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: a.guild.name
        }), (0, r.jsx)(f.eee, {
          href: null == (n = g.Z.get(a.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, a.account),
          children: (0, r.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: a.account.name
          })
        })]
      }), i]
    }), c && (0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: U.integrationError,
      children: s
    })]
  })
};

function H(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: a,
    locale: o
  } = e, [l, p] = i.useState(n.friendSync), [h, m] = i.useState(n.visibility), [v, I] = i.useState(n.metadataVisibility), [T, C] = i.useState(n.showActivity), [A, P] = i.useState(null), [D, G] = i.useState(null), [F, H] = i.useState(false), [Y, W] = i.useState([]), K = (0, E.rR)(n.type), z = g.Z.get(K);
  i.useEffect(() => {
    p(n.friendSync), m(n.visibility), I(n.metadataVisibility), C(n.showActivity)
  }, [n]);
  let q = {
      inProgressVisibility: A,
      inProgressMetadataVisibility: D
    },
    Q = i.useRef(q);

  function X(e) {
    var t;
    let n = g.Z.get(e.type),
      i = g.Z.get(K),
      o = "1" === (null != (t = e.metadata) ? t : {})[M.PC.TWITTER_VERIFIED],
      s = null;
    return n.type === j.ABu.TWITTER && o && (s = (0, r.jsx)(u.u, {
      text: k.intl.string(k.t.Jebrww),
      children: (0, r.jsx)(S.Z, {
        color: c.Z.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(f.kmB, {
          size: "xs",
          color: c.Z.unsafe_rawColors.WHITE.css
        })
      })
    })), (0, r.jsxs)("div", {
      className: U.connectionHeader,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: U.connectionIcon,
        src: (0, d.wj)(a) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: U.connectionAccountLabelContainer,
          children: [(0, r.jsx)(f.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: U.connectionAccountValue,
            children: e.name
          }), null != s && (0, r.jsx)("div", {
            className: U.connectionAccountLabelVerified,
            children: s
          })]
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: U.connectionAccountLabel,
          children: i.name
        })]
      }), (0, r.jsx)(f.P3F, {
        className: U.connectionDelete,
        onClick: ei,
        "aria-label": k.intl.string(k.t.ppppRJ),
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

  function J(e) {
    return e.twoWayLink ? null : e.type === j.ABu.XBOX ? (0, r.jsx)(L.Y, {}) : e.type === j.ABu.PLAYSTATION ? (0, r.jsx)(x.t, {}) : null
  }

  function $(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      a = (0, b.FI)(n[M.PC.CREATED_AT], o);
    switch (e.type) {
      case j.ABu.REDDIT:
        i = (0, O.oP)(n, U.metadataItem);
        break;
      case j.ABu.STEAM:
        i = (0, O.Dq)(n, U.metadataItem);
        break;
      case j.ABu.BLUESKY:
      case j.ABu.TWITTER:
      case j.ABu.MASTODON:
        i = (0, O.rJ)(n, U.metadataItem);
        break;
      case j.ABu.EBAY:
        i = (0, O.ul)(n, U.metadataItem);
        break;
      case j.ABu.PAYPAL:
        i = (0, O.li)(n, U.metadataItem);
        break;
      case j.ABu.TIKTOK:
        i = (0, O.hf)(n, U.metadataItem)
    }
    null !== a && (null == i && (i = []), null == i || i.push((0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: U.connectedAccountVanityMetadataCreatedAt,
      children: k.intl.format(k.t["9rfonh"], {
        date: a
      })
    }, "member-since")));
    let s = Y.includes(e.id),
      l = k.intl.string(k.t.wzzjk9);
    if (null == i || 0 === i.length)
      if (true !== g.Z.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(f.IGR, {
        className: U.connectionMetadataUpsellTag,
        text: k.intl.string(k.t.y2b7CA)
      }, "badge"), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: U.connectionMetadataUpsellDescription,
        children: k.intl.format(k.t.Up2ni7, {
          helpdeskUrl: N.Z.getArticleURL(j.BhN.CONNECTION_DETAILS)
        })
      }, "label")], l = k.intl.string(k.t["LVh3/5"]);
    return s && (l = k.intl.string(k.t.i4jeWR)), i.push((0, r.jsx)("div", {
      className: U.metadataRefreshButton,
      children: (0, r.jsx)(f.Button, {
        text: l,
        variant: "secondary",
        size: "sm",
        loading: F,
        disabled: s,
        "aria-label": k.intl.string(k.t.sCkLYH),
        onClick: s ? true : () => {
          H(true), _.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              Y.push(e.id), W(Y), H(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: U.metadataContainer,
      children: i
    })
  }

  function ee(e) {
    var t;
    let i, a, o;
    return j.BFP.has(n.type) && (i = (0, r.jsx)(f.rsf, {
      label: k.intl.string(k.t["+KCMSi"]),
      checked: l,
      onChange: es
    })), j.vbS.has(n.type) && (a = (0, r.jsx)(f.rsf, {
      label: k.intl.format(k.t["6u6J0q"], {
        platform: e.name
      }),
      checked: T,
      onChange: el
    })), (null == (t = g.Z.get(n.type)) ? true : t.hasMetadata) === true && (o = (0, r.jsx)(f.rsf, {
      label: k.intl.string(k.t.FYKGsL),
      checked: 1 === v,
      onChange: eo,
      disabled: 1 !== h || null == n.metadata
    })), (0, r.jsxs)("div", {
      className: U.connectionOptions,
      children: [(0, r.jsx)(f.rsf, {
        label: k.intl.string(k.t.f7yOAX),
        checked: 1 === h,
        onChange: ea
      }), o, a, i]
    })
  }

  function et() {
    return n.revoked ? (0, r.jsx)(s.Wn, {
      messageType: s.QYI.INFO,
      children: k.intl.format(k.t["6C4lgA"], {
        onReconnect: er
      })
    }) : n.integrations.length > 0 ? (0, r.jsx)(f.gNt, {
      label: k.intl.string(k.t.fOe3fZ),
      children: n.integrations.map(e => (0, r.jsx)(V, {
        integration: e
      }, e.id))
    }) : true
  }

  function en() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.izJ, {})
  }

  function er() {
    (0, y.Z)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function ei() {
    let e = g.Z.get(n.type);
    (0, f.h7j)(i => (0, r.jsx)(s.Modal, B(Z({
      title: k.intl.formatToPlainString(k.t.U5x12f, {
        name: e.name
      }),
      subtitle: k.intl.format(k.t.VgqIPj, {
        provider: e.name
      }),
      actions: [{
        text: k.intl.string(k.t["ETE/oC"]),
        onClick: i.onClose,
        variant: "secondary"
      }, {
        text: k.intl.string(k.t.bsbMVz),
        onClick: () => {
          t(), i.onClose()
        },
        variant: "primary"
      }]
    }, i), {
      children: (0, w.Z)(n) && (0, r.jsx)(R.Z, {
        children: k.intl.format(k.t.COW3Xn, {
          platformName: e.name
        })
      })
    })))
  }

  function ea(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      P(r), (0, y.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    m(r), _.Z.setVisibility(n.type, n.id, r)
  }

  function eo(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      G(r), (0, y.Z)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    I(r), _.Z.setMetadataVisibility(n.type, n.id, r)
  }

  function es(e) {
    p(e), _.Z.setFriendSync(n.type, n.id, e)
  }

  function el(e) {
    C(e), _.Z.setShowActivity(n.type, n.id, e)
  }
  return i.useEffect(() => {
    Q.current = q
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = Q.current;
    null != e && (m(e), _.Z.setVisibility(n.type, n.id, e), P(null)), null != t && (I(t), _.Z.setMetadataVisibility(n.type, n.id, t), G(null))
  }, [n]), (0, r.jsxs)("div", {
    className: U.connection,
    children: [X(n), J(n), $(n), ee(z), en(), et()]
  })
}

function Y() {
  return (0, r.jsx)(f.gNt, {
    label: k.intl.string(k.t.ZeDrUf),
    description: k.intl.format(k.t["oYc+Gz"], {
      privacyPolicyUrl: j.EYA.PRIVACY
    }),
    children: (0, r.jsx)(K, {})
  })
}

function W(e) {
  let t = g.Z.get(e);
  (0, y.Z)({
    platformType: t.type
  }), A.default.track(j.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function K() {
  function e() {
    p.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: W
    })
  }
  let t = (0, E.fq)();
  return (0, r.jsxs)("div", {
    className: U.connectionsContainer,
    children: [t.slice(0, 10).map(e => (0, r.jsx)(h.Z, {
      type: e.type,
      className: U.__invalid_accountButton,
      innerClassName: U.accountButtonInner
    }, e.type)), (0, r.jsx)(u.u, {
      text: k.intl.string(k.t.QqTz8b),
      children: (0, r.jsx)("div", {
        className: o()(U.accountAddWrapper, U.__invalid_accountButton),
        children: (0, r.jsx)(f.tEY, {
          children: (0, r.jsx)("button", {
            className: o()(U.accountAddInner, U.accountButtonInner),
            type: "button",
            onClick: e,
            "aria-label": k.intl.string(k.t.Zhcj9X),
            children: (0, r.jsx)(f.Fbu, {
              color: "currentColor",
              size: "md",
              "aria-label": k.intl.string(k.t.QqTz8b)
            })
          })
        })
      })
    })]
  })
}

function z(e) {
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
  return t = n ? (0, r.jsx)(f.$jN, {
    type: f.$jN.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(f.ubH, {
    theme: a,
    children: (0, r.jsx)(f.OZU, {
      note: k.intl.string(k.t.WenGZ2),
      children: k.intl.string(k.t.aoLS84)
    })
  }) : i.filter(e => g.Z.isSupported(e.type)).map((e, t) => (0, r.jsx)(H, {
    theme: a,
    account: e,
    locale: o,
    onDisconnect: () => s(e)
  }, t)), (0, r.jsx)("div", {
    className: U.connectionList,
    children: t
  })
}

function q() {
  let e = (0, l.e7)([C.Z], () => C.Z.hidePersonalInformation),
    t = (0, l.e7)([I.Z], () => I.Z.isFetching()),
    n = (0, l.e7)([I.Z], () => I.Z.getAccounts()),
    i = (0, m.ZP)(),
    a = (0, l.e7)([P.default], () => P.default.locale);
  return e ? null : (0, r.jsx)(z, {
    fetching: t,
    accounts: n,
    theme: i,
    locale: a
  })
}
let Q = () => {
  let e = (0, l.e7)([I.Z], () => I.Z.isFetching()),
    t = (0, l.e7)([I.Z], () => I.Z.getAccounts()),
    n = (0, m.ZP)(),
    a = (0, l.e7)([P.default], () => P.default.locale);
  return i.useEffect(() => {
    _.Z.fetch()
  }, []), (0, r.jsxs)(D.Z, {
    title: k.intl.string(k.t["3fe7U5"]),
    children: [(0, r.jsx)(Y, {}), (0, r.jsx)(f.izJ, {
      gap: 24
    }), (0, r.jsx)(z, {
      fetching: e,
      accounts: t,
      theme: n,
      locale: a
    })]
  })
}