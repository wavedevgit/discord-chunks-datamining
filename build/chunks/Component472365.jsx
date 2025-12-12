/** Chunk was on 86872 **/
/** chunk id: 472365, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
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
  Chunk12205 = require("./12205.js");

function F() {
  let {
    analyticsLocations: e,
    sourceAnalyticsLocations: l
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

function U(e) {
  let {
    className: l
  } = e;
  return (0, t.jsxs)("div", {
    "aria-hidden": "true",
    className: r()(b.iconContainer, l),
    children: [(0, t.jsx)(S.Z, {
      className: b.iconSparklePlus
    }), (0, t.jsx)(o.xPt, {
      size: "custom",
      color: "currentColor",
      className: b.iconLink,
      width: 40,
      height: 40
    }), (0, t.jsx)(T.Z, {
      className: b.iconSparkleStar
    })]
  })
}

function z(e) {
  let {
    transitionState: l
  } = e, n = (0, h.Dt)(), {
    analyticsLocations: i
  } = (0, g.ZP)(x.Z.INVITE_MODAL);
  return (0, t.jsx)(g.Gt, {
    value: i,
    children: (0, t.jsx)(u.IX, {
      "aria-label": O.intl.string(O.t.u9zxnX),
      transitionState: l,
      onClose: () => (A.Z.close(), Promise.resolve()),
      size: "sm",
      children: (0, t.jsxs)("div", {
        className: b.errorContent,
        children: [(0, t.jsx)(U, {
          className: b.errorImage
        }), (0, t.jsx)(o.Heading, {
          id: n,
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: O.intl.string(O.t.u9zxnX)
        }), (0, t.jsx)("div", {
          className: b.errorBody,
          children: O.intl.string(O.t.FWkU6P)
        }), (0, t.jsx)(u.zxk, {
          fullWidth: true,
          onClick: () => A.Z.close(),
          variant: "primary",
          text: O.intl.string(O.t.wcqOoF)
        })]
      })
    })
  })
}

function y(e) {
  var l, n, a, r, v, p;
  let S, T, k, {
    transitionState: U
  } = e;
  (0, d.e7)([f.default], () => {
    var e;
    return null == (e = f.default.getCurrentUser()) ? true : e.premiumType
  });
  let y = (0, d.e7)([f.default], () => f.default.getCurrentUser()),
    {
      invite: V,
      error: w,
      submitting: H
    } = (0, d.cj)([R.Z], () => R.Z.getProps()),
    K = (0, d.e7)([N.Z], () => {
      var e;
      return N.Z.getFriendMemberIds(null != (e = null == V ? true : V.code) ? e : "")
    });
  i.useEffect(() => {
    if (null != V && null != V.guild) {
      var e;
      (0, j.pB)(null != (e = V.approximate_member_count) ? e : 0, V.code, V.guild.id)
    }
  }, [V, null == V ? true : V.approximate_member_count, null == V ? true : V.code, null == V || null == (l = V.guild) ? true : l.id]);
  let W = (0, j.yr)(),
    {
      showFriendsInServer: G,
      showInviter: X
    } = (0, M.cJ)({
      location: "accept_invite_modal",
      autoTrackExposure: true,
      guild: null == V ? true : V.guild
    }),
    q = G ? K : null;
  i.useEffect(() => {
    !__OVERLAY__ && L.isPlatformEmbedded && ((0, L.isWindows)() ? Z.ZP.minimize() : Z.ZP.restore(), Z.ZP.focus())
  }, []);
  let B = (0, h.Dt)(),
    {
      analyticsLocations: Q
    } = (0, g.ZP)(x.Z.INVITE_MODAL),
    Y = null != (a = null == q ? true : q.length) ? a : 0,
    J = Y > 0;
  if (i.useEffect(() => {
      if (J && (null == V ? true : V.code) != null) {
        var e;
        P.default.track(D.rMx.INVITE_FRIEND_MEMBERS_VIEWED, {
          invite_code: null == V ? true : V.code,
          guild_id: null == (e = V.guild) ? true : e.id,
          friend_count: Y
        })
      }
    }, [J, Y, null == V ? true : V.code, null == V || null == (n = V.guild) ? true : n.id]), null == V || null == y) return null;
  if (V.state === D.r2o.EXPIRED || V.state === D.r2o.BANNED || V.state === D.r2o.ERROR) return (0, t.jsx)(z, {
    transitionState: U
  });
  if (null == V.channel) return null;

  function $() {
    null != V && A.Z.acceptInvite(V)
  }

  function ee() {
    var e;
    P.default.track(D.rMx.INVITE_ACCEPT_DISMISSED, {
      invite_code: null == V ? true : V.code,
      guild_id: null == V || null == (e = V.guild) ? true : e.id
    }), A.Z.close()
  }
  let {
    guild: el,
    channel: en,
    inviter: et,
    target_application: ei
  } = V, ea = null == V.guild && null == V.channel && null != V.inviter, er = X && (null != (r = null == q ? true : q.length) ? r : 0) > 0 && null != et, es = null != el || er;
  if (null != ei) S = null == el ? true : el.name, T = _.ZP.createFromServer(ei).getCoverImageURL(1024);
  else if (null != el) S = el.name, T = C.ZP.getGuildSplashURL({
    id: el.id,
    splash: el.splash
  });
  else if ((null == (S = en.name) || "" === S) && null != et && (S = et.username), null == S) throw Error("no name for group DM invite");
  let eu = (0, E.yU)();
  return k = ea ? O.intl.string(O.t["e/6Ogt"]) : O.intl.format(O.t["9sWQNT"], {
    usernameHook: () => (0, t.jsx)("span", {
      children: W
    })
  }), (0, t.jsx)(g.Gt, {
    value: Q,
    children: (0, t.jsx)(u.IX, {
      size: null != T ? "xl" : "sm",
      "aria-labelledby": B,
      "aria-label": null != (p = null != (v = null == el ? true : el.name) ? v : null == en ? true : en.name) ? p : "",
      transitionState: U,
      onClose: () => (ee(), Promise.resolve()),
      trackingProps: {
        impression: {
          impressionName: s.ImpressionNames.INVITE_ACCEPT,
          impressionProperties: {
            guild_id: null == el ? true : el.id,
            invite_code: V.code
          }
        }
      },
      children: (0, t.jsxs)("div", {
        className: b.modalContainer,
        children: [(0, t.jsxs)("div", {
          className: b.contentWrapper,
          children: [er && (0, t.jsxs)("div", {
            className: b.inviterContainer,
            children: [(0, t.jsx)(m.Z, {
              user: new I.Z(et),
              size: o.EFr.SIZE_20
            }), (0, t.jsx)(o.Text, {
              tag: "span",
              variant: "text-md/medium",
              color: "text-subtle",
              children: O.intl.format(O.t.ri1ubC, {
                usernameHook: (e, l) => (0, t.jsx)(o.Text, {
                  variant: "text-md/semibold",
                  color: "text-default",
                  tag: "span",
                  children: et.username
                }, l)
              })
            })]
          }), (0, t.jsxs)("div", {
            className: b.inviteContent,
            children: [(0, t.jsx)("div", {
              id: B,
              children: (0, t.jsx)(c.Z, {
                invite: V,
                disableUser: es,
                error: w,
                friendMemberIds: q,
                showInvitedByHeader: !er
              })
            }), (0, t.jsxs)("div", {
              children: [eu ? (0, t.jsx)(F, {}) : null, (0, t.jsxs)(u.Kqy, {
                gap: 8,
                align: "center",
                children: [null == ei ? (0, t.jsx)(u.zxk, {
                  onClick: $,
                  loading: H,
                  disabled: eu,
                  variant: "primary",
                  fullWidth: true,
                  text: eu ? O.intl.string(O.t.ZNCziL) : k,
                  icon: eu || null == y ? true : () => (0, t.jsx)(m.Z, {
                    "aria-hidden": true,
                    size: o.EFr.SIZE_16,
                    user: y,
                    className: b.acceptAsAvatar
                  })
                }) : (0, t.jsxs)(u.hE2, {
                  fullWidth: true,
                  children: [(0, t.jsx)(u.zxk, {
                    variant: "secondary",
                    text: O.intl.string(O.t.eylRaY),
                    onClick: $,
                    loading: H
                  }), (0, t.jsx)(u.zxk, {
                    variant: "primary",
                    text: O.intl.string(O.t.RscU7I),
                    onClick: $,
                    loading: H
                  })]
                }), (0, t.jsx)(u.Avr, {
                  onClick: ee,
                  variant: "secondary",
                  text: O.intl.string(O.t.ndsK4Z),
                  textVariant: "text-sm/medium"
                })]
              })]
            })]
          })]
        }), null != T && (0, t.jsx)("div", {
          className: b.inviteSplash,
          style: {
            backgroundImage: "url(".concat(T, ")")
          }
        })]
      })
    })
  })
}