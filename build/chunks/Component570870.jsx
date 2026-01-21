/** Chunk was on 7150 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk10718 = require("./10718.js"),
  Chunk367790 = require("./367790.js"),
  Chunk667204 = require("./667204.js"),
  Chunk826298 = require("./826298.js"),
  Chunk276022 = require("./276022.jsx"),
  Chunk978983 = require("./978983.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk959218 = require("./959218.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk18526 = require("./18526.js");
let y = e => {
  let n, {
      commandType: t,
      commandTargetId: i,
      channel: y,
      guildId: C,
      onHeightUpdate: I,
      context: O
    } = e,
    Z = (0, o.e7)([h.Z], () => h.Z.getGuild(null != C ? C : y.guild_id)),
    P = (0, o.e7)([m.default], () => m.default.getUser(i)),
    E = (0, p.Z)({
      user: P,
      guildId: null == Z ? true : Z.id,
      context: O
    }),
    k = r.useMemo(() => ({
      channel: y,
      type: "channel"
    }), [y]),
    {
      newUIEnabled: N,
      searchEnabled: T
    } = g.Z.useConfig({
      location: "useAppsCommandItems"
    }),
    [_, A] = r.useState(""),
    M = "" !== _,
    {
      commands: F,
      commandsByActiveSection: S,
      sectionDescriptors: U,
      loading: R
    } = s.wi({
      context: k,
      filters: {
        text: M ? _ : true,
        commandTypes: [t]
      },
      options: {
        limit: x.lr,
        includeFrecency: N && !M,
        scoreMethod: M ? u.p.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: G
    } = r.useMemo(() => {
      let e = {};
      return U.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [U]),
    H = r.useRef(R);
  r.useEffect(() => {
    R !== H.current && (H.current = R, null == I || I())
  }, [R, I]);
  let D = r.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      a()(null != y, "menu item should not show if channel is null");
      let r = G[e.applicationId],
        o = t && null != r ? (0, f.ky)(r) : true;
      return (0, l.jsx)(c.sNh, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != o ? () => (0, l.jsx)(o, {
          channel: y,
          section: r,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: N ? c.Uuj : true,
        action: () => {
          (0, d.Z)({
            command: e,
            optionValues: {},
            context: {
              channel: y,
              guild: Z
            },
            commandTargetId: i
          })
        }
      }, e.id)
    }, [y, G, N, Z, i]),
    L = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, l.jsx)(c.kSQ, {
        label: w.intl.string(w.t.V0w2ap),
        children: t.map(e => D(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [D]),
    Y = r.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, r = (0, f.ky)(n);
      return (0, l.jsx)(c.sNh, {
        id: n.id,
        label: n.name,
        iconLeft: null != r ? () => (0, l.jsx)(r, {
          channel: y,
          section: n,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: t.map(e => D(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [y, D]),
    Q = (0, l.jsx)(c.II_, {
      id: "command-search",
      control: (e, n) => {
        var t, r;
        return (0, l.jsx)(c.ne, (t = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = l
            })
          }
          return e
        }({}, e), r = r = {
          query: _,
          onChange: A,
          placeholder: w.intl.string(w.t.m1UwbP),
          ref: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
          }
          return t
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    }, "command-search");
  if (R) n = (0, l.jsx)(c.sNh, {
    id: "menu-commands-placeholder",
    render: () => (0, l.jsx)(b.Z, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === F.length) n = (0, l.jsxs)(l.Fragment, {
      children: [M && (0, l.jsxs)(l.Fragment, {
        children: [Q, (0, l.jsx)(c.Clw, {})]
      }), (0, l.jsx)(c.sNh, {
        id: "menu-commands-empty",
        label: w.intl.string(w.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (N)
      if (M) n = (0, l.jsxs)(l.Fragment, {
        children: [Q, (0, l.jsx)(c.Clw, {}), F.map(e => D(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = S.find(e => {
            let {
              section: n
            } = e;
            return n.id === x.bi.FRECENCY
          }),
          t = S.filter(e => {
            let {
              section: n
            } = e;
            return n.id !== x.bi.FRECENCY
          });
        n = (0, l.jsxs)(l.Fragment, {
          children: [T && Q, null != e && L(e), (0, l.jsx)(c.kSQ, {
            label: w.intl.string(w.t.PHjkRE),
            children: t.map(e => Y(e))
          })]
        })
      }
    else n = F.map(e => D(e, {
      showAppIcon: true
    }));
    null != E && E.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(c.Clw, {}, "separator"), E]
    }))
  }
  if (!j.TPd.TEXTUAL.has(y.type))
    if (null == E) return null;
    else n = E;
  return (0, l.jsx)(c.sNh, {
    id: "apps",
    label: w.intl.string(w.t.PHjkRE),
    listClassName: v.list,
    children: n
  })
}