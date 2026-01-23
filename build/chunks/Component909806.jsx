/** Chunk was on 6759 **/
/** chunk id: 909806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function m(e) {
  let {
    guildTemplate: t,
    onClick: n,
    autoFocus: s
  } = e, r = i.useCallback(() => {
    n(t)
  }, [t, n]);
  return (0, l.jsx)(a.A, {
    icon: c.s[t.id],
    message: t.label,
    onClick: r,
    autoFocus: s
  })
}

function x(e) {
  var t, n;
  let {
    onBack: i,
    onChooseTemplate: a,
    directoryGuildName: c
  } = e, x = (0, o.ul)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.rQ0, {
      title: d.intl.formatToPlainString(d.t.T7aLYT, {
        guildName: c
      }),
      subtitle: d.intl.string(d.t["RA+St6"])
    }), (0, l.jsx)(s.cwr, {
      children: (0, l.jsx)(r.ArX, {
        className: u.XG,
        children: (0, l.jsxs)("div", {
          className: u.KA,
          children: [(0, l.jsx)(m, {
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
            }({}, x[o.Y1.CREATE]), n = n = {
              label: d.intl.string(d.t.WqJbLi)
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
            onClick: a
          }), (0, l.jsx)(r.Text, {
            className: u.l8,
            color: "text-default",
            variant: "text-xs/bold",
            children: d.intl.string(d.t.JGDkfg)
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_STUDY],
            onClick: a
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_SCHOOL_CLUB],
            onClick: a
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_CLASS],
            onClick: a
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_SOCIAL],
            onClick: a
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_MAJOR],
            onClick: a
          }), (0, l.jsx)(m, {
            guildTemplate: x[o.Y1.HUB_DORM],
            onClick: a
          })]
        })
      })
    }), (0, l.jsx)(s.H7u, {
      leading: (0, l.jsx)(r.QWc, {
        textVariant: "text-sm/medium",
        variant: "secondary",
        text: d.intl.string(d.t["13/7kX"]),
        onClick: i
      })
    })]
  })
}