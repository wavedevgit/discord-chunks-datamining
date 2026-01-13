/** Chunk was on 90882 **/
/** chunk id: 682085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk513417 = require("./513417.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk28671 = require("./28671.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284459 = require("./284459.js");

function p() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, c.KZ)(), p = i.useRef(false), {
    suggestions: m,
    currentUser: b,
    isLoading: y
  } = (0, a.Z)({
    location: "UserProfileModalV2ApplicationWidgetsEmptyState"
  }), h = null == m ? true : m[0], j = i.useCallback(() => {
    t({
      action: "PRESS_ADD_WIDGET"
    }), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("38576").then(n.bind(n, 925170));
      return n => {
        var i, l;
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
        }({}, n), l = l = {
          trackUserProfileEditAction: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [t]);
  if (i.useEffect(() => {
      !y && null != h && (p.current || (e({
        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
        applicationId: h.application.id
      }), p.current = true))
    }, [y, e, h]), y) return (0, r.jsx)("div", {
    className: g.loading,
    children: (0, r.jsx)(l.$jN, {})
  });
  if (null == h) return (0, r.jsx)(d.Z, {});
  let O = (0, r.jsxs)(l.Kqy, {
    gap: 4,
    className: g.header,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      children: f.intl.string(f.t["oqalC+"])
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: f.intl.format(f.t.YnNFWa, {
        applicationName: h.application.name
      })
    })]
  });
  return (0, r.jsx)(o.ZP, {
    contentTypes: [h.dismissibleContent],
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return t === h.dismissibleContent ? (0, r.jsxs)(l.Kqy, {
        gap: 16,
        align: "center",
        children: [(0, r.jsx)(l.LZC, {
          size: 32
        }), O, (0, r.jsx)(s.Z, {
          user: b,
          application: h.application,
          onDismiss: n
        }), (0, r.jsx)(u.Z, {})]
      }) : (0, r.jsxs)(l.Kqy, {
        gap: 32,
        align: "center",
        children: [(0, r.jsx)(l.LZC, {
          size: 128
        }), O, (0, r.jsx)(l.Button, {
          icon: l.qJs,
          text: f.intl.string(f.t["lBG2s/"]),
          size: "md",
          color: "secondary",
          onClick: j
        })]
      })
    }
  })
}