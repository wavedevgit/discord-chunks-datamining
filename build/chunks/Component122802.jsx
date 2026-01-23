/** Chunk was on 64992 **/
/** chunk id: 122802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk832712 = require("./832712.js"),
  Chunk414079 = require("./414079.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk661504 = require("./661504.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk994500 = require("./994500.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk477427 = require("./477427.js"),
  Chunk769591 = require("./769591.js"),
  Chunk887560 = require("./887560.js"),
  Chunk393432 = require("./393432.js"),
  Chunk24873 = require("./24873.js"),
  Chunk416850 = require("./416850.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk11448 = require("./11448.js");
let M = Chunk64700.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [s, r] = l.useState(null), o = (0, a.yK)([x.A, b.Ay], () => (0, f.ct)(b.Ay.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => x.A.getChannel(e)).filter(A.Vq)), u = (0, a.bG)([j.A], () => j.A.getCategories(n)), g = o.map((e, t) => (0, i.jsxs)("div", {
    className: C.WG,
    children: [(0, i.jsx)(L, {
      channel: e,
      categories: u,
      autoFocus: s === e.id
    }, e.id), t < o.length - 1 && (0, i.jsx)("div", {
      className: C.me
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(E.A, {
      guildId: n,
      onSelected: e => {
        if (null != o.find(t => t.id === e)) return;
        let t = x.A.getChannel(e);
        null != t && (c.A.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: b.Ay.resolvedMessageNotifications(t),
          flags: (0, O.mD)(b.Ay.getChannelIdFlags(t.guild_id, t.id), b.Ay.resolveUnreadSetting(t))
        }, v.fd.OverrideCreated), r(e))
      }
    }), g.length > 0 && (0, i.jsxs)("div", {
      className: C.tp,
      children: [(0, i.jsxs)("div", {
        className: C.nM,
        children: [(0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C._k,
          children: G.intl.string(G.t.uShwWv)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.km,
          children: G.intl.string(G.t.hZrr6k)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.km,
          children: G.intl.string(G.t.y59NJm)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.km,
          children: G.intl.string(G.t["pGn/bJ"])
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: C.km,
          children: G.intl.string(G.t["32yow9"])
        })]
      }), g.length > 0 && (0, i.jsx)("div", {
        className: C.BM,
        children: g
      })]
    })]
  })
});

function L(e) {
  let {
    channel: t,
    categories: n,
    autoFocus: s
  } = e, c = (0, a.bG)([x.A], () => x.A.getChannel(null == t ? true : t.parent_id)), j = (0, S.bH)(t), b = l.useRef(null), A = l.useRef(null), [v, f] = l.useState(false);
  if (l.useEffect(() => {
      if (s) {
        var e;
        null == (e = b.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let O = G.intl.string(G.t.uIzfCE),
    E = (0, m.gU)(t);
  t.type === y.rbe.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? O = G.intl.formatToPlainString(G.t["2KzH89"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != c && (O = G.intl.formatToPlainString(G.t.L1zJgb, {
    categoryName: (0, g.m1)(c, N.default, p.A)
  }));
  let M = v ? _.N9.CUSTOM : j.preset;
  return (0, i.jsx)("div", {
    ref: b,
    children: (0, i.jsxs)("div", {
      className: r()(C.nM, C.Ix),
      children: [(0, i.jsxs)("div", {
        className: r()(C._k, C.cU),
        children: [null != E ? (0, i.jsx)(E, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: C.Kk
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: C.cU,
            children: (0, g.m1)(t, N.default, p.A)
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/medium",
            className: C.cU,
            children: O
          })]
        })]
      }), (0, i.jsx)("div", {
        className: C.km,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            checked: M === _.N9.ALL_MESSAGES,
            label: "",
            onChange: () => {
              (0, S.gN)(t.guild_id, t.id, _.N9.ALL_MESSAGES), f(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: C.km,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            checked: M === _.N9.MENTIONS,
            label: "",
            onChange: () => {
              (0, S.gN)(t.guild_id, t.id, _.N9.MENTIONS), f(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: C.km,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            checked: M === _.N9.NOTHING,
            label: "",
            onChange: () => {
              (0, S.gN)(t.guild_id, t.id, _.N9.NOTHING), f(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: C.km,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)("span", {
            ref: A,
            style: {
              display: "inline-flex"
            },
            children: (0, i.jsx)(d.Checkbox, {
              checked: M === _.N9.CUSTOM,
              label: "",
              onChange: () => {
                f(true);
                let e = A.current;
                null != e && (0, o.jA)({
                  stopPropagation: () => {},
                  preventDefault: () => {},
                  currentTarget: e,
                  target: e
                }, () => (0, i.jsx)(d.W1t, {
                  "data-menu-migration-ready": true,
                  navId: "ChannelNotificationCustomSettingsItems",
                  "aria-label": G.intl.string(G.t.kMdneQ),
                  onClose: () => {},
                  onSelect: () => {},
                  children: (0, h.d_)(t, () => f(false))
                }))
              }
            })
          })
        })
      }), (0, i.jsx)(u.A, {
        onClick: () => (0, S.Au)(t.guild_id, t.id),
        className: C.DT
      })]
    })
  })
}