/** Chunk was on 23792 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588705 = require("./588705.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk978986 = require("./978986.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk598077 = require("./598077.js"),
  Chunk701190 = require("./701190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk855981 = require("./855981.jsx"),
  Chunk55543 = require("./55543.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk756679 = require("./756679.js"),
  Chunk379164 = require("./379164.js"),
  Chunk590965 = require("./590965.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12205 = require("./12205.js"),
  Chunk28731 = require("./28731.js");
let G = e => {
  var {
    className: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, i, r = function(e, n) {
      if (null == e) return {};
      var t, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) t = l[i], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) t = l[i], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["className"]);
  let r = t.look === d.zx.Looks.LINK;
  return (0, i.jsx)(d.zx, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        i = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), i.forEach(function(n) {
        var i;
        i = t[n], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = i
      })
    }
    return e
  }({
    size: r ? d.zx.Sizes.MIN : d.zx.Sizes.LARGE,
    fullWidth: !r,
    className: a()(n, {
      [D.button]: !r,
      [D.linkButton]: r
    })
  }, t))
};

function B() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: n
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_UPSELL_TOOLTIP);
  return Chunk473749.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.GUILD_CAP_INLINE_INVITE_MODAL,
      location: {
        page: Chunk981631.ZY5.NATIVE_INVITE_MODAL
      },
      location_stack: exports
    })
  }, [exports]), (0, Chunk54381.jsxs)(Chunk481060.P3F, {
    onClick: () => (0, Chunk885714.Z)({
      analyticsSource: {
        page: Chunk981631.Sbl.EXTERNAL_INVITE_LINK_MODAL
      },
      analyticsLocation: {
        page: Chunk981631.Sbl.EXTERNAL_INVITE_LINK_MODAL,
        section: Chunk981631.jXE.GUILD_CAP_UPSELL_MODAL
      },
      analyticsLocations: module
    }),
    className: Chunk12205.experimentUpsellError,
    children: [(0, Chunk54381.jsx)(Chunk481060.SrA, {
      size: "md",
      className: Chunk12205.experimentUpsellIcon,
      color: Chunk436774.JX.PREMIUM_TIER_2
    }), (0, Chunk54381.jsx)("span", {
      className: Chunk12205.experimentUpsellText,
      children: Chunk388032.intl.string(Chunk388032.t["4/W4Pz"])
    }), (0, Chunk54381.jsx)("span", {
      className: Chunk12205.experimentGetNitro,
      children: Chunk388032.intl.string(Chunk388032.t.b6KOkI)
    })]
  })
}

function V(e) {
  let {
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    "aria-hidden": "true",
    className: a()(U.iconContainer, n),
    children: [(0, i.jsx)(L.Z, {
      className: U.iconSparklePlus
    }), (0, i.jsx)(_.xPt, {
      size: "custom",
      color: "currentColor",
      className: U.iconLink,
      width: 40,
      height: 40
    }), (0, i.jsx)(j.Z, {
      className: U.iconSparkleStar
    })]
  })
}

function W(e) {
  let {
    transitionState: n
  } = e, t = (0, x.Dt)(), {
    analyticsLocations: r
  } = (0, I.ZP)(f.Z.INVITE_MODAL);
  return (0, i.jsx)(I.Gt, {
    value: r,
    children: (0, i.jsx)(s.IX, {
      "aria-label": Z.intl.string(Z.t.u9zxnX),
      transitionState: n,
      onClose: () => (R.Z.close(), Promise.resolve()),
      size: "sm",
      children: (0, i.jsxs)("div", {
        className: U.errorContent,
        children: [(0, i.jsx)(V, {
          className: U.errorImage
        }), (0, i.jsx)(_.Heading, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: Z.intl.string(Z.t.u9zxnX)
        }), (0, i.jsx)("div", {
          className: U.errorBody,
          children: Z.intl.string(Z.t.FWkU6P)
        }), (0, i.jsx)(G, {
          size: G.Sizes.LARGE,
          onClick: () => R.Z.close(),
          color: G.Colors.BRAND,
          children: Z.intl.string(Z.t.wcqOoF)
        })]
      })
    })
  })
}

function w(e) {
  var n, t, l, a, d, v;
  let N, L, j, {
    transitionState: y
  } = e;
  (0, c.e7)([C.default], () => {
    var e;
    return null == (e = C.default.getCurrentUser()) ? true : e.premiumType
  });
  let D = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
    {
      invite: V,
      error: w,
      submitting: F
    } = (0, c.cj)([M.Z], () => M.Z.getProps()),
    H = (0, c.e7)([S.Z], () => {
      var e;
      return S.Z.getFriendMemberIds(null != (e = null == V ? true : V.code) ? e : "")
    });
  r.useEffect(() => {
    if (null != V && null != V.guild) {
      var e;
      (0, E.pB)(null != (e = V.approximate_member_count) ? e : 0, V.code, V.guild.id)
    }
  }, [V, null == V ? true : V.approximate_member_count, null == V ? true : V.code, null == V || null == (n = V.guild) ? true : n.id]);
  let X = (0, E.yr)(),
    {
      showInviter: Y
    } = (0, P.v9)({
      location: "accept_invite_modal",
      autoTrackExposure: true
    });
  r.useEffect(() => {
    !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus())
  }, []);
  let K = (0, x.Dt)(),
    {
      analyticsLocations: Q
    } = (0, I.ZP)(f.Z.INVITE_MODAL),
    q = null != (l = null == H ? true : H.length) ? l : 0,
    J = q > 0;
  if (r.useEffect(() => {
      if (J && (null == V ? true : V.code) != null) {
        var e;
        T.default.track(z.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
          invite_code: null == V ? true : V.code,
          guild_id: null == (e = V.guild) ? true : e.id,
          friend_count: q
        })
      }
    }, [J, q, null == V ? true : V.code, null == V || null == (t = V.guild) ? true : t.id]), null == V || null == D) return null;
  if (V.state === z.r2o.EXPIRED || V.state === z.r2o.BANNED || V.state === z.r2o.ERROR) return (0, i.jsx)(W, {
    transitionState: y
  });
  if (null == V.channel) return null;

  function $() {
    null != V && R.Z.acceptInvite(V)
  }

  function ee() {
    var e;
    T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
      invite_code: null == V ? true : V.code,
      guild_id: null == V || null == (e = V.guild) ? true : e.id
    }), R.Z.close()
  }
  let {
    guild: en,
    channel: et,
    inviter: ei,
    target_application: er
  } = V, el = null == V.guild && null == V.channel && null != V.inviter, ea = Y && (null != (a = null == H ? true : H.length) ? a : 0) > 0 && null != ei, eo = null != en || ea;
  if (null != er) N = null == en ? true : en.name, L = g.ZP.createFromServer(er).getCoverImageURL(1024);
  else if (null != en) N = en.name, L = A.ZP.getGuildSplashURL({
    id: en.id,
    splash: en.splash
  });
  else if ((null == (N = et.name) || "" === N) && null != ei && (N = ei.username), null == N) throw Error("no name for group DM invite");
  let es = (0, b.yU)();
  return j = el ? Z.intl.string(Z.t["e/6Ogt"]) : Z.intl.format(Z.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: X
    })
  }), (0, i.jsx)(I.Gt, {
    value: Q,
    children: (0, i.jsx)(s.IX, {
      size: null != L ? "xl" : "sm",
      "aria-labelledby": K,
      "aria-label": null != (v = null != (d = null == en ? true : en.name) ? d : null == et ? true : et.name) ? v : "",
      transitionState: y,
      onClose: () => (ee(), Promise.resolve()),
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.INVITE_ACCEPT,
          impressionProperties: {
            guild_id: null == en ? true : en.id,
            invite_code: V.code
          }
        }
      },
      children: (0, i.jsxs)("div", {
        className: U.modalContainer,
        children: [(0, i.jsxs)("div", {
          className: U.contentWrapper,
          children: [ea && (0, i.jsxs)("div", {
            className: U.inviterContainer,
            children: [(0, i.jsx)(m.Z, {
              user: new h.Z(ei),
              size: _.EFr.SIZE_20
            }), (0, i.jsx)(_.Text, {
              tag: "span",
              variant: "text-md/medium",
              color: "text-subtle",
              children: Z.intl.format(Z.t.ri1ubC, {
                usernameHook: (e, n) => (0, i.jsx)(_.Text, {
                  variant: "text-md/semibold",
                  color: "text-default",
                  tag: "span",
                  children: ei.username
                }, n)
              })
            })]
          }), (0, i.jsxs)("div", {
            className: U.inviteContent,
            children: [(0, i.jsx)("div", {
              id: K,
              children: (0, i.jsx)(p.Z, {
                invite: V,
                disableUser: eo,
                error: w,
                friendMemberIds: H,
                showInvitedByHeader: !ea
              })
            }), (0, i.jsxs)("div", {
              className: U.ctas,
              children: [es ? (0, i.jsx)(B, {}) : null, null == er ? (0, i.jsx)(u.u, {
                text: es ? Z.intl.string(Z.t.iLyuDO) : true,
                position: "bottom",
                children: (0, i.jsx)(G, {
                  size: G.Sizes.LARGE,
                  onClick: $,
                  submitting: F,
                  disabled: es,
                  color: G.Colors.BRAND,
                  children: es ? Z.intl.string(Z.t.ZNCziL) : (0, i.jsxs)("div", {
                    className: U.acceptAs,
                    children: [(0, i.jsx)(m.Z, {
                      "aria-hidden": true,
                      size: _.EFr.SIZE_16,
                      user: D,
                      className: U.acceptAsAvatar
                    }), (0, i.jsx)("span", {
                      className: U.acceptAsName,
                      children: j
                    })]
                  })
                })
              }) : (0, i.jsxs)("div", {
                className: U.buttonGroup,
                children: [(0, i.jsx)(G, {
                  size: G.Sizes.LARGE,
                  onClick: $,
                  submitting: F,
                  children: Z.intl.string(Z.t.RscU7I)
                }), (0, i.jsx)(G, {
                  color: G.Colors.PRIMARY,
                  size: G.Sizes.LARGE,
                  onClick: $,
                  submitting: F,
                  children: Z.intl.string(Z.t.eylRaY)
                })]
              }), (0, i.jsx)("div", {
                className: U.noThanksContainer,
                children: (0, i.jsx)(G, {
                  look: G.Looks.LINK,
                  className: U.noThanksButton,
                  onClick: ee,
                  color: G.Colors.TRANSPARENT,
                  children: Z.intl.string(Z.t.ndsK4Z)
                })
              })]
            })]
          })]
        }), null != L && (0, i.jsx)("div", {
          className: U.inviteSplash,
          style: {
            backgroundImage: "url(".concat(L, ")")
          }
        })]
      })
    })
  })
}
G.Looks = Chunk755721.zx.Looks, G.Colors = Chunk755721.zx.Colors, G.Sizes = Chunk755721.zx.Sizes