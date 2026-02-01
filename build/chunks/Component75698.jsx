/** Chunk was on 42402 **/
/** chunk id: 75698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => W,
  d7: () => K,
  u: () => B
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
let U = e => {
  var t, n;
  let l, {
      integration: i
    } = e,
    {
      isJoining: s,
      joinErrorMessage: a,
      showJoinErrorMessage: c
    } = (0, o.cf)([v.A], () => ({
      isJoining: v.A.isJoining(i.id),
      joinErrorMessage: "" === v.A.joinErrorMessage(i.id) ? G.intl.string(G.t.j2d6Km) : v.A.joinErrorMessage(i.id),
      showJoinErrorMessage: true !== v.A.joinErrorMessage(i.id)
    }), [i.id]);
  return null != (0, o.bG)([E.A], () => E.A.getGuild(i.guild.id), [i.guild.id]) || (l = (0, r.jsx)(p.Button, {
    size: "sm",
    onClick: function() {
      g.A.joinServer(i.id, () => {})
    },
    disabled: s,
    variant: "primary",
    text: s ? G.intl.string(G.t.RXvQQu) : G.intl.string(G.t.XpeFYr)
  })), (0, r.jsxs)("div", {
    className: k.iA,
    children: [(0, r.jsxs)("div", {
      className: k.XX,
      children: [(0, r.jsx)(x.A, {
        size: x.A.Sizes.SMALL,
        guild: i.guild,
        className: k.$f
      }), (0, r.jsxs)("div", {
        className: k.Vn,
        children: [(0, r.jsx)(p.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: i.guild.name
        }), (0, r.jsx)(p.MzZ, {
          href: null == (n = b.A.get(i.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, i.account),
          children: (0, r.jsx)(p.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: i.account.name
          })
        })]
      }), l]
    }), c && (0, r.jsx)(p.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: k.R,
      children: a
    })]
  })
};

function V(e) {
  var t, n;
  let i, s, o, h, f, m, x, {
      onDisconnect: v,
      account: E,
      theme: C,
      locale: S
    } = e,
    [N, w] = l.useState(E.friendSync),
    [V, B] = l.useState(E.visibility),
    [H, F] = l.useState(E.metadataVisibility),
    [Y, K] = l.useState(E.showActivity),
    [W, z] = l.useState(null),
    [X, q] = l.useState(null),
    [J, Q] = l.useState(false),
    [Z, $] = l.useState([]),
    ee = (0, A.ML)(E.type),
    et = b.A.get(ee);
  l.useEffect(() => {
    w(E.friendSync), B(E.visibility), F(E.metadataVisibility), K(E.showActivity)
  }, [E]);
  let en = {
      inProgressVisibility: W,
      inProgressMetadataVisibility: X
    },
    er = l.useRef(en);
  return l.useEffect(() => {
    er.current = en
  }), l.useEffect(() => {
    if (false === E.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = er.current;
    null != e && (B(e), g.A.setVisibility(E.type, E.id, e), z(null)), null != t && (F(t), g.A.setMetadataVisibility(E.type, E.id, t), q(null))
  }, [E]), (0, r.jsxs)("div", {
    className: k.FI,
    children: [(i = b.A.get(E.type), s = b.A.get(ee), o = "1" === (null != (t = E.metadata) ? t : {})[M.pK.TWITTER_VERIFIED], h = null, i.type === L.fg2.TWITTER && o && (h = (0, r.jsx)(u.m, {
      text: G.intl.string(G.t.Jebrww),
      children: (0, r.jsx)(_.A, {
        color: c.A.unsafe_rawColors.TWITTER.css,
        children: (0, r.jsx)(p.Uzd, {
          size: "xs",
          color: c.A.unsafe_rawColors.WHITE.css
        })
      })
    })), (0, r.jsxs)("div", {
      className: k.Il,
      children: [(0, r.jsx)("img", {
        alt: s.name,
        className: k.gj,
        src: (0, d.Mw)(C) ? s.icon.darkSVG : s.icon.lightSVG
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: k.$p,
          children: [(0, r.jsx)(p.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: k.RW,
            children: E.name
          }), null != h && (0, r.jsx)("div", {
            className: k.cG,
            children: h
          })]
        }), (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: k.Au,
          children: s.name
        })]
      }), (0, r.jsx)(p.DUT, {
        className: k.uH,
        onClick: function() {
          let e = b.A.get(E.type);
          (0, p.qfG)(t => {
            var n, l;
            return (0, r.jsx)(a.Modal, (n = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({
              title: G.intl.formatToPlainString(G.t.U5x12f, {
                name: e.name
              }),
              subtitle: G.intl.format(G.t.VgqIPj, {
                provider: e.name
              }),
              actions: [{
                text: G.intl.string(G.t["ETE/oC"]),
                onClick: t.onClose,
                variant: "secondary"
              }, {
                text: G.intl.string(G.t.bsbMVz),
                onClick: () => {
                  v(), t.onClose()
                },
                variant: "primary"
              }]
            }, t), l = l = {
              children: (0, T.A)(E) && (0, r.jsx)(P.A, {
                children: G.intl.format(G.t.COW3Xn, {
                  platformName: e.name
                })
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
          })
        },
        "aria-label": G.intl.string(G.t.ppppRJ),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, r.jsx)(p.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })), E.twoWayLink ? null : E.type === L.fg2.XBOX ? (0, r.jsx)(D._, {}) : E.type === L.fg2.PLAYSTATION ? (0, r.jsx)(R.j, {}) : null, function(e) {
      var t;
      let n = null != (t = e.metadata) ? t : {},
        l = null,
        i = (0, y.An)(n[M.pK.CREATED_AT], S);
      switch (e.type) {
        case L.fg2.REDDIT:
          l = (0, j.xE)(n, k.Nz);
          break;
        case L.fg2.STEAM:
          l = (0, j.dy)(n, k.Nz);
          break;
        case L.fg2.BLUESKY:
        case L.fg2.TWITTER:
        case L.fg2.MASTODON:
          l = (0, j.ED)(n, k.Nz);
          break;
        case L.fg2.EBAY:
          l = (0, j.ub)(n, k.Nz);
          break;
        case L.fg2.PAYPAL:
          l = (0, j.gZ)(n, k.Nz);
          break;
        case L.fg2.TIKTOK:
          l = (0, j.HU)(n, k.Nz)
      }
      null !== i && (null == l && (l = []), null == l || l.push((0, r.jsx)(p.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: k.M4,
        children: G.intl.format(G.t["9rfonh"], {
          date: i
        })
      }, "member-since")));
      let s = Z.includes(e.id),
        a = G.intl.string(G.t.wzzjk9);
      if (null == l || 0 === l.length)
        if (true !== b.A.get(e.type).hasMetadata) return null;
        else l = [(0, r.jsx)(p.LpS, {
          className: k.Z3,
          text: G.intl.string(G.t.y2b7CA)
        }, "badge"), (0, r.jsx)(p.Text, {
          variant: "text-xs/normal",
          className: k.vt,
          children: G.intl.format(G.t.Up2ni7, {
            helpdeskUrl: I.A.getArticleURL(L.MVz.CONNECTION_DETAILS)
          })
        }, "label")], a = G.intl.string(G.t["LVh3/5"]);
      return s && (a = G.intl.string(G.t.i4jeWR)), l.push((0, r.jsx)("div", {
        className: k.jy,
        children: (0, r.jsx)(p.Button, {
          text: a,
          variant: "secondary",
          size: "sm",
          loading: J,
          disabled: s,
          "aria-label": G.intl.string(G.t.sCkLYH),
          onClick: s ? true : () => {
            Q(true), g.A.refresh(e.type, e.id).finally(() => {
              setTimeout(() => {
                Z.push(e.id), $(Z), Q(false)
              }, 2e3)
            })
          }
        })
      }, "refresh-button")), (0, r.jsx)("div", {
        className: k.tJ,
        children: l
      })
    }(E), (L.txh.has(E.type) && (f = (0, r.jsx)(p.dOG, {
      label: G.intl.string(G.t["+KCMSi"]),
      checked: N,
      onChange: function(e) {
        w(e), g.A.setFriendSync(E.type, E.id, e)
      }
    })), L.ewM.has(E.type) && (m = (0, r.jsx)(p.dOG, {
      label: G.intl.format(G.t["6u6J0q"], {
        platform: et.name
      }),
      checked: Y,
      onChange: function(e) {
        K(e), g.A.setShowActivity(E.type, E.id, e)
      }
    })), (null == (n = b.A.get(E.type)) ? true : n.hasMetadata) === true && (x = (0, r.jsx)(p.dOG, {
      label: G.intl.string(G.t.FYKGsL),
      checked: 1 === H,
      onChange: function(e) {
        let {
          verified: t
        } = E, n = +!!e;
        if (e && !t) {
          q(n), (0, O.A)({
            platformType: E.type,
            location: "User Settings"
          });
          return
        }
        F(n), g.A.setMetadataVisibility(E.type, E.id, n)
      },
      disabled: 1 !== V || null == E.metadata
    })), (0, r.jsxs)("div", {
      className: k.HZ,
      children: [(0, r.jsx)(p.dOG, {
        label: G.intl.string(G.t.f7yOAX),
        checked: 1 === V,
        onChange: function(e) {
          let {
            verified: t
          } = E, n = +!!e;
          if (e && !t) {
            z(n), (0, O.A)({
              platformType: E.type,
              location: "User Settings"
            });
            return
          }
          B(n), g.A.setVisibility(E.type, E.id, n)
        }
      }), x, m, f]
    })), function() {
      if (E.revoked || E.integrations.length > 0) return (0, r.jsx)(p.cGx, {})
    }(), E.revoked ? (0, r.jsx)(a.po8, {
      messageType: a.YCn.INFO,
      children: G.intl.format(G.t["6C4lgA"], {
        onReconnect: function() {
          (0, O.A)({
            platformType: E.type,
            location: "User Settings"
          })
        }
      })
    }) : E.integrations.length > 0 ? (0, r.jsx)(p.D0$, {
      label: G.intl.string(G.t.fOe3fZ),
      children: E.integrations.map(e => (0, r.jsx)(U, {
        integration: e
      }, e.id))
    }) : true]
  })
}

function B() {
  return (0, r.jsx)(p.D0$, {
    label: G.intl.string(G.t.ZeDrUf),
    description: G.intl.format(G.t["oYc+Gz"], {
      privacyPolicyUrl: L.X7G.PRIVACY
    }),
    children: (0, r.jsx)(F, {})
  })
}

function H(e) {
  let t = b.A.get(e);
  (0, O.A)({
    platformType: t.type
  }), S.default.track(L.HAw.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function F() {
  let e = (0, A.gn)();
  return (0, r.jsxs)("div", {
    className: k.lA,
    children: [e.slice(0, 10).map(e => (0, r.jsx)(f.A, {
      type: e.type,
      className: k.__invalid_accountButton,
      innerClassName: k.U$
    }, e.type)), (0, r.jsx)(u.m, {
      text: G.intl.string(G.t.QqTz8b),
      children: (0, r.jsx)("div", {
        className: s()(k.ej, k.__invalid_accountButton),
        children: (0, r.jsx)(p.vN3, {
          children: (0, r.jsx)("button", {
            className: s()(k.R8, k.U$),
            type: "button",
            onClick: function() {
              h.h.dispatch({
                type: "CONNECTIONS_GRID_MODAL_SHOW",
                onComplete: H
              })
            },
            "aria-label": G.intl.string(G.t.Zhcj9X),
            children: (0, r.jsx)(p._BQ, {
              color: "currentColor",
              size: "md",
              "aria-label": G.intl.string(G.t.QqTz8b)
            })
          })
        })
      })
    })]
  })
}

function Y(e) {
  let t, {
    fetching: n,
    accounts: l,
    theme: i,
    locale: s
  } = e;
  return t = n ? (0, r.jsx)(p.y$y, {
    type: p.y$y.Type.SPINNING_CIRCLE
  }) : 0 === l.length ? (0, r.jsx)(p.ppr, {
    theme: i,
    children: (0, r.jsx)(p.SGT, {
      note: G.intl.string(G.t.WenGZ2),
      children: G.intl.string(G.t.aoLS84)
    })
  }) : l.filter(e => b.A.isSupported(e.type)).map((e, t) => (0, r.jsx)(V, {
    theme: i,
    account: e,
    locale: s,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: n
      } = e;
      g.A.disconnect(t, n)
    })(e)
  }, t)), (0, r.jsx)("div", {
    className: k.V,
    children: t
  })
}

function K() {
  let e = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
    t = (0, o.bG)([v.A], () => v.A.isFetching()),
    n = (0, o.bG)([v.A], () => v.A.getAccounts()),
    l = (0, m.Ay)(),
    i = (0, o.bG)([N.default], () => N.default.locale);
  return e ? null : (0, r.jsx)(Y, {
    fetching: t,
    accounts: n,
    theme: l,
    locale: i
  })
}
let W = () => {
  let e = (0, o.bG)([v.A], () => v.A.isFetching()),
    t = (0, o.bG)([v.A], () => v.A.getAccounts()),
    n = (0, m.Ay)(),
    i = (0, o.bG)([N.default], () => N.default.locale);
  return l.useEffect(() => {
    g.A.fetch()
  }, []), (0, r.jsxs)(w.A, {
    title: G.intl.string(G.t["3fe7U5"]),
    children: [(0, r.jsx)(B, {}), (0, r.jsx)(p.cGx, {
      gap: 24
    }), (0, r.jsx)(Y, {
      fetching: e,
      accounts: t,
      theme: n,
      locale: i
    })]
  })
}