/** Chunk was on web.js **/
/** chunk id: 811611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => B,
  Vq: () => U,
  ux: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function j(e) {
  var t, n, i;
  let {
    className: a,
    children: s,
    withBottomMargin: l,
    discountOffer: c,
    trialOffer: u
  } = e, d = null != (t = null == u ? true : u.expires_at) ? t : null == c ? true : c.expires_at, f = null == u ? true : u.subscription_trial, p = null != (n = null != (i = e.subscriptionTier) ? i : null == f ? true : f.sku_id) ? n : R.pe.TIER_2;
  return (0, r.jsxs)("div", {
    className: o()(a, L.J3, {
      [L.Vm]: p === R.pe.TIER_0,
      [L.hD]: p === R.pe.TIER_2,
      [L.ip]: l
    }),
    children: [(0, r.jsxs)("div", {
      className: L.wm,
      children: [(0, r.jsx)(h.tvc, {
        size: "md",
        color: "currentColor",
        className: L.Xo
      }), p === R.pe.TIER_0 && (0, r.jsx)(O.A, {
        className: L.Vn
      }), p === R.pe.TIER_2 && (0, r.jsx)(b.A, {
        className: L.Vn
      })]
    }), (0, r.jsx)(h.Text, {
      variant: "text-md/medium",
      className: L.C,
      color: "none",
      children: s
    }), (0, r.jsx)(w.ir, {
      text: null != c ? D.intl.formatToPlainString(D.t.iiLbvu, {
        percent: c.discount.amount
      }) : D.intl.string(D.t.IBYG5U),
      colorOptions: p === R.pe.TIER_0 ? w.at.PREMIUM_TIER_0_WHITE_FILL : w.at.PREMIUM_TIER_2_WHITE_FILL
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: L.dt,
      children: M(d)
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
  }) : (0, A.FY)({
    intervalType: null == c || null == (t = c.subscription_trial) ? true : t.interval,
    intervalCount: null == c || null == (n = c.subscription_trial) ? true : n.interval_count
  });
  return (0, r.jsx)(N.A, {
    className: a,
    subscriptionTier: s,
    submitting: d,
    premiumModalAnalyticsLocation: l,
    size: _.$n.Sizes.MEDIUM,
    color: _.$n.Colors.GREEN,
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
  let i = null == (n = (0, C.V)()) ? true : n.subscription_trial,
    a = null != (t = null == i ? true : i.sku_id) ? t : R.pe.TIER_2;
  return (0, r.jsx)(h.Text, {
    variant: "text-xs/bold",
    className: o()(L.A6, e.className, {
      [L.kU]: a === R.pe.TIER_0,
      [L.y_]: a === R.pe.TIER_2
    }),
    color: "none",
    children: (0, A.tS)({
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
    className: L.qr,
    children: [(0, r.jsx)(_.$n, {
      "data-migration-pending": true,
      onClick: n,
      size: _.$n.Sizes.SMALL,
      look: _.pR.BLANK,
      className: L.x7,
      children: D.intl.string(D.t.cpT0Cq)
    }), (0, r.jsx)(k, {
      className: L.xF,
      subscriptionTier: t,
      analyticsLocationObject: i,
      onClose: n,
      discountOffer: o,
      trialOffer: a
    })]
  })
}

function F(e) {
  let {
    onClose: t,
    analyticsLocationObject: n
  } = e, i = (0, C.V)();
  return (0, r.jsxs)("div", {
    className: L.ki,
    children: [(0, r.jsx)(w.ir, {
      className: L.LW,
      text: D.intl.string(D.t["8CVUrV"]),
      colorOptions: w.at.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    }), (0, r.jsx)(h.Heading, {
      variant: "heading-md/semibold",
      color: "text-default",
      children: D.intl.format(D.t["fF+cgd"], {
        onClick: () => (0, T.e)()
      })
    }), (0, r.jsx)(k, {
      trialOffer: i,
      className: L.as,
      subscriptionTier: R.pe.TIER_2,
      analyticsLocationObject: n,
      onClose: t
    }), (0, r.jsx)(h.Text, {
      variant: "eyebrow",
      className: L.eg,
      children: M(null == i ? true : i.expires_at)
    })]
  })
}

function V(e) {
  let {
    headingText: t,
    context: n,
    children: i,
    trialOffer: a,
    discountOffer: o
  } = e;
  return (0, r.jsxs)("div", {
    className: L.hQ,
    children: [(0, r.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      children: t
    }), null != n && (0, r.jsx)(h.Text, {
      className: L._O,
      variant: "text-md/normal",
      children: n
    }), (0, r.jsx)(j, {
      trialOffer: a,
      discountOffer: o,
      children: i
    })]
  })
}

function B(e) {
  let {
    headingText: t,
    context: i,
    children: a,
    onClose: s,
    type: c,
    subscriptionTier: u,
    analyticsLocationObject: _,
    trialOffer: b,
    discountOffer: O
  } = e, T = (0, d.bG)([g.A], () => g.A.useReducedMotion), C = (0, m.Ay)(), N = (0, v.Xq)(S.eM / v.XF, {
    useKibibytes: true
  });
  switch (c) {
    case R.e.EMPTY_STICKER_PICKER_UPSELL:
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.DUT, {
          className: L.kz,
          onClick: s,
          children: (0, r.jsx)(h.PGe, {
            size: "md",
            color: "currentColor"
          })
        }), (0, r.jsxs)("div", {
          className: L.hQ,
          children: [(0, r.jsx)("img", {
            className: L.Tn,
            src: x,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t.HEm04J)
          }), (0, r.jsx)(j, {
            trialOffer: b,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, A.Zw)(u),
              onClick: () => (0, y.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: P.JJy.EXPRESSION_PICKER,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: b,
          discountOffer: O
        })]
      });
    case R.e.STICKER_PICKER_UPSELL:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: L.hQ,
          children: [(0, r.jsx)("img", {
            className: L.Tn,
            src: x,
            alt: D.intl.string(D.t.do7AoM)
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t.jJG1pl)
          }), (0, r.jsx)(j, {
            trialOffer: b,
            discountOffer: O,
            children: D.intl.format(D.t["2HoFKF"], {
              planName: (0, A.Zw)(u),
              onClick: () => (0, y.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: P.JJy.EXPRESSION_PICKER,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: b,
          discountOffer: O
        })]
      });
    case R.e.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
      l()(null != a, "You must specify children for this upsell type");
      let w = (0, p.qB)(C) ? n(454333) : n(674463);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: L.hQ,
          children: [(0, r.jsx)("img", {
            alt: "",
            className: L.Tn,
            src: w
          }), (0, r.jsx)(h.Heading, {
            variant: "heading-xl/bold",
            color: "text-strong",
            children: D.intl.string(D.t["1SsvhY"])
          }), (0, r.jsx)(j, {
            trialOffer: b,
            discountOffer: O,
            children: D.intl.format(D.t.md4nP5, {
              planName: (0, A.Zw)(u),
              onClick: () => (0, y.pX)(P.BVt.APPLICATION_STORE)
            })
          })]
        }), (0, r.jsx)(G, {
          subscriptionTier: u,
          onClose: s,
          analyticsLocationObject: {
            section: P.JJy.EMOJI_PICKER_POPOUT,
            object: P.ZSU.BUTTON_CTA
          },
          trialOffer: b,
          discountOffer: O
        })]
      });
    case R.e.UPLOAD_ERROR_UPSELL:
    case R.e.BURST_REACTION_UPSELL:
    case R.e.STREAM_QUALITY_UPSELL:
    case R.e.MESSAGE_LENGTH_UPSELL:
      let M;
      switch (c) {
        case R.e.UPLOAD_ERROR_UPSELL:
          M = D.intl.format(D.t.F4qoD7, {
            planName: (0, A.Zw)(u),
            premiumMaxSize: u === R.pe.TIER_0 ? D.intl.string(D.t["C/Rhb9"]) : N,
            onClick: () => {
              (0, y.pX)(P.BVt.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case R.e.BURST_REACTION_UPSELL:
          M = D.intl.format(D.t.poib9C, {
            planName: (0, A.Zw)(u),
            onClick: () => {
              (0, y.pX)(P.BVt.APPLICATION_STORE), null == s || s()
            }
          });
          break;
        case R.e.STREAM_QUALITY_UPSELL:
          M = D.intl.format(D.t.WspKp9, {
            onClick: () => {
              (0, y.pX)(P.BVt.APPLICATION_STORE), null == s || s(), (0, f.closeAllModals)()
            }
          });
          break;
        case R.e.MESSAGE_LENGTH_UPSELL:
          M = D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: P.CS1,
            onClick: () => {
              (0, y.pX)(P.BVt.APPLICATION_STORE), null == s || s()
            }
          })
      }
      return l()(null != M, "There must be some upsell context"), (0, r.jsxs)("div", {
        className: L.hQ,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(j, {
          trialOffer: b,
          discountOffer: O,
          children: M
        })]
      });
    case R.e.BURST_REACTION_QUICK_ACTION_UPSELL:
      return (0, r.jsxs)("div", {
        className: L.hQ,
        children: [(0, r.jsx)(h.Heading, {
          variant: "heading-xl/bold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(h.Text, {
          variant: "text-md/normal",
          children: i
        }), (0, r.jsx)(j, {
          trialOffer: b,
          discountOffer: O,
          children: D.intl.format(D.t.poib9C, {
            planName: (0, A.Zw)(u),
            onClick: () => (0, y.pX)(P.BVt.APPLICATION_STORE)
          })
        }), (0, r.jsx)(k, {
          className: L.Oy,
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: s,
          trialOffer: b,
          discountOffer: O
        })]
      });
    case R.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
      return l()(null != a, "You must specify children for this upsell type"), (0, r.jsx)(j, {
        trialOffer: b,
        discountOffer: O,
        children: D.intl.format(D.t["5KMAnK"], {
          onClick: () => {
            (0, y.pX)(P.BVt.APPLICATION_STORE), (0, E.D)()
          }
        })
      });
    case R.e.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
      return (0, r.jsxs)("div", {
        className: o()(L.iW, {
          [L.WP]: !T
        }),
        children: [(0, r.jsx)(h.Text, {
          variant: "text-lg/bold",
          color: "text-feedback-critical",
          children: i
        }), (0, r.jsx)(h.Heading, {
          variant: "heading-lg/extrabold",
          color: "text-strong",
          className: L.Ed,
          children: D.intl.string(D.t.ZvHg3N)
        }), (0, r.jsx)("div", {
          className: L.yF
        }), (0, r.jsx)(j, {
          trialOffer: b,
          discountOffer: O,
          className: L.ZH,
          subscriptionTier: u,
          children: D.intl.format(D.t.GUHtE3, {
            premiumMaxMessageLength: P.CS1,
            onClick: () => {
              (0, y.pX)(P.BVt.APPLICATION_STORE), null == s || s()
            }
          })
        }), (0, r.jsx)(k, {
          subscriptionTier: u,
          analyticsLocationObject: _,
          onClose: s,
          trialOffer: b,
          discountOffer: O
        })]
      });
    case R.e.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case R.e.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
      return (0, r.jsx)(F, {});
    case R.e.GUILD_CAP_MODAL_UPSELL:
    case R.e.PREMIUM_GUILD_IDENTITY_MODAL:
    case R.e.CUSTOM_PROFILE_UPSELL:
    case R.e.VIDEO_BACKGROUNDS_MODAL:
    case R.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case R.e.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case R.e.EMOJI_PICKER_EMOJI_CLICKED:
    case R.e.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
    case R.e.APP_ICON_UPSELL:
    case R.e.CLIENT_THEMES_UPSELL:
    case R.e.TRY_IT_OUT_MODAL_UPSELL:
    case R.e.VOICE_FILTERS_UPSELL:
      return (0, r.jsx)(V, {
        trialOffer: b,
        discountOffer: O,
        headingText: t,
        context: i,
        children: a
      });
    default:
      return I.A.captureMessage("Possible mishandling of a PremiumUpsellType: ".concat(c)), (0, r.jsx)(V, {
        headingText: t,
        context: i,
        children: a,
        trialOffer: b,
        discountOffer: O
      })
  }
}