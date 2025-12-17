/** Chunk was on 39442 **/
/** chunk id: 682085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk491662 = require("./491662.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk931847 = require("./931847.js"),
  Chunk50130 = require("./50130.js"),
  Chunk28671 = require("./28671.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284459 = require("./284459.js");

function O() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, Chunk785717.KZ)(), O = Chunk473749.useRef(false), j = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), {
    application: x,
    config: P
  } = (0, Chunk50130.G)(), {
    token: w,
    fetched: I
  } = (0, Chunk491662.o)(null == P ? true : P.application_id), S = Chunk473749.useMemo(() => (null == P ? true : P.application_id) != null ? new Chunk931847.q({
    type: Chunk296009.l.APPLICATION,
    applicationId: P.application_id
  }) : null, [null == P ? true : P.application_id]), E = Chunk473749.useCallback(() => {
    exports({
      action: "PRESS_ADD_WIDGET"
    }), (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("38576").then(require.bind(require, 925170));
      return n => {
        var i, a;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), a = a = {
          trackUserProfileEditAction: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [exports]), T = null == j || null == x || null == S || !I, _ = null != w;
  if (Chunk473749.useEffect(() => {
      !T && _ && (O.current || (module({
        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
        applicationId: x.id
      }), O.current = true))
    }, [T, _, module, null == x ? true : x.id]), T) return (0, Chunk54381.jsx)("div", {
    className: Chunk284459.loading,
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  });
  if (!_) return (0, Chunk54381.jsx)(Chunk795990.Z, {});
  let C = (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    gap: 4,
    className: Chunk284459.header,
    children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      children: Chunk388032.intl.string(Chunk388032.t["oqalC+"])
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: Chunk388032.intl.format(Chunk388032.t.YnNFWa, {
        applicationName: x.name
      })
    })]
  });
  return (0, Chunk54381.jsx)(Chunk243778.ZP, {
    contentTypes: [Chunk704215.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      switch (t) {
        case o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
          return (0, r.jsxs)(c.Kqy, {
            gap: 16,
            align: "center",
            children: [(0, r.jsx)(c.LZC, {
              size: 32
            }), C, (0, r.jsx)(b.Z, {
              user: j,
              application: x,
              onDismiss: n
            }), (0, r.jsx)(m.Z, {})]
          });
        case null:
          return (0, r.jsxs)(c.Kqy, {
            gap: 32,
            align: "center",
            children: [(0, r.jsx)(c.LZC, {
              size: 128
            }), C, (0, r.jsx)(c.Button, {
              icon: c.qJs,
              text: y.intl.string(y.t["lBG2s/"]),
              size: "md",
              color: "secondary",
              onClick: E
            })]
          })
      }
    }
  })
}