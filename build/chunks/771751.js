/** Chunk was on 93886 **/
n.d(t, {
  Z: () => O
}), n(388685), n(642613);
var r = n(200651),
  a = n(192379),
  l = n(120356),
  i = n.n(l),
  o = n(544891),
  s = n(704215),
  c = n(481060),
  d = n(937579),
  u = n(675478),
  m = n(431),
  x = n(572004),
  h = n(74538),
  p = n(246992),
  b = n(981631),
  f = n(474936),
  g = n(616257),
  _ = n(173166);
let v = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: b.ANM.USER_OFFER_IDS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return []
  }
}, j = async (e, t) => {
  try {
    await o.tn.post({
      url: b.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, y = async (e, t) => {
  try {
    await o.tn.del({
      url: b.ANM.UPDATE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, C = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: b.ANM.USER_OFFERS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, N = async () => {
  try {
    await o.tn.del({
      url: b.ANM.USER_OFFERS,
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await m.Z.forceReset(), await (0, d.T)()
  }
};

function S(e) {
  var t, n, l, s;
  let {
    offer: u,
    offerOptions: m,
    forceRefetch: p
  } = e, [g, v] = a.useState(!1), [j, C] = a.useState(!1), [N, S] = a.useState(!1), [T, O] = a.useState(!1);
  a.useEffect(() => {
    N && O(!0);
    let e = setTimeout(() => {
      O(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [N]);
  let {
    id: E,
    expires_at: k,
    redeemed_at: w,
    trial_id: P,
    subscription_trial: I,
    referrer: Z
  } = u, R = null != (n = null == (t = m.find(e => {
    let {
      value: t
    } = e;
    return t === P
  })) ? void 0 : t.label) ? n : "Unknown";
  null != Z && (R = "".concat(R, " from @").concat(Z.username));
  let L = null != k,
    D = null != k && new Date(k).getTime() < Date.now(),
    A = (null == I ? void 0 : I.sku_id) === f.Si.TIER_0,
    B = async () => {
      S(!0), L ? await z({
        expiresAt: null
      }) : await (0, d.a)(u), p(), S(!1)
    }, z = async e => {
      let {
        expiresAt: t
      } = e;
      S(!0);
      try {
        await o.tn.patch({
          url: b.ANM.UPDATE_USER_OFFER(E, "trial"),
          body: {
            expires_at: t
          },
          rejectWithError: !0
        })
      } finally {
        p(), S(!1)
      }
    };
  a.useEffect(() => {
    if (g) {
      let e = setTimeout(() => {
        v(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (j) {
      let e = setTimeout(() => {
        C(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [g, j]);
  let M = "Active";
  return L && (M = "Acknowledged"), D && (M = "Expired"), (0, r.jsxs)("div", {
    className: i()(_.card, A ? _.gradientWrapperTier0 : _.gradientWrapperTier2),
    children: [(0, r.jsxs)("div", {
      className: i()(_.row, _.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: R
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          S(!0), await y(E, "trial"), p(), S(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(_.icon, _.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, x.JG)(E), v(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", E]
      }), g ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, x.JG)(P), C(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", P]
      }), j ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, r.jsx)("div", {
      className: _.row,
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, h.if)({
          intervalType: null != (l = null == I ? void 0 : I.interval) ? l : f.rV.MONTH,
          intervalCount: null != (s = null == I ? void 0 : I.interval_count) ? s : 1,
          capitalize: !1
        })]
      })
    }), (0, r.jsxs)("div", {
      className: _.row,
      children: [(0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, r.jsx)("input", {
        type: "date",
        value: null != k ? k.substring(0, 10) : "",
        onChange: e => z({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: B,
        className: i()(_.badge, _.clickable, {
          [_.acked]: L,
          [_.expired]: D
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === M ? void 0 : "always-white",
          children: M
        })
      }), null != w && (0, r.jsx)("div", {
        className: i()(_.badge, _.__invalid_badgeBottom, _.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, r.jsx)("div", {
      className: i()(_.loadingContainer, {
        [_.isLoading]: N || T
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function T(e) {
  var t, n;
  let {
    offer: l,
    offerOptions: s,
    forceRefetch: u
  } = e, [m, h] = a.useState(!1), [p, f] = a.useState(!1), [g, v] = a.useState(!1), [j, C] = a.useState(!1);
  a.useEffect(() => {
    g && C(!0);
    let e = setTimeout(() => {
      C(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [g]);
  let {
    id: N,
    expires_at: S,
    applied_at: T,
    discount_id: O,
    discount: E
  } = l, k = null != (n = null == (t = s.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) ? void 0 : t.label) ? n : "Unknown", w = null != S, P = null != S && new Date(S).getTime() < Date.now(), I = async () => {
    v(!0), w ? await Z({
      expiresAt: null
    }) : await (0, d.a)(void 0, l), u(), v(!1)
  }, Z = async e => {
    let {
      expiresAt: t
    } = e;
    v(!0);
    try {
      await o.tn.patch({
        url: b.ANM.UPDATE_USER_OFFER(N, "discount"),
        body: {
          expires_at: t
        },
        rejectWithError: !0
      })
    } finally {
      u(), v(!1)
    }
  };
  a.useEffect(() => {
    if (m) {
      let e = setTimeout(() => {
        h(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (p) {
      let e = setTimeout(() => {
        f(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [m, p]);
  let R = "Active";
  return P && (R = "Expired"), w && (R = "Acknowledged"), (0, r.jsxs)("div", {
    className: i()(_.card, _.discount),
    children: [(0, r.jsxs)("div", {
      className: i()(_.row, _.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: k
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          v(!0), await y(N, "discount"), u(), v(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: i()(_.icon, _.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, x.JG)(N), h(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", N]
      }), m ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: i()(_.row, _.idRow),
      onClick: () => {
        (0, x.JG)(O), f(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", O]
      }), p ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: i()(_.icon, _.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: _.icon
      })]
    }), (null == E ? void 0 : E.amount) != null && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [E.amount, "% off"]
      })
    }), (0, r.jsxs)("div", {
      className: _.row,
      children: [(0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: "Expires:"
      }), (0, r.jsx)("input", {
        type: "date",
        value: null != S ? S.substring(0, 10) : "",
        onChange: e => Z({
          expiresAt: e.target.value
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: I,
        className: i()(_.badge, _.clickable, {
          [_.acked]: w,
          [_.expired]: P
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === R ? void 0 : "always-white",
          children: R
        })
      }), null != T && (0, r.jsx)("div", {
        className: i()(_.badge, _.__invalid_badgeBottom, _.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, r.jsx)("div", {
      className: i()(_.loadingContainer, {
        [_.isLoading]: g || j
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function O() {
  let [e, t] = a.useState([]), [n, l] = a.useState([]), [i, o] = a.useState(), [x, h] = a.useState(), [b, f] = a.useState([]), [y, O] = a.useState([]), [E, k] = a.useState(!0);
  a.useEffect(() => {
    (0 === e.length || 0 === n.length || E) && v().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        r = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), l(r), null == i && o(n[0].value), null == x && h(r[0].value)
    })
  }, [e, n, i, x, E]), a.useEffect(() => {
    E && (k(!1), m.Z.forceReset(), (0, d.T)(), C().then(e => {
      f(e.trial.sort((e, t) => e.id.localeCompare(t.id))), O(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [E]);
  let w = async () => {
    null != i && (await j(i, "trial"), k(!0))
  }, P = async () => {
    null != x && (await j(x, "discount"), k(!0))
  }, I = async () => {
    await N(), k(!0)
  };
  return (0, r.jsx)(c.zJl, {
    className: g.panel,
    children: (0, r.jsxs)("div", {
      className: _.panelInner,
      children: [(0, r.jsxs)("section", {
        className: _.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, r.jsxs)("div", {
          className: _.buttons,
          children: [(0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: I,
            children: "Clear all User Offers"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => k(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: _.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, r.jsxs)("div", {
          className: _.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: _.input,
            options: e,
            isSelected: e => i === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => o(e),
            popoutLayerContext: p.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: w,
            children: "Create"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: _.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, r.jsxs)("div", {
          className: _.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: _.input,
            options: n,
            isSelected: e => x === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => h(e),
            popoutLayerContext: p.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: P,
            children: "Create"
          })]
        })]
      }), b.length > 0 && (0, r.jsxs)("section", {
        className: _.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), b.map(t => (0, r.jsx)(S, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => k(!0)
        }, t.id))]
      }), y.length > 0 && (0, r.jsxs)("section", {
        className: _.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), y.map(e => (0, r.jsx)(T, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => k(!0)
        }, e.id))]
      })]
    })
  })
}