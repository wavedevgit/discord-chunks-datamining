/** Chunk was on 94682 **/
/** chunk id: 53977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk566605 = require("./566605.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk357541 = require("./357541.jsx"),
  Chunk814221 = require("./814221.jsx"),
  Chunk266713 = require("./266713.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk798521 = require("./798521.js");

function g() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, s.NJ)(), g = l.useRef(false), {
    suggestions: m,
    currentUser: b,
    isLoading: y
  } = (0, a.A)({
    location: "UserProfileModalV2ApplicationWidgetsEmptyState"
  }), O = null == m ? true : m[0], j = l.useCallback(() => {
    t({
      action: "PRESS_ADD_WIDGET"
    }), (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("87591").then(n.bind(n, 333114));
      return n => {
        var l, i;
        return (0, r.jsx)(e, (l = function(e) {
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
        }({}, n), i = i = {
          trackUserProfileEditAction: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [t]);
  if (l.useEffect(() => {
      y || null == O || g.current || (e({
        action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE",
        applicationId: O.application.id
      }), g.current = true)
    }, [y, e, O]), y) return (0, r.jsx)("div", {
    className: p.L,
    children: (0, r.jsx)(i.y$y, {})
  });
  if (null == O) return (0, r.jsx)(d.A, {});
  let h = (0, r.jsxs)(i.BJc, {
    gap: 4,
    className: p.w,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      children: f.intl.string(f.t["oqalC+"])
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-subtle",
      children: f.intl.format(f.t.YnNFWa, {
        applicationName: O.application.name
      })
    })]
  });
  return (0, r.jsx)(o.Ay, {
    contentTypes: [O.dismissibleContent],
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      return t === O.dismissibleContent ? (0, r.jsxs)(i.BJc, {
        gap: 16,
        align: "center",
        children: [(0, r.jsx)(i.hKd, {
          size: 32
        }), h, (0, r.jsx)(c.A, {
          user: b,
          application: O.application,
          onDismiss: n
        }), (0, r.jsx)(u.A, {})]
      }) : (0, r.jsxs)(i.BJc, {
        gap: 32,
        align: "center",
        children: [(0, r.jsx)(i.hKd, {
          size: 128
        }), h, (0, r.jsx)(i.Button, {
          icon: i.j96,
          text: f.intl.string(f.t["lBG2s/"]),
          size: "md",
          color: "secondary",
          onClick: j
        })]
      })
    }
  })
}