/** Chunk was on web.js **/
/** chunk id: 75698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => Z,
  d7: () => X,
  u: () => W
}), require("./896048.js"), require("./321073.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77468 = require("./77468.js"),
  Chunk289498 = require("./289498.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk681819 = require("./681819.js"),
  Chunk370480 = require("./370480.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk169869 = require("./169869.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk496885 = require("./496885.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk71393 = require("./71393.js"),
  Chunk351906 = require("./351906.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk773669 = require("./773669.js"),
  Chunk747454 = require("./747454.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk790174 = require("./790174.jsx"),
  Chunk131678 = require("./131678.jsx"),
  Chunk138410 = require("./138410.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk783419 = require("./783419.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk612028 = require("./612028.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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
let H = e => {
  var t, n;
  let i, {
      integration: a
    } = e,
    {
      isJoining: s,
      joinErrorMessage: o,
      showJoinErrorMessage: c
    } = (0, l.cf)([I.A], () => ({
      isJoining: I.A.isJoining(a.id),
      joinErrorMessage: "" === I.A.joinErrorMessage(a.id) ? k.intl.string(k.t.j2d6Km) : I.A.joinErrorMessage(a.id),
      showJoinErrorMessage: true !== I.A.joinErrorMessage(a.id)
    }), [a.id]);

  function u() {
    _.A.joinServer(a.id, () => {})
  }
  return null == (0, l.bG)([S.A], () => S.A.getGuild(a.guild.id), [a.guild.id]) && (i = (0, r.jsx)(f.Button, {
    size: "sm",
    onClick: u,
    disabled: s,
    variant: "primary",
    text: s ? k.intl.string(k.t.RXvQQu) : k.intl.string(k.t.XpeFYr)
  })), (0, r.jsxs)("div", {
    className: U.iA,
    children: [(0, r.jsxs)("div", {
      className: U.XX,
      children: [(0, r.jsx)(v.A, {
        size: v.A.Sizes.SMALL,
        guild: a.guild,
        className: U.$f
      }), (0, r.jsxs)("div", {
        className: U.Vn,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: a.guild.name
        }), (0, r.jsx)(f.MzZ, {
          href: null == (n = g.A.get(a.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, a.account),
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
      className: U.R,
      children: o
    })]
  })
};

function Y(e) {
  let {
    onDisconnect: t,
    account: n,
    theme: a,
    locale: s
  } = e, [l, p] = i.useState(n.friendSync), [h, m] = i.useState(n.visibility), [v, I] = i.useState(n.metadataVisibility), [S, T] = i.useState(n.showActivity), [C, R] = i.useState(null), [D, G] = i.useState(null), [F, Y] = i.useState(false), [W, K] = i.useState([]), z = (0, E.ML)(n.type), q = g.A.get(z);
  i.useEffect(() => {
    p(n.friendSync), m(n.visibility), I(n.metadataVisibility), T(n.showActivity)
  }, [n]);
  let X = {
      inProgressVisibility: C,
      inProgressMetadataVisibility: D
    },
    Z = i.useRef(X);

  function Q(e) {
    var t;
    let n = g.A.get(e.type),
      i = g.A.get(z),
      s = "1" === (null != (t = e.metadata) ? t : {})[M.pK.TWITTER_VERIFIED],
      o = null;
    return n.type === j.fg2.TWITTER && s && (o = (0, r.jsx)(u.m, {
      text: k.intl.string(k.t.Jebrww),
      children: (0, r.jsx)(A.A, {
        color: c.A.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(f.Uzd, {
          size: "xs",
          color: c.A.unsafe_rawColors.WHITE.css
        })
      })
    })), (0, r.jsxs)("div", {
      className: U.Il,
      children: [(0, r.jsx)("img", {
        alt: i.name,
        className: U.gj,
        src: (0, d.Mw)(a) ? i.icon.darkSVG : i.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: U.$p,
          children: [(0, r.jsx)(f.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: U.RW,
            children: e.name
          }), null != o && (0, r.jsx)("div", {
            className: U.cG,
            children: o
          })]
        }), (0, r.jsx)(f.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: U.Au,
          children: i.name
        })]
      }), (0, r.jsx)(f.DUT, {
        className: U.uH,
        onClick: ei,
        "aria-label": k.intl.string(k.t.ppppRJ),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, r.jsx)(f.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }

  function $(e) {
    return e.twoWayLink ? null : e.type === j.fg2.XBOX ? (0, r.jsx)(L._, {}) : e.type === j.fg2.PLAYSTATION ? (0, r.jsx)(x.j, {}) : null
  }

  function J(e) {
    var t;
    let n = null != (t = e.metadata) ? t : {},
      i = null,
      a = (0, y.An)(n[M.pK.CREATED_AT], s);
    switch (e.type) {
      case j.fg2.REDDIT:
        i = (0, O.xE)(n, U.Nz);
        break;
      case j.fg2.STEAM:
        i = (0, O.dy)(n, U.Nz);
        break;
      case j.fg2.BLUESKY:
      case j.fg2.TWITTER:
      case j.fg2.MASTODON:
        i = (0, O.ED)(n, U.Nz);
        break;
      case j.fg2.EBAY:
        i = (0, O.ub)(n, U.Nz);
        break;
      case j.fg2.PAYPAL:
        i = (0, O.gZ)(n, U.Nz);
        break;
      case j.fg2.TIKTOK:
        i = (0, O.HU)(n, U.Nz)
    }
    null !== a && (null == i && (i = []), null == i || i.push((0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: "text-subtle",
      className: U.M4,
      children: k.intl.format(k.t["9rfonh"], {
        date: a
      })
    }, "member-since")));
    let o = W.includes(e.id),
      l = k.intl.string(k.t.wzzjk9);
    if (null == i || 0 === i.length)
      if (true !== g.A.get(e.type).hasMetadata) return null;
      else i = [(0, r.jsx)(f.LpS, {
        className: U.Z3,
        text: k.intl.string(k.t.y2b7CA)
      }, "badge"), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        className: U.vt,
        children: k.intl.format(k.t.Up2ni7, {
          helpdeskUrl: N.A.getArticleURL(j.MVz.CONNECTION_DETAILS)
        })
      }, "label")], l = k.intl.string(k.t["LVh3/5"]);
    return o && (l = k.intl.string(k.t.i4jeWR)), i.push((0, r.jsx)("div", {
      className: U.jy,
      children: (0, r.jsx)(f.Button, {
        text: l,
        variant: "secondary",
        size: "sm",
        loading: F,
        disabled: o,
        "aria-label": k.intl.string(k.t.sCkLYH),
        onClick: o ? true : () => {
          Y(true), _.A.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              W.push(e.id), K(W), Y(false)
            }, 2e3)
          })
        }
      })
    }, "refresh-button")), (0, r.jsx)("div", {
      className: U.tJ,
      children: i
    })
  }

  function ee(e) {
    var t;
    let i, a, s;
    return j.txh.has(n.type) && (i = (0, r.jsx)(f.dOG, {
      label: k.intl.string(k.t["+KCMSi"]),
      checked: l,
      onChange: eo
    })), j.ewM.has(n.type) && (a = (0, r.jsx)(f.dOG, {
      label: k.intl.format(k.t["6u6J0q"], {
        platform: e.name
      }),
      checked: S,
      onChange: el
    })), (null == (t = g.A.get(n.type)) ? true : t.hasMetadata) === true && (s = (0, r.jsx)(f.dOG, {
      label: k.intl.string(k.t.FYKGsL),
      checked: 1 === v,
      onChange: es,
      disabled: 1 !== h || null == n.metadata
    })), (0, r.jsxs)("div", {
      className: U.HZ,
      children: [(0, r.jsx)(f.dOG, {
        label: k.intl.string(k.t.f7yOAX),
        checked: 1 === h,
        onChange: ea
      }), s, a, i]
    })
  }

  function et() {
    return n.revoked ? (0, r.jsx)(o.po8, {
      messageType: o.YCn.INFO,
      children: k.intl.format(k.t["6C4lgA"], {
        onReconnect: er
      })
    }) : n.integrations.length > 0 ? (0, r.jsx)(f.D0$, {
      label: k.intl.string(k.t.fOe3fZ),
      children: n.integrations.map(e => (0, r.jsx)(H, {
        integration: e
      }, e.id))
    }) : true
  }

  function en() {
    if (n.revoked || n.integrations.length > 0) return (0, r.jsx)(f.cGx, {})
  }

  function er() {
    (0, b.A)({
      platformType: n.type,
      location: "User Settings"
    })
  }

  function ei() {
    let e = g.A.get(n.type);
    (0, f.qfG)(i => (0, r.jsx)(o.Modal, B(V({
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
      children: (0, w.A)(n) && (0, r.jsx)(P.A, {
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
      R(r), (0, b.A)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    m(r), _.A.setVisibility(n.type, n.id, r)
  }

  function es(e) {
    let {
      verified: t
    } = n, r = +!!e;
    if (e && !t) {
      G(r), (0, b.A)({
        platformType: n.type,
        location: "User Settings"
      });
      return
    }
    I(r), _.A.setMetadataVisibility(n.type, n.id, r)
  }

  function eo(e) {
    p(e), _.A.setFriendSync(n.type, n.id, e)
  }

  function el(e) {
    T(e), _.A.setShowActivity(n.type, n.id, e)
  }
  return i.useEffect(() => {
    Z.current = X
  }), i.useEffect(() => {
    if (false === n.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = Z.current;
    null != e && (m(e), _.A.setVisibility(n.type, n.id, e), R(null)), null != t && (I(t), _.A.setMetadataVisibility(n.type, n.id, t), G(null))
  }, [n]), (0, r.jsxs)("div", {
    className: U.FI,
    children: [Q(n), $(n), J(n), ee(q), en(), et()]
  })
}

function W() {
  return (0, r.jsx)(f.D0$, {
    label: k.intl.string(k.t.ZeDrUf),
    description: k.intl.format(k.t["oYc+Gz"], {
      privacyPolicyUrl: j.X7G.PRIVACY
    }),
    children: (0, r.jsx)(z, {})
  })
}

function K(e) {
  let t = g.A.get(e);
  (0, b.A)({
    platformType: t.type
  }), C.default.track(j.HAw.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function z() {
  function e() {
    p.h.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: K
    })
  }
  let t = (0, E.gn)();
  return (0, r.jsxs)("div", {
    className: U.lA,
    children: [t.slice(0, 10).map(e => (0, r.jsx)(h.A, {
      type: e.type,
      className: U.__invalid_accountButton,
      innerClassName: U.U$
    }, e.type)), (0, r.jsx)(u.m, {
      text: k.intl.string(k.t.QqTz8b),
      children: (0, r.jsx)("div", {
        className: s()(U.ej, U.__invalid_accountButton),
        children: (0, r.jsx)(f.vN3, {
          children: (0, r.jsx)("button", {
            className: s()(U.R8, U.U$),
            type: "button",
            onClick: e,
            "aria-label": k.intl.string(k.t.Zhcj9X),
            children: (0, r.jsx)(f._BQ, {
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

function q(e) {
  let t, {
    fetching: n,
    accounts: i,
    theme: a,
    locale: s
  } = e;

  function o(e) {
    let {
      type: t,
      id: n
    } = e;
    _.A.disconnect(t, n)
  }
  return t = n ? (0, r.jsx)(f.y$y, {
    type: f.y$y.Type.SPINNING_CIRCLE
  }) : 0 === i.length ? (0, r.jsx)(f.ppr, {
    theme: a,
    children: (0, r.jsx)(f.SGT, {
      note: k.intl.string(k.t.WenGZ2),
      children: k.intl.string(k.t.aoLS84)
    })
  }) : i.filter(e => g.A.isSupported(e.type)).map((e, t) => (0, r.jsx)(Y, {
    theme: a,
    account: e,
    locale: s,
    onDisconnect: () => o(e)
  }, t)), (0, r.jsx)("div", {
    className: U.V,
    children: t
  })
}

function X() {
  let e = (0, l.bG)([T.A], () => T.A.hidePersonalInformation),
    t = (0, l.bG)([I.A], () => I.A.isFetching()),
    n = (0, l.bG)([I.A], () => I.A.getAccounts()),
    i = (0, m.Ay)(),
    a = (0, l.bG)([R.default], () => R.default.locale);
  return e ? null : (0, r.jsx)(q, {
    fetching: t,
    accounts: n,
    theme: i,
    locale: a
  })
}
let Z = () => {
  let e = (0, l.bG)([I.A], () => I.A.isFetching()),
    t = (0, l.bG)([I.A], () => I.A.getAccounts()),
    n = (0, m.Ay)(),
    a = (0, l.bG)([R.default], () => R.default.locale);
  return i.useEffect(() => {
    _.A.fetch()
  }, []), (0, r.jsxs)(D.A, {
    title: k.intl.string(k.t["3fe7U5"]),
    children: [(0, r.jsx)(W, {}), (0, r.jsx)(f.cGx, {
      gap: 24
    }), (0, r.jsx)(q, {
      fetching: e,
      accounts: t,
      theme: n,
      locale: a
    })]
  })
}