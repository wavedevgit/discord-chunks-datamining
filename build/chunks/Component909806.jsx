/** Chunk was on 6759 **/
/** chunk id: 909806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk878314 = require("./878314.jsx"),
  Chunk816127 = require("./816127.js"),
  Chunk946116 = require("./946116.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk76616 = require("./76616.js");

function x(e) {
  let {
    guildTemplate: t,
    onClick: n,
    autoFocus: s
  } = e, a = i.useCallback(() => {
    n(t)
  }, [t, n]);
  return (0, l.jsx)(r.A, {
    icon: c.s[t.id],
    message: t.label,
    onClick: a,
    autoFocus: s
  })
}

function m(e) {
  var t, n;
  let {
    onBack: i,
    onChooseTemplate: r,
    directoryGuildName: c
  } = e, m = (0, d.ul)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.rQ0, {
      title: o.intl.formatToPlainString(o.t.T7aLYT, {
        guildName: c
      }),
      subtitle: o.intl.string(o.t["RA+St6"])
    }), (0, l.jsx)(s.cwr, {
      children: (0, l.jsx)(a.ArX, {
        className: u.XG,
        children: (0, l.jsxs)("div", {
          className: u.KA,
          children: [(0, l.jsx)(x, {
            guildTemplate: (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  var l;
                  l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = l
                })
              }
              return e
            }({}, m[d.Y1.CREATE]), n = n = {
              label: o.intl.string(o.t.WqJbLi)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t),
            onClick: r
          }), (0, l.jsx)(a.Text, {
            className: u.l8,
            color: "text-default",
            variant: "text-xs/bold",
            children: o.intl.string(o.t.JGDkfg)
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_STUDY],
            onClick: r
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_SCHOOL_CLUB],
            onClick: r
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_CLASS],
            onClick: r
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_SOCIAL],
            onClick: r
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_MAJOR],
            onClick: r
          }), (0, l.jsx)(x, {
            guildTemplate: m[d.Y1.HUB_DORM],
            onClick: r
          })]
        })
      })
    }), (0, l.jsx)(s.H7u, {
      leading: (0, l.jsx)(a.QWc, {
        textVariant: "text-sm/medium",
        variant: "secondary",
        text: o.intl.string(o.t["13/7kX"]),
        onClick: i
      })
    })]
  })
}