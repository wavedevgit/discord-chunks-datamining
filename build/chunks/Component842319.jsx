/** Chunk was on 14691 **/
/** chunk id: 842319, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function P(e) {
  let {
    plan: t,
    selected: l,
    className: n
  } = e;
  return null == t ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(w.NV, n),
      children: [(0, r.jsx)("span", {
        children: t.name
      }), (0, r.jsxs)("div", {
        className: w._A,
        children: [(0, r.jsx)(o._Jp, {
          size: "xs",
          color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: T.intl.format(A.default.kOMlHs, {
            boostCount: t.cost
          })
        })]
      })]
    }), !l && (0, r.jsx)("div", {
      className: w.S6
    })]
  })
}

function R(e) {
  let {
    region: t,
    selected: l,
    disabled: n,
    className: s
  } = e, {
    pingText: a,
    pingCircleStyle: d
  } = (0, N.b)(t.pingUrl);
  return null == t ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()(w.NV, {
        [w.r9]: n
      }, s),
      children: [(0, r.jsx)("span", {
        children: t.name
      }), (0, r.jsx)("div", {
        className: w._A,
        children: n ? (0, r.jsx)("span", {
          children: T.intl.string(A.default.aCyHe2)
        }) : "" !== t.pingUrl ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: i()(w.Jg, d)
          }), (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            children: a
          })]
        }) : null
      })]
    }), !l && (0, r.jsx)("div", {
      className: w.S6
    })]
  })
}

function G() {
  let {
    guildId: e,
    currentGame: t,
    regionId: l,
    gameServerInstance: s,
    setRegionId: i,
    name: N,
    setName: G,
    planId: I,
    setPlanId: k,
    planCost: M,
    stepLoading: U,
    error: V,
    gameProvider: C
  } = (0, g.bv)();
  (0, x.SX)(e, null == s ? true : s.id, null == s ? "create" : "edit"), n.useEffect(() => {
    (0, m.Jr)(e)
  }, [e]);
  let K = (0, a.bG)([j.A], () => j.A.getRegions()),
    L = (0, a.bG)([j.A], () => j.A.getRegionState()),
    D = n.useMemo(() => {
      var e;
      return null != (e = K.sort((e, t) => (0, S.A)(e, t, L)).map(e => ({
        value: e,
        label: e.name,
        disabled: true !== e.enabled
      }))) ? e : []
    }, [L, K]),
    H = n.useMemo(() => K.some(e => "" !== e.pingUrl), [K]),
    F = n.useMemo(() => {
      var e;
      return null != (e = null == t ? true : t.plans.map(e => ({
        value: e,
        label: e.name
      }))) ? e : []
    }, [t]),
    z = (0, h.A)(),
    {
      isValid: W,
      errors: Q
    } = (0, h.u)(N),
    Y = null != s,
    B = (0, _.A)(s),
    Z = (0, O.A)(C),
    q = null != C && null != E.eh[C] ? E.eh[C] : "";
  return null == t ? (0, r.jsx)("div", {
    className: w.dc,
    children: (0, r.jsx)(o.y$y, {
      type: o.tVU.SPINNING_CIRCLE
    })
  }) : (0, r.jsxs)("div", {
    className: w.kL,
    children: [(0, r.jsxs)("div", {
      className: w.hQ,
      children: [(0, r.jsxs)("div", {
        className: w.V1,
        children: [(0, r.jsxs)("div", {
          className: w.hd,
          children: [(0, r.jsxs)("div", {
            className: w.bV,
            children: [(0, r.jsx)(o.Heading, {
              className: w.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(A.default.rOMEZd)
            }), (0, r.jsx)(c.m_, {
              position: "top",
              text: T.intl.string(A.default.THJY1n),
              children: (0, r.jsx)(o.cBN, {
                className: w.GI,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(o.ksK, {
            value: N,
            onChange: G,
            placeholder: T.intl.string(A.default.ElVYr3),
            maxLength: E.XF,
            disabled: U || !B,
            error: Q.name
          })]
        }), (0, r.jsxs)("div", {
          className: w.hd,
          children: [(0, r.jsxs)("div", {
            className: w.bV,
            children: [(0, r.jsx)(o.Heading, {
              className: w.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(A.default.nB5OZ4)
            }), (0, r.jsx)(c.m_, {
              position: "top",
              text: T.intl.string(null != s ? A.default["7mX0gE"] : A.default["61N+P6"]),
              children: (0, r.jsx)(o.cBN, {
                className: w.GI,
                size: "xs"
              })
            }), !Y && H && (0, r.jsx)("div", {
              className: w.Ow,
              children: (0, r.jsx)(c.m_, {
                asContainer: true,
                position: "top",
                text: T.intl.string(A.default.kGkE7a),
                children: (0, r.jsx)(o.DUT, {
                  className: w.GI,
                  onClick: () => (0, m.KH)(),
                  children: (0, r.jsx)(o.fNY, {
                    size: "xs"
                  })
                })
              })
            })]
          }), Y ? (0, r.jsx)(o.ksK, {
            value: null == s ? true : s.regionName,
            disabled: true,
            placeholder: T.intl.string(A.default["k+RTIm"])
          }) : (0, r.jsx)(d.Pw, {
            serialize: e => e.id,
            isSelected: e => e.id === l,
            isDisabled: U || Y || !B,
            options: D,
            optionClassName: w.uK,
            select: e => i(e.id),
            placeholder: T.intl.string(A.default["k+RTIm"]),
            renderOptionLabel: e => {
              var t;
              return (0, r.jsx)(R, {
                region: e.value,
                selected: e.value.id === l,
                disabled: null != (t = e.disabled) && t
              })
            },
            renderOptionValue: e => {
              var t;
              return null == e[0] ? null : (0, r.jsx)(R, {
                region: e[0].value,
                selected: e[0].value.id === l,
                disabled: null != (t = e[0].disabled) && t,
                className: w.Uq
              })
            },
            "data-migration-pending": true
          })]
        }), (0, r.jsxs)("div", {
          className: w.hd,
          children: [(0, r.jsxs)("div", {
            className: w.bV,
            children: [(0, r.jsx)(o.Heading, {
              className: w.TK,
              variant: "heading-sm/semibold",
              color: "text-subtle",
              children: T.intl.string(A.default["K+zMYp"])
            }), (0, r.jsx)(c.m_, {
              position: "top",
              text: T.intl.string(A.default["/wD5IM"]),
              children: (0, r.jsx)(o.cBN, {
                className: w.GI,
                size: "xs"
              })
            })]
          }), (0, r.jsx)(d.Pw, {
            serialize: e => e.id,
            isSelected: e => e.id === I,
            isDisabled: U || !B,
            options: F,
            optionClassName: w.uK,
            select: e => k(e.id),
            placeholder: T.intl.string(A.default.JdMW0i),
            renderOptionValue: e => {
              var t, l, n;
              return (0, r.jsx)(P, {
                plan: null == (t = e[0]) ? true : t.value,
                selected: (null == (n = e[0]) || null == (l = n.value) ? true : l.id) === I,
                className: w.Uq
              })
            },
            renderOptionLabel: e => (0, r.jsx)(P, {
              plan: e.value,
              selected: e.value.id === I
            }),
            "data-migration-pending": true
          })]
        })]
      }), (0, r.jsx)("div", {
        className: w.sA,
        children: (0, r.jsx)(v.A, {})
      })]
    }), null != s && 0 !== M && (0, r.jsx)(u.A, {
      className: w.et,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: M < 0 ? T.intl.format(A.default.SorKas, {
          boostCount: Math.abs(M)
        }) : T.intl.format(A.default.n2wpym, {
          boostCount: M
        })
      })
    }), !B && (0, r.jsx)(u.A, {
      className: w.et,
      look: u.k.WARNING,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: T.intl.string(A.default["/JNPWb"])
      })
    }), (null == t ? true : t.early_access) === true && !Y && (0, r.jsx)(u.A, {
      className: w.et,
      look: u.k.INFO,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: T.intl.format(A.default.TnoBGX, {
          gameName: t.name
        })
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      children: null != C && T.intl.format(Y ? A.default.num0a6 : A.default.p5KZDr, {
        provider: Z,
        termsOfServiceUrl: () => (0, b.h)({
          href: q
        }),
        helpCenterUrl: f.A.getArticleURL(y.MVz.GAME_SERVER_HOSTING)
      })
    }), null != V && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: V
    }), (0, r.jsxs)(p.N4, {
      step: E.HS.SERVER_SETTINGS,
      className: w.xQ,
      children: [(0, r.jsx)(p.AI, {}), (0, r.jsx)(p.cp, {
        disabled: !z || !W
      })]
    })]
  })
}