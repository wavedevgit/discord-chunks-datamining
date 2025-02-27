/** Chunk was on 93886 **/
n.d(t, {
  Z: () => E
}), n(47120), n(230036);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(544891),
  s = n(704215),
  c = n(481060),
  d = n(937579),
  u = n(675478),
  m = n(431),
  h = n(572004),
  x = n(74538),
  f = n(246992),
  p = n(981631),
  b = n(474936),
  _ = n(710662),
  g = n(536465);
let v = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: p.ANM.USER_OFFER_IDS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return []
  }
}, j = async (e, t) => {
  try {
    await o.tn.post({
      url: p.ANM.CREATE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, y = async (e, t) => {
  try {
    await o.tn.del({
      url: p.ANM.DELETE_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, C = async (e, t) => {
  try {
    await o.tn.post({
      url: p.ANM.UNACK_USER_OFFER(e, t),
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await (0, d.T)()
  }
}, N = async () => {
  try {
    let {
      body: e
    } = await o.tn.get({
      url: p.ANM.USER_OFFERS,
      rejectWithError: !0
    });
    return e
  } catch (e) {
    return {
      trial: [],
      discount: []
    }
  }
}, T = async () => {
  try {
    await o.tn.del({
      url: p.ANM.USER_OFFERS,
      rejectWithError: !0
    })
  } catch (e) {} finally {
    await m.Z.forceReset(), await (0, d.T)()
  }
};

function O(e) {
  var t, n, i, o;
  let {
    offer: s,
    offerOptions: u,
    forceRefetch: m
  } = e, [f, p] = a.useState(!1), [_, v] = a.useState(!1), [j, N] = a.useState(!1), [T, O] = a.useState(!1);
  a.useEffect(() => {
    j && O(!0);
    let e = setTimeout(() => {
      O(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [j]);
  let {
    id: S,
    expires_at: E,
    redeemed_at: k,
    trial_id: I,
    subscription_trial: w,
    referrer: Z
  } = s, P = null !== (n = null === (t = u.find(e => {
    let {
      value: t
    } = e;
    return t === I
  })) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : "Unknown";
  null != Z && (P = "".concat(P, " from @").concat(Z.username));
  let R = null != E,
    L = null != E && new Date(E).getTime() < Date.now(),
    A = (null == w ? void 0 : w.sku_id) === b.Si.TIER_0,
    D = async () => {
      N(!0), R ? await C(S, "trial") : await (0, d.a)(s), m(), N(!1)
    };
  a.useEffect(() => {
    if (f) {
      let e = setTimeout(() => {
        p(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (_) {
      let e = setTimeout(() => {
        v(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [f, _]);
  let B = "Active";
  return R && (B = "Acknowledged"), L && (B = "Expired"), (0, r.jsxs)("div", {
    className: l()(g.card, A ? g.gradientWrapperTier0 : g.gradientWrapperTier2),
    children: [(0, r.jsxs)("div", {
      className: l()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "always-white",
        children: P
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          N(!0), await y(S, "trial"), m(), N(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(S), p(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Offer: ", S]
      }), f ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(I), v(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial: ", I]
      }), _ ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "always-white",
        children: ["Trial Length:", " ", (0, x.if)({
          intervalType: null !== (i = null == w ? void 0 : w.interval) && void 0 !== i ? i : b.rV.MONTH,
          intervalCount: null !== (o = null == w ? void 0 : w.interval_count) && void 0 !== o ? o : 1,
          capitalize: !1
        })]
      })
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: D,
        className: l()(g.badge, g.clickable, {
          [g.acked]: R,
          [g.expired]: L
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === B ? void 0 : "always-white",
          children: B
        })
      }), null != k && (0, r.jsx)("div", {
        className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Redeemed"
        })
      })]
    }), (0, r.jsx)("div", {
      className: l()(g.loadingContainer, {
        [g.isLoading]: j || T
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function S(e) {
  var t, n;
  let {
    offer: i,
    offerOptions: o,
    forceRefetch: s
  } = e, [u, m] = a.useState(!1), [x, f] = a.useState(!1), [p, b] = a.useState(!1), [_, v] = a.useState(!1);
  a.useEffect(() => {
    p && v(!0);
    let e = setTimeout(() => {
      v(!1)
    }, 500);
    return () => {
      clearTimeout(e)
    }
  }, [p]);
  let {
    id: j,
    expires_at: N,
    applied_at: T,
    discount_id: O,
    discount: S
  } = i, E = null !== (n = null === (t = o.find(e => {
    let {
      value: t
    } = e;
    return t === O
  })) || void 0 === t ? void 0 : t.label) && void 0 !== n ? n : "Unknown", k = null != N, I = null != N && new Date(N).getTime() < Date.now(), w = async () => {
    b(!0), k ? await C(j, "discount") : await (0, d.a)(void 0, i), s(), b(!1)
  };
  a.useEffect(() => {
    if (u) {
      let e = setTimeout(() => {
        m(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
    if (x) {
      let e = setTimeout(() => {
        f(!1)
      }, 3e3);
      return () => {
        clearTimeout(e)
      }
    }
  }, [u, x]);
  let Z = "Active";
  return I && (Z = "Expired"), k && (Z = "Acknowledged"), (0, r.jsxs)("div", {
    className: l()(g.card, g.discount),
    children: [(0, r.jsxs)("div", {
      className: l()(g.row, g.nameRow),
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-lg/semibold",
        color: "text-normal",
        children: E
      }), (0, r.jsx)(c.P3F, {
        onClick: async () => {
          b(!0), await y(j, "discount"), s(), b(!1)
        },
        children: (0, r.jsx)(c.XHJ, {
          size: "md",
          color: "currentColor",
          className: l()(g.icon, g.trashIcon)
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(j), m(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Offer: ", j]
      }), u ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: l()(g.row, g.idRow),
      onClick: () => {
        (0, h.JG)(O), f(!0)
      },
      children: [(0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: ["Discount: ", O]
      }), x ? (0, r.jsx)(c.dz2, {
        size: "md",
        color: "currentColor",
        className: l()(g.icon, g.noMargin)
      }) : (0, r.jsx)(c.TIy, {
        size: "xs",
        color: "currentColor",
        className: g.icon
      })]
    }), (null == S ? void 0 : S.amount) != null && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.Text, {
        variant: "eyebrow",
        color: "text-normal",
        children: [S.amount, "% off"]
      })
    }), (0, r.jsxs)("div", {
      className: g.badgeContainer,
      children: [(0, r.jsx)(c.P3F, {
        onClick: w,
        className: l()(g.badge, g.clickable, {
          [g.acked]: k,
          [g.expired]: I
        }),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "Acknowledged" === Z ? void 0 : "always-white",
          children: Z
        })
      }), null != T && (0, r.jsx)("div", {
        className: l()(g.badge, g.__invalid_badgeBottom, g.redeemed),
        children: (0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "always-white",
          children: "Applied"
        })
      })]
    }), (0, r.jsx)("div", {
      className: l()(g.loadingContainer, {
        [g.isLoading]: p || _
      }),
      children: (0, r.jsx)(c.$jN, {})
    })]
  })
}

function E() {
  let [e, t] = a.useState([]), [n, i] = a.useState([]), [o, h] = a.useState(), [x, p] = a.useState(), [b, y] = a.useState([]), [C, E] = a.useState([]), [k, I] = a.useState(!0);
  a.useEffect(() => {
    (0 === e.length || 0 === n.length || k) && v().then(e => {
      let n = Object.keys(e.trial).map(t => ({
          label: t,
          value: e.trial[t]
        })),
        r = Object.keys(e.discount).map(t => ({
          label: t,
          value: e.discount[t]
        }));
      t(n), i(r), null == o && h(n[0].value), null == x && p(r[0].value)
    })
  }, [e, n, o, x, k]), a.useEffect(() => {
    k && (I(!1), m.Z.forceReset(), (0, d.T)(), N().then(e => {
      y(e.trial.sort((e, t) => e.id.localeCompare(t.id))), E(e.discount.sort((e, t) => e.id.localeCompare(t.id)))
    }))
  }, [k]);
  let w = async () => {
    null != o && (await j(o, "trial"), I(!0))
  }, Z = async () => {
    null != x && (await j(x, "discount"), I(!0))
  }, P = async () => {
    await T(), I(!0)
  };
  return (0, r.jsx)(c.zJl, {
    className: l()(_.panel),
    children: (0, r.jsxs)("div", {
      className: g.panelInner,
      children: [(0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Utils"
        }), (0, r.jsxs)("div", {
          className: g.buttons,
          children: [(0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: P,
            children: "Clear all User Offers"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => (0, u.w9)(s.z.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
            children: "Clear Mobile Trials DismissibleContent"
          }), (0, r.jsx)(c.zxk, {
            size: c.zxk.Sizes.SMALL,
            onClick: () => I(!0),
            children: "Refresh DevTools"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Trial Offer"
        }), (0, r.jsxs)("div", {
          className: g.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: g.input,
            options: e,
            isSelected: e => o === e,
            placeholder: "Trial Type",
            serialize: e => String(e),
            select: e => h(e),
            popoutLayerContext: f.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: w,
            children: "Create"
          })]
        })]
      }), (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Create a Discount Offer"
        }), (0, r.jsxs)("div", {
          className: g.inputRow,
          children: [(0, r.jsx)(c.PhF, {
            className: g.input,
            options: n,
            isSelected: e => x === e,
            placeholder: "Discount Type",
            serialize: e => String(e),
            select: e => p(e),
            popoutLayerContext: f.O$
          }), (0, r.jsx)(c.zxk, {
            onClick: Z,
            children: "Create"
          })]
        })]
      }), b.length > 0 && (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Trial Offers"
        }), b.map(t => (0, r.jsx)(O, {
          offer: t,
          offerOptions: e,
          forceRefetch: () => I(!0)
        }, t.id))]
      }), C.length > 0 && (0, r.jsxs)("section", {
        className: g.section,
        children: [(0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          children: "Existing Discount Offers"
        }), C.map(e => (0, r.jsx)(S, {
          offer: e,
          offerOptions: n,
          forceRefetch: () => I(!0)
        }, e.id))]
      })]
    })
  })
}