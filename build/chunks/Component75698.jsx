/** Chunk was on 32502 **/
/** chunk id: 75698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => K,
  d7: () => z,
  u: () => H
}), require("./896048.js"), require("./321073.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
let M = e => {
  var t, n;
  let l, {
      integration: s
    } = e,
    {
      isJoining: r,
      joinErrorMessage: a,
      showJoinErrorMessage: c
    } = (0, o.cf)([C.A], () => ({
      isJoining: C.A.isJoining(s.id),
      joinErrorMessage: "" === C.A.joinErrorMessage(s.id) ? w.intl.string(w.t.j2d6Km) : C.A.joinErrorMessage(s.id),
      showJoinErrorMessage: true !== C.A.joinErrorMessage(s.id)
    }), [s.id]);
  return null != (0, o.bG)([v.A], () => v.A.getGuild(s.guild.id), [s.guild.id]) || (l = (0, i.jsx)(h.Button, {
    size: "sm",
    onClick: function() {
      x.A.joinServer(s.id, () => {})
    },
    disabled: r,
    variant: "primary",
    text: r ? w.intl.string(w.t.RXvQQu) : w.intl.string(w.t.XpeFYr)
  })), (0, i.jsxs)("div", {
    className: V.iA,
    children: [(0, i.jsxs)("div", {
      className: V.XX,
      children: [(0, i.jsx)(S.A, {
        size: S.A.Sizes.SMALL,
        guild: s.guild,
        className: V.$f
      }), (0, i.jsxs)("div", {
        className: V.Vn,
        children: [(0, i.jsx)(h.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: s.guild.name
        }), (0, i.jsx)(h.MzZ, {
          href: null == (n = A.A.get(s.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, s.account),
          children: (0, i.jsx)(h.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: s.account.name
          })
        })]
      }), l]
    }), c && (0, i.jsx)(h.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: V.R,
      children: a
    })]
  })
};

function U(e) {
  var t, n;
  let s, r, o, g, p, m, S, {
      onDisconnect: C,
      account: v,
      theme: y,
      locale: T
    } = e,
    [N, R] = l.useState(v.friendSync),
    [U, H] = l.useState(v.visibility),
    [B, Y] = l.useState(v.metadataVisibility),
    [F, z] = l.useState(v.showActivity),
    [K, W] = l.useState(null),
    [J, Q] = l.useState(null),
    [Z, X] = l.useState(false),
    [q, $] = l.useState([]),
    ee = (0, b.ML)(v.type),
    et = A.A.get(ee);
  l.useEffect(() => {
    R(v.friendSync), H(v.visibility), Y(v.metadataVisibility), z(v.showActivity)
  }, [v]);
  let en = {
      inProgressVisibility: K,
      inProgressMetadataVisibility: J
    },
    ei = l.useRef(en);
  return l.useEffect(() => {
    ei.current = en
  }), l.useEffect(() => {
    if (false === v.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = ei.current;
    null != e && (H(e), x.A.setVisibility(v.type, v.id, e), W(null)), null != t && (Y(t), x.A.setMetadataVisibility(v.type, v.id, t), Q(null))
  }, [v]), (0, i.jsxs)("div", {
    className: V.FI,
    children: [(s = A.A.get(v.type), r = A.A.get(ee), o = "1" === (null != (t = v.metadata) ? t : {})[k.pK.TWITTER_VERIFIED], g = null, s.type === D.fg2.TWITTER && o && (g = (0, i.jsx)(d.m, {
      text: w.intl.string(w.t.Jebrww),
      children: (0, i.jsx)(f.A, {
        color: c.A.unsafe_rawColors.TWITTER.css,
        children: (0, i.jsx)(h.Uzd, {
          size: "xs",
          color: c.A.unsafe_rawColors.WHITE.css
        })
      })
    })), (0, i.jsxs)("div", {
      className: V.Il,
      children: [(0, i.jsx)("img", {
        alt: r.name,
        className: V.gj,
        src: (0, u.Mw)(y) ? r.icon.darkSVG : r.icon.lightSVG
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: V.$p,
          children: [(0, i.jsx)(h.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: V.RW,
            children: v.name
          }), null != g && (0, i.jsx)("div", {
            className: V.cG,
            children: g
          })]
        }), (0, i.jsx)(h.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: V.Au,
          children: r.name
        })]
      }), (0, i.jsx)(h.DUT, {
        className: V.uH,
        onClick: function() {
          let e = A.A.get(v.type);
          (0, h.qfG)(t => {
            var n, l;
            return (0, i.jsx)(a.Modal, (n = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({
              title: w.intl.formatToPlainString(w.t.U5x12f, {
                name: e.name
              }),
              subtitle: w.intl.format(w.t.VgqIPj, {
                provider: e.name
              }),
              actions: [{
                text: w.intl.string(w.t["ETE/oC"]),
                onClick: t.onClose,
                variant: "secondary"
              }, {
                text: w.intl.string(w.t.bsbMVz),
                onClick: () => {
                  C(), t.onClose()
                },
                variant: "primary"
              }]
            }, t), l = l = {
              children: (0, I.A)(v) && (0, i.jsx)(P.A, {
                children: w.intl.format(w.t.COW3Xn, {
                  platformName: e.name
                })
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
            }), n))
          })
        },
        "aria-label": w.intl.string(w.t.ppppRJ),
        focusProps: {
          offset: {
            top: false,
            left: false,
            right: false
          }
        },
        children: (0, i.jsx)(h.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })), v.twoWayLink ? null : v.type === D.fg2.XBOX ? (0, i.jsx)(G._, {}) : v.type === D.fg2.PLAYSTATION ? (0, i.jsx)(L.j, {}) : null, function(e) {
      var t;
      let n = null != (t = e.metadata) ? t : {},
        l = null,
        s = (0, j.An)(n[k.pK.CREATED_AT], T);
      switch (e.type) {
        case D.fg2.REDDIT:
          l = (0, E.xE)(n, V.Nz);
          break;
        case D.fg2.STEAM:
          l = (0, E.dy)(n, V.Nz);
          break;
        case D.fg2.BLUESKY:
        case D.fg2.TWITTER:
        case D.fg2.MASTODON:
          l = (0, E.ED)(n, V.Nz);
          break;
        case D.fg2.EBAY:
          l = (0, E.ub)(n, V.Nz);
          break;
        case D.fg2.PAYPAL:
          l = (0, E.gZ)(n, V.Nz);
          break;
        case D.fg2.TIKTOK:
          l = (0, E.HU)(n, V.Nz)
      }
      null !== s && (null == l && (l = []), null == l || l.push((0, i.jsx)(h.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: V.M4,
        children: w.intl.format(w.t["9rfonh"], {
          date: s
        })
      }, "member-since")));
      let r = q.includes(e.id),
        a = w.intl.string(w.t.wzzjk9);
      if (null == l || 0 === l.length)
        if (true !== A.A.get(e.type).hasMetadata) return null;
        else l = [(0, i.jsx)(h.LpS, {
          className: V.Z3,
          text: w.intl.string(w.t.y2b7CA)
        }, "badge"), (0, i.jsx)(h.Text, {
          variant: "text-xs/normal",
          className: V.vt,
          children: w.intl.format(w.t.Up2ni7, {
            helpdeskUrl: _.A.getArticleURL(D.MVz.CONNECTION_DETAILS)
          })
        }, "label")], a = w.intl.string(w.t["LVh3/5"]);
      return r && (a = w.intl.string(w.t.i4jeWR)), l.push((0, i.jsx)("div", {
        className: V.jy,
        children: (0, i.jsx)(h.Button, {
          text: a,
          variant: "secondary",
          size: "sm",
          loading: Z,
          disabled: r,
          "aria-label": w.intl.string(w.t.sCkLYH),
          onClick: r ? true : () => {
            X(true), x.A.refresh(e.type, e.id).finally(() => {
              setTimeout(() => {
                q.push(e.id), $(q), X(false)
              }, 2e3)
            })
          }
        })
      }, "refresh-button")), (0, i.jsx)("div", {
        className: V.tJ,
        children: l
      })
    }(v), (D.txh.has(v.type) && (p = (0, i.jsx)(h.dOG, {
      label: w.intl.string(w.t["+KCMSi"]),
      checked: N,
      onChange: function(e) {
        R(e), x.A.setFriendSync(v.type, v.id, e)
      }
    })), D.ewM.has(v.type) && (m = (0, i.jsx)(h.dOG, {
      label: w.intl.format(w.t["6u6J0q"], {
        platform: et.name
      }),
      checked: F,
      onChange: function(e) {
        z(e), x.A.setShowActivity(v.type, v.id, e)
      }
    })), (null == (n = A.A.get(v.type)) ? true : n.hasMetadata) === true && (S = (0, i.jsx)(h.dOG, {
      label: w.intl.string(w.t.FYKGsL),
      checked: 1 === B,
      onChange: function(e) {
        let {
          verified: t
        } = v, n = +!!e;
        if (e && !t) {
          Q(n), (0, O.A)({
            platformType: v.type,
            location: "User Settings"
          });
          return
        }
        Y(n), x.A.setMetadataVisibility(v.type, v.id, n)
      },
      disabled: 1 !== U || null == v.metadata
    })), (0, i.jsxs)("div", {
      className: V.HZ,
      children: [(0, i.jsx)(h.dOG, {
        label: w.intl.string(w.t.f7yOAX),
        checked: 1 === U,
        onChange: function(e) {
          let {
            verified: t
          } = v, n = +!!e;
          if (e && !t) {
            W(n), (0, O.A)({
              platformType: v.type,
              location: "User Settings"
            });
            return
          }
          H(n), x.A.setVisibility(v.type, v.id, n)
        }
      }), S, m, p]
    })), function() {
      if (v.revoked || v.integrations.length > 0) return (0, i.jsx)(h.cGx, {})
    }(), v.revoked ? (0, i.jsx)(a.po8, {
      messageType: a.YCn.INFO,
      children: w.intl.format(w.t["6C4lgA"], {
        onReconnect: function() {
          (0, O.A)({
            platformType: v.type,
            location: "User Settings"
          })
        }
      })
    }) : v.integrations.length > 0 ? (0, i.jsx)(h.D0$, {
      label: w.intl.string(w.t.fOe3fZ),
      children: v.integrations.map(e => (0, i.jsx)(M, {
        integration: e
      }, e.id))
    }) : true]
  })
}

function H() {
  return (0, i.jsx)(h.D0$, {
    label: w.intl.string(w.t.ZeDrUf),
    description: w.intl.format(w.t["oYc+Gz"], {
      privacyPolicyUrl: D.X7G.PRIVACY
    }),
    children: (0, i.jsx)(Y, {})
  })
}

function B(e) {
  let t = A.A.get(e);
  (0, O.A)({
    platformType: t.type
  }), T.default.track(D.HAw.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function Y() {
  let e = (0, b.gn)();
  return (0, i.jsxs)("div", {
    className: V.lA,
    children: [e.slice(0, 10).map(e => (0, i.jsx)(p.A, {
      type: e.type,
      className: V.__invalid_accountButton,
      innerClassName: V.U$
    }, e.type)), (0, i.jsx)(d.m, {
      text: w.intl.string(w.t.QqTz8b),
      children: (0, i.jsx)("div", {
        className: r()(V.ej, V.__invalid_accountButton),
        children: (0, i.jsx)(h.vN3, {
          children: (0, i.jsx)("button", {
            className: r()(V.R8, V.U$),
            type: "button",
            onClick: function() {
              g.h.dispatch({
                type: "CONNECTIONS_GRID_MODAL_SHOW",
                onComplete: B
              })
            },
            "aria-label": w.intl.string(w.t.Zhcj9X),
            children: (0, i.jsx)(h._BQ, {
              color: "currentColor",
              size: "md",
              "aria-label": w.intl.string(w.t.QqTz8b)
            })
          })
        })
      })
    })]
  })
}

function F(e) {
  let t, {
    fetching: n,
    accounts: l,
    theme: s,
    locale: r
  } = e;
  return t = n ? (0, i.jsx)(h.y$y, {
    type: h.y$y.Type.SPINNING_CIRCLE
  }) : 0 === l.length ? (0, i.jsx)(h.ppr, {
    theme: s,
    children: (0, i.jsx)(h.SGT, {
      note: w.intl.string(w.t.WenGZ2),
      children: w.intl.string(w.t.aoLS84)
    })
  }) : l.filter(e => A.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(U, {
    theme: s,
    account: e,
    locale: r,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: n
      } = e;
      x.A.disconnect(t, n)
    })(e)
  }, t)), (0, i.jsx)("div", {
    className: V.V,
    children: t
  })
}

function z() {
  let e = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
    t = (0, o.bG)([C.A], () => C.A.isFetching()),
    n = (0, o.bG)([C.A], () => C.A.getAccounts()),
    l = (0, m.Ay)(),
    s = (0, o.bG)([N.default], () => N.default.locale);
  return e ? null : (0, i.jsx)(F, {
    fetching: t,
    accounts: n,
    theme: l,
    locale: s
  })
}
let K = () => {
  let e = (0, o.bG)([C.A], () => C.A.isFetching()),
    t = (0, o.bG)([C.A], () => C.A.getAccounts()),
    n = (0, m.Ay)(),
    s = (0, o.bG)([N.default], () => N.default.locale);
  return l.useEffect(() => {
    x.A.fetch()
  }, []), (0, i.jsxs)(R.A, {
    title: w.intl.string(w.t["3fe7U5"]),
    children: [(0, i.jsx)(H, {}), (0, i.jsx)(h.cGx, {
      gap: 24
    }), (0, i.jsx)(F, {
      fetching: e,
      accounts: t,
      theme: n,
      locale: s
    })]
  })
}