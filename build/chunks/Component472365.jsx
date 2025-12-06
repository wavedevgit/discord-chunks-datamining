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
    var t, i, l = function(e, n) {
      if (null == e) return {};
      var t, i, l = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) t = r[i], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) t = r[i], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["className"]);
  let l = t.look === d.zx.Looks.LINK;
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
    size: l ? d.zx.Sizes.MIN : d.zx.Sizes.LARGE,
    fullWidth: !l,
    className: a()(n, {
      [D.button]: !l,
      [D.linkButton]: l
    })
  }, t))
};

function W() {
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

function B(e) {
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

function V(e) {
  let {
    transitionState: n
  } = e, t = (0, x.Dt)(), {
    analyticsLocations: l
  } = (0, I.ZP)(m.Z.INVITE_MODAL);
  return (0, i.jsx)(I.Gt, {
    value: l,
    children: (0, i.jsx)(s.IX, {
      "aria-label": Z.intl.string(Z.t.u9zxnX),
      transitionState: n,
      onClose: () => (R.Z.close(), Promise.resolve()),
      size: "sm",
      children: (0, i.jsxs)("div", {
        className: U.errorContent,
        children: [(0, i.jsx)(B, {
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
  var n, t, r, a, d, v;
  let h, L, j, {
    transitionState: y
  } = e;
  (0, c.e7)([C.default], () => {
    var e;
    return null == (e = C.default.getCurrentUser()) ? true : e.premiumType
  });
  let D = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
    {
      invite: B,
      error: w,
      submitting: F
    } = (0, c.cj)([M.Z], () => M.Z.getProps()),
    H = (0, c.e7)([S.Z], () => {
      var e;
      return S.Z.getFriendMemberIds(null != (e = null == B ? true : B.code) ? e : "")
    });
  l.useEffect(() => {
    if (null != B && null != B.guild) {
      var e;
      (0, E.pB)(null != (e = B.approximate_member_count) ? e : 0, B.code, B.guild.id)
    }
  }, [B, null == B ? true : B.approximate_member_count, null == B ? true : B.code, null == B || null == (n = B.guild) ? true : n.id]);
  let X = (0, E.yr)(),
    {
      showFriendsInServer: Y,
      showInviter: K
    } = (0, P.cJ)({
      location: "accept_invite_modal",
      autoTrackExposure: true,
      guild: null == B ? true : B.guild
    }),
    J = Y ? H : null;
  l.useEffect(() => {
    !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus())
  }, []);
  let Q = (0, x.Dt)(),
    {
      analyticsLocations: q
    } = (0, I.ZP)(m.Z.INVITE_MODAL),
    $ = null != (r = null == J ? true : J.length) ? r : 0,
    ee = $ > 0;
  if (l.useEffect(() => {
      if (ee && (null == B ? true : B.code) != null) {
        var e;
        T.default.track(z.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
          invite_code: null == B ? true : B.code,
          guild_id: null == (e = B.guild) ? true : e.id,
          friend_count: $
        })
      }
    }, [ee, $, null == B ? true : B.code, null == B || null == (t = B.guild) ? true : t.id]), null == B || null == D) return null;
  if (B.state === z.r2o.EXPIRED || B.state === z.r2o.BANNED || B.state === z.r2o.ERROR) return (0, i.jsx)(V, {
    transitionState: y
  });
  if (null == B.channel) return null;

  function en() {
    null != B && R.Z.acceptInvite(B)
  }

  function et() {
    var e;
    T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
      invite_code: null == B ? true : B.code,
      guild_id: null == B || null == (e = B.guild) ? true : e.id
    }), R.Z.close()
  }
  let {
    guild: ei,
    channel: el,
    inviter: er,
    target_application: ea
  } = B, eo = null == B.guild && null == B.channel && null != B.inviter, es = K && (null != (a = null == J ? true : J.length) ? a : 0) > 0 && null != er, ec = null != ei || es;
  if (null != ea) h = null == ei ? true : ei.name, L = g.ZP.createFromServer(ea).getCoverImageURL(1024);
  else if (null != ei) h = ei.name, L = A.ZP.getGuildSplashURL({
    id: ei.id,
    splash: ei.splash
  });
  else if ((null == (h = el.name) || "" === h) && null != er && (h = er.username), null == h) throw Error("no name for group DM invite");
  let eu = (0, b.yU)();
  return j = eo ? Z.intl.string(Z.t["e/6Ogt"]) : Z.intl.format(Z.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: X
    })
  }), (0, i.jsx)(I.Gt, {
    value: q,
    children: (0, i.jsx)(s.IX, {
      size: null != L ? "xl" : "sm",
      "aria-labelledby": Q,
      "aria-label": null != (v = null != (d = null == ei ? true : ei.name) ? d : null == el ? true : el.name) ? v : "",
      transitionState: y,
      onClose: () => (et(), Promise.resolve()),
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.INVITE_ACCEPT,
          impressionProperties: {
            guild_id: null == ei ? true : ei.id,
            invite_code: B.code
          }
        }
      },
      children: (0, i.jsxs)("div", {
        className: U.modalContainer,
        children: [(0, i.jsxs)("div", {
          className: U.contentWrapper,
          children: [es && (0, i.jsxs)("div", {
            className: U.inviterContainer,
            children: [(0, i.jsx)(f.Z, {
              user: new N.Z(er),
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
                  children: er.username
                }, n)
              })
            })]
          }), (0, i.jsxs)("div", {
            className: U.inviteContent,
            children: [(0, i.jsx)("div", {
              id: Q,
              children: (0, i.jsx)(p.Z, {
                invite: B,
                disableUser: ec,
                error: w,
                friendMemberIds: J,
                showInvitedByHeader: !es
              })
            }), (0, i.jsxs)("div", {
              children: [eu ? (0, i.jsx)(W, {}) : null, null == ea ? (0, i.jsx)(u.u, {
                text: eu ? Z.intl.string(Z.t.iLyuDO) : true,
                position: "bottom",
                children: (0, i.jsx)(G, {
                  size: G.Sizes.LARGE,
                  onClick: en,
                  submitting: F,
                  disabled: eu,
                  color: G.Colors.BRAND,
                  fullWidth: true,
                  children: eu ? Z.intl.string(Z.t.ZNCziL) : (0, i.jsxs)("div", {
                    className: U.acceptAs,
                    children: [(0, i.jsx)(f.Z, {
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
                  onClick: en,
                  submitting: F,
                  fullWidth: true,
                  children: Z.intl.string(Z.t.RscU7I)
                }), (0, i.jsx)(G, {
                  color: G.Colors.PRIMARY,
                  size: G.Sizes.LARGE,
                  onClick: en,
                  submitting: F,
                  fullWidth: true,
                  children: Z.intl.string(Z.t.eylRaY)
                })]
              }), (0, i.jsx)("div", {
                className: U.noThanksContainer,
                children: (0, i.jsx)(G, {
                  look: G.Looks.LINK,
                  className: U.noThanksButton,
                  onClick: et,
                  color: G.Colors.TRANSPARENT,
                  fullWidth: true,
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