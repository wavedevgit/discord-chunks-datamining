/** Chunk was on 82575 **/
/** chunk id: 75698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => W,
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
  let s, {
      integration: l
    } = e,
    {
      isJoining: r,
      joinErrorMessage: a,
      showJoinErrorMessage: c
    } = (0, o.cf)([v.A], () => ({
      isJoining: v.A.isJoining(l.id),
      joinErrorMessage: "" === v.A.joinErrorMessage(l.id) ? w.intl.string(w.t.j2d6Km) : v.A.joinErrorMessage(l.id),
      showJoinErrorMessage: true !== v.A.joinErrorMessage(l.id)
    }), [l.id]);
  return null != (0, o.bG)([T.A], () => T.A.getGuild(l.guild.id), [l.guild.id]) || (s = (0, i.jsx)(g.Button, {
    size: "sm",
    onClick: function() {
      x.A.joinServer(l.id, () => {})
    },
    disabled: r,
    variant: "primary",
    text: r ? w.intl.string(w.t.RXvQQu) : w.intl.string(w.t.XpeFYr)
  })), (0, i.jsxs)("div", {
    className: V.iA,
    children: [(0, i.jsxs)("div", {
      className: V.XX,
      children: [(0, i.jsx)(E.A, {
        size: E.A.Sizes.SMALL,
        guild: l.guild,
        className: V.$f
      }), (0, i.jsxs)("div", {
        className: V.Vn,
        children: [(0, i.jsx)(g.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: l.guild.name
        }), (0, i.jsx)(g.MzZ, {
          href: null == (n = m.A.get(l.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, l.account),
          children: (0, i.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: l.account.name
          })
        })]
      }), s]
    }), c && (0, i.jsx)(g.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: V.R,
      children: a
    })]
  })
};

function U(e) {
  var t, n;
  let l, r, o, h, p, A, E, {
      onDisconnect: v,
      account: T,
      theme: C,
      locale: y
    } = e,
    [I, G] = s.useState(T.friendSync),
    [U, H] = s.useState(T.visibility),
    [B, Y] = s.useState(T.metadataVisibility),
    [F, z] = s.useState(T.showActivity),
    [W, K] = s.useState(null),
    [J, Q] = s.useState(null),
    [X, q] = s.useState(false),
    [Z, $] = s.useState([]),
    ee = (0, j.ML)(T.type),
    et = m.A.get(ee);
  s.useEffect(() => {
    G(T.friendSync), H(T.visibility), Y(T.metadataVisibility), z(T.showActivity)
  }, [T]);
  let en = {
      inProgressVisibility: W,
      inProgressMetadataVisibility: J
    },
    ei = s.useRef(en);
  return s.useEffect(() => {
    ei.current = en
  }), s.useEffect(() => {
    if (false === T.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = ei.current;
    null != e && (H(e), x.A.setVisibility(T.type, T.id, e), K(null)), null != t && (Y(t), x.A.setMetadataVisibility(T.type, T.id, t), Q(null))
  }, [T]), (0, i.jsxs)("div", {
    className: V.FI,
    children: [(l = m.A.get(T.type), r = m.A.get(ee), o = "1" === (null != (t = T.metadata) ? t : {})[k.pK.TWITTER_VERIFIED], h = null, l.type === L.fg2.TWITTER && o && (h = (0, i.jsx)(d.m, {
      text: w.intl.string(w.t.Jebrww),
      children: (0, i.jsx)(f.A, {
        color: c.A.unsafe_rawColors.TWITTER.css,
        children: (0, i.jsx)(g.Uzd, {
          size: "xs",
          color: c.A.unsafe_rawColors.WHITE.css
        })
      })
    })), (0, i.jsxs)("div", {
      className: V.Il,
      children: [(0, i.jsx)("img", {
        alt: r.name,
        className: V.gj,
        src: (0, u.Mw)(C) ? r.icon.darkSVG : r.icon.lightSVG
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsxs)("div", {
          className: V.$p,
          children: [(0, i.jsx)(g.Text, {
            color: "text-strong",
            variant: "text-md/semibold",
            className: V.RW,
            children: T.name
          }), null != h && (0, i.jsx)("div", {
            className: V.cG,
            children: h
          })]
        }), (0, i.jsx)(g.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: V.Au,
          children: r.name
        })]
      }), (0, i.jsx)(g.DUT, {
        className: V.uH,
        onClick: function() {
          let e = m.A.get(T.type);
          (0, g.qfG)(t => {
            var n, s;
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
                  v(), t.onClose()
                },
                variant: "primary"
              }]
            }, t), s = s = {
              children: (0, _.A)(T) && (0, i.jsx)(P.A, {
                children: w.intl.format(w.t.COW3Xn, {
                  platformName: e.name
                })
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(s)).forEach(function(e) {
              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
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
        children: (0, i.jsx)(g.PGe, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })), T.twoWayLink ? null : T.type === L.fg2.XBOX ? (0, i.jsx)(D._, {}) : T.type === L.fg2.PLAYSTATION ? (0, i.jsx)(R.j, {}) : null, function(e) {
      var t;
      let n = null != (t = e.metadata) ? t : {},
        s = null,
        l = (0, b.An)(n[k.pK.CREATED_AT], y);
      switch (e.type) {
        case L.fg2.REDDIT:
          s = (0, S.xE)(n, V.Nz);
          break;
        case L.fg2.STEAM:
          s = (0, S.dy)(n, V.Nz);
          break;
        case L.fg2.BLUESKY:
        case L.fg2.TWITTER:
        case L.fg2.MASTODON:
          s = (0, S.ED)(n, V.Nz);
          break;
        case L.fg2.EBAY:
          s = (0, S.ub)(n, V.Nz);
          break;
        case L.fg2.PAYPAL:
          s = (0, S.gZ)(n, V.Nz);
          break;
        case L.fg2.TIKTOK:
          s = (0, S.HU)(n, V.Nz)
      }
      null !== l && (null == s && (s = []), null == s || s.push((0, i.jsx)(g.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: V.M4,
        children: w.intl.format(w.t["9rfonh"], {
          date: l
        })
      }, "member-since")));
      let r = Z.includes(e.id),
        a = w.intl.string(w.t.wzzjk9);
      if (null == s || 0 === s.length)
        if (true !== m.A.get(e.type).hasMetadata) return null;
        else s = [(0, i.jsx)(g.LpS, {
          className: V.Z3,
          text: w.intl.string(w.t.y2b7CA)
        }, "badge"), (0, i.jsx)(g.Text, {
          variant: "text-xs/normal",
          className: V.vt,
          children: w.intl.format(w.t.Up2ni7, {
            helpdeskUrl: N.A.getArticleURL(L.MVz.CONNECTION_DETAILS)
          })
        }, "label")], a = w.intl.string(w.t["LVh3/5"]);
      return r && (a = w.intl.string(w.t.i4jeWR)), s.push((0, i.jsx)("div", {
        className: V.jy,
        children: (0, i.jsx)(g.Button, {
          text: a,
          variant: "secondary",
          size: "sm",
          loading: X,
          disabled: r,
          "aria-label": w.intl.string(w.t.sCkLYH),
          onClick: r ? true : () => {
            q(true), x.A.refresh(e.type, e.id).finally(() => {
              setTimeout(() => {
                Z.push(e.id), $(Z), q(false)
              }, 2e3)
            })
          }
        })
      }, "refresh-button")), (0, i.jsx)("div", {
        className: V.tJ,
        children: s
      })
    }(T), (L.txh.has(T.type) && (p = (0, i.jsx)(g.dOG, {
      label: w.intl.string(w.t["+KCMSi"]),
      checked: I,
      onChange: function(e) {
        G(e), x.A.setFriendSync(T.type, T.id, e)
      }
    })), L.ewM.has(T.type) && (A = (0, i.jsx)(g.dOG, {
      label: w.intl.format(w.t["6u6J0q"], {
        platform: et.name
      }),
      checked: F,
      onChange: function(e) {
        z(e), x.A.setShowActivity(T.type, T.id, e)
      }
    })), (null == (n = m.A.get(T.type)) ? true : n.hasMetadata) === true && (E = (0, i.jsx)(g.dOG, {
      label: w.intl.string(w.t.FYKGsL),
      checked: 1 === B,
      onChange: function(e) {
        let {
          verified: t
        } = T, n = +!!e;
        if (e && !t) {
          Q(n), (0, O.A)({
            platformType: T.type,
            location: "User Settings"
          });
          return
        }
        Y(n), x.A.setMetadataVisibility(T.type, T.id, n)
      },
      disabled: 1 !== U || null == T.metadata
    })), (0, i.jsxs)("div", {
      className: V.HZ,
      children: [(0, i.jsx)(g.dOG, {
        label: w.intl.string(w.t.f7yOAX),
        checked: 1 === U,
        onChange: function(e) {
          let {
            verified: t
          } = T, n = +!!e;
          if (e && !t) {
            K(n), (0, O.A)({
              platformType: T.type,
              location: "User Settings"
            });
            return
          }
          H(n), x.A.setVisibility(T.type, T.id, n)
        }
      }), E, A, p]
    })), function() {
      if (T.revoked || T.integrations.length > 0) return (0, i.jsx)(g.cGx, {})
    }(), T.revoked ? (0, i.jsx)(a.po8, {
      messageType: a.YCn.INFO,
      children: w.intl.format(w.t["6C4lgA"], {
        onReconnect: function() {
          (0, O.A)({
            platformType: T.type,
            location: "User Settings"
          })
        }
      })
    }) : T.integrations.length > 0 ? (0, i.jsx)(g.D0$, {
      label: w.intl.string(w.t.fOe3fZ),
      children: T.integrations.map(e => (0, i.jsx)(M, {
        integration: e
      }, e.id))
    }) : true]
  })
}

function H() {
  return (0, i.jsx)(g.D0$, {
    label: w.intl.string(w.t.ZeDrUf),
    description: w.intl.format(w.t["oYc+Gz"], {
      privacyPolicyUrl: L.X7G.PRIVACY
    }),
    children: (0, i.jsx)(Y, {})
  })
}

function B(e) {
  let t = m.A.get(e);
  (0, O.A)({
    platformType: t.type
  }), y.default.track(L.HAw.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function Y() {
  let e = (0, j.gn)();
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
        children: (0, i.jsx)(g.vN3, {
          children: (0, i.jsx)("button", {
            className: r()(V.R8, V.U$),
            type: "button",
            onClick: function() {
              h.h.dispatch({
                type: "CONNECTIONS_GRID_MODAL_SHOW",
                onComplete: B
              })
            },
            "aria-label": w.intl.string(w.t.Zhcj9X),
            children: (0, i.jsx)(g._BQ, {
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
    accounts: s,
    theme: l,
    locale: r
  } = e;
  return t = n ? (0, i.jsx)(g.y$y, {
    type: g.y$y.Type.SPINNING_CIRCLE
  }) : 0 === s.length ? (0, i.jsx)(g.ppr, {
    theme: l,
    children: (0, i.jsx)(g.SGT, {
      note: w.intl.string(w.t.WenGZ2),
      children: w.intl.string(w.t.aoLS84)
    })
  }) : s.filter(e => m.A.isSupported(e.type)).map((e, t) => (0, i.jsx)(U, {
    theme: l,
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
  let e = (0, o.bG)([C.A], () => C.A.hidePersonalInformation),
    t = (0, o.bG)([v.A], () => v.A.isFetching()),
    n = (0, o.bG)([v.A], () => v.A.getAccounts()),
    s = (0, A.Ay)(),
    l = (0, o.bG)([I.default], () => I.default.locale);
  return e ? null : (0, i.jsx)(F, {
    fetching: t,
    accounts: n,
    theme: s,
    locale: l
  })
}
let W = () => {
  let e = (0, o.bG)([v.A], () => v.A.isFetching()),
    t = (0, o.bG)([v.A], () => v.A.getAccounts()),
    n = (0, A.Ay)(),
    l = (0, o.bG)([I.default], () => I.default.locale);
  return s.useEffect(() => {
    x.A.fetch()
  }, []), (0, i.jsxs)(G.A, {
    title: w.intl.string(w.t["3fe7U5"]),
    children: [(0, i.jsx)(H, {}), (0, i.jsx)(g.cGx, {
      gap: 24
    }), (0, i.jsx)(F, {
      fetching: e,
      accounts: t,
      theme: n,
      locale: l
    })]
  })
}