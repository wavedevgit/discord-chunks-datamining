/** Chunk was on 77678 **/
/** chunk id: 682085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk50130 = require("./50130.js"),
  Chunk28671 = require("./28671.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk267233 = require("./267233.js");

function O() {
  let {
    trackUserProfileEditAction: e
  } = (0, Chunk785717.KZ)(), t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()), {
    application: O,
    config: j
  } = (0, Chunk50130.G)(), {
    token: x,
    fetched: _
  } = (0, Chunk491662.o)(null == j ? true : j.application_id), P = Chunk647438.useMemo(() => (null == j ? true : j.application_id) != null ? new Chunk931847.q({
    type: Chunk296009.l.APPLICATION,
    applicationId: j.application_id
  }) : null, [null == j ? true : j.application_id]), I = Chunk647438.useCallback(() => {
    module({
      action: "PRESS_ADD_WIDGET"
    }), (0, Chunk481060.ZDy)(async () => {
      let {
        default: t
      } = await require.e("38576").then(require.bind(require, 925170));
      return n => {
        var i, a;
        return (0, r.jsx)(t, (i = function(e) {
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
          trackUserProfileEditAction: e
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
  }, [module]);
  if (null == exports || null == O || null == P || !_) return (0, Chunk951288.jsx)("div", {
    className: Chunk267233.loading,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  });
  if (null == x) return (0, Chunk951288.jsx)(Chunk795990.Z, {});
  let w = (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
    gap: 4,
    className: Chunk267233.header,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-md/medium",
      color: "header-primary",
      children: Chunk388032.intl.string(Chunk388032.t["oqalC+"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-secondary",
      children: Chunk388032.intl.format(Chunk388032.t.YnNFWa, {
        applicationName: O.name
      })
    })]
  });
  return (0, Chunk951288.jsx)(Chunk243778.ZP, {
    contentTypes: [Chunk704215.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: i
      } = e;
      switch (n) {
        case o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET:
          return (0, r.jsxs)(c.Kqy, {
            gap: 16,
            align: "center",
            children: [(0, r.jsx)(c.LZC, {
              size: 32
            }), w, (0, r.jsx)(m.Z, {
              user: t,
              application: O,
              onDismiss: i
            }), (0, r.jsx)(b.Z, {})]
          });
        case null:
          return (0, r.jsxs)(c.Kqy, {
            gap: 32,
            align: "center",
            children: [(0, r.jsx)(c.LZC, {
              size: 128
            }), w, (0, r.jsx)(c.Button, {
              icon: c.qJs,
              text: y.intl.string(y.t["lBG2s/"]),
              size: "md",
              color: "secondary",
              onClick: I
            })]
          })
      }
    }
  })
}