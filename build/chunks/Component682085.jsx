/** Chunk was on 56848 **/
/** chunk id: 682085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk491662 = require("./491662.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk86419 = require("./86419.js"),
  Chunk50130 = require("./50130.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk66582 = require("./66582.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    {
      trackUserProfileEditAction: t
    } = (0, Chunk785717.KZ)(),
    {
      application: w,
      config: T
    } = (0, Chunk50130.G)(),
    {
      token: N,
      loading: A
    } = (0, Chunk491662.o)(null == T ? true : T.application_id),
    C = Chunk647438.useMemo(() => (null == T ? true : T.application_id) != null ? new Chunk931847.q({
      type: Chunk296009.l.APPLICATION,
      applicationId: T.application_id
    }) : null, [null == T ? true : T.application_id]),
    k = Chunk647438.useCallback(() => {
      null != C && ((0, Chunk86419.qH)(C.type, C), exports({
        action: "WIDGET_ADDED",
        widgetEdited: C.type
      }), (0, Chunk872269.L$)(Chunk228168.qb.WIDGET_ADDED))
    }, [C, exports]),
    Z = Chunk647438.useCallback(() => {
      exports({
        action: "PRESS_ADD_WIDGET"
      }), (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("38576").then(require.bind(require, 925170));
        return n => (0, r.jsx)(e, S(I({}, n), {
          trackUserProfileEditAction: t
        }))
      }, {
        stackingBehavior: "stack"
      })
    }, [exports]);
  if (null == module || null == w || null == C || A) return (0, Chunk951288.jsx)("div", {
    className: Chunk66582.loading,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == N) return (0, Chunk951288.jsx)(Chunk795990.Z, {});
  let D = (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 4,
    className: Chunk66582.header,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/medium",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t.oqalCw)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: Chunk388032.intl.format(Chunk388032.t.YnNFWV, {
        applicationName: w.name
      })
    })]
  });
  return (0, Chunk951288.jsx)(Chunk243778.ZP, {
    contentTypes: [Chunk704215.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
    bypassAutoDismiss: true,
    children: t => {
      let {
        visibleContent: n,
        markAsDismissed: i
      } = t;
      switch (n) {
        case s.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
          return (0, r.jsxs)(o.Kqy, {
            gap: 16,
            align: "center",
            children: [(0, r.jsx)(o.LZC, {
              size: 32
            }), D, (0, r.jsx)(m.Z, {
              user: e,
              widget: C,
              cta: (0, r.jsx)(E, {
                heading: x.intl.format(x.t.OIzLCw, {
                  applicationName: w.name
                }),
                content: x.intl.format(x.t.BQySrq, {
                  applicationName: w.name
                }),
                buttons: (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(o.ua7, {
                    text: x.intl.string(x.t.WAI6xs),
                    children: e => (0, r.jsx)(o.Yd2, S(I({}, e), {
                      variant: "secondary",
                      size: "sm",
                      icon: o.Dio,
                      "aria-label": x.intl.string(x.t.WAI6xs),
                      onClick: () => {
                        i(O.L.USER_DISMISS)
                      }
                    }))
                  }), (0, r.jsx)(o.ua7, {
                    text: x.intl.string(x.t.lBG2s7),
                    children: e => (0, r.jsx)(o.Yd2, S(I({}, e), {
                      variant: "primary",
                      size: "sm",
                      icon: o.kmB,
                      "aria-label": x.intl.formatToPlainString(x.t.KfGahI, {
                        applicationName: w.name
                      }),
                      onClick: () => {
                        i(O.L.TAKE_ACTION), k()
                      }
                    }))
                  })]
                })
              })
            }), (0, r.jsx)(v.Z, {})]
          });
        case null:
          return (0, r.jsxs)(o.Kqy, {
            gap: 32,
            align: "center",
            children: [(0, r.jsx)(o.LZC, {
              size: 128
            }), D, (0, r.jsx)(o.zxk, {
              icon: o.qJs,
              text: x.intl.string(x.t.lBG2s7),
              size: "md",
              color: "secondary",
              onClick: Z
            })]
          })
      }
    }
  })
}

function E(e) {
  return (0, r.jsxs)(o.Kqy, {
    direction: "horizontal",
    gap: 24,
    padding: 16,
    fullWidth: false,
    className: P.cta,
    children: [(0, r.jsxs)(o.Kqy, {
      gap: 4,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        children: e.heading
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: e.content
      })]
    }), (0, r.jsx)(o.Kqy, {
      direction: "horizontal",
      gap: 12,
      align: "center",
      justify: "end",
      fullWidth: false,
      children: e.buttons
    })]
  })
}