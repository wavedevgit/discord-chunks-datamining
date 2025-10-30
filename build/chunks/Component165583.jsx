/** Chunk was on web.js **/
/** chunk id: 165583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => F,
  dz: () => U,
  eQ: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk846288 = require("./846288.js"),
  Chunk867250 = require("./867250.js");

function M(e) {
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

function k(e) {
  var t, n, i;
  let {
    className: a,
    children: s,
    withBottomMargin: l,
    discountOffer: c,
    trialOffer: u
  } = e, d = null != (t = null == u ? true : u.expires_at) ? t : null == c ? true : c.expires_at, f = null == u ? true : u.subscription_trial, _ = null != (i = null != (n = e.subscriptionTier) ? n : null == f ? true : f.sku_id) ? i : P.Si.TIER_2;
  return (0, r.jsxs)("div", {
    className: o()(a, x.gradientUpsellWrapper, {
      [x.gradientUpsellWrapperTier0]: _ === P.Si.TIER_0,
      [x.gradientUpsellWrapperTier2]: _ === P.Si.TIER_2,
      [x.gradientUpsellWrapperWithBottomMargin]: l
    }),
    children: [(0, r.jsxs)("div", {
      className: x.logo,
      children: [(0, r.jsx)(h.SrA, {
        size: "md",
        color: "currentColor",
        className: x.logoIcon
      }), _ === P.Si.TIER_0 && (0, r.jsx)(O.Z, {
        className: x.logoWordmark
      }), _ === P.Si.TIER_2 && (0, r.jsx)(y.Z, {
        className: x.logoWordmark
      })]
    }), (0, r.jsx)(h.Text, {
      variant: "text-md/medium",
      className: x.copy,
      color: "none",
      children: s
    }), (0, r.jsx)(R.Cy, {
      text: null != c ? D.intl.formatToPlainString(D.t.iiLbvu, {
        percent: c.discount.amount
      }) : D.intl.string(D.t.IBYG5U),
      colorOptions: _ === P.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: x.countdownText,
      children: M(d)
    })]
  })
}

function j(e) {
  var t, n;
  let {
    className: a,
    onClose: o,
    subscriptionTier: s,
    analyticsLocationObject: l,
    trialOffer: c,
    discountOffer: u
  } = e, [d, f] = i.useState(false), _ = null != u ? D.intl.formatToPlainString(D.t.bkQ4bH, {
    percent: u.discount.amount
  }) : (0, I.Rt)({
    intervalType: null == c || null == (t = c.subscription_trial) ? true : t.interval,
    intervalCount: null == c || null == (n = c.subscription_trial) ? true : n.interval_count
  });
  return (0, r.jsx)(N.Z, {
    className: a,
    subscriptionTier: s,
    submitting: d,
    premiumModalAnalyticsLocation: l,
    size: p.zx.Sizes.MEDIUM,
    color: p.zx.Colors.GREEN,
    onClick: () => {
      f(true)
    },
    onSubscribeModalClose: e => {
      f(false), e && (null == o || o())
    },
    textOptions: {
      textOverride: _
    }
  })
}

function U(e) {
  var t, n;
  let i = null == (t = (0, C.N)()) ? true : t.subscription_trial,
    a = null != (n = null == i ? true : i.sku_id) ? n : P.Si.TIER_2;
  return (0, r.jsx)(h.Text, {
    variant: "text-xs/bold",
    className: o()(x.trialBadge, e.className, {
      [x.trialBadgeGradientTier0]: a === P.Si.TIER_0,
      [x.trialBadgeGradientTier2]: a === P.Si.TIER_2
    }),
    color: "none",
    children: (0, I.a5)({
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
    children: [(0, r.jsx)(p.zx, {
      "data-migration-pending": true,
      onClick: n,
      size: p.zx.Sizes.SMALL,
      look: p.iL.BLANK,
      className: x.cancelButton,
      children: D.intl.string(D.t.cpT0Cq)
    }), (0, r.jsx)(j, {
      className: x.subscribeButton,
      subscriptionTier: t,
      analyticsLocationObject: i,
      onClose: n,
      discountOffer: o,
      trialOffer: a
    })]
  })
}

function B(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, C.N)();
  return (0, r.jsxs)("div", {
    className: x.tryOutUpsellContainer,
    children: [(0, r.jsx)(R.Cy, {
      className: x.topRimPill,
      text: D.intl.string(D.t["8CVUrV"]),
      colorOptions: R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: D.intl.format(D.t["fF+cgd"], {
        onClick: () => (0, A.z)()
      })
    }), (0, r.jsx)(j, {
      trialOffer: i,
      className: x.subscribeButtonWide,
      subscriptionTier: P.Si.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: x.countdownTextInSetting,
      children: M(null == i ? true : i.expires_at)
    })]
  })
}

function Z(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: a,
    discountOffer: o
  } = e;
  return (0, r.jsxs)("div", {
    className: x.contentContainer,
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, r.jsx)(h.Text, {
      className: x.context,
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(k, {
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
    analyticsLocationObject: p,
    trialOffer: y,
    discountOffer: O
  } = e, A = (0, d.e7)([g.Z], () => g.Z.useReducedMotion), C = (0, m.ZP)(), N = (0, v.BU)(S.zz / v.XD, {
    useKibibytes: true
  });
  switch (c) {
    case P.cd.EMPTY_STICKER_PICKER_UPSELL:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.P3F, {
          className: x.upsellClose,
          onClick: s,
          children: (0, r.jsx)(h.Dio, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            className: x.upsellImage,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t.HEm04J)
          }), (0, r.jsx)(k, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, I.jP)(u),
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
    case P.cd.STICKER_PICKER_UPSELL:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            className: x.upsellImage,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t.jJG1pl)
          }), (0, r.jsx)(k, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, I.jP)(u),
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
    case P.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != a, "You must specify children for this upsell type");
      let R = (0, _.ap)(C) ? n(537381) : n(341048);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)("img", {
            alt: "",
            className: x.upsellImage,
            src: R
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "header-primary",
            children: D.intl.string(D.t["1SsvhY"])
          }), (0, r.jsx)(k, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t.md4nP5, {
              planName: (0, I.jP)(u),
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
    case P.cd.UPLOAD_ERROR_UPSELL:
    case P.cd.BURST_REACTION_UPSELL:
    case P.cd.STREAM_QUALITY_UPSELL:
    case P.cd.MESSAGE_LENGTH_UPSELL:
      let M;
      switch (c) {
        case P.cd.UPLOAD_ERROR_UPSELL:
          M = D.intl.format(D.t.F4qoD7, {
            planName: (0, I.jP)(u),
            premiumMaxSize: u === P.Si.TIER_0 ? D.intl.string(D.t["C/Rhb9"]) : N,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case P.cd.BURST_REACTION_UPSELL:
          M = D.intl.format(D.t.poib9C, {
            planName: (0, I.jP)(u),
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case P.cd.STREAM_QUALITY_UPSELL:
          M = D.intl.format(D.t.WspKp9, {
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s(), (0, f.pT)()
            }
          });
          break;
        case P.cd.MESSAGE_LENGTH_UPSELL:
          M = D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: w.en1,
            onClick: () => {
              (0, b.uL)(w.Z5c.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return l()(null != M, "There must be some upsell context"), (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(k, {
          trialOffer: y,
          discountOffer: O,
          children: M
        })]
      });
    case P.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, r.jsxs)("div", {
        className: x.contentContainer,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(k, {
          trialOffer: y,
          discountOffer: O,
          children: D.intl.format(D.t.poib9C, {
            planName: (0, I.jP)(u),
            onClick: () => (0, b.uL)(w.Z5c.APPLICATION_STORE)
          })
        }), (0, r.jsx)(j, {
          className: x.upsellButton,
          subscriptionTier: u,
          analyticsLocationObject: p,
          onClose: s,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsx)(k, {
        trialOffer: y,
        discountOffer: O,
        children: D.intl.format(D.t["5KMAnK"], {
          onClick: () => {
            (0, b.uL)(w.Z5c.APPLICATION_STORE), (0, E.C)()
          }
        })
      });
    case P.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, r.jsxs)("div", {
        className: o()(x.messageLengthUpsellContainer, {
          [x.messageLengthUpsellAppearAnimation]: !A
        }),
        children: [(0, r.jsx)(h.Text, {
          variant: "text-lg/bold",
          color: "status-danger",
          children: i
        }), (0, r.jsx)(h.Heading, {
          variant: "heading-lg/extrabold",
          color: "header-primary",
          className: x.messageLengthUpsellHeader,
          children: D.intl.string(D.t.ZvHg3N)
        }), (0, r.jsx)("div", {
          className: x.divider
        }), (0, r.jsx)(k, {
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
        }), (0, r.jsx)(j, {
          subscriptionTier: u,
          analyticsLocationObject: p,
          onClose: s,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case P.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case P.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, r.jsx)(B, {});
    case P.cd.GUILD_CAP_MODAL_UPSELL:
    case P.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case P.cd.CUSTOM_PROFILE_UPSELL:
    case P.cd.VIDEO_BACKGROUNDS_MODAL:
    case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case P.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case P.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case P.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
    case P.cd.APP_ICON_UPSELL:
    case P.cd.CLIENT_THEMES_UPSELL:
    case P.cd.TRY_IT_OUT_MODAL_UPSELL:
    case P.cd.VOICE_FILTERS_UPSELL:
      return (0, r.jsx)(Z, {
        trialOffer: y,
        discountOffer: O,
        headingText: t,
        context: i,
        children: a
      });
    default:
      return T.Z.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)), (0, r.jsx)(Z, {
        headingText: t,
        context: i,
        children: a,
        trialOffer: y,
        discountOffer: O
      })
  }
}