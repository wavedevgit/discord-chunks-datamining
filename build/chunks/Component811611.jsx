/** Chunk was on web.js **/
/** chunk id: 811611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => B,
  Vq: () => U,
  ux: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk11029 = require("./11029.js"),
  Chunk976860 = require("./976860.js"),
  Chunk224016 = require("./224016.jsx"),
  Chunk217392 = require("./217392.jsx"),
  Chunk255438 = require("./255438.js"),
  Chunk927578 = require("./927578.js"),
  Chunk728458 = require("./728458.js"),
  Chunk292348 = require("./292348.js"),
  Chunk87719 = require("./87719.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk795269 = require("./795269.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk514177 = require("./514177.js"),
  Chunk939383 = require("./939383.js");

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
    children: o,
    withBottomMargin: l,
    discountOffer: c,
    trialOffer: u
  } = e, d = null != (t = null == u ? true : u.expires_at) ? t : null == c ? true : c.expires_at, f = null == u ? true : u.subscription_trial, p = null != (n = null != (i = e.subscriptionTier) ? i : null == f ? true : f.sku_id) ? n : w.pe.TIER_2;
  return (0, r.jsxs)("div", {
    className: s()(a, x.J3, {
      [x.Vm]: p === w.pe.TIER_0,
      [x.hD]: p === w.pe.TIER_2,
      [x.ip]: l
    }),
    children: [(0, r.jsxs)("div", {
      className: x.wm,
      children: [(0, r.jsx)(h.tvc, {
        size: "md",
        color: "currentColor",
        className: x.Xo
      }), p === w.pe.TIER_0 && (0, r.jsx)(O.A, {
        className: x.Vn
      }), p === w.pe.TIER_2 && (0, r.jsx)(y.A, {
        className: x.Vn
      })]
    }), (0, r.jsx)(h.Text, {
      variant: "text-md/medium",
      className: x.C,
      color: "none",
      children: o
    }), (0, r.jsx)(R.ir, {
      text: null != c ? D.intl.formatToPlainString(D.t.iiLbvu, {
        percent: c.discount.amount
      }) : D.intl.string(D.t.IBYG5U),
      colorOptions: p === w.pe.TIER_0 ? R.at.PREMIUM_TIER_0_WHITE_FILL : R.at.PREMIUM_TIER_2_WHITE_FILL
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: x.dt,
      children: j(d)
    })]
  })
}

function k(e) {
  var t, n;
  let {
    className: a,
    onClose: s,
    subscriptionTier: o,
    analyticsLocationObject: l,
    trialOffer: c,
    discountOffer: u
  } = e, [d, f] = i.useState(false), p = null != u ? D.intl.formatToPlainString(D.t.bkQ4bH, {
    percent: u.discount.amount
  }) : (0, v.FY)({
    intervalType: null == c || null == (t = c.subscription_trial) ? true : t.interval,
    intervalCount: null == c || null == (n = c.subscription_trial) ? true : n.interval_count
  });
  return (0, r.jsx)(N.A, {
    className: a,
    subscriptionTier: o,
    submitting: d,
    premiumModalAnalyticsLocation: l,
    size: _.$n.Sizes.MEDIUM,
    color: _.$n.Colors.GREEN,
    onClick: () => {
      f(true)
    },
    onSubscribeModalClose: e => {
      f(false), e && (null == s || s())
    },
    textOptions: {
      textOverride: p
    }
  })
}

function U(e) {
  var t, n;
  let i = null == (n = (0, C.V)()) ? true : n.subscription_trial,
    a = null != (t = null == i ? true : i.sku_id) ? t : w.pe.TIER_2;
  return (0, r.jsx)(h.Text, {
    variant: "text-xs/bold",
    className: s()(x.A6, e.className, {
      [x.kU]: a === w.pe.TIER_0,
      [x.y_]: a === w.pe.TIER_2
    }),
    color: "none",
    children: (0, v.tS)({
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
    discountOffer: s
  } = e;
  return (0, r.jsxs)("div", {
    className: x.qr,
    children: [(0, r.jsx)(_.$n, {
      "data-migration-pending": true,
      onClick: n,
      size: _.$n.Sizes.SMALL,
      look: _.pR.BLANK,
      className: x.x7,
      children: D.intl.string(D.t.cpT0Cq)
    }), (0, r.jsx)(k, {
      className: x.xF,
      subscriptionTier: t,
      analyticsLocationObject: i,
      onClose: n,
      discountOffer: s,
      trialOffer: a
    })]
  })
}

function V(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, C.V)();
  return (0, r.jsxs)("div", {
    className: x.ki,
    children: [(0, r.jsx)(R.ir, {
      className: x.LW,
      text: D.intl.string(D.t["8CVUrV"]),
      colorOptions: R.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: D.intl.format(D.t["fF+cgd"], {
        onClick: () => (0, T.Z)()
      })
    }), (0, r.jsx)(k, {
      trialOffer: i,
      className: x.as,
      subscriptionTier: w.pe.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: x.eg,
      children: j(null == i ? true : i.expires_at)
    })]
  })
}

function F(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: a,
    discountOffer: s
  } = e;
  return (0, r.jsxs)("div", {
    className: x.hQ,
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, r.jsx)(h.Text, {
      className: x._O,
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(M, {
      trialOffer: a,
      discountOffer: s,
      children: i
    })]
  })
}

function B(e) {
  let {
    headingText: t,
    context: i,
    children: a,
    onClose: o,
    type: c,
    subscriptionTier: u,
    analyticsLocationObject: _,
    trialOffer: y,
    discountOffer: O
  } = e, T = (0, d.bG)([g.A], () => g.A.useReducedMotion), C = (0, m.Ay)(), N = (0, A.Xq)(I.eM / A.XF, {
    useKibibytes: true
  });
  switch (c) {
    case w.e.EMPTY_STICKER_PICKER_UPSELL:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.DUT, {
          className: x.kz,
          onClick: o,
          children: (0, r.jsx)(h.PGe, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsxs)("div", {
          className: x.hQ,
          children: [(0, r.jsx)("img", {
            className: x.Tn,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t.HEm04J)
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, v.Zw)(u),
              onClick: () => (0, b.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: o,
          analyticsLocationObject: {
            section: P.JJy.EXPRESSION_PICKER,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case w.e.STICKER_PICKER_UPSELL:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.hQ,
          children: [(0, r.jsx)("img", {
            className: x.Tn,
            src: L,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t.jJG1pl)
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, v.Zw)(u),
              onClick: () => (0, b.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: o,
          analyticsLocationObject: {
            section: P.JJy.EXPRESSION_PICKER,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case w.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != a, "You must specify children for this upsell type");
      let R = (0, p.qB)(C) ? n(454333) : n(674463);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: x.hQ,
          children: [(0, r.jsx)("img", {
            alt: "",
            className: x.Tn,
            src: R
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t["1SsvhY"])
          }), (0, r.jsx)(M, {
            trialOffer: y,
            discountOffer: O,
            children: D.intl.format(D.t.md4nP5, {
              planName: (0, v.Zw)(u),
              onClick: () => (0, b.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: o,
          analyticsLocationObject: {
            section: P.JJy.EMOJI_PICKER_POPOUT,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: y,
          discountOffer: O
        })]
      });
    case w.e.UPLOAD_ERROR_UPSELL:
    case w.e.BURST_REACTION_UPSELL:
    case w.e.STREAM_QUALITY_UPSELL:
    case w.e.MESSAGE_LENGTH_UPSELL:
      let j;
      switch (c) {
        case w.e.UPLOAD_ERROR_UPSELL:
          j = D.intl.format(D.t.F4qoD7, {
            planName: (0, v.Zw)(u),
            premiumMaxSize: u === w.pe.TIER_0 ? D.intl.string(D.t["C/Rhb9"]) : N,
            onClick: () => {
              (0, b.pX)(P.BVt.APPLICATION_STORE), null == o || o()
            }
          });
          break;
        case w.e.BURST_REACTION_UPSELL:
          j = D.intl.format(D.t.poib9C, {
            planName: (0, v.Zw)(u),
            onClick: () => {
              (0, b.pX)(P.BVt.APPLICATION_STORE), null == o || o()
            }
          });
          break;
        case w.e.STREAM_QUALITY_UPSELL:
          j = D.intl.format(D.t.WspKp9, {
            onClick: () => {
              (0, b.pX)(P.BVt.APPLICATION_STORE), null == o || o(), (0, f.closeAllModals)()
            }
          });
          break;
        case w.e.MESSAGE_LENGTH_UPSELL:
          j = D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: P.CS1,
            onClick: () => {
              (0, b.pX)(P.BVt.APPLICATION_STORE), null == o || o()
            }
          })
      }
      return l()(null != j, "There must be some upsell context"), (0, r.jsxs)("div", {
        className: x.hQ,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          children: j
        })]
      });
    case w.e.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, r.jsxs)("div", {
        className: x.hQ,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          children: D.intl.format(D.t.poib9C, {
            planName: (0, v.Zw)(u),
            onClick: () => (0, b.pX)(P.BVt.APPLICATION_STORE)
          })
        }), (0, r.jsx)(k, {
          className: x.Oy,
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: o,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case w.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsx)(M, {
        trialOffer: y,
        discountOffer: O,
        children: D.intl.format(D.t["5KMAnK"], {
          onClick: () => {
            (0, b.pX)(P.BVt.APPLICATION_STORE), (0, E.D)()
          }
        })
      });
    case w.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, r.jsxs)("div", {
        className: s()(x.iW, {
          [x.WP]: !T
        }),
        children: [(0, r.jsx)(h.Text, {
          variant: "text-lg/bold",
          color: "text-feedback-critical",
          children: i
        }), (0, r.jsx)(h.Heading, {
          variant: "heading-lg/extrabold",
          color: "text-strong",
          className: x.Ed,
          children: D.intl.string(D.t.ZvHg3N)
        }), (0, r.jsx)("div", {
          className: x.yF
        }), (0, r.jsx)(M, {
          trialOffer: y,
          discountOffer: O,
          className: x.ZH,
          subscriptionTier: u,
          children: D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: P.CS1,
            onClick: () => {
              (0, b.pX)(P.BVt.APPLICATION_STORE), null == o || o()
            }
          })
        }), (0, r.jsx)(k, {
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: o,
          trialOffer: y,
          discountOffer: O
        })]
      });
    case w.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case w.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, r.jsx)(V, {});
    case w.e.GUILD_CAP_MODAL_UPSELL:
    case w.e.PREMIUM_GUILD_IDENTITY_MODAL:
    case w.e.CUSTOM_PROFILE_UPSELL:
    case w.e.VIDEO_BACKGROUNDS_MODAL:
    case w.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case w.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case w.e.EMOJI_PICKER_EMOJI_CLICKED:
    case w.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
    case w.e.APP_ICON_UPSELL:
    case w.e.CLIENT_THEMES_UPSELL:
    case w.e.TRY_IT_OUT_MODAL_UPSELL:
    case w.e.VOICE_FILTERS_UPSELL:
      return (0, r.jsx)(F, {
        trialOffer: y,
        discountOffer: O,
        headingText: t,
        context: i,
        children: a
      });
    default:
      return S.A.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)), (0, r.jsx)(F, {
        headingText: t,
        context: i,
        children: a,
        trialOffer: y,
        discountOffer: O
      })
  }
}