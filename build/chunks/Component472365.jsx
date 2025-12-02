/** Chunk was on 23792 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => V
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588705 = require("./588705.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk978986 = require("./978986.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk701190 = require("./701190.js"),
  Chunk594174 = require("./594174.js"),
  Chunk855981 = require("./855981.jsx"),
  Chunk55543 = require("./55543.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk379164 = require("./379164.js"),
  Chunk590965 = require("./590965.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12205 = require("./12205.js"),
  Chunk28731 = require("./28731.js"),
  Chunk197571 = require("./197571.js");
let U = e => {
  var {
    className: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, i = function(e, n) {
      if (null == e) return {};
      var t, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["className"]);
  let i = t.look === c.zx.Looks.LINK;
  return (0, r.jsx)(c.zx, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    size: i ? c.zx.Sizes.MIN : c.zx.Sizes.LARGE,
    fullWidth: !i,
    className: l()(n, {
      [z.button]: !i,
      [z.linkButton]: i
    })
  }, t))
};

function D() {
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

function G(e) {
  let {
    className: n
  } = e;
  return (0, r.jsxs)("div", {
    "aria-hidden": "true",
    className: l()(y.iconContainer, n),
    children: [(0, r.jsx)(L.Z, {
      className: y.iconSparklePlus
    }), (0, r.jsx)(u.xPt, {
      size: "custom",
      color: "currentColor",
      className: y.iconLink,
      width: 40,
      height: 40
    }), (0, r.jsx)(h.Z, {
      className: y.iconSparkleStar
    })]
  })
}

function B(e) {
  let {
    transitionState: n
  } = e, t = (0, E.Dt)(), {
    analyticsLocations: i
  } = (0, f.ZP)(p.Z.INVITE_MODAL);
  return (0, r.jsx)(f.Gt, {
    value: i,
    children: (0, r.jsx)(u.Y0X, {
      "aria-labelledby": t,
      transitionState: n,
      parentComponent: "AcceptInviteModal",
      children: (0, r.jsxs)(u.hzk, {
        className: y.errorContent,
        children: [(0, r.jsx)(G, {
          className: y.errorImage
        }), (0, r.jsx)(u.Heading, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: M.intl.string(M.t.u9zxnX)
        }), (0, r.jsx)("div", {
          className: y.errorBody,
          children: M.intl.string(M.t.FWkU6P)
        }), (0, r.jsx)(U, {
          size: U.Sizes.LARGE,
          onClick: () => O.Z.close(),
          color: U.Colors.BRAND,
          children: M.intl.string(M.t.wcqOoF)
        })]
      })
    })
  })
}

function V(e) {
  var n;
  let t, a, l, {
    transitionState: c
  } = e;
  (0, s.e7)([S.default], () => {
    var e;
    return null == (e = S.default.getCurrentUser()) ? true : e.premiumType
  });
  let I = (0, s.e7)([S.default], () => S.default.getCurrentUser()),
    {
      invite: b,
      error: L,
      submitting: h
    } = (0, s.cj)([k.Z], () => k.Z.getProps()),
    R = (0, s.e7)([g.Z], () => {
      var e;
      return g.Z.getFriendMemberIds(null != (e = null == b ? true : b.code) ? e : "")
    });
  i.useEffect(() => {
    if (null != b && null != b.guild) {
      var e;
      (0, N.pB)(null != (e = b.approximate_member_count) ? e : 0, b.code, b.guild.id)
    }
  }, [b, null == b ? true : b.approximate_member_count, null == b ? true : b.code, null == b || null == (n = b.guild) ? true : n.id]);
  let z = (0, N.yr)();
  i.useEffect(() => {
    !__OVERLAY__ && j.isPlatformEmbedded && ((0, j.isWindows)() ? T.ZP.minimize() : T.ZP.restore(), T.ZP.focus())
  }, []);
  let G = (0, E.Dt)(),
    {
      analyticsLocations: V
    } = (0, f.ZP)(p.Z.INVITE_MODAL);
  if (null == b || null == I) return null;
  if (b.state === P.r2o.EXPIRED || b.state === P.r2o.BANNED || b.state === P.r2o.ERROR) return (0, r.jsx)(B, {
    transitionState: c
  });
  if (null == b.channel) return null;

  function W() {
    null != b && O.Z.acceptInvite(b)
  }
  let {
    guild: F,
    channel: w,
    inviter: Y,
    target_application: H
  } = b, X = null != F, K = null == b.guild && null == b.channel && null != b.inviter;
  if (null != H) t = null == F ? true : F.name, a = v.ZP.createFromServer(H).getCoverImageURL(1024);
  else if (null != F) t = F.name, a = A.ZP.getGuildSplashURL({
    id: F.id,
    splash: F.splash
  });
  else if ((null == (t = w.name) || "" === t) && null != Y && (t = Y.username), null == t) throw Error("no name for group DM invite");
  let J = (0, x.yU)();
  return l = K ? M.intl.string(M.t["e/6Ogt"]) : M.intl.format(M.t["9sWQNT"], {
    usernameHook: () => (0, r.jsx)("span", {
      children: z
    })
  }), (0, r.jsx)(f.Gt, {
    value: V,
    children: (0, r.jsxs)(u.Y0X, {
      size: u.CgR.DYNAMIC,
      "aria-labelledby": G,
      transitionState: c,
      className: y.container,
      impression: {
        impressionName: o.ImpressionNames.INVITE_ACCEPT,
        impressionProperties: {
          guild_id: null == F ? true : F.id,
          invite_code: b.code
        }
      },
      parentComponent: "AcceptInviteModal",
      children: [(0, r.jsx)(u.hzk, {
        className: y.contentWrapper,
        children: (0, r.jsxs)(m.Z, {
          className: y.inviteContent,
          direction: m.Z.Direction.VERTICAL,
          justify: m.Z.Justify.BETWEEN,
          children: [(0, r.jsx)("div", {
            id: G,
            children: (0, r.jsx)(d.Z, {
              invite: b,
              disableUser: X,
              error: L,
              friendMemberIds: R
            })
          }), (0, r.jsxs)("div", {
            className: y.ctas,
            children: [J ? (0, r.jsx)(D, {}) : null, null == H ? (0, r.jsx)(u.aML, {
              "data-migration-pending": true,
              text: J ? M.intl.string(M.t.iLyuDO) : null,
              position: "bottom",
              children: e => {
                let {
                  onMouseEnter: n,
                  onMouseLeave: t
                } = e;
                return (0, r.jsx)(U, {
                  size: U.Sizes.LARGE,
                  onClick: W,
                  submitting: h,
                  disabled: J,
                  color: U.Colors.BRAND,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  children: J ? M.intl.string(M.t.ZNCziL) : (0, r.jsxs)("div", {
                    className: y.acceptAs,
                    children: [(0, r.jsx)(_.Z, {
                      "aria-hidden": true,
                      size: u.EFr.SIZE_16,
                      user: I,
                      className: y.acceptAsAvatar
                    }), (0, r.jsx)("span", {
                      className: y.acceptAsName,
                      children: l
                    })]
                  })
                })
              }
            }) : (0, r.jsxs)("div", {
              className: y.buttonGroup,
              children: [(0, r.jsx)(U, {
                size: U.Sizes.LARGE,
                onClick: W,
                submitting: h,
                children: M.intl.string(M.t.RscU7I)
              }), (0, r.jsx)(U, {
                color: U.Colors.PRIMARY,
                size: U.Sizes.LARGE,
                onClick: W,
                submitting: h,
                children: M.intl.string(M.t.eylRaY)
              })]
            }), (0, r.jsx)(m.Z, {
              justify: m.Z.Justify.CENTER,
              className: Z.marginTop8,
              children: (0, r.jsx)(U, {
                look: U.Looks.LINK,
                className: y.noThanksButton,
                onClick: function() {
                  var e;
                  C.default.track(P.rMx.INVITE_ACCEPT_DISMISSED, {
                    invite_code: null == b ? true : b.code,
                    guild_id: null == b || null == (e = b.guild) ? true : e.id
                  }), O.Z.close()
                },
                color: U.Colors.TRANSPARENT,
                children: M.intl.string(M.t.ndsK4Z)
              })
            })]
          })]
        })
      }), null != a && (0, r.jsx)("div", {
        className: y.inviteSplash,
        style: {
          backgroundImage: "url(".concat(a, ")")
        }
      })]
    })
  })
}
U.Looks = Chunk755721.zx.Looks, U.Colors = Chunk755721.zx.Colors, U.Sizes = Chunk755721.zx.Sizes