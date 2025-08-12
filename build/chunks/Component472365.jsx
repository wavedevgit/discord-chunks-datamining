/** Chunk was on 86872 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk792766 = require("./792766.jsx"),
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
  Chunk454135 = require("./454135.js"),
  Chunk881488 = require("./881488.js");

function U() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: n
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_UPSELL_TOOLTIP);
  return Chunk73800.useEffect(() => {
    Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
      type: Chunk474936.cd.GUILD_CAP_INLINE_INVITE_MODAL,
      location: {
        page: Chunk981631.ZY5.NATIVE_INVITE_MODAL
      },
      location_stack: exports
    })
  }, [exports]), (0, Chunk255367.jsxs)(Chunk481060.P3F, {
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
    className: Chunk454135.experimentUpsellError,
    children: [(0, Chunk255367.jsx)(Chunk481060.SrA, {
      size: "md",
      className: Chunk454135.experimentUpsellIcon,
      color: Chunk436774.JX.PREMIUM_TIER_2
    }), (0, Chunk255367.jsx)("span", {
      className: Chunk454135.experimentUpsellText,
      children: Chunk388032.intl.string(Chunk388032.t["4/W4Pz"])
    }), (0, Chunk255367.jsx)("span", {
      className: Chunk454135.experimentGetNitro,
      children: Chunk388032.intl.string(Chunk388032.t.b6KOkJ)
    })]
  })
}

function y(e) {
  let {
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    "aria-hidden": "true",
    className: r()(k.iconContainer, n),
    children: [(0, i.jsx)(C.Z, {
      className: k.iconSparklePlus
    }), (0, i.jsx)(c.xPt, {
      size: "custom",
      color: "currentColor",
      className: k.iconLink,
      width: 40,
      height: 40
    }), (0, i.jsx)(A.Z, {
      className: k.iconSparkleStar
    })]
  })
}

function F(e) {
  let {
    transitionState: n
  } = e, t = (0, h.Dt)(), {
    analyticsLocations: l
  } = (0, _.ZP)(m.Z.INVITE_MODAL);
  return (0, i.jsx)(_.Gt, {
    value: l,
    children: (0, i.jsx)(c.Y0X, {
      "aria-labelledby": t,
      transitionState: n,
      parentComponent: "AcceptInviteModal",
      children: (0, i.jsxs)(c.hzk, {
        className: k.errorContent,
        children: [(0, i.jsx)(y, {
          className: k.errorImage
        }), (0, i.jsx)(c.X6q, {
          id: t,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: D.intl.string(D.t.u9zxnZ)
        }), (0, i.jsx)("div", {
          className: k.errorBody,
          children: D.intl.string(D.t.FWkU6O)
        }), (0, i.jsx)(p.zx, {
          size: p.zx.Sizes.LARGE,
          onClick: () => R.Z.close(),
          color: p.zx.Colors.BRAND,
          children: D.intl.string(D.t.wcqOoK)
        })]
      })
    })
  })
}

function G(e) {
  var n;
  let t, a, r, {
      transitionState: N
    } = e,
    f = (0, E.WR)({
      location: "AcceptInviteModal"
    });
  (0, o.e7)([S.default], () => {
    var e;
    return null == (e = S.default.getCurrentUser()) ? true : e.premiumType
  });
  let C = (0, o.e7)([S.default], () => S.default.getCurrentUser()),
    {
      invite: A,
      error: M,
      submitting: y
    } = (0, o.cj)([Z.Z], () => Z.Z.getProps());
  l.useEffect(() => {
    if (null != A && null != A.guild) {
      var e;
      (0, I.pB)(null != (e = A.approximate_member_count) ? e : 0, A.code, A.guild.id)
    }
  }, [A, null == A ? true : A.approximate_member_count, null == A ? true : A.code, null == A || null == (n = A.guild) ? true : n.id]);
  let G = (0, I.yr)();
  l.useEffect(() => {
    !__OVERLAY__ && P.isPlatformEmbedded && ((0, P.isWindows)() ? b.ZP.minimize() : b.ZP.restore(), b.ZP.focus())
  }, []);
  let V = (0, h.Dt)(),
    {
      analyticsLocations: W
    } = (0, _.ZP)(m.Z.INVITE_MODAL);
  if (null == A || null == C) return null;
  if (A.state === z.r2o.EXPIRED || A.state === z.r2o.BANNED || A.state === z.r2o.ERROR) return (0, i.jsx)(F, {
    transitionState: N
  });
  if (null == A.channel) return null;

  function B() {
    null != A && R.Z.acceptInvite(A)
  }
  let {
    guild: w,
    channel: K,
    inviter: Y,
    target_application: H
  } = A, Q = null != w, X = null != A.stage_instance, q = null == A.guild && null == A.channel && null != A.inviter;
  if (null != H) t = null == w ? true : w.name, a = j.ZP.createFromServer(H).getCoverImageURL(1024);
  else if (null != w) t = w.name, a = L.ZP.getGuildSplashURL({
    id: w.id,
    splash: w.splash
  });
  else if ((null == (t = K.name) || "" === t) && null != Y && (t = Y.username), null == t) throw Error("no name for group DM invite");
  let J = (0, v.yU)();
  return r = X ? D.intl.string(D.t["5UKyUl"]) : f ? D.intl.format(D.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: G
    })
  }) : q ? D.intl.string(D.t["e/6Ogo"]) : D.intl.format(D.t.QD7BDA, {
    guildName: t
  }), (0, i.jsx)(_.Gt, {
    value: W,
    children: (0, i.jsxs)(c.Y0X, {
      size: c.CgR.DYNAMIC,
      "aria-labelledby": V,
      transitionState: N,
      className: k.container,
      impression: {
        impressionName: s.ImpressionNames.INVITE_ACCEPT,
        impressionProperties: {
          guild_id: null == w ? true : w.id,
          invite_code: A.code
        }
      },
      parentComponent: "AcceptInviteModal",
      children: [(0, i.jsx)(c.hzk, {
        className: k.contentWrapper,
        children: (0, i.jsxs)(g.Z, {
          className: k.inviteContent,
          direction: g.Z.Direction.VERTICAL,
          justify: g.Z.Justify.BETWEEN,
          children: [(0, i.jsx)("div", {
            id: V,
            children: (0, i.jsx)(u.Z, {
              invite: A,
              disableUser: Q,
              error: M
            })
          }), X && null != w ? (0, i.jsx)("div", {
            className: k.stage,
            children: (0, i.jsx)(x.Z, {
              isCard: true,
              stageInstance: A.stage_instance,
              guild: w
            })
          }) : null, (0, i.jsxs)("div", {
            className: k.ctas,
            children: [J ? (0, i.jsx)(U, {}) : null, null == H ? (0, i.jsx)(c.ua7, {
              text: J ? D.intl.string(D.t.iLyuDA) : null,
              position: "bottom",
              children: e => {
                let {
                  onMouseEnter: n,
                  onMouseLeave: t
                } = e;
                return (0, i.jsx)(p.zx, {
                  size: p.zx.Sizes.LARGE,
                  onClick: B,
                  submitting: y,
                  disabled: J,
                  color: X ? p.zx.Colors.GREEN : p.zx.Colors.BRAND,
                  onMouseEnter: n,
                  onMouseLeave: t,
                  children: J ? D.intl.string(D.t.ZNCziI) : (0, i.jsxs)("div", {
                    className: k.acceptAs,
                    children: [f && (0, i.jsx)(d.Z, {
                      "aria-hidden": true,
                      size: c.EFr.SIZE_16,
                      user: C,
                      className: k.acceptAsAvatar
                    }), (0, i.jsx)("span", {
                      className: k.acceptAsName,
                      children: r
                    })]
                  })
                })
              }
            }) : (0, i.jsxs)("div", {
              className: k.buttonGroup,
              children: [(0, i.jsx)(p.zx, {
                size: p.zx.Sizes.LARGE,
                onClick: B,
                submitting: y,
                children: D.intl.string(D.t.RscU7O)
              }), (0, i.jsx)(p.zx, {
                color: p.zx.Colors.PRIMARY,
                size: p.zx.Sizes.LARGE,
                onClick: B,
                submitting: y,
                children: D.intl.string(D.t.eylRaW)
              })]
            }), (0, i.jsx)(g.Z, {
              justify: g.Z.Justify.CENTER,
              className: O.marginTop8,
              children: (0, i.jsx)(p.zx, {
                look: p.zx.Looks.LINK,
                className: k.noThanksButton,
                onClick: function() {
                  var e;
                  T.default.track(z.rMx.INVITE_ACCEPT_DISMISSED, {
                    invite_code: null == A ? true : A.code,
                    guild_id: null == A || null == (e = A.guild) ? true : e.id
                  }), R.Z.close()
                },
                color: p.zx.Colors.TRANSPARENT,
                children: D.intl.string(D.t.ndsK4e)
              })
            })]
          })]
        })
      }), null != a && (0, i.jsx)("div", {
        className: k.inviteSplash,
        style: {
          backgroundImage: "url(".concat(a, ")")
        }
      })]
    })
  })
}