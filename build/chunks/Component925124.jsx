/** Chunk was on 93886 **/
/** chunk id: 925124, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk544891 = require("./544891.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk937579 = require("./937579.js"),
  Chunk453591 = require("./453591.js"),
  Chunk675478 = require("./675478.js"),
  Chunk431 = require("./431.js"),
  Chunk572004 = require("./572004.js"),
  Chunk74538 = require("./74538.js"),
  Chunk604776 = require("./604776.jsx"),
  Chunk246992 = require("./246992.js"),
  Chunk232867 = require("./232867.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk596533 = require("./596533.js"),
  Chunk866403 = require("./866403.js");
let C = async () => {
  try {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_OFFER_IDS,
      rejectWithError: true
    });
    return module
  } catch (e) {
    return []
  }
}, N = async (e, t) => {
  try {
    await s.tn.post({
      url: g.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, E = async (e, t) => {
  try {
    await s.tn.del({
      url: g.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: true
    })
  } catch (e) {} finally {
    await (0, d.Tf)()
  }
}, T = async () => {
  try {
    let {
      body: e
    } = await Chunk544891.tn.get({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    });
    return module
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, O = async () => {
  try {
    await Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_OFFERS,
      rejectWithError: true
    })
  } catch (e) {} finally {
    await Chunk431.Z.forceReset(), await (0, Chunk937579.Tf)()
  }
}, S = async e => {
  await s.tn.post({
    url: g.ANM.CREATE_REVERSE_TRIAL,
    body: {
      ends_at: e
    },
    rejectWithError: true
  })
};

function P(e) {
  var t, n, l, o, u;
  let {
    offer: m,
    offerOptions: x,
    forceRefetch: f
  } = e, [v, b] = r.useState(false), [y, C] = r.useState(false), [N, T] = r.useState(false), [O, S] = r.useState(false);
  r.useEffect(() => {
    N && S(true);
    let e = setTimeout(() => {
      S(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: P,
    expires_at: I,
    redeemed_at: k,
    trial_id: R,
    subscription_trial: w,
    referrer: Z
  } = m, A = null != (n = null == (t = x.find(e => {
    let {
      value: t
    } = e;
    return t === R
  })) ? true : t.label) ? n : "Unknown";
  null != Z && (A = "".concat(A, " from @").concat(Z.username));
  let D = null != I,
    L = null != I && new Date(I).getTime() < Date.now(),
    M = (null == w ? true : w.sku_id) === j.Si.TIER_0,
    F = async () => {
      T(true), D ? await U({
        expiresAt: null
      }) : await (0, d.ab)(m), f(), T(false)
    }, U = async e => {
      T(true);
      try {
        await s.tn.patch({
          url: g.ANM.UPDATE_USER_OFFER(P, "trial"),
          body: function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), a.forEach(function(t) {
                var a;
                a = n[t], t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = a
              })
            }
            return e
          }({}, "expiresAt" in e && {
            expires_at: e.expiresAt
          }, "referrerId" in e && {
            referrer_id: e.referrerId
          }),
          rejectWithError: true
        })
      } finally {
        f(), T(false)
      }
    };
  r.useEffect(() => {
    if (v) {
      let e = setTimeout(() => {
        b(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (y) {
      let e = setTimeout(() => {
        C(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [v, y]);
  let z = "Active";
  return D && (z = "Acked"), L && (z = "Expired"), (0, a.jsxs)("div", {
    className: i()(_.card, M ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
    children: [(0, a.jsx)("div", {
      className: i()(_.row, _.nameRow),
      children: (0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: A
      })
    }), (0, a.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(P, () => b(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", P]
      }), v ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(R, () => C(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", R]
      }), y ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: _.icon
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsx)("div", {
      className: _.row,
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, p.if)({
          intervalType: null != (l = null == w ? true : w.interval) ? l : j.rV.MONTH,
          intervalCount: null != (o = null == w ? true : w.interval_count) ? o : 1,
          capitalize: false
        })]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != I ? I.substring(0, 10) : "",
        onChange: e => U({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Referrer ID:"
      }), (0, a.jsx)("input", {
        type: "text",
        value: null != (u = null == Z ? true : Z.id) ? u : "",
        onChange: e => U({
          referrerId: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: F,
        className: i()(_.badge, _.clickable, {
          [_.acked]: D,
          [_.expired]: L
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === z ? true : "always-white",
          children: z
        })
      }), null != k && (0, a.jsx)("div", {
        className: i()(_.badge, _.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, a.jsx)(c.P3F, {
      onClick: async () => {
        T(true), await E(P, "trial"), f(), T(false)
      },
      children: (0, a.jsx)(c.XHJ, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.trashIcon)
      })
    }), (0, a.jsx)("div", {
      className: i()(_.loadingContainer, {
        [_.isLoading]: N || O
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function I(e) {
  var t, n;
  let {
    offer: l,
    offerOptions: o,
    forceRefetch: u
  } = e, [m, x] = r.useState(false), [p, f] = r.useState(false), [v, b] = r.useState(false), [j, y] = r.useState(false);
  r.useEffect(() => {
    v && y(true);
    let e = setTimeout(() => {
      y(false)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [v]);
  let {
    id: C,
    expires_at: N,
    applied_at: T,
    discount_id: O,
    discount: S
  } = l, P = null != (n = null == (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) ? true : t.label) ? n : "Unknown", I = null != N, k = null != N && new Date(N).getTime() < Date.now(), R = async () => {
    b(true), I ? await w({
      expiresAt: null
    }) : await (0, d.ab)(true, l), u(), b(false)
  }, w = async e => {
    let {
      expiresAt: t
    } = e;
    b(true);
    try {
      await s.tn.patch({
        url: g.ANM.UPDATE_USER_OFFER(C, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: true
      })
    } finally {
      u(), b(false)
    }
  };
  r.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        x(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (p) {
      let e = setTimeout(() => {
        f(false)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, p]);
  let Z = "Active";
  return k && (Z = "Expired"), I && (Z = "Acked"), (0, a.jsxs)("div", {
    className: i()(_.card, _.discount),
    children: [(0, a.jsxs)("div", {
      className: i()(_.row, _.nameRow),
      children: [(0, a.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-default",
        children: P
      }), (0, a.jsx)(c.P3F, {
        onClick: async () => {
          b(true), await E(C, "discount"), u(), b(false)
        },
        children: (0, a.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(_.icon, _.trashIcon)
        })
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(C, () => x(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Offer: ", C]
      }), m ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, a.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, h.JG)(O, () => f(true))
      },
      children: [(0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: ["Discount: ", O]
      }), p ? (0, a.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, a.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (null == S ? true : S.amount) != null && (0, a.jsx)("div", {
      children: (0, a.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-default",
        children: [S.amount, "% off"]
      })
    }), (0, a.jsxs)("div", {
      className: _.row,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, a.jsx)("input", {
        type: "date",
        value: null != N ? N.substring(0, 10) : "",
        onChange: e => w({
          expiresAt: e.target.value
        })
      })]
    }), (0, a.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, a.jsx)(c.P3F, {
        onClick: R,
        className: i()(_.badge, _.clickable, {
          [_.acked]: I,
          [_.expired]: k
        }),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acked" === Z ? true : "always-white",
          children: Z
        })
      }), null != T && (0, a.jsx)("div", {
        className: i()(_.badge, _.redeemed),
        children: (0, a.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, a.jsx)("div", {
      className: i()(_.loadingContainer, {
        [_.isLoading]: v || j
      }),
      children: (0, a.jsx)(c.$jN, {})
    })]
  })
}

function k() {
  let [e, t] = Chunk647438.useState([]), [n, l] = Chunk647438.useState([]), [i, s] = Chunk647438.useState(), [h, p] = Chunk647438.useState(), [j, E] = Chunk647438.useState([]), [k, R] = Chunk647438.useState([]), [w, Z] = Chunk647438.useState(true), [A, D] = Chunk647438.useState(10080), [L, M] = Chunk647438.useState([]), {
    entitlements: F,
    deleteFractionalPremium: U,
    refreshEntitlementList: z
  } = (0, Chunk232867.m)();
  Chunk647438.useEffect(() => {
    z()
  }, [z]), Chunk647438.useEffect(() => {
    M(F.filter(e => e.sourceType === g.kNB.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date))
  }, [F]), Chunk647438.useEffect(() => {
    (0 === module.length || 0 === require.length || w) && C().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        a = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), l(a), null == i && s(n[0].value), null == h && p(a[0].value)
    })
  }, [module, require, i, Chunk572004, w]), Chunk647438.useEffect(() => {
    w && (Z(false), Chunk431.Z.forceReset(), (0, Chunk937579.Tf)(), T().then(e => {
      E(e.trial.sort((e, t) => e.id.localeCompare(t.id))), R(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [w]);
  let G = async () => {
    null != i && (await N(i, "trial"), Z(true))
  }, B = async () => {
    null != Chunk572004 && (await N(Chunk572004, "discount"), Z(true))
  }, V = async () => {
    await O(), Z(true)
  }, H = async () => {
    let e = new Date(Date.now() + 60 * A * 1e3).toISOString();
    await S(module), z()
  }, {
    redeemReward: W
  } = (0, Chunk453591.h)();
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk866403.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk596533.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.buttons,
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear all User Offers",
            onClick: V
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear Mobile Trials DismissibleContent",
            onClick: () => (0, Chunk675478.w9)(Chunk704215.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Clear Offer Nagbar DismissibleContent",
            onClick: () => (0, Chunk675478.Z1)(Chunk704215.z.NAGBAR_NOTICE_OFFER_EXPIRING)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: "Refresh DevTools",
            onClick: () => Z(true)
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: module,
            isSelected: e => i === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => s(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: G
          })]
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: require,
            isSelected: e => h === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: B
          })]
        })]
      }), Chunk474936.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), Chunk474936.map(t => (0, a.jsx)(P, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => Z(true)
        }, t.id))]
      }), k.length > 0 && (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), k.map(e => (0, a.jsx)(I, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => Z(true)
        }, e.id))]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Reverse Trial Entitlement"
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk596533.inputRow,
          children: [(0, Chunk951288.jsx)(Chunk481060.PhF, {
            className: Chunk596533.input,
            options: [{
              label: "5 minutes",
              value: 5
            }, {
              label: "1 hour",
              value: 60
            }, {
              label: "1 day",
              value: 1440
            }, {
              label: "1 week",
              value: 10080
            }],
            isSelected: e => A === e,
            placeholder: "Reverse Trial Length",
            serialize: e => String(e),
            select: e => D(e),
            popoutLayerContext: Chunk246992.O$
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Create",
            onClick: H
          })]
        })]
      }), L.length > 0 && (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          style: {
            marginTop: "15px"
          },
          variant: "text-md/bold",
          children: "Active reverse trial"
        }), (0, Chunk951288.jsx)("div", {
          children: L.map(e => (0, a.jsx)(f.D, {
            entitlement: e,
            active: true,
            onDelete: () => U(e.id)
          }, e.id))
        })]
      }), (0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            style: {
              marginTop: "15px"
            },
            variant: "text-md/bold",
            children: "September 2025 MM Reward Grant"
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Grant Subscription Reward",
            onClick: () => {
              W()
            }
          })]
        })
      })]
    })
  })
}