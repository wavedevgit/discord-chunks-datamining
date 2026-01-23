/** Chunk was on 14691 **/
/** chunk id: 842319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk665171 = require("./665171.js"),
  Chunk397400 = require("./397400.js"),
  Chunk588591 = require("./588591.js"),
  Chunk695667 = require("./695667.jsx"),
  Chunk27023 = require("./27023.jsx"),
  Chunk548392 = require("./548392.jsx"),
  Chunk298009 = require("./298009.js"),
  Chunk638529 = require("./638529.js"),
  Chunk928873 = require("./928873.js"),
  Chunk12663 = require("./12663.js"),
  Chunk285286 = require("./285286.js"),
  Chunk800007 = require("./800007.js"),
  Chunk652215 = require("./652215.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk513246 = require("./513246.js");

function w(e) {
  let {
    plan: t,
    selected: n,
    className: l
  } = e;
  return null == t ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(T.NV, l),
      children: [(0, r.jsx)("span", {
        children: t.name
      }), (0, r.jsxs)("div", {
        className: T._A,
        children: [(0, r.jsx)(c._Jp, {
          size: "xs",
          color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          children: A.intl.format(C.default.kOMlHs, {
            boostCount: t.cost
          })
        })]
      })]
    }), !n && (0, r.jsx)("div", {
      className: T.S6
    })]
  })
}

function I(e) {
  let {
    region: t,
    selected: n,
    disabled: l,
    className: i
  } = e, {
    pingText: a,
    pingCircleStyle: d
  } = (0, _.b)(t.pingUrl);
  return null == t ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()(T.NV, {
        [T.r9]: l
      }, i),
      children: [(0, r.jsx)("span", {
        children: t.name
      }), (0, r.jsx)("div", {
        className: T._A,
        children: l ? (0, r.jsx)("span", {
          children: A.intl.string(C.default.aCyHe2)
        }) : "" !== t.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: s()(T.Jg, d)
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            children: a
          })]
        }) : null
      })]
    }), !n && (0, r.jsx)("div", {
      className: T.S6
    })]
  })
}

function P() {
  let {
    guildId: e,
    currentGame: t,
    regionId: n,
    gameServerInstance: i,
    setRegionId: s,
    name: _,
    setName: P,
    planId: G,
    setPlanId: R,
    planCost: k,
    stepLoading: M,
    error: U,
    gameProvider: V
  } = (0, v.bv)();
  (0, f.SX)(e, null == i ? true : i.id, null == i ? "create" : "edit"), l.useEffect(() => {
    (0, g.Jr)(e)
  }, [e]);
  let L = (0, a.bG)([j.A], () => j.A.getRegions()),
    K = (0, a.bG)([j.A], () => j.A.getRegionState()),
    D = l.useMemo(() => {
      var e;
      return null != (e = L.sort((e, t) => (0, S.A)(e, t, K)).map(e => ({
        value: e,
        label: e.name,
        disabled: true !== e.enabled
      }))) ? e : []
    }, [K, L]),
    H = l.useMemo(() => L.some(e => "" !== e.pingUrl), [L]),
    F = l.useMemo(() => {
      var e;
      return null != (e = null == t ? true : t.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? e : []
    }, [t]),
    W = (0, h.A)(),
    {
      isValid: z,
      errors: B
    } = (0, h.u)(_),
    Q = null != i,
    Y = (0, N.A)(i),
    Z = (0, E.A)(V),
    q = null != V && null != O.eh[V] ? O.eh[V] : "";
  return null == t ? (0, r.jsx)("div", {
    className: T.dc,
    children: (0, r.jsx)(c.y$y, {
      type: c.tVU.SPINNING_CIRCLE
    })
  }) : (0, r.jsxs)("div", {
    className: T.kL,
    children: [(0, r.jsxs)("div", {
      className: T.hQ,
      children: [(0, r.jsxs)("div", {
        className: T.V1,
        children: [(0, r.jsxs)("div", {
          className: T.hd,
          children: [(0, r.jsxs)("div", {
            className: T.bV,
            children: [(0, r.jsx)(c.Heading, {
              className: T.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: A.intl.string(C.default.rOMEZd)
            }), (0, r.jsx)(o.m_, {
              position: "top",
              text: A.intl.string(C.default.THJY1n),
              children: (0, r.jsx)(c.cBN, {
                className: T.GI,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(c.ksK, {
            value: _,
            onChange: P,
            placeholder: A.intl.string(C.default.ElVYr3),
            maxLength: O.XF,
            disabled: M || !Y,
            error: B.name
          })]
        }), (0, r.jsxs)("div", {
          className: T.hd,
          children: [(0, r.jsxs)("div", {
            className: T.bV,
            children: [(0, r.jsx)(c.Heading, {
              className: T.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: A.intl.string(C.default.nB5OZ4)
            }), (0, r.jsx)(o.m_, {
              position: "top",
              text: A.intl.string(null != i ? C.default["7mX0gE"] : C.default["61N+P6"]),
              children: (0, r.jsx)(c.cBN, {
                className: T.GI,
                size: "xs"
              })
            }), !Q && H && (0, r.jsx)("div", {
              className: T.Ow,
              children: (0, r.jsx)(o.m_, {
                asContainer: true,
                position: "top",
                text: A.intl.string(C.default.kGkE7a),
                children: (0, r.jsx)(c.DUT, {
                  className: T.GI,
                  onClick: () => (0, g.KH)(),
                  children: (0, r.jsx)(c.fNY, {
                    size: "xs"
                  })
                })
              })
            })]
          }), Q ? (0, r.jsx)(c.ksK, {
            value: null == i ? true : i.regionName,
            disabled: true,
            placeholder: A.intl.string(C.default["k+RTIm"])
          }) : (0, r.jsx)(d.Pw, {
            serialize: e => e.id,
            isSelected: e => e.id === n,
            isDisabled: M || Q || !Y,
            options: D,
            optionClassName: T.uK,
            select: e => s(e.id),
            placeholder: A.intl.string(C.default["k+RTIm"]),
            renderOptionLabel: e => {
              var t;
              return (0, r.jsx)(I, {
                region: e.value,
                selected: e.value.id === n,
                disabled: null != (t = e.disabled) && t
              })
            },
            renderOptionValue: e => {
              var t;
              return null == e[0] ? null : (0, r.jsx)(I, {
                region: e[0].value,
                selected: e[0].value.id === n,
                disabled: null != (t = e[0].disabled) && t,
                className: T.Uq
              })
            },
            "data-migration-pending": true
          })]
        }), (0, r.jsxs)("div", {
          className: T.hd,
          children: [(0, r.jsxs)("div", {
            className: T.bV,
            children: [(0, r.jsx)(c.Heading, {
              className: T.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: A.intl.string(C.default["K+zMYp"])
            }), (0, r.jsx)(o.m_, {
              position: "top",
              text: A.intl.string(C.default["/wD5IM"]),
              children: (0, r.jsx)(c.cBN, {
                className: T.GI,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(d.Pw, {
            serialize: e => e.id,
            isSelected: e => e.id === G,
            isDisabled: M || !Y,
            options: F,
            optionClassName: T.uK,
            select: e => R(e.id),
            placeholder: A.intl.string(C.default.JdMW0i),
            renderOptionValue: e => {
              var t, n, l;
              return (0, r.jsx)(w, {
                plan: null == (t = e[0]) ? true : t.value,
                selected: (null == (l = e[0]) || null == (n = l.value) ? true : n.id) === G,
                className: T.Uq
              })
            },
            renderOptionLabel: e => (0, r.jsx)(w, {
              plan: e.value,
              selected: e.value.id === G
            }),
            "data-migration-pending": true
          })]
        })]
      }), (0, r.jsx)("div", {
        className: T.sA,
        children: (0, r.jsx)(p.A, {})
      })]
    }), null != i && 0 !== k && (0, r.jsx)(u.A, {
      className: T.et,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: k < 0 ? A.intl.format(C.default.SorKas, {
          boostCount: Math.abs(k)
        }) : A.intl.format(C.default.n2wpym, {
          boostCount: k
        })
      })
    }), !Y && (0, r.jsx)(u.A, {
      className: T.et,
      look: u.k.WARNING,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: A.intl.string(C.default["/JNPWb"])
      })
    }), (null == t ? true : t.early_access) === true && !Q && (0, r.jsx)(u.A, {
      className: T.et,
      look: u.k.INFO,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        children: A.intl.format(C.default.TnoBGX, {
          gameName: t.name
        })
      })
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != V && A.intl.format(Q ? C.default.num0a6 : C.default.p5KZDr, {
        provider: Z,
        termsOfServiceUrl: () => (0, x.h)({
          href: q
        }),
        helpCenterUrl: m.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING)
      })
    }), null != U && (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: U
    }), (0, r.jsxs)(b.N4, {
      step: O.HS.SERVER_SETTINGS,
      className: T.xQ,
      children: [(0, r.jsx)(b.AI, {}), (0, r.jsx)(b.cp, {
        disabled: !W || !z
      })]
    })]
  })
}