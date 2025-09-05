/** Chunk was on 86872 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => F
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
  Chunk44609 = require("./44609.js"),
  Chunk731971 = require("./731971.js"),
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
  Chunk10198 = require("./10198.js");

function O() {
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
      children: Chunk388032.intl.string(Chunk388032.t.b6KOkJ)
    })]
  })
}

function U(e) {
  let {
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    "aria-hidden": "true",
    className: r()(D.iconContainer, n),
    children: [(0, i.jsx)(S.Z, {
      className: D.iconSparklePlus
    }), (0, i.jsx)(c.xPt, {
      size: "custom",
      color: "currentColor",
      className: D.iconLink,
      width: 40,
      height: 40
    }), (0, i.jsx)(C.Z, {
      className: D.iconSparkleStar
    })]
  })
}

function y(e) {
  let {
    transitionState: n
  } = e, t = (0, N.Dt)(), {
    analyticsLocations: l
  } = (0, _.ZP)(m.Z.INVITE_MODAL);
  return (0, i.jsx)(_.Gt, {
    value: l,
    children: (0, i.jsx)(c.Y0X, {
      "aria-labelledby": t,
      transitionState: n,
      parentComponent: "AcceptInviteModal",
      children: (0, i.jsxs)(c.hzk, {
        className: D.errorContent,
        children: [(0, i.jsx)(U, {
          className: D.errorImage
        }), (0, i.jsx)(c.X6q, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: M.intl.string(M.t.u9zxnZ)
        }), (0, i.jsx)("div", {
          className: D.errorBody,
          children: M.intl.string(M.t.FWkU6O)
        }), (0, i.jsx)(p.zx, {
          size: p.zx.Sizes.LARGE,
          onClick: () => b.Z.close(),
          color: p.zx.Colors.BRAND,
          children: M.intl.string(M.t.wcqOoK)
        })]
      })
    })
  })
}

function F(e) {
  var n;
  let t, a, r, {
      transitionState: g
    } = e,
    v = (0, h.WR)({
      location: "AcceptInviteModal"
    });
  (0, o.e7)([j.default], () => {
    var e;
    return null == (e = j.default.getCurrentUser()) ? true : e.premiumType
  });
  let S = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
    {
      invite: C,
      error: z,
      submitting: U
    } = (0, o.cj)([R.Z], () => R.Z.getProps());
  l.useEffect(() => {
    if (null != C && null != C.guild) {
      var e;
      (0, I.pB)(null != (e = C.approximate_member_count) ? e : 0, C.code, C.guild.id)
    }
  }, [C, null == C ? true : C.approximate_member_count, null == C ? true : C.code, null == C || null == (n = C.guild) ? true : n.id]);
  let F = (0, I.yr)();
  l.useEffect(() => {
    !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? P.ZP.minimize() : P.ZP.restore(), P.ZP.focus())
  }, []);
  let G = (0, N.Dt)(),
    {
      analyticsLocations: V
    } = (0, _.ZP)(m.Z.INVITE_MODAL);
  if (null == C || null == S) return null;
  if (C.state === Z.r2o.EXPIRED || C.state === Z.r2o.BANNED || C.state === Z.r2o.ERROR) return (0, i.jsx)(y, {
    transitionState: g
  });
  if (null == C.channel) return null;

  function W() {
    null != C && b.Z.acceptInvite(C)
  }
  let {
    guild: B,
    channel: w,
    inviter: K,
    target_application: Y
  } = C, H = null != B, Q = null == C.guild && null == C.channel && null != C.inviter;
  if (null != Y) t = null == B ? true : B.name, a = f.ZP.createFromServer(Y).getCoverImageURL(1024);
  else if (null != B) t = B.name, a = T.ZP.getGuildSplashURL({
    id: B.id,
    splash: B.splash
  });
  else if ((null == (t = w.name) || "" === t) && null != K && (t = K.username), null == t) throw Error("no name for group DM invite");
  let X = (0, E.yU)();
  return r = v ? M.intl.format(M.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: F
    })
  }) : Q ? M.intl.string(M.t["e/6Ogo"]) : M.intl.format(M.t.QD7BDA, {
    guildName: t
  }), (0, i.jsx)(_.Gt, {
    value: V,
    children: (0, i.jsxs)(c.Y0X, {
      size: c.CgR.DYNAMIC,
      "aria-labelledby": G,
      transitionState: g,
      className: D.container,
      impression: {
        impressionName: s.ImpressionNames.INVITE_ACCEPT,
        impressionProperties: {
          guild_id: null == B ? true : B.id,
          invite_code: C.code
        }
      },
      parentComponent: "AcceptInviteModal",
      children: [(0, i.jsx)(c.hzk, {
        className: D.contentWrapper,
        children: (0, i.jsxs)(x.Z, {
          className: D.inviteContent,
          direction: x.Z.Direction.VERTICAL,
          justify: x.Z.Justify.BETWEEN,
          children: [(0, i.jsx)("div", {
            id: G,
            children: (0, i.jsx)(u.Z, {
              invite: C,
              disableUser: H,
              error: z
            })
          }), (0, i.jsxs)("div", {
            className: D.ctas,
            children: [X ? (0, i.jsx)(O, {}) : null, null == Y ? (0, i.jsx)(c.ua7, {
              text: X ? M.intl.string(M.t.iLyuDA) : null,
              position: "bottom",
              children: e => {
                let {
                  onMouseEnter: n,
                  onMouseLeave: t
                } = e;
                return (0, i.jsx)(p.zx, {
                  size: p.zx.Sizes.LARGE,
                  onClick: W,
                  submitting: U,
                  disabled: X,
                  color: p.zx.Colors.BRAND,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  children: X ? M.intl.string(M.t.ZNCziI) : (0, i.jsxs)("div", {
                    className: D.acceptAs,
                    children: [v && (0, i.jsx)(d.Z, {
                      "aria-hidden": true,
                      size: c.EFr.SIZE_16,
                      user: S,
                      className: D.acceptAsAvatar
                    }), (0, i.jsx)("span", {
                      className: D.acceptAsName,
                      children: r
                    })]
                  })
                })
              }
            }) : (0, i.jsxs)("div", {
              className: D.buttonGroup,
              children: [(0, i.jsx)(p.zx, {
                size: p.zx.Sizes.LARGE,
                onClick: W,
                submitting: U,
                children: M.intl.string(M.t.RscU7O)
              }), (0, i.jsx)(p.zx, {
                color: p.zx.Colors.PRIMARY,
                size: p.zx.Sizes.LARGE,
                onClick: W,
                submitting: U,
                children: M.intl.string(M.t.eylRaW)
              })]
            }), (0, i.jsx)(x.Z, {
              justify: x.Z.Justify.CENTER,
              className: k.marginTop8,
              children: (0, i.jsx)(p.zx, {
                look: p.zx.Looks.LINK,
                className: D.noThanksButton,
                onClick: function() {
                  var e;
                  A.default.track(Z.rMx.INVITE_ACCEPT_DISMISSED, {
                    invite_code: null == C ? true : C.code,
                    guild_id: null == C || null == (e = C.guild) ? true : e.id
                  }), b.Z.close()
                },
                color: p.zx.Colors.TRANSPARENT,
                children: M.intl.string(M.t.ndsK4e)
              })
            })]
          })]
        })
      }), null != a && (0, i.jsx)("div", {
        className: D.inviteSplash,
        style: {
          backgroundImage: "url(".concat(a, ")")
        }
      })]
    })
  })
}