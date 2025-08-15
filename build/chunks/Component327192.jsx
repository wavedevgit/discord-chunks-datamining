/** Chunk was on 30202 **/
/** chunk id: 327192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./539854.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk205266 = require("./205266.jsx"),
  Chunk216153 = require("./216153.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk856651 = require("./856651.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11049 = require("./11049.js"),
  Chunk197571 = require("./197571.js");

function H(e) {
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
}
let z = e => {
  var t, n;
  let r, {
      integration: s
    } = e,
    {
      isJoining: a,
      joinErrorMessage: o,
      showJoinErrorMessage: c
    } = (0, l.cj)([I.Z], () => ({
      isJoining: I.Z.isJoining(s.id),
      joinErrorMessage: "" === I.Z.joinErrorMessage(s.id) ? V.intl.string(V.t.j2d6Ki) : I.Z.joinErrorMessage(s.id),
      showJoinErrorMessage: true !== I.Z.joinErrorMessage(s.id)
    }), [s.id]);
  return null != (0, l.e7)([N.Z], () => N.Z.getGuild(s.guild.id), [s.guild.id]) || (r = (0, i.jsx)(u.zx, {
    size: u.Ph.SMALL,
    onClick: function() {
      g.Z.joinServer(s.id, () => {})
    },
    disabled: a,
    children: (0, i.jsx)("span", {
      children: a ? V.intl.string(V.t.RXvQQk) : V.intl.string(V.t.XpeFYm)
    })
  })), (0, i.jsxs)("div", {
    className: G.integrationWrapper,
    children: [(0, i.jsxs)("div", {
      className: G.integration,
      children: [(0, i.jsx)(S.Z, {
        size: S.Z.Sizes.SMALL,
        guild: s.guild,
        className: G.guildIcon
      }), (0, i.jsxs)("div", {
        className: G.integrationInner,
        children: [(0, i.jsx)(m.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: s.guild.name
        }), (0, i.jsx)(m.eee, {
          href: null == (n = _.Z.get(s.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, s.account),
          children: (0, i.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: s.account.name
          })
        })]
      }), r]
    }), c && (0, i.jsx)(m.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: G.integrationError,
      children: o
    })]
  })
};

function W(e) {
  var t;
  let n, s, a, {
      onDisconnect: l,
      account: o,
      theme: p,
      locale: h
    } = e,
    [f, x] = r.useState(o.friendSync),
    [v, S] = r.useState(o.visibility),
    [I, N] = r.useState(o.metadataVisibility),
    [y, A] = r.useState(o.showActivity),
    [P, D] = r.useState(null),
    [U, F] = r.useState(null),
    [W, Y] = r.useState(false),
    [K, q] = r.useState([]),
    X = (0, j.rR)(o.type),
    J = _.Z.get(X);
  r.useEffect(() => {
    x(o.friendSync), S(o.visibility), N(o.metadataVisibility), A(o.showActivity)
  }, [o]);
  let Q = {
      inProgressVisibility: P,
      inProgressMetadataVisibility: U
    },
    $ = r.useRef(Q);
  r.useEffect(() => {
    $.current = Q
  }), r.useEffect(() => {
    if (false === o.verified) return;
    let {
      inProgressVisibility: e,
      inProgressMetadataVisibility: t
    } = $.current;
    null != e && (S(e), g.Z.setVisibility(o.type, o.id, e), D(null)), null != t && (N(t), g.Z.setMetadataVisibility(o.type, o.id, t), F(null))
  }, [o]);

  function ee() {
    let e = _.Z.get(o.type),
      t = V.intl.format(V.t.VgqIPj, {
        provider: e.name
      });
    (0, Z.Z)(o) && (t = (0, i.jsxs)(i.Fragment, {
      children: [t, (0, i.jsx)(w.Z, {
        className: G.infoBox,
        children: V.intl.format(V.t.COW3Xl, {
          platformName: e.name
        })
      })]
    })), (0, m.h7j)(n => (0, i.jsx)(b.default, H({
      title: V.intl.formatToPlainString(V.t.U5x12d, {
        name: e.name
      }),
      body: t,
      confirmText: V.intl.string(V.t.bsbMV1),
      cancelText: V.intl.string(V.t["ETE/oK"]),
      onConfirm: l
    }, n)))
  }
  return (0, i.jsxs)("div", {
    className: G.connection,
    children: [function(e) {
      var t;
      let n = _.Z.get(e.type),
        r = _.Z.get(X),
        s = "1" === (null != (t = e.metadata) ? t : {})[M.PC.TWITTER_VERIFIED],
        a = null;
      return n.type === B.ABu.TWITTER && s && (a = (0, i.jsx)(m.ua7, {
        text: V.intl.string(V.t.Jebrw8),
        children: e => {
          var t, n;
          return (0, i.jsx)(T.Z, (t = H({}, e), n = n = {
            color: c.Z.unsafe_rawColors.TWITTER.css,
            children: (0, i.jsx)(m.kmB, {
              size: "xs",
              color: c.Z.unsafe_rawColors.WHITE_500.css
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })), (0, i.jsxs)("div", {
        className: G.connectionHeader,
        children: [(0, i.jsx)("img", {
          alt: r.name,
          className: G.connectionIcon,
          src: (0, d.wj)(p) ? r.icon.darkSVG : r.icon.lightSVG
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: G.connectionAccountLabelContainer,
            children: [(0, i.jsx)(m.Text, {
              color: "header-primary",
              variant: "text-md/semibold",
              className: G.connectionAccountValue,
              children: e.name
            }), null != a && (0, i.jsx)("div", {
              className: G.connectionAccountLabelVerified,
              children: a
            })]
          }), (0, i.jsx)(m.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: G.connectionAccountLabel,
            children: r.name
          })]
        }), (0, i.jsx)(m.P3F, {
          className: G.connectionDelete,
          onClick: ee,
          "aria-label": V.intl.string(V.t.ppppRE),
          focusProps: {
            offset: {
              top: false,
              left: false,
              right: false
            }
          },
          children: (0, i.jsx)(m.Dio, {
            size: "xs",
            color: "currentColor"
          })
        })]
      })
    }(o), o.twoWayLink ? null : o.type === B.ABu.XBOX ? (0, i.jsx)("div", {
      className: G.upsellWrapper,
      children: (0, i.jsx)(L.Y, {})
    }) : o.type === B.ABu.PLAYSTATION ? (0, i.jsx)("div", {
      className: G.upsellWrapper,
      children: (0, i.jsx)(k.t, {})
    }) : null, function(e) {
      var t;
      let n = null != (t = e.metadata) ? t : {},
        r = null,
        s = (0, E.FI)(n[M.PC.CREATED_AT], h);
      switch (e.type) {
        case B.ABu.REDDIT:
          r = (0, O.oP)(n, G.metadataItem);
          break;
        case B.ABu.STEAM:
          r = (0, O.Dq)(n, G.metadataItem);
          break;
        case B.ABu.BLUESKY:
        case B.ABu.TWITTER:
        case B.ABu.MASTODON:
          r = (0, O.rJ)(n, G.metadataItem);
          break;
        case B.ABu.EBAY:
          r = (0, O.ul)(n, G.metadataItem);
          break;
        case B.ABu.PAYPAL:
          r = (0, O.li)(n, G.metadataItem);
          break;
        case B.ABu.TIKTOK:
          r = (0, O.hf)(n, G.metadataItem)
      }
      null !== s && (null == r && (r = []), null == r || r.push((0, i.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "interactive-active",
        className: G.connectedAccountVanityMetadataCreatedAt,
        children: V.intl.format(V.t["9rfonp"], {
          date: s
        })
      }, "member-since")));
      let a = K.includes(e.id),
        l = V.intl.string(V.t.wzzjk5);
      if (null == r || 0 === r.length)
        if (true !== _.Z.get(e.type).hasMetadata) return null;
        else r = [(0, i.jsx)(m.IGR, {
          className: G.connectionMetadataUpsellTag,
          text: V.intl.string(V.t.y2b7CA)
        }, "badge"), (0, i.jsx)(m.Text, {
          variant: "text-xs/normal",
          className: G.connectionMetadataUpsellDescription,
          children: V.intl.format(V.t.Up2ni4, {
            helpdeskUrl: R.Z.getArticleURL(B.BhN.CONNECTION_DETAILS)
          })
        }, "label")], l = V.intl.string(V.t["LVh3//"]);
      return a && (l = V.intl.string(V.t.i4jeWV)), r.push((0, i.jsx)(u.zx, {
        className: G.metadataRefreshButton,
        color: a ? u.zx.Colors.GREEN : u.zx.Colors.BRAND,
        size: u.zx.Sizes.SMALL,
        submitting: W,
        disabled: a,
        "aria-label": V.intl.string(V.t.sCkLYG),
        onClick: a ? true : () => {
          Y(true), g.Z.refresh(e.type, e.id).finally(() => {
            setTimeout(() => {
              K.push(e.id), q(K), Y(false)
            }, 2e3)
          })
        },
        children: l
      }, "refresh-button")), (0, i.jsx)("div", {
        className: G.metadataContainer,
        children: r
      })
    }(o), (B.BFP.has(o.type) && (n = (0, i.jsx)(m.j7V, {
      className: G.connectionOptionSwitch,
      hideBorder: true,
      value: f,
      onChange: function(e) {
        x(e), g.Z.setFriendSync(o.type, o.id, e)
      },
      children: (0, i.jsx)(m.Text, {
        variant: "text-sm/semibold",
        children: V.intl.string(V.t["+KCMSk"])
      })
    })), B.vbS.has(o.type) && (s = (0, i.jsx)(m.j7V, {
      className: G.connectionOptionSwitch,
      hideBorder: true,
      value: y,
      onChange: function(e) {
        A(e), g.Z.setShowActivity(o.type, o.id, e)
      },
      children: (0, i.jsx)(m.Text, {
        variant: "text-sm/semibold",
        children: V.intl.format(V.t["6u6J0t"], {
          platform: J.name
        })
      })
    })), (null == (t = _.Z.get(o.type)) ? true : t.hasMetadata) === true && (a = (0, i.jsx)(m.j7V, {
      className: G.connectionOptionSwitch,
      hideBorder: true,
      value: 1 === I,
      onChange: function(e) {
        let {
          verified: t
        } = o, n = +!!e;
        if (e && !t) {
          F(n), (0, C.Z)({
            platformType: o.type,
            location: "User Settings"
          });
          return
        }
        N(n), g.Z.setMetadataVisibility(o.type, o.id, n)
      },
      disabled: 1 !== v || null == o.metadata,
      children: (0, i.jsx)(m.Text, {
        variant: "text-sm/semibold",
        children: V.intl.string(V.t.FYKGsL)
      })
    })), (0, i.jsx)("div", {
      className: G.connectionOptionsWrapper,
      children: (0, i.jsxs)("div", {
        className: G.connectionOptions,
        children: [(0, i.jsx)(m.j7V, {
          className: G.connectionOptionSwitch,
          hideBorder: true,
          value: 1 === v,
          onChange: function(e) {
            let {
              verified: t
            } = o, n = +!!e;
            if (e && !t) {
              D(n), (0, C.Z)({
                platformType: o.type,
                location: "User Settings"
              });
              return
            }
            S(n), g.Z.setVisibility(o.type, o.id, n)
          },
          children: (0, i.jsx)(m.Text, {
            variant: "text-sm/semibold",
            children: V.intl.string(V.t.f7yOAQ)
          })
        }), a, s, n]
      })
    })), function() {
      if (o.revoked || o.integrations.length > 0) return (0, i.jsx)(m.$i$, {
        className: G.connectedAccountSeparator
      })
    }(), o.revoked ? (0, i.jsx)(m.xJW, {
      className: G.integrationsWrapper,
      children: (0, i.jsx)(m.R94, {
        className: G.integrationRevoked,
        children: V.intl.format(V.t["6C4lgI"], {
          onReconnect: function() {
            (0, C.Z)({
              platformType: o.type,
              location: "User Settings"
            })
          }
        })
      })
    }) : o.integrations.length > 0 ? (0, i.jsxs)(m.xJW, {
      className: G.integrationsWrapper,
      children: [(0, i.jsx)(m.vwX, {
        tag: m.RB0.H5,
        children: (0, i.jsx)(m.Text, {
          variant: "text-xs/semibold",
          children: V.intl.string(V.t.fOe3fX)
        })
      }), (0, i.jsx)("div", {
        children: o.integrations.map(e => (0, i.jsx)(z, {
          integration: e
        }, e.id))
      })]
    }) : true]
  })
}

function Y() {
  return Chunk73800.useEffect(() => () => {
    (0, Chunk266454.Q3)(Chunk704215.z.NEW_CRUNCHYROLL_CONNECTION, {
      dismissAction: Chunk921944.L.AUTO
    })
  }, []), (0, Chunk255367.jsxs)("div", {
    className: Chunk11049.connectContainer,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-md/bold",
      color: "interactive-active",
      className: Chunk11049.connectHeader,
      children: Chunk388032.intl.string(Chunk388032.t.ZeDrUV)
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: Chunk388032.intl.format(Chunk388032.t["oYc+Gx"], {
        privacyPolicyUrl: Chunk981631.EYA.PRIVACY
      })
    }), (0, Chunk255367.jsx)(q, {})]
  })
}

function K(e) {
  let t = _.Z.get(e);
  (0, C.Z)({
    platformType: t.type
  }), P.default.track(B.rMx.ACCOUNT_LINK_STEP, {
    previous_step: "desktop connections",
    current_step: "desktop oauth",
    platform_type: t.type
  })
}

function q() {
  function e() {
    Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete: K
    })
  }
  let t = (0, Chunk122021.fq)();
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk11049.connectionsContainer,
    children: [exports.slice(0, 10).map(e => (0, i.jsx)(f.Z, {
      type: e.type,
      className: G.__invalid_accountButton,
      innerClassName: G.accountButtonInner
    }, e.type)), (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.QqTz8f),
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: r
        } = t;
        return (0, i.jsx)("div", {
          className: a()(G.accountAddWrapper, G.__invalid_accountButton),
          children: (0, i.jsx)(m.tEY, {
            children: (0, i.jsx)("button", {
              onMouseEnter: n,
              onMouseLeave: r,
              className: a()(G.accountAddInner, G.accountButtonInner),
              type: "button",
              onClick: e,
              "aria-label": V.intl.string(V.t.Zhcj9f),
              children: (0, i.jsx)(m.Fbu, {
                color: "currentColor",
                size: "md",
                "aria-label": V.intl.string(V.t.QqTz8f)
              })
            })
          })
        })
      }
    })]
  })
}

function X(e) {
  let t, {
    fetching: n,
    accounts: r,
    theme: s,
    locale: a
  } = e;
  return t = n ? (0, i.jsx)(m.$jN, {
    className: F.marginTop20,
    type: m.$jN.Type.SPINNING_CIRCLE
  }) : 0 === r.length ? (0, i.jsx)(m.ubH, {
    className: F.marginTop40,
    theme: s,
    children: (0, i.jsx)(m.OZU, {
      note: V.intl.string(V.t.WenGZ2),
      children: V.intl.string(V.t["aoLS8/"])
    })
  }) : r.filter(e => _.Z.isSupported(e.type)).map((e, t) => (0, i.jsx)(W, {
    theme: s,
    account: e,
    locale: a,
    onDisconnect: () => (function(e) {
      let {
        type: t,
        id: n
      } = e;
      g.Z.disconnect(t, n)
    })(e)
  }, t)), (0, i.jsx)(m.xJW, {
    className: G.connectionList,
    children: t
  })
}
let J = () => {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    t = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.isFetching()),
    n = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    s = (0, Chunk410030.ZP)();
  (0, Chunk442837.e7)([Chunk771845.ZP], () => Chunk771845.ZP.getFlattenedGuildIds());
  let a = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale);
  return (Chunk73800.useEffect(() => {
    Chunk457330.Z.fetch()
  }, []), module) ? (0, Chunk255367.jsx)(Chunk497321.Z, {}) : (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    className: Chunk11049.__invalid_connections,
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t["3fe7U1"]),
    children: [(0, Chunk255367.jsx)(Y, {}), (0, Chunk255367.jsx)(X, {
      fetching: exports,
      accounts: require,
      theme: Chunk120356,
      locale: a
    })]
  })
}