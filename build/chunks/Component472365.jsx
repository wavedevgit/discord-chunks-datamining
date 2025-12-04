/** Chunk was on 23792 **/
/** chunk id: 472365, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => W
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

function w(e) {
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
        children: [(0, i.jsx)(w, {
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

function W(e) {
  var n, t, l, a;
  let d, v, N, {
    transitionState: L
  } = e;
  (0, c.e7)([S.default], () => {
    var e;
    return null == (e = S.default.getCurrentUser()) ? true : e.premiumType
  });
  let j = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
    {
      invite: y,
      error: D,
      submitting: w
    } = (0, c.cj)([z.Z], () => z.Z.getProps()),
    W = (0, c.e7)([C.Z], () => {
      var e;
      return C.Z.getFriendMemberIds(null != (e = null == y ? true : y.code) ? e : "")
    });
  r.useEffect(() => {
    if (null != y && null != y.guild) {
      var e;
      (0, b.pB)(null != (e = y.approximate_member_count) ? e : 0, y.code, y.guild.id)
    }
  }, [y, null == y ? true : y.approximate_member_count, null == y ? true : y.code, null == y || null == (n = y.guild) ? true : n.id]);
  let F = (0, b.yr)(),
    {
      showInviter: H
    } = (0, P.v9)({
      location: "accept_invite_modal",
      autoTrackExposure: true
    });
  r.useEffect(() => {
    !__OVERLAY__ && O.isPlatformEmbedded && ((0, O.isWindows)() ? k.ZP.minimize() : k.ZP.restore(), k.ZP.focus())
  }, []);
  let X = (0, x.Dt)(),
    {
      analyticsLocations: Y
    } = (0, I.ZP)(f.Z.INVITE_MODAL);
  if (null == y || null == j) return null;
  if (y.state === M.r2o.EXPIRED || y.state === M.r2o.BANNED || y.state === M.r2o.ERROR) return (0, i.jsx)(V, {
    transitionState: L
  });
  if (null == y.channel) return null;

  function K() {
    null != y && R.Z.acceptInvite(y)
  }

  function Q() {
    var e;
    T.default.track(M.rMx.INVITE_ACCEPT_DISMISSED, {
      invite_code: null == y ? true : y.code,
      guild_id: null == y || null == (e = y.guild) ? true : e.id
    }), R.Z.close()
  }
  let {
    guild: q,
    channel: J,
    inviter: $,
    target_application: ee
  } = y, en = null == y.guild && null == y.channel && null != y.inviter, et = H && (null != (t = null == W ? true : W.length) ? t : 0) > 0 && null != $, ei = null != q || et;
  if (null != ee) d = null == q ? true : q.name, v = h.ZP.createFromServer(ee).getCoverImageURL(1024);
  else if (null != q) d = q.name, v = A.ZP.getGuildSplashURL({
    id: q.id,
    splash: q.splash
  });
  else if ((null == (d = J.name) || "" === d) && null != $ && (d = $.username), null == d) throw Error("no name for group DM invite");
  let er = (0, E.yU)();
  return N = en ? Z.intl.string(Z.t["e/6Ogt"]) : Z.intl.format(Z.t["9sWQNT"], {
    usernameHook: () => (0, i.jsx)("span", {
      children: F
    })
  }), (0, i.jsx)(I.Gt, {
    value: Y,
    children: (0, i.jsx)(s.IX, {
      size: null != v ? "xl" : "sm",
      "aria-labelledby": X,
      "aria-label": null != (a = null != (l = null == q ? true : q.name) ? l : null == J ? true : J.name) ? a : "",
      transitionState: L,
      onClose: () => (Q(), Promise.resolve()),
      trackingProps: {
        impression: {
          impressionName: o.ImpressionNames.INVITE_ACCEPT,
          impressionProperties: {
            guild_id: null == q ? true : q.id,
            invite_code: y.code
          }
        }
      },
      children: (0, i.jsxs)("div", {
        className: U.modalContainer,
        children: [(0, i.jsxs)("div", {
          className: U.contentWrapper,
          children: [et && (0, i.jsxs)("div", {
            className: U.inviterContainer,
            children: [(0, i.jsx)(m.Z, {
              user: new g.Z($),
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
                  children: $.username
                }, n)
              })
            })]
          }), (0, i.jsxs)("div", {
            className: U.inviteContent,
            children: [(0, i.jsx)("div", {
              id: X,
              children: (0, i.jsx)(p.Z, {
                invite: y,
                disableUser: ei,
                error: D,
                friendMemberIds: W,
                showInvitedByHeader: !et
              })
            }), (0, i.jsxs)("div", {
              className: U.ctas,
              children: [er ? (0, i.jsx)(B, {}) : null, null == ee ? (0, i.jsx)(u.u, {
                text: er ? Z.intl.string(Z.t.iLyuDO) : true,
                position: "bottom",
                children: (0, i.jsx)(G, {
                  size: G.Sizes.LARGE,
                  onClick: K,
                  submitting: w,
                  disabled: er,
                  color: G.Colors.BRAND,
                  children: er ? Z.intl.string(Z.t.ZNCziL) : (0, i.jsxs)("div", {
                    className: U.acceptAs,
                    children: [(0, i.jsx)(m.Z, {
                      "aria-hidden": true,
                      size: _.EFr.SIZE_16,
                      user: j,
                      className: U.acceptAsAvatar
                    }), (0, i.jsx)("span", {
                      className: U.acceptAsName,
                      children: N
                    })]
                  })
                })
              }) : (0, i.jsxs)("div", {
                className: U.buttonGroup,
                children: [(0, i.jsx)(G, {
                  size: G.Sizes.LARGE,
                  onClick: K,
                  submitting: w,
                  children: Z.intl.string(Z.t.RscU7I)
                }), (0, i.jsx)(G, {
                  color: G.Colors.PRIMARY,
                  size: G.Sizes.LARGE,
                  onClick: K,
                  submitting: w,
                  children: Z.intl.string(Z.t.eylRaY)
                })]
              }), (0, i.jsx)("div", {
                className: U.noThanksContainer,
                children: (0, i.jsx)(G, {
                  look: G.Looks.LINK,
                  className: U.noThanksButton,
                  onClick: Q,
                  color: G.Colors.TRANSPARENT,
                  children: Z.intl.string(Z.t.ndsK4Z)
                })
              })]
            })]
          })]
        }), null != v && (0, i.jsx)("div", {
          className: U.inviteSplash,
          style: {
            backgroundImage: "url(".concat(v, ")")
          }
        })]
      })
    })
  })
}
G.Looks = Chunk755721.zx.Looks, G.Colors = Chunk755721.zx.Colors, G.Sizes = Chunk755721.zx.Sizes