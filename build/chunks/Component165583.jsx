/** Chunk was on web.js **/
/** chunk id: 165583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => F,
  dz: () => U,
  eQ: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk55358 = require("./55358.js"),
  Chunk703656 = require("./703656.js"),
  Chunk483444 = require("./483444.jsx"),
  Chunk599250 = require("./599250.jsx"),
  Chunk424218 = require("./424218.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk861990 = require("./861990.js"),
  Chunk98278 = require("./98278.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk717582 = require("./717582.js"),
  Chunk867250 = require("./867250.js");

function j(e) {
  if (null == e) return null;
  let t = u()(e),
    n = t.diff(u()(), "h");
  if (n > 24) {
    let e = t.diff(u()(), "d");
    return D.intl.formatToPlainString(D.t.xs9VPm, {
      numDays: e
    })
  }
  if (n > 1) return D.intl.formatToPlainString(D.t.p7KX59, {
    numHours: n
  });
  let r = t.diff(u()(), "minutes");
  return D.intl.formatToPlainString(D.t["XtQ+Ap"], {
    numMinutes: r
  })
}

function M(e) {
  var t, n, i;
  let {
    className: a,
    children: s,
    withBottomMargin: l,
    discountOffer: c,
    trialOffer: u
  } = e, d = null != (t = null == u ? true : u.expires_at) ? t : null == c ? true : c.expires_at, f = null == u ? true : u.subscription_trial, p = null != (i = null != (n = e.subscriptionTier) ? n : null == f ? true : f.sku_id) ? i : R.Si.TIER_2;
  return (0, r.jsxs)("div", {
    className: o()(a, x.gradientUpsellWrapper, {
      [x.gradientUpsellWrapperTier0]: p === R.Si.TIER_0,
      [x.gradientUpsellWrapperTier2]: p === R.Si.TIER_2,
      [x.gradientUpsellWrapperWithBottomMargin]: l
    }),
    children: [(0, r.jsxs)("div", {
      className: x.logo,
      children: [(0, r.jsx)(m.SrA, {
        size: "md",
        color: "currentColor",
        className: x.logoIcon
      }), p === R.Si.TIER_0 && (0, r.jsx)(O.Z, {
        className: x.logoWordmark
      }), p === R.Si.TIER_2 && (0, r.jsx)(y.Z, {
        className: x.logoWordmark
      })]
    }), (0, r.jsx)(m.Text, {
      variant: "text-md/medium",
      className: x.copy,
      color: "none",
      children: s
    }), (0, r.jsx)(P.Cy, {
      text: null != c ? D.intl.formatToPlainString(D.t.iiLbvu, {
        percent: c.discount.amount
      }) : D.intl.string(D.t.IBYG5U),
      colorOptions: p === R.Si.TIER_0 ? P.VE.PREMIUM_TIER_0_WHITE_FILL : P.VE.PREMIUM_TIER_2_WHITE_FILL
    }), (0, r.jsx)(m.Text, {
      variant: "eyebrow",
      className: x.countdownText,
      children: j(d)
    })]
  })
}

function k(e) {
  var t, n;
  let {
    className: a,
    onClose: o,
    subscriptionTier: s,
    analyticsLocationObject: l,
    trialOffer: c,
    discountOffer: u
  } = e, [d, f] = i.useState(false), p = null != u ? D.intl.formatToPlainString(D.t.bkQ4bH, {
    percent: u.discount.amount
  }) : (0, S.Rt)({
    intervalType: null == c || null == (t = c.subscription_trial) ? true : t.interval,
    intervalCount: null == c || null == (n = c.subscription_trial) ? true : n.interval_count
  });
  return (0, r.jsx)(N.Z, {
    className: a,
    subscriptionTier: s,
    submitting: d,
    premiumModalAnalyticsLocation: l,
    size: _.zx.Sizes.MEDIUM,
    color: _.zx.Colors.GREEN,
    onClick: () => {
      f(true)
    },
    onSubscribeModalClose: e => {
      f(false), e && (null == o || o())
    },
    textOptions: {
      textOverride: p
    }
  })
}

function U(e) {
  var t, n;
  let i = null == (t = (0, C.N)()) ? true : t.subscription_trial,
    a = null != (n = null == i ? true : i.sku_id) ? n : R.Si.TIER_2;
  return (0, r.jsx)(m.Text, {
    variant: "text-xs/bold",
    className: o()(x.trialBadge, e.className, {
      [x.trialBadgeGradientTier0]: a === R.Si.TIER_0,
      [x.trialBadgeGradientTier2]: a === R.Si.TIER_2
    }),
    color: "none",
    children: (0, S.a5)({
      intervalType: null == i ? true : i.interval,
      intervalCount: null == i ? true : i.interval_count
    })
  })
}

function G(e) {
  let {
    subscriptionTier: t,
    onClose: n,
    analyticsLocationObject: i,
    trialOffer: a,
    discountOffer: o
  } = e;
  return (0, r.jsxs)("div", {
    className: x.footer,
    children: [(0, r.jsx)(_.zx, {
      "data-migration-pending": true,
      onClick: n,
      size: _.zx.Sizes.SMALL,
      look: _.iL.BLANK,
      className: x.cancelButton,
      children: D.intl.string(D.t.cpT0Cq)
    }), (0, r.jsx)(k, {
      className: x.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: i,
      onClose: n,
      discountOffer: o,
      trialOffer: a
    })]
  })
}

function Z(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, C.N)();
  return (0, r.jsxs)("div", {
    className: x.tryOutUpsellContainer,
    children: [(0, r.jsx)(P.Cy, {
      className: x.topRimPill,
      text: D.intl.string(D.t["8CVUrV"]),
      colorOptions: P.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, r.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: D.intl.format(D.t["fF+cgd"], {
        onClick: () => (0, A.z)()
      })
    }), (0, r.jsx)(k, {
      trialOffer: i,
      className: x.subscribeButtonWide,
      subscriptionTier: R.Si.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, r.jsx)(m.Text, {
      variant: "eyebrow",
      className: x.countdownTextInSetting,
      children: j(null == i ? true : i.expires_at)
    })]
  })
}

function B(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: a,
    discountOffer: o
  } = e;
  return (0, r.jsxs)("div", {
    className: x.contentContainer,
    children: [(0, r.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, r.jsx)(m.Text, {
      className: x.context,
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(M, {
      trialOffer: a,
      discountOffer: o,
      children: i
    })]
  })
}

function F(e) {
  let {
    headingText: t,
    context: i,
    children: a,
    onClose: s,
    type: c,
    subscriptionTier: u,
    analyticsLocationObject: _,
    trialOffer: y,
    discountOffer: O
  } = e, A = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), C = (0, h.ZP)(), N = (0, v.BU)(T.zz / v.XD, {
    useKibibytes: true
  });
  switch (c) {
    case R.cd.EMPTY_STICKER_PICKER_UPSELL:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.P3F, {
          className: x.upsellClose,
          onClick: s,
          children: (0, r.jsx)(m.Dio, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            className: x.upsellImage,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(m.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t.HEm04J)
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, S.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: w.jXE.EXPRESSION_PICKER,
            object: w.qAy.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case R.cd.STICKER_PICKER_UPSELL:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            className: x.upsellImage,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(m.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t.jJG1pl)
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, S.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: w.jXE.EXPRESSION_PICKER,
            object: w.qAy.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case R.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != a, "You must specify children for this upsell type");
      let P = (0, p.ap)(C) ? n(537381) : n(341048);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            alt: "",
            className: x.upsellImage,
            src: P
          }), (0, r.jsx)(m.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t["1SsvhY"])
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t.md4nP5, {
              planName: (0, S.jP)(u),
              onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: w.jXE.EMOJI_PICKER_POPOUT,
            object: w.qAy.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case R.cd.UPLOAD_ERROR_UPSELL:
    case R.cd.BURST_REACTION_UPSELL:
    case R.cd.STREAM_QUALITY_UPSELL:
    case R.cd.MESSAGE_LENGTH_UPSELL:
      let j;
      switch (c) {
        case R.cd.UPLOAD_ERROR_UPSELL:
          j = D.intl.format(D.t.F4qoD7, {
            planName: (0, S.jP)(u),
            premiumMaxSize: u === R.Si.TIER_0 ? D.intl.string(D.t["C/Rhb9"]) : N,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case R.cd.BURST_REACTION_UPSELL:
          j = D.intl.format(D.t.poib9C, {
            planName: (0, S.jP)(u),
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case R.cd.STREAM_QUALITY_UPSELL:
          j = D.intl.format(D.t.WspKp9, {
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
            }
          });
          break;
        case R.cd.MESSAGE_LENGTH_UPSELL:
          j = D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: w.en1,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return l()(null != j, "There must be some upsell context"), (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(m.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          children: j
        })]
      });
    case R.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [(0, r.jsx)(m.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(m.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          children: D.intl.format(D.t.poib9C, {
            planName: (0, S.jP)(u),
            onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
          })
        }), (0, r.jsx)(k, {
          className: x.upsellButton,
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: s,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case R.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsx)(M, {
        trialOffer: y,
        discountOffer: O,
        children: D.intl.format(D.t["5KMAnK"], {
          onClick: () => {
            (0, b.uL)(w.Z5c.APPLICATION_STORE), (0, E.C)()
          }
        })
      });
    case R.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, r.jsxs)("div", {
        className: o()(x.messageLengthUpsellContainer, {
          [x.messageLengthUpsellAppearAnimation]: !A
        }),
        children: [(0, r.jsx)(m.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: i
        }), (0, r.jsx)(m.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: x.messageLengthUpsellHeader,
          children: D.intl.string(D.t.ZvHg3N)
        }), (0, r.jsx)("div", {
          className: x.divider
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          className: x.messageLengthBrandedContainer,
          subscriptionTier: u,
          children: D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: w.en1,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          })
        }), (0, r.jsx)(k, {
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: s,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case R.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case R.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, r.jsx)(Z, {});
    case R.cd.GUILD_CAP_MODAL_UPSELL:
    case R.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case R.cd.CUSTOM_PROFILE_UPSELL:
    case R.cd.VIDEO_BACKGROUNDS_MODAL:
    case R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case R.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case R.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
    case R.cd.APP_ICON_UPSELL:
    case R.cd.CLIENT_THEMES_UPSELL:
    case R.cd.TRY_IT_OUT_MODAL_UPSELL:
    case R.cd.VOICE_FILTERS_UPSELL:
      return (0, r.jsx)(B, {
        trialOffer: y,
        discountOffer: O,
        headingText: t,
        context: i,
        children: a
      });
    default:
      return I.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)), (0, r.jsx)(B, {
        headingText: t,
        context: i,
        children: a,
        trialOffer: y,
        discountOffer: O
      })
  }
}