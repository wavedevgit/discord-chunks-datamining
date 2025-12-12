/** Chunk was on 59031 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
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
let C = e => {
  let n, {
      commandType: t,
      commandTargetId: i,
      channel: C,
      guildId: I,
      onHeightUpdate: O,
      context: v
    } = e,
    P = (0, o.e7)([m.Z], () => m.Z.getGuild(null != I ? I : C.guild_id)),
    E = (0, o.e7)([h.default], () => h.default.getUser(i)),
    k = (0, f.Z)({
      user: E,
      guildId: null == P ? true : P.id,
      context: v
    }),
    Z = l.useMemo(() => ({
      channel: C,
      type: "channel"
    }), [C]),
    {
      newUIEnabled: _,
      searchEnabled: T
    } = g.Z.useConfig({
      location: "useAppsCommandItems"
    }),
    [N, A] = l.useState(""),
    F = "" !== N,
    {
      commands: M,
      commandsByActiveSection: R,
      sectionDescriptors: S,
      loading: H
    } = s.wi({
      context: Z,
      filters: {
        text: F ? N : true,
        commandTypes: [t]
      },
      options: {
        limit: x.lr,
        includeFrecency: _ && !F,
        scoreMethod: F ? d.p.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: U
    } = l.useMemo(() => {
      let e = {};
      return S.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [S]),
    D = l.useRef(H);
  l.useEffect(() => {
    H !== D.current && (D.current = H, null == O || O())
  }, [H, O]);
  let L = l.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      r()(null != C, "menu item should not show if channel is null");
      let l = U[e.applicationId],
        o = t && null != l ? (0, p.ky)(l) : true;
      return (0, a.jsx)(c.sNh, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != o ? () => (0, a.jsx)(o, {
          channel: C,
          section: l,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: _ ? c.Uuj : true,
        action: () => {
          (0, u.Z)({
            command: e,
            optionValues: {},
            context: {
              channel: C,
              guild: P
            },
            commandTargetId: i
          })
        }
      }, e.id)
    }, [C, U, _, P, i]),
    Q = l.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, a.jsx)(c.kSQ, {
        label: w.intl.string(w.t.V0w2ap),
        children: t.map(e => L(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [L]),
    V = l.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, l = (0, p.ky)(n);
      return (0, a.jsx)(c.sNh, {
        id: n.id,
        label: n.name,
        iconLeft: null != l ? () => (0, a.jsx)(l, {
          channel: C,
          section: n,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: t.map(e => L(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [C, L]),
    W = (0, a.jsx)(c.II_, {
      id: "command-search",
      control: (e, n) => {
        var t, l;
        return (0, a.jsx)(c.ne, (t = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              a = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.forEach(function(n) {
              var a;
              a = t[n], n in e ? Object.defineProperty(e, n, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = a
            })
          }
          return e
        }({}, e), l = l = {
          query: N,
          onChange: A,
          placeholder: w.intl.string(w.t.m1UwbP),
          ref: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t.push.apply(t, a)
          }
          return t
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      }
    }, "command-search");
  if (H) n = (0, a.jsx)(c.sNh, {
    id: "menu-commands-placeholder",
    render: () => (0, a.jsx)(b.Z, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === M.length) n = (0, a.jsxs)(a.Fragment, {
      children: [F && (0, a.jsxs)(a.Fragment, {
        children: [W, (0, a.jsx)(c.Clw, {})]
      }), (0, a.jsx)(c.sNh, {
        id: "menu-commands-empty",
        label: w.intl.string(w.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (_)
      if (F) n = (0, a.jsxs)(a.Fragment, {
        children: [W, (0, a.jsx)(c.Clw, {}), M.map(e => L(e, {
          showAppIcon: true
        }))]
      });
      else {
        let e = R.find(e => {
            let {
              section: n
            } = e;
            return n.id === x.bi.FRECENCY
          }),
          t = R.filter(e => {
            let {
              section: n
            } = e;
            return n.id !== x.bi.FRECENCY
          });
        n = (0, a.jsxs)(a.Fragment, {
          children: [T && W, null != e && Q(e), (0, a.jsx)(c.kSQ, {
            label: w.intl.string(w.t.PHjkRE),
            children: t.map(e => V(e))
          })]
        })
      }
    else n = M.map(e => L(e, {
      showAppIcon: true
    }));
    null != k && k.length > 0 && (n = (0, a.jsxs)(a.Fragment, {
      children: [n, (0, a.jsx)(c.Clw, {}, "separator"), k]
    }))
  }
  if (!j.TPd.TEXTUAL.has(C.type))
    if (null == k) return null;
    else n = k;
  return (0, a.jsx)(c.sNh, {
    id: "apps",
    label: w.intl.string(w.t.PHjkRE),
    listClassName: y.list,
    children: n
  })
}