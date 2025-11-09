/** Chunk was on 86872 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk838655 = require("./838655.js"),
  Chunk646668 = require("./646668.js"),
  Chunk10198 = require("./10198.js");
let D = e => {
  var {
    className: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, l, i = function(e, n) {
      if (null == e) return {};
      var t, l, i = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) t = r[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) t = r[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["className"]);
  let i = t.look === c.zx.Looks.LINK;
  return (0, l.jsx)(c.zx, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    size: i ? c.zx.Sizes.MIN : c.zx.Sizes.LARGE,
    fullWidth: !i,
    className: a()(n, {
      [M.button]: !i,
      [M.linkButton]: i
    })
  }, t))
};

function z() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: n
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_UPSELL_TOOLTIP);
  return Chunk647438.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.GUILD_CAP_INLINE_INVITE_MODAL,
      location: {
        page: Chunk981631.ZY5.NATIVE_INVITE_MODAL
      },
      location_stack: exports
    })
  }, [exports]), (0, Chunk951288.jsxs)(Chunk481060.P3F, {
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
    className: Chunk838655.experimentUpsellError,
    children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      className: Chunk838655.experimentUpsellIcon,
      color: Chunk436774.JX.PREMIUM_TIER_2
    }), (0, Chunk951288.jsx)("span", {
      className: Chunk838655.experimentUpsellText,
      children: Chunk388032.intl.string(Chunk388032.t["4/W4Pz"])
    }), (0, Chunk951288.jsx)("span", {
      className: Chunk838655.experimentGetNitro,
      children: Chunk388032.intl.string(Chunk388032.t.b6KOkI)
    })]
  })
}

function U(e) {
  let {
    className: n
  } = e;
  return (0, l.jsxs)("div", {
    "aria-hidden": "true",
    className: a()(k.iconContainer, n),
    children: [(0, l.jsx)(j.Z, {
      className: k.iconSparklePlus
    }), (0, l.jsx)(u.xPt, {
      size: "custom",
      color: "currentColor",
      className: k.iconLink,
      width: 40,
      height: 40
    }), (0, l.jsx)(S.Z, {
      className: k.iconSparkleStar
    })]
  })
}

function F(e) {
  let {
    transitionState: n
  } = e, t = (0, f.Dt)(), {
    analyticsLocations: i
  } = (0, _.ZP)(p.Z.INVITE_MODAL);
  return (0, l.jsx)(_.Gt, {
    value: i,
    children: (0, l.jsx)(u.Y0X, {
      "aria-labelledby": t,
      transitionState: n,
      parentComponent: "AcceptInviteModal",
      children: (0, l.jsxs)(u.hzk, {
        className: k.errorContent,
        children: [(0, l.jsx)(U, {
          className: k.errorImage
        }), (0, l.jsx)(u.Heading, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: Z.intl.string(Z.t.u9zxnX)
        }), (0, l.jsx)("div", {
          className: k.errorBody,
          children: Z.intl.string(Z.t.FWkU6P)
        }), (0, l.jsx)(D, {
          size: D.Sizes.LARGE,
          onClick: () => P.Z.close(),
          color: D.Colors.BRAND,
          children: Z.intl.string(Z.t.wcqOoF)
        })]
      })
    })
  })
}

function G(e) {
  var n;
  let t, r, a, {
    transitionState: c
  } = e;
  (0, o.e7)([I.default], () => {
    var e;
    return null == (e = I.default.getCurrentUser()) ? true : e.premiumType
  });
  let g = (0, o.e7)([I.default], () => I.default.getCurrentUser()),
    {
      invite: v,
      error: j,
      submitting: S
    } = (0, o.cj)([T.Z], () => T.Z.getProps());
  i.useEffect(() => {
    if (null != v && null != v.guild) {
      var e;
      (0, N.pB)(null != (e = v.approximate_member_count) ? e : 0, v.code, v.guild.id)
    }
  }, [v, null == v ? true : v.approximate_member_count, null == v ? true : v.code, null == v || null == (n = v.guild) ? true : n.id]);
  let R = (0, N.yr)();
  i.useEffect(() => {
    !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? A.ZP.minimize() : A.ZP.restore(), A.ZP.focus())
  }, []);
  let M = (0, f.Dt)(),
    {
      analyticsLocations: U
    } = (0, _.ZP)(p.Z.INVITE_MODAL);
  if (null == v || null == g) return null;
  if (v.state === O.r2o.EXPIRED || v.state === O.r2o.BANNED || v.state === O.r2o.ERROR) return (0, l.jsx)(F, {
    transitionState: c
  });
  if (null == v.channel) return null;

  function G() {
    null != v && P.Z.acceptInvite(v)
  }
  let {
    guild: V,
    channel: w,
    inviter: B,
    target_application: W
  } = v, H = null != V, Y = null == v.guild && null == v.channel && null != v.inviter;
  if (null != W) t = null == V ? true : V.name, r = E.ZP.createFromServer(W).getCoverImageURL(1024);
  else if (null != V) t = V.name, r = C.ZP.getGuildSplashURL({
    id: V.id,
    splash: V.splash
  });
  else if ((null == (t = w.name) || "" === t) && null != B && (t = B.username), null == t) throw Error("no name for group DM invite");
  let K = (0, h.yU)();
  return a = Y ? Z.intl.string(Z.t["e/6Ogt"]) : Z.intl.format(Z.t["9sWQNT"], {
    usernameHook: () => (0, l.jsx)("span", {
      children: R
    })
  }), (0, l.jsx)(_.Gt, {
    value: U,
    children: (0, l.jsxs)(u.Y0X, {
      size: u.CgR.DYNAMIC,
      "aria-labelledby": M,
      transitionState: c,
      className: k.container,
      impression: {
        impressionName: s.ImpressionNames.INVITE_ACCEPT,
        impressionProperties: {
          guild_id: null == V ? true : V.id,
          invite_code: v.code
        }
      },
      parentComponent: "AcceptInviteModal",
      children: [(0, l.jsx)(u.hzk, {
        className: k.contentWrapper,
        children: (0, l.jsxs)(x.Z, {
          className: k.inviteContent,
          direction: x.Z.Direction.VERTICAL,
          justify: x.Z.Justify.BETWEEN,
          children: [(0, l.jsx)("div", {
            id: M,
            children: (0, l.jsx)(d.Z, {
              invite: v,
              disableUser: H,
              error: j
            })
          }), (0, l.jsxs)("div", {
            className: k.ctas,
            children: [K ? (0, l.jsx)(z, {}) : null, null == W ? (0, l.jsx)(u.aML, {
              "data-migration-pending": true,
              text: K ? Z.intl.string(Z.t.iLyuDO) : null,
              position: "bottom",
              children: e => {
                let {
                  onMouseEnter: n,
                  onMouseLeave: t
                } = e;
                return (0, l.jsx)(D, {
                  size: D.Sizes.LARGE,
                  onClick: G,
                  submitting: S,
                  disabled: K,
                  color: D.Colors.BRAND,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  children: K ? Z.intl.string(Z.t.ZNCziL) : (0, l.jsxs)("div", {
                    className: k.acceptAs,
                    children: [(0, l.jsx)(m.Z, {
                      "aria-hidden": true,
                      size: u.EFr.SIZE_16,
                      user: g,
                      className: k.acceptAsAvatar
                    }), (0, l.jsx)("span", {
                      className: k.acceptAsName,
                      children: a
                    })]
                  })
                })
              }
            }) : (0, l.jsxs)("div", {
              className: k.buttonGroup,
              children: [(0, l.jsx)(D, {
                size: D.Sizes.LARGE,
                onClick: G,
                submitting: S,
                children: Z.intl.string(Z.t.RscU7I)
              }), (0, l.jsx)(D, {
                color: D.Colors.PRIMARY,
                size: D.Sizes.LARGE,
                onClick: G,
                submitting: S,
                children: Z.intl.string(Z.t.eylRaY)
              })]
            }), (0, l.jsx)(x.Z, {
              justify: x.Z.Justify.CENTER,
              className: y.marginTop8,
              children: (0, l.jsx)(D, {
                look: D.Looks.LINK,
                className: k.noThanksButton,
                onClick: function() {
                  var e;
                  b.default.track(O.rMx.INVITE_ACCEPT_DISMISSED, {
                    invite_code: null == v ? true : v.code,
                    guild_id: null == v || null == (e = v.guild) ? true : e.id
                  }), P.Z.close()
                },
                color: D.Colors.TRANSPARENT,
                children: Z.intl.string(Z.t.ndsK4Z)
              })
            })]
          })]
        })
      }), null != r && (0, l.jsx)("div", {
        className: k.inviteSplash,
        style: {
          backgroundImage: "url(".concat(r, ")")
        }
      })]
    })
  })
}
D.Looks = Chunk755721.zx.Looks, D.Colors = Chunk755721.zx.Colors, D.Sizes = Chunk755721.zx.Sizes