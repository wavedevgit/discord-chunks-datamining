/** Chunk was on 73826 **/
/** chunk id: 570870, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk891628 = require("./891628.js");
let y = e => {
  let n, {
      commandType: t,
      commandTargetId: r,
      channel: y,
      guildId: C,
      onHeightUpdate: I,
      context: O
    } = e,
    v = (0, a.e7)([h.Z], () => h.Z.getGuild(null != C ? C : y.guild_id)),
    P = (0, a.e7)([b.default], () => b.default.getUser(r)),
    E = (0, f.Z)({
      user: P,
      guildId: null == v ? true : v.id,
      context: O
    }),
    k = i.useMemo(() => ({
      channel: y,
      type: "channel"
    }), [y]),
    {
      newUIEnabled: Z,
      searchEnabled: T
    } = g.Z.useConfig({
      location: "useAppsCommandItems"
    }),
    [N, A] = i.useState(""),
    F = "" !== N,
    {
      commands: M,
      commandsByActiveSection: R,
      sectionDescriptors: S,
      loading: H
    } = c.wi({
      context: k,
      filters: {
        text: F ? N : true,
        commandTypes: [t]
      },
      options: {
        limit: x.lr,
        includeFrecency: Z && !F,
        scoreMethod: F ? d.p.COMMAND_OR_APPLICATION : true
      },
      allowFetch: true
    }),
    {
      sections: U
    } = i.useMemo(() => {
      let e = {};
      return S.forEach(n => {
        e[n.id] = n
      }), {
        sections: e
      }
    }, [S]),
    D = i.useRef(H);
  i.useEffect(() => {
    H !== D.current && (D.current = H, null == I || I())
  }, [H, I]);
  let L = i.useCallback((e, n) => {
      let {
        showAppIcon: t
      } = n;
      o()(null != y, "menu item should not show if channel is null");
      let i = U[e.applicationId],
        a = t && null != i ? (0, p.ky)(i) : true;
      return (0, l.jsx)(s.sNh, {
        id: e.id,
        label: e.displayName,
        iconLeft: null != a ? () => (0, l.jsx)(a, {
          channel: y,
          section: i,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        icon: Z ? s.Uuj : true,
        action: () => {
          (0, u.Z)({
            command: e,
            optionValues: {},
            context: {
              channel: y,
              guild: v
            },
            commandTargetId: r
          })
        }
      }, e.id)
    }, [y, U, Z, v, r]),
    Q = i.useCallback(e => {
      let {
        section: n,
        data: t
      } = e;
      return (0, l.jsx)(s.kSQ, {
        label: _.intl.string(_.t.V0w2ap),
        children: t.map(e => L(e, {
          showAppIcon: true
        }))
      }, n.id)
    }, [L]),
    V = i.useCallback(e => {
      let {
        section: n,
        data: t
      } = e, i = (0, p.ky)(n);
      return (0, l.jsx)(s.sNh, {
        id: n.id,
        label: n.name,
        iconLeft: null != i ? () => (0, l.jsx)(i, {
          channel: y,
          section: n,
          width: 20,
          height: 20,
          selectable: false
        }) : true,
        children: t.map(e => L(e, {
          showAppIcon: false
        }))
      }, n.id)
    }, [y, L]),
    W = (0, l.jsx)(s.II_, {
      id: "command-search",
      control: (e, n) => {
        var t, i;
        return (0, l.jsx)(s.ne, (t = function(e) {
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
        }({}, e), i = i = {
          query: N,
          onChange: A,
          placeholder: _.intl.string(_.t.m1UwbP),
          ref: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
          }
          return t
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    }, "command-search");
  if (H) n = (0, l.jsx)(s.sNh, {
    id: "menu-commands-placeholder",
    render: () => (0, l.jsx)(m.Z, {}),
    disabled: true
  }, "menu-commands-placeholder");
  else {
    if (0 === M.length) n = (0, l.jsxs)(l.Fragment, {
      children: [F && (0, l.jsxs)(l.Fragment, {
        children: [W, (0, l.jsx)(s.Clw, {})]
      }), (0, l.jsx)(s.sNh, {
        id: "menu-commands-empty",
        label: _.intl.string(_.t.YSNlV2),
        disabled: true
      }, "menu-commands-empty")]
    });
    else if (Z)
      if (F) n = (0, l.jsxs)(l.Fragment, {
        children: [W, (0, l.jsx)(s.Clw, {}), M.map(e => L(e, {
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
        n = (0, l.jsxs)(l.Fragment, {
          children: [T && W, null != e && Q(e), (0, l.jsx)(s.kSQ, {
            label: _.intl.string(_.t.PHjkRE),
            children: t.map(e => V(e))
          })]
        })
      }
    else n = M.map(e => L(e, {
      showAppIcon: true
    }));
    null != E && E.length > 0 && (n = (0, l.jsxs)(l.Fragment, {
      children: [n, (0, l.jsx)(s.Clw, {}, "separator"), E]
    }))
  }
  if (!j.TPd.TEXTUAL.has(y.type))
    if (null == E) return null;
    else n = E;
  return (0, l.jsx)(s.sNh, {
    id: "apps",
    label: _.intl.string(_.t.PHjkRE),
    listClassName: w.list,
    children: n
  })
}