/** Chunk was on 86872 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk588705 = require("./588705.jsx"),
  Chunk700582 = require("./700582.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk388905 = require("./388905.jsx"),
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
  Chunk12205 = require("./12205.js"),
  Chunk197571 = require("./197571.js");

function D() {
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
    className: Chunk12205.experimentUpsellError,
    children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      className: Chunk12205.experimentUpsellIcon,
      color: Chunk436774.JX.PREMIUM_TIER_2
    }), (0, Chunk951288.jsx)("span", {
      className: Chunk12205.experimentUpsellText,
      children: Chunk388032.intl.string(Chunk388032.t["4/W4Pz"])
    }), (0, Chunk951288.jsx)("span", {
      className: Chunk12205.experimentGetNitro,
      children: Chunk388032.intl.string(Chunk388032.t.b6KOkI)
    })]
  })
}

function O(e) {
  let {
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    "aria-hidden": "true",
    className: r()(z.iconContainer, n),
    children: [(0, i.jsx)(j.Z, {
      className: z.iconSparklePlus
    }), (0, i.jsx)(c.xPt, {
      size: "custom",
      color: "currentColor",
      className: z.iconLink,
      width: 40,
      height: 40
    }), (0, i.jsx)(S.Z, {
      className: z.iconSparkleStar
    })]
  })
}

function U(e) {
  let {
    transitionState: n
  } = e, t = (0, N.Dt)(), {
    analyticsLocations: l
  } = (0, p.ZP)(m.Z.INVITE_MODAL);
  return (0, i.jsx)(p.Gt, {
    value: l,
    children: (0, i.jsx)(c.Y0X, {
      "aria-labelledby": t,
      transitionState: n,
      parentComponent: "AcceptInviteModal",
      children: (0, i.jsxs)(c.hzk, {
        className: z.errorContent,
        children: [(0, i.jsx)(O, {
          className: z.errorImage
        }), (0, i.jsx)(c.Heading, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: M.intl.string(M.t.u9zxnX)
        }), (0, i.jsx)("div", {
          className: z.errorBody,
          children: M.intl.string(M.t.FWkU6P)
        }), (0, i.jsx)(_.zx, {
          size: _.zx.Sizes.LARGE,
          onClick: () => P.Z.close(),
          color: _.zx.Colors.BRAND,
          children: M.intl.string(M.t.wcqOoF)
        })]
      })
    })
  })
}

function y(e) {
  var n;
  let t, a, r, {
    transitionState: g
  } = e;
  (0, o.e7)([v.default], () => {
    var e;
    return null == (e = v.default.getCurrentUser()) ? true : e.premiumType
  });
  let E = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
    {
      invite: j,
      error: S,
      submitting: Z
    } = (0, o.cj)([b.Z], () => b.Z.getProps());
  l.useEffect(() => {
    if (null != j && null != j.guild) {
      var e;
      (0, h.pB)(null != (e = j.approximate_member_count) ? e : 0, j.code, j.guild.id)
    }
  }, [j, null == j ? true : j.approximate_member_count, null == j ? true : j.code, null == j || null == (n = j.guild) ? true : n.id]);
  let O = (0, h.yr)();
  l.useEffect(() => {
    !__OVERLAY__ && A.isPlatformEmbedded && ((0, A.isWindows)() ? L.ZP.minimize() : L.ZP.restore(), L.ZP.focus())
  }, []);
  let y = (0, N.Dt)(),
    {
      analyticsLocations: F
    } = (0, p.ZP)(m.Z.INVITE_MODAL);
  if (null == j || null == E) return null;
  if (j.state === R.r2o.EXPIRED || j.state === R.r2o.BANNED || j.state === R.r2o.ERROR) return (0, i.jsx)(U, {
    transitionState: g
  });
  if (null == j.channel) return null;

  function G() {
    null != j && P.Z.acceptInvite(j)
  }
  let {
    guild: V,
    channel: B,
    inviter: W,
    target_application: w
  } = j, H = null != V, Y = null == j.guild && null == j.channel && null != j.inviter;
  if (null != w) t = null == V ? true : V.name, a = I.ZP.createFromServer(w).getCoverImageURL(1024);
  else if (null != V) t = V.name, a = T.ZP.getGuildSplashURL({
    id: V.id,
    splash: V.splash
  });
  else if ((null == (t = B.name) || "" === t) && null != W && (t = W.username), null == t) throw Error("no name for group DM invite");
  let K = (0, f.yU)();
  return r = Y ? M.intl.string(M.t["e/6Ogt"]) : M.intl.format(M.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: O
    })
  }), (0, i.jsx)(p.Gt, {
    value: F,
    children: (0, i.jsxs)(c.Y0X, {
      size: c.CgR.DYNAMIC,
      "aria-labelledby": y,
      transitionState: g,
      className: z.container,
      impression: {
        impressionName: s.ImpressionNames.INVITE_ACCEPT,
        impressionProperties: {
          guild_id: null == V ? true : V.id,
          invite_code: j.code
        }
      },
      parentComponent: "AcceptInviteModal",
      children: [(0, i.jsx)(c.hzk, {
        className: z.contentWrapper,
        children: (0, i.jsxs)(x.Z, {
          className: z.inviteContent,
          direction: x.Z.Direction.VERTICAL,
          justify: x.Z.Justify.BETWEEN,
          children: [(0, i.jsx)("div", {
            id: y,
            children: (0, i.jsx)(u.Z, {
              invite: j,
              disableUser: H,
              error: S
            })
          }), (0, i.jsxs)("div", {
            className: z.ctas,
            children: [K ? (0, i.jsx)(D, {}) : null, null == w ? (0, i.jsx)(c.aML, {
              "data-migration-pending": true,
              text: K ? M.intl.string(M.t.iLyuDO) : null,
              position: "bottom",
              children: e => {
                let {
                  onMouseEnter: n,
                  onMouseLeave: t
                } = e;
                return (0, i.jsx)(_.zx, {
                  size: _.zx.Sizes.LARGE,
                  onClick: G,
                  submitting: Z,
                  disabled: K,
                  color: _.zx.Colors.BRAND,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  children: K ? M.intl.string(M.t.ZNCziL) : (0, i.jsxs)("div", {
                    className: z.acceptAs,
                    children: [(0, i.jsx)(d.Z, {
                      "aria-hidden": true,
                      size: c.EFr.SIZE_16,
                      user: E,
                      className: z.acceptAsAvatar
                    }), (0, i.jsx)("span", {
                      className: z.acceptAsName,
                      children: r
                    })]
                  })
                })
              }
            }) : (0, i.jsxs)("div", {
              className: z.buttonGroup,
              children: [(0, i.jsx)(_.zx, {
                size: _.zx.Sizes.LARGE,
                onClick: G,
                submitting: Z,
                children: M.intl.string(M.t.RscU7I)
              }), (0, i.jsx)(_.zx, {
                color: _.zx.Colors.PRIMARY,
                size: _.zx.Sizes.LARGE,
                onClick: G,
                submitting: Z,
                children: M.intl.string(M.t.eylRaY)
              })]
            }), (0, i.jsx)(x.Z, {
              justify: x.Z.Justify.CENTER,
              className: k.marginTop8,
              children: (0, i.jsx)(_.zx, {
                look: _.zx.Looks.LINK,
                className: z.noThanksButton,
                onClick: function() {
                  var e;
                  C.default.track(R.rMx.INVITE_ACCEPT_DISMISSED, {
                    invite_code: null == j ? true : j.code,
                    guild_id: null == j || null == (e = j.guild) ? true : e.id
                  }), P.Z.close()
                },
                color: _.zx.Colors.TRANSPARENT,
                children: M.intl.string(M.t.ndsK4Z)
              })
            })]
          })]
        })
      }), null != a && (0, i.jsx)("div", {
        className: z.inviteSplash,
        style: {
          backgroundImage: "url(".concat(a, ")")
        }
      })]
    })
  })
}